import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Calendar, Clock, MapPin, Globe, User, Star, Repeat, TrendingUp, ArrowRight, Loader, CheckCircle, Info } from 'lucide-react';

// --- CONFIGURATION: STATIC DATA ---
const CITIES_DB = [
  { name: "São Paulo, Brazil", lat: -23.5505, lng: -46.6333 },
  { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
  { name: "New York, USA", lat: 40.7128, lng: -74.0060 },
  { name: "London, UK", lat: 51.5074, lng: -0.1278 },
  { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437 },
  { name: "Mumbai, India", lat: 19.0760, lng: 72.8777 },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729 },
  { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357 },
  { name: "Beijing, China", lat: 39.9042, lng: 116.4074 },
  { name: "Moscow, Russia", lat: 55.7558, lng: 37.6173 },
  { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784 },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816 },
  { name: "Toronto, Canada", lat: 43.6510, lng: -79.3470 },
  { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050 },
  { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038 },
  { name: "Rome, Italy", lat: 41.9028, lng: 12.4964 },
  { name: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332 },
];

const PLANETS = [
  { id: 'sun', name: 'Sun', symbol: '☉', color: 0xfbbf24, cssColor: '#fbbf24', question: "Who am I?" },
  { id: 'moon', name: 'Moon', symbol: '☽', color: 0xe2e8f0, cssColor: '#e2e8f0', question: "What do I need?" },
  { id: 'mercury', name: 'Mercury', symbol: '☿', color: 0xa5f3fc, cssColor: '#a5f3fc', question: "How do I think?" },
  { id: 'venus', name: 'Venus', symbol: '♀', color: 0xf472b6, cssColor: '#f472b6', question: "What do I love?" },
  { id: 'mars', name: 'Mars', symbol: '♂', color: 0xef4444, cssColor: '#ef4444', question: "How do I act?" },
  { id: 'jupiter', name: 'Jupiter', symbol: '♃', color: 0x8b5cf6, cssColor: '#8b5cf6', question: "Where do I grow?" },
  { id: 'saturn', name: 'Saturn', symbol: '♄', color: 0x78350f, cssColor: '#78350f', question: "What do I fear?" },
  { id: 'uranus', name: 'Uranus', symbol: '♅', color: 0x22d3ee, cssColor: '#22d3ee', question: "How do I rebel?" },
  { id: 'neptune', name: 'Neptune', symbol: '♆', color: 0x60a5fa, cssColor: '#60a5fa', question: "What do I dream?" },
  { id: 'pluto', name: 'Pluto', symbol: '♇', color: 0x4c1d95, cssColor: '#4c1d95', question: "How do I transform?" }
];

const ZODIAC_DATA = [
  { name: 'Aries', answer: "Boldly" }, { name: 'Taurus', answer: "Steadily" }, { name: 'Gemini', answer: "Curiously" },
  { name: 'Cancer', answer: "Protectively" }, { name: 'Leo', answer: "Dramatically" }, { name: 'Virgo', answer: "Precisely" },
  { name: 'Libra', answer: "Harmoniously" }, { name: 'Scorpio', answer: "Intensely" }, { name: 'Sagittarius', answer: "Freely" },
  { name: 'Capricorn', answer: "Ambitiously" }, { name: 'Aquarius', answer: "Uniquely" }, { name: 'Pisces', answer: "Intuitively" }
];

const CHINESE_ZODIAC_YEARS = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

// --- UTILITIES: MATH & SAFETY ---

