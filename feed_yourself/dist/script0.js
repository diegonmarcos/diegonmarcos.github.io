"use strict";
(() => {
  // src_0/typescript/data.ts
  var proteins = [
    // Vegan
    {
      id: "p1",
      name: "Firm Tofu",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 400,
      unitName: "pack",
      shopCat: "Fridge (Vegan)",
      prot: 16,
      carb: 4,
      fat: 9,
      kcal: 160,
      priceKg: 8,
      img: "https://images.pexels.com/photos/4518657/pexels-photo-4518657.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "p2",
      name: "Tempeh",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 200,
      unitName: "pack",
      shopCat: "Fridge (Vegan)",
      prot: 28,
      carb: 13,
      fat: 15,
      kcal: 300,
      priceKg: 14,
      img: "https://images.pexels.com/photos/6544381/pexels-photo-6544381.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "p3",
      name: "Edamame",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 500,
      unitName: "bag",
      shopCat: "Freezer",
      prot: 22,
      carb: 16,
      fat: 10,
      kcal: 240,
      priceKg: 5,
      img: "https://images.pexels.com/photos/7020679/pexels-photo-7020679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "p4",
      name: "Lentils",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 400,
      unitName: "jar",
      shopCat: "Pantry",
      prot: 18,
      carb: 40,
      fat: 1,
      kcal: 230,
      priceKg: 2.5,
      img: "https://images.pexels.com/photos/8108166/pexels-photo-8108166.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "p5",
      name: "Chickpeas",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 400,
      unitName: "jar",
      shopCat: "Pantry",
      prot: 14,
      carb: 50,
      fat: 4,
      kcal: 280,
      priceKg: 2,
      img: "https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "p6",
      name: "Seitan",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 250,
      unitName: "pack",
      shopCat: "Fridge (Vegan)",
      prot: 38,
      carb: 6,
      fat: 3,
      kcal: 180,
      priceKg: 12,
      img: "https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    // Vegetarian
    {
      id: "p7",
      name: "Greek Yogurt",
      type: "Veg",
      sub: "veg",
      grams: 250,
      unitG: 500,
      unitName: "tub",
      shopCat: "Dairy",
      prot: 25,
      carb: 10,
      fat: 0,
      kcal: 145,
      priceKg: 4.5,
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
    },
    {
      id: "p8",
      name: "Cottage Cheese",
      type: "Veg",
      sub: "veg",
      grams: 200,
      unitG: 250,
      unitName: "tub",
      shopCat: "Dairy",
      prot: 22,
      carb: 6,
      fat: 8,
      kcal: 180,
      priceKg: 5,
      img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400"
    },
    {
      id: "p9",
      name: "Eggs (3)",
      type: "Veg",
      sub: "veg",
      grams: 150,
      unitG: 50,
      unitName: "egg",
      shopCat: "Dairy",
      prot: 19,
      carb: 2,
      fat: 15,
      kcal: 215,
      priceKg: 3.5,
      img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400"
    },
    {
      id: "p10",
      name: "Skyr",
      type: "Veg",
      sub: "veg",
      grams: 200,
      unitG: 450,
      unitName: "tub",
      shopCat: "Dairy",
      prot: 22,
      carb: 8,
      fat: 0,
      kcal: 130,
      priceKg: 5.5,
      img: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400"
    },
    // Meat & Fish
    {
      id: "p11",
      name: "Chicken Breast",
      type: "Meat",
      sub: "meat",
      grams: 150,
      unitG: 300,
      unitName: "piece",
      shopCat: "Meat",
      prot: 35,
      carb: 0,
      fat: 4,
      kcal: 175,
      priceKg: 10.5,
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400"
    },
    {
      id: "p12",
      name: "Turkey",
      type: "Meat",
      sub: "meat",
      grams: 150,
      unitG: 300,
      unitName: "piece",
      shopCat: "Meat",
      prot: 33,
      carb: 0,
      fat: 2,
      kcal: 150,
      priceKg: 9,
      img: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400"
    },
    {
      id: "p13",
      name: "Salmon",
      type: "Meat",
      sub: "meat",
      grams: 150,
      unitG: 150,
      unitName: "fillet",
      shopCat: "Fish",
      prot: 30,
      carb: 0,
      fat: 20,
      kcal: 310,
      priceKg: 18,
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
    },
    {
      id: "p14",
      name: "White Fish",
      type: "Meat",
      sub: "meat",
      grams: 200,
      unitG: 200,
      unitName: "fillet",
      shopCat: "Fish",
      prot: 34,
      carb: 0,
      fat: 2,
      kcal: 160,
      priceKg: 14,
      img: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400"
    },
    {
      id: "p15",
      name: "Tuna (canned)",
      type: "Meat",
      sub: "meat",
      grams: 120,
      unitG: 120,
      unitName: "can",
      shopCat: "Pantry",
      prot: 30,
      carb: 0,
      fat: 1,
      kcal: 130,
      priceKg: 15,
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400"
    },
    {
      id: "p16",
      name: "Shrimp",
      type: "Meat",
      sub: "meat",
      grams: 150,
      unitG: 300,
      unitName: "bag",
      shopCat: "Freezer",
      prot: 27,
      carb: 0,
      fat: 2,
      kcal: 130,
      priceKg: 12,
      img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400"
    }
  ];
  var sides = [
    // Vegan Sides - Carbs
    {
      id: "s1",
      name: "Basmati Rice",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 1e3,
      unitName: "bag",
      shopCat: "Pantry",
      prot: 4,
      carb: 45,
      fat: 0,
      kcal: 195,
      priceKg: 2.5,
      img: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "s2",
      name: "Sweet Potato",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 200,
      unitName: "piece",
      shopCat: "Veggies",
      prot: 3,
      carb: 40,
      fat: 0,
      kcal: 170,
      priceKg: 2.5,
      img: "https://images.pexels.com/photos/89247/pexels-photo-89247.png?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "s3",
      name: "Quinoa",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 500,
      unitName: "bag",
      shopCat: "Pantry",
      prot: 6,
      carb: 32,
      fat: 3,
      kcal: 180,
      priceKg: 8,
      img: "https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "s4",
      name: "Potato",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 200,
      unitName: "piece",
      shopCat: "Veggies",
      prot: 4,
      carb: 34,
      fat: 0,
      kcal: 150,
      priceKg: 1.2,
      img: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "s5",
      name: "Whole Wheat Bread",
      type: "Vegan",
      sub: "vegan",
      grams: 80,
      unitG: 500,
      unitName: "loaf",
      shopCat: "Pantry",
      prot: 7,
      carb: 36,
      fat: 2,
      kcal: 190,
      priceKg: 3,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    },
    // Vegan Sides - Vegetables
    {
      id: "s6",
      name: "Broccoli",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 400,
      unitName: "head",
      shopCat: "Veggies",
      prot: 4,
      carb: 10,
      fat: 0,
      kcal: 50,
      priceKg: 3.5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/440px-Broccoli_and_cross_section_edit.jpg"
    },
    {
      id: "s7",
      name: "Spinach",
      type: "Vegan",
      sub: "vegan",
      grams: 100,
      unitG: 300,
      unitName: "bag",
      shopCat: "Veggies",
      prot: 3,
      carb: 4,
      fat: 0,
      kcal: 25,
      priceKg: 4,
      img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400"
    },
    {
      id: "s8",
      name: "Avocado",
      type: "Vegan",
      sub: "vegan",
      grams: 100,
      unitG: 150,
      unitName: "piece",
      shopCat: "Veggies",
      prot: 2,
      carb: 9,
      fat: 15,
      kcal: 160,
      priceKg: 6,
      img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400"
    },
    {
      id: "s9",
      name: "Mushrooms",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 400,
      unitName: "box",
      shopCat: "Veggies",
      prot: 5,
      carb: 5,
      fat: 0,
      kcal: 35,
      priceKg: 4.5,
      img: "https://images.unsplash.com/photo-1552825897-bb5efa93f2f7?w=400"
    },
    {
      id: "s10",
      name: "Zucchini",
      type: "Vegan",
      sub: "vegan",
      grams: 200,
      unitG: 200,
      unitName: "piece",
      shopCat: "Veggies",
      prot: 2,
      carb: 6,
      fat: 0,
      kcal: 35,
      priceKg: 2,
      img: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=400"
    },
    {
      id: "s11",
      name: "Green Beans",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 400,
      unitName: "bag",
      shopCat: "Veggies",
      prot: 3,
      carb: 10,
      fat: 0,
      kcal: 50,
      priceKg: 4,
      img: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400"
    },
    {
      id: "s12",
      name: "Cauliflower",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 600,
      unitName: "head",
      shopCat: "Veggies",
      prot: 3,
      carb: 8,
      fat: 0,
      kcal: 40,
      priceKg: 2.5,
      img: "https://images.unsplash.com/photo-1568702846914-96b305d2aca9?w=400"
    },
    {
      id: "s13",
      name: "Bell Peppers",
      type: "Vegan",
      sub: "vegan",
      grams: 150,
      unitG: 500,
      unitName: "pack",
      shopCat: "Veggies",
      prot: 2,
      carb: 9,
      fat: 0,
      kcal: 40,
      priceKg: 3,
      img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400"
    },
    // Vegetarian Sides
    {
      id: "s14",
      name: "Whole Wheat Pasta",
      type: "Veg",
      sub: "veg",
      grams: 100,
      unitG: 500,
      unitName: "box",
      shopCat: "Pantry",
      prot: 5,
      carb: 30,
      fat: 1,
      kcal: 150,
      priceKg: 2.5,
      img: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400"
    },
    {
      id: "s15",
      name: "Couscous",
      type: "Veg",
      sub: "veg",
      grams: 100,
      unitG: 500,
      unitName: "bag",
      shopCat: "Pantry",
      prot: 4,
      carb: 35,
      fat: 0,
      kcal: 160,
      priceKg: 3.5,
      img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400"
    },
    {
      id: "s16",
      name: "Mixed Salad",
      type: "Veg",
      sub: "veg",
      grams: 100,
      unitG: 150,
      unitName: "bag",
      shopCat: "Veggies",
      prot: 1,
      carb: 4,
      fat: 0,
      kcal: 20,
      priceKg: 3,
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"
    }
  ];
  var allFood = [...proteins, ...sides];
  var shopCategories = [
    "Veggies",
    "Fruits",
    "Fridge (Vegan)",
    "Dairy",
    "Meat",
    "Fish",
    "Freezer",
    "Pantry",
    "Others"
  ];

  // src_0/typescript/main.ts
  var selections = {};
  function $(id) {
    return document.getElementById(id);
  }
  function setText(id, val) {
    const el = $(id);
    if (el)
      el.innerText = String(val);
  }
  function init() {
    renderGroup(proteins, "vegan", "row-vegan");
    renderGroup(proteins, "veg", "row-veg");
    renderGroup(proteins, "meat", "row-meat");
    renderGroup(sides, "vegan", "row-side-vegan");
    renderGroup(sides, "veg", "row-side-veg");
    setupScrollSpy();
    bindInputEvents();
    calculate();
  }
  function bindInputEvents() {
    const inputIds = ["inBase", "inActive", "inDeficit", "inProtein", "inCarbMode", "inCost"];
    inputIds.forEach((id) => {
      const el = $(id);
      if (el) {
        el.addEventListener("change", calculate);
      }
    });
  }
  function setupScrollSpy() {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".glass-panel").forEach((p) => p.classList.remove("highlighted"));
          entry.target.classList.add("highlighted");
        }
      });
    }, options);
    document.querySelectorAll(".glass-panel").forEach((panel) => {
      observer.observe(panel);
    });
  }
  function renderGroup(data, sub, elId) {
    const container = $(elId);
    if (!container)
      return;
    container.innerHTML = data.filter((i) => i.sub === sub).map(
      (item) => `
        <div class="food-card" id="card-${item.id}" data-id="${item.id}">
            <div class="meal-indicator" id="badge-${item.id}"></div>
            <img src="${item.img}" class="card-img" loading="lazy" alt="${item.name}">
            <div class="card-content">
                <div class="card-title">${item.name}</div>
                <div class="card-details">
                    <span>${item.kcal} kc</span>
                    <span>${item.prot}p</span>
                </div>
            </div>
        </div>
    `
    ).join("");
    container.querySelectorAll(".food-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (id)
          tapCard(id);
      });
    });
  }
  function tapCard(id) {
    if (!selections[id])
      selections[id] = 0;
    selections[id] = (selections[id] + 1) % 4;
    updateVisuals(id);
    updateState();
  }
  function updateVisuals(id) {
    const card = $(`card-${id}`);
    const badge = $(`badge-${id}`);
    const state = selections[id];
    if (!card || !badge)
      return;
    card.classList.remove("active");
    badge.className = "meal-indicator";
    badge.innerText = "";
    if (state > 0) {
      card.classList.add("active");
      if (state === 1) {
        badge.classList.add("status-b");
        badge.innerText = "B";
      }
      if (state === 2) {
        badge.classList.add("status-l");
        badge.innerText = "L";
      }
      if (state === 3) {
        badge.classList.add("status-d");
        badge.innerText = "D";
      }
    }
  }
  function updateState() {
    const meals = {
      1: { k: 0, p: 0, c: 0, f: 0, i: [] },
      2: { k: 0, p: 0, c: 0, f: 0, i: [] },
      3: { k: 0, p: 0, c: 0, f: 0, i: [] }
    };
    ["list-b", "list-l", "list-d"].forEach((id) => {
      const el = $(id);
      if (el)
        el.innerHTML = "";
    });
    const colMap = { 1: "list-b", 2: "list-l", 3: "list-d" };
    const clsMap = { 1: "sel-b", 2: "sel-l", 3: "sel-d" };
    Object.keys(selections).forEach((id) => {
      const qty = selections[id];
      if (qty > 0) {
        const item = allFood.find((f) => f.id === id);
        if (!item)
          return;
        meals[qty].k += item.kcal || 0;
        meals[qty].p += item.prot || 0;
        meals[qty].c += item.carb || 0;
        meals[qty].f += item.fat || 0;
        meals[qty].i.push(item.name);
        const container = $(colMap[qty]);
        if (container) {
          const div = document.createElement("div");
          div.className = `selected-card ${clsMap[qty]}`;
          div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="info">${item.name}</div>
        `;
          container.appendChild(div);
        }
      }
    });
    updateSumRow(1, meals[1]);
    updateSumRow(2, meals[2]);
    updateSumRow(3, meals[3]);
    const tK = meals[1].k + meals[2].k + meals[3].k;
    const tP = meals[1].p + meals[2].p + meals[3].p;
    const tC = meals[1].c + meals[2].c + meals[3].c;
    const tF = meals[1].f + meals[2].f + meals[3].f;
    const gTotal = $("grand-total");
    if (gTotal) {
      gTotal.innerText = String(tK);
      const budgetEl = $("outTotalKcal");
      const budget = budgetEl ? parseInt(budgetEl.innerText) || 9999 : 9999;
      gTotal.style.color = tK > budget ? "var(--danger)" : "var(--accent)";
    }
    setText("grand-prot", tP);
    setText("grand-carb", tC);
    setText("grand-fat", tF);
    const gRatio = tP > 0 ? (tK / tP).toFixed(1) : "-";
    setText("grand-ratio", gRatio);
    renderShoppingList();
  }
  function updateSumRow(n, data) {
    setText(`m${n}-kcal`, data.k);
    setText(`m${n}-prot`, data.p);
    setText(`m${n}-carb`, data.c);
    setText(`m${n}-fat`, data.f);
    const ratio = data.p > 0 ? (data.k / data.p).toFixed(1) : "-";
    setText(`m${n}-ratio`, ratio);
  }
  function renderShoppingList() {
    const container = $("shopping-list-container");
    if (!container)
      return;
    const shopData = {};
    Object.keys(selections).forEach((id) => {
      const count = selections[id];
      if (count > 0) {
        const item = allFood.find((f) => f.id === id);
        if (!item)
          return;
        const cat = item.shopCat || "Others";
        if (!shopData[cat])
          shopData[cat] = [];
        const existing = shopData[cat].find((x) => x.name === item.name);
        if (existing) {
          existing.g += item.grams * count;
        } else {
          shopData[cat].push({
            name: item.name,
            g: item.grams * count,
            unitSize: item.unitG || 100,
            priceKg: item.priceKg,
            isProtein: item.id.startsWith("p")
          });
        }
      }
    });
    let html = "";
    let hasItems = false;
    const flatItemsForPrice = [];
    shopCategories.forEach((cat) => {
      if (shopData[cat] && shopData[cat].length > 0) {
        hasItems = true;
        html += `<div class="shop-category">${cat}</div>`;
        shopData[cat].forEach((i) => {
          const units = (i.g / i.unitSize).toFixed(1);
          const unitDisplay = units.endsWith(".0") ? units.slice(0, -2) : units;
          const priceTotal = i.g / 1e3 * i.priceKg;
          flatItemsForPrice.push({ ...i, cat, total: priceTotal });
          html += `
          <div class="shop-item">
              <span>${i.name}</span>
              <span class="shop-amt">${i.g}g</span>
              <span class="shop-unit">${unitDisplay} u</span>
              <span class="shop-amt">$${i.priceKg.toFixed(2)}</span>
              <span class="shop-unit" style="color:var(--success)">$${priceTotal.toFixed(2)}</span>
          </div>
        `;
        });
      }
    });
    if (!hasItems)
      html = '<div style="text-align:center; color:#666; padding:20px; font-size:0.8rem;">Add items to menu to generate list</div>';
    container.innerHTML = html;
    renderPriceTables(flatItemsForPrice, hasItems);
  }
  function renderPriceTables(items, hasItems) {
    const container = $("price-analysis-container");
    if (!container)
      return;
    if (!hasItems) {
      container.innerHTML = '<div class="placeholder-box">Add items to menu to calculate costs</div>';
      return;
    }
    let t1 = `
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
  `;
    let grandTotal = 0;
    shopCategories.forEach((cat) => {
      const catItems = items.filter((i) => i.cat === cat);
      if (catItems.length > 0) {
        const catTotal = catItems.reduce((sum, item) => sum + item.total, 0);
        const catWeight = catItems.reduce((sum, item) => sum + item.g, 0);
        grandTotal += catTotal;
        t1 += `
        <tr>
            <td style="color:var(--accent); font-weight:500;">${cat}</td>
            <td>${catWeight}g</td>
            <td>$${catTotal.toFixed(2)}</td>
        </tr>
      `;
      }
    });
    t1 += `
        <tr style="border-top: 1px solid white;">
            <td colspan="2" style="font-weight:bold; color:white;">Total</td>
            <td style="font-weight:bold; color:var(--success);">$${grandTotal.toFixed(2)}</td>
        </tr>
        </tbody></table>`;
    let protSum = 0;
    let sideSum = 0;
    const protItems = items.filter((i) => i.isProtein);
    const sideItems = items.filter((i) => !i.isProtein);
    let t2 = `
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
  `;
    if (protItems.length > 0) {
      const totalG = protItems.reduce((a, b) => a + b.g, 0);
      const totalCost = protItems.reduce((a, b) => a + b.total, 0);
      const avgPrice = totalCost / (totalG / 1e3);
      protSum = totalCost;
      t2 += `
      <tr>
          <td style="color:var(--accent)">Protein Items</td>
          <td>${totalG}</td>
          <td>${avgPrice.toFixed(2)}</td>
          <td>$${totalCost.toFixed(2)}</td>
      </tr>
    `;
    }
    if (sideItems.length > 0) {
      const totalG = sideItems.reduce((a, b) => a + b.g, 0);
      const totalCost = sideItems.reduce((a, b) => a + b.total, 0);
      const avgPrice = totalCost / (totalG / 1e3);
      sideSum = totalCost;
      t2 += `
      <tr>
          <td style="color:var(--warning)">Sides Items</td>
          <td>${totalG}</td>
          <td>${avgPrice.toFixed(2)}</td>
          <td>$${totalCost.toFixed(2)}</td>
      </tr>
    `;
    }
    t2 += `
        <tr style="border-top: 1px solid white;">
            <td colspan="3" style="font-weight:bold; color:white;">Total</td>
            <td style="font-weight:bold; color:var(--success);">$${(protSum + sideSum).toFixed(2)}</td>
        </tr>
        </tbody></table>`;
    container.innerHTML = t1 + t2;
  }
  function calculate() {
    const base = parseInt($("inBase")?.value || "0");
    const active = parseInt($("inActive")?.value || "0");
    const deficit = parseInt($("inDeficit")?.value || "0");
    const proteinTarget = parseInt($("inProtein")?.value || "0");
    const cost = parseInt($("inCost")?.value || "10");
    const carbLimit = parseInt($("inCarbMode")?.value || "250");
    const totalNet = base + active - deficit;
    const proteinKcal = proteinTarget * cost;
    const sidesKcal = totalNet - proteinKcal;
    setText("outTotalKcal", totalNet);
    setText("outProtKcal", proteinKcal);
    setText("outSidesKcal", sidesKcal);
    setText("outProtG", proteinTarget + "g");
    setText("outCarbsLimit", carbLimit + "g");
    setText("outTotalKcalMeal", Math.round(totalNet / 3));
    setText("outProtKcalMeal", Math.round(proteinKcal / 3));
    setText("outSidesKcalMeal", Math.round(sidesKcal / 3));
    setText("outProtGMeal", Math.round(proteinTarget / 3) + "g");
    setText("outCarbsLimitMeal", Math.round(carbLimit / 3) + "g");
    updateState();
  }
  window.onload = init;
})();
