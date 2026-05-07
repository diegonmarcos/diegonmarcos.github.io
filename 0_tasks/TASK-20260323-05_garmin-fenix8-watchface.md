# Garmin fenix 8 Watchface — Custom Design & Deployment

> **Date**: 2026-03-23
> **Updated**: 2026-03-23
> **Status**: Draft

---

## Goal

Design and ship a custom watchface for Garmin fenix 8 using the Connect IQ SDK (Monkey C). Full code route — no visual builders.

---

## Development Routes Overview

| Route | Tool | Flexibility | Difficulty |
|-------|------|-------------|------------|
| On-Device | Built-in editor | Limited to presets | Very Easy |
| No-Code Builder | Watchface Builder / Facemaker | High (visual) | Medium |
| **Connect IQ SDK** | VS Code + Monkey C | **Infinite (code)** | Hard |

**Chosen: Connect IQ SDK (Route 3)**

---

## Setup

1. Install **Visual Studio Code**
2. Install **Monkey C extension** for VS Code
3. Download **Connect IQ SDK Manager** + fenix 8 device files
4. Generate developer key: `Monkey C: Generate a Developer Key` in VS Code command palette → produces `developer_key.der`

---

## Design Considerations

| Display | Constraint |
|---------|-----------|
| **AMOLED** (fenix 8) | Must implement `onEnterSleep()` Always-On Mode — max 10% pixel usage to prevent burn-in |
| **MIP** (Solar) | Limited to 64-color palette |
| **Both** | Use true black `#000000` backgrounds — turns off AMOLED pixels entirely, saves battery |

---

## Build & Ship Pipeline

### Phase 1: Build for Device (Sideload)

1. VS Code Command Palette → `Monkey C: Build for Device`
2. Select target: fenix 8 (47mm AMOLED / 51mm Solar — match your hardware)
3. Output: `.prg` file

### Phase 2: Transfer to Watch

1. Connect watch via USB-C
2. Watch mounts as MTP storage
   - **Linux/Windows**: appears as drive in file manager
   - **Mac**: needs Android File Transfer or OpenMTP
3. Copy `.prg` to: `Internal Storage > Garmin > Apps`
4. Safely eject → watchface appears in device list

### Phase 3: Store Publishing (Optional)

1. VS Code → `Monkey C: Export Project` → produces `.iq` package (all device versions)
2. Upload to [Garmin Developer Dashboard](https://developer.garmin.com/connect-iq/)
3. Garmin review: 2–4 days approval cycle

---

## AMOLED Always-On (Critical)

The watchface **will crash or be disabled** without proper AOD implementation:

```monkeyc
// Required: reduce to <10% pixel usage in sleep mode
function onEnterSleep() {
    // Switch to minimal layout — time only, no complications
    // Use anti-burn-in pixel shifting
}

function onExitSleep() {
    // Restore full layout with all data fields
}
```

---

## Checklist

- [ ] Install VS Code + Monkey C extension + Connect IQ SDK
- [ ] Generate `developer_key.der`
- [ ] Design watchface layout (digital, data fields: HR, HRV, battery, solar)
- [ ] Implement main `WatchFace` class in Monkey C
- [ ] Implement `onEnterSleep()` / `onExitSleep()` for AMOLED AOD
- [ ] Build for device → `.prg`
- [ ] Sideload to fenix 8 via USB-C → test on hardware
- [ ] Test battery impact over 24h
- [ ] Optional: export `.iq` and publish to Connect IQ Store
