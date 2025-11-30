# Analytics & Meta Tags Documentation

## Table 1: Integration Status

| Project | Matomo Tag | Matomo JS | OG Tags | OG Image | Twitter Card |
|---------|:----------:|:---------:|:-------:|:--------:|:------------:|
| central_bank | ✅ | ✅ | ❌ | ❌ | ❌ |
| cloud | ✅ | ✅ | ✅ | ✅ | ✅ |
| cv_pdf | ✅ | ✅ | ❌ | ❌ | ❌ |
| cv_web | ✅ | ✅ | ✅ | ✅ | ✅ |
| feed_yourself | ✅ | ✅ | ❌ | ❌ | ❌ |
| health_tracker | ✅ | ✅ | ❌ | ❌ | ❌ |
| landpage | ✅ | ✅ | ✅ | ✅ | ✅ |
| linktree | ✅ | ✅ | ✅ | ✅ | ✅ |
| market_watch | ✅ | ✅ | ✅ | ✅ | ✅ |
| myfeed | ✅ | ✅ | ✅ | ✅ | ✅ |
| mygames | ✅ | ✅* | ✅ | ✅ | ✅ |
| mymaps | ✅ | ✅* | ❌ | ❌ | ❌ |
| myprofile | ✅ | ✅ | ✅ | ❌ | ❌ |
| nexus | ✅ | ✅ | ✅ | ❌ | ✅ |
| others | ✅ | ✅ | ✅ | ✅ | ✅ |

**Legend:**
- ✅ = Implemented
- ❌ = Missing
- ✅* = Located in non-standard path (mygames: `src/static/mygames_matomo.js`, mymaps: `public/mymaps_matomo.js`)

---

## Table 2: Matomo Tracking Features by Project

### central_bank
| Event Category | Action | Description |
|----------------|--------|-------------|
| CentralBank | Model Switch | DSGE/ABM model tab changes |
| CentralBank | Simulation | Run/Toggle simulation controls |
| CentralBank | Parameters | Reset parameter values |
| CentralBank | Agents | Reset agent states |
| CentralBank | Data Source | Data source selection changes |
| CentralBank | Theme | Light/Dark theme toggle |
| CentralBank | Parameter Change | Slider/input value changes |
| CentralBank | Charts Loaded | Number of charts on page load |
| CentralBank | Models Available | Number of model tabs available |

### cloud
| Event Category | Action | Description |
|----------------|--------|-------------|
| Cloud | Service Click | Cloud service card interactions |
| Cloud | Documentation | Documentation link clicks |
| Cloud | Status Check | Service status checks |
| Cloud | Services Loaded | Services count on page load |

### cv_pdf
| Event Category | Action | Description |
|----------------|--------|-------------|
| CV PDF | Download | PDF download button clicks |
| CV PDF | Navigation | Page navigation within PDF |
| CV PDF | Zoom | Zoom in/out actions |
| CV PDF | Print | Print dialog interactions |
| CV PDF | Fullscreen | Fullscreen toggle |
| CV PDF | Viewer | PDF viewer load status |

### cv_web
| Event Category | Action | Description |
|----------------|--------|-------------|
| CV | Download | CV download clicks |
| CV UI | Theme Toggle | Light/Dark theme switch |
| CV UI | Font Size | Font size adjustments |
| CV UI | Language Toggle | Language selector changes |
| CV UI | Palette Cycle | Color palette changes |
| CV UI | Terminal Theme Toggle | Terminal style toggle |
| CV UI | Navigation | Navigation menu open/close |
| CV UI | View Mode | View mode changes |
| CV Engagement | Section Toggle | Section expand/collapse |
| CV | View Source | GitHub link clicks |

### feed_yourself
| Event Category | Action | Description |
|----------------|--------|-------------|
| Feed Yourself | Action | General user actions |
| Feed Yourself | Content Link | Content link clicks |
| Feed Yourself | Page | Page load tracking |

### health_tracker
| Event Category | Action | Description |
|----------------|--------|-------------|
| HealthTracker | Metric Click | Health metric card clicks |
| HealthTracker | Chart Interaction | Chart interactions |
| HealthTracker | Period Select | Time period selection |
| HealthTracker | Tab Navigation | Tab switching |
| HealthTracker | Data Input | Data entry actions |
| HealthTracker | Metrics Loaded | Metrics count on load |

### landpage
| Event Category | Action | Description |
|----------------|--------|-------------|
| Session | Device Type | Device type detection |
| CTA | Click | Call-to-action button clicks |
| Clippy | Action | Clippy assistant interactions |
| UI | Theme Toggle | Theme switching |
| UI | Animation Toggle | Animation enable/disable |
| UI | Background Toggle | Background changes |
| Engagement | Time on Page | Session duration tracking |

