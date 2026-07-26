// GENERATED FROM personal-tools.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["personal-tools"] = {
  "_description": "Declarative source of truth for the Personal Tools section-box. Each `slide` becomes one swiper-slide. `kind=tools` slides render as `.link-section > .featured-image + .tools-dashboard > .tools-column` (matches the hand-coded markup). Slides hand-coded in index.html are not listed here; only the migrated ones are.",
  "section": {
    "id": "personal-tools",
    "title": "Projects",
    "swiper_class": "personal-tools-swiper",
    "box": 2
  },
  "slides": [
    {
      "id": "repos",
      "kind": "repos",
      "title": "REPOS",
      "image": {
        "src": "public/images/banners/repos.gif",
        "alt": "Coding"
      },
      "top_links": [
        {
          "label": "Github",
          "url": "https://github.com/diegonmarcos",
          "icon": "brand-github.svg",
          "preview": "public/thumbnails/github_com.jpg",
          "item": 0
        }
      ],
      "dashboard_modifier": "tools-dashboard--5",
      "columns": [
        {
          "header": "Front-end",
          "links": [
            {
              "label": "Portals",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io/tree/main/a_Portals",
              "icon": "world.svg",
              "item": 0
            },
            {
              "label": "Profiles",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io/tree/main/b_Work_Profiles",
              "icon": "file-type-html.svg",
              "item": 1
            },
            {
              "label": "Work Tools",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io/tree/main/b_Work_Tools",
              "icon": "settings.svg",
              "item": 2
            },
            {
              "label": "Personal Tools",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io/tree/main/c_Personal_Tools",
              "icon": "device-desktop.svg",
              "item": 3
            }
          ],
          "group": 0
        },
        {
          "header": "Cloud",
          "links": [
            {
              "label": "Cloud",
              "url": "https://github.com/diegonmarcos/cloud",
              "icon": "world.svg",
              "item": 0
            },
            {
              "label": "Unix",
              "url": "https://github.com/diegonmarcos/unix",
              "icon": "settings.svg",
              "item": 1
            },
            {
              "label": "Vault",
              "url": "https://github.com/diegonmarcos/vault",
              "icon": "bolt.svg",
              "item": 2
            },
            {
              "label": "Front",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io",
              "icon": "world.svg",
              "item": 3
            },
            {
              "label": "Tooling",
              "url": "https://github.com/diegonmarcos/ops-Tooling",
              "icon": "git-branch.svg",
              "item": 4
            },
            {
              "label": "MCP Servers",
              "url": "https://github.com/diegonmarcos/diegonmarcos.github.io/tree/main/b_Work_Tools/skills_mcp",
              "icon": "brain.svg",
              "item": 5
            }
          ],
          "group": 1
        },
        {
          "header": "Low Level",
          "links": [
            {
              "label": "My Libs",
              "url": "https://github.com/diegonmarcos/ops-Mylibs",
              "icon": "git-branch.svg",
              "item": 0
            },
            {
              "label": "Algorithms",
              "url": "https://github.com/diegonmarcos/back-Algo",
              "icon": "settings.svg",
              "item": 1
            },
            {
              "label": "System",
              "url": "https://github.com/diegonmarcos/back-System",
              "icon": "settings.svg",
              "item": 2
            },
            {
              "label": "Graphics",
              "url": "https://github.com/diegonmarcos/back-Graphic",
              "icon": "device-desktop.svg",
              "item": 3
            },
            {
              "label": "Cyber",
              "url": "https://github.com/diegonmarcos/cyber-Cyberwarfare",
              "icon": "bolt.svg",
              "item": 4
            },
            {
              "label": "42 School",
              "url": "https://github.com/diegonmarcos/lecole42",
              "icon": "rocket.svg",
              "item": 5
            }
          ],
          "group": 2
        },
        {
          "header": "ML",
          "links": [
            {
              "label": "Agentic AI",
              "url": "https://github.com/diegonmarcos/ml-Agentic",
              "icon": "brain.svg",
              "item": 0
            },
            {
              "label": "Machine Learning",
              "url": "https://github.com/diegonmarcos/ml-MachineLearning",
              "icon": "brain.svg",
              "item": 1
            }
          ],
          "group": 3
        },
        {
          "header": "Data",
          "links": [
            {
              "label": "Data Science",
              "url": "https://github.com/diegonmarcos/ml-DataScience",
              "icon": "database.svg",
              "item": 0
            },
            {
              "label": "Civil Eng",
              "url": "https://github.com/diegonmarcos/cveng_AFrame",
              "icon": "settings.svg",
              "item": 1
            },
            {
              "label": "Macro/Quant",
              "url": "https://github.com/diegonmarcos/ecoqt-thesis1",
              "icon": "database.svg",
              "item": 2
            }
          ],
          "group": 4
        }
      ],
      "slide": 0
    },
    {
      "id": "suite",
      "kind": "tools",
      "title": "SUITE",
      "image": {
        "src": "public/images/banners/suite.gif",
        "alt": "Suite"
      },
      "columns": [
        {
          "header": "AI & IDE",
          "links": [
            {
              "label": "Goose",
              "url": "https://github.com/block/goose",
              "icon": "robot.svg",
              "item": 0
            },
            {
              "label": "Claude CLI",
              "url": "https://claude.ai",
              "icon": "robot.svg",
              "item": 1
            },
            {
              "label": "WebIDE",
              "url": "https://ide.diegonmarcos.com",
              "icon": "device-desktop.svg",
              "item": 2
            },
            {
              "label": "Jupyter NB",
              "url": "https://jupyter.diegonmarcos.com",
              "icon": "code.svg",
              "item": 3
            }
          ],
          "group": 0,
          "row": 0
        },
        {
          "header": "Suite",
          "header_url": "https://diegonmarcos.github.io/suite",
          "links": [
            {
              "label": "Notes",
              "url": "https://hedgedoc.diegonmarcos.com",
              "icon": "file-stack.svg",
              "item": 0
            },
            {
              "label": "Sheets",
              "url": "https://sheets.diegonmarcos.com",
              "icon": "database.svg",
              "item": 1
            },
            {
              "label": "Docs",
              "url": "https://docs.diegonmarcos.com",
              "icon": "file-stack.svg",
              "item": 2
            },
            {
              "label": "Slides",
              "url": "https://slides.diegonmarcos.com",
              "icon": "slideshow.svg",
              "item": 3
            },
            {
              "label": "Calendar",
              "url": "https://cal.diegonmarcos.com",
              "icon": "checklist.svg",
              "item": 4
            },
            {
              "label": "Contacts",
              "url": "https://contacts.diegonmarcos.com",
              "icon": "user.svg",
              "item": 5
            },
            {
              "label": "Files",
              "url": "https://files.diegonmarcos.com",
              "icon": "file-stack.svg",
              "item": 6
            }
          ],
          "group": 1,
          "row": 0
        },
        {
          "header": "Comms",
          "links": [
            {
              "label": "Mail",
              "url": "https://diegonmarcos.github.io/mymail",
              "icon": "mail.svg",
              "item": 0
            },
            {
              "label": "Mattermost",
              "url": "https://chat.diegonmarcos.com",
              "icon": "send.svg",
              "item": 1
            },
            {
              "label": "ntfy",
              "url": "https://ntfy.diegonmarcos.com",
              "icon": "checklist.svg",
              "item": 2
            }
          ],
          "group": 2,
          "row": 0
        },
        {
          "header": "Nav",
          "header_url": "https://diegonmarcos.github.io/mymaps",
          "links": [
            {
              "label": "Navigation",
              "url": "https://diegonmarcos.github.io/mymaps-navigation",
              "icon": "map-pin-2.svg",
              "item": 0
            },
            {
              "label": "Maps",
              "url": "https://diegonmarcos.github.io/mymaps-maps",
              "icon": "world.svg",
              "item": 1
            }
          ],
          "group": 3,
          "row": 0
        },
        {
          "row": 1,
          "group": 5,
          "id": "media",
          "header": "Media",
          "links": [
            {
              "label": "Feed",
              "url": "https://diegonmarcos.github.io/myfeed",
              "icon": "device-desktop.svg",
              "item": 0
            },
            {
              "label": "Movies",
              "url": "https://diegonmarcos.github.io/movies",
              "icon": "device-desktop.svg",
              "item": 1
            },
            {
              "label": "Music",
              "url": "https://diegonmarcos.github.io/music",
              "icon": "device-desktop.svg",
              "item": 2
            }
          ]
        },
        {
          "row": 1,
          "group": 6,
          "id": "memory",
          "header": "Memory",
          "links": [
            {
              "label": "MyPhotos",
              "url": "https://diegonmarcos.github.io/myphotos",
              "icon": "device-desktop.svg",
              "item": 0
            },
            {
              "label": "MyTrips",
              "url": "https://diegonmarcos.github.io/mymaps-mytrips",
              "icon": "world-longitude.svg",
              "item": 1
            },
            {
              "label": "PhotoPrism",
              "url": "https://photos.diegonmarcos.com",
              "icon": "slideshow.svg",
              "item": 2
            }
          ]
        },
        {
          "row": 1,
          "group": 7,
          "id": "health",
          "header": "Health",
          "links": [
            {
              "label": "Tracker",
              "url": "https://diegonmarcos.github.io/myhealth-tracker",
              "icon": "heart.svg",
              "item": 0
            },
            {
              "label": "FeedYourself",
              "url": "https://diegonmarcos.github.io/myhealth-feedyourself",
              "icon": "brain.svg",
              "item": 1
            },
            {
              "label": "Profile",
              "url": "https://diegonmarcos.github.io/myhealth-profile",
              "icon": "heart.svg",
              "item": 2
            }
          ]
        },
        {
          "row": 1,
          "group": 8,
          "id": "tools",
          "header": "Tools",
          "links": [
            {
              "label": "Gitea",
              "url": "https://git.diegonmarcos.com",
              "icon": "code.svg",
              "item": 0
            },
            {
              "label": "JSON Vision",
              "url": "https://diegonmarcos.github.io/json-vision",
              "icon": "code.svg",
              "item": 1
            },
            {
              "label": "NocoDB",
              "url": "https://nocodb.diegonmarcos.com",
              "icon": "database.svg",
              "item": 2
            },
            {
              "label": "Vault",
              "url": "https://vault.diegonmarcos.com",
              "icon": "lock.svg",
              "item": 3
            },
            {
              "label": "tldraw",
              "url": "https://diegonmarcos.github.io/tldraw/",
              "icon": "brush.svg",
              "item": 4
            },
            {
              "label": "myID",
              "url": "https://diegonmarcos.github.io/myid",
              "icon": "cards.svg",
              "item": 5
            }
          ]
        }
      ],
      "slide": 1
    },
    {
      "id": "lab-tools",
      "kind": "tools",
      "title": "LAB TOOLS",
      "image": {
        "src": "public/images/banners/lab-tools.gif",
        "alt": "Lab Tools"
      },
      "columns": [
        {
          "header": "Data Science & ML",
          "links": [
            {
              "label": "Colab",
              "url": "https://colab.research.google.com",
              "icon": "sparkles.svg",
              "item": 0
            },
            {
              "label": "Kaggle",
              "url": "https://kaggle.com",
              "icon": "brain.svg",
              "item": 1
            },
            {
              "label": "HuggingFace",
              "url": "https://huggingface.co",
              "icon": "robot.svg",
              "item": 2
            },
            {
              "label": "PyTorch",
              "url": "https://pytorch.org",
              "icon": "bolt.svg",
              "item": 3
            },
            {
              "label": "TensorFlow",
              "url": "https://tensorflow.org",
              "icon": "bolt.svg",
              "item": 4
            },
            {
              "label": "Scikit-learn",
              "url": "https://scikit-learn.org",
              "icon": "code.svg",
              "item": 5
            },
            {
              "label": "IBM Quantum",
              "url": "https://quantum.ibm.com",
              "icon": "rocket.svg",
              "item": 6
            },
            {
              "label": "Qiskit",
              "url": "https://qiskit.org",
              "icon": "code.svg",
              "item": 7
            },
            {
              "label": "Google QAI",
              "url": "https://quantumai.google",
              "icon": "sparkles.svg",
              "item": 8
            },
            {
              "label": "Cirq",
              "url": "https://quantumai.google/cirq",
              "icon": "code.svg",
              "item": 9
            },
            {
              "label": "PennyLane",
              "url": "https://pennylane.ai",
              "icon": "bolt.svg",
              "item": 10
            },
            {
              "label": "Braket",
              "url": "https://aws.amazon.com/braket",
              "icon": "rocket.svg",
              "item": 11
            },
            {
              "label": "Azure QC",
              "url": "https://azure.microsoft.com/products/quantum",
              "icon": "world.svg",
              "item": 12
            },
            {
              "label": "QInspire",
              "url": "https://www.quantum-inspire.com",
              "icon": "brain.svg",
              "item": 13
            }
          ],
          "group": 0
        },
        {
          "header": "Markets",
          "links": [
            {
              "label": "Fin Terminal",
              "url": "https://diegonmarcos.github.io/fin-terminal",
              "icon": "database.svg",
              "item": 0
            },
            {
              "label": "GDELT News",
              "url": "https://news.diegonmarcos.com",
              "icon": "world.svg",
              "item": 1
            },
            {
              "label": "MarketWatch",
              "url": "https://diegonmarcos.github.io/market_watch",
              "icon": "database.svg",
              "item": 2
            },
            {
              "label": "CentralBank",
              "url": "https://diegonmarcos.github.io/central_bank",
              "icon": "database.svg",
              "item": 3
            },
            {
              "label": "My Financials",
              "url": "https://diegonmarcos.github.io/my-fin",
              "icon": "ledger.svg",
              "item": 4
            }
          ],
          "group": 1
        },
        {
          "header": "Engineer",
          "links": [
            {
              "label": "Sailytics",
              "url": "https://diegonmarcos.github.io/sailytics",
              "icon": "world.svg",
              "item": 0
            },
            {
              "label": "OpenRevit",
              "url": "https://diegonmarcos.github.io/openrevit",
              "icon": "settings.svg",
              "item": 1
            }
          ],
          "group": 2
        }
      ],
      "slide": 2
    },
    {
      "id": "circus",
      "kind": "tools",
      "title": "CIRCUS",
      "image": {
        "src": "public/images/banners/circus.gif",
        "alt": "Circus"
      },
      "columns": [
        {
          "header": "Games",
          "links": [
            {
              "label": "Games",
              "url": "https://diegonmarcos.github.io/games",
              "icon": "device-gamepad.svg",
              "item": 0
            },
            {
              "label": "Carto",
              "url": "https://diegonmarcos.github.io/carto/",
              "icon": "cards.svg",
              "item": 1
            },
            {
              "label": "myAstro",
              "url": "https://diegonmarcos.github.io/myAstro",
              "icon": "world-longitude.svg",
              "item": 2
            },
            {
              "label": "Worms",
              "url": "https://archive.org/details/worms_team17",
              "icon": "device-gamepad.svg",
              "item": 3
            }
          ],
          "group": 0
        },
        {
          "header": "Video",
          "links": [
            {
              "label": "MyVideos",
              "url": "https://diegonmarcos.github.io/myvideos",
              "icon": "video.svg",
              "item": 0
            },
            {
              "label": "Movies",
              "url": "https://diegonmarcos.github.io/movies/",
              "icon": "brand-youtube.svg",
              "item": 1
            }
          ],
          "group": 1
        },
        {
          "header": "Audio",
          "links": [
            {
              "label": "Music",
              "url": "https://diegonmarcos.github.io/music/",
              "icon": "headphones.svg",
              "item": 0
            }
          ],
          "group": 2
        },
        {
          "header": "Galaxy",
          "links": [
            {
              "label": "Galaxy - Gaia",
              "url": "https://diegonmarcos.github.io/galaxy-gaia/",
              "icon": "world.svg",
              "item": 0
            },
            {
              "label": "Galaxy - Earth",
              "url": "https://diegonmarcos.github.io/galaxy-earth/",
              "icon": "world.svg",
              "item": 1
            },
            {
              "label": "Galaxy - X1",
              "url": "https://diegonmarcos.github.io/galaxy-x1/",
              "icon": "world.svg",
              "item": 2
            }
          ],
          "group": 3
        }
      ],
      "slide": 3
    },
    {
      "id": "cloud",
      "kind": "tools",
      "title": "CLOUD",
      "image": {
        "src": "public/images/banners/cloud.gif",
        "alt": "Coding"
      },
      "dashboard_modifier": "tools-dashboard--5",
      "columns": [
        {
          "header": "Security",
          "header_url": "https://diegonmarcos.github.io/cloud",
          "links": [
            {
              "label": "Authelia",
              "url": "https://auth.diegonmarcos.com",
              "icon": "lock.svg",
              "item": 0
            },
            {
              "label": "Vault",
              "url": "https://vault.diegonmarcos.com",
              "icon": "lock.svg",
              "item": 1
            },
            {
              "label": "Caddy",
              "url": "https://proxy.diegonmarcos.com",
              "icon": "world.svg",
              "item": 2
            },
            {
              "label": "Introspect",
              "url": "https://introspect.diegonmarcos.com",
              "icon": "lock.svg",
              "item": 3
            },
            {
              "label": "Hickory DNS",
              "url": "https://dns.diegonmarcos.com",
              "icon": "world.svg",
              "item": 4
            },
            {
              "label": "Sauron YARA",
              "url": "https://sauron.diegonmarcos.com",
              "icon": "bolt.svg",
              "item": 5
            },
            {
              "label": "SIEM",
              "url": "https://siem.diegonmarcos.com",
              "icon": "database.svg",
              "item": 6
            },
            {
              "label": "WG0",
              "url": "https://wg.diegonmarcos.com",
              "icon": "lock.svg",
              "item": 7
            },
            {
              "label": "CrowdSec",
              "url": "https://crowdsec.diegonmarcos.com",
              "icon": "bolt.svg",
              "item": 8
            }
          ],
          "group": 0
        },
        {
          "header": "Ops",
          "header_url": "https://diegonmarcos.github.io/cloud",
          "links": [
            {
              "label": "Dagu",
              "url": "https://workflows.diegonmarcos.com",
              "icon": "settings.svg",
              "item": 0
            },
            {
              "label": "Grafana",
              "url": "https://grafana.diegonmarcos.com",
              "icon": "database.svg",
              "item": 1
            },
            {
              "label": "ntfy",
              "url": "https://rss.diegonmarcos.com",
              "icon": "bolt.svg",
              "item": 2
            },
            {
              "label": "GHA",
              "url": "https://github.com/diegonmarcos/cloud/actions",
              "icon": "git-branch.svg",
              "item": 3
            },
            {
              "label": "GHCR",
              "url": "https://github.com/orgs/diegonmarcos/packages",
              "icon": "database.svg",
              "item": 4
            }
          ],
          "group": 1
        },
        {
          "header": "Data",
          "header_url": "https://diegonmarcos.github.io/cloud",
          "links": [
            {
              "label": "Matomo",
              "url": "https://analytics.diegonmarcos.com",
              "icon": "database.svg",
              "item": 0
            },
            {
              "label": "Gitea",
              "url": "https://git.diegonmarcos.com",
              "icon": "code.svg",
              "item": 1
            },
            {
              "label": "Dozzle",
              "url": "https://logs.diegonmarcos.com",
              "icon": "file-stack.svg",
              "item": 2
            },
            {
              "label": "DBGate",
              "url": "https://dbgate.diegonmarcos.com",
              "icon": "database.svg",
              "item": 3
            },
            {
              "label": "Rustic",
              "url": "https://backup.diegonmarcos.com",
              "icon": "file-stack.svg",
              "item": 4
            },
            {
              "label": "Umami",
              "url": "https://umami.diegonmarcos.com",
              "icon": "database.svg",
              "item": 5
            },
            {
              "label": "NocoDB",
              "url": "https://nocodb.diegonmarcos.com",
              "icon": "database.svg",
              "item": 6
            }
          ],
          "group": 2
        },
        {
          "header": "MCP & API",
          "links": [
            {
              "label": "c3-infra-api",
              "url": "https://api.diegonmarcos.com/c3-api",
              "icon": "code.svg",
              "item": 0
            },
            {
              "label": "c3-infra-mcp",
              "url": "https://diegonmarcos.github.io/skills_mcp",
              "icon": "robot.svg",
              "item": 1
            },
            {
              "label": "c3-services-api",
              "url": "https://api.diegonmarcos.com/c3-services",
              "icon": "code.svg",
              "item": 2
            },
            {
              "label": "c3-services-mcp",
              "url": "https://diegonmarcos.github.io/skills_mcp",
              "icon": "robot.svg",
              "item": 3
            },
            {
              "label": "cgc-mcp",
              "url": "https://diegonmarcos.github.io/skills_mcp",
              "icon": "robot.svg",
              "item": 4
            },
            {
              "label": "dtk-mcp",
              "url": "https://diegonmarcos.github.io/skills_mcp",
              "icon": "robot.svg",
              "item": 5
            }
          ],
          "group": 3
        },
        {
          "header": "VPS",
          "header_url": "https://diegonmarcos.github.io/cloud",
          "links": [
            {
              "label": "Oracle",
              "url": "https://cloud.oracle.com",
              "icon": "database.svg",
              "item": 0
            },
            {
              "label": "GCloud",
              "url": "https://console.cloud.google.com",
              "icon": "database.svg",
              "item": 1
            },
            {
              "label": "Cloudflare",
              "url": "https://dash.cloudflare.com",
              "icon": "world.svg",
              "item": 2
            },
            {
              "label": "GitHub",
              "url": "https://github.com/diegonmarcos",
              "icon": "code.svg",
              "item": 3
            },
            {
              "label": "Hetzner",
              "url": "https://console.hetzner.cloud",
              "icon": "database.svg",
              "item": 4
            },
            {
              "label": "Nvidia LLM",
              "url": "https://build.nvidia.com",
              "icon": "brain.svg",
              "item": 5
            }
          ],
          "group": 4
        }
      ],
      "extras": {
        "primary_link": {
          "label": "Cloud Portal",
          "url": "https://diegonmarcos.github.io/cloud",
          "icon": "settings.svg"
        },
        "profile_icons": [
          {
            "url": "https://github.com/diegonmarcos/diegonmarcos.github.io",
            "title": "Front",
            "icon": "world.svg"
          },
          {
            "url": "https://github.com/diegonmarcos/cloud",
            "title": "Cloud",
            "icon": "database.svg"
          },
          {
            "url": "https://github.com/diegonmarcos/cloud-data",
            "title": "Cloud-data",
            "icon": "database.svg"
          },
          {
            "url": "https://github.com/diegonmarcos/ops-Tooling",
            "title": "Tools",
            "icon": "git-branch.svg"
          },
          {
            "url": "https://github.com/diegonmarcos/unix",
            "title": "Unix",
            "icon": "settings.svg"
          }
        ]
      },
      "slide": 4
    },
    {
      "id": "projects",
      "kind": "tools",
      "title": "Knowledge Center",
      "image": {
        "src": "public/images/brucheion.jpg",
        "alt": "Projects"
      },
      "row_headers": [
        {
          "title": "Brucheion"
        },
        {
          "title": "Serapeum"
        }
      ],
      "columns": [
        {
          "row": 0,
          "header": "Basileia",
          "links": [
            {
              "label": "Basileia",
              "url": "#",
              "icon": "sparkles.svg",
              "item": 0
            }
          ],
          "group": 0
        },
        {
          "row": 0,
          "header": "Mousseion",
          "links": [
            {
              "label": "Mousseion",
              "url": "#",
              "icon": "books.svg",
              "item": 0
            }
          ],
          "group": 1
        },
        {
          "row": 0,
          "header": "Paneion",
          "links": [
            {
              "label": "Paneion",
              "url": "#",
              "icon": "bulb.svg",
              "item": 0
            }
          ],
          "group": 2
        },
        {
          "row": 1,
          "header": "Akropolis",
          "links": [
            {
              "label": "Akropolis",
              "url": "#",
              "icon": "rocket.svg",
              "item": 0
            }
          ],
          "group": 3
        },
        {
          "row": 1,
          "header": "Bibliotheke",
          "links": [
            {
              "label": "Bibliotheke",
              "url": "#",
              "icon": "books.svg",
              "item": 0
            }
          ],
          "group": 4
        },
        {
          "row": 1,
          "header": "Adyton",
          "links": [
            {
              "label": "Adyton",
              "url": "#",
              "icon": "bolt.svg",
              "item": 0
            }
          ],
          "group": 5
        }
      ],
      "slide": 5
    }
  ]
}
;
})();
