"use strict";(()=>{var c=(e,n)=>parseFloat((Math.random()*(n-e)+e).toFixed(2)),t=(e,n)=>({ticker:e,name:n,last:c(10,1e3),daily:c(-2,2),w1:c(-4,4),m1:c(-8,8),ytd:c(-15,25),y1:c(-20,30),y3:c(-40,60)}),U=[t("SPX Index","S&P 500"),t("CCMP Index","NASDAQ 100"),t("INDU Index","DOW JONES"),t("SX5E Index","EURO STOXX 50"),t("UKX Index","FTSE 100"),t("DAX Index","DAX (GER)"),t("CAC Index","CAC 40 (FRA)"),t("NKY Index","NIKKEI 225"),t("AS51 Index","ASX 200")],D=[t("IBOV Index","IBOVESPA"),t("SHCOMP Index","SHANGHAI COMP"),t("HSI Index","HANG SENG"),t("NIFTY Index","NIFTY 50"),t("MEXBOL Index","MEXICO BOLSA"),t("JALSH Index","JSE AFRICA"),t("RTSI Index","RTS (RUS)"),t("KOSPI Index","KOSPI"),t("TWSE Index","TAIEX")],u=[t("DXY Curncy","DOLLAR INDEX"),t("EURUSD Curncy","EUR-USD"),t("GBPUSD Curncy","GBP-USD"),t("USDJPY Curncy","USD-JPY"),t("USDCHF Curncy","USD-CHF"),t("USDCAD Curncy","USD-CAD"),t("AUDUSD Curncy","AUD-USD"),t("NZDUSD Curncy","NZD-USD")],m=[t("USDBRL Curncy","USD-BRL"),t("USDCNY Curncy","USD-CNY"),t("USDMXN Curncy","USD-MXN"),t("USDZAR Curncy","USD-ZAR"),t("USDTRY Curncy","USD-TRY"),t("USDINR Curncy","USD-INR"),t("USDKRW Curncy","USD-KRW"),t("USDPLN Curncy","USD-PLN")],T=[t("XAU Curncy","GOLD SPOT"),t("XAG Curncy","SILVER SPOT"),t("CL1 Comdty","WTI CRUDE"),t("CO1 Comdty","BRENT CRUDE"),t("NG1 Comdty","NAT GAS"),t("HG1 Comdty","COPPER"),t("W 1 Comdty","WHEAT"),t("S 1 Comdty","SOYBEAN")],p=[t("AAPL US Equity","APPLE INC"),t("BAC US Equity","BANK OF AMER"),t("AXP US Equity","AMER EXPRESS"),t("KO US Equity","COCA-COLA"),t("CVX US Equity","CHEVRON"),t("OXY US Equity","OCCIDENTAL"),t("KHC US Equity","KRAFT HEINZ"),t("MCO US Equity","MOODYS")],M=[t("NVDA US Equity","NVIDIA"),t("MSFT US Equity","MICROSOFT"),t("TSLA US Equity","TESLA"),t("META US Equity","META"),t("AMD US Equity","AMD"),t("PLTR US Equity","PALANTIR"),t("COIN US Equity","COINBASE"),t("PBR US Equity","PETROBRAS")],A=[{tenor:"2Y",last:4.75,chg:-.02},{tenor:"5Y",last:4.4,chg:-.01},{tenor:"10Y",last:4.35,chg:.01},{tenor:"30Y",last:4.5,chg:.02}],g=[{tenor:"Jan25",last:10.4,chg:-.05},{tenor:"Jan26",last:10.55,chg:-.03},{tenor:"Jan27",last:10.8,chg:.02},{tenor:"Jan29",last:11.2,chg:.05}],C=[5.38,5.2,4.9,4.75,4.4,4.35,4.5],y=[10.55,10.6,10.5,10.8,11.2,11.5,11.8],R=["3M","6M","1Y","2Y","5Y","10Y","30Y"],O=[{label:"GOVT",color:"yellow"},{label:"CORP",color:"yellow"},{label:"MTGE",color:"yellow"},{label:"M-MKT",color:"yellow"},{label:"MUNI",color:"yellow"},{label:"PFD",color:"yellow"},{label:"EQUITY",color:"yellow"},{label:"CMDTY",color:"yellow"},{label:"INDEX",color:"yellow"},{label:"CRNCY",color:"yellow"},{label:"GO",color:"green"},{label:"CANCEL",color:"red"}];var b=e=>e>0?"positive":e<0?"negative":"neutral",_=e=>`${e>0?"+":""}${e.toFixed(2)}%`,E=e=>`<span class="perf-cell ${b(e)}">${_(e)}</span>`,a=(e,n)=>{let r=e.map(o=>`
    <tr>
      <td class="ticker-cell">${o.ticker}</td>
      <td class="price-cell">${o.last.toFixed(2)}</td>
      <td>${E(o.daily)}</td>
      <td>${E(o.w1)}</td>
      <td>${E(o.m1)}</td>
      <td>${E(o.ytd)}</td>
      <td class="hidden-mobile">${E(o.y1)}</td>
      <td class="hidden-mobile">${E(o.y3)}</td>
    </tr>
  `).join("");return`
    <div class="data-table__section">
      ${n?`<div class="data-table__title">${n}</div>`:""}
      <div class="table-wrapper custom-scrollbar">
        <table class="data-table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Last</th>
              <th>Dly%</th>
              <th>1W%</th>
              <th>1M%</th>
              <th>YTD%</th>
              <th class="hidden-mobile">1Y%</th>
              <th class="hidden-mobile">3Y%</th>
            </tr>
          </thead>
          <tbody>${r}</tbody>
        </table>
      </div>
    </div>
  `},h=(e,n)=>{let r=e.map(o=>{let i=b(o.chg),d=o.chg>0?"+":"";return`
      <tr>
        <td>${o.tenor}</td>
        <td>${o.last.toFixed(2)}</td>
        <td class="perf-cell ${i}">${d}${o.chg.toFixed(2)}</td>
      </tr>
    `}).join("");return`
    <div class="yield-table">
      <div class="yield-table__title">${n}</div>
      <table>
        <thead>
          <tr>
            <th>Tenor</th>
            <th>Yld</th>
            <th>Chg</th>
          </tr>
        </thead>
        <tbody>${r}</tbody>
      </table>
    </div>
  `},x=()=>{let r={top:25,right:30,bottom:20,left:30},o=3,i=13,d=l=>r.left+l/(R.length-1)*(400-r.left-r.right),S=l=>160-r.bottom-(l-o)/(i-o)*(160-r.top-r.bottom),I=l=>`M ${l.map((s,v)=>`${d(v)},${S(s)}`).join(" L ")}`,$=[4,6,8,10,12].map(l=>{let s=S(l);return`
      <line class="grid-line" x1="${r.left}" y1="${s}" x2="${400-r.right}" y2="${s}" />
      <text class="grid-label" x="${r.left-4}" y="${s+2}" text-anchor="end">${l}</text>
    `}).join(""),Y=C.map((l,s)=>`<rect class="point-us" x="${d(s)-1.5}" y="${S(l)-1.5}" width="3" height="3" />`).join(""),P=y.map((l,s)=>`<rect class="point-br" x="${d(s)-1.5}" y="${S(l)-1.5}" width="3" height="3" />`).join(""),f=R.map((l,s)=>`<text class="axis-label" x="${d(s)}" y="155" text-anchor="middle">${l}</text>`).join("");return`
    <div class="yield-chart">
      <div class="yield-chart__title">GC I 25: US (Y) vs BRAZIL (G)</div>
      <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
        ${$}
        <path class="line-br" d="${I(y)}" />
        ${P}
        <path class="line-us" d="${I(C)}" />
        ${Y}
        ${f}
      </svg>
    </div>
  `},L=e=>e.map((n,r)=>`
      <div class="footer__key ${n.color==="green"?"footer__key--green":n.color==="red"?"footer__key--red":""}">
        <span class="key-number">F${r+1}</span>
        <span class="key-label">${n.label}</span>
      </div>
    `).join("");var F=()=>{let e=document.getElementById("clock-display");if(!e)return;let n=()=>{let r=new Date,o=r.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toUpperCase(),i=r.toLocaleTimeString("en-US",{hour12:!1});e.innerHTML=`${o} <span class="time">${i}</span>`};n(),setInterval(n,1e3)},B=()=>{let e=document.getElementById("panel-1-content");e&&(e.innerHTML=a(U,"DEVELOPED MARKETS (DM)")+a(D,"EMERGING MARKETS (EM)"))},w=()=>{let e=document.getElementById("panel-2-content");e&&(e.innerHTML=a(u,"G10 / DEVELOPED CURRENCIES")+a(m,"EMERGING MARKET CURRENCIES"))},X=()=>{let e=document.getElementById("panel-3-content");e&&(e.innerHTML=a(T,"KEY COMMODITY FUTURES")+a(p,"BUFFETT (BERKSHIRE) HOLDINGS")+a(M,"PERSONAL WATCHLIST"))},H=()=>{let e=document.getElementById("yield-chart-container"),n=document.getElementById("yield-tables-container");e&&(e.innerHTML=x()),n&&(n.innerHTML=h(A,"US TREASURIES")+'<div class="table-divider"></div>'+h(g,"BRAZIL FUTURES (DI)"))},k=()=>{let e=document.getElementById("footer-keys");e&&(e.innerHTML=L(O))},K=()=>{let e=()=>{let n=document.querySelectorAll(".perf-cell");if(n.length===0)return;let r=Math.floor(Math.random()*n.length),o=n[r],i=Math.random()>.5;o.classList.add(i?"flash-up":"flash-down"),setTimeout(()=>{o.classList.remove("flash-up","flash-down")},500)};setInterval(()=>{Math.random()>.7&&e()},1e3)},N=()=>{F(),B(),w(),X(),H(),k(),K(),console.log("Market Watch Terminal initialized")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();})();
