// ==========================================================================
// Embedded Graph Data - Linktree Mindmap
// ==========================================================================
// Source of truth: a-Portals/_data/*.json (shared with linktree).
// Presentation: ./data/view-config.json (colors per section, root identity).
// Adding a tool in linktree → appears here automatically on next rebuild.

import { buildMindmapData } from './modules/data-from-linktree';
import type { GraphData } from './types';

export const GRAPH_DATA: GraphData = buildMindmapData();