// 1. Crash-Proof Random Number Generator (Mulberry32)
// This guarantees we never get NaN or negative array indexes.
const mulberry32 = (a) => {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// 2. Safe Longitude Normalization
const normalizeLng = (lng) => { let n = lng % 360; if (n > 180) n -= 360; if (n < -180) n += 360; return n; };

// --- 3D ENGINE (MOBILE OPTIMIZED) ---
const AstroGlobe = ({ linesData, cityPins }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const globeRef = useRef(null);
  const frameIdRef = useRef(null);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    // Lazy load Three.js from CDN
    if (!window.THREE) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = initEngine;
        document.body.appendChild(script);
    } else {
        initEngine();
    }
    return () => {
        // Cleanup on unmount
        if(frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
        if(rendererRef.current && containerRef.current && rendererRef.current.domElement) {
             try { containerRef.current.removeChild(rendererRef.current.domElement); } catch(e){}
        }
    }
  }, []);

  // Update scene when data changes
  useEffect(() => { if(engineReady) updateScene(); }, [linesData, cityPins, engineReady]);

  const initEngine = () => {
      const THREE = window.THREE;
      if(!containerRef.current || !THREE) return;

      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f172a);

      const camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 1000);
      camera.position.z = 18;
      camera.position.y = 5;
      camera.lookAt(0,0,0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for mobile perf
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const group = new THREE.Group();
      scene.add(group);
      globeRef.current = group;

      // Earth Wireframe
      group.add(new THREE.Mesh(
          new THREE.IcosahedronGeometry(5, 2),
          new THREE.MeshBasicMaterial({ color: 0x475569, wireframe: true, transparent: true, opacity: 0.3 })
      ));
      // Blocker Sphere (Hides lines behind earth)
      group.add(new THREE.Mesh(
          new THREE.IcosahedronGeometry(4.9, 2),
          new THREE.MeshBasicMaterial({ color: 0x0f172a })
      ));

      setEngineReady(true);
      updateScene();

      const animate = () => {
          frameIdRef.current = requestAnimationFrame(animate);
          if(group) group.rotation.y += 0.001; // Auto-rotate
          renderer.render(scene, camera);
      }
      animate();
  };

  const updateScene = () => {
      const THREE = window.THREE;
      if(!globeRef.current || !THREE) return;

      // Clear dynamic objects
      globeRef.current.children = globeRef.current.children.filter(c => !c.userData.dynamic);

      // Draw Lines
      linesData?.forEach(line => {
          const curve = new THREE.EllipseCurve(0,0,5.2,5.2,0,2*Math.PI,false,0);
          const pts = curve.getPoints(32);
          const geo = new THREE.BufferGeometry().setFromPoints(pts);
          if(line.type === 'MC') geo.rotateY(line.longitudeAngle);
          else { geo.rotateX(Math.PI/3); geo.rotateY(line.longitudeAngle); }

          const mesh = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: line.planet.color, transparent: true, opacity: 0.5 }));
          mesh.userData.dynamic = true;
          globeRef.current.add(mesh);
      });

      // Draw Pins
      cityPins?.forEach(c => {
          const latRad = (90 - c.lat) * (Math.PI/180);
          const lngRad = (c.lng + 180) * (Math.PI/180);
          const r = 5.2;
          const x = -(r * Math.sin(latRad) * Math.cos(lngRad));
          const z = r * Math.sin(latRad) * Math.sin(lngRad);
          const y = r * Math.cos(latRad);

          const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 4, 4), new THREE.MeshBasicMaterial({color: 0xffffff}));
          mesh.position.set(x, y, z);
          mesh.userData.dynamic = true;
          globeRef.current.add(mesh);
      });
  };

  // 'touchAction: none' prevents scrolling the page while interacting with the globe on mobile
  return <div ref={containerRef} style={{ touchAction: 'none' }} className="w-full h-[400px] bg-[#0f172a] rounded-xl border border-slate-700" />;
};

