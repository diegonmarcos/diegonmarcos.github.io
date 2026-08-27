import "clsx";
import { e as ensure_array_like, b as attr_class, s as stringify, f as escape_html, c as attr } from "../../../chunks/index.js";
import "../../../chunks/navigation.js";
function TerminalAI($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let terminalLines = [];
    let userInput = "";
    let isTyping = false;
    $$renderer2.push(`<div class="terminal-ai-container"><div class="terminal-header"><div class="terminal-dots"><span class="dot red"></span> <span class="dot yellow"></span> <span class="dot green"></span></div> <span class="terminal-title">AI_TERMINAL // VISITOR ANALYSIS</span></div> <div class="terminal-body">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="terminal-loading"><span class="blink">Scanning your digital footprint...</span></div>`);
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array = ensure_array_like(terminalLines);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let line = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`terminal-line ${stringify(line.type)}`)}>${escape_html(line.text)}</div>`);
    }
    $$renderer2.push(`<!--]--> <div class="terminal-input-line"><span class="prompt">visitor@dnm:~$</span> <input${attr("value", userInput)} type="text" class="terminal-input" placeholder="Type something..."${attr("disabled", isTyping, true)}/> <span class="cursor blink"></span></div></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="syslog-page svelte-rfjvxy"><canvas class="shader-bg svelte-rfjvxy"></canvas> <div class="terminal-overlay svelte-rfjvxy">`);
    TerminalAI($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
  });
}
export {
  _page as default
};
