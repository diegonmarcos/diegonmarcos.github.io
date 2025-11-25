"use strict";(()=>{function a(){document.querySelectorAll(".card").forEach(t=>{t.addEventListener("mouseenter",()=>{t.style.zIndex="10"}),t.addEventListener("mouseleave",()=>{t.style.zIndex="1",t.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)"}),t.addEventListener("mousemove",o=>{let n=t.getBoundingClientRect(),s=o.clientX-n.left,p=o.clientY-n.top,h=n.width/2,v=n.height/2,f=(p-v)/10,S=(h-s)/10;t.style.transform=`
                translateY(-12px)
                scale(1.02)
                perspective(1000px)
                rotateX(${f}deg)
                rotateY(${S}deg)
            `})})}function r(){document.querySelectorAll(".card-status").forEach(t=>{setInterval(()=>{Math.random()>.95&&(t.style.animation="pulse 0.5s ease-in-out",setTimeout(()=>{t.style.animation=""},500))},2e3)})}function i(e){let t=document.createElement("div");t.className="notification",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.add("closing"),setTimeout(()=>t.remove(),300)},2e3)}function l(e){let t=e.match(/ssh:\/\/(.+)@(.+)/);if(!t)return null;let o=t[1],n=t[2],s=`ssh -i ~/.ssh/matomo_key ${o}@${n}`;return{username:o,host:n,command:s}}function d(e){let t=document.createElement("div");t.className="ssh-modal-overlay",t.innerHTML=`
        <div class="ssh-modal">
            <h3>SSH Connection to ${e.host}</h3>
            <div class="ssh-command">
                <code>${e.command}</code>
                <button class="copy-btn" data-action="copy">Copy</button>
            </div>
            <p class="ssh-instruction">Choose how to connect:</p>
            <div class="ssh-options">
                <button class="ssh-option-btn" data-action="terminal">
                    Open in Terminal
                </button>
                <button class="ssh-option-btn" data-action="vscode">
                    Open in VS Code
                </button>
            </div>
            <button class="close-modal-btn" data-action="close">Close</button>
        </div>
    `,t.addEventListener("click",o=>{let s=o.target.dataset.action;o.target===t||s==="close"?c():s==="copy"?m(e.command):s==="terminal"?g(e.command):s==="vscode"&&y(e)}),document.body.appendChild(t)}function c(){let e=document.querySelector(".ssh-modal-overlay");e&&e.remove()}function m(e){navigator.clipboard.writeText(e).then(()=>{i("SSH command copied to clipboard!")})}function g(e){let t=/Linux/.test(navigator.userAgent),o=/Mac/.test(navigator.userAgent);t?window.location.href=`gnome-terminal://execute/${encodeURIComponent(e)}`:o?window.location.href=`terminal://execute/${encodeURIComponent(e)}`:(m(e),i("Command copied! Paste it in your terminal.")),c()}function y(e){let{username:t,host:o}=e;window.open(`vscode://vscode-remote/ssh-remote+${t}@${o}/home/${t}`,"_blank"),c()}var x={proxy:"http://130.110.251.193:81",analytics:"http://130.110.251.193:8080",firewall:"../vps_oracle/spec.md","vps-oracle-console":"https://cloud.oracle.com/","vps-gcloud-console":"https://console.cloud.google.com/","vm-ubuntu1":"ssh://ubuntu@130.110.251.193","vm-arch1":"ssh://user@pending",mail:"../mail/index.html",sync:"../sync/index.html",drive:"../drive/index.html","vps-local":"../vps_google/index.html",terminal:"../1.ops/index.html",dashboard:"../0.spec/index.html"};function u(e){let t=x[e];t&&(console.log(`Navigating to ${e}: ${t}`),t.startsWith("ssh://")?C(t):t.startsWith("http")?window.open(t,"_blank"):window.location.href=t)}function C(e){let t=l(e);if(t){if(t.host==="pending"||t.host.includes("pending")){i("This VM is not yet configured. IP address pending.");return}d(t)}}document.addEventListener("DOMContentLoaded",()=>{a(),r(),document.querySelectorAll(".card").forEach(t=>{t.addEventListener("click",()=>{let o=t.dataset.service;o&&u(o)})})});})();
