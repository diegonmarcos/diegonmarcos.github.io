# Revit Open-Source WebGPU — Research & Prototype

> **Date**: 2026-03-23
> **Updated**: 2026-03-23
> **Status**: Draft

---

## Goal

Evaluate open-source BIM/architectural editors with WebGPU support. Identify the best candidate for a browser-based "Revit-like" building editor.

---

## Research — Top Candidates

| Project | GitHub | WebGPU Status | Best For |
|---------|--------|---------------|----------|
| **Hilo** | `hiloteam/Hilo3d` (+ somidotai branch) | Native — built for WebGPU from scratch | UX, speed, modern UI. 60fps, instant undo/redo |
| **xeokit SDK** | `xeokit/xeokit-sdk` | Advanced — specialized shaders | Massive scale (stadium/hospital, 1M+ parts), double-precision geometry |
| **That Open Engine** (ex IFC.js) | `ThatOpen/ThatOpenCompany` | Hybrid — via Three.js r171+ WebGPU renderer | IFC compliance, professional BIM interop (Revit/ArchiCAD) |
| **Babylon.js** | `BabylonJS/Babylon.js` | Most mature WebGPU engine | Foundation engine — ~70% of high-end architectural WebGPU demos use it |
| **FreeCAD** | `FreeCAD/FreeCAD` | Experimental — desktop-first | Power users, most features, steepest learning curve |

### Current Assessment (2026-03)

- **Hilo** is the best demonstration of WebGPU power in architecture — built natively for it, not ported
- **Hilo weakness**: younger ecosystem, fewer specialized features (MEP routing, HVAC components) vs 20-year tools
- **That Open Engine** is the best for developer-built professional tools needing IFC/BIM standards compliance
- **xeokit** is the gold standard for viewing/editing huge IFC files at scale

### Discovery Tips

GitHub search: `topic:webgpu topic:bim` or `topic:webgpu architecture`

---

## Checklist

- [ ] Clone and test Hilo locally (WebGPU browser required)
- [ ] Clone and test xeokit SDK — evaluate IFC loading performance
- [ ] Clone and test That Open Engine — evaluate IFC compliance
- [ ] Compare: rendering performance, feature set, API ergonomics
- [ ] Decision: pick primary engine/project
- [ ] Prototype: basic building editor (walls, slabs, levels) using chosen stack
- [ ] Integrate into front/ repo build system (`build.sh` + `build.json`)
