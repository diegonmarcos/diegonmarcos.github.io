"use strict";(()=>{var v=[{id:"p1",name:"Firm Tofu",type:"Vegan",sub:"vegan",grams:200,unitG:400,unitName:"pack",shopCat:"Fridge (Vegan)",prot:16,carb:4,fat:9,kcal:160,priceKg:8,img:"https://images.pexels.com/photos/4518657/pexels-photo-4518657.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p2",name:"Tempeh",type:"Vegan",sub:"vegan",grams:150,unitG:200,unitName:"pack",shopCat:"Fridge (Vegan)",prot:28,carb:13,fat:15,kcal:300,priceKg:14,img:"https://images.pexels.com/photos/6544381/pexels-photo-6544381.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p3",name:"Edamame",type:"Vegan",sub:"vegan",grams:200,unitG:500,unitName:"bag",shopCat:"Freezer",prot:22,carb:16,fat:10,kcal:240,priceKg:5,img:"https://images.pexels.com/photos/7020679/pexels-photo-7020679.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p4",name:"Lentils",type:"Vegan",sub:"vegan",grams:200,unitG:400,unitName:"jar",shopCat:"Pantry",prot:18,carb:40,fat:1,kcal:230,priceKg:2.5,img:"https://images.pexels.com/photos/8108166/pexels-photo-8108166.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p5",name:"Chickpeas",type:"Vegan",sub:"vegan",grams:200,unitG:400,unitName:"jar",shopCat:"Pantry",prot:14,carb:50,fat:4,kcal:280,priceKg:2,img:"https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p6",name:"Seitan",type:"Vegan",sub:"vegan",grams:150,unitG:250,unitName:"pack",shopCat:"Fridge (Vegan)",prot:38,carb:6,fat:3,kcal:180,priceKg:12,img:"https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"p7",name:"Greek Yogurt",type:"Veg",sub:"veg",grams:250,unitG:500,unitName:"tub",shopCat:"Dairy",prot:25,carb:10,fat:0,kcal:145,priceKg:4.5,img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"},{id:"p8",name:"Cottage Cheese",type:"Veg",sub:"veg",grams:200,unitG:250,unitName:"tub",shopCat:"Dairy",prot:22,carb:6,fat:8,kcal:180,priceKg:5,img:"https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400"},{id:"p9",name:"Eggs (3)",type:"Veg",sub:"veg",grams:150,unitG:50,unitName:"egg",shopCat:"Dairy",prot:19,carb:2,fat:15,kcal:215,priceKg:3.5,img:"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400"},{id:"p10",name:"Skyr",type:"Veg",sub:"veg",grams:200,unitG:450,unitName:"tub",shopCat:"Dairy",prot:22,carb:8,fat:0,kcal:130,priceKg:5.5,img:"https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400"},{id:"p11",name:"Chicken Breast",type:"Meat",sub:"meat",grams:150,unitG:300,unitName:"piece",shopCat:"Meat",prot:35,carb:0,fat:4,kcal:175,priceKg:10.5,img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400"},{id:"p12",name:"Turkey",type:"Meat",sub:"meat",grams:150,unitG:300,unitName:"piece",shopCat:"Meat",prot:33,carb:0,fat:2,kcal:150,priceKg:9,img:"https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400"},{id:"p13",name:"Salmon",type:"Meat",sub:"meat",grams:150,unitG:150,unitName:"fillet",shopCat:"Fish",prot:30,carb:0,fat:20,kcal:310,priceKg:18,img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"},{id:"p14",name:"White Fish",type:"Meat",sub:"meat",grams:200,unitG:200,unitName:"fillet",shopCat:"Fish",prot:34,carb:0,fat:2,kcal:160,priceKg:14,img:"https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400"},{id:"p15",name:"Tuna (canned)",type:"Meat",sub:"meat",grams:120,unitG:120,unitName:"can",shopCat:"Pantry",prot:30,carb:0,fat:1,kcal:130,priceKg:15,img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400"},{id:"p16",name:"Shrimp",type:"Meat",sub:"meat",grams:150,unitG:300,unitName:"bag",shopCat:"Freezer",prot:27,carb:0,fat:2,kcal:130,priceKg:12,img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400"}],k=[{id:"s1",name:"Basmati Rice",type:"Vegan",sub:"vegan",grams:150,unitG:1e3,unitName:"bag",shopCat:"Pantry",prot:4,carb:45,fat:0,kcal:195,priceKg:2.5,img:"https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"s2",name:"Sweet Potato",type:"Vegan",sub:"vegan",grams:200,unitG:200,unitName:"piece",shopCat:"Veggies",prot:3,carb:40,fat:0,kcal:170,priceKg:2.5,img:"https://images.pexels.com/photos/89247/pexels-photo-89247.png?auto=compress&cs=tinysrgb&w=400"},{id:"s3",name:"Quinoa",type:"Vegan",sub:"vegan",grams:150,unitG:500,unitName:"bag",shopCat:"Pantry",prot:6,carb:32,fat:3,kcal:180,priceKg:8,img:"https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"s4",name:"Potato",type:"Vegan",sub:"vegan",grams:200,unitG:200,unitName:"piece",shopCat:"Veggies",prot:4,carb:34,fat:0,kcal:150,priceKg:1.2,img:"https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:"s5",name:"Whole Wheat Bread",type:"Vegan",sub:"vegan",grams:80,unitG:500,unitName:"loaf",shopCat:"Pantry",prot:7,carb:36,fat:2,kcal:190,priceKg:3,img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"},{id:"s6",name:"Broccoli",type:"Vegan",sub:"vegan",grams:150,unitG:400,unitName:"head",shopCat:"Veggies",prot:4,carb:10,fat:0,kcal:50,priceKg:3.5,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/440px-Broccoli_and_cross_section_edit.jpg"},{id:"s7",name:"Spinach",type:"Vegan",sub:"vegan",grams:100,unitG:300,unitName:"bag",shopCat:"Veggies",prot:3,carb:4,fat:0,kcal:25,priceKg:4,img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400"},{id:"s8",name:"Avocado",type:"Vegan",sub:"vegan",grams:100,unitG:150,unitName:"piece",shopCat:"Veggies",prot:2,carb:9,fat:15,kcal:160,priceKg:6,img:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400"},{id:"s9",name:"Mushrooms",type:"Vegan",sub:"vegan",grams:150,unitG:400,unitName:"box",shopCat:"Veggies",prot:5,carb:5,fat:0,kcal:35,priceKg:4.5,img:"https://images.unsplash.com/photo-1552825897-bb5efa93f2f7?w=400"},{id:"s10",name:"Zucchini",type:"Vegan",sub:"vegan",grams:200,unitG:200,unitName:"piece",shopCat:"Veggies",prot:2,carb:6,fat:0,kcal:35,priceKg:2,img:"https://images.unsplash.com/photo-1563252722-6434563a985d?w=400"},{id:"s11",name:"Green Beans",type:"Vegan",sub:"vegan",grams:150,unitG:400,unitName:"bag",shopCat:"Veggies",prot:3,carb:10,fat:0,kcal:50,priceKg:4,img:"https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400"},{id:"s12",name:"Cauliflower",type:"Vegan",sub:"vegan",grams:150,unitG:600,unitName:"head",shopCat:"Veggies",prot:3,carb:8,fat:0,kcal:40,priceKg:2.5,img:"https://images.unsplash.com/photo-1568702846914-96b305d2aca9?w=400"},{id:"s13",name:"Bell Peppers",type:"Vegan",sub:"vegan",grams:150,unitG:500,unitName:"pack",shopCat:"Veggies",prot:2,carb:9,fat:0,kcal:40,priceKg:3,img:"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400"},{id:"s14",name:"Whole Wheat Pasta",type:"Veg",sub:"veg",grams:100,unitG:500,unitName:"box",shopCat:"Pantry",prot:5,carb:30,fat:1,kcal:150,priceKg:2.5,img:"https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400"},{id:"s15",name:"Couscous",type:"Veg",sub:"veg",grams:100,unitG:500,unitName:"bag",shopCat:"Pantry",prot:4,carb:35,fat:0,kcal:160,priceKg:3.5,img:"https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400"},{id:"s16",name:"Mixed Salad",type:"Veg",sub:"veg",grams:100,unitG:150,unitName:"bag",shopCat:"Veggies",prot:1,carb:4,fat:0,kcal:20,priceKg:3,img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"}],w=[...v,...k],x=["Veggies","Fruits","Fridge (Vegan)","Dairy","Meat","Fish","Freezer","Pantry","Others"];var f={};function m(t){return document.getElementById(t)}function g(t,a){let e=m(t);e&&(e.innerText=String(a))}function T(){y(v,"vegan","row-vegan"),y(v,"veg","row-veg"),y(v,"meat","row-meat"),y(k,"vegan","row-side-vegan"),y(k,"veg","row-side-veg"),G(),V(),$()}function V(){["inBase","inActive","inDeficit","inProtein","inCarbMode","inCost"].forEach(a=>{let e=m(a);e&&e.addEventListener("change",$)})}function G(){let t={root:null,rootMargin:"-40% 0px -40% 0px",threshold:0},a=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(document.querySelectorAll(".glass-panel").forEach(i=>i.classList.remove("highlighted")),o.target.classList.add("highlighted"))})},t);document.querySelectorAll(".glass-panel").forEach(e=>{a.observe(e)})}function y(t,a,e){let o=m(e);o&&(o.innerHTML=t.filter(i=>i.sub===a).map(i=>`
        <div class="food-card" id="card-${i.id}" data-id="${i.id}">
            <div class="meal-indicator" id="badge-${i.id}"></div>
            <img src="${i.img}" class="card-img" loading="lazy" alt="${i.name}">
            <div class="card-content">
                <div class="card-title">${i.name}</div>
                <div class="card-details">
                    <span>${i.kcal} kc</span>
                    <span>${i.prot}p</span>
                </div>
            </div>
        </div>
    `).join(""),o.querySelectorAll(".food-card").forEach(i=>{i.addEventListener("click",()=>{let p=i.getAttribute("data-id");p&&S(p)})}))}function S(t){f[t]||(f[t]=0),f[t]=(f[t]+1)%4,I(t),K()}function I(t){let a=m(`card-${t}`),e=m(`badge-${t}`),o=f[t];!a||!e||(a.classList.remove("active"),e.className="meal-indicator",e.innerText="",o>0&&(a.classList.add("active"),o===1&&(e.classList.add("status-b"),e.innerText="B"),o===2&&(e.classList.add("status-l"),e.innerText="L"),o===3&&(e.classList.add("status-d"),e.innerText="D")))}function K(){let t={1:{k:0,p:0,c:0,f:0,i:[]},2:{k:0,p:0,c:0,f:0,i:[]},3:{k:0,p:0,c:0,f:0,i:[]}};["list-b","list-l","list-d"].forEach(l=>{let s=m(l);s&&(s.innerHTML="")});let a={1:"list-b",2:"list-l",3:"list-d"},e={1:"sel-b",2:"sel-l",3:"sel-d"};Object.keys(f).forEach(l=>{let s=f[l];if(s>0){let c=w.find(u=>u.id===l);if(!c)return;t[s].k+=c.kcal||0,t[s].p+=c.prot||0,t[s].c+=c.carb||0,t[s].f+=c.fat||0,t[s].i.push(c.name);let h=m(a[s]);if(h){let u=document.createElement("div");u.className=`selected-card ${e[s]}`,u.innerHTML=`
          <img src="${c.img}" alt="${c.name}">
          <div class="info">${c.name}</div>
        `,h.appendChild(u)}}}),M(1,t[1]),M(2,t[2]),M(3,t[3]);let o=t[1].k+t[2].k+t[3].k,i=t[1].p+t[2].p+t[3].p,p=t[1].c+t[2].c+t[3].c,r=t[1].f+t[2].f+t[3].f,n=m("grand-total");if(n){n.innerText=String(o);let l=m("outTotalKcal"),s=l&&parseInt(l.innerText)||9999;n.style.color=o>s?"var(--danger)":"var(--accent)"}g("grand-prot",i),g("grand-carb",p),g("grand-fat",r);let d=i>0?(o/i).toFixed(1):"-";g("grand-ratio",d),F()}function M(t,a){g(`m${t}-kcal`,a.k),g(`m${t}-prot`,a.p),g(`m${t}-carb`,a.c),g(`m${t}-fat`,a.f);let e=a.p>0?(a.k/a.p).toFixed(1):"-";g(`m${t}-ratio`,e)}function F(){let t=m("shopping-list-container");if(!t)return;let a={};Object.keys(f).forEach(p=>{let r=f[p];if(r>0){let n=w.find(s=>s.id===p);if(!n)return;let d=n.shopCat||"Others";a[d]||(a[d]=[]);let l=a[d].find(s=>s.name===n.name);l?l.g+=n.grams*r:a[d].push({name:n.name,g:n.grams*r,unitSize:n.unitG||100,priceKg:n.priceKg,isProtein:n.id.startsWith("p")})}});let e="",o=!1,i=[];x.forEach(p=>{a[p]&&a[p].length>0&&(o=!0,e+=`<div class="shop-category">${p}</div>`,a[p].forEach(r=>{let n=(r.g/r.unitSize).toFixed(1),d=n.endsWith(".0")?n.slice(0,-2):n,l=r.g/1e3*r.priceKg;i.push({...r,cat:p,total:l}),e+=`
          <div class="shop-item">
              <span>${r.name}</span>
              <span class="shop-amt">${r.g}g</span>
              <span class="shop-unit">${d} u</span>
              <span class="shop-amt">$${r.priceKg.toFixed(2)}</span>
              <span class="shop-unit" style="color:var(--success)">$${l.toFixed(2)}</span>
          </div>
        `}))}),o||(e='<div style="text-align:center; color:#666; padding:20px; font-size:0.8rem;">Add items to menu to generate list</div>'),t.innerHTML=e,N(i,o)}function N(t,a){let e=m("price-analysis-container");if(!e)return;if(!a){e.innerHTML='<div class="placeholder-box">Add items to menu to calculate costs</div>';return}let o=`
    <div class="category-header" style="margin-top:0;">Breakdown by Category</div>
    <table class="price-table">
        <thead>
            <tr>
                <th>Category</th>
                <th>Total Amt (g)</th>
                <th>Total $</th>
            </tr>
        </thead>
        <tbody>
  `,i=0;x.forEach(s=>{let c=t.filter(h=>h.cat===s);if(c.length>0){let h=c.reduce((b,C)=>b+C.total,0),u=c.reduce((b,C)=>b+C.g,0);i+=h,o+=`
        <tr>
            <td style="color:var(--accent); font-weight:500;">${s}</td>
            <td>${u}g</td>
            <td>$${h.toFixed(2)}</td>
        </tr>
      `}}),o+=`
        <tr style="border-top: 1px solid white;">
            <td colspan="2" style="font-weight:bold; color:white;">Total</td>
            <td style="font-weight:bold; color:var(--success);">$${i.toFixed(2)}</td>
        </tr>
        </tbody></table>`;let p=0,r=0,n=t.filter(s=>s.isProtein),d=t.filter(s=>!s.isProtein),l=`
    <div class="category-header">Breakdown by Types</div>
    <table class="price-table">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amt (g)</th>
                <th>Avg $/kg</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
  `;if(n.length>0){let s=n.reduce((u,b)=>u+b.g,0),c=n.reduce((u,b)=>u+b.total,0),h=c/(s/1e3);p=c,l+=`
      <tr>
          <td style="color:var(--accent)">Protein Items</td>
          <td>${s}</td>
          <td>${h.toFixed(2)}</td>
          <td>$${c.toFixed(2)}</td>
      </tr>
    `}if(d.length>0){let s=d.reduce((u,b)=>u+b.g,0),c=d.reduce((u,b)=>u+b.total,0),h=c/(s/1e3);r=c,l+=`
      <tr>
          <td style="color:var(--warning)">Sides Items</td>
          <td>${s}</td>
          <td>${h.toFixed(2)}</td>
          <td>$${c.toFixed(2)}</td>
      </tr>
    `}l+=`
        <tr style="border-top: 1px solid white;">
            <td colspan="3" style="font-weight:bold; color:white;">Total</td>
            <td style="font-weight:bold; color:var(--success);">$${(p+r).toFixed(2)}</td>
        </tr>
        </tbody></table>`,e.innerHTML=o+l}function $(){let t=parseInt(m("inBase")?.value||"0"),a=parseInt(m("inActive")?.value||"0"),e=parseInt(m("inDeficit")?.value||"0"),o=parseInt(m("inProtein")?.value||"0"),i=parseInt(m("inCost")?.value||"10"),p=parseInt(m("inCarbMode")?.value||"250"),r=t+a-e,n=o*i,d=r-n;g("outTotalKcal",r),g("outProtKcal",n),g("outSidesKcal",d),g("outProtG",o+"g"),g("outCarbsLimit",p+"g"),g("outTotalKcalMeal",Math.round(r/3)),g("outProtKcalMeal",Math.round(n/3)),g("outSidesKcalMeal",Math.round(d/3)),g("outProtGMeal",Math.round(o/3)+"g"),g("outCarbsLimitMeal",Math.round(p/3)+"g"),K()}window.onload=T;})();
