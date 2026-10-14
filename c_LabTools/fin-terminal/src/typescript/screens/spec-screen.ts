import { el } from '../shell/dom';
import type { ScreenContext } from './registry';

export interface SpecScreenData { id: string; title: string; category: string; summary: string; }

// Mirrors egui's `ui-screens::SpecScreen::tick`:
//   ui.heading(title)
//   ui.label("category: " + category)
//   ui.separator()
//   ui.label(summary)
//   ui.label("(Phase 9b will hydrate from DataHub topics.)")
export function renderSpecScreen(host: HTMLElement, _ctx: ScreenContext, spec: SpecScreenData): void {
  host.classList.add('panel__body--spec');
  host.appendChild(el('h2', {}, [spec.title]));
  host.appendChild(el('div', { class: 'spec-meta' }, [`CATEGORY: ${spec.category.toUpperCase()}    ID: ${spec.id.toUpperCase()}`]));
  host.appendChild(el('hr'));
  host.appendChild(el('p', { class: 'spec-summary' }, [spec.summary]));
  host.appendChild(el('p', { class: 'spec-pending' }, ['(Phase 9b will hydrate from DataHub topics.)']));
}
