"use strict";(()=>{var s=class{constructor(t){this.zIndexDefault=1;this.zIndexActive=10;this.card=t,this.init()}init(){this.card.addEventListener("mouseenter",()=>this.onMouseEnter()),this.card.addEventListener("mouseleave",()=>this.onMouseLeave()),this.card.addEventListener("mousemove",t=>this.onMouseMove(t))}onMouseEnter(){this.card.style.zIndex=String(this.zIndexActive)}onMouseLeave(){this.card.style.zIndex=String(this.zIndexDefault),this.card.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)"}onMouseMove(t){let e=this.card.getBoundingClientRect(),i=t.clientX-e.left,l=t.clientY-e.top,d=e.width/2,p=e.height/2,v=(l-p)/10,m=(d-i)/10;this.card.style.transform=`
      translateY(-12px)
      scale(1.02)
      perspective(1000px)
      rotateX(${v}deg)
      rotateY(${m}deg)
    `}};var a=class n{constructor(){this.injectStyles()}static getInstance(){return n.instance||(n.instance=new n),n.instance}injectStyles(){if(document.getElementById("notification-styles"))return;let t=document.createElement("style");t.id="notification-styles",t.textContent=`
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `,document.head.appendChild(t)}show(t,e=2e3){let i=document.createElement("div");i.textContent=t,i.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4a9eff, #8b5cf6);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      font-weight: 500;
    `,document.body.appendChild(i),setTimeout(()=>{i.style.animation="slideOut 0.3s ease-out",setTimeout(()=>i.remove(),300)},e)}};var r=class{constructor(){this.serviceUrls={proxy:"/proxy",firewall:"/firewall",mail:"/mail",sync:"/sync",drive:"/drive","vps-oracle":"/vps/oracle",analytics:"/analytics","vps-local":"/vps/local",terminal:"/terminal",dashboard:"/ops/dashboard"};this.notificationManager=a.getInstance()}handleClick(t){let e=this.serviceUrls[t];if(e){console.log(`Navigating to ${t}: ${e}`);let i=t.replace("-"," ").toUpperCase();this.notificationManager.show(`Opening ${i}...`)}}};var o=class{constructor(){this.intervalId=null;this.statusElements=document.querySelectorAll(".card-status"),this.init()}init(){this.intervalId=window.setInterval(()=>{this.statusElements.forEach(t=>{Math.random()>.95&&this.pulseAnimation(t)})},2e3)}pulseAnimation(t){t.style.animation="pulse 0.5s ease-in-out",setTimeout(()=>{t.style.animation=""},500)}destroy(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null)}};var c=class{constructor(){this._statusMonitor=null;this.serviceHandler=new r,this._statusMonitor=new o,this.initializeCards()}destroy(){this._statusMonitor&&this._statusMonitor.destroy()}initializeCards(){document.querySelectorAll(".card").forEach(e=>{new s(e),e.addEventListener("click",()=>{let i=e.dataset.service;i&&this.serviceHandler.handleClick(i)})})}};document.addEventListener("DOMContentLoaded",()=>{new c});})();
