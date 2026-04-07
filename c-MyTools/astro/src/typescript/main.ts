import type { City, FormData } from './types';
import {
  dateToJD, gmst, calculatePlanetaryPositions, mcLineLongitude,
  longitudeToSignIndex, calculateAspect, normalizeAngle, calculateMoonPhase,
  calculateLunarNodes, analyzeElements, analyzeModalities,
  getChineseZodiac, getChineseElement, getSignPosition, normalizeLng
} from './astro-calc';
import { PLANETS, ZODIAC_DATA, ASPECTS, CITIES_DB } from './astro-data';
import { initForm } from './modules/form';
import { initModal } from './modules/modal';
import { renderDashboard, hideDashboard } from './modules/dashboard';
import type { AstroData } from './types';

function showLoading(): void {
  document.getElementById('form-section')!.classList.add('hidden');
  document.getElementById('loading-section')!.classList.remove('hidden');
  document.getElementById('results-section')!.classList.add('hidden');
}

function showForm(): void {
  document.getElementById('form-section')!.classList.remove('hidden');
  document.getElementById('loading-section')!.classList.add('hidden');
  document.getElementById('results-section')!.classList.add('hidden');
  document.getElementById('edit-inputs-btn')!.classList.add('hidden');
}

function showResults(): void {
  document.getElementById('loading-section')!.classList.add('hidden');
  document.getElementById('edit-inputs-btn')!.classList.remove('hidden');
}

