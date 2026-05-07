"use strict";(()=>{var Zn=[{name:"S\xE3o Paulo, Brazil",lat:-23.5505,lng:-46.6333},{name:"Tokyo, Japan",lat:35.6762,lng:139.6503},{name:"New York, USA",lat:40.7128,lng:-74.006},{name:"London, UK",lat:51.5074,lng:-.1278},{name:"Paris, France",lat:48.8566,lng:2.3522},{name:"Sydney, Australia",lat:-33.8688,lng:151.2093},{name:"Los Angeles, USA",lat:34.0522,lng:-118.2437},{name:"Mumbai, India",lat:19.076,lng:72.8777},{name:"Dubai, UAE",lat:25.2048,lng:55.2708},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Rio de Janeiro, Brazil",lat:-22.9068,lng:-43.1729},{name:"Cairo, Egypt",lat:30.0444,lng:31.2357},{name:"Beijing, China",lat:39.9042,lng:116.4074},{name:"Moscow, Russia",lat:55.7558,lng:37.6173},{name:"Istanbul, Turkey",lat:41.0082,lng:28.9784},{name:"Buenos Aires, Argentina",lat:-34.6037,lng:-58.3816},{name:"Toronto, Canada",lat:43.651,lng:-79.347},{name:"Berlin, Germany",lat:52.52,lng:13.405},{name:"Madrid, Spain",lat:40.4168,lng:-3.7038},{name:"Rome, Italy",lat:41.9028,lng:12.4964},{name:"Mexico City, Mexico",lat:19.4326,lng:-99.1332}],Et=[{id:"sun",name:"Sun",symbol:"\u2609",color:16498468,cssColor:"#fbbf24",question:"Who am I?",keywords:["Identity","Ego","Vitality","Purpose","Father","Authority"],rules:["Leo"],exalted:"Aries",detriment:"Aquarius",fall:"Libra",element:"Fire",description:"The Sun represents your core identity, ego, and life purpose. It shows how you express yourself and where you shine brightest.",bodyParts:["Heart","Spine","Right Eye"],dayOfWeek:"Sunday",orbitalPeriod:"1 year"},{id:"moon",name:"Moon",symbol:"\u263D",color:14870768,cssColor:"#e2e8f0",question:"What do I need?",keywords:["Emotions","Intuition","Mother","Habits","Memory","Nurturing"],rules:["Cancer"],exalted:"Taurus",detriment:"Capricorn",fall:"Scorpio",element:"Water",description:"The Moon governs your emotional nature, instincts, and subconscious mind. It represents your inner child and emotional needs.",bodyParts:["Stomach","Breasts","Left Eye","Bodily Fluids"],dayOfWeek:"Monday",orbitalPeriod:"28 days"},{id:"mercury",name:"Mercury",symbol:"\u263F",color:10875900,cssColor:"#a5f3fc",question:"How do I think?",keywords:["Communication","Intellect","Learning","Travel","Siblings","Logic"],rules:["Gemini","Virgo"],exalted:"Virgo",detriment:"Sagittarius",fall:"Pisces",element:"Air/Earth",description:"Mercury rules communication, thought processes, and how you learn and share information.",bodyParts:["Nervous System","Lungs","Arms","Hands"],dayOfWeek:"Wednesday",orbitalPeriod:"88 days"},{id:"venus",name:"Venus",symbol:"\u2640",color:16020150,cssColor:"#f472b6",question:"What do I love?",keywords:["Love","Beauty","Harmony","Values","Money","Pleasure"],rules:["Taurus","Libra"],exalted:"Pisces",detriment:"Aries",fall:"Virgo",element:"Earth/Air",description:"Venus represents love, beauty, and what you value. It shows how you attract and relate to others.",bodyParts:["Throat","Kidneys","Skin","Veins"],dayOfWeek:"Friday",orbitalPeriod:"225 days"},{id:"mars",name:"Mars",symbol:"\u2642",color:15680580,cssColor:"#ef4444",question:"How do I act?",keywords:["Action","Desire","Aggression","Energy","Courage","Competition"],rules:["Aries","Scorpio"],exalted:"Capricorn",detriment:"Libra",fall:"Cancer",element:"Fire",description:"Mars is the warrior planet of action, desire, and drive. It shows how you assert yourself and pursue goals.",bodyParts:["Muscles","Blood","Head","Adrenal Glands"],dayOfWeek:"Tuesday",orbitalPeriod:"687 days"},{id:"jupiter",name:"Jupiter",symbol:"\u2643",color:9133302,cssColor:"#8b5cf6",question:"Where do I grow?",keywords:["Expansion","Luck","Wisdom","Philosophy","Travel","Abundance"],rules:["Sagittarius","Pisces"],exalted:"Cancer",detriment:"Gemini",fall:"Capricorn",element:"Fire",description:"Jupiter is the great benefic, bringing expansion, luck, and opportunity.",bodyParts:["Liver","Hips","Thighs","Pituitary Gland"],dayOfWeek:"Thursday",orbitalPeriod:"12 years"},{id:"saturn",name:"Saturn",symbol:"\u2644",color:7877903,cssColor:"#a8a29e",question:"What do I fear?",keywords:["Structure","Discipline","Karma","Time","Limitations","Mastery"],rules:["Capricorn","Aquarius"],exalted:"Libra",detriment:"Cancer",fall:"Aries",element:"Earth",description:"Saturn is the taskmaster, representing discipline, responsibility, and life lessons.",bodyParts:["Bones","Teeth","Skin","Knees"],dayOfWeek:"Saturday",orbitalPeriod:"29 years"},{id:"uranus",name:"Uranus",symbol:"\u2645",color:2282478,cssColor:"#22d3ee",question:"How do I rebel?",keywords:["Revolution","Innovation","Freedom","Awakening","Eccentricity","Technology"],rules:["Aquarius"],exalted:"Scorpio",detriment:"Leo",fall:"Taurus",element:"Air",description:"Uranus is the awakener, bringing sudden change, innovation, and liberation.",bodyParts:["Nervous System","Ankles","Circulation"],orbitalPeriod:"84 years"},{id:"neptune",name:"Neptune",symbol:"\u2646",color:6333946,cssColor:"#60a5fa",question:"What do I dream?",keywords:["Dreams","Illusion","Spirituality","Compassion","Art","Transcendence"],rules:["Pisces"],exalted:"Leo",detriment:"Virgo",fall:"Aquarius",element:"Water",description:"Neptune dissolves boundaries between reality and dreams. It governs spirituality, imagination, and compassion.",bodyParts:["Pineal Gland","Feet","Lymphatic System"],orbitalPeriod:"165 years"},{id:"pluto",name:"Pluto",symbol:"\u2647",color:4988309,cssColor:"#a855f7",question:"How do I transform?",keywords:["Transformation","Power","Death/Rebirth","Obsession","Shadow","Regeneration"],rules:["Scorpio"],exalted:"Aries",detriment:"Taurus",fall:"Libra",element:"Water",description:"Pluto is the planet of deep transformation, death, and rebirth.",bodyParts:["Reproductive Organs","Colon","Elimination"],orbitalPeriod:"248 years"}],at=[{name:"Aries",answer:"Boldly",symbol:"\u2648",element:"Fire",modality:"Cardinal",ruler:"Mars",dates:"Mar 21 - Apr 19",keywords:["Pioneer","Leader","Warrior","Initiator"],strengths:["Courageous","Determined","Confident","Enthusiastic","Honest"],challenges:["Impatient","Impulsive","Aggressive","Self-centered"],description:"Aries is the first sign, representing new beginnings and raw energy. Natural leaders who charge ahead fearlessly.",compatibility:["Leo","Sagittarius","Gemini","Aquarius"],bodyPart:"Head",color:"Red",cssColor:"#ef4444"},{name:"Taurus",answer:"Steadily",symbol:"\u2649",element:"Earth",modality:"Fixed",ruler:"Venus",dates:"Apr 20 - May 20",keywords:["Builder","Provider","Sensualist","Stabilizer"],strengths:["Reliable","Patient","Practical","Devoted","Sensual"],challenges:["Stubborn","Possessive","Materialistic","Resistant to change"],description:"Taurus is the builder of the zodiac, creating lasting foundations. Patient and determined.",compatibility:["Virgo","Capricorn","Cancer","Pisces"],bodyPart:"Neck/Throat",color:"Green",cssColor:"#22c55e"},{name:"Gemini",answer:"Curiously",symbol:"\u264A",element:"Air",modality:"Mutable",ruler:"Mercury",dates:"May 21 - Jun 20",keywords:["Communicator","Thinker","Connector","Storyteller"],strengths:["Adaptable","Witty","Intellectual","Versatile","Communicative"],challenges:["Inconsistent","Nervous","Superficial","Indecisive"],description:"Gemini is the messenger, forever curious and mentally active. Quick-witted and social.",compatibility:["Libra","Aquarius","Aries","Leo"],bodyPart:"Arms/Hands/Lungs",color:"Yellow",cssColor:"#eab308"},{name:"Cancer",answer:"Protectively",symbol:"\u264B",element:"Water",modality:"Cardinal",ruler:"Moon",dates:"Jun 21 - Jul 22",keywords:["Nurturer","Protector","Empath","Homemaker"],strengths:["Nurturing","Intuitive","Loyal","Protective","Imaginative"],challenges:["Moody","Clingy","Oversensitive","Manipulative"],description:"Cancer is the mother of the zodiac, deeply connected to emotions and home.",compatibility:["Scorpio","Pisces","Taurus","Virgo"],bodyPart:"Chest/Stomach",color:"Silver/White",cssColor:"#e2e8f0"},{name:"Leo",answer:"Dramatically",symbol:"\u264C",element:"Fire",modality:"Fixed",ruler:"Sun",dates:"Jul 23 - Aug 22",keywords:["Performer","Creator","King/Queen","Entertainer"],strengths:["Creative","Generous","Warm-hearted","Confident","Charismatic"],challenges:["Arrogant","Dramatic","Domineering","Attention-seeking"],description:"Leo is the performer, radiating warmth and creativity. Natural leaders with big hearts.",compatibility:["Aries","Sagittarius","Gemini","Libra"],bodyPart:"Heart/Spine",color:"Gold/Orange",cssColor:"#f59e0b"},{name:"Virgo",answer:"Precisely",symbol:"\u264D",element:"Earth",modality:"Mutable",ruler:"Mercury",dates:"Aug 23 - Sep 22",keywords:["Analyst","Healer","Perfectionist","Server"],strengths:["Analytical","Practical","Diligent","Helpful","Detail-oriented"],challenges:["Critical","Worrying","Perfectionist","Overly cautious"],description:"Virgo is the analyst, seeking to improve and perfect. Health-conscious and organized.",compatibility:["Taurus","Capricorn","Cancer","Scorpio"],bodyPart:"Digestive System",color:"Navy/Green",cssColor:"#65a30d"},{name:"Libra",answer:"Harmoniously",symbol:"\u264E",element:"Air",modality:"Cardinal",ruler:"Venus",dates:"Sep 23 - Oct 22",keywords:["Diplomat","Partner","Artist","Peacemaker"],strengths:["Diplomatic","Fair","Romantic","Charming","Aesthetic"],challenges:["Indecisive","People-pleasing","Avoids conflict","Self-pitying"],description:"Libra is the diplomat, seeking balance and harmony. Natural mediators.",compatibility:["Gemini","Aquarius","Leo","Sagittarius"],bodyPart:"Kidneys/Lower Back",color:"Pink/Blue",cssColor:"#ec4899"},{name:"Scorpio",answer:"Intensely",symbol:"\u264F",element:"Water",modality:"Fixed",ruler:"Pluto/Mars",dates:"Oct 23 - Nov 21",keywords:["Transformer","Detective","Healer","Phoenix"],strengths:["Passionate","Resourceful","Brave","Loyal","Perceptive"],challenges:["Jealous","Secretive","Manipulative","Obsessive"],description:"Scorpio is the transformer, diving deep into life's mysteries.",compatibility:["Cancer","Pisces","Virgo","Capricorn"],bodyPart:"Reproductive Organs",color:"Black/Maroon",cssColor:"#991b1b"},{name:"Sagittarius",answer:"Freely",symbol:"\u2650",element:"Fire",modality:"Mutable",ruler:"Jupiter",dates:"Nov 22 - Dec 21",keywords:["Explorer","Philosopher","Teacher","Adventurer"],strengths:["Optimistic","Adventurous","Honest","Philosophical","Generous"],challenges:["Careless","Tactless","Restless","Overconfident"],description:"Sagittarius is the explorer, seeking meaning and adventure.",compatibility:["Aries","Leo","Libra","Aquarius"],bodyPart:"Hips/Thighs",color:"Purple",cssColor:"#7c3aed"},{name:"Capricorn",answer:"Ambitiously",symbol:"\u2651",element:"Earth",modality:"Cardinal",ruler:"Saturn",dates:"Dec 22 - Jan 19",keywords:["Achiever","Authority","Builder","Elder"],strengths:["Disciplined","Responsible","Ambitious","Patient","Practical"],challenges:["Pessimistic","Workaholic","Cold","Rigid"],description:"Capricorn is the achiever, climbing steadily toward mastery.",compatibility:["Taurus","Virgo","Scorpio","Pisces"],bodyPart:"Knees/Bones",color:"Brown/Black",cssColor:"#78716c"},{name:"Aquarius",answer:"Uniquely",symbol:"\u2652",element:"Air",modality:"Fixed",ruler:"Uranus/Saturn",dates:"Jan 20 - Feb 18",keywords:["Visionary","Humanitarian","Rebel","Innovator"],strengths:["Progressive","Original","Independent","Humanitarian","Inventive"],challenges:["Detached","Unpredictable","Stubborn","Aloof"],description:"Aquarius is the visionary, seeing future possibilities.",compatibility:["Gemini","Libra","Aries","Sagittarius"],bodyPart:"Ankles/Circulation",color:"Electric Blue",cssColor:"#06b6d4"},{name:"Pisces",answer:"Intuitively",symbol:"\u2653",element:"Water",modality:"Mutable",ruler:"Neptune/Jupiter",dates:"Feb 19 - Mar 20",keywords:["Mystic","Dreamer","Healer","Artist"],strengths:["Compassionate","Artistic","Intuitive","Gentle","Wise"],challenges:["Escapist","Overly trusting","Victim mentality","Fearful"],description:"Pisces is the mystic, dissolving boundaries between worlds.",compatibility:["Cancer","Scorpio","Taurus","Capricorn"],bodyPart:"Feet",color:"Sea Green/Violet",cssColor:"#8b5cf6"}],$s={Conjunction:{name:"Conjunction",symbol:"\u260C",degrees:0,nature:"Neutral",keywords:["Fusion","Intensity","Blending","Focus"],description:"Planets merge their energies, creating a powerful focal point."},Sextile:{name:"Sextile",symbol:"\u26B9",degrees:60,nature:"Harmonious",keywords:["Opportunity","Talent","Communication","Growth"],description:"A gentle, supportive aspect that creates opportunities."},Square:{name:"Square",symbol:"\u25A1",degrees:90,nature:"Challenging",keywords:["Tension","Action","Challenge","Growth through conflict"],description:"Creates friction and tension that demands action."},Trine:{name:"Trine",symbol:"\u25B3",degrees:120,nature:"Harmonious",keywords:["Ease","Flow","Talent","Blessing"],description:"The most harmonious aspect, creating natural flow and ease."},Opposition:{name:"Opposition",symbol:"\u260D",degrees:180,nature:"Challenging",keywords:["Awareness","Balance","Projection","Integration"],description:"Creates awareness through polarity."}},Oa=[{name:"New Moon",emoji:"\u{1F311}",illumination:0,keywords:["Beginnings","Intention","Planting seeds"],description:"Time of new beginnings. Set intentions, start new projects.",bestFor:["Setting intentions","New beginnings","Meditation","Planning"]},{name:"Waxing Crescent",emoji:"\u{1F312}",illumination:12.5,keywords:["Emergence","Intention","Hope"],description:"First light appears. Take initial action on intentions.",bestFor:["Taking first steps","Building momentum","Affirmations"]},{name:"First Quarter",emoji:"\u{1F313}",illumination:25,keywords:["Action","Decision","Commitment"],description:"Time of action and decision. Push through obstacles.",bestFor:["Making decisions","Taking action","Overcoming obstacles"]},{name:"Waxing Gibbous",emoji:"\u{1F314}",illumination:37.5,keywords:["Refinement","Adjustment","Development"],description:"Refine and adjust your approach. Almost there.",bestFor:["Refining plans","Making adjustments","Patience"]},{name:"Full Moon",emoji:"\u{1F315}",illumination:50,keywords:["Culmination","Illumination","Harvest"],description:"Peak energy. Harvest results, celebrate achievements.",bestFor:["Celebrating","Releasing","Manifestation","Ritual"]},{name:"Waning Gibbous",emoji:"\u{1F316}",illumination:62.5,keywords:["Gratitude","Sharing","Teaching"],description:"Time of gratitude and sharing wisdom.",bestFor:["Gratitude practice","Sharing knowledge","Teaching"]},{name:"Last Quarter",emoji:"\u{1F317}",illumination:75,keywords:["Release","Forgiveness","Letting go"],description:"Release what didn't work. Clear space for the next cycle.",bestFor:["Releasing","Forgiving","Clearing clutter","Endings"]},{name:"Waning Crescent",emoji:"\u{1F318}",illumination:87.5,keywords:["Rest","Surrender","Healing"],description:"Time of rest and surrender. Retreat and heal.",bestFor:["Resting","Healing","Meditation","Surrender"]}],Js=[{name:"Rat",emoji:"\u{1F400}",element:"Water",yinYang:"Yang",traits:["Quick-witted","Resourceful","Versatile","Kind"],compatible:["Dragon","Monkey","Ox"],incompatible:["Horse","Goat"],luckyNumbers:[2,3],luckyColors:["Blue","Gold","Green"],description:"The Rat is clever, quick-witted, and resourceful."},{name:"Ox",emoji:"\u{1F402}",element:"Earth",yinYang:"Yin",traits:["Diligent","Dependable","Strong","Determined"],compatible:["Rat","Snake","Rooster"],incompatible:["Tiger","Dragon","Horse","Goat"],luckyNumbers:[1,4],luckyColors:["White","Yellow","Green"],description:"The Ox is strong, reliable, and fair."},{name:"Tiger",emoji:"\u{1F405}",element:"Wood",yinYang:"Yang",traits:["Brave","Competitive","Confident","Unpredictable"],compatible:["Dragon","Horse","Pig"],incompatible:["Ox","Tiger","Snake","Monkey"],luckyNumbers:[1,3,4],luckyColors:["Blue","Gray","Orange"],description:"The Tiger is brave, competitive, and confident."},{name:"Rabbit",emoji:"\u{1F407}",element:"Wood",yinYang:"Yin",traits:["Quiet","Elegant","Kind","Responsible"],compatible:["Goat","Monkey","Dog","Pig"],incompatible:["Snake","Rooster"],luckyNumbers:[3,4,6],luckyColors:["Red","Pink","Purple","Blue"],description:"The Rabbit is gentle, quiet, and elegant."},{name:"Dragon",emoji:"\u{1F409}",element:"Earth",yinYang:"Yang",traits:["Confident","Intelligent","Enthusiastic","Ambitious"],compatible:["Rooster","Rat","Monkey"],incompatible:["Ox","Goat","Dog"],luckyNumbers:[1,6,7],luckyColors:["Gold","Silver","Gray"],description:"The Dragon is powerful, ambitious, and charismatic."},{name:"Snake",emoji:"\u{1F40D}",element:"Fire",yinYang:"Yin",traits:["Enigmatic","Intelligent","Wise","Graceful"],compatible:["Dragon","Rooster","Ox"],incompatible:["Tiger","Rabbit","Snake","Goat","Pig"],luckyNumbers:[2,8,9],luckyColors:["Black","Red","Yellow"],description:"The Snake is wise, enigmatic, and intuitive."},{name:"Horse",emoji:"\u{1F434}",element:"Fire",yinYang:"Yang",traits:["Animated","Active","Energetic","Free-spirited"],compatible:["Tiger","Goat","Rabbit"],incompatible:["Rat","Ox","Rooster","Horse"],luckyNumbers:[2,3,7],luckyColors:["Yellow","Green"],description:"The Horse is energetic, free-spirited, and independent."},{name:"Goat",emoji:"\u{1F410}",element:"Earth",yinYang:"Yin",traits:["Calm","Gentle","Sympathetic","Creative"],compatible:["Rabbit","Horse","Pig"],incompatible:["Ox","Tiger","Dog"],luckyNumbers:[2,7],luckyColors:["Brown","Red","Purple"],description:"The Goat is gentle, calm, and artistic."},{name:"Monkey",emoji:"\u{1F412}",element:"Metal",yinYang:"Yang",traits:["Sharp","Smart","Curious","Mischievous"],compatible:["Ox","Rabbit"],incompatible:["Tiger","Pig"],luckyNumbers:[4,9],luckyColors:["White","Blue","Gold"],description:"The Monkey is clever, curious, and mischievous."},{name:"Rooster",emoji:"\u{1F413}",element:"Metal",yinYang:"Yin",traits:["Observant","Hardworking","Courageous","Confident"],compatible:["Ox","Snake"],incompatible:["Rat","Rabbit","Horse","Rooster","Dog"],luckyNumbers:[5,7,8],luckyColors:["Gold","Brown","Yellow"],description:"The Rooster is observant, hardworking, and courageous."},{name:"Dog",emoji:"\u{1F415}",element:"Earth",yinYang:"Yang",traits:["Loyal","Honest","Amiable","Kind"],compatible:["Rabbit"],incompatible:["Dragon","Goat","Rooster"],luckyNumbers:[3,4,9],luckyColors:["Red","Green","Purple"],description:"The Dog is loyal, honest, and kind."},{name:"Pig",emoji:"\u{1F437}",element:"Water",yinYang:"Yin",traits:["Compassionate","Generous","Diligent","Trusting"],compatible:["Tiger","Rabbit","Goat"],incompatible:["Snake","Monkey"],luckyNumbers:[2,5,8],luckyColors:["Yellow","Gray","Brown","Gold"],description:"The Pig is compassionate, generous, and diligent."}];var Ks=(i,e,t,n=0)=>{let s=i,r=e;r<=2&&(s-=1,r+=12);let o=Math.floor(s/100),a=2-o+Math.floor(o/4);return Math.floor(365.25*(s+4716))+Math.floor(30.6001*(r+1))+t+n/24+a-1524.5},Ai=i=>(i-2451545)/36525,it=i=>{let e=i%360;return e<0&&(e+=360),e},js=i=>{let e=i%360;return e>180&&(e-=360),e<-180&&(e+=360),e},Ba=i=>{let e=Ai(i),t=it(280.46646+36000.76983*e+3032e-7*e*e),s=it(357.52911+35999.05029*e-1537e-7*e*e)*Math.PI/180,r=(1.914602-.004817*e)*Math.sin(s)+(.019993-101e-6*e)*Math.sin(2*s)+289e-6*Math.sin(3*s);return it(t+r)},za=i=>{let e=Ai(i),t=it(218.3165+481267.8813*e),n=it(297.8502+445267.1115*e),s=it(134.9634+477198.8675*e),r=it(357.5291+35999.0503*e),o=it(93.2721+483202.0175*e),a=t+6.289*Math.sin(s*Math.PI/180)+1.274*Math.sin((2*n-s)*Math.PI/180)+.658*Math.sin(2*n*Math.PI/180)+.214*Math.sin(2*s*Math.PI/180)-.186*Math.sin(r*Math.PI/180)-.114*Math.sin(2*o*Math.PI/180);return it(a)},rc={mercury:{L0:252.2509,Ldot:149472.6746},venus:{L0:181.9798,Ldot:58517.8157},mars:{L0:355.433,Ldot:19140.2993},jupiter:{L0:34.3515,Ldot:3034.9057},saturn:{L0:50.0774,Ldot:1222.1138},uranus:{L0:314.055,Ldot:428.467},neptune:{L0:304.3487,Ldot:218.4862},pluto:{L0:238.929,Ldot:145.2078}},dn=(i,e)=>{if(i==="sun")return Ba(e);if(i==="moon")return za(e);let t=rc[i];return t?it(t.L0+t.Ldot*Ai(e)):0},ka=i=>{let e=Ai(i);return it(280.46061837+360.98564736629*(i-2451545)+387933e-9*e*e-e*e*e/3871e4)},kt=i=>Math.floor(it(i)/30),Ha=(i,e)=>js(i-e),Qs=i=>({sun:Ba(i),moon:za(i),mercury:dn("mercury",i),venus:dn("venus",i),mars:dn("mars",i),jupiter:dn("jupiter",i),saturn:dn("saturn",i),uranus:dn("uranus",i),neptune:dn("neptune",i),pluto:dn("pluto",i)}),er=(i,e,t=8)=>{let n=Math.abs(it(i)-it(e));return n>180&&(n=360-n),Math.abs(n-0)<=t?"Conjunction":Math.abs(n-60)<=t?"Sextile":Math.abs(n-90)<=t?"Square":Math.abs(n-120)<=t?"Trine":Math.abs(n-180)<=t?"Opposition":null},tr=(i,e)=>{let t=it(e-i);return Oa[Math.floor(t/45)%8]},Va=i=>{let e=it(125.0445-1934.1363*Ai(i));return{north:e,south:it(e+180)}},Ga=i=>{let e={fire:0,earth:0,air:0,water:0};i.forEach(n=>{let s=at.find(r=>r.name===n);s&&e[s.element.toLowerCase()]++});let t=Object.entries(e);return{...e,dominant:t.reduce((n,s)=>n[1]>s[1]?n:s)[0],lacking:t.reduce((n,s)=>n[1]<s[1]?n:s)[0]}},Wa=i=>{let e={cardinal:0,fixed:0,mutable:0};return i.forEach(t=>{let n=at.find(s=>s.name===t);n&&e[n.modality.toLowerCase()]++}),{...e,dominant:Object.entries(e).reduce((t,n)=>t[1]>n[1]?t:n)[0]}},Xa=i=>{let e=["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"];return Js.find(t=>t.name===e[i%12])||Js[0]},qa=i=>["Metal","Water","Wood","Fire","Earth"][Math.floor((i-4)/2)%5],ac=i=>{let e=Math.floor(i),t=Math.floor((i-e)*60);return`${e}\xB0${t.toString().padStart(2,"0")}'`},Ci=i=>{let e=at[kt(i)],t=it(i)%30;return`${ac(t)} ${e.name}`};var nr=Zn[0],Ya=null;function $a(i){Ya=i;let e=document.getElementById("city-input"),t=document.getElementById("city-dropdown"),n=document.getElementById("birth-form");e.value=nr.name,e.addEventListener("input",()=>{let s=e.value.toLowerCase();if(!s){t.classList.add("hidden");return}let r=Zn.filter(o=>o.name.toLowerCase().includes(s));Za(r,e,t)}),e.addEventListener("focus",()=>{let s=e.value.toLowerCase();if(!s)return;let r=Zn.filter(o=>o.name.toLowerCase().includes(s));Za(r,e,t)}),document.addEventListener("click",s=>{!e.contains(s.target)&&!t.contains(s.target)&&t.classList.add("hidden")}),n.addEventListener("submit",s=>{s.preventDefault();let r=document.getElementById("name-input").value,o=document.getElementById("date-input").value,a=document.getElementById("time-input").value;Ya?.({name:r,date:o,time:a},nr)})}function Za(i,e,t){if(t.innerHTML="",!i.length){t.classList.add("hidden");return}let n=document.createElement("ul");n.className="city-dropdown",i.forEach(s=>{let r=document.createElement("li");r.className="city-dropdown__item",r.textContent=s.name,r.addEventListener("click",()=>{nr=s,e.value=s.name,t.classList.add("hidden")}),n.appendChild(r)}),t.innerHTML="",t.appendChild(n),t.classList.remove("hidden")}var ir=null;function Ja(){return ir||(ir=document.getElementById("modal-overlay")),ir}function Oe(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function Ri(i,e){let t=document.createDocumentFragment();return i.forEach(n=>t.appendChild(Oe("span",e,n))),t}function oc(i){let e=document.createDocumentFragment(),t=Oe("p","",i.description);t.style.cssText="color:#cbd5e1;font-size:.875rem;margin-bottom:1rem",e.appendChild(t);let n=Oe("div","modal-section");n.appendChild(Oe("div","modal-section__label","Keywords"));let s=Oe("div","flex-wrap-gap");s.appendChild(Ri(i.keywords,"keyword-tag")),n.appendChild(s),e.appendChild(n);let r=Oe("div","modal-grid-2");return[["Rules:",i.rules.join(", "),""],["Exalted:",i.exalted,"grid-value--exalted"],["Detriment:",i.detriment,"grid-value--detriment"],["Fall:",i.fall,"grid-value--fall"]].forEach(([o,a,l])=>{let c=Oe("div",""),h=Oe("span","grid-label",o),u=Oe("span",`grid-value ${l}`,` ${a}`);c.appendChild(h),c.appendChild(u),r.appendChild(c)}),e.appendChild(r),e}function lc(i){let e=document.createDocumentFragment(),t=Oe("p","",i.description);t.style.cssText="color:#cbd5e1;font-size:.875rem;margin-bottom:1rem",e.appendChild(t);let n=Oe("div","modal-section");n.appendChild(Oe("div","modal-section__label","Keywords"));let s=Oe("div","flex-wrap-gap");s.appendChild(Ri(i.keywords,"keyword-tag")),n.appendChild(s),e.appendChild(n);let r=Oe("div","modal-section");r.appendChild(Oe("div","modal-section__label","Strengths"));let o=Oe("div","flex-wrap-gap");o.appendChild(Ri(i.strengths,"strength-tag")),r.appendChild(o),e.appendChild(r);let a=Oe("div","modal-section");a.appendChild(Oe("div","modal-section__label","Challenges"));let l=Oe("div","flex-wrap-gap");if(l.appendChild(Ri(i.challenges,"challenge-tag")),a.appendChild(l),e.appendChild(a),i.compatibility.length){let c=Oe("div","modal-section");c.appendChild(Oe("div","modal-section__label","Compatible with")),c.appendChild(Oe("div","",i.compatibility.join(", "))),c.lastChild.style.cssText="color:#cbd5e1;font-size:.875rem",e.appendChild(c)}return e}function cc(i){let e=document.createDocumentFragment(),t=Oe("p","",i.description);t.style.cssText="color:#cbd5e1;font-size:.875rem;margin-bottom:1rem",e.appendChild(t);let n=Oe("div","modal-grid-2");[["Element:",i.element],["Polarity:",i.yinYang]].forEach(([c,h])=>{let u=Oe("div","");u.innerHTML=`<span class="grid-label">${c}</span> <span class="grid-value">${h}</span>`,n.appendChild(u)}),e.appendChild(n);let s=Oe("div","modal-section");s.appendChild(Oe("div","modal-section__label","Traits"));let r=Oe("div","flex-wrap-gap");r.appendChild(Ri(i.traits,"keyword-tag")),s.appendChild(r),e.appendChild(s);let o=Oe("div","modal-grid-2"),a=Oe("div","");a.appendChild(Oe("div","modal-section__label","Compatible")),a.appendChild(Oe("div","grid-value--exalted",i.compatible.join(", "))),o.appendChild(a);let l=Oe("div","");if(l.appendChild(Oe("div","modal-section__label","Challenging")),l.appendChild(Oe("div","grid-value--fall",i.incompatible.join(", "))),o.appendChild(l),e.appendChild(o),i.luckyColors.length){let c=Oe("div","modal-section");c.appendChild(Oe("div","modal-section__label","Lucky Colors")),c.appendChild(Oe("div","",i.luckyColors.join(", "))),c.lastChild.style.cssText="color:#cbd5e1;font-size:.875rem",e.appendChild(c)}return e}function Pi(i,e,t,n,s){Ja().classList.remove("hidden");let o=document.getElementById("modal-title"),a=document.getElementById("modal-icon"),l=document.getElementById("modal-body");o.textContent=i,o.style.color=t,a.textContent=e,l.innerHTML="";let c;s==="planet"?c=oc(n):s==="zodiac"?c=lc(n):c=cc(n),l.appendChild(c)}function sr(){Ja()?.classList.add("hidden")}function Ka(){let i=document.getElementById("modal-overlay"),e=document.getElementById("modal-backdrop"),t=document.getElementById("modal-close");e.addEventListener("click",sr),t.addEventListener("click",sr),i.addEventListener("keydown",n=>{n.key==="Escape"&&sr()})}var hc="http://www.w3.org/2000/svg";function Pt(i,e){let t=document.createElementNS(hc,i);return Object.entries(e).forEach(([n,s])=>t.setAttribute(n,String(s))),t}var uc=["M-160,10 L-130,10 L-100,30 L-80,50 L-60,45 L-50,30 L-80,20 L-100,25 L-130,40 L-160,35 Z","M-80,-10 L-60,-5 L-40,-30 L-35,-55 L-55,-55 L-70,-35 L-80,-20 Z","M-10,35 L10,40 L30,55 L50,55 L40,45 L20,40 L0,35 Z","M-20,30 L20,30 L35,0 L30,-35 L10,-35 L-10,-20 L-20,10 Z","M40,55 L80,70 L130,65 L150,50 L140,30 L100,20 L60,25 L50,40 Z","M110,-15 L150,-20 L155,-40 L130,-45 L110,-35 Z"];function ja(i,e,t){i.innerHTML="";let n=Pt("svg",{viewBox:"-180 -90 360 180",preserveAspectRatio:"xMidYMid meet",class:"myAstro-map-svg"});n.appendChild(Pt("rect",{x:-180,y:-90,width:360,height:180,fill:"#0f172a"}));let s=Pt("g",{stroke:"#334155","stroke-width":"0.3",opacity:"0.5"});[-60,-30,0,30,60].forEach(a=>{s.appendChild(Pt("line",{x1:-180,y1:-a,x2:180,y2:-a}))}),[-150,-120,-90,-60,-30,0,30,60,90,120,150].forEach(a=>{s.appendChild(Pt("line",{x1:a,y1:-90,x2:a,y2:90}))}),n.appendChild(s);let r=Pt("g",{fill:"#1e293b",stroke:"#475569","stroke-width":"0.5"});uc.forEach(a=>{r.appendChild(Pt("path",{d:a}))}),n.appendChild(r),e.forEach(a=>{let l=Pt("g",{});l.appendChild(Pt("line",{x1:a.longitudeDegrees,y1:-90,x2:a.longitudeDegrees,y2:90,stroke:a.planet.cssColor,"stroke-width":"1.5",opacity:"0.6"}));let c=Pt("text",{x:a.longitudeDegrees,y:-80,fill:a.planet.cssColor,"font-size":"6","text-anchor":"middle","font-weight":"bold"});c.textContent=a.planet.symbol,l.appendChild(c),n.appendChild(l)}),t.forEach((a,l)=>{let c=Pt("g",{key:`city${l}`});c.appendChild(Pt("circle",{cx:a.lng,cy:-a.lat,r:3,fill:"#ffffff",stroke:"#a855f7","stroke-width":"1"}));let h=Pt("text",{x:a.lng+4,y:-a.lat+2,fill:"#e2e8f0","font-size":"4"});h.textContent=a.name.split(",")[0],c.appendChild(h),n.appendChild(c)}),i.appendChild(n);let o=document.createElement("div");o.className="map-legend",e.slice(0,5).forEach(a=>{let l=document.createElement("div");l.className="map-legend__item";let c=document.createElement("div");c.className="map-legend__dot",c.style.backgroundColor=a.planet.cssColor;let h=document.createElement("span");h.textContent=a.planet.name,l.appendChild(c),l.appendChild(h),o.appendChild(l)}),i.appendChild(o)}var Sa="162";var dc=0,Qa=1,fc=2;var Al=1,pc=2,rn=3,wn=0,At=1,on=2,bn=0,pi=1,eo=2,to=3,no=4,mc=5,zn=100,gc=101,_c=102,io=103,so=104,xc=200,yc=201,vc=202,Mc=203,zr=204,kr=205,bc=206,Sc=207,Ec=208,wc=209,Tc=210,Ac=211,Cc=212,Rc=213,Pc=214,Lc=0,Ic=1,Dc=2,_s=3,Nc=4,Uc=5,Fc=6,Oc=7,Cl=0,Bc=1,zc=2,Sn=0,kc=1,Hc=2,Vc=3,Gc=4,Wc=5,Xc=6,qc=7;var Rl=300,_i=301,xi=302,Hr=303,Vr=304,Vs=306,Gr=1e3,Wt=1001,Wr=1002,Mt=1003,ro=1004;var Li=1005;var Tt=1006,rr=1007;var Hn=1008;var En=1009,Yc=1010,Zc=1011,Ea=1012,Pl=1013,vn=1014,ln=1015,Bi=1016,Ll=1017,Il=1018,Vn=1020,$c=1021,Xt=1023,Jc=1024,Kc=1025,Gn=1026,yi=1027,jc=1028,Dl=1029,Qc=1030,Nl=1031,Ul=1033,ar=33776,or=33777,lr=33778,cr=33779,ao=35840,oo=35841,lo=35842,co=35843,Fl=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,xo=37813,yo=37814,vo=37815,Mo=37816,bo=37817,So=37818,Eo=37819,wo=37820,To=37821,hr=36492,Ao=36494,Co=36495,eh=36283,Ro=36284,Po=36285,Lo=36286;var xs=2300,ys=2301,ur=2302,Io=2400,Do=2401,No=2402;var th=3200,nh=3201,ih=0,sh=1,yn="",$t="srgb",Rn="srgb-linear",wa="display-p3",Gs="display-p3-linear",vs="linear",$e="srgb",Ms="rec709",bs="p3";var $n=7680;var Uo=519,rh=512,ah=513,oh=514,Ol=515,lh=516,ch=517,hh=518,uh=519,Fo=35044;var Oo="300 es",Xr=1035,cn=2e3,Ss=2001,Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dr=Math.PI/180,qr=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function fr(i,e,t){return(1-t)*i+t*e}function Bo(i){return(i&i-1)===0&&i!==0}function Yr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],v=s[0],f=s[3],d=s[6],b=s[1],_=s[4],w=s[7],C=s[2],A=s[5],T=s[8];return r[0]=o*v+a*b+l*C,r[3]=o*f+a*_+l*A,r[6]=o*d+a*w+l*T,r[1]=c*v+h*b+u*C,r[4]=c*f+h*_+u*A,r[7]=c*d+h*w+u*T,r[2]=p*v+m*b+g*C,r[5]=p*f+m*_+g*A,r[8]=p*d+m*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=t*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=p*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pr=new De;function Bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){let i=Es("canvas");return i.style.display="block",i}var zo={};function ph(i){i in zo||(zo[i]=!0,console.warn(i))}var ko=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ho=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[Rn]:{transfer:vs,primaries:Ms,toReference:i=>i,fromReference:i=>i},[$t]:{transfer:$e,primaries:Ms,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gs]:{transfer:vs,primaries:bs,toReference:i=>i.applyMatrix3(Ho),fromReference:i=>i.applyMatrix3(ko)},[wa]:{transfer:$e,primaries:bs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ho),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},mh=new Set([Rn,Gs]),qe={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Zi[e].toReference,s=Zi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Zi[i].primaries},getTransfer:function(i){return i===yn?vs:Zi[i].transfer}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jn,ws=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Es("canvas")),Jn.width=e.width,Jn.height=e.height;let n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gh=0,Ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gr(s[o].image)):r.push(gr(s[o]))}else r=gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _h=0,Ot=class i extends Tn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wt,s=Wt,r=Tt,o=Hn,a=Xt,l=En,c=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Wi(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Rl;Ot.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],v=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,w=(m+1)/2,C=(d+1)/2,A=(h+p)/4,T=(u+v)/4,N=(g+f)/4;return _>w&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=T/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=N/r),this.set(n,s,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-v)/b,this.z=(p-h)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zr=class extends Tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ts(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Zr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},As=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==p||c!==m||h!==g){let f=1-a,d=l*p+c*m+h*g+u*v,b=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let C=Math.sqrt(_),A=Math.atan2(C,d*b);f=Math.sin(f*A)/C,a=Math.sin(a*A)/C}let w=a*b;if(l=l*f+p*w,c=c*f+m*w,h=h*f+g*w,u=u*f+v*w,f===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*p,e[t+1]=l*g+h*p+c*u-a*m,e[t+2]=c*g+h*m+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_r=new I,Vo=new An,Wn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(r,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Ji.subVectors(this.max,Di),Kn.subVectors(e.a,Di),jn.subVectors(e.b,Di),Qn.subVectors(e.c,Di),fn.subVectors(jn,Kn),pn.subVectors(Qn,jn),In.subVectors(Kn,Qn);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-In.z,In.y,fn.z,0,-fn.x,pn.z,0,-pn.x,In.z,0,-In.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-In.y,In.x,0];return!xr(t,Kn,jn,Qn,Ji)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,Kn,jn,Qn,Ji))?!1:(Ki.crossVectors(fn,pn),t=[Ki.x,Ki.y,Ki.z],xr(t,Kn,jn,Qn,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qt=[new I,new I,new I,new I,new I,new I,new I,new I],Ht=new I,$i=new Wn,Kn=new I,jn=new I,Qn=new I,fn=new I,pn=new I,In=new I,Di=new I,Ji=new I,Ki=new I,Dn=new I;function xr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Dn.fromArray(i,r);let a=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xh=new Wn,Ni=new I,yr=new I,vi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);let t=Ni.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(yr)),this.expandByPoint(Ni.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new I,vr=new I,ji=new I,mn=new I,Mr=new I,Qi=new I,br=new I,Cs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(vr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ji),a=mn.dot(this.direction),l=-mn.dot(ji),c=mn.lengthSq(),h=Math.abs(1-o*o),u,p,m,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let v=1/h;u*=v,p*=v,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(ji,p),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);let n=en.dot(this.direction),s=en.dot(en)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,s,r){Mr.subVectors(t,e),Qi.subVectors(n,e),br.crossVectors(Mr,Qi);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,e);let l=a*this.direction.dot(Qi.crossVectors(mn,Qi));if(l<0)return null;let c=a*this.direction.dot(Mr.cross(mn));if(c<0||l+c>o)return null;let h=-a*mn.dot(br);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,p,m,g,v,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,p,m,g,v,f)}set(e,t,n,s,r,o,a,l,c,h,u,p,m,g,v,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=g,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,g=c*h,v=c*u;t[0]=p+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,g=c*h,v=c*u;t[0]=p-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+v,t[1]=l*u,t[5]=v*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-p*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=p-v*u}else if(e.order==="XZY"){let p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,vh)}lookAt(e,t,n){let s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),gn.crossVectors(n,Lt),gn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),gn.crossVectors(n,Lt)),gn.normalize(),es.crossVectors(Lt,gn),s[0]=gn.x,s[4]=es.x,s[8]=Lt.x,s[1]=gn.y,s[5]=es.y,s[9]=Lt.y,s[2]=gn.z,s[6]=es.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],v=n[6],f=n[10],d=n[14],b=n[3],_=n[7],w=n[11],C=n[15],A=s[0],T=s[4],N=s[8],V=s[12],x=s[1],E=s[5],Y=s[9],K=s[13],P=s[2],W=s[6],H=s[10],Z=s[14],G=s[3],X=s[7],te=s[11],se=s[15];return r[0]=o*A+a*x+l*P+c*G,r[4]=o*T+a*E+l*W+c*X,r[8]=o*N+a*Y+l*H+c*te,r[12]=o*V+a*K+l*Z+c*se,r[1]=h*A+u*x+p*P+m*G,r[5]=h*T+u*E+p*W+m*X,r[9]=h*N+u*Y+p*H+m*te,r[13]=h*V+u*K+p*Z+m*se,r[2]=g*A+v*x+f*P+d*G,r[6]=g*T+v*E+f*W+d*X,r[10]=g*N+v*Y+f*H+d*te,r[14]=g*V+v*K+f*Z+d*se,r[3]=b*A+_*x+w*P+C*G,r[7]=b*T+_*E+w*W+C*X,r[11]=b*N+_*Y+w*H+C*te,r[15]=b*V+_*K+w*Z+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*m-n*l*m)+v*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*p+s*o*u-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],d=e[15],b=u*f*c-v*p*c+v*l*m-a*f*m-u*l*d+a*p*d,_=g*p*c-h*f*c-g*l*m+o*f*m+h*l*d-o*p*d,w=h*v*c-g*u*c+g*a*m-o*v*m-h*a*d+o*u*d,C=g*u*l-h*v*l-g*a*p+o*v*p+h*a*f-o*u*f,A=t*b+n*_+s*w+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=b*T,e[1]=(v*p*r-u*f*r-v*s*m+n*f*m+u*s*d-n*p*d)*T,e[2]=(a*f*r-v*l*r+v*s*c-n*f*c-a*s*d+n*l*d)*T,e[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*m-n*l*m)*T,e[4]=_*T,e[5]=(h*f*r-g*p*r+g*s*m-t*f*m-h*s*d+t*p*d)*T,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*d-t*l*d)*T,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*T,e[8]=w*T,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*d-t*u*d)*T,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*d+t*a*d)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*T,e[12]=C*T,e[13]=(h*v*s-g*u*s+g*n*p-t*v*p-h*n*f+t*u*f)*T,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*f-t*a*f)*T,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*p+t*a*p)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,g=r*u,v=o*h,f=o*u,d=a*u,b=l*c,_=l*h,w=l*u,C=n.x,A=n.y,T=n.z;return s[0]=(1-(v+d))*C,s[1]=(m+w)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(m-w)*A,s[5]=(1-(p+d))*A,s[6]=(f+b)*A,s[7]=0,s[8]=(g+_)*T,s[9]=(f-b)*T,s[10]=(1-(p+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ei.set(s[0],s[1],s[2]).length(),o=ei.set(s[4],s[5],s[6]).length(),a=ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);let c=1/r,h=1/o,u=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),m,g;if(a===cn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*c,m=(n+s)*h,g,v;if(a===cn)g=(o+r)*u,v=-2*u;else if(a===Ss)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ei=new I,Vt=new rt,yh=new I(0,0,0),vh=new I(1,1,1),gn=new I,es=new I,Lt=new I,Go=new rt,Wo=new An,un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mh=0,Xo=new I,ti=new An,tn=new rt,ts=new I,Ui=new I,bh=new I,Sh=new An,qo=new I(1,0,0),Yo=new I(0,1,0),Zo=new I(0,0,1),Eh={type:"added"},wh={type:"removed"},Sr={type:"childadded",child:null},Er={type:"childremoved",child:null},Bt=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new un,n=new An,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new De}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ui,ts,this.up):tn.lookAt(ts,Ui,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(tn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh),Er.child=e,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new I(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new I,nn=new I,wr=new I,sn=new I,ni=new I,ii=new I,$o=new I,Tr=new I,Ar=new I,Cr=new I,ui=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),nn.subVectors(n,t),wr.subVectors(e,t);let o=Gt.dot(Gt),a=Gt.dot(nn),l=Gt.dot(wr),c=nn.dot(nn),h=nn.dot(wr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l)}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),nn.subVectors(e,t),Gt.cross(nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Gt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ni.subVectors(s,n),ii.subVectors(r,n),Tr.subVectors(e,n);let l=ni.dot(Tr),c=ii.dot(Tr);if(l<=0&&c<=0)return t.copy(n);Ar.subVectors(e,s);let h=ni.dot(Ar),u=ii.dot(Ar);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ni,o);Cr.subVectors(e,r);let m=ni.dot(Cr),g=ii.dot(Cr);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ii,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return $o.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector($o,a);let d=1/(f+v+p);return o=v*d,a=p*d,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=dh(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rr(o,r,e+1/3),this.g=Rr(o,r,e),this.b=Rr(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return qe.fromWorkingColorSpace(gt.copy(this),e),Math.round(_t(gt.r*255,0,255))*65536+Math.round(_t(gt.g*255,0,255))*256+Math.round(_t(gt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(gt.copy(this),t);let n=gt.r,s=gt.g,r=gt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=$t){qe.fromWorkingColorSpace(gt.copy(this),e);let t=gt.r,n=gt.g,s=gt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(ns);let n=fr(_n.h,ns.h,t),s=fr(_n.s,ns.s,t),r=fr(_n.l,ns.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new We;We.NAMES=zl;var Th=0,Xn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=pi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=kr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zr&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var st=new I,is=new He,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ph("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var Ps=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ls=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ah=0,Ut=new rt,Pr=new Bt,si=new I,It=new Wn,Fi=new Wn,ht=new I,zt=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bl(e)?Ls:Ps)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(It.min,Fi.min),It.expandByPoint(ht),ht.addVectors(It.max,Fi.max),It.expandByPoint(ht)):(It.expandByPoint(Fi.min),It.expandByPoint(Fi.max))}It.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(e,c),ht.add(si)),s=Math.max(s,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new I,l[N]=new I;let c=new I,h=new I,u=new I,p=new He,m=new He,g=new He,v=new I,f=new I;function d(N,V,x){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,x),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),m.sub(p),g.sub(p);let E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(E),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(E),a[N].add(v),a[V].add(v),a[x].add(v),l[N].add(f),l[V].add(f),l[x].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,V=b.length;N<V;++N){let x=b[N],E=x.start,Y=x.count;for(let K=E,P=E+Y;K<P;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let _=new I,w=new I,C=new I,A=new I;function T(N){C.fromBufferAttribute(s,N),A.copy(C);let V=a[N];_.copy(V),_.sub(C.multiplyScalar(C.dot(V))).normalize(),w.crossVectors(A,V);let E=w.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,E)}for(let N=0,V=b.length;N<V;++N){let x=b[N],E=x.start,Y=x.count;for(let K=E,P=E+Y;K<P;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let d=0;d<h;d++)p[g++]=c[m++]}return new Ft(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=new rt,Nn=new Cs,ss=new vi,Ko=new I,ri=new I,ai=new I,oi=new I,Lr=new I,rs=new I,as=new He,os=new He,ls=new He,jo=new I,Qo=new I,el=new I,cs=new I,hs=new I,St=class extends Bt{constructor(e=new zt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Lr.fromBufferAttribute(u,e),o?rs.addScaledVector(Lr,h):rs.addScaledVector(Lr.sub(t),h))}t.add(rs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(ss.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ss,Ko)===null||Nn.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Jo.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let f=p[g],d=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=b,C=_;w<C;w+=3){let A=a.getX(w),T=a.getX(w+1),N=a.getX(w+2);s=us(this,d,e,n,c,h,u,A,T,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){let b=a.getX(f),_=a.getX(f+1),w=a.getX(f+2);s=us(this,o,e,n,c,h,u,b,_,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let f=p[g],d=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=b,C=_;w<C;w+=3){let A=w,T=w+1,N=w+2;s=us(this,d,e,n,c,h,u,A,T,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){let b=f,_=f+1,w=f+2;s=us(this,o,e,n,c,h,u,b,_,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Ch(i,e,t,n,s,r,o,a){let l;if(e.side===At?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:i}}function us(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ri),i.getVertexPosition(l,ai),i.getVertexPosition(c,oi);let h=Ch(i,e,t,n,ri,ai,oi,cs);if(h){s&&(as.fromBufferAttribute(s,a),os.fromBufferAttribute(s,l),ls.fromBufferAttribute(s,c),h.uv=ui.getInterpolation(cs,ri,ai,oi,as,os,ls,new He)),r&&(as.fromBufferAttribute(r,a),os.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),h.uv1=ui.getInterpolation(cs,ri,ai,oi,as,os,ls,new He)),o&&(jo.fromBufferAttribute(o,a),Qo.fromBufferAttribute(o,l),el.fromBufferAttribute(o,c),h.normal=ui.getInterpolation(cs,ri,ai,oi,jo,Qo,el,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};ui.getNormal(ri,ai,oi,u.normal),h.face=u}return h}var zi=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function g(v,f,d,b,_,w,C,A,T,N,V){let x=w/T,E=C/N,Y=w/2,K=C/2,P=A/2,W=T+1,H=N+1,Z=0,G=0,X=new I;for(let te=0;te<H;te++){let se=te*E-K;for(let ue=0;ue<W;ue++){let Ce=ue*x-Y;X[v]=Ce*b,X[f]=se*_,X[d]=P,c.push(X.x,X.y,X.z),X[v]=0,X[f]=0,X[d]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(ue/T),u.push(1-te/N),Z+=1}}for(let te=0;te<N;te++)for(let se=0;se<T;se++){let ue=p+se+W*te,Ce=p+se+W*(te+1),z=p+(se+1)+W*(te+1),j=p+(se+1)+W*te;l.push(ue,Ce,j),l.push(Ce,z,j),G+=6}a.addGroup(m,G,V),m+=G,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function vt(i){let e={};for(let t=0;t<i.length;t++){let n=Mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Rh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}var Ph={clone:Mi,merge:vt},Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Is=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xn=new I,tl=new He,nl=new He,bt=class extends Is{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xn.x,xn.y).multiplyScalar(-e/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-e/xn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},li=-90,ci=1,Jr=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bt(li,ci,e,t);s.layers=this.layers,this.add(s);let r=new bt(li,ci,e,t);r.layers=this.layers,this.add(r);let o=new bt(li,ci,e,t);o.layers=this.layers,this.add(o);let a=new bt(li,ci,e,t);a.layers=this.layers,this.add(a);let l=new bt(li,ci,e,t);l.layers=this.layers,this.add(l);let c=new bt(li,ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ds=class extends Ot{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ds(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:bn});r.uniforms.tEquirect.value=t;let o=new St(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Tt),new Jr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ir=new I,Dh=new I,Nh=new De,an=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ir.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nh.getNormalMatrix(e),s=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Un=new vi,ds=new I,Ns=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],v=s[10],f=s[11],d=s[12],b=s[13],_=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,f-m,w-d).normalize(),n[1].setComponents(l+r,p+c,f+m,w+d).normalize(),n[2].setComponents(l+o,p+h,f+g,w+b).normalize(),n[3].setComponents(l-o,p-h,f-g,w-b).normalize(),n[4].setComponents(l-a,p-u,f-v,w-_).normalize(),t===cn)n[5].setComponents(l+a,p+u,f+v,w+_).normalize();else if(t===Ss)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ds.x=s.normal.x>0?e.max.x:e.min.x,ds.y=s.normal.y>0?e.max.y:e.min.y,ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,p=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,p),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let p=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,p),g.length!==0){for(let v=0,f=g.length;v<f;v++){let d=g[v];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Us=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,m=[],g=[],v=[],f=[];for(let d=0;d<h;d++){let b=d*p-o;for(let _=0;_<c;_++){let w=_*u-r;g.push(w,-b,0),v.push(0,0,1),f.push(_/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let _=b+c*d,w=b+c*(d+1),C=b+1+c*(d+1),A=b+1+c*d;m.push(_,w,A),m.push(w,C,A)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$h=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ru=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ju=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Fh,alphahash_pars_fragment:Oh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:Gh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:Zh,iridescence_fragment:$h,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,cube_uv_reflection_fragment:au,defaultnormal_vertex:ou,displacementmap_pars_vertex:lu,displacementmap_vertex:cu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Ru,envmap_vertex:xu,fog_vertex:yu,fog_pars_vertex:vu,fog_fragment:Mu,fog_pars_fragment:bu,gradientmap_pars_fragment:Su,lightmap_fragment:Eu,lightmap_pars_fragment:wu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:Cu,lights_toon_fragment:Pu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Du,lights_physical_fragment:Nu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:Bu,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Vu,map_fragment:Gu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:Zu,morphinstance_vertex:$u,morphcolor_vertex:Ju,morphnormal_vertex:Ku,morphtarget_pars_vertex:ju,morphtarget_vertex:Qu,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:sd,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:yd,shadowmap_vertex:vd,shadowmask_pars_fragment:Md,skinbase_vertex:bd,skinning_pars_vertex:Sd,skinning_vertex:Ed,skinnormal_vertex:wd,specularmap_fragment:Td,specularmap_pars_fragment:Ad,tonemapping_fragment:Cd,tonemapping_pars_fragment:Rd,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Id,uv_pars_vertex:Dd,uv_vertex:Nd,worldpos_vertex:Ud,background_vert:Fd,background_frag:Od,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:kd,cube_frag:Hd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:Zd,linedashed_frag:$d,meshbasic_vert:Jd,meshbasic_frag:Kd,meshlambert_vert:jd,meshlambert_frag:Qd,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Jt={basic:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:vt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:vt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:vt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:vt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:vt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:vt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:vt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:vt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Jt.physical={uniforms:vt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var fs={r:0,b:0,g:0},Fn=new un,_f=new rt;function xf(i,e,t,n,s,r,o){let a=new We(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(f,d){let b=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Vs)?(h===void 0&&(h=new St(new zi(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Mi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(d.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_f.makeRotationFromEuler(Fn)),h.material.toneMapped=qe.getTransfer(_.colorSpace)!==$e,(u!==_||p!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new St(new Us(2,2),new Kt({name:"BackgroundMaterial",uniforms:Mi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=qe.getTransfer(_.colorSpace)!==$e,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,p=_.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,d){f.getRGB(fs,kl(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:g}}function yf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function u(P,W,H,Z,G){let X=!1;if(o){let te=v(Z,H,W);c!==te&&(c=te,m(c.object)),X=d(P,Z,H,G),X&&b(P,Z,H,G)}else{let te=W.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==te)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=te,X=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,N(P,W,H,Z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,W,H){let Z=H.wireframe===!0,G=a[P.id];G===void 0&&(G={},a[P.id]=G);let X=G[W.id];X===void 0&&(X={},G[W.id]=X);let te=X[Z];return te===void 0&&(te=f(p()),X[Z]=te),te}function f(P){let W=[],H=[],Z=[];for(let G=0;G<s;G++)W[G]=0,H[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:H,attributeDivisors:Z,object:P,attributes:{},index:null}}function d(P,W,H,Z){let G=c.attributes,X=W.attributes,te=0,se=H.getAttributes();for(let ue in se)if(se[ue].location>=0){let z=G[ue],j=X[ue];if(j===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;te++}return c.attributesNum!==te||c.index!==Z}function b(P,W,H,Z){let G={},X=W.attributes,te=0,se=H.getAttributes();for(let ue in se)if(se[ue].location>=0){let z=X[ue];z===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let j={};j.attribute=z,z&&z.data&&(j.data=z.data),G[ue]=j,te++}c.attributes=G,c.attributesNum=te,c.index=Z}function _(){let P=c.newAttributes;for(let W=0,H=P.length;W<H;W++)P[W]=0}function w(P){C(P,0)}function C(P,W){let H=c.newAttributes,Z=c.enabledAttributes,G=c.attributeDivisors;H[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),G[P]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),G[P]=W)}function A(){let P=c.newAttributes,W=c.enabledAttributes;for(let H=0,Z=W.length;H<Z;H++)W[H]!==P[H]&&(i.disableVertexAttribArray(H),W[H]=0)}function T(P,W,H,Z,G,X,te){te===!0?i.vertexAttribIPointer(P,W,H,G,X):i.vertexAttribPointer(P,W,H,Z,G,X)}function N(P,W,H,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let G=Z.attributes,X=H.getAttributes(),te=W.defaultAttributeValues;for(let se in X){let ue=X[se];if(ue.location>=0){let Ce=G[se];if(Ce===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),Ce!==void 0){let z=Ce.normalized,j=Ce.itemSize,he=t.get(Ce);if(he===void 0)continue;let Se=he.buffer,ge=he.type,de=he.bytesPerElement,Xe=n.isWebGL2===!0&&(ge===i.INT||ge===i.UNSIGNED_INT||Ce.gpuType===Pl);if(Ce.isInterleavedBufferAttribute){let Ee=Ce.data,D=Ee.stride,ut=Ce.offset;if(Ee.isInstancedInterleavedBuffer){for(let xe=0;xe<ue.locationSize;xe++)C(ue.location+xe,Ee.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let xe=0;xe<ue.locationSize;xe++)w(ue.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let xe=0;xe<ue.locationSize;xe++)T(ue.location+xe,j/ue.locationSize,ge,z,D*de,(ut+j/ue.locationSize*xe)*de,Xe)}else{if(Ce.isInstancedBufferAttribute){for(let Ee=0;Ee<ue.locationSize;Ee++)C(ue.location+Ee,Ce.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Ee=0;Ee<ue.locationSize;Ee++)w(ue.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ee=0;Ee<ue.locationSize;Ee++)T(ue.location+Ee,j/ue.locationSize,ge,z,j*de,j/ue.locationSize*Ee*de,Xe)}}else if(te!==void 0){let z=te[se];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(ue.location,z);break;case 3:i.vertexAttrib3fv(ue.location,z);break;case 4:i.vertexAttrib4fv(ue.location,z);break;default:i.vertexAttrib1fv(ue.location,z)}}}}A()}function V(){Y();for(let P in a){let W=a[P];for(let H in W){let Z=W[H];for(let G in Z)g(Z[G].object),delete Z[G];delete W[H]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;let W=a[P.id];for(let H in W){let Z=W[H];for(let G in Z)g(Z[G].object),delete Z[G];delete W[H]}delete a[P.id]}function E(P){for(let W in a){let H=a[W];if(H[P.id]===void 0)continue;let Z=H[P.id];for(let G in Z)g(Z[G].object),delete Z[G];delete H[P.id]}}function Y(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:K,dispose:V,releaseStatesOfGeometry:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:w,disableUnusedAttributes:A}}function vf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,p),t.update(u,r,p)}function c(h,u,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Mf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,w=o||e.has("OES_texture_float"),C=_&&w,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:A}}function bf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new an,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let b=r?0:n,_=b*4,w=d.clippingState||null;l.value=w,w=h(g,p,_,m);for(let C=0;C!==_;++C)w[C]=t[C];d.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,g){let v=u!==null?u.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let d=m+v*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let _=0,w=m;_!==v;++_,w+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Sf(i){let e=new WeakMap;function t(o,a){return a===Hr?o.mapping=_i:a===Vr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hr||a===Vr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kr(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var jr=class extends Is{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},di=4,il=[.125,.215,.35,.446,.526,.582],kn=20,Dr=new jr,sl=new We,Nr=null,Ur=0,Fr=0,Bn=(1+Math.sqrt(5))/2,hi=1/Bn,rl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Bn,hi),new I(0,Bn,-hi),new I(hi,0,Bn),new I(-hi,0,Bn),new I(Bn,hi,0),new I(-Bn,hi,0)],Fs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Ur,Fr),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Bi,format:Xt,colorSpace:Rn,depthBuffer:!1},s=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(r)),this._blurMaterial=wf(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,s){let a=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(sl),h.toneMapping=Sn,h.autoClear=!1;let m=new Cn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new St(new zi,m),v=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(sl),v=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;ps(s,b*_,d>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_i||e.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Dr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rl[(s-1)%rl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):kn;f>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kn}`);let d=[],b=0;for(let T=0;T<kn;++T){let N=T/v,V=Math.exp(-N*N/2);d.push(V),T===0?b+=V:T<f&&(b+=2*V)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-n;let w=this._sizeLods[s],C=3*w*(s>_-di?s-_+di:0),A=4*(this._cubeSize-w);ps(t,C,A,3*w,2*w),l.setRenderTarget(t),l.render(u,Dr)}};function Ef(i){let e=[],t=[],n=[],s=i,r=i-di+1+il.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-di?l=il[o-i+di-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,f=2,d=1,b=new Float32Array(v*g*m),_=new Float32Array(f*g*m),w=new Float32Array(d*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,N=A>2?0:-1,V=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];b.set(V,v*g*A),_.set(p,f*g*A);let x=[A,A,A,A,A,A];w.set(x,d*g*A)}let C=new zt;C.setAttribute("position",new Ft(b,v)),C.setAttribute("uv",new Ft(_,f)),C.setAttribute("faceIndex",new Ft(w,d)),e.push(C),s>di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function al(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wf(i,e,t){let n=new Float32Array(kn),s=new I(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ol(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ll(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Hr||l===Vr,h=l===_i||l===xi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Fs(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fs(i));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Af(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cf(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let v=p.morphAttributes[g];for(let f=0,d=v.length;f<d;f++)e.remove(v[f])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let f=0,d=v.length;f<d;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let b=m.array;v=m.version;for(let _=0,w=b.length;_<w;_+=3){let C=b[_+0],A=b[_+1],T=b[_+2];p.push(C,A,A,T,T,C)}}else if(g!==void 0){let b=g.array;v=g.version;for(let _=0,w=b.length/3-1;_<w;_+=3){let C=_+0,A=_+1,T=_+2;p.push(C,A,A,T,T,C)}}else return;let f=new(Bl(p)?Ls:Ps)(p,1);f.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rf(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let f,d;if(s)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,g,a,m*l,v),t.update(g,r,v)}function p(m,g,v){if(v===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<v;d++)this.render(m[d]/l,g[d]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let d=0;for(let b=0;b<v;b++)d+=g[b];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Pf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lf(i,e){return i[0]-e[0]}function If(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Df(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let Y=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};v!==void 0&&v.texture.dispose();let f=h.morphAttributes.position!==void 0,d=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],A=0;f===!0&&(A=1),d===!0&&(A=2),b===!0&&(A=3);let T=h.attributes.position.count*A,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let V=new Float32Array(T*N*4*g),x=new As(V,T,N,g);x.type=ln,x.needsUpdate=!0;let E=A*4;for(let K=0;K<g;K++){let P=_[K],W=w[K],H=C[K],Z=T*N*4*K;for(let G=0;G<P.count;G++){let X=G*E;f===!0&&(o.fromBufferAttribute(P,G),V[Z+X+0]=o.x,V[Z+X+1]=o.y,V[Z+X+2]=o.z,V[Z+X+3]=0),d===!0&&(o.fromBufferAttribute(W,G),V[Z+X+4]=o.x,V[Z+X+5]=o.y,V[Z+X+6]=o.z,V[Z+X+7]=0),b===!0&&(o.fromBufferAttribute(H,G),V[Z+X+8]=o.x,V[Z+X+9]=o.y,V[Z+X+10]=o.z,V[Z+X+11]=H.itemSize===4?o.w:1)}}v={count:g,texture:x,size:new He(T,N)},r.set(h,v),h.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let f=0;for(let b=0;b<p.length;b++)f+=p[b];let d=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p)}u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let w=g[_];w[0]=_,w[1]=p[_]}g.sort(If);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Lf);let v=h.morphAttributes.position,f=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let w=a[_],C=w[0],A=w[1];C!==Number.MAX_SAFE_INTEGER&&A?(v&&h.getAttribute("morphTarget"+_)!==v[C]&&h.setAttribute("morphTarget"+_,v[C]),f&&h.getAttribute("morphNormal"+_)!==f[C]&&h.setAttribute("morphNormal"+_,f[C]),s[_]=A,d+=A):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Nf(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Os=class extends Ot{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=vn),n===void 0&&h===yi&&(n=Vn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vl=new Ot,Gl=new Os(1,1);Gl.compareFunction=Ol;var Wl=new As,Xl=new $r,ql=new Ds,cl=[],hl=[],ul=new Float32Array(16),dl=new Float32Array(9),fl=new Float32Array(4);function Si(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cl[s];if(r===void 0&&(r=new Float32Array(s),cl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ff(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Of(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function zf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),lt(t,n)}}function kf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;dl.set(n),i.uniformMatrix3fv(this.addr,!1,dl),lt(t,n)}}function Hf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),lt(t,n)}}function Vf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function qf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function Jf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Gl:Vl;t.setTexture2D(e||r,s)}function Kf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xl,s)}function jf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ql,s)}function Qf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wl,s)}function ep(i){switch(i){case 5126:return Uf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return qf;case 36294:return Yf;case 36295:return Zf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){let t=Si(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){let t=Si(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){let t=Si(e,this.size,4);i.uniform4fv(this.addr,t)}function rp(i,e){let t=Si(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){let t=Si(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){let t=Si(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lp(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function hp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function dp(i,e){i.uniform1uiv(this.addr,e)}function fp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function gp(i,e,t){let n=this.cache,s=e.length,r=Ws(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vl,r[o])}function _p(i,e,t){let n=this.cache,s=e.length,r=Ws(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xl,r[o])}function xp(i,e,t){let n=this.cache,s=e.length,r=Ws(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ql,r[o])}function yp(i,e,t){let n=this.cache,s=e.length,r=Ws(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wl,r[o])}function vp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return yp}}var Qr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}},ea=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vp(t.type)}},ta=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Or=/(\w+)(\])?(\[|\.)?/g;function pl(i,e){i.seq.push(e),i.map[e.id]=e}function Mp(i,e,t){let n=i.name,s=n.length;for(Or.lastIndex=0;;){let r=Or.exec(n),o=Or.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pl(t,c===void 0?new Qr(a,i,e):new ea(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ta(a),pl(t,u)),t=u}}}var gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ml(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bp=37297,Sp=0;function Ep(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wp(i){let e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i),n;switch(e===t?n="":e===bs&&t===Ms?n="LinearDisplayP3ToLinearSRGB":e===Ms&&t===bs&&(n="LinearSRGBToLinearDisplayP3"),i){case Rn:case Gs:return[n,"LinearTransferOETF"];case $t:case wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ep(i.getShaderSource(e),o)}else return s}function Tp(i,e){let t=wp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ap(i,e){let t;switch(e){case kc:t="Linear";break;case Hc:t="Reinhard";break;case Vc:t="OptimizedCineon";break;case Gc:t="ACESFilmic";break;case Xc:t="AgX";break;case qc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fi).join(`
`)}function Pp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fi(i){return i!==""}function _l(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(i){return i.replace(Ip,Np)}var Dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Np(i,e){let t=Ie[e];if(t===void 0){let n=Dp.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}var Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(Up,Fp)}function Fp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Bc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function Hp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Op(t),c=Bp(t),h=zp(t),u=kp(t),p=Hp(t),m=t.isWebGL2?"":Cp(t),g=Rp(t),v=Pp(r),f=s.createProgram(),d,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fi).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fi).join(`
`),b.length>0&&(b+=`
`)):(d=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fi).join(`
`),b=[m,vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Tp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fi).join(`
`)),o=na(o),o=_l(o,t),o=xl(o,t),a=na(a),a=_l(a,t),a=xl(a,t),o=yl(o),a=yl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=_+d+o,C=_+b+a,A=ml(s,s.VERTEX_SHADER,w),T=ml(s,s.FRAGMENT_SHADER,C);s.attachShader(f,A),s.attachShader(f,T),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function N(Y){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(f).trim(),P=s.getShaderInfoLog(A).trim(),W=s.getShaderInfoLog(T).trim(),H=!0,Z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,A,T);else{let G=gl(s,A,"vertex"),X=gl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+G+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||W==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:H,programLog:K,vertexShader:{log:P,prefix:d},fragmentShader:{log:W,prefix:b}})}s.deleteShader(A),s.deleteShader(T),V=new gi(s,f),x=Lp(s,f)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(f,bp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=T,this}var Gp=0,ia=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sa(e),t.set(e,n)),n}},sa=class{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}};function Wp(i,e,t,n,s,r,o){let a=new Rs,l=new ia,c=new Set,h=[],u=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,E,Y,K,P){let W=K.fog,H=P.geometry,Z=x.isMeshStandardMaterial?K.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),X=G&&G.mapping===Vs?G.image.height:null,te=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=se!==void 0?se.length:0,Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let z,j,he,Se;if(te){let Ye=Jt[te];z=Ye.vertexShader,j=Ye.fragmentShader}else z=x.vertexShader,j=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),Se=l.getFragmentShaderID(x);let ge=i.getRenderTarget(),de=P.isInstancedMesh===!0,Xe=P.isBatchedMesh===!0,Ee=!!x.map,D=!!x.matcap,ut=!!G,xe=!!x.aoMap,Fe=!!x.lightMap,ve=!!x.bumpMap,Ve=!!x.normalMap,Ne=!!x.displacementMap,Be=!!x.emissiveMap,et=!!x.metalnessMap,S=!!x.roughnessMap,y=x.anisotropy>0,k=x.clearcoat>0,q=x.iridescence>0,Q=x.sheen>0,J=x.transmission>0,Re=y&&!!x.anisotropyMap,Me=k&&!!x.clearcoatMap,re=k&&!!x.clearcoatNormalMap,oe=k&&!!x.clearcoatRoughnessMap,Pe=q&&!!x.iridescenceMap,ee=q&&!!x.iridescenceThicknessMap,nt=Q&&!!x.sheenColorMap,ze=Q&&!!x.sheenRoughnessMap,_e=!!x.specularMap,fe=!!x.specularColorMap,pe=!!x.specularIntensityMap,Ge=J&&!!x.transmissionMap,Te=J&&!!x.thicknessMap,Je=!!x.gradientMap,R=!!x.alphaMap,ae=x.alphaTest>0,F=!!x.alphaHash,ne=!!x.extensions,le=Sn;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(le=i.toneMapping);let ke={isWebGL2:u,shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:j,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Xe,instancing:de,instancingColor:de&&P.instanceColor!==null,instancingMorph:de&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Rn,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:D,envMap:ut,envMapMode:ut&&G.mapping,envMapCubeUVHeight:X,aoMap:xe,lightMap:Fe,bumpMap:ve,normalMap:Ve,displacementMap:m&&Ne,emissiveMap:Be,normalMapObjectSpace:Ve&&x.normalMapType===sh,normalMapTangentSpace:Ve&&x.normalMapType===ih,metalnessMap:et,roughnessMap:S,anisotropy:y,anisotropyMap:Re,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:q,iridescenceMap:Pe,iridescenceThicknessMap:ee,sheen:Q,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:_e,specularColorMap:fe,specularIntensityMap:pe,transmission:J,transmissionMap:Ge,thicknessMap:Te,gradientMap:Je,opaque:x.transparent===!1&&x.blending===pi&&x.alphaToCoverage===!1,alphaMap:R,alphaTest:ae,alphaHash:F,combine:x.combine,mapUv:Ee&&f(x.map.channel),aoMapUv:xe&&f(x.aoMap.channel),lightMapUv:Fe&&f(x.lightMap.channel),bumpMapUv:ve&&f(x.bumpMap.channel),normalMapUv:Ve&&f(x.normalMap.channel),displacementMapUv:Ne&&f(x.displacementMap.channel),emissiveMapUv:Be&&f(x.emissiveMap.channel),metalnessMapUv:et&&f(x.metalnessMap.channel),roughnessMapUv:S&&f(x.roughnessMap.channel),anisotropyMapUv:Re&&f(x.anisotropyMap.channel),clearcoatMapUv:Me&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&f(x.sheenRoughnessMap.channel),specularMapUv:_e&&f(x.specularMap.channel),specularColorMapUv:fe&&f(x.specularColorMap.channel),specularIntensityMapUv:pe&&f(x.specularIntensityMap.channel),transmissionMapUv:Ge&&f(x.transmissionMap.channel),thicknessMapUv:Te&&f(x.thicknessMap.channel),alphaMapUv:R&&f(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(Ee||R),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===At,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ne&&x.extensions.derivatives===!0,extensionFragDepth:ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function b(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let Y in x.defines)E.push(Y),E.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(_(E,x),w(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.instancingMorph&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.normalMapObjectSpace&&a.enable(7),E.normalMapTangentSpace&&a.enable(8),E.clearcoat&&a.enable(9),E.iridescence&&a.enable(10),E.alphaTest&&a.enable(11),E.vertexColors&&a.enable(12),E.vertexAlphas&&a.enable(13),E.vertexUv1s&&a.enable(14),E.vertexUv2s&&a.enable(15),E.vertexUv3s&&a.enable(16),E.vertexTangents&&a.enable(17),E.anisotropy&&a.enable(18),E.alphaHash&&a.enable(19),E.batching&&a.enable(20),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){let E=v[x.type],Y;if(E){let K=Jt[E];Y=Ph.clone(K.uniforms)}else Y=x.uniforms;return Y}function A(x,E){let Y;for(let K=0,P=h.length;K<P;K++){let W=h[K];if(W.cacheKey===E){Y=W,++Y.usedTimes;break}}return Y===void 0&&(Y=new Vp(i,E,x,r),h.push(Y)),Y}function T(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function N(x){l.remove(x)}function V(){l.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:h,dispose:V}}function Xp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,g,v,f){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=f),e++,d}function a(u,p,m,g,v,f){let d=o(u,p,m,g,v,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,p,m,g,v,f){let d=o(u,p,m,g,v,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||qp),n.length>1&&n.sort(p||Ml),s.length>1&&s.sort(p||Ml)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Yp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new bl,i.set(n,[o])):s>=r.length?(o=new bl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function $p(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jp=0;function Kp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jp(i,e){let t=new Zp,n=$p(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new rt,a=new rt;function l(h,u){let p=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let v=0,f=0,d=0,b=0,_=0,w=0,C=0,A=0,T=0,N=0,V=0;h.sort(Kp);let x=u===!0?Math.PI:1;for(let Y=0,K=h.length;Y<K;Y++){let P=h[Y],W=P.color,H=P.intensity,Z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=W.r*H*x,m+=W.g*H*x,g+=W.b*H*x;else if(P.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(P.sh.coefficients[X],H);V++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){let te=P.shadow,se=n.get(P);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.directionalShadow[v]=se,s.directionalShadowMap[v]=G,s.directionalShadowMatrix[v]=P.shadow.matrix,w++}s.directional[v]=X,v++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(W).multiplyScalar(H*x),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,s.spot[d]=X;let te=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,te.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[d]=te.matrix,P.castShadow){let se=n.get(P);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.spotShadow[d]=se,s.spotShadowMap[d]=G,A++}d++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(W).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),s.rectArea[b]=X,b++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),X.distance=P.distance,X.decay=P.decay,P.castShadow){let te=P.shadow,se=n.get(P);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,s.pointShadow[f]=se,s.pointShadowMap[f]=G,s.pointShadowMatrix[f]=P.shadow.matrix,C++}s.point[f]=X,f++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(H*x),X.groundColor.copy(P.groundColor).multiplyScalar(H*x),s.hemi[_]=X,_++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;let E=s.hash;(E.directionalLength!==v||E.pointLength!==f||E.spotLength!==d||E.rectAreaLength!==b||E.hemiLength!==_||E.numDirectionalShadows!==w||E.numPointShadows!==C||E.numSpotShadows!==A||E.numSpotMaps!==T||E.numLightProbes!==V)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=b,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+T-N,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=V,E.directionalLength=v,E.pointLength=f,E.spotLength=d,E.rectAreaLength=b,E.hemiLength=_,E.numDirectionalShadows=w,E.numPointShadows=C,E.numSpotShadows=A,E.numSpotMaps=T,E.numLightProbes=V,s.version=Jp++)}function c(h,u){let p=0,m=0,g=0,v=0,f=0,d=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let w=h[b];if(w.isDirectionalLight){let C=s.directional[p];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),p++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let C=s.rectArea[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let C=s.hemi[f];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:s}}function Sl(i,e){let t=new jp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Qp(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Sl(i,e),t.set(r,[l])):o>=a.length?(l=new Sl(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var ra=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},aa=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(i,e,t){let n=new Ns,s=new He,r=new He,o=new ft,a=new ra({depthPacking:nh}),l=new aa,c={},h=t.maxTextureSize,u={[wn]:At,[At]:wn,[on]:on},p=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:em,fragmentShader:tm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let d=this.type;this.render=function(A,T,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let V=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(bn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=d!==rn&&this.type===rn,P=d===rn&&this.type!==rn;for(let W=0,H=A.length;W<H;W++){let Z=A[W],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let X=G.getFrameExtents();if(s.multiply(X),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,G.mapSize.y=r.y)),G.map===null||K===!0||P===!0){let se=this.type!==rn?{minFilter:Mt,magFilter:Mt}:{};G.map!==null&&G.map.dispose(),G.map=new hn(s.x,s.y,se),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let te=G.getViewportCount();for(let se=0;se<te;se++){let ue=G.getViewport(se);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),Y.viewport(o),G.updateMatrices(Z,se),n=G.getFrustum(),w(T,N,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===rn&&b(G,N),G.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(V,x,E)};function b(A,T){let N=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,N,p,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,N,m,v,null)}function _(A,T,N,V){let x=null,E=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=N.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=x.uuid,K=T.uuid,P=c[Y];P===void 0&&(P={},c[Y]=P);let W=P[K];W===void 0&&(W=x.clone(),P[K]=W,T.addEventListener("dispose",C)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,V===rn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let Y=i.properties.get(x);Y.light=N}return x}function w(A,T,N,V,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let K=e.update(A),P=A.material;if(Array.isArray(P)){let W=K.groups;for(let H=0,Z=W.length;H<Z;H++){let G=W[H],X=P[G.materialIndex];if(X&&X.visible){let te=_(A,X,V,x);A.onBeforeShadow(i,A,T,N,K,te,G),i.renderBufferDirect(N,null,K,te,A,G),A.onAfterShadow(i,A,T,N,K,te,G)}}}else if(P.visible){let W=_(A,P,V,x);A.onBeforeShadow(i,A,T,N,K,W,null),i.renderBufferDirect(N,null,K,W,A,null),A.onAfterShadow(i,A,T,N,K,W,null)}}let Y=A.children;for(let K=0,P=Y.length;K<P;K++)w(Y[K],T,N,V,x)}function C(A){A.target.removeEventListener("dispose",C);for(let N in c){let V=c[N],x=A.target.uuid;x in V&&(V[x].dispose(),delete V[x])}}}function im(i,e,t){let n=t.isWebGL2;function s(){let R=!1,ae=new ft,F=null,ne=new ft(0,0,0,0);return{setMask:function(le){F!==le&&!R&&(i.colorMask(le,le,le,le),F=le)},setLocked:function(le){R=le},setClear:function(le,ke,Ye,dt,Dt){Dt===!0&&(le*=dt,ke*=dt,Ye*=dt),ae.set(le,ke,Ye,dt),ne.equals(ae)===!1&&(i.clearColor(le,ke,Ye,dt),ne.copy(ae))},reset:function(){R=!1,F=null,ne.set(-1,0,0,0)}}}function r(){let R=!1,ae=null,F=null,ne=null;return{setTest:function(le){le?de(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!R&&(i.depthMask(le),ae=le)},setFunc:function(le){if(F!==le){switch(le){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Uc:i.depthFunc(i.GEQUAL);break;case Fc:i.depthFunc(i.GREATER);break;case Oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=le}},setLocked:function(le){R=le},setClear:function(le){ne!==le&&(i.clearDepth(le),ne=le)},reset:function(){R=!1,ae=null,F=null,ne=null}}}function o(){let R=!1,ae=null,F=null,ne=null,le=null,ke=null,Ye=null,dt=null,Dt=null;return{setTest:function(Ze){R||(Ze?de(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!R&&(i.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,yt,Zt){(F!==Ze||ne!==yt||le!==Zt)&&(i.stencilFunc(Ze,yt,Zt),F=Ze,ne=yt,le=Zt)},setOp:function(Ze,yt,Zt){(ke!==Ze||Ye!==yt||dt!==Zt)&&(i.stencilOp(Ze,yt,Zt),ke=Ze,Ye=yt,dt=Zt)},setLocked:function(Ze){R=Ze},setClear:function(Ze){Dt!==Ze&&(i.clearStencil(Ze),Dt=Ze)},reset:function(){R=!1,ae=null,F=null,ne=null,le=null,ke=null,Ye=null,dt=null,Dt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,p={},m={},g=new WeakMap,v=[],f=null,d=!1,b=null,_=null,w=null,C=null,A=null,T=null,N=null,V=new We(0,0,0),x=0,E=!1,Y=null,K=null,P=null,W=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),G=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),G=X>=2);let se=null,ue={},Ce=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),j=new ft().fromArray(Ce),he=new ft().fromArray(z);function Se(R,ae,F,ne){let le=new Uint8Array(4),ke=i.createTexture();i.bindTexture(R,ke),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<F;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ke}let ge={};ge[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(_s),Ne(!1),Be(Qa),de(i.CULL_FACE),ve(bn);function de(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Xe(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Ee(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(R,ae){let F=v,ne=!1;if(R){F=g.get(ae),F===void 0&&(F=[],g.set(ae,F));let le=R.textures;if(F.length!==le.length||F[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,Ye=le.length;ke<Ye;ke++)F[ke]=i.COLOR_ATTACHMENT0+ke;F.length=le.length,ne=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ut(R){return f!==R?(i.useProgram(R),f=R,!0):!1}let xe={[zn]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[io]=i.MIN,xe[so]=i.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(xe[io]=R.MIN_EXT,xe[so]=R.MAX_EXT)}let Fe={[xc]:i.ZERO,[yc]:i.ONE,[vc]:i.SRC_COLOR,[zr]:i.SRC_ALPHA,[Tc]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[kr]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Cc]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(R,ae,F,ne,le,ke,Ye,dt,Dt,Ze){if(R===bn){d===!0&&(Xe(i.BLEND),d=!1);return}if(d===!1&&(de(i.BLEND),d=!0),R!==mc){if(R!==b||Ze!==E){if((_!==zn||A!==zn)&&(i.blendEquation(i.FUNC_ADD),_=zn,A=zn),Ze)switch(R){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,C=null,T=null,N=null,V.set(0,0,0),x=0,b=R,E=Ze}return}le=le||ae,ke=ke||F,Ye=Ye||ne,(ae!==_||le!==A)&&(i.blendEquationSeparate(xe[ae],xe[le]),_=ae,A=le),(F!==w||ne!==C||ke!==T||Ye!==N)&&(i.blendFuncSeparate(Fe[F],Fe[ne],Fe[ke],Fe[Ye]),w=F,C=ne,T=ke,N=Ye),(dt.equals(V)===!1||Dt!==x)&&(i.blendColor(dt.r,dt.g,dt.b,Dt),V.copy(dt),x=Dt),b=R,E=!1}function Ve(R,ae){R.side===on?Xe(i.CULL_FACE):de(i.CULL_FACE);let F=R.side===At;ae&&(F=!F),Ne(F),R.blending===pi&&R.transparent===!1?ve(bn):ve(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let ne=R.stencilWrite;c.setTest(ne),ne&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),S(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){Y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),Y=R)}function Be(R){R!==dc?(de(i.CULL_FACE),R!==K&&(R===Qa?i.cullFace(i.BACK):R===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),K=R}function et(R){R!==P&&(G&&i.lineWidth(R),P=R)}function S(R,ae,F){R?(de(i.POLYGON_OFFSET_FILL),(W!==ae||H!==F)&&(i.polygonOffset(ae,F),W=ae,H=F)):Xe(i.POLYGON_OFFSET_FILL)}function y(R){R?de(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function k(R){R===void 0&&(R=i.TEXTURE0+Z-1),se!==R&&(i.activeTexture(R),se=R)}function q(R,ae,F){F===void 0&&(se===null?F=i.TEXTURE0+Z-1:F=se);let ne=ue[F];ne===void 0&&(ne={type:void 0,texture:void 0},ue[F]=ne),(ne.type!==R||ne.texture!==ae)&&(se!==F&&(i.activeTexture(F),se=F),i.bindTexture(R,ae||ge[R]),ne.type=R,ne.texture=ae)}function Q(){let R=ue[se];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(R){j.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function pe(R){he.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function Ge(R,ae){let F=u.get(ae);F===void 0&&(F=new WeakMap,u.set(ae,F));let ne=F.get(R);ne===void 0&&(ne=i.getUniformBlockIndex(ae,R.name),F.set(R,ne))}function Te(R,ae){let ne=u.get(ae).get(R);h.get(ae)!==ne&&(i.uniformBlockBinding(ae,ne,R.__bindingPointIndex),h.set(ae,ne))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},se=null,ue={},m={},g=new WeakMap,v=[],f=null,d=!1,b=null,_=null,w=null,C=null,A=null,T=null,N=null,V=new We(0,0,0),x=0,E=!1,Y=null,K=null,P=null,W=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Xe,bindFramebuffer:Ee,drawBuffers:D,useProgram:ut,setBlending:ve,setMaterial:Ve,setFlipSided:Ne,setCullFace:Be,setLineWidth:et,setPolygonOffset:S,setScissorTest:y,activeTexture:k,bindTexture:q,unbindTexture:Q,compressedTexImage2D:J,compressedTexImage3D:Re,texImage2D:ze,texImage3D:_e,updateUBOMapping:Ge,uniformBlockBinding:Te,texStorage2D:ee,texStorage3D:nt,texSubImage2D:Me,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:Pe,scissor:fe,viewport:pe,reset:Je}}function sm(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new He,u=new WeakMap,p,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,y){return g?new OffscreenCanvas(S,y):Es("canvas")}function f(S,y,k,q){let Q=1,J=et(S);if((J.width>q||J.height>q)&&(Q=q/Math.max(J.width,J.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Re=y?Yr:Math.floor,Me=Re(Q*J.width),re=Re(Q*J.height);p===void 0&&(p=v(Me,re));let oe=k?v(Me,re):p;return oe.width=Me,oe.height=re,oe.getContext("2d").drawImage(S,0,0,Me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Me+"x"+re+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function d(S){let y=et(S);return Bo(y.width)&&Bo(y.height)}function b(S){return a?!1:S.wrapS!==Wt||S.wrapT!==Wt||S.minFilter!==Mt&&S.minFilter!==Tt}function _(S,y){return S.generateMipmaps&&y&&S.minFilter!==Mt&&S.minFilter!==Tt}function w(S){i.generateMipmap(S)}function C(S,y,k,q,Q=!1){if(a===!1)return y;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=y;if(y===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),y===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),y===i.RGBA){let Re=Q?vs:qe.getTransfer(q);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Re===$e?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(S,y,k){return _(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==Mt&&S.minFilter!==Tt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){return S===Mt||S===ro||S===Li?i.NEAREST:i.LINEAR}function N(S){let y=S.target;y.removeEventListener("dispose",N),x(y),y.isVideoTexture&&u.delete(y)}function V(S){let y=S.target;y.removeEventListener("dispose",V),Y(y)}function x(S){let y=n.get(S);if(y.__webglInit===void 0)return;let k=S.source,q=m.get(k);if(q){let Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(S),Object.keys(q).length===0&&m.delete(k)}n.remove(S)}function E(S){let y=n.get(S);i.deleteTexture(y.__webglTexture);let k=S.source,q=m.get(k);delete q[y.__cacheKey],o.memory.textures--}function Y(S){let y=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=S.textures;for(let q=0,Q=k.length;q<Q;q++){let J=n.get(k[q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(S)}let K=0;function P(){K=0}function W(){let S=K;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),K+=1,S}function H(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function Z(S,y){let k=n.get(S);if(S.isVideoTexture&&Ne(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,S,y);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function G(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){he(k,S,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function X(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){he(k,S,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function te(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){Se(k,S,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let se={[Gr]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},ue={[Mt]:i.NEAREST,[ro]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Ce={[rh]:i.NEVER,[uh]:i.ALWAYS,[ah]:i.LESS,[Ol]:i.LEQUAL,[oh]:i.EQUAL,[hh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function z(S,y,k){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Tt||y.magFilter===rr||y.magFilter===Li||y.magFilter===Hn||y.minFilter===Tt||y.minFilter===rr||y.minFilter===Li||y.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(i.texParameteri(S,i.TEXTURE_WRAP_S,se[y.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,se[y.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,se[y.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ue[y.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Wt||y.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Mt&&y.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mt||y.minFilter!==Li&&y.minFilter!==Hn||y.type===ln&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Bi&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function j(S,y){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",N));let q=y.source,Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));let J=H(y);if(J!==S.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[J].usedTimes++;let Re=Q[S.__cacheKey];Re!==void 0&&(Q[S.__cacheKey].usedTimes--,Re.usedTimes===0&&E(y)),S.__cacheKey=J,S.__webglTexture=Q[J].texture}return k}function he(S,y,k){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let Q=j(S,y),J=y.source;t.bindTexture(q,S.__webglTexture,i.TEXTURE0+k);let Re=n.get(J);if(J.version!==Re.__version||Q===!0){t.activeTexture(i.TEXTURE0+k);let Me=qe.getPrimaries(qe.workingColorSpace),re=y.colorSpace===yn?null:qe.getPrimaries(y.colorSpace),oe=y.colorSpace===yn||Me===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Pe=b(y)&&d(y.image)===!1,ee=f(y.image,Pe,!1,s.maxTextureSize);ee=Be(y,ee);let nt=d(ee)||a,ze=r.convert(y.format,y.colorSpace),_e=r.convert(y.type),fe=C(y.internalFormat,ze,_e,y.colorSpace,y.isVideoTexture);z(q,y,nt);let pe,Ge=y.mipmaps,Te=a&&y.isVideoTexture!==!0&&fe!==Fl,Je=Re.__version===void 0||Q===!0,R=J.dataReady,ae=A(y,ee,nt);if(y.isDepthTexture)fe=i.DEPTH_COMPONENT,a?y.type===ln?fe=i.DEPTH_COMPONENT32F:y.type===vn?fe=i.DEPTH_COMPONENT24:y.type===Vn?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:y.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Gn&&fe===i.DEPTH_COMPONENT&&y.type!==Ea&&y.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=vn,_e=r.convert(y.type)),y.format===yi&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,y.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vn,_e=r.convert(y.type))),Je&&(Te?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ze,_e,null));else if(y.isDataTexture)if(Ge.length>0&&nt){Te&&Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,Ge[0].width,Ge[0].height);for(let F=0,ne=Ge.length;F<ne;F++)pe=Ge[F],Te?R&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,_e,pe.data):t.texImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,ze,_e,pe.data);y.generateMipmaps=!1}else Te?(Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ze,_e,ee.data)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ze,_e,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Te&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,Ge[0].width,Ge[0].height,ee.depth);for(let F=0,ne=Ge.length;F<ne;F++)pe=Ge[F],y.format!==Xt?ze!==null?Te?R&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ee.depth,ze,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,fe,pe.width,pe.height,ee.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ee.depth,ze,_e,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,fe,pe.width,pe.height,ee.depth,0,ze,_e,pe.data)}else{Te&&Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,Ge[0].width,Ge[0].height);for(let F=0,ne=Ge.length;F<ne;F++)pe=Ge[F],y.format!==Xt?ze!==null?Te?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?R&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,_e,pe.data):t.texImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,ze,_e,pe.data)}else if(y.isDataArrayTexture)Te?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,ee.width,ee.height,ee.depth),R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ze,_e,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,ze,_e,ee.data);else if(y.isData3DTexture)Te?(Je&&t.texStorage3D(i.TEXTURE_3D,ae,fe,ee.width,ee.height,ee.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ze,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,ze,_e,ee.data);else if(y.isFramebufferTexture){if(Je)if(Te)t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height);else{let F=ee.width,ne=ee.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,fe,F,ne,0,ze,_e,null),F>>=1,ne>>=1}}else if(Ge.length>0&&nt){if(Te&&Je){let F=et(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ae,fe,F.width,F.height)}for(let F=0,ne=Ge.length;F<ne;F++)pe=Ge[F],Te?R&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,ze,_e,pe):t.texImage2D(i.TEXTURE_2D,F,fe,ze,_e,pe);y.generateMipmaps=!1}else if(Te){if(Je){let F=et(ee);t.texStorage2D(i.TEXTURE_2D,ae,fe,F.width,F.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,ze,_e,ee);_(y,nt)&&w(q),Re.__version=J.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Se(S,y,k){if(y.image.length!==6)return;let q=j(S,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+k);let J=n.get(Q);if(Q.version!==J.__version||q===!0){t.activeTexture(i.TEXTURE0+k);let Re=qe.getPrimaries(qe.workingColorSpace),Me=y.colorSpace===yn?null:qe.getPrimaries(y.colorSpace),re=y.colorSpace===yn||Re===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let F=0;F<6;F++)!oe&&!Pe?ee[F]=f(y.image[F],!1,!0,s.maxCubemapSize):ee[F]=Pe?y.image[F].image:y.image[F],ee[F]=Be(y,ee[F]);let nt=ee[0],ze=d(nt)||a,_e=r.convert(y.format,y.colorSpace),fe=r.convert(y.type),pe=C(y.internalFormat,_e,fe,y.colorSpace),Ge=a&&y.isVideoTexture!==!0,Te=J.__version===void 0||q===!0,Je=Q.dataReady,R=A(y,nt,ze);z(i.TEXTURE_CUBE_MAP,y,ze);let ae;if(oe){Ge&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,nt.width,nt.height);for(let F=0;F<6;F++){ae=ee[F].mipmaps;for(let ne=0;ne<ae.length;ne++){let le=ae[ne];y.format!==Xt?_e!==null?Ge?Je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,le.width,le.height,_e,fe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,pe,le.width,le.height,0,_e,fe,le.data)}}}else{if(ae=y.mipmaps,Ge&&Te){ae.length>0&&R++;let F=et(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,F.width,F.height)}for(let F=0;F<6;F++)if(Pe){Ge?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ee[F].width,ee[F].height,_e,fe,ee[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,pe,ee[F].width,ee[F].height,0,_e,fe,ee[F].data);for(let ne=0;ne<ae.length;ne++){let ke=ae[ne].image[F].image;Ge?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,ke.width,ke.height,_e,fe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,pe,ke.width,ke.height,0,_e,fe,ke.data)}}else{Ge?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_e,fe,ee[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,pe,_e,fe,ee[F]);for(let ne=0;ne<ae.length;ne++){let le=ae[ne];Ge?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,_e,fe,le.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,pe,_e,fe,le.image[F])}}}_(y,ze)&&w(i.TEXTURE_CUBE_MAP),J.__version=Q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ge(S,y,k,q,Q,J){let Re=r.convert(k.format,k.colorSpace),Me=r.convert(k.type),re=C(k.internalFormat,Re,Me,k.colorSpace);if(!n.get(y).__hasExternalTextures){let Pe=Math.max(1,y.width>>J),ee=Math.max(1,y.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,re,Pe,ee,y.depth,0,Re,Me,null):t.texImage2D(Q,J,re,Pe,ee,0,Re,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Ve(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,n.get(k).__webglTexture,0,ve(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,n.get(k).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(S,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||Ve(y)){let Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ln?q=i.DEPTH_COMPONENT32F:Q.type===vn&&(q=i.DEPTH_COMPONENT24));let J=ve(y);Ve(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,q,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,q,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let q=ve(y);k&&Ve(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,y.width,y.height):Ve(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let q=y.textures;for(let Q=0;Q<q.length;Q++){let J=q[Q],Re=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),re=C(J.internalFormat,Re,Me,J.colorSpace),oe=ve(y);k&&Ve(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,re,y.width,y.height):Ve(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let q=n.get(y.depthTexture).__webglTexture,Q=ve(y);if(y.depthTexture.format===Gn)Ve(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(y.depthTexture.format===yi)Ve(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ee(S){let y=n.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Xe(y.__webglFramebuffer,S)}else if(k){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=i.createRenderbuffer(),de(y.__webglDepthbuffer[q],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),de(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(S,y,k){let q=n.get(S);y!==void 0&&ge(q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ee(S)}function ut(S){let y=S.texture,k=n.get(S),q=n.get(y);S.addEventListener("dispose",V);let Q=S.textures,J=S.isWebGLCubeRenderTarget===!0,Re=Q.length>1,Me=d(S)||a;if(Re||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let oe=0;oe<y.mipmaps.length;oe++)k.__webglFramebuffer[re][oe]=i.createFramebuffer()}else k.__webglFramebuffer[re]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)k.__webglFramebuffer[re]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Re)if(s.drawBuffers)for(let re=0,oe=Q.length;re<oe;re++){let Pe=n.get(Q[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Ve(S)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){let oe=Q[re];k.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[re]);let Pe=r.convert(oe.format,oe.colorSpace),ee=r.convert(oe.type),nt=C(oe.internalFormat,Pe,ee,oe.colorSpace,S.isXRRenderTarget===!0),ze=ve(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,nt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,k.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),de(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),z(i.TEXTURE_CUBE_MAP,y,Me);for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)ge(k.__webglFramebuffer[re][oe],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else ge(k.__webglFramebuffer[re],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(y,Me)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let re=0,oe=Q.length;re<oe;re++){let Pe=Q[re],ee=n.get(Pe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),z(i.TEXTURE_2D,Pe,Me),ge(k.__webglFramebuffer,S,Pe,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),_(Pe,Me)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,q.__webglTexture),z(re,y,Me),a&&y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)ge(k.__webglFramebuffer[oe],S,y,i.COLOR_ATTACHMENT0,re,oe);else ge(k.__webglFramebuffer,S,y,i.COLOR_ATTACHMENT0,re,0);_(y,Me)&&w(re),t.unbindTexture()}S.depthBuffer&&Ee(S)}function xe(S){let y=d(S)||a,k=S.textures;for(let q=0,Q=k.length;q<Q;q++){let J=k[q];if(_(J,y)){let Re=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(J).__webglTexture;t.bindTexture(Re,Me),w(Re),t.unbindTexture()}}}function Fe(S){if(a&&S.samples>0&&Ve(S)===!1){let y=S.textures,k=S.width,q=S.height,Q=i.COLOR_BUFFER_BIT,J=[],Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(S),re=y.length>1;if(re)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){J.push(i.COLOR_ATTACHMENT0+oe),S.depthBuffer&&J.push(Re);let Pe=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Pe===!1&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]),Pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),re){let ee=n.get(y[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]);let Pe=n.get(y[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function ve(S){return Math.min(s.maxSamples,S.samples)}function Ve(S){let y=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ne(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Be(S,y){let k=S.colorSpace,q=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Xr||k!==Rn&&k!==yn&&(qe.getTransfer(k)===$e?a===!1?e.has("EXT_sRGB")===!0&&q===Xt?(S.format=Xr,S.minFilter=Tt,S.generateMipmaps=!1):y=ws.sRGBToLinear(y):(q!==Xt||Q!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function et(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(h.width=S.naturalWidth||S.width,h.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(h.width=S.displayWidth,h.height=S.displayHeight):(h.width=S.width,h.height=S.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=P,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=D,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function rm(i,e,t){let n=t.isWebGL2;function s(r,o=yn){let a,l=qe.getTransfer(o);if(r===En)return i.UNSIGNED_BYTE;if(r===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yc)return i.BYTE;if(r===Zc)return i.SHORT;if(r===Ea)return i.UNSIGNED_SHORT;if(r===Pl)return i.INT;if(r===vn)return i.UNSIGNED_INT;if(r===ln)return i.FLOAT;if(r===Bi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$c)return i.ALPHA;if(r===Xt)return i.RGBA;if(r===Jc)return i.LUMINANCE;if(r===Kc)return i.LUMINANCE_ALPHA;if(r===Gn)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===Xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jc)return i.RED;if(r===Dl)return i.RED_INTEGER;if(r===Qc)return i.RG;if(r===Nl)return i.RG_INTEGER;if(r===Ul)return i.RGBA_INTEGER;if(r===ar||r===or||r===lr||r===cr)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ao||r===oo||r===lo||r===co)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ho||r===uo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ho)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===yo||r===vo||r===Mo||r===bo||r===So||r===Eo||r===wo||r===To)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===po)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_o)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===So)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wo)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hr||r===Ao||r===Co)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===hr)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Co)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eh||r===Ro||r===Po||r===Lo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===hr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ro)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var oa=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mn=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),d=this._getHandJoint(c,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,la=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new Kt({extensions:{fragDepth:!0},vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new St(new Us(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},ca=class extends Tn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null,v=new la,f=t.getContextAttributes(),d=null,b=null,_=[],w=[],C=new He,A=null,T=new bt;T.layers.enable(1),T.viewport=new ft;let N=new bt;N.layers.enable(2),N.viewport=new ft;let V=[T,N],x=new oa;x.layers.enable(1),x.layers.enable(2);let E=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=_[z];return j===void 0&&(j=new Oi,_[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=_[z];return j===void 0&&(j=new Oi,_[z]=j),j.getGripSpace()},this.getHand=function(z){let j=_[z];return j===void 0&&(j=new Oi,_[z]=j),j.getHandSpace()};function K(z){let j=w.indexOf(z.inputSource);if(j===-1)return;let he=_[j];he!==void 0&&(he.update(z.inputSource,z.frame,c||o),he.dispatchEvent({type:z.type,data:z.inputSource}))}function P(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",W);for(let z=0;z<_.length;z++){let j=w[z];j!==null&&(w[z]=null,_[z].disconnect(j))}E=null,Y=null,v.reset(),e.setRenderTarget(d),m=null,p=null,u=null,s=null,b=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",P),s.addEventListener("inputsourceschange",W),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new hn(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,he=null,Se=null;f.depth&&(Se=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=f.stencil?yi:Gn,he=f.stencil?Vn:vn);let ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(ge),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new hn(p.textureWidth,p.textureHeight,{format:Xt,type:En,depthTexture:new Os(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});let de=e.properties.get(b);de.__ignoreDepthValues=p.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(z){for(let j=0;j<z.removed.length;j++){let he=z.removed[j],Se=w.indexOf(he);Se>=0&&(w[Se]=null,_[Se].disconnect(he))}for(let j=0;j<z.added.length;j++){let he=z.added[j],Se=w.indexOf(he);if(Se===-1){for(let de=0;de<_.length;de++)if(de>=w.length){w.push(he),Se=de;break}else if(w[de]===null){w[de]=he,Se=de;break}if(Se===-1)break}let ge=_[Se];ge&&ge.connect(he)}}let H=new I,Z=new I;function G(z,j,he){H.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(he.matrixWorld);let Se=H.distanceTo(Z),ge=j.projectionMatrix.elements,de=he.projectionMatrix.elements,Xe=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),D=(ge[9]+1)/ge[5],ut=(ge[9]-1)/ge[5],xe=(ge[8]-1)/ge[0],Fe=(de[8]+1)/de[0],ve=Xe*xe,Ve=Xe*Fe,Ne=Se/(-xe+Fe),Be=Ne*-xe;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Be),z.translateZ(Ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let et=Xe+Ne,S=Ee+Ne,y=ve-Be,k=Ve+(Se-Be),q=D*Ee/S*et,Q=ut*Ee/S*et;z.projectionMatrix.makePerspective(y,k,q,Q,et,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;v.texture!==null&&(z.near=v.depthNear,z.far=v.depthFar),x.near=N.near=T.near=z.near,x.far=N.far=T.far=z.far,(E!==x.near||Y!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,Y=x.far,T.near=E,T.far=Y,N.near=E,N.far=Y,T.updateProjectionMatrix(),N.updateProjectionMatrix(),z.updateProjectionMatrix());let j=z.parent,he=x.cameras;X(x,j);for(let Se=0;Se<he.length;Se++)X(he[Se],j);he.length===2?G(x,T,N):x.projectionMatrix.copy(T.projectionMatrix),te(z,x,j)};function te(z,j,he){he===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=qr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(z){l=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null};let se=null;function ue(z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let he=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Se=!1;he.length!==x.cameras.length&&(x.cameras.length=0,Se=!0);for(let de=0;de<he.length;de++){let Xe=he[de],Ee=null;if(m!==null)Ee=m.getViewport(Xe);else{let ut=u.getViewSubImage(p,Xe);Ee=ut.viewport,de===0&&(e.setRenderTargetTextures(b,ut.colorTexture,p.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(b))}let D=V[de];D===void 0&&(D=new bt,D.layers.enable(de),D.viewport=new ft,V[de]=D),D.matrix.fromArray(Xe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Xe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),de===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Se===!0&&x.cameras.push(D)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let de=u.getDepthInformation(he[0]);de&&de.isValid&&de.texture&&v.init(e,de,s.renderState)}}for(let he=0;he<_.length;he++){let Se=w[he],ge=_[he];Se!==null&&ge!==void 0&&ge.update(Se,j,c||o)}v.render(e,x),se&&se(z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ce=new Hl;Ce.setAnimationLoop(ue),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}},On=new un,cm=new rt;function hm(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,kl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,_,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),v(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,b,_):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===At&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===At&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let b=e.get(d),_=b.envMap,w=b.envMapRotation;if(_&&(f.envMap.value=_,On.copy(w),On.x*=-1,On.y*=-1,On.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),f.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler(On)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;let C=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*C,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,b,_){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=_*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,b){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){let b=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function um(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){let w=_.program;n.uniformBlockBinding(b,w)}function c(b,_){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",f));let C=_.program;n.updateUBOMapping(b,C);let A=e.render.frame;r[b.id]!==A&&(p(b),r[b.id]=A)}function h(b){let _=u();b.__bindingPointIndex=_;let w=i.createBuffer(),C=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let _=s[b.id],w=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,T=w.length;A<T;A++){let N=Array.isArray(w[A])?w[A]:[w[A]];for(let V=0,x=N.length;V<x;V++){let E=N[V];if(m(E,A,V,C)===!0){let Y=E.__offset,K=Array.isArray(E.value)?E.value:[E.value],P=0;for(let W=0;W<K.length;W++){let H=K[W],Z=v(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,Y+P,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,w,C){let A=b.value,T=_+"_"+w;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let N=C[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(b){let _=b.uniforms,w=0,C=16;for(let T=0,N=_.length;T<N;T++){let V=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,E=V.length;x<E;x++){let Y=V[x],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,W=K.length;P<W;P++){let H=K[P],Z=v(H),G=w%C;G!==0&&C-G<Z.boundary&&(w+=C-G),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=Z.storage}}}let A=w%C;return A>0&&(w+=C-A),b.__size=w,b.__cache={},this}function v(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(b){let _=b.target;_.removeEventListener("dispose",f);let w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ki=class{constructor(e={}){let{canvas:t=fh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;let _=this,w=!1,C=0,A=0,T=null,N=-1,V=null,x=new ft,E=new ft,Y=null,K=new We(0),P=0,W=t.width,H=t.height,Z=1,G=null,X=null,te=new ft(0,0,W,H),se=new ft(0,0,W,H),ue=!1,Ce=new Ns,z=!1,j=!1,he=null,Se=new rt,ge=new He,de=new I,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return T===null?Z:1}let D=n;function ut(M,L){for(let O=0;O<M.length;O++){let B=M[O],U=t.getContext(B,L);if(U!==null)return U}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){let L=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&L.shift(),D=ut(L,M),D===null)throw ut(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,Fe,ve,Ve,Ne,Be,et,S,y,k,q,Q,J,Re,Me,re,oe,Pe,ee,nt,ze,_e,fe,pe;function Ge(){xe=new Af(D),Fe=new Mf(D,xe,e),xe.init(Fe),_e=new rm(D,xe,Fe),ve=new im(D,xe,Fe),Ve=new Pf(D),Ne=new Xp,Be=new sm(D,xe,ve,Ne,Fe,_e,Ve),et=new Sf(_),S=new Tf(_),y=new Uh(D,Fe),fe=new yf(D,xe,y,Fe),k=new Cf(D,y,Ve,fe),q=new Nf(D,k,y,Ve),ee=new Df(D,Fe,Be),re=new bf(Ne),Q=new Wp(_,et,S,xe,Fe,fe,re),J=new hm(_,Ne),Re=new Yp,Me=new Qp(xe,Fe),Pe=new xf(_,et,S,ve,q,p,l),oe=new nm(_,q,Fe),pe=new um(D,Ve,Fe,ve),nt=new vf(D,xe,Ve,Fe),ze=new Rf(D,xe,Ve,Fe),Ve.programs=Q.programs,_.capabilities=Fe,_.extensions=xe,_.properties=Ne,_.renderLists=Re,_.shadowMap=oe,_.state=ve,_.info=Ve}Ge();let Te=new ca(_,D);this.xr=Te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(W,H,!1))},this.getSize=function(M){return M.set(W,H)},this.setSize=function(M,L,O=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,H=L,t.width=Math.floor(M*Z),t.height=Math.floor(L*Z),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(W*Z,H*Z).floor()},this.setDrawingBufferSize=function(M,L,O){W=M,H=L,Z=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(te)},this.setViewport=function(M,L,O,B){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,L,O,B),ve.viewport(x.copy(te).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(se)},this.setScissor=function(M,L,O,B){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,L,O,B),ve.scissor(E.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){ve.setScissorTest(ue=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){X=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,L=!0,O=!0){let B=0;if(M){let U=!1;if(T!==null){let ce=T.texture.format;U=ce===Ul||ce===Nl||ce===Dl}if(U){let ce=T.texture.type,me=ce===En||ce===vn||ce===Ea||ce===Vn||ce===Ll||ce===Il,ye=Pe.getClearColor(),be=Pe.getClearAlpha(),Ue=ye.r,we=ye.g,Ae=ye.b;me?(m[0]=Ue,m[1]=we,m[2]=Ae,m[3]=be,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Ue,g[1]=we,g[2]=Ae,g[3]=be,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),Me.dispose(),Ne.dispose(),et.dispose(),S.dispose(),q.dispose(),fe.dispose(),pe.dispose(),Q.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Dt),Te.removeEventListener("sessionend",Ze),he&&(he.dispose(),he=null),yt.stop()};function Je(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=Ve.autoReset,L=oe.enabled,O=oe.autoUpdate,B=oe.needsUpdate,U=oe.type;Ge(),Ve.autoReset=M,oe.enabled=L,oe.autoUpdate=O,oe.needsUpdate=B,oe.type=U}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F(M){let L=M.target;L.removeEventListener("dispose",F),ne(L)}function ne(M){le(M),Ne.remove(M)}function le(M){let L=Ne.get(M).programs;L!==void 0&&(L.forEach(function(O){Q.releaseProgram(O)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,B,U,ce){L===null&&(L=Xe);let me=U.isMesh&&U.matrixWorld.determinant()<0,ye=tc(M,L,O,B,U);ve.setMaterial(B,me);let be=O.index,Ue=1;if(B.wireframe===!0){if(be=k.getWireframeAttribute(O),be===void 0)return;Ue=2}let we=O.drawRange,Ae=O.attributes.position,tt=we.start*Ue,Rt=(we.start+we.count)*Ue;ce!==null&&(tt=Math.max(tt,ce.start*Ue),Rt=Math.min(Rt,(ce.start+ce.count)*Ue)),be!==null?(tt=Math.max(tt,0),Rt=Math.min(Rt,be.count)):Ae!=null&&(tt=Math.max(tt,0),Rt=Math.min(Rt,Ae.count));let ct=Rt-tt;if(ct<0||ct===1/0)return;fe.setup(U,B,ye,O,be);let jt,Qe=nt;if(be!==null&&(jt=y.get(be),Qe=ze,Qe.setIndex(jt)),U.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Ee()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(U.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),ve.setLineWidth(Le*Ee()),U.isLineSegments?Qe.setMode(D.LINES):U.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else U.isPoints?Qe.setMode(D.POINTS):U.isSprite&&Qe.setMode(D.TRIANGLES);if(U.isBatchedMesh)Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Qe.renderInstances(tt,ct,U.count);else if(O.isInstancedBufferGeometry){let Le=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Xs=Math.min(O.instanceCount,Le);Qe.renderInstances(tt,ct,Xs)}else Qe.render(tt,ct)};function ke(M,L,O){M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=At,M.needsUpdate=!0,Yi(M,L,O),M.side=wn,M.needsUpdate=!0,Yi(M,L,O),M.side=on):Yi(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),f=Me.get(O),f.init(),b.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(_._useLegacyLights);let B=new Set;return M.traverse(function(U){let ce=U.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){let ye=ce[me];ke(ye,O,U),B.add(ye)}else ke(ce,O,U),B.add(ce)}),b.pop(),f=null,B},this.compileAsync=function(M,L,O=null){let B=this.compile(M,L,O);return new Promise(U=>{function ce(){if(B.forEach(function(me){Ne.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){U(M);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function dt(M){Ye&&Ye(M)}function Dt(){yt.stop()}function Ze(){yt.start()}let yt=new Hl;yt.setAnimationLoop(dt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(M){Ye=M,Te.setAnimationLoop(M),M===null?yt.stop():yt.start()},Te.addEventListener("sessionstart",Dt),Te.addEventListener("sessionend",Ze),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(L),L=Te.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,L,T),f=Me.get(M,b.length),f.init(),b.push(f),Se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ce.setFromProjectionMatrix(Se),j=this.localClippingEnabled,z=re.init(this.clippingPlanes,j),v=Re.get(M,d.length),v.init(),d.push(v),Zt(M,L,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(G,X),this.info.render.frame++,z===!0&&re.beginShadows();let O=f.state.shadowsArray;if(oe.render(O,M,L),z===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&Pe.render(v,M),f.setupLights(_._useLegacyLights),L.isArrayCamera){let B=L.cameras;for(let U=0,ce=B.length;U<ce;U++){let me=B[U];La(v,M,me,me.viewport)}}else La(v,M,L);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(_,M,L),fe.resetDefaultState(),N=-1,V=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Zt(M,L,O,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ce.intersectsSprite(M)){B&&de.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Se);let me=q.update(M),ye=M.material;ye.visible&&v.push(M,me,ye,O,de.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ce.intersectsObject(M))){let me=q.update(M),ye=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),de.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(M.matrixWorld).applyMatrix4(Se)),Array.isArray(ye)){let be=me.groups;for(let Ue=0,we=be.length;Ue<we;Ue++){let Ae=be[Ue],tt=ye[Ae.materialIndex];tt&&tt.visible&&v.push(M,me,tt,O,de.z,Ae)}}else ye.visible&&v.push(M,me,ye,O,de.z,null)}}let ce=M.children;for(let me=0,ye=ce.length;me<ye;me++)Zt(ce[me],L,O,B)}function La(M,L,O,B){let U=M.opaque,ce=M.transmissive,me=M.transparent;f.setupLightsView(O),z===!0&&re.setGlobalState(_.clippingPlanes,O),ce.length>0&&ec(U,ce,L,O),B&&ve.viewport(x.copy(B)),U.length>0&&qi(U,L,O),ce.length>0&&qi(ce,L,O),me.length>0&&qi(me,L,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ec(M,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ce=Fe.isWebGL2;he===null&&(he=new hn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Bi:En,minFilter:Hn,samples:ce?4:0})),_.getDrawingBufferSize(ge),ce?he.setSize(ge.x,ge.y):he.setSize(Yr(ge.x),Yr(ge.y));let me=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(K),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let ye=_.toneMapping;_.toneMapping=Sn,qi(M,O,B),Be.updateMultisampleRenderTarget(he),Be.updateRenderTargetMipmap(he);let be=!1;for(let Ue=0,we=L.length;Ue<we;Ue++){let Ae=L[Ue],tt=Ae.object,Rt=Ae.geometry,ct=Ae.material,jt=Ae.group;if(ct.side===on&&tt.layers.test(B.layers)){let Qe=ct.side;ct.side=At,ct.needsUpdate=!0,Ia(tt,O,B,Rt,ct,jt),ct.side=Qe,ct.needsUpdate=!0,be=!0}}be===!0&&(Be.updateMultisampleRenderTarget(he),Be.updateRenderTargetMipmap(he)),_.setRenderTarget(me),_.setClearColor(K,P),_.toneMapping=ye}function qi(M,L,O){let B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ce=M.length;U<ce;U++){let me=M[U],ye=me.object,be=me.geometry,Ue=B===null?me.material:B,we=me.group;ye.layers.test(O.layers)&&Ia(ye,L,O,be,Ue,we)}}function Ia(M,L,O,B,U,ce){M.onBeforeRender(_,L,O,B,U,ce),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,L,O,B,M,ce),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=At,U.needsUpdate=!0,_.renderBufferDirect(O,L,B,U,M,ce),U.side=wn,U.needsUpdate=!0,_.renderBufferDirect(O,L,B,U,M,ce),U.side=on):_.renderBufferDirect(O,L,B,U,M,ce),M.onAfterRender(_,L,O,B,U,ce)}function Yi(M,L,O){L.isScene!==!0&&(L=Xe);let B=Ne.get(M),U=f.state.lights,ce=f.state.shadowsArray,me=U.state.version,ye=Q.getParameters(M,U.state,ce,L,O),be=Q.getProgramCacheKey(ye),Ue=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?S:et).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",F),Ue=new Map,B.programs=Ue);let we=Ue.get(be);if(we!==void 0){if(B.currentProgram===we&&B.lightsStateVersion===me)return Na(M,ye),we}else ye.uniforms=Q.getUniforms(M),M.onBuild(O,ye,_),M.onBeforeCompile(ye,_),we=Q.acquireProgram(ye,be),Ue.set(be,we),B.uniforms=ye.uniforms;let Ae=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Na(M,ye),B.needsLights=ic(M),B.lightsStateVersion=me,B.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=we,B.uniformsList=null,we}function Da(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=gi.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Na(M,L){let O=Ne.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function tc(M,L,O,B,U){L.isScene!==!0&&(L=Xe),Be.resetTextureUnits();let ce=L.fog,me=B.isMeshStandardMaterial?L.environment:null,ye=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Rn,be=(B.isMeshStandardMaterial?S:et).get(B.envMap||me),Ue=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,we=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,Rt=!!O.morphAttributes.color,ct=Sn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ct=_.toneMapping);let jt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qe=jt!==void 0?jt.length:0,Le=Ne.get(B),Xs=f.state.lights;if(z===!0&&(j===!0||M!==V)){let Nt=M===V&&B.id===N;re.setState(B,M,Nt)}let Ke=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Xs.state.version||Le.outputColorSpace!==ye||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==be||B.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==we||Le.morphTargets!==Ae||Le.morphNormals!==tt||Le.morphColors!==Rt||Le.toneMapping!==ct||Fe.isWebGL2===!0&&Le.morphTargetsCount!==Qe)&&(Ke=!0):(Ke=!0,Le.__version=B.version);let Pn=Le.currentProgram;Ke===!0&&(Pn=Yi(B,L,U));let Ua=!1,Ti=!1,qs=!1,pt=Pn.getUniforms(),Ln=Le.uniforms;if(ve.useProgram(Pn.program)&&(Ua=!0,Ti=!0,qs=!0),B.id!==N&&(N=B.id,Ti=!0),Ua||V!==M){pt.setValue(D,"projectionMatrix",M.projectionMatrix),pt.setValue(D,"viewMatrix",M.matrixWorldInverse);let Nt=pt.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,de.setFromMatrixPosition(M.matrixWorld)),Fe.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,Ti=!0,qs=!0)}if(U.isSkinnedMesh){pt.setOptional(D,U,"bindMatrix"),pt.setOptional(D,U,"bindMatrixInverse");let Nt=U.skeleton;Nt&&(Fe.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),pt.setValue(D,"boneTexture",Nt.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(pt.setOptional(D,U,"batchingTexture"),pt.setValue(D,"batchingTexture",U._matricesTexture,Be));let Ys=O.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&Fe.isWebGL2===!0)&&ee.update(U,O,Pn),(Ti||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,pt.setValue(D,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ln.envMap.value=be,Ln.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ti&&(pt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&nc(Ln,qs),ce&&B.fog===!0&&J.refreshFogUniforms(Ln,ce),J.refreshMaterialUniforms(Ln,B,Z,H,he),gi.upload(D,Da(Le),Ln,Be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gi.upload(D,Da(Le),Ln,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(D,"center",U.center),pt.setValue(D,"modelViewMatrix",U.modelViewMatrix),pt.setValue(D,"normalMatrix",U.normalMatrix),pt.setValue(D,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Nt=B.uniformsGroups;for(let Zs=0,sc=Nt.length;Zs<sc;Zs++)if(Fe.isWebGL2){let Fa=Nt[Zs];pe.update(Fa,Pn),pe.bind(Fa,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function nc(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function ic(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,L,O){Ne.get(M.texture).__webglTexture=L,Ne.get(M.depthTexture).__webglTexture=O;let B=Ne.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){let O=Ne.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){T=M,C=L,A=O;let B=!0,U=null,ce=!1,me=!1;if(M){let be=Ne.get(M);be.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):be.__webglFramebuffer===void 0?Be.setupRenderTarget(M):be.__hasExternalTextures&&Be.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);let Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);let we=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[L])?U=we[L][O]:U=we[L],ce=!0):Fe.isWebGL2&&M.samples>0&&Be.useMultisampledRTT(M)===!1?U=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[O]:U=we,x.copy(M.viewport),E.copy(M.scissor),Y=M.scissorTest}else x.copy(te).multiplyScalar(Z).floor(),E.copy(se).multiplyScalar(Z).floor(),Y=ue;if(ve.bindFramebuffer(D.FRAMEBUFFER,U)&&Fe.drawBuffers&&B&&ve.drawBuffers(M,U),ve.viewport(x),ve.scissor(E),ve.setScissorTest(Y),ce){let be=Ne.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,O)}else if(me){let be=Ne.get(M.texture),Ue=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,O||0,Ue)}N=-1},this.readRenderTargetPixels=function(M,L,O,B,U,ce,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){ve.bindFramebuffer(D.FRAMEBUFFER,ye);try{let be=M.texture,Ue=be.format,we=be.type;if(Ue!==Xt&&_e.convert(Ue)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=we===Bi&&(xe.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(we!==En&&_e.convert(we)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===ln&&(Fe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U&&D.readPixels(L,O,B,U,_e.convert(Ue),_e.convert(we),ce)}finally{let be=T!==null?Ne.get(T).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(M,L,O=0){let B=Math.pow(2,-O),U=Math.floor(L.image.width*B),ce=Math.floor(L.image.height*B);Be.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,M.x,M.y,U,ce),ve.unbindTexture()},this.copyTextureToTexture=function(M,L,O,B=0){let U=L.image.width,ce=L.image.height,me=_e.convert(O.format),ye=_e.convert(O.type);Be.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,M.x,M.y,U,ce,me,ye,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,me,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,M.x,M.y,me,ye,L.image),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O,B,U=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=Math.round(M.max.x-M.min.x),me=Math.round(M.max.y-M.min.y),ye=M.max.z-M.min.z+1,be=_e.convert(B.format),Ue=_e.convert(B.type),we;if(B.isData3DTexture)Be.setTexture3D(B,0),we=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Be.setTexture2DArray(B,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Ae=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rt=D.getParameter(D.UNPACK_SKIP_PIXELS),ct=D.getParameter(D.UNPACK_SKIP_ROWS),jt=D.getParameter(D.UNPACK_SKIP_IMAGES),Qe=O.isCompressedTexture?O.mipmaps[U]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(we,U,L.x,L.y,L.z,ce,me,ye,be,Ue,Qe.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(we,U,L.x,L.y,L.z,ce,me,ye,be,Qe.data):D.texSubImage3D(we,U,L.x,L.y,L.z,ce,me,ye,be,Ue,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),U===0&&B.generateMipmaps&&D.generateMipmap(we),ve.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Be.setTextureCube(M,0):M.isData3DTexture?Be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Be.setTexture2DArray(M,0):Be.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wa?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Gs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ha=class extends ki{};ha.prototype.isWebGL1Renderer=!0;var Bs=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Hi=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new I,wl=new I,Tl=new rt,Br=new Cs,ms=new vi,zs=class extends Bt{constructor(e=new zt,t=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(wl);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),ms.radius+=r,e.ray.intersectsSphere(ms)===!1)return;Tl.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Tl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,p=new I,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let _=d,w=b-1;_<w;_+=m){let C=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(f,C),h.fromBufferAttribute(f,A),Br.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(p);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),b=Math.min(f.count,o.start+o.count);for(let _=d,w=b-1;_<w;_+=m){if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),Br.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(p);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var ua=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,l=new rt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(_t(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(_t(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ks=class extends ua{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new He){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var da=class i extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new I,w=new I,C=new I;for(let A=0;A<t.length;A+=3)m(t[A+0],_),m(t[A+1],w),m(t[A+2],C),l(_,w,C,b)}function l(b,_,w,C){let A=C+1,T=[];for(let N=0;N<=A;N++){T[N]=[];let V=b.clone().lerp(w,N/A),x=_.clone().lerp(w,N/A),E=A-N;for(let Y=0;Y<=E;Y++)Y===0&&N===A?T[N][Y]=V:T[N][Y]=V.clone().lerp(x,Y/E)}for(let N=0;N<A;N++)for(let V=0;V<2*(A-N)-1;V++){let x=Math.floor(V/2);V%2===0?(p(T[N][x+1]),p(T[N+1][x]),p(T[N][x])):(p(T[N][x+1]),p(T[N+1][x+1]),p(T[N+1][x]))}}function c(b){let _=new I;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(b),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function h(){let b=new I;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let w=f(b)/2/Math.PI+.5,C=d(b)/Math.PI+.5;o.push(w,1-C)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let _=o[b+0],w=o[b+2],C=o[b+4],A=Math.max(_,w,C),T=Math.min(_,w,C);A>.9&&T<.1&&(_<.2&&(o[b+0]+=1),w<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function m(b,_){let w=b*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function g(){let b=new I,_=new I,w=new I,C=new I,A=new He,T=new He,N=new He;for(let V=0,x=0;V<r.length;V+=9,x+=6){b.set(r[V+0],r[V+1],r[V+2]),_.set(r[V+3],r[V+4],r[V+5]),w.set(r[V+6],r[V+7],r[V+8]),A.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),N.set(o[x+4],o[x+5]),C.copy(b).add(_).add(w).divideScalar(3);let E=f(C);v(A,x+0,b,E),v(T,x+2,_,E),v(N,x+4,w,E)}}function v(b,_,w,C){C<0&&b.x===1&&(o[_]=b.x-1),w.x===0&&w.z===0&&(o[_]=C/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Vi=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Hs=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,p=new I,m=[],g=[],v=[],f=[];for(let d=0;d<=n;d++){let b=[],_=d/n,w=0;d===0&&o===0?w=.5/t:d===n&&l===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),f.push(A+w,1-_),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let _=h[d][b+1],w=h[d][b],C=h[d+1][b],A=h[d+1][b+1];(d!==0||o>0)&&m.push(_,w,A),(d!==n-1||l<Math.PI)&&m.push(w,C,A)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function gs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fa=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Do:r=e,a=2*t-n;break;case No:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:o=e,l=2*n-t;break;case No:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),v=g*g,f=v*g,d=-p*f+2*p*v-p*g,b=(1+p)*f+(-1.5-2*p)*v+(-.5+p)*g+1,_=(-1-m)*f+(1.5+m)*v+.5*g,w=m*f-m*v;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+b*o[c+C]+_*o[l+C]+w*o[u+C];return r}},pa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},ma=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ur,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,p=u-n,m=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[p+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=ys;var qn=class extends qt{};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=xs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends qt{};ga.prototype.ValueTypeName="color";var _a=class extends qt{};_a.prototype.ValueTypeName="number";var xa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gi=class extends qt{InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=ys;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends qt{};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=xs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends qt{};ya.prototype.ValueTypeName="vector";var va=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},fm=new va,Ma=class{constructor(e){this.manager=e!==void 0?e:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa="\\[\\]\\.:\\/",pm=new RegExp("["+Aa+"]","g"),Ca="[^"+Aa+"]",mm="[^"+Aa.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",Ca),_m=/(WCOD+)?/.source.replace("WCOD",mm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ca),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ca),vm=new RegExp("^"+gm+_m+xm+ym+"$"),Mm=["material","materials","bones","map"],ba=class{constructor(e,t,n){let s=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=vm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=ba;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qm=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);var Ei=null,Yt=null,Sm=null,Xi=null,wi=null;function Yl(i){let e=i.clientWidth,t=i.clientHeight;Xi=new Bs,Xi.background=new We(988970),wi=new bt(45,e/t,.1,1e3),wi.position.z=18,wi.position.y=5,wi.lookAt(0,0,0),Ei=new ki({antialias:!0,alpha:!0}),Ei.setSize(e,t),Ei.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(Ei.domElement),Yt=new Mn,Xi.add(Yt),Yt.add(new St(new Vi(5,2),new Cn({color:4674921,wireframe:!0,transparent:!0,opacity:.3}))),Yt.add(new St(new Vi(4.9,2),new Cn({color:988970}))),$l()}function Zl(i,e){Yt&&(Yt.children=Yt.children.filter(t=>!t.userData.dynamic),i.forEach(t=>{let n=new ks(0,0,5.2,5.2,0,2*Math.PI,!1,0),s=new zt().setFromPoints(n.getPoints(32));t.type==="MC"||s.rotateX(Math.PI/3),s.rotateY(t.longitudeAngle);let r=new zs(s,new Hi({color:t.planet.color,transparent:!0,opacity:.5}));r.userData.dynamic=!0,Yt.add(r)}),e.forEach(t=>{let n=(90-t.lat)*(Math.PI/180),s=(t.lng+180)*(Math.PI/180),r=5.2,o=new St(new Hs(.12,4,4),new Cn({color:16777215}));o.position.set(-(r*Math.sin(n)*Math.cos(s)),r*Math.cos(n),r*Math.sin(n)*Math.sin(s)),o.userData.dynamic=!0,Yt.add(o)}))}function $l(){Sm=requestAnimationFrame($l),Yt&&(Yt.rotation.y+=.001),Ei&&Xi&&wi&&Ei.render(Xi,wi)}function $(i,e="",t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function Em(i){let e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("stroke-width","2"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.innerHTML=i,e}var wm={user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',repeat:'<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',trend:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'};function Ct(i){return Em(wm[i])}var Ra={fire:"#fb923c",earth:"#4ade80",air:"#22d3ee",water:"#60a5fa"},Tm={fire:"progress-bar__fill--fire",earth:"progress-bar__fill--earth",air:"progress-bar__fill--air",water:"progress-bar__fill--water"},Am={cardinal:"Initiator, leader",fixed:"Stabilizer, persistent",mutable:"Adapter, flexible"};function Cm(i,e,t){let n=$("div","card"),s=$("div","profile-meta"),r=$("div","profile-avatar");r.appendChild(Ct("user")),s.appendChild(r);let o=$("div","");o.appendChild($("h2","profile-info__name",e.name));let a=$("div","profile-info__meta");[[Ct("cal"),e.date],[Ct("clock"),e.time],[Ct("pin"),t.name]].forEach(([c,h])=>{let u=$("span","");u.appendChild(c),u.appendChild(document.createTextNode(h)),a.appendChild(u)}),o.appendChild(a),s.appendChild(o),n.appendChild(s);let l=$("div","grid-4");return l.style.marginTop="1.5rem",[{cls:"sign-btn--sun",label:"Sun",value:i.sunSign,color:"#fde047",obj:at.find(c=>c.name===i.sunSign)},{cls:"sign-btn--moon",label:"Moon",value:i.moonSign,color:"#e2e8f0",obj:at.find(c=>c.name===i.moonSign)},{cls:"sign-btn--rising",label:"Rising",value:i.risingApprox,color:"#c084fc",obj:at.find(c=>c.name===i.risingApprox)},{cls:"sign-btn--chinese",label:"Chinese",value:`${i.chineseData.emoji} ${i.chinese}`,color:"#ef4444",obj:null}].forEach(({cls:c,label:h,value:u,color:p,obj:m})=>{let g=$("button",`sign-btn ${c}`),v=$("div","sign-btn__label");v.appendChild(document.createTextNode(h+" ")),v.appendChild(Ct("info"));let f=$("div","sign-btn__value",u);f.style.color=p,g.appendChild(v),g.appendChild(f),g.addEventListener("click",()=>{h==="Chinese"?Pi(i.chineseData.animal,i.chineseData.emoji,"#ef4444",i.chineseData,"chinese"):m&&Pi(m.name,m.symbol,m.cssColor,m,"zodiac")}),l.appendChild(g)}),n.appendChild(l),n}function Rm(i){if(!i.lunar)return $("div","hidden");let{lunar:e}=i,t=$("div","card"),n=$("div","");n.style.cssText="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#e2e8f0",n.appendChild($("span","",e.phase.emoji)),n.appendChild(document.createTextNode("Lunar Analysis")),t.appendChild(n);let s=$("div","lunar-grid"),r=$("div","info-box");r.appendChild($("div","info-box__label","Current Phase")),r.appendChild($("div","info-box__value",e.phase.name)),r.appendChild($("div","info-box__desc",e.phase.description));let o=$("div","keywords");e.phase.keywords.forEach(u=>o.appendChild($("span","keyword-tag",u))),r.appendChild(o),s.appendChild(r);let a=$("div","info-box");a.appendChild($("div","info-box__label","Birth Moon Phase")),a.appendChild($("div","info-box__value",`${e.birthMoonPhase.emoji} ${e.birthMoonPhase.name}`)),a.appendChild($("div","info-box__desc",`You were born during a ${e.birthMoonPhase.name.toLowerCase()}, influencing your emotional nature.`)),s.appendChild(a);let l=$("div","info-box");l.appendChild($("div","info-box__label","Lunar Nodes (Destiny)"));let c=$("div","node-row");c.innerHTML=`<span class="node-row__label" style="color:#34d399">North Node:</span><span class="node-row__sign">${e.northNodeSign}</span><div class="node-row__desc">Your soul's growth direction</div>`,l.appendChild(c);let h=$("div","node-row");return h.innerHTML=`<span class="node-row__label" style="color:#fb923c">South Node:</span><span class="node-row__sign">${e.southNodeSign}</span><div class="node-row__desc">Past life talents &amp; comfort zone</div>`,l.appendChild(h),s.appendChild(l),t.appendChild(s),t}function Pm(i){let e=$("div","element-grid");if(i.elements){let t=$("div","card"),n=$("div","");n.style.cssText="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#fb923c",n.appendChild(Ct("flame")),n.appendChild(document.createTextNode("Element Balance")),t.appendChild(n),["fire","earth","air","water"].forEach(r=>{let o=i.elements[r],a=$("div","progress-row"),l=$("span","progress-label",r);l.style.color=Ra[r];let c=$("div","progress-bar"),h=$("div",`progress-bar__fill ${Tm[r]}`);h.style.width=`${o/10*100}%`,c.appendChild(h);let u=$("span","progress-count",String(o));a.appendChild(l),a.appendChild(c),a.appendChild(u),t.appendChild(a)});let s=$("div","dominant-summary");s.innerHTML=`<span class="dominant-label">Dominant: </span><span class="dominant-value" style="color:${Ra[i.elements.dominant]}">${i.elements.dominant}</span><span class="divider">|</span><span class="dominant-label">Lacking: </span><span class="dominant-value" style="color:${Ra[i.elements.lacking]}">${i.elements.lacking}</span>`,t.appendChild(s),e.appendChild(t)}if(i.modalities){let t=$("div","card"),n=$("div","");n.style.cssText="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#22d3ee",n.appendChild(Ct("activity")),n.appendChild(document.createTextNode("Modality Balance")),t.appendChild(n),["cardinal","fixed","mutable"].forEach(r=>{let o=i.modalities[r],a=$("div","progress-row"),l=$("span","progress-label",r);l.style.color="#cbd5e1";let c=$("div","progress-bar"),h=$("div","progress-bar__fill progress-bar__fill--cardinal");h.style.width=`${o/10*100}%`,c.appendChild(h);let u=$("span","progress-count",String(o));a.appendChild(l),a.appendChild(c),a.appendChild(u),t.appendChild(a)});let s=$("div","dominant-summary");s.innerHTML=`<span class="dominant-label">Dominant: </span><span class="dominant-value" style="color:#67e8f9">${i.modalities.dominant}</span><span class="divider">\u2013</span><span style="color:#64748b">${Am[i.modalities.dominant]||""}</span>`,t.appendChild(s),e.appendChild(t)}return e}function Lm(i){let e=$("div","data-card"),t=$("div","data-card__header");t.style.color="#facc15",t.appendChild(Ct("star")),t.appendChild(document.createTextNode("Natal Positions")),t.appendChild($("span","header-note","Click planet for details")),e.appendChild(t);let n=$("div","data-table"),s=$("table","");s.innerHTML="<thead><tr><th>Planet</th><th>Position</th><th>Sign</th><th>Meaning</th></tr></thead>";let r=$("tbody","");return i.natal.forEach(o=>{let a=$("tr","cursor-pointer");a.addEventListener("click",()=>Pi(o.planet.name,o.planet.symbol,o.planet.cssColor,o.planet,"planet"));let l=$("td",""),c=$("div","planet-cell");c.style.color=o.planet.cssColor,c.appendChild(document.createTextNode(`${o.planet.symbol} ${o.planet.name} `)),c.appendChild(Ct("info")),l.appendChild(c),a.appendChild(l);let h=$("td","position-cell",o.position);a.appendChild(h);let u=$("td",""),p=$("button","sign-cell");p.style.color=o.sign.cssColor,p.textContent=`${o.sign.symbol} ${o.sign.name}`,p.addEventListener("click",m=>{m.stopPropagation();let g=at.find(v=>v.name===o.sign.name);g&&Pi(g.name,g.symbol,g.cssColor,g,"zodiac")}),u.appendChild(p),a.appendChild(u),a.appendChild($("td","meaning-cell",o.synthesis)),r.appendChild(a)}),s.appendChild(r),n.appendChild(s),e.appendChild(n),e}function Im(i){if(!i.natalAspects?.length)return null;let e=$("div","data-card"),t=$("div","data-card__header");t.style.color="#a78bfa",t.appendChild(Ct("link")),t.appendChild(document.createTextNode("Natal Aspects")),t.appendChild($("span","header-note","Planetary relationships at birth")),e.appendChild(t);let n=$("div","aspect-grid");return i.natalAspects.forEach(s=>{let r=s.aspectInfo?.nature,a=$("div",r==="Harmonious"?"aspect-card aspect-card--harmonious":r==="Challenging"?"aspect-card aspect-card--challenging":"aspect-card"),l=$("div","aspect-card__header"),c=$("span","");c.style.color=s.planet1.cssColor,c.textContent=s.planet1.symbol;let h=$("span","aspect-card__symbols",s.aspectInfo?.symbol||""),u=$("span","");u.style.color=s.planet2.cssColor,u.textContent=s.planet2.symbol;let m=$("span",r==="Harmonious"?"aspect-badge aspect-badge--harmonious":r==="Challenging"?"aspect-badge aspect-badge--challenging":"aspect-badge",s.aspect);l.appendChild(c),l.appendChild(h),l.appendChild(u),l.appendChild(m),a.appendChild(l),a.appendChild($("div","aspect-card__planets",`${s.planet1.name} \u2013 ${s.planet2.name}`)),n.appendChild(a)}),e.appendChild(n),e}function Dm(i){let e=$("div","data-card"),t=$("div","data-card__header");t.style.color="#34d399",t.appendChild(Ct("repeat")),t.appendChild(document.createTextNode("Active Transits")),t.appendChild($("span","header-note","Today's planetary influences")),e.appendChild(t);let n=$("div","data-table"),s=$("table","");s.innerHTML="<thead><tr><th>Transit Planet</th><th>Aspect</th><th>Natal Planet</th><th>Effect</th></tr></thead>";let r=$("tbody","");if(i.transits?.length)i.transits.forEach(o=>{let a=$("tr",""),l=$("td",""),c=$("div","planet-cell");c.style.color=o.planet.cssColor,c.textContent=`${o.planet.symbol} ${o.planet.name}`,l.appendChild(c),a.appendChild(l);let h=$("td",""),u=o.insight==="Harmonious"?"transit-badge transit-badge--harmonious":o.insight==="Challenging"?"transit-badge transit-badge--challenging":"transit-badge";h.appendChild($("span",u,o.aspect)),a.appendChild(h);let p=$("td","");p.style.color="#cbd5e1",p.textContent=`${o.target.symbol} ${o.target.name}`,a.appendChild(p),a.appendChild($("td","meaning-cell",o.insight)),r.appendChild(a)});else{let o=$("tr",""),a=$("td","meaning-cell");a.setAttribute("colspan","4"),a.style.textAlign="center",a.style.padding="1rem",a.textContent="No major aspects today",o.appendChild(a),r.appendChild(o)}return s.appendChild(r),n.appendChild(s),e.appendChild(n),e}function Nm(i){let e=$("div","grid-2"),t=$("div","future-card"),n=$("div","");n.style.cssText="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#60a5fa",n.appendChild(Ct("trend")),n.appendChild(document.createTextNode("Future Transits")),t.appendChild(n),i.future.forEach(a=>{let l=$("div","future-item");l.appendChild($("span","future-item__time",a.time)),l.appendChild($("span","future-item__pred",a.pred)),t.appendChild(l)}),e.appendChild(t);let s=$("div","card"),r=$("div","");r.style.cssText="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;font-weight:700;color:#f472b6",r.appendChild(Ct("pin")),r.appendChild(document.createTextNode("Power Cities")),s.appendChild(r);let o=$("div","cities-scroll custom-scrollbar");return i.matches.forEach(a=>{let l=$("div","cities-planet-group"),c=$("span","cities-planet-label");c.style.color=a.line.planet.cssColor,c.textContent=`${a.line.planet.symbol} ${a.line.planet.name} Line:`,l.appendChild(c);let h=$("div","");a.cities.forEach(u=>h.appendChild($("span","city-tag",u.name.split(",")[0]))),l.appendChild(h),o.appendChild(l)}),s.appendChild(o),e.appendChild(s),e}function Um(i){let e=i.matches.flatMap(r=>r.cities),t=$("div","map-section"),n=$("div","map-label");n.appendChild(Ct("map")),n.appendChild(document.createTextNode("myAstrocartography Map")),t.appendChild(n);let s=$("div","myAstro-map-container");return t.appendChild(s),ja(s,i.lines,e),t}var Pa=!1;function Jl(i,e,t){let n=document.getElementById("results-section");n.innerHTML="",[Cm(i,e,t),Rm(i),Pm(i),Lm(i),Im(i),Dm(i),Nm(i),Um(i),$("p","footer-note","myAstronomical Engine v2.0 - Real Planetary Calculations")].forEach(r=>{r&&n.appendChild(r)}),n.classList.remove("hidden"),n.classList.add("results","results-animate"),Fm(i)}function Fm(i){let e=document.getElementById("globe-container");if(!e)return;let t=i.matches.flatMap(n=>n.cities);Pa||(Yl(e),Pa=!0),Zl(i.lines,t)}function Kl(){let i=document.getElementById("results-section");i.classList.add("hidden"),i.innerHTML="",Pa=!1}function Om(){document.getElementById("form-section").classList.add("hidden"),document.getElementById("loading-section").classList.remove("hidden"),document.getElementById("results-section").classList.add("hidden")}function Ql(){document.getElementById("form-section").classList.remove("hidden"),document.getElementById("loading-section").classList.add("hidden"),document.getElementById("results-section").classList.add("hidden"),document.getElementById("edit-inputs-btn").classList.add("hidden")}function Bm(){document.getElementById("loading-section").classList.add("hidden"),document.getElementById("edit-inputs-btn").classList.remove("hidden")}function jl(i,e){Om(),setTimeout(()=>{try{let[t,n,s]=i.date.split("-").map(Number),[r,o]=i.time.split(":").map(Number),a=r+o/60,l=Ks(t,n,s,a),c=ka(l),h=Qs(l),u=new Date,p=Ks(u.getFullYear(),u.getMonth()+1,u.getDate(),12),m=Qs(p),g=Et.map((x,E)=>{let Y=h[x.id];return{id:E,planet:x,type:"MC",longitudeAngle:Y*Math.PI/180,longitudeDegrees:Ha(Y,c),eclipticLongitude:Y,signPosition:Ci(Y)}}),v=Et.map(x=>{let E=h[x.id],Y=at[kt(E)],K=it(E)%30,P=x.question.split(" "),W=`I ${P[2]} ${(P[3]||"").replace("?","")} ${Y.answer.toLowerCase()}`;return{planet:x,sign:Y,synthesis:W,longitude:E,degInSign:K,position:Ci(E)}}),f=[];for(let x=0;x<Et.length;x++)for(let E=x+1;E<Et.length;E++){let Y=er(h[Et[x].id],h[Et[E].id],8);Y&&$s[Y]&&f.push({planet1:Et[x],planet2:Et[E],aspect:Y,aspectInfo:$s[Y]})}let d=[];Et.slice(0,5).forEach(x=>{Et.forEach(E=>{if(x.id===E.id)return;let Y=er(m[x.id],h[E.id],8);Y&&d.push({planet:x,aspect:Y,target:E,transitPos:Ci(m[x.id]),natalPos:Ci(h[E.id]),insight:["Conjunction","Trine","Sextile"].includes(Y)?"Harmonious":"Challenging"})})});let b=[{time:"Next Month",planet:Et[1],pred:`Moon cycle brings ${at[kt(m.moon+30)].name} energy.`},{time:"In 6 Months",planet:Et[4],pred:`Mars enters ${at[kt(m.mars+90)].name} - action time.`},{time:"In 1 Year",planet:Et[5],pred:`Jupiter in ${at[kt(m.jupiter+30)].name} expands horizons.`}],_=g.map(x=>({line:x,cities:Zn.filter(E=>Math.abs(js(E.lng-x.longitudeDegrees))<15).slice(0,4)})).filter(x=>x.cities.length>0),w=Va(l),C={phase:tr(m.sun,m.moon),age:0,northNode:w.north,southNode:w.south,northNodeSign:at[kt(w.north)].name,southNodeSign:at[kt(w.south)].name,birthMoonPhase:tr(h.sun,h.moon)},A=v.map(x=>x.sign.name),T=Xa(t),N=qa(t),V={lines:g,natal:v,natalAspects:f,transits:d.slice(0,8),future:b,matches:_,chinese:T.name,chineseData:{animal:T.name,emoji:T.emoji,element:N,yinYang:T.yinYang,traits:T.traits,compatible:T.compatible,incompatible:T.incompatible,luckyNumbers:T.luckyNumbers,luckyColors:T.luckyColors,description:T.description},lunar:C,elements:Ga(A),modalities:Wa(A),birthJD:l,sunSign:at[kt(h.sun)].name,moonSign:at[kt(h.moon)].name,risingApprox:at[kt(c+e.lng)].name};Jl(V,i,e),Bm()}catch(t){console.error("Error generating myAstro data:",t),Ql()}},500)}document.addEventListener("DOMContentLoaded",()=>{Ka(),document.getElementById("edit-inputs-btn").addEventListener("click",()=>{Kl(),Ql()}),$a((n,s)=>{jl(n,s)}),jl({name:"Diego",date:"1987-07-18",time:"23:05"},{name:"S\xE3o Paulo, Brazil",lat:-23.5505,lng:-46.6333})});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
