// GENERATED FROM professional-profiles.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/_data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["professional-profiles"] = {
  "_description": "Declarative source of truth for the Professional Profiles section-box. Each `slide` becomes one swiper-slide. `kind=tools` slides render as `.link-section > .featured-image + .tools-dashboard > .tools-column` (matches Personal Tools markup). `kind=profile-card` renders the PROFILE slide with card-swiper image+video, contact icons, profile icons, ventures icons, plain links and a collapsible content block. `kind=repos` renders REPOS slide with a top link plus a tools-dashboard. `kind=venture-card` renders the venture slides (NEXUS/LEAFY/STARK) with contact icons + grouped sections containing either a single full-width link or a links-grid (grid-3).",
  "section": {
    "id": "professional-profiles",
    "title": "Professional Profiles",
    "swiper_class": "professional-swiper",
    "box": 0
  },
  "slides": [
    {
      "id": "professional-profile",
      "kind": "profile-card",
      "title": "PROFILE",
      "card_swiper": [
        {
          "type": "image",
          "src": "public/images/banners/professional-profile.jpg",
          "alt": "Professional",
          "active": true,
          "item": 0
        },
        {
          "type": "video",
          "src": "public/videos/banners/professional-profile.mp4",
          "item": 1
        }
      ],
      "sections": [
        {
          "title": "Contact",
          "layout": "contact-icons",
          "items": [
            {
              "label": "Email",
              "url": "mailto:me@diegonmarcos.com",
              "icon": "mail.svg",
              "preview": "https://s.wordpress.com/mshots/v1/mailto:me@diegonmarcos.com",
              "item": 0
            },
            {
              "label": "LinkedIn",
              "url": "https://linkedin.com/in/diegonmarcos",
              "icon": "brand-linkedin.svg",
              "preview": "public/thumbnails/github_com.jpg",
              "item": 1
            },
            {
              "label": "vCard",
              "url": "public/diegonmarcos-contact_photo.vcf",
              "icon": "user.svg",
              "download": "Diego_Nepomuceno_Marcos.vcf",
              "item": 2
            }
          ],
          "group": 0
        },
        {
          "title": "Profiles",
          "layout": "mixed",
          "links": [
            {
              "label": "Landpage",
              "url": "https://diegonmarcos.com/",
              "icon": "world.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "icon_links": [
            {
              "label": "LinkedIn",
              "url": "https://linkedin.com/in/diegonmarcos",
              "icon": "brand-linkedin.svg",
              "preview": "public/thumbnails/github_com.jpg",
              "item": 0
            },
            {
              "label": "GitHub",
              "url": "https://github.com/diegonmarcos",
              "icon": "brand-github.svg",
              "preview": "public/thumbnails/github_com.jpg",
              "item": 1
            }
          ],
          "group": 1
        },
        {
          "title": "Ventures",
          "layout": "contact-icons",
          "items": [
            {
              "label": "Nexus",
              "url": "https://diegonmarcos.github.io/nexus/",
              "icon": "rocket.svg",
              "preview": "public/images/professional.png",
              "item": 0
            },
            {
              "label": "Leafy",
              "url": "https://diegonmarcos.github.io/leafy/",
              "icon": "christmas-tree.svg",
              "preview": "public/thumbnails_new/leafy_thumbnail.png",
              "item": 1
            },
            {
              "label": "Stark",
              "url": "https://diegonmarcos.github.io/stark/",
              "icon": "bolt.svg",
              "preview": "public/thumbnails_new/stark_thumbnail.png",
              "item": 2
            }
          ],
          "group": 2
        }
      ],
      "collapsible": {
        "id": "professional-more",
        "sections": [
          {
            "title": "Curriculum",
            "layout": "links",
            "links": [
              {
                "label": "Curriculum (web)",
                "url": "https://diegonmarcos.github.io/cv_web",
                "icon": "file-type-html.svg",
                "preview": "public/images/professional.png",
                "item": 0
              },
              {
                "label": "Curriculum (pdf)",
                "url": "https://diegonmarcos.github.io/cv_pdf",
                "icon": "file-type-pdf.svg",
                "preview": "public/images/professional.png",
                "item": 1
              }
            ],
            "group": 0
          }
        ]
      },
      "slide": 0
    },
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
      "slide": 1
    },
    {
      "id": "nexus",
      "kind": "venture-card",
      "title": "NEXUS",
      "image": {
        "src": "public/images/banners/nexus.webp",
        "alt": "Nexus"
      },
      "sections": [
        {
          "title": "Contact",
          "layout": "contact-icons",
          "items": [
            {
              "label": "Email",
              "url": "mailto:me@diegonmarcos.com",
              "icon": "mail.svg",
              "item": 0
            },
            {
              "label": "LinkedIn",
              "url": "https://linkedin.com/in/diegonmarcos",
              "icon": "brand-linkedin.svg",
              "item": 1
            }
          ],
          "group": 0
        },
        {
          "title": "Venture",
          "layout": "links",
          "links": [
            {
              "label": "Nexus Website",
              "url": "https://diegonmarcos.github.io/nexus/",
              "icon": "rocket.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 1
        },
        {
          "title": "Cores",
          "layout": "links-grid",
          "grid": "grid-3",
          "links": [
            {
              "label": "Nexus Ventures",
              "url": "https://diegonmarcos.github.io/nexus/",
              "icon": "briefcase.svg",
              "item": 0
            },
            {
              "label": "Nexus Partners",
              "url": "https://diegonmarcos.github.io/nexus/",
              "icon": "user.svg",
              "item": 1
            },
            {
              "label": "Nexus Solutions",
              "url": "https://diegonmarcos.github.io/nexus/",
              "icon": "bulb.svg",
              "item": 2
            }
          ],
          "group": 2
        },
        {
          "title": "Material",
          "layout": "links",
          "links": [
            {
              "label": "Nexus Institutional Presentation",
              "url": "https://diegonmarcos.github.io/nexus/slides",
              "icon": "slideshow.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 3
        }
      ],
      "slide": 2
    },
    {
      "id": "leafy",
      "kind": "venture-card",
      "title": "LEAFY",
      "image": {
        "src": "public/images/leafy.jpg",
        "alt": "Leafy"
      },
      "sections": [
        {
          "title": "Contact",
          "layout": "contact-icons",
          "items": [
            {
              "label": "Email",
              "url": "mailto:me@diegonmarcos.com",
              "icon": "mail.svg",
              "item": 0
            },
            {
              "label": "LinkedIn",
              "url": "https://linkedin.com/in/diegonmarcos",
              "icon": "brand-linkedin.svg",
              "item": 1
            }
          ],
          "group": 0
        },
        {
          "title": "Venture",
          "layout": "links",
          "links": [
            {
              "label": "Leafy Website",
              "url": "https://diegonmarcos.github.io/leafy/",
              "icon": "christmas-tree.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 1
        },
        {
          "title": "Cores",
          "layout": "links-grid",
          "grid": "grid-3",
          "grid_groups": [
            [
              {
                "label": "AR/XR",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "sparkles.svg",
                "item": 0
              },
              {
                "label": "Front-ends",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "code.svg",
                "item": 1
              },
              {
                "label": "Drone Shows",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "video.svg",
                "item": 2
              }
            ],
            [
              {
                "label": "Cloud",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "database.svg",
                "item": 3
              },
              {
                "label": "AGI",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "brain.svg",
                "item": 4
              },
              {
                "label": "Software Graphics Engineering",
                "url": "https://diegonmarcos.github.io/leafy/",
                "icon": "device-desktop.svg",
                "item": 5
              }
            ]
          ],
          "group": 2
        },
        {
          "title": "Material",
          "layout": "links",
          "links": [
            {
              "label": "Leafy Institutional Presentation",
              "url": "https://diegonmarcos.github.io/leafy/",
              "icon": "slideshow.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 3
        }
      ],
      "slide": 3
    },
    {
      "id": "stark",
      "kind": "venture-card",
      "title": "STARK",
      "image": {
        "src": "public/images/stark.jpg",
        "alt": "Stark"
      },
      "sections": [
        {
          "title": "Contact",
          "layout": "contact-icons",
          "items": [
            {
              "label": "Email",
              "url": "mailto:me@diegonmarcos.com",
              "icon": "mail.svg",
              "item": 0
            },
            {
              "label": "LinkedIn",
              "url": "https://linkedin.com/in/diegonmarcos",
              "icon": "brand-linkedin.svg",
              "item": 1
            }
          ],
          "group": 0
        },
        {
          "title": "Venture",
          "layout": "links",
          "links": [
            {
              "label": "Stark Website",
              "url": "https://diegonmarcos.github.io/stark/",
              "icon": "bolt.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 1
        },
        {
          "title": "Divisions",
          "layout": "links-grid",
          "grid": "grid-3",
          "grid_groups": [
            [
              {
                "label": "Autonomous Assembly",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "robot.svg",
                "item": 0
              },
              {
                "label": "AI Core Systems",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "brain.svg",
                "item": 1
              },
              {
                "label": "Orbital Launch",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "rocket.svg",
                "item": 2
              }
            ],
            [
              {
                "label": "Habitat Engineering",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "world.svg",
                "item": 3
              },
              {
                "label": "Asteroid Mining",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "sparkles.svg",
                "item": 4
              },
              {
                "label": "Propulsion Lab",
                "url": "https://diegonmarcos.github.io/stark/",
                "icon": "bolt.svg",
                "item": 5
              }
            ]
          ],
          "group": 2
        },
        {
          "title": "Material",
          "layout": "links",
          "links": [
            {
              "label": "Stark Institutional Presentation",
              "url": "https://diegonmarcos.github.io/stark/slides",
              "icon": "slideshow.svg",
              "preview": "public/images/professional.png",
              "item": 0
            }
          ],
          "group": 3
        }
      ],
      "slide": 4
    }
  ]
}
;
})();