function calculate(formData: FormData, selectedCity: City): void {
  showLoading();

  setTimeout(() => {
    try {
      const [year, month, day] = formData.date.split('-').map(Number);
      const [hour, minute] = formData.time.split(':').map(Number);
      const hourDecimal = hour + minute / 60;

      const birthJD = dateToJD(year, month, day, hourDecimal);
      const birthGMST = gmst(birthJD);
      const natalPos = calculatePlanetaryPositions(birthJD);

      const today = new Date();
      const todayJD = dateToJD(today.getFullYear(), today.getMonth() + 1, today.getDate(), 12);
      const transitPos = calculatePlanetaryPositions(todayJD);

      // Astrocartography Lines
      const lines = PLANETS.map((p, i) => {
        const lng = natalPos[p.id];
        return {
          id: i,
          planet: p,
          type: 'MC',
          longitudeAngle: (lng * Math.PI) / 180,
          longitudeDegrees: mcLineLongitude(lng, birthGMST),
          eclipticLongitude: lng,
          signPosition: getSignPosition(lng)
        };
      });

      // Natal Chart
      const natal = PLANETS.map(p => {
        const longitude = natalPos[p.id];
        const sign = ZODIAC_DATA[longitudeToSignIndex(longitude)];
        const degInSign = normalizeAngle(longitude) % 30;
        const words = p.question.split(' ');
        const synthesis = `I ${words[2]} ${(words[3] || '').replace('?', '')} ${sign.answer.toLowerCase()}`;
        return { planet: p, sign, synthesis, longitude, degInSign, position: getSignPosition(longitude) };
      });

      // Natal Aspects
      const natalAspects: AstroData['natalAspects'] = [];
      for (let i = 0; i < PLANETS.length; i++) {
        for (let j = i + 1; j < PLANETS.length; j++) {
          const aspect = calculateAspect(natalPos[PLANETS[i].id], natalPos[PLANETS[j].id], 8);
          if (aspect && ASPECTS[aspect]) {
            natalAspects.push({ planet1: PLANETS[i], planet2: PLANETS[j], aspect, aspectInfo: ASPECTS[aspect] });
          }
        }
      }

      // Transits
      const transits: AstroData['transits'] = [];
      PLANETS.slice(0, 5).forEach(tp => {
        PLANETS.forEach(np => {
          if (tp.id === np.id) return;
          const aspect = calculateAspect(transitPos[tp.id], natalPos[np.id], 8);
          if (aspect) {
            transits.push({
              planet: tp, aspect, target: np,
              transitPos: getSignPosition(transitPos[tp.id]),
              natalPos:   getSignPosition(natalPos[np.id]),
              insight: ['Conjunction', 'Trine', 'Sextile'].includes(aspect) ? 'Harmonious' : 'Challenging'
            });
          }
        });
      });

      // Future predictions
      const future: AstroData['future'] = [
        { time: 'Next Month', planet: PLANETS[1], pred: `Moon cycle brings ${ZODIAC_DATA[longitudeToSignIndex(transitPos['moon'] + 30)].name} energy.` },
        { time: 'In 6 Months', planet: PLANETS[4], pred: `Mars enters ${ZODIAC_DATA[longitudeToSignIndex(transitPos['mars'] + 90)].name} - action time.` },
        { time: 'In 1 Year', planet: PLANETS[5], pred: `Jupiter in ${ZODIAC_DATA[longitudeToSignIndex(transitPos['jupiter'] + 30)].name} expands horizons.` }
      ];

      // City matches
      const matches = lines
        .map(line => ({
          line,
          cities: CITIES_DB.filter(c => Math.abs(normalizeLng(c.lng - line.longitudeDegrees)) < 15).slice(0, 4)
        }))
        .filter(m => m.cities.length > 0);

      // Lunar
      const nodes = calculateLunarNodes(birthJD);
      const lunar: AstroData['lunar'] = {
        phase: calculateMoonPhase(transitPos['sun'], transitPos['moon']),
        age: 0,
        northNode: nodes.north,
        southNode: nodes.south,
        northNodeSign: ZODIAC_DATA[longitudeToSignIndex(nodes.north)].name,
        southNodeSign:  ZODIAC_DATA[longitudeToSignIndex(nodes.south)].name,
        birthMoonPhase: calculateMoonPhase(natalPos['sun'], natalPos['moon'])
      };

      const signNames = natal.map(n => n.sign.name);

      const chineseZodiac  = getChineseZodiac(year);
      const chineseElement = getChineseElement(year);

      const astroData: AstroData = {
        lines, natal, natalAspects, transits: transits.slice(0, 8), future, matches,
        chinese: chineseZodiac.name,
        chineseData: { animal: chineseZodiac.name, emoji: chineseZodiac.emoji, element: chineseElement, yinYang: chineseZodiac.yinYang, traits: chineseZodiac.traits, compatible: chineseZodiac.compatible, incompatible: chineseZodiac.incompatible, luckyNumbers: chineseZodiac.luckyNumbers, luckyColors: chineseZodiac.luckyColors, description: chineseZodiac.description },
        lunar,
        elements:   analyzeElements(signNames),
        modalities: analyzeModalities(signNames),
        birthJD,
        sunSign:      ZODIAC_DATA[longitudeToSignIndex(natalPos['sun'])].name,
        moonSign:     ZODIAC_DATA[longitudeToSignIndex(natalPos['moon'])].name,
        risingApprox: ZODIAC_DATA[longitudeToSignIndex(birthGMST + selectedCity.lng)].name
      };

      renderDashboard(astroData, formData, selectedCity);
      showResults();

    } catch (err) {
      console.error('Error generating astro data:', err);
      showForm();
    }
  }, 500);
}


document.addEventListener('DOMContentLoaded', () => {
  initModal();

  const editBtn = document.getElementById('edit-inputs-btn')!;
  editBtn.addEventListener('click', () => {
    hideDashboard();
    showForm();
  });

  initForm((formData, city) => {
    calculate(formData, city);
  });

  // Auto-calculate with defaults on first load
  const defaultForm: FormData = { name: 'Diego', date: '1987-07-18', time: '23:05' };
  const defaultCity = { name: 'São Paulo, Brazil', lat: -23.5505, lng: -46.6333 };
  calculate(defaultForm, defaultCity);
});
