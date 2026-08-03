// GENERATED FROM personal-profiles.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["personal-profiles"] = {
  "_description": "Declarative source of truth for the Personal Profiles section-box. Each `slide` becomes one swiper-slide. `kind=tools` slides render as `.link-section > .featured-image + .links-container > .tools-dashboard > .tools-column` (matches the hand-coded markup). `kind=profile-card` is a custom slide with a `card-swiper` (multiple stacked images), inline contact-icons, profile-icons and a collapsible MyMedia/MyEndurance/MyMaps/My-Bucket panel. Slides hand-coded in index.html are not listed here; only the migrated ones are.",
  "section": {
    "id": "personal-profiles",
    "title": "Personal Profiles",
    "swiper_class": "personal-swiper",
    "box": 1
  },
  "slides": [
    {
      "id": "personal-profile",
      "kind": "profile-card",
      "title": "PROFILE",
      "card_swiper": [
        {
          "src": "public/images/professional.png",
          "alt": "Professional",
          "active": true,
          "item": 0
        },
        {
          "src": "public/images/personal.png",
          "alt": "Personal",
          "item": 1
        }
      ],
      "contact_icons": {
        "subsection": "MyContact",
        "icons": [
          {
            "url": "https://t.me/diegonmarcos",
            "title": "Telegram",
            "icon": "send.svg",
            "preview": "https://s.wordpress.com/mshots/v1/https://t.me/diegonmarcos",
            "item": 0
          },
          {
            "url": "https://wa.me/34634769833",
            "title": "WhatsApp",
            "icon": "brand-whatsapp.svg",
            "preview": "https://s.wordpress.com/mshots/v1/https://wa.me",
            "item": 1
          }
        ]
      },
      "profiles": {
        "subsection": "Profiles",
        "primary_link": {
          "label": "MyProfile",
          "url": "https://diegonmarcos.github.io/myprofile",
          "icon": "user.svg",
          "preview": "public/thumbnails/linktree_diegonmarcos_com.jpg"
        },
        "icons": [
          {
            "url": "https://tidal.com/@diegonmarcos",
            "title": "TIDAL",
            "icon": "headphones.svg",
            "preview": "public/thumbnails/tidal_com.jpg",
            "item": 0
          },
          {
            "url": "https://www.youtube.com/@diegonmarcos1",
            "title": "YouTube",
            "icon": "brand-youtube.svg",
            "preview": "public/thumbnails/youtube_com.jpg",
            "item": 1
          },
          {
            "url": "https://www.pinterest.com/diegonmarcos",
            "title": "Pinterest",
            "icon": "slideshow.svg",
            "preview": "public/thumbnails/pinterest_com.jpg",
            "item": 2
          },
          {
            "url": "https://www.instagram.com/diegonmarcos",
            "title": "Instagram",
            "icon": "brand-instagram.svg",
            "preview": "public/thumbnails/instagram_com.jpg",
            "item": 3
          },
          {
            "url": "https://www.komoot.com/user/2474200810898/routes",
            "title": "Komoot",
            "icon": "christmas-tree.svg",
            "preview": "public/thumbnails/komoot_com.jpg",
            "item": 4
          },
          {
            "url": "https://www.strava.com/athletes/4662170",
            "title": "Strava",
            "icon": "bike.svg",
            "preview": "public/thumbnails/strava_com.jpg",
            "item": 5
          },
          {
            "url": "https://www.google.com/maps/d/u/0/edit?mid=1Wpors-fGHMZOYPx41nDtyF9vXOJcpsY&usp=sharing",
            "title": "Maps",
            "icon": "map-pin-2.svg",
            "preview": "public/thumbnails/google_com.jpg",
            "item": 6
          },
          {
            "url": "https://bucketlistjourney.net/my-bucket-list",
            "title": "MyBucket",
            "icon": "checklist.svg",
            "preview": "public/thumbnails/bucketlistjourney_net.jpg",
            "item": 7
          },
          {
            "url": "https://diegonmarcos.github.io/myAstro",
            "title": "myAstro",
            "icon": "world.svg",
            "preview": "public/thumbnails/diegonmarcos_github_io.jpg",
            "item": 8
          },
          {
            "url": "https://diegonmarcos.github.io/mySocials",
            "title": "My Socials",
            "icon": "heart.svg",
            "preview": "public/thumbnails/diegonmarcos_github_io.jpg",
            "item": 9
          }
        ]
      },
      "collapsible": {
        "toggle_target": "personal-more",
        "groups": [
          {
            "subsection": "MyMedia",
            "links": [
              {
                "label": "TIDAL",
                "url": "https://tidal.com/@diegonmarcos",
                "icon": "headphones.svg",
                "preview": "public/thumbnails/tidal_com.jpg",
                "item": 0
              },
              {
                "label": "YouTube",
                "url": "https://www.youtube.com/@diegonmarcos1",
                "icon": "brand-youtube.svg",
                "preview": "public/thumbnails/youtube_com.jpg",
                "item": 1
              },
              {
                "label": "Pinterest",
                "url": "https://www.pinterest.com/diegonmarcos",
                "icon": "slideshow.svg",
                "preview": "public/thumbnails/pinterest_com.jpg",
                "item": 2
              },
              {
                "label": "Instagram",
                "url": "https://www.instagram.com/diegonmarcos",
                "icon": "brand-instagram.svg",
                "preview": "public/thumbnails/instagram_com.jpg",
                "item": 3
              }
            ],
            "group": 0
          },
          {
            "subsection": "MyEndurance",
            "links": [
              {
                "label": "Komoot",
                "url": "https://www.komoot.com/user/2474200810898/routes",
                "icon": "christmas-tree.svg",
                "preview": "public/thumbnails/komoot_com.jpg",
                "item": 0
              },
              {
                "label": "Strava",
                "url": "https://www.strava.com/athletes/4662170",
                "icon": "bike.svg",
                "preview": "public/thumbnails/strava_com.jpg",
                "item": 1
              }
            ],
            "group": 1
          },
          {
            "subsection": "MyMaps",
            "links": [
              {
                "label": "NomadMania",
                "url": "https://nomadmania.com/profile/73889",
                "icon": "brand-google-maps.svg",
                "preview": "public/thumbnails/nomadmania_com.jpg",
                "item": 0
              },
              {
                "label": "Maps",
                "url": "https://www.google.com/maps/d/u/0/edit?mid=1Wpors-fGHMZOYPx41nDtyF9vXOJcpsY&usp=sharing",
                "icon": "map-pin-2.svg",
                "preview": "public/thumbnails/google_com.jpg",
                "item": 1
              },
              {
                "label": "Earth",
                "url": "https://earth.google.com/earth/d/1WF5_9NDew9IB5xkTqXPpm9e9n8JM0a3H?usp=sharing ",
                "icon": "world-longitude.svg",
                "preview": "public/thumbnails/google_com.jpg",
                "item": 2
              }
            ],
            "group": 2
          },
          {
            "subsection": "My Bucket",
            "links": [
              {
                "label": "My Bucket (50 things)",
                "url": "https://bucketlistjourney.net/my-bucket-list",
                "icon": "checklist.svg",
                "preview": "public/thumbnails/bucketlistjourney_net.jpg",
                "item": 0
              },
              {
                "label": "My Bucket (Endurance)",
                "url": "https://bucketlistjourney.net/my-bucket-list",
                "icon": "checklist.svg",
                "preview": "public/thumbnails/bucketlistjourney_net.jpg",
                "item": 1
              },
              {
                "label": "My Bucket (Inner)",
                "url": "https://bucketlistjourney.net/my-bucket-list",
                "icon": "heart.svg",
                "preview": "public/thumbnails/bucketlistjourney_net.jpg",
                "item": 2
              }
            ],
            "group": 3
          }
        ]
      },
      "slide": 0
    },
    {
      "id": "media",
      "kind": "tools",
      "title": "MEDIA",
      "image": {
        "src": "public/images/banners/media.gif",
        "alt": "Media"
      },
      "columns": [
        {
          "header": "PHOTOS",
          "links": [
            {
              "label": "Instagram",
              "url": "https://www.instagram.com/diegonmarcos",
              "icon": "brand-instagram.svg",
              "item": 0
            },
            {
              "label": "My Socials",
              "url": "https://diegonmarcos.github.io/mySocials",
              "icon": "heart.svg",
              "item": 1
            },
            {
              "label": "Facebook",
              "url": "https://www.facebook.com/diegonmarcos",
              "icon": "user.svg",
              "item": 2
            },
            {
              "label": "Pinterest",
              "url": "https://www.pinterest.com/diegonmarcos",
              "icon": "slideshow.svg",
              "item": 3
            },
            {
              "label": "Feed",
              "url": "https://diegonmarcos.github.io/myfeed",
              "icon": "device-desktop.svg",
              "item": 4
            }
          ],
          "group": 0
        },
        {
          "header": "VIDEOS",
          "links": [
            {
              "label": "YouTube",
              "url": "https://www.youtube.com/@diegonmarcos1",
              "icon": "brand-youtube.svg",
              "item": 0
            },
            {
              "label": "MyVideos",
              "url": "https://diegonmarcos.github.io/myvideos",
              "icon": "video.svg",
              "item": 1
            },
            {
              "label": "Movies",
              "url": "https://diegonmarcos.github.io/movies",
              "icon": "brand-youtube.svg",
              "item": 2
            },
            {
              "label": "Games",
              "url": "https://diegonmarcos.github.io/games",
              "icon": "device-gamepad.svg",
              "item": 3
            }
          ],
          "group": 1
        },
        {
          "header": "MUSIC",
          "links": [
            {
              "label": "TIDAL",
              "url": "https://tidal.com/@diegonmarcos",
              "icon": "headphones.svg",
              "item": 0
            },
            {
              "label": "Spotify",
              "url": "https://open.spotify.com/user/diegonmarcos",
              "icon": "headphones.svg",
              "item": 1
            },
            {
              "label": "Music",
              "url": "https://diegonmarcos.github.io/music",
              "icon": "headphones.svg",
              "item": 2
            }
          ],
          "group": 2
        }
      ],
      "slide": 1,
      "extras": {
        "primary_link": {
          "label": "My Socials",
          "url": "https://diegonmarcos.github.io/mySocials",
          "icon": "heart.svg"
        }
      }
    },
    {
      "id": "data",
      "kind": "tools",
      "title": "DATA",
      "image": {
        "src": "public/images/banners/lab-tools.gif",
        "alt": "Data"
      },
      "columns": [
        {
          "header": "HEALTH",
          "links": [
            {
              "label": "MyHealth",
              "url": "https://diegonmarcos.github.io/myhealth",
              "icon": "heart.svg",
              "item": 0
            },
            {
              "label": "myAstro",
              "url": "https://diegonmarcos.github.io/myAstro",
              "icon": "world.svg",
              "item": 1
            }
          ],
          "group": 0
        },
        {
          "header": "ENDURANCE",
          "links": [
            {
              "label": "Tracker",
              "url": "https://diegonmarcos.github.io/myhealth-tracker",
              "icon": "heart.svg",
              "item": 0
            },
            {
              "label": "Komoot",
              "url": "https://www.komoot.com/user/2474200810898/routes",
              "icon": "christmas-tree.svg",
              "item": 1
            },
            {
              "label": "Strava",
              "url": "https://www.strava.com/athletes/4662170",
              "icon": "bike.svg",
              "item": 2
            },
            {
              "label": "Garmin",
              "url": "https://connect.garmin.com/modern/profile/diegonmarcos",
              "icon": "heart.svg",
              "item": 3
            }
          ],
          "group": 1
        },
        {
          "header": "ACHIEVES",
          "links": [
            {
              "label": "NomadMania",
              "url": "https://nomadmania.com/profile/73889",
              "icon": "brand-google-maps.svg",
              "item": 0
            },
            {
              "label": "MyTrips",
              "url": "https://diegonmarcos.github.io/mymaps-mytrips",
              "icon": "world-longitude.svg",
              "item": 1
            },
            {
              "label": "Bucket (50 things)",
              "url": "https://bucketlistjourney.net/my-bucket-list",
              "icon": "checklist.svg",
              "item": 2
            },
            {
              "label": "Bucket (Endurance)",
              "url": "https://bucketlistjourney.net/my-bucket-list",
              "icon": "checklist.svg",
              "item": 3
            },
            {
              "label": "Bucket (Inner)",
              "url": "https://bucketlistjourney.net/my-bucket-list",
              "icon": "heart.svg",
              "item": 4
            }
          ],
          "group": 2
        }
      ],
      "slide": 2,
      "extras": {
        "primary_link": {
          "label": "myTrackers",
          "url": "https://diegonmarcos.github.io/myhealth-tracker",
          "icon": "heart.svg"
        }
      }
    },
    {
      "id": "dms",
      "kind": "venture-card",
      "title": "DMs",
      "sections": [
        {
          "title": "MAIL",
          "layout": "links",
          "links": [
            {"label": "mailMe", "url": "mailto:me@diegonmarcos.com", "icon": "mail.svg", "item": 0}
          ],
          "group": 0
        },
        {
          "title": "MESSENGERS",
          "layout": "contact-icons",
          "items": [
            {"label": "WhatsApp 0", "url": "https://wa.me/34634769833", "icon": "brand-whatsapp.svg", "item": 0},
            {"label": "WhatsApp 1", "url": "https://wa.me/34680614213", "icon": "brand-whatsapp.svg", "item": 1},
            {"label": "Telegram", "url": "https://t.me/diegonmarcos", "icon": "brand-telegram.svg", "item": 2},
            {"label": "Viber", "url": "viber://chat?number=+34634769833", "icon": "brand-viber.svg", "item": 3},
            {"label": "Matrix", "url": "https://matrix.to/#/@diegonmarcos:matrix.org", "icon": "brand-matrix.svg", "item": 4},
            {"label": "Instagram DM", "url": "https://ig.me/m/diegonmarcos", "icon": "brand-instagram.svg", "item": 5},
            {"label": "X DM", "url": "https://x.com/messages/compose?recipient_id=diegonmarcos", "icon": "brand-x.svg", "item": 6},
            {"label": "LinkedIn DM", "url": "https://linkedin.com/in/diegonmarcos", "icon": "brand-linkedin.svg", "item": 7},
            {"label": "ICQ", "url": "https://icq.im/diegonmarcos", "icon": "brand-icq.svg", "item": 8},
            {"label": "Mail", "url": "mailto:me@diegonmarcos.com", "icon": "mail.svg", "item": 9}
          ],
          "group": 1
        },
        {
          "title": "BEEPER",
          "layout": "links",
          "links": [
            {"label": "MyBeeper", "url": "https://mybeeper.com/diegonmarcos", "icon": "send.svg", "item": 0}
          ],
          "group": 2
        }
      ],
      "slide": 3
    }
  ]
}
;
})();