// --- MAIN APPLICATION ---
export default function AstroLifeFinalMaster() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inputs (Defaults)
  const [name, setName] = useState('Diego');
  const [date, setDate] = useState('1987-07-18');
  const [time, setTime] = useState('23:05');
  const [cityInput, setCityInput] = useState('São Paulo, Brazil');
  const [selectedCity, setSelectedCity] = useState(CITIES_DB[0]);

  const [filteredCities, setFilteredCities] = useState([]);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const handleCityChange = (e) => {
    setCityInput(e.target.value);
    if(e.target.value.length > 0) {
        setFilteredCities(CITIES_DB.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase())));
        setShowCityDropdown(true);
    } else setShowCityDropdown(false);
  };

  const calculate = (e) => {
      e && e.preventDefault();
      setLoading(true);

      // Use timeout to ensure Loader renders before heavy logic
      setTimeout(() => {
          try {
            // 1. Generate Deterministic Seed
            const seedStr = `${name}${date}${time}${selectedCity.name}`;
            let seedVal = 0;
            for(let i=0; i<seedStr.length; i++) seedVal += seedStr.charCodeAt(i);

            // 2. Init Safe Randomizers
            const rand = mulberry32(seedVal);
            const randToday = mulberry32(seedVal + new Date().getDate()); // Today's variability

            // 3. Generate Data (Simulated for Demo)

            // Lines (Astrocartography)
            const lines = PLANETS.map((p, i) => {
                const angle = rand() * Math.PI * 2;
                return { id: i, planet: p, type: 'MC', longitudeAngle: angle, longitudeDegrees: normalizeLng((angle/Math.PI)*180) };
            });

            // Natal Chart
            const natal = PLANETS.map(p => {
                const idx = Math.floor(rand() * ZODIAC_DATA.length) % ZODIAC_DATA.length;
                const sign = ZODIAC_DATA[idx];
                return { planet: p, sign: sign, synthesis: `I ${p.question.split(' ')[2]} ${p.question.split(' ')[3].replace('?','')} ${sign.answer.toLowerCase()}` };
            });

            // Transits (Current Alignments)
            const transits = PLANETS.slice(0, 4).map(p => {
                const aspects = ['Conjunction', 'Opposition', 'Trine', 'Square'];
                const asp = aspects[Math.floor(randToday() * aspects.length) % aspects.length];
                const target = PLANETS[Math.floor(randToday() * PLANETS.length) % PLANETS.length];
                return { planet: p, aspect: asp, target: target, insight: asp === 'Trine' || asp === 'Conjunction' ? "Positive Flow" : "Growth Test" };
            });

            // Future Predictions
            const future = [
                { time: "Next Month", planet: PLANETS[1], pred: "Emotional clarity arrives." },
                { time: "In 6 Months", planet: PLANETS[5], pred: "Career expansion likely." },
                { time: "In 1 Year", planet: PLANETS[6], pred: "Structure pays off." }
            ];

            // City Matches
            const matches = lines.map(line => ({
                line, cities: CITIES_DB.filter(c => Math.abs(normalizeLng(c.lng - line.longitudeDegrees)) < 12).slice(0, 3)
            })).filter(m => m.cities.length > 0);

            // Chinese Zodiac
            const y = parseInt(date.split('-')[0]) || 2000;
            const chinese = CHINESE_ZODIAC_YEARS[y % 12];

            setData({ lines, natal, transits, future, matches, chinese });
            setLoading(false);

          } catch (err) {
              console.error(err);
              setLoading(false);
          }
      }, 500); // 500ms artificial delay for UX
  };

  // Auto-run on first load so screen isn't empty
  useEffect(() => { calculate(); }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 p-4">

      {/* HEADER */}
      <header className="max-w-5xl mx-auto flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
            <Sparkles className="text-purple-500" />
            <h1 className="font-bold text-xl">AstroLife <span className="text-purple-400">Production</span></h1>
        </div>
        {!loading && (
             <button onClick={() => setData(null)} className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1 transition-all">
                <X size={12} /> Edit Inputs
             </button>
        )}
      </header>

      {/* INPUTS FORM (Shown when editing) */}
      {!data && !loading && (
          <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in">
              <h2 className="text-xl font-bold mb-4 text-center">Chart Configuration</h2>
              <form onSubmit={calculate} className="space-y-4">
                  <input required value={name} onChange={e=>setName(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2" placeholder="Name" />
                  <div className="grid grid-cols-2 gap-4">
                      <input required type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2" />
                      <input required type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2" />
                  </div>
                  <div className="relative">
                      <input required value={cityInput} onChange={handleCityChange} onFocus={()=>cityInput&&setShowCityDropdown(true)} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2" />
                      {showCityDropdown && filteredCities.length > 0 && (
                          <ul className="absolute z-50 w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg max-h-48 overflow-y-auto shadow-xl">
                              {filteredCities.map((c,i) => (
                                  <li key={i} onClick={()=>{setCityInput(c.name); setSelectedCity(c); setShowCityDropdown(false)}} className="px-3 py-2 hover:bg-slate-700 cursor-pointer text-sm">{c.name}</li>
                              ))}
                          </ul>
                      )}
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg mt-2">Generate Analysis</button>
              </form>
          </div>
      )}

      {/* LOADING STATE */}
      {loading && (
          <div className="h-[60vh] flex flex-col items-center justify-center text-purple-400">
              <Loader className="animate-spin mb-4" size={48} />
              <p className="text-slate-400 text-sm animate-pulse">Calculating Planetary Positions...</p>
          </div>
      )}

      {/* RESULTS DASHBOARD */}
      {data && !loading && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

              {/* Profile Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-wrap gap-6 items-center shadow-xl">
                  <div className="bg-slate-800 p-4 rounded-full"><User className="text-purple-400" size={24} /></div>
                  <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white">{name}</h2>
                      <div className="flex gap-4 text-xs text-slate-400 mt-1">
                          <span className="flex items-center gap-1"><Calendar size={12}/> {date}</span>
                          <span className="flex items-center gap-1"><Clock size={12}/> {time}</span>
                          <span className="flex items-center gap-1"><MapPin size={12}/> {selectedCity.name}</span>
                      </div>
                  </div>
                  <div className="flex gap-8 text-center bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                      <div><div className="text-[10px] uppercase text-slate-500 font-bold">Sun Sign</div><div className="text-lg font-semibold text-purple-200">{data.natal[0]?.sign.name}</div></div>
                      <div className="w-px bg-slate-800"></div>
                      <div><div className="text-[10px] uppercase text-slate-500 font-bold">Chinese</div><div className="text-lg font-semibold text-purple-200">{data.chinese}</div></div>
                  </div>
              </div>

              {/* Natal Table */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
                      <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-yellow-400"><Star size={16}/> Natal Picture</div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-slate-800">
                                {data.natal.map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-800/50">
                                        <td className="p-3 text-slate-200 font-bold">{item.planet.name}</td>
                                        <td className="p-3 text-slate-400">{item.sign.name}</td>
                                        <td className="p-3 italic text-slate-500">{item.synthesis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      </div>
                  </div>

                  {/* Transits */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
                      <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2 font-bold text-emerald-400"><Repeat size={16}/> Today's Transits</div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-slate-800">
                                {data.transits.map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-800/50">
                                        <td className="p-3 text-emerald-200 font-bold">{item.planet.name}</td>
                                        <td className="p-3 text-white bg-slate-800 rounded text-center">{item.aspect}</td>
                                        <td className="p-3 text-slate-300">to {item.target.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      </div>
                  </div>
              </div>

              {/* Future & Cities */}
              <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg border-l-4 border-l-blue-500">
                        <div className="flex items-center gap-2 mb-4 font-bold text-blue-400"><TrendingUp size={16}/> Future Predictions</div>
                        <div className="space-y-3">
                            {data.future.map((f, i) => (
                                <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0">
                                    <span className="text-blue-200 font-bold">{f.time}</span>
                                    <span className="text-slate-400">{f.pred}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center gap-2 mb-4 font-bold text-pink-400"><MapPin size={16}/> Power Cities</div>
                        <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar">
                            {data.matches.map((m, i) => (
                                <div key={i} className="text-xs">
                                    <span className="text-pink-200 font-bold block mb-1">{m.line.planet.name} Line:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {m.cities.map((c, j) => (
                                            <span key={j} className="bg-slate-800 px-2 py-1 rounded border border-slate-700">{c.name.split(',')[0]}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
              </div>

              {/* Globe */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-purple-400 font-bold text-sm bg-black/50 px-3 py-1 rounded-full pointer-events-none"><Globe size={14}/> Interactive Map</div>
                  <AstroGlobe linesData={data.lines} cityPins={data.matches.flatMap(m => m.cities)} />
              </div>

              <div className="text-center text-xs text-slate-600">
                  <p>Simulation Engine • Mobile Optimized</p>
              </div>

          </div>
      )}

    </div>
  );
}
