import type { City, FormData } from '../types';
import { CITIES_DB } from '../astro-data';

let selectedCity: City = CITIES_DB[0];
let onSubmitCallback: ((formData: FormData, city: City) => void) | null = null;

export function getSelectedCity(): City {
  return selectedCity;
}

export function initForm(onSubmit: (formData: FormData, city: City) => void): void {
  onSubmitCallback = onSubmit;

  const cityInput = document.getElementById('city-input') as HTMLInputElement;
  const dropdown  = document.getElementById('city-dropdown')!;
  const form      = document.getElementById('birth-form')!;

  // Pre-fill
  cityInput.value = selectedCity.name;

  cityInput.addEventListener('input', () => {
    const val = cityInput.value.toLowerCase();
    if (!val) { dropdown.classList.add('hidden'); return; }
    const matches = CITIES_DB.filter(c => c.name.toLowerCase().includes(val));
    renderDropdown(matches, cityInput, dropdown);
  });

  cityInput.addEventListener('focus', () => {
    const val = cityInput.value.toLowerCase();
    if (!val) return;
    const matches = CITIES_DB.filter(c => c.name.toLowerCase().includes(val));
    renderDropdown(matches, cityInput, dropdown);
  });

  document.addEventListener('click', (e) => {
    if (!cityInput.contains(e.target as Node) && !dropdown.contains(e.target as Node)) {
      dropdown.classList.add('hidden');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name-input') as HTMLInputElement).value;
    const date = (document.getElementById('date-input') as HTMLInputElement).value;
    const time = (document.getElementById('time-input') as HTMLInputElement).value;
    onSubmitCallback?.({ name, date, time }, selectedCity);
  });
}

function renderDropdown(cities: City[], input: HTMLInputElement, dropdown: HTMLElement): void {
  dropdown.innerHTML = '';
  if (!cities.length) { dropdown.classList.add('hidden'); return; }

  const ul = document.createElement('ul');
  ul.className = 'city-dropdown';
  cities.forEach(city => {
    const li = document.createElement('li');
    li.className = 'city-dropdown__item';
    li.textContent = city.name;
    li.addEventListener('click', () => {
      selectedCity = city;
      input.value = city.name;
      dropdown.classList.add('hidden');
    });
    ul.appendChild(li);
  });

  dropdown.innerHTML = '';
  dropdown.appendChild(ul);
  dropdown.classList.remove('hidden');
}