### linktree
| Event Category | Action | Description |
|----------------|--------|-------------|
| Social | Icon Click | Social media icon clicks |
| Linktree | Link Click | Main link clicks |
| Linktree | More Button | Expand section buttons |
| Download | vCard | Contact card downloads |
| Engagement | Section Viewed | Section visibility tracking |

### market_watch
| Event Category | Action | Description |
|----------------|--------|-------------|
| MarketWatch | Symbol Click | Stock/asset symbol clicks |
| MarketWatch | Widget Interaction | Widget interactions |
| MarketWatch | Timeframe Select | Chart timeframe changes |
| MarketWatch | Chart Type | Chart type selection |
| MarketWatch | Refresh | Data refresh actions |
| MarketWatch | External Link | External link clicks |
| MarketWatch | Search | Search functionality usage |
| MarketWatch | Widgets Loaded | Widget count on load |
| MarketWatch | Tickers Loaded | Ticker count on load |

### myfeed
| Event Category | Action | Description |
|----------------|--------|-------------|
| MyFeed | Item Click | Feed item clicks |
| MyFeed | Filter | Filter application |
| MyFeed | Sort | Sort order changes |
| MyFeed | Scroll Depth | Scroll percentage tracking |

### mygames
| Event Category | Action | Description |
|----------------|--------|-------------|
| MyGames | Game Select | Game card selection |
| MyGames | Game Launch | Game start actions |
| MyGames | Theme | Theme toggle |
| MyGames | Navigation | Navigation link clicks |
| MyGames | Games Available | Games count on load |

### mymaps
| Event Category | Action | Description |
|----------------|--------|-------------|
| MyMaps | Marker Click | Map marker interactions |
| MyMaps | Location Select | Location list selection |
| MyMaps | Layer Toggle | Map layer toggles |
| MyMaps | Zoom | Zoom in/out actions |
| MyMaps | Theme | Theme toggle |
| MyMaps | Search | Map search usage |
| MyMaps | Markers Loaded | Marker count on load |
| MyMaps | Layers Available | Layer count on load |

### myprofile
| Event Category | Action | Description |
|----------------|--------|-------------|
| MyProfile | Navigation | Navigation interactions |
| MyProfile | Game Select | Game selection |
| MyProfile | Photo | Photo view actions |
| MyProfile | Music | Music player interactions |
| MyProfile | Stats | Stats section interactions |
| MyProfile | Game Page | Game page load tracking |

### nexus
| Event Category | Action | Description |
|----------------|--------|-------------|
| Nexus | Link Click | Link interactions |
| Nexus | Page | Page load tracking |

### others
| Event Category | Action | Description |
|----------------|--------|-------------|
| Others | Card Click | Card interactions |
| Others | Page | Page load tracking |

---

## Matomo Tracking File Locations

| Project | Matomo JS Path |
|---------|---------------|
| central_bank | `public/matomo.js` |
| cloud | `public/matomo.js` |
| cv_pdf | `public/matomo.js` |
| cv_web | `public/matomo.js` |
| feed_yourself | `public/matomo.js` |
| health_tracker | `public/matomo.js` |
| landpage | `public/matomo.js` |
| linktree | `public/matomo.js` |
| market_watch | `public/matomo.js` |
| myfeed | `public/matomo.js` |
| mygames | `src/static/mygames_matomo.js` |
| mymaps | `public/mymaps_matomo.js` |
| myprofile | `public/matomo.js` |
| nexus | `public/matomo.js` |
| others | `public/matomo.js` |

---

## Symlinks Reference

All matomo tracking files are symlinked in:
`/1.ops/matomo-tracking/`

```
├── central_bank.js -> ../../central_bank/public/matomo.js
├── cloud.js -> ../../cloud/public/matomo.js
├── cv_pdf.js -> ../../cv_pdf/public/matomo.js
├── cv_web.js -> ../../cv_web/public/matomo.js
├── feed_yourself.js -> ../../feed_yourself/public/matomo.js
├── health_tracker.js -> ../../health_tracker/public/matomo.js
├── landpage.js -> ../../landpage/public/matomo.js
├── linktree.js -> ../../linktree/public/matomo.js
├── market_watch.js -> ../../market_watch/public/matomo.js
├── myfeed.js -> ../../myfeed/public/matomo.js
├── mygames.js -> ../../mygames/src/static/mygames_matomo.js
├── mymaps.js -> ../../mymaps/public/mymaps_matomo.js
├── myprofile.js -> ../../myprofile/public/matomo.js
├── nexus.js -> ../../nexus/public/matomo.js
└── others.js -> ../../others/public/matomo.js
```
