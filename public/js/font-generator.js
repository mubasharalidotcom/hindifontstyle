/**
 * Combined JavaScript Bundle for Hindi Font Site
 * Includes: Font Data, Font Generator, Character Maps, User Guide, and Quick Character Map
 */

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MODULE 1: FONT DATA REGISTRY
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * font-data.js
 * Central registry of every font that ships with the site, grouped by page.
 */
(function (global) {
  'use strict';

  const fontData = [
    {
      "id": "ams",
      "name": "AMS",
      "family": "AMS",
      "file": "/fonts/AMS.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 5
      },
      "pageOrder": {
        "page1": 14
      }
    },
    {
      "id": "ams-geoscript",
      "name": "AMS Geo Script",
      "family": "AMS_GeoScript",
      "file": "/fonts/AMS_GeoScript.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 10
      },
      "pageOrder": {
        "page1": 6
      }
    },
    {
      "id": "ams-girija",
      "name": "AMS Girija",
      "family": "AMS_Girija",
      "file": "/fonts/AMS_Girija.ttf",
      "page": [
        "cv2",
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams",
        "converter",
        "calligraphy"
      ],
      "pageWeights": {
        "page1": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page1": 1,
        "cv2": 8
      }
    },
    {
      "id": "ams-payal",
      "name": "AMS Payal",
      "family": "AMS_Payal",
      "file": "/fonts/AMS_Payal.ttf",
      "page": [
        "cv2",
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams",
        "converter",
        "calligraphy"
      ],
      "pageWeights": {
        "page1": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page1": 2,
        "cv2": 22
      }
    },
    {
      "id": "ams-pencil",
      "name": "AMS Pencil",
      "family": "AMS_Pencil",
      "file": "/fonts/AMS_Pencil.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 5
      },
      "pageOrder": {
        "page1": 13
      }
    },
    {
      "id": "ams-premankur",
      "name": "AMS Premankur",
      "family": "AMS_Premankur",
      "file": "/fonts/AMS_Premankur.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 7
      }
    },
    {
      "id": "ams-purvi",
      "name": "AMS Purvi",
      "family": "AMS_Purvi",
      "file": "/fonts/AMS_Purvi.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 8
      }
    },
    {
      "id": "ams-ravikumar",
      "name": "AMS Ravi Kumar",
      "family": "AMS_RaviKumar",
      "file": "/fonts/AMS_RaviKumar.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 9
      }
    },
    {
      "id": "ams-samanya",
      "name": "AMS Samanya",
      "family": "AMS_Samanya",
      "file": "/fonts/AMS_Samanya.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 10
      }
    },
    {
      "id": "ams-sandhya",
      "name": "AMS Sandhya",
      "family": "AMS_Sandhya",
      "file": "/fonts/AMS_Sandhya.ttf",
      "page": [
        "cv2",
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams",
        "converter",
        "calligraphy"
      ],
      "pageWeights": {
        "page1": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page1": 3,
        "cv2": 17
      }
    },
    {
      "id": "ams-shikha",
      "name": "AMS Shikha",
      "family": "AMS_Shikha",
      "file": "/fonts/AMS_Shikha.ttf",
      "page": [
        "cv2",
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams",
        "converter",
        "calligraphy"
      ],
      "pageWeights": {
        "page1": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page1": 4,
        "cv2": 18
      }
    },
    {
      "id": "aaditya",
      "name": "aaditya",
      "family": "aaditya",
      "file": "/fonts/aaditya.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 5
      },
      "pageOrder": {
        "page1": 15
      }
    },
    {
      "id": "aakash",
      "name": "aakash",
      "family": "aakash",
      "file": "/fonts/aakash.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 11
      }
    },
    {
      "id": "aasmi",
      "name": "aasmi",
      "family": "aasmi",
      "file": "/fonts/aasmi.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 1
      },
      "pageOrder": {
        "page1": 20
      }
    },
    {
      "id": "ams-mantra",
      "name": "AMS Mantra",
      "family": "AMS_Mantra",
      "file": "/fonts/fonts10/AMS_Mantra.ttf",
      "page": [
        "cv2",
        "page10"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page10": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page10": 2,
        "cv2": 2
      }
    },
    {
      "id": "ams-matarani",
      "name": "AMS Matarani",
      "family": "AMS_Matarani",
      "file": "/fonts/fonts10/AMS_Matarani.ttf",
      "page": [
        "cv2",
        "page10"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page10": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page10": 3,
        "cv2": 15
      }
    },
    {
      "id": "ams-meghna",
      "name": "AMS Meghna",
      "family": "AMS_Meghna",
      "file": "/fonts/fonts10/AMS_Meghna.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 5
      },
      "pageOrder": {
        "page10": 8
      }
    },
    {
      "id": "ams-modi",
      "name": "AMS Modi",
      "family": "AMS_Modi",
      "file": "/fonts/fonts10/AMS_Modi.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 8
      },
      "pageOrder": {
        "page10": 5
      }
    },
    {
      "id": "ams-morya",
      "name": "AMS Morya",
      "family": "AMS_Morya",
      "file": "/fonts/fonts10/AMS_Morya.ttf",
      "page": [
        "cv2",
        "page10"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page10": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page10": 1,
        "cv2": 1
      }
    },
    {
      "id": "ams-navratri",
      "name": "AMS Navratri",
      "family": "AMS_Navratri",
      "file": "/fonts/fonts10/AMS_Navratri.ttf",
      "page": [
        "cv2",
        "page10"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page10": 8,
        "cv2": 10
      },
      "pageOrder": {
        "page10": 6,
        "cv2": 21
      }
    },
    {
      "id": "ams-nirakriti",
      "name": "AMS Nirakriti",
      "family": "AMS_Nirakriti",
      "file": "/fonts/fonts10/AMS_Nirakriti.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 5
      },
      "pageOrder": {
        "page10": 9
      }
    },
    {
      "id": "ams-shloka",
      "name": "AMS Shloka",
      "family": "AMS_Shloka",
      "file": "/fonts/fonts10/AMS_Shloka.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 10
      },
      "pageOrder": {
        "page10": 4
      }
    },
    {
      "id": "ams-simarekha",
      "name": "AMS Sima Rekha",
      "family": "AMS_SimaRekha",
      "file": "/fonts/fonts10/AMS_SimaRekha.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 5
      },
      "pageOrder": {
        "page10": 10
      }
    },
    {
      "id": "ams-sundar",
      "name": "AMS Sundar",
      "family": "AMS_Sundar",
      "file": "/fonts/fonts10/AMS_Sundar.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 8
      },
      "pageOrder": {
        "page10": 7
      }
    },
    {
      "id": "ams-swarup-reguler",
      "name": "AMS Swarup Reguler",
      "family": "AMS_Swarup_Reguler",
      "file": "/fonts/fonts10/AMS_Swarup_Reguler.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 1
      },
      "pageOrder": {
        "page10": 11
      }
    },
    {
      "id": "ams-umakant",
      "name": "AMS Umakant",
      "family": "AMS_Umakant",
      "file": "/fonts/fonts10/AMS_Umakant.ttf",
      "page": [
        "page10"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "spiritual",
        "traditional",
        "mantra",
        "ams"
      ],
      "pageWeights": {
        "page10": 1
      },
      "pageOrder": {
        "page10": 12
      }
    },
    {
      "id": "afrin",
      "name": "afrin",
      "family": "afrin",
      "file": "/fonts/fonts2/afrin.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 5
      },
      "pageOrder": {
        "page2": 6
      }
    },
    {
      "id": "chandrakant",
      "name": "chandrakant",
      "family": "chandrakant",
      "file": "/fonts/fonts2/chandrakant.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 8
      },
      "pageOrder": {
        "page2": 4
      }
    },
    {
      "id": "dg-hand",
      "name": "DG hand",
      "family": "dg-hand",
      "file": "/fonts/fonts2/dg-hand.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 1
      },
      "pageOrder": {
        "page2": 8
      }
    },
    {
      "id": "ganesha",
      "name": "ganesha",
      "family": "ganesha",
      "file": "/fonts/fonts2/ganesha.ttf",
      "page": [
        "cv2",
        "page2"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "bold",
        "decorative",
        "spiritual",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page2": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page2": 1,
        "cv2": 9
      }
    },
    {
      "id": "glassy",
      "name": "glassy",
      "family": "glassy",
      "file": "/fonts/fonts2/glassy.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 8
      },
      "pageOrder": {
        "page2": 5
      }
    },
    {
      "id": "hanuman",
      "name": "hanuman",
      "family": "hanuman",
      "file": "/fonts/fonts2/hanuman.ttf",
      "page": [
        "cv2",
        "page2"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "bold",
        "decorative",
        "spiritual",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page2": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page2": 2,
        "cv2": 10
      }
    },
    {
      "id": "indu",
      "name": "indu",
      "family": "indu",
      "file": "/fonts/fonts2/indu.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 5
      },
      "pageOrder": {
        "page2": 7
      }
    },
    {
      "id": "jambo",
      "name": "jambo",
      "family": "jambo",
      "file": "/fonts/fonts2/jambo.ttf",
      "page": [
        "page2"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page2": 10
      },
      "pageOrder": {
        "page2": 3
      }
    },
    {
      "id": "dg-aarambh",
      "name": "DG aarambh",
      "family": "DG-aarambh",
      "file": "/fonts/fonts3/DG-aarambh.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 5
      },
      "pageOrder": {
        "page3": 8
      }
    },
    {
      "id": "adiyogi",
      "name": "adiyogi",
      "family": "adiyogi",
      "file": "/fonts/fonts3/adiyogi.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 10
      },
      "pageOrder": {
        "page3": 1
      }
    },
    {
      "id": "bhagyshri",
      "name": "bhagyshri",
      "family": "bhagyshri",
      "file": "/fonts/fonts3/bhagyshri.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 8
      },
      "pageOrder": {
        "page3": 4
      }
    },
    {
      "id": "bhumi",
      "name": "bhumi",
      "family": "bhumi",
      "file": "/fonts/fonts3/bhumi.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 5
      },
      "pageOrder": {
        "page3": 7
      }
    },
    {
      "id": "gourav",
      "name": "gourav",
      "family": "gourav",
      "file": "/fonts/fonts3/gourav.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 8
      },
      "pageOrder": {
        "page3": 5
      }
    },
    {
      "id": "jiwan",
      "name": "jiwan",
      "family": "jiwan",
      "file": "/fonts/fonts3/jiwan.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 5
      },
      "pageOrder": {
        "page3": 9
      }
    },
    {
      "id": "kangna",
      "name": "kangna",
      "family": "kangna",
      "file": "/fonts/fonts3/kangna.ttf",
      "page": [
        "cv2",
        "page3"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "traditional",
        "cultural",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page3": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page3": 2,
        "cv2": 11
      }
    },
    {
      "id": "manoja",
      "name": "manoja",
      "family": "manoja",
      "file": "/fonts/fonts3/manoja.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 8
      },
      "pageOrder": {
        "page3": 6
      }
    },
    {
      "id": "sindhu",
      "name": "sindhu",
      "family": "sindhu",
      "file": "/fonts/fonts3/sindhu.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 10
      },
      "pageOrder": {
        "page3": 3
      }
    },
    {
      "id": "tikiya",
      "name": "tikiya",
      "family": "tikiya",
      "file": "/fonts/fonts3/tikiya.ttf",
      "page": [
        "page3"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "traditional",
        "cultural",
        "ams"
      ],
      "pageWeights": {
        "page3": 1
      },
      "pageOrder": {
        "page3": 10
      }
    },
    {
      "id": "aakul-1",
      "name": "aakul 1",
      "family": "aakul_1",
      "file": "/fonts/fonts4/aakul_1.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 10
      },
      "pageOrder": {
        "page4": 2
      }
    },
    {
      "id": "aakul-2",
      "name": "aakul 2",
      "family": "aakul_2",
      "file": "/fonts/fonts4/aakul_2.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 8
      },
      "pageOrder": {
        "page4": 4
      }
    },
    {
      "id": "aakul-3",
      "name": "aakul 3",
      "family": "aakul_3",
      "file": "/fonts/fonts4/aakul_3.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 5
      },
      "pageOrder": {
        "page4": 7
      }
    },
    {
      "id": "aakul-4",
      "name": "aakul 4",
      "family": "aakul_4",
      "file": "/fonts/fonts4/aakul_4.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 10
      },
      "pageOrder": {
        "page4": 3
      }
    },
    {
      "id": "aakul-5",
      "name": "aakul 5",
      "family": "aakul_5",
      "file": "/fonts/fonts4/aakul_5.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 8
      },
      "pageOrder": {
        "page4": 5
      }
    },
    {
      "id": "aakul-6",
      "name": "aakul 6",
      "family": "aakul_6",
      "file": "/fonts/fonts4/aakul_6.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 5
      },
      "pageOrder": {
        "page4": 8
      }
    },
    {
      "id": "aakul-7",
      "name": "aakul 7",
      "family": "aakul_7",
      "file": "/fonts/fonts4/aakul_7.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 8
      },
      "pageOrder": {
        "page4": 6
      }
    },
    {
      "id": "aakul-8",
      "name": "aakul 8",
      "family": "aakul_8",
      "file": "/fonts/fonts4/aakul_8.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 1
      },
      "pageOrder": {
        "page4": 10
      }
    },
    {
      "id": "anaram-1",
      "name": "anaram 1",
      "family": "anaram_1",
      "file": "/fonts/fonts4/anaram_1.ttf",
      "page": [
        "page4"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "modern",
        "minimalist",
        "ams"
      ],
      "pageWeights": {
        "page4": 5
      },
      "pageOrder": {
        "page4": 9
      }
    },
    {
      "id": "ankur",
      "name": "ankur",
      "family": "ankur",
      "file": "/fonts/fonts4/ankur.ttf",
      "page": [
        "cv2",
        "page4"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "modern",
        "minimalist",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page4": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page4": 1,
        "cv2": 12
      }
    },
    {
      "id": "calligraphy1",
      "name": "Calligraphy 1",
      "family": "Calligraphy1",
      "file": "/fonts/fonts5/Calligraphy1.ttf",
      "page": [
        "cv2",
        "page5"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "calligraphy",
        "script",
        "ams",
        "converter",
        "featured"
      ],
      "pageWeights": {
        "page5": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page5": 1,
        "cv2": 6
      }
    },
    {
      "id": "calligraphy2",
      "name": "Calligraphy 2",
      "family": "Calligraphy2",
      "file": "/fonts/fonts5/Calligraphy2.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 8
      },
      "pageOrder": {
        "page5": 4
      }
    },
    {
      "id": "calligraphy3",
      "name": "Calligraphy 3",
      "family": "Calligraphy3",
      "file": "/fonts/fonts5/Calligraphy3.ttf",
      "page": [
        "cv2",
        "page5"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "calligraphy",
        "script",
        "ams",
        "converter",
        "featured"
      ],
      "pageWeights": {
        "page5": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page5": 2,
        "cv2": 16
      }
    },
    {
      "id": "calligraphy4",
      "name": "Calligraphy 4",
      "family": "Calligraphy4",
      "file": "/fonts/fonts5/Calligraphy4.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 8
      },
      "pageOrder": {
        "page5": 5
      }
    },
    {
      "id": "calligraphy5",
      "name": "Calligraphy 5",
      "family": "Calligraphy5",
      "file": "/fonts/fonts5/Calligraphy5.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 10
      },
      "pageOrder": {
        "page5": 3
      }
    },
    {
      "id": "calligraphy6",
      "name": "Calligraphy 6",
      "family": "Calligraphy6",
      "file": "/fonts/fonts5/Calligraphy6.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 8
      },
      "pageOrder": {
        "page5": 6
      }
    },
    {
      "id": "calligraphy7",
      "name": "Calligraphy 7",
      "family": "Calligraphy7",
      "file": "/fonts/fonts5/Calligraphy7.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 5
      },
      "pageOrder": {
        "page5": 8
      }
    },
    {
      "id": "badhand",
      "name": "badhand",
      "family": "badhand",
      "file": "/fonts/fonts5/badhand.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 8
      },
      "pageOrder": {
        "page5": 7
      }
    },
    {
      "id": "barakhadi",
      "name": "barakhadi",
      "family": "barakhadi",
      "file": "/fonts/fonts5/barakhadi.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 5
      },
      "pageOrder": {
        "page5": 9
      }
    },
    {
      "id": "barakhadi1",
      "name": "barakhadi 1",
      "family": "barakhadi1",
      "file": "/fonts/fonts5/barakhadi1.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 1
      },
      "pageOrder": {
        "page5": 11
      }
    },
    {
      "id": "bindu-rekha",
      "name": "bindu rekha",
      "family": "bindu_rekha",
      "file": "/fonts/fonts5/bindu_rekha.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 1
      },
      "pageOrder": {
        "page5": 12
      }
    },
    {
      "id": "bindu-rekha-bold",
      "name": "bindu rekha bold",
      "family": "bindu_rekha_bold",
      "file": "/fonts/fonts5/bindu_rekha_bold.ttf",
      "page": [
        "page5"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "calligraphy",
        "script",
        "ams"
      ],
      "pageWeights": {
        "page5": 5
      },
      "pageOrder": {
        "page5": 10
      }
    },
    {
      "id": "ams-kesri-1",
      "name": "AMS Kesri 1",
      "family": "AMS_Kesri_1",
      "file": "/fonts/fonts6/AMS_Kesri_1.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 8
      },
      "pageOrder": {
        "page6": 4
      }
    },
    {
      "id": "ams-lekhan-2",
      "name": "AMS Lekhan 2",
      "family": "AMS_Lekhan_2",
      "file": "/fonts/fonts6/AMS_Lekhan_2.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 5
      },
      "pageOrder": {
        "page6": 7
      }
    },
    {
      "id": "ams-uttar",
      "name": "AMS Uttar",
      "family": "AMS_Uttar",
      "file": "/fonts/fonts6/AMS_Uttar.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 5
      },
      "pageOrder": {
        "page6": 8
      }
    },
    {
      "id": "ams-vardan",
      "name": "AMS Vardan",
      "family": "AMS_Vardan",
      "file": "/fonts/fonts6/AMS_Vardan.ttf",
      "page": [
        "cv2",
        "page6"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "elegant",
        "sharp",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page6": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page6": 1,
        "cv2": 5
      }
    },
    {
      "id": "ams-varsha",
      "name": "AMS Varsha",
      "family": "AMS_Varsha",
      "file": "/fonts/fonts6/AMS_Varsha.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 10
      },
      "pageOrder": {
        "page6": 2
      }
    },
    {
      "id": "ams-varun",
      "name": "AMS Varun",
      "family": "AMS_Varun",
      "file": "/fonts/fonts6/AMS_Varun.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 5
      },
      "pageOrder": {
        "page6": 9
      }
    },
    {
      "id": "ams-vina",
      "name": "AMS Vina",
      "family": "AMS_Vina",
      "file": "/fonts/fonts6/AMS_Vina.ttf",
      "page": [
        "cv2",
        "page6"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "elegant",
        "sharp",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page6": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page6": 3,
        "cv2": 23
      }
    },
    {
      "id": "ams-viram",
      "name": "AMS Viram",
      "family": "AMS_Viram",
      "file": "/fonts/fonts6/AMS_Viram.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 1
      },
      "pageOrder": {
        "page6": 10
      }
    },
    {
      "id": "ams-wishes",
      "name": "AMS Wishes",
      "family": "AMS_Wishes",
      "file": "/fonts/fonts6/AMS_Wishes.ttf",
      "page": [
        "cv2",
        "page6"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "elegant",
        "sharp",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page6": 8,
        "cv2": 10
      },
      "pageOrder": {
        "page6": 5,
        "cv2": 24
      }
    },
    {
      "id": "ams-yantra",
      "name": "AMS Yantra",
      "family": "AMS_Yantra",
      "file": "/fonts/fonts6/AMS_Yantra.ttf",
      "page": [
        "page6"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "elegant",
        "sharp",
        "ams"
      ],
      "pageWeights": {
        "page6": 8
      },
      "pageOrder": {
        "page6": 6
      }
    },
    {
      "id": "ams-pankaj",
      "name": "AMS Pankaj",
      "family": "AMS_Pankaj",
      "file": "/fonts/fonts7/AMS_Pankaj.ttf",
      "page": [
        "cv2",
        "page7"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "handwriting",
        "cursive",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page7": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page7": 1,
        "cv2": 7
      }
    },
    {
      "id": "ams-handwriting-1",
      "name": "AMS handwriting 1",
      "family": "ams-handwriting_1",
      "file": "/fonts/fonts7/ams-handwriting_1.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 10
      },
      "pageOrder": {
        "page7": 3
      }
    },
    {
      "id": "ams-handwriting-2",
      "name": "AMS handwriting 2",
      "family": "ams-handwriting_2",
      "file": "/fonts/fonts7/ams-handwriting_2.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 8
      },
      "pageOrder": {
        "page7": 4
      }
    },
    {
      "id": "ams-handwriting-3",
      "name": "AMS handwriting 3",
      "family": "ams-handwriting_3",
      "file": "/fonts/fonts7/ams-handwriting_3.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 8
      },
      "pageOrder": {
        "page7": 5
      }
    },
    {
      "id": "ams-handwriting-4",
      "name": "AMS handwriting 4",
      "family": "ams-handwriting_4",
      "file": "/fonts/fonts7/ams-handwriting_4.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 5
      },
      "pageOrder": {
        "page7": 7
      }
    },
    {
      "id": "ams-hastkala",
      "name": "AMS hastkala",
      "family": "ams-hastkala",
      "file": "/fonts/fonts7/ams-hastkala.ttf",
      "page": [
        "cv2",
        "page7"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "handwriting",
        "cursive",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page7": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page7": 2,
        "cv2": 26
      }
    },
    {
      "id": "ams-hastkala-2",
      "name": "AMS hastkala 2",
      "family": "ams-hastkala_2",
      "file": "/fonts/fonts7/ams-hastkala_2.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 8
      },
      "pageOrder": {
        "page7": 6
      }
    },
    {
      "id": "ams-hastkala-3",
      "name": "AMS hastkala 3",
      "family": "ams-hastkala_3",
      "file": "/fonts/fonts7/ams-hastkala_3.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 5
      },
      "pageOrder": {
        "page7": 8
      }
    },
    {
      "id": "ams-khadu",
      "name": "AMS khadu",
      "family": "ams-khadu",
      "file": "/fonts/fonts7/ams-khadu.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 5
      },
      "pageOrder": {
        "page7": 9
      }
    },
    {
      "id": "ams-wood",
      "name": "AMS wood",
      "family": "ams-wood",
      "file": "/fonts/fonts7/ams-wood.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 1
      },
      "pageOrder": {
        "page7": 10
      }
    },
    {
      "id": "grass",
      "name": "grass",
      "family": "grass",
      "file": "/fonts/fonts7/grass.ttf",
      "page": [
        "page7"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "handwriting",
        "cursive",
        "ams"
      ],
      "pageWeights": {
        "page7": 1
      },
      "pageOrder": {
        "page7": 11
      }
    },
    {
      "id": "ams-cinema",
      "name": "AMS Cinema",
      "family": "AMS_Cinema",
      "file": "/fonts/fonts8/AMS_Cinema.ttf",
      "page": [
        "cv2",
        "page8"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "cinema",
        "creative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page8": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page8": 1,
        "cv2": 3
      }
    },
    {
      "id": "ams-darshana",
      "name": "AMS Darshana",
      "family": "AMS_Darshana",
      "file": "/fonts/fonts8/AMS_Darshana.ttf",
      "page": [
        "cv2",
        "page8"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "cinema",
        "creative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page8": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page8": 3,
        "cv2": 19
      }
    },
    {
      "id": "ams-dasra",
      "name": "AMS Dasra",
      "family": "AMS_Dasra",
      "file": "/fonts/fonts8/AMS_Dasra.ttf",
      "page": [
        "cv2",
        "page8"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "cinema",
        "creative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page8": 8,
        "cv2": 10
      },
      "pageOrder": {
        "page8": 4,
        "cv2": 25
      }
    },
    {
      "id": "ams-diamond",
      "name": "AMS Diamond",
      "family": "AMS_Diamond",
      "file": "/fonts/fonts8/AMS_Diamond.ttf",
      "page": [
        "cv2",
        "page8"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "cinema",
        "creative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page8": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page8": 2,
        "cv2": 14
      }
    },
    {
      "id": "ams-dipanshu",
      "name": "AMS Dipanshu",
      "family": "AMS_Dipanshu",
      "file": "/fonts/fonts8/AMS_Dipanshu.ttf",
      "page": [
        "page8"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "cinema",
        "creative",
        "ams"
      ],
      "pageWeights": {
        "page8": 8
      },
      "pageOrder": {
        "page8": 5
      }
    },
    {
      "id": "aakasa-barao-01",
      "name": "Aaka Sa Barao 01",
      "family": "AakaSa_Barao_01",
      "file": "/fonts/fonts8/AakaSa_Barao_01.ttf",
      "page": [
        "page8"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "cinema",
        "creative",
        "ams"
      ],
      "pageWeights": {
        "page8": 8
      },
      "pageOrder": {
        "page8": 6
      }
    },
    {
      "id": "aakasa-barao-05",
      "name": "Aaka Sa Barao 05",
      "family": "AakaSa_Barao_05",
      "file": "/fonts/fonts8/AakaSa_Barao_05.ttf",
      "page": [
        "page8"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "cinema",
        "creative",
        "ams"
      ],
      "pageWeights": {
        "page8": 5
      },
      "pageOrder": {
        "page8": 7
      }
    },
    {
      "id": "aakasa-barao-06",
      "name": "Aaka Sa Barao 06",
      "family": "AakaSa_Barao_06",
      "file": "/fonts/fonts8/AakaSa_Barao_06.ttf",
      "page": [
        "page8"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "cinema",
        "creative",
        "ams"
      ],
      "pageWeights": {
        "page8": 5
      },
      "pageOrder": {
        "page8": 8
      }
    },
    {
      "id": "agra-normal",
      "name": "Agra Normal",
      "family": "Agra_Normal",
      "file": "/fonts/fonts8/Agra Normal.ttf",
      "page": [
        "page8"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "cinema",
        "creative",
        "ams"
      ],
      "pageWeights": {
        "page8": 1
      },
      "pageOrder": {
        "page8": 9
      }
    },
    {
      "id": "ams-calligraphy-8",
      "name": "AMS Calligraphy 8",
      "family": "AMS_Calligraphy_8",
      "file": "/fonts/fonts9/AMS_Calligraphy_8.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 5
      },
      "pageOrder": {
        "page9": 9
      }
    },
    {
      "id": "ams-candy",
      "name": "AMS Candy",
      "family": "AMS_Candy",
      "file": "/fonts/fonts9/AMS_Candy.ttf",
      "page": [
        "cv2",
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page9": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page9": 4,
        "cv2": 20
      }
    },
    {
      "id": "ams-chhatrapati",
      "name": "AMS Chhatrapati",
      "family": "AMS_Chhatrapati",
      "file": "/fonts/fonts9/AMS_Chhatrapati.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 10
      },
      "pageOrder": {
        "page9": 3
      }
    },
    {
      "id": "ams-dipawali-01",
      "name": "AMS Dipawali 01",
      "family": "AMS_Dipawali_01",
      "file": "/fonts/fonts9/AMS_Dipawali_01.ttf",
      "page": [
        "cv2",
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page9": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page9": 1,
        "cv2": 4
      }
    },
    {
      "id": "ams-divya",
      "name": "AMS Divya",
      "family": "AMS_Divya",
      "file": "/fonts/fonts9/AMS_Divya.ttf",
      "page": [
        "cv2",
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page9": 8,
        "cv2": 10
      },
      "pageOrder": {
        "page9": 5,
        "cv2": 28
      }
    },
    {
      "id": "ams-diya",
      "name": "AMS Diya",
      "family": "AMS_Diya",
      "file": "/fonts/fonts9/AMS_Diya.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 5
      },
      "pageOrder": {
        "page9": 10
      }
    },
    {
      "id": "ams-kartik",
      "name": "AMS Kartik",
      "family": "AMS_Kartik",
      "file": "/fonts/fonts9/AMS_Kartik.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 8
      },
      "pageOrder": {
        "page9": 6
      }
    },
    {
      "id": "ams-karuna",
      "name": "AMS Karuna",
      "family": "AMS_Karuna",
      "file": "/fonts/fonts9/AMS_Karuna.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 5
      },
      "pageOrder": {
        "page9": 11
      }
    },
    {
      "id": "ams-kirti",
      "name": "AMS Kirti",
      "family": "AMS_Kirti",
      "file": "/fonts/fonts9/AMS_Kirti.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 8
      },
      "pageOrder": {
        "page9": 8
      }
    },
    {
      "id": "ams-leafy",
      "name": "AMS Leafy",
      "family": "AMS_Leafy",
      "file": "/fonts/fonts9/AMS_Leafy.ttf",
      "page": [
        "cv2",
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page9": 8,
        "cv2": 10
      },
      "pageOrder": {
        "page9": 7,
        "cv2": 27
      }
    },
    {
      "id": "ams-leafy-1",
      "name": "AMS Leafy 1",
      "family": "AMS_Leafy_1",
      "file": "/fonts/fonts9/AMS_Leafy_1.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 5
      },
      "pageOrder": {
        "page9": 13
      }
    },
    {
      "id": "ams-lekhan-1-1",
      "name": "AMS Lekhan 1 1",
      "family": "AMS_Lekhan_1-1",
      "file": "/fonts/fonts9/AMS_Lekhan_1-1.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 5
      },
      "pageOrder": {
        "page9": 12
      }
    },
    {
      "id": "ams-mahabharat",
      "name": "AMS Maha Bharat",
      "family": "AMS_MahaBharat",
      "file": "/fonts/fonts9/AMS_MahaBharat.ttf",
      "page": [
        "cv2",
        "page9"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams",
        "converter",
        "calligraphy",
        "featured"
      ],
      "pageWeights": {
        "page9": 10,
        "cv2": 10
      },
      "pageOrder": {
        "page9": 2,
        "cv2": 13
      }
    },
    {
      "id": "ams-rekha-2",
      "name": "AMS Rekha 2",
      "family": "AMS_Rekha_2",
      "file": "/fonts/fonts9/AMS_Rekha_2.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 1
      },
      "pageOrder": {
        "page9": 14
      }
    },
    {
      "id": "ams-samanya-1",
      "name": "AMS Samanya 1",
      "family": "AMS_Samanya_1",
      "file": "/fonts/fonts9/AMS_Samanya_1.ttf",
      "page": [
        "page9"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "festival",
        "bold",
        "decorative",
        "ams"
      ],
      "pageWeights": {
        "page9": 1
      },
      "pageOrder": {
        "page9": 15
      }
    },
    {
      "id": "kashi",
      "name": "kashi",
      "family": "kashi",
      "file": "/fonts/kashi.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 8,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 8
      },
      "pageOrder": {
        "page1": 12
      }
    },
    {
      "id": "minar",
      "name": "minar",
      "family": "minar",
      "file": "/fonts/minar.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 5
      },
      "pageOrder": {
        "page1": 16
      }
    },
    {
      "id": "sudha",
      "name": "sudha",
      "family": "sudha",
      "file": "/fonts/sudha.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 5,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 5
      },
      "pageOrder": {
        "page1": 17
      }
    },
    {
      "id": "tushar",
      "name": "tushar",
      "family": "tushar",
      "file": "/fonts/tushar.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 1
      },
      "pageOrder": {
        "page1": 18
      }
    },
    {
      "id": "vasudeva",
      "name": "vasudeva",
      "family": "vasudeva",
      "file": "/fonts/vasudeva.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 1,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 1
      },
      "pageOrder": {
        "page1": 19
      }
    },
    {
      "id": "vedant",
      "name": "vedant",
      "family": "vedant",
      "file": "/fonts/vedant.ttf",
      "page": [
        "page1"
      ],
      "type": "AMS",
      "weight": 10,
      "tags": [
        "stylish",
        "elegant",
        "featured",
        "ams"
      ],
      "pageWeights": {
        "page1": 10
      },
      "pageOrder": {
        "page1": 5
      }
    },
    {
      "id": "devlys010",
      "name": "DevLys 010",
      "family": "DevLys010",
      "file": "/fonts/devlys/DevLys010.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 10
      },
      "pageOrder": {
        "kd3": 1
      }
    },
    {
      "id": "devlys240",
      "name": "DevLys 240",
      "family": "DevLys240",
      "file": "/fonts/devlys/DevLys240.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 5,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 5
      },
      "pageOrder": {
        "kd3": 5
      }
    },
    {
      "id": "raj01",
      "name": "Raj 01",
      "family": "Raj01",
      "file": "/fonts/devlys/Raj01.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 10
      },
      "pageOrder": {
        "kd3": 2
      }
    },
    {
      "id": "raj23",
      "name": "Raj 23",
      "family": "Raj23",
      "file": "/fonts/devlys/Raj23.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 8,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 8
      },
      "pageOrder": {
        "kd3": 4
      }
    },
    {
      "id": "shivaji01",
      "name": "Shivaji 01",
      "family": "Shivaji01",
      "file": "/fonts/devlys/Shivaji01.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 8,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 8
      },
      "pageOrder": {
        "kd3": 3
      }
    },
    {
      "id": "shivaji02",
      "name": "Shivaji 02",
      "family": "Shivaji02",
      "file": "/fonts/devlys/Shivaji02.ttf",
      "page": [
        "kd3"
      ],
      "type": "KRUTIDEV",
      "weight": 5,
      "tags": [
        "devlys",
        "typing",
        "legacy",
        "krutidev"
      ],
      "pageWeights": {
        "kd3": 5
      },
      "pageOrder": {
        "kd3": 6
      }
    },
    {
      "id": "krutidev010",
      "name": "KrutiDev 010",
      "family": "KrutiDev010",
      "file": "/fonts/kruti-dev/KrutiDev010.ttf",
      "page": [
        "kd1",
        "kd2"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "regular",
        "bold"
      ],
      "pageWeights": {
        "kd1": 10,
        "kd2": 5
      },
      "pageOrder": {
        "kd1": 1,
        "kd2": 4
      }
    },
    {
      "id": "krutidev011",
      "name": "KrutiDev 011",
      "family": "KrutiDev011",
      "file": "/fonts/kruti-dev/KrutiDev011.ttf",
      "page": [
        "kd1"
      ],
      "type": "KRUTIDEV",
      "weight": 8,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "regular"
      ],
      "pageWeights": {
        "kd1": 8
      },
      "pageOrder": {
        "kd1": 3
      }
    },
    {
      "id": "krutidev016",
      "name": "KrutiDev 016",
      "family": "KrutiDev016",
      "file": "/fonts/kruti-dev/KrutiDev016.ttf",
      "page": [
        "kd1"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "regular"
      ],
      "pageWeights": {
        "kd1": 10
      },
      "pageOrder": {
        "kd1": 2
      }
    },
    {
      "id": "krutidev054",
      "name": "KrutiDev 054",
      "family": "KrutiDev054",
      "file": "/fonts/kruti-dev/KrutiDev054.ttf",
      "page": [
        "kd1"
      ],
      "type": "KRUTIDEV",
      "weight": 8,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "regular"
      ],
      "pageWeights": {
        "kd1": 8
      },
      "pageOrder": {
        "kd1": 4
      }
    },
    {
      "id": "krutidev100",
      "name": "KrutiDev 100",
      "family": "KrutiDev100",
      "file": "/fonts/kruti-dev/KrutiDev100.ttf",
      "page": [
        "kd1"
      ],
      "type": "KRUTIDEV",
      "weight": 5,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "regular"
      ],
      "pageWeights": {
        "kd1": 5
      },
      "pageOrder": {
        "kd1": 5
      }
    },
    {
      "id": "krutidev160",
      "name": "KrutiDev 160",
      "family": "KrutiDev160",
      "file": "/fonts/kruti-dev/KrutiDev160.ttf",
      "page": [
        "kd2"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "bold"
      ],
      "pageWeights": {
        "kd2": 10
      },
      "pageOrder": {
        "kd2": 1
      }
    },
    {
      "id": "krutidev200",
      "name": "KrutiDev 200",
      "family": "KrutiDev200",
      "file": "/fonts/kruti-dev/KrutiDev200.ttf",
      "page": [
        "kd2"
      ],
      "type": "KRUTIDEV",
      "weight": 10,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "bold"
      ],
      "pageWeights": {
        "kd2": 10
      },
      "pageOrder": {
        "kd2": 2
      }
    },
    {
      "id": "krutidev240",
      "name": "KrutiDev 240",
      "family": "KrutiDev240",
      "file": "/fonts/kruti-dev/KrutiDev240.ttf",
      "page": [
        "kd2"
      ],
      "type": "KRUTIDEV",
      "weight": 8,
      "tags": [
        "krutidev",
        "typing",
        "legacy",
        "bold"
      ],
      "pageWeights": {
        "kd2": 8
      },
      "pageOrder": {
        "kd2": 3
      }
    },
    {
      "id": "aparajita-bold",
      "name": "Aparajita Bold",
      "family": "Aparajita-Bold",
      "file": "/fonts/mangal/Aparajita-Bold.ttf",
      "page": [
        "uc1"
      ],
      "type": "UNICODE",
      "weight": 5,
      "tags": [
        "unicode",
        "mangal",
        "windows"
      ],
      "pageWeights": {
        "uc1": 5
      },
      "pageOrder": {
        "uc1": 12
      }
    },
    {
      "id": "aparajita",
      "name": "Aparajita",
      "family": "Aparajita",
      "file": "/fonts/mangal/Aparajita.ttf",
      "page": [
        "uc1"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows"
      ],
      "pageWeights": {
        "uc1": 10
      },
      "pageOrder": {
        "uc1": 4
      }
    },
    {
      "id": "kokila-bold",
      "name": "Kokila Bold",
      "family": "Kokila-Bold",
      "file": "/fonts/mangal/Kokila-Bold.ttf",
      "page": [
        "uc1"
      ],
      "type": "UNICODE",
      "weight": 5,
      "tags": [
        "unicode",
        "mangal",
        "windows"
      ],
      "pageWeights": {
        "uc1": 5
      },
      "pageOrder": {
        "uc1": 11
      }
    },
    {
      "id": "kokila",
      "name": "Kokila",
      "family": "Kokila",
      "file": "/fonts/mangal/Kokila.ttf",
      "page": [
        "uc1"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows"
      ],
      "pageWeights": {
        "uc1": 10
      },
      "pageOrder": {
        "uc1": 3
      }
    },
    {
      "id": "mangal-regular",
      "name": "Mangal Regular",
      "family": "Mangal-Regular",
      "file": "/fonts/mangal/Mangal-Regular.ttf",
      "page": [
        "uc1"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows"
      ],
      "pageWeights": {
        "uc1": 10
      },
      "pageOrder": {
        "uc1": 1
      }
    },
    {
      "id": "hind-400",
      "name": "Hind 400",
      "family": "Hind-400",
      "file": "/fonts/unicode/Hind-400.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 5,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 5,
        "uc2": 5
      },
      "pageOrder": {
        "uc1": 9,
        "uc2": 7
      }
    },
    {
      "id": "hind-500",
      "name": "Hind 500",
      "family": "Hind-500",
      "file": "/fonts/unicode/Hind-500.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 1,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 1,
        "uc2": 0
      },
      "pageOrder": {
        "uc1": 13,
        "uc2": 11
      }
    },
    {
      "id": "hind-600",
      "name": "Hind 600",
      "family": "Hind-600",
      "file": "/fonts/unicode/Hind-600.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 8,
        "uc2": 10
      },
      "pageOrder": {
        "uc1": 7,
        "uc2": 2
      }
    },
    {
      "id": "hind-700",
      "name": "Hind 700",
      "family": "Hind-700",
      "file": "/fonts/unicode/Hind-700.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 5,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 5,
        "uc2": 0
      },
      "pageOrder": {
        "uc1": 10,
        "uc2": 12
      }
    },
    {
      "id": "mukta-regular",
      "name": "Mukta Regular",
      "family": "Mukta-Regular",
      "file": "/fonts/unicode/Mukta-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 0,
        "uc2": 10
      },
      "pageOrder": {
        "uc1": 16,
        "uc2": 3
      }
    },
    {
      "id": "notosansdevanagari-bold",
      "name": "Noto Sans Devanagari Bold",
      "family": "NotoSansDevanagari-Bold",
      "file": "/fonts/unicode/NotoSansDevanagari-Bold.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 8,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 8,
        "uc2": 5
      },
      "pageOrder": {
        "uc1": 5,
        "uc2": 8
      }
    },
    {
      "id": "notosansdevanagari-regular",
      "name": "Noto Sans Devanagari Regular",
      "family": "NotoSansDevanagari-Regular",
      "file": "/fonts/unicode/NotoSansDevanagari-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 10,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 10,
        "uc2": 10
      },
      "pageOrder": {
        "uc1": 2,
        "uc2": 1
      }
    },
    {
      "id": "notosansdevanagari-ui",
      "name": "Noto Sans Devanagari UI",
      "family": "NotoSansDevanagari-UI",
      "file": "/fonts/unicode/NotoSansDevanagari-UI.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 1,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 0,
        "uc2": 1
      },
      "pageOrder": {
        "uc1": 17,
        "uc2": 9
      }
    },
    {
      "id": "notoserifdevanagari-bold",
      "name": "Noto Serif Devanagari Bold",
      "family": "NotoSerifDevanagari-Bold",
      "file": "/fonts/unicode/NotoSerifDevanagari-Bold.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 0,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 0,
        "uc2": 0
      },
      "pageOrder": {
        "uc1": 18,
        "uc2": 14
      }
    },
    {
      "id": "notoserifdevanagari-regular",
      "name": "Noto Serif Devanagari Regular",
      "family": "NotoSerifDevanagari-Regular",
      "file": "/fonts/unicode/NotoSerifDevanagari-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 8,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 8,
        "uc2": 8
      },
      "pageOrder": {
        "uc1": 6,
        "uc2": 4
      }
    },
    {
      "id": "poppins-regular",
      "name": "Poppins Regular",
      "family": "Poppins-Regular",
      "file": "/fonts/unicode/Poppins-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 8,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 0,
        "uc2": 8
      },
      "pageOrder": {
        "uc1": 19,
        "uc2": 6
      }
    },
    {
      "id": "rozhaone-regular",
      "name": "Rozha One Regular",
      "family": "RozhaOne-Regular",
      "file": "/fonts/unicode/RozhaOne-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 8,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 8,
        "uc2": 8
      },
      "pageOrder": {
        "uc1": 8,
        "uc2": 5
      }
    },
    {
      "id": "tirodevanagarihindi-regular",
      "name": "Tiro Devanagari Hindi Regular",
      "family": "TiroDevanagariHindi-Regular",
      "file": "/fonts/unicode/TiroDevanagariHindi-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 1,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 1,
        "uc2": 0
      },
      "pageOrder": {
        "uc1": 14,
        "uc2": 13
      }
    },
    {
      "id": "yatraone-regular",
      "name": "Yatra One Regular",
      "family": "YatraOne-Regular",
      "file": "/fonts/unicode/YatraOne-Regular.ttf",
      "page": [
        "uc1",
        "uc2"
      ],
      "type": "UNICODE",
      "weight": 1,
      "tags": [
        "unicode",
        "mangal",
        "windows",
        "pc"
      ],
      "pageWeights": {
        "uc1": 1,
        "uc2": 1
      },
      "pageOrder": {
        "uc2": 10
      }
    },
    { id: 'ams-calli1', name: 'AMS Calli 1', family: 'AMS_Calli1', file: '/fonts/fonts5/AMS_Calli1.ttf', page: ['page5'], type: 'AMS', weight: 10, tags: ['calligraphy', 'script', 'ams'] },
    { id: 'ams-calli2', name: 'AMS Calli 2', family: 'AMS_Calli2', file: '/fonts/fonts5/AMS_Calli2.ttf', page: ['page5'], type: 'AMS', weight: 8, tags: ['calligraphy', 'script', 'ams'] },
    { id: 'ams-handwriting', name: 'AMS Handwriting', family: 'AMS_Handwriting', file: '/fonts/fonts7/AMS_Handwriting.ttf', page: ['page7'], type: 'AMS', weight: 8, tags: ['handwriting', 'cursive', 'ams'] },
    { id: 'laila-regular', name: 'Laila Regular', family: 'Laila-Regular', file: '/fonts/unicode/Laila-Regular.ttf', page: ['uc1', 'uc2'], type: 'UNICODE', weight: 8, tags: ['unicode', 'modern', 'display'] },
    { id: 'kalam-regular', name: 'Kalam Regular', family: 'Kalam-Regular', file: '/fonts/unicode/Kalam-Regular.ttf', page: ['uc2'], type: 'UNICODE', weight: 8, tags: ['unicode', 'handwriting'] },
    { id: 'eczar-regular', name: 'Eczar Regular', family: 'Eczar-Regular', file: '/fonts/unicode/Eczar-Regular.ttf', page: ['uc1'], type: 'UNICODE', weight: 7, tags: ['unicode', 'serif'] },
    { id: 'rajdhani-regular', name: 'Rajdhani Regular', family: 'Rajdhani-Regular', file: '/fonts/unicode/Rajdhani-Regular.ttf', page: ['uc2'], type: 'UNICODE', weight: 7, tags: ['unicode', 'modern'] },
    { id: 'krutidev030', name: 'KrutiDev030', family: 'KrutiDev030', file: '/fonts/kruti-dev/KrutiDev030.ttf', page: ['kd1'], type: 'KRUTIDEV', weight: 6, tags: ['krutidev', 'typing', 'legacy'] },
    { id: 'krutidev080', name: 'KrutiDev080', family: 'KrutiDev080', file: '/fonts/kruti-dev/KrutiDev080.ttf', page: ['kd2'], type: 'KRUTIDEV', weight: 5, tags: ['krutidev', 'typing', 'legacy'] }
  ];

  const pageLoadConfig = {
    "page1": {
      "initial": 10,
      "increment": 10
    },
    "page5": {
      "initial": 8,
      "increment": 4
    },
    "page7": {
      "initial": 8,
      "increment": 3
    },
    "page9": {
      "initial": 10,
      "increment": 5
    },
    "page10": {
      "initial": 8,
      "increment": 4
    },
    "uc1": {
      "initial": 10,
      "increment": 5
    },
    "cv2": {
      "initial": 12,
      "increment": 8
    }
  };

  const pageSelectionLimits = {
    "uc1": 15,
    "uc2": 10,
    "cv2": 28
  };

  function getPageFonts(pageId) {
    const pageTopic = (document.body && document.body.getAttribute('data-topic') || '').toLowerCase();
    const fontsForPage = fontData
      .filter(font => Array.isArray(font.page) && font.page.includes(pageId))
      .map(font => {
        const pageWeight = font.pageWeights && typeof font.pageWeights[pageId] === 'number'
          ? font.pageWeights[pageId]
          : font.weight;
        const order = font.pageOrder && typeof font.pageOrder[pageId] === 'number'
          ? font.pageOrder[pageId]
          : 9999;
        const topicBoost = pageTopic && Array.isArray(font.tags) && font.tags.includes(pageTopic) ? 0.25 : 0;
        const isPop = pageWeight >= 10 && font.tags && font.tags.includes('featured');
        return Object.assign({}, font, {
          effectiveWeight: pageWeight,
          sortWeight: pageWeight + topicBoost,
          isPopular: isPop,
          isBestMatch: pageWeight >= 8 && !isPop,
          _pageOrder: order,
          isUnicode: font.type === 'UNICODE',
          isKrutidev: font.type === 'KRUTIDEV',
          isAms: font.type === 'AMS'
        });
      })
      .sort((a, b) => {
        if (b.sortWeight !== a.sortWeight) return b.sortWeight - a.sortWeight;
        if (a._pageOrder !== b._pageOrder) return a._pageOrder - b._pageOrder;
        return a.name.localeCompare(b.name);
      });

    const limit = pageSelectionLimits[pageId];
    const limited = typeof limit === 'number' ? fontsForPage.slice(0, limit) : fontsForPage;
    return limited.map(font => {
      const cloned = Object.assign({}, font);
      delete cloned._pageOrder;
      return cloned;
    });
  }

  global.fontData = fontData;
  global.FONT_DATA = fontData;
  global.pageLoadConfig = pageLoadConfig;
  global.PAGE_LOAD_CONFIG = pageLoadConfig;
  global.getPageFonts = getPageFonts;

  /**
   * Hindi → AMS Roman transliteration map.
   * Used by AMS-logic pages (page1–page10, cv2).
   */
  global.AMS_MAP = {
    'क': 'k', 'ख': 'Ka', 'ग': 'ga', 'घ': 'Ga', 'ङ': 'D',
    'च': 'ca', 'छ': 'C', 'ज': 'ja', 'झ': 'Ja', 'ञ': 'Pa',
    'ट': 'o', 'ठ': 'O', 'ड': 'D', 'ढ': 'Z', 'ण': 'Na',
    'त': 'ta', 'थ': 'Ta', 'द': 'd', 'ध': 'Ya', 'न': 'na',
    'प': 'pa', 'फ': 'f', 'ब': 'ba', 'भ': 'Ba', 'म': 'ma',
    'य': 'ya', 'र': 'r', 'ल': 'la', 'व': 'va',
    'श': 'Sa', 'ष': 'Va', 'स': 'sa', 'ह': 'h',
    'क्ष': 'Ha', 'त्र': 'Pa', 'ज्ञ': 'za',
    'अ': 'A', 'आ': 'Aa', 'इ': 'q', 'ई': 'qQ', 'उ': 'w', 'ऊ': 'W',
    'ऋ': 'R', 'ए': 'F', 'ऐ': 'Fe', 'ओ': 'Aae', 'औ': 'AaE',
    'अं': 'A/', 'अः': 'A:', 'ॉ': '~', 'ऍ': '`',
    'ा': 'a', 'ि': 'i', 'ी': 'aI', 'ु': 'u', 'ू': 'U',
    'ृ': '&', 'े': 'e', 'ै': 'E', 'ो': 'ae', 'ौ': 'aE',
    'ं': '/', 'ः': ':', 'ँ': 'a~', 'ॅ': '`', '्': 'x'
  };

  /**
   * Unicode (Hindi/Devanagari) → Krutidev/Remington mapping.
   */
  global.KRUTIDEV_MAP = {
    'अ': 'v', 'आ': 'vk', 'इ': 'b', 'ई': 'bZ', 'उ': 'm', 'ऊ': 'Å', 'ऋ': '_',
    'ए': ',', 'ऐ': 'S', 'ओ': 'vks', 'औ': 'vkS',
    'क': 'd', 'ख': '[k', 'ग': 'x', 'घ': '?', 'ङ': '³',
    'च': 'p', 'छ': 'N', 'ज': 't', 'झ': '>', 'ञ': '¥',
    'ट': 'V', 'ठ': 'B', 'ड': 'M', 'ढ': '<', 'ण': '.k',
    'त': 'r', 'थ': 'Fk', 'द': 'n', 'ध': '/k', 'न': 'u',
    'प': 'i', 'फ': 'Q', 'ब': 'c', 'भ': 'Hk', 'म': 'e',
    'य': ';', 'र': 'j', 'ल': 'y', 'व': 'o',
    'श': "'k", 'ष': '"k', 'स': 'l', 'ह': 'g',
    'क्ष': '{k', 'त्र': '=', 'ज्ञ': 'K',
    'ा': 'k', 'ि': 'f', 'ी': 'h', 'ु': 'q', 'ू': 'w', 'ृ': '`',
    'े': 's', 'ै': 'S', 'ो': 'ks', 'ौ': 'kS',
    'ं': 'a', 'ः': '%', 'ँ': '¡', '्': '~',
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
    '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
  };

  global.UNICODE_TRANSFORMS = {
    script: { a: 0x1D4EA, A: 0x1D4D0, base: 'a' },
    boldScript: { a: 0x1D4EA, A: 0x1D4D0, base: 'a' },
    boldSerif: { a: 0x1D400, A: 0x1D400 - 26 },
    italicSerif: { a: 0x1D44E, A: 0x1D434 },
    boldSans: { a: 0x1D5EE, A: 0x1D5D4 },
    monospace: { a: 0x1D68A, A: 0x1D670 },
    doubleStruck: { a: 0x1D552, A: 0x1D538 },
    fraktur: { a: 0x1D51E, A: 0x1D504 },
    boldFraktur: { a: 0x1D586, A: 0x1D56C },
    bubble: { a: 0x24D0, A: 0x24B6 },
    squared: { a: 0x1F130, A: 0x1F130 }
  };

})(window);

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MODULE 2: FONT GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * font-generator.js (Production Build - v10)
 * Fixed: PNG download with transparent background (no box visible)
 * Fixed: Proper font rendering in PNG
 */
(function () {
  'use strict';

  let pageKey = document.body.getAttribute('data-page') || 'page1';
  let pageLogic = (document.body.getAttribute('data-logic') || 'AMS').toUpperCase();

  // ══════════════════════════════════════════════════════════
  // CONVERTER PAGE: Skip completely
  // ══════════════════════════════════════════════════════════
  if (pageLogic === 'CONVERTER') {
    console.log('[font-generator.js] Skipped — CONVERTER page');
    return;
  }

  // ══════════════════════════════════════════════════════════
  // GENERATOR PAGE
  // ══════════════════════════════════════════════════════════

  let FONT_LIST = (typeof window.getPageFonts === 'function' ? window.getPageFonts(pageKey) : []);
  const PAGE_LOAD_CONFIG = window.PAGE_LOAD_CONFIG || {};
  let currentDisplayCount = 0;
  const AMS_MAP = window.AMS_MAP || {};
  const KD_MAP = window.KRUTIDEV_MAP || {};

  const STORAGE_KEY = 'hfs_generator_v6';
  const DEFAULT_TEXT = 'Mera bharat mahan';
  const DEFAULT_SIZE = 40;
  const DEFAULT_FG = '#1a1a1a';
  const DEFAULT_BG = '#ffffff';

  let $input = document.getElementById('inputText');
  let $size = document.getElementById('fontSize');
  let $fgColor = document.getElementById('fontColor');
  let $bgColor = document.getElementById('bgColor');
  let $preview = document.getElementById('previews');
  let $sizeLabel = document.getElementById('fontSizeValue');

  if (!$input || !$preview) {
    console.log('[font-generator.js] Required elements not found');
    return;
  }

  window._flashToast = flashToast;

  // ══════════════════════════════════════════════════════════
  // FONT INJECTION
  // ══════════════════════════════════════════════════════════



  // ══════════════════════════════════════════════════════════
  // STATE PERSISTENCE
  // ══════════════════════════════════════════════════════════

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        text: $input.value,
        fontSize: $size ? $size.value : DEFAULT_SIZE,
        fontColor: $fgColor ? $fgColor.value : DEFAULT_FG,
        bgColor: $bgColor ? $bgColor.value : DEFAULT_BG
      }));
    } catch (e) { }
  }

  function loadState() {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!s) return false;
      $input.value = s.text || DEFAULT_TEXT;
      if ($size) $size.value = s.fontSize || DEFAULT_SIZE;
      if ($fgColor) $fgColor.value = s.fontColor || DEFAULT_FG;
      if ($bgColor) $bgColor.value = s.bgColor || DEFAULT_BG;
      if ($sizeLabel && $size) $sizeLabel.textContent = $size.value;
      return true;
    } catch (e) { return false; }
  }

  function applyDefaults() {
    $input.value = DEFAULT_TEXT;
    if ($size) $size.value = DEFAULT_SIZE;
    if ($fgColor) $fgColor.value = DEFAULT_FG;
    if ($bgColor) $bgColor.value = DEFAULT_BG;
    if ($sizeLabel) $sizeLabel.textContent = String(DEFAULT_SIZE);
  }

  // ══════════════════════════════════════════════════════════
  // TRANSLITERATION
  // ══════════════════════════════════════════════════════════

  function isHindi(text) {
    return /[\u0900-\u097F]/.test(text);
  }

  function toAmsRoman(text) {
    let out = '', i = 0;
    while (i < text.length) {
      const ch = text[i], next = text[i + 1];
      if (next === 'ि') {
        out += (AMS_MAP[next] || '') + (AMS_MAP[ch] || ch);
        i += 2;
      } else {
        out += (AMS_MAP[ch] || ch);
        i += 1;
      }
    }
    return out;
  }

  function toKrutidevRoman(text) {
    let out = '', i = 0;
    while (i < text.length) {
      const ch = text[i], next = text[i + 1];
      if (next === 'ि') {
        out += (KD_MAP[next] || '') + (KD_MAP[ch] || ch);
        i += 2;
      } else {
        out += (KD_MAP[ch] || ch);
        i += 1;
      }
    }
    return out;
  }

  async function englishToHindi(text) {
    const url = 'https://translate.googleapis.com/translate_a/single' +
      '?client=gtx&sl=en&tl=hi&dt=t&q=' + encodeURIComponent(text);
    try {
      const r = await fetch(url);
      const data = await r.json();
      return data[0].map(seg => seg[0]).join('');
    } catch (e) {
      console.warn('Translation failed:', e);
      return text;
    }
  }

  function getDisplayText(font, rawText, hindi, amsRoman, kdRoman) {
    if (font.isUnicode) return hindi;
    if (font.isKrutidev) return kdRoman;
    return amsRoman;
  }

  // ══════════════════════════════════════════════════════════
  // DOM HELPERS
  // ══════════════════════════════════════════════════════════

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function makeBtn(html, cls, onClick) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = cls;
    b.innerHTML = html;
    b.addEventListener('click', onClick);
    return b;
  }

  // ══════════════════════════════════════════════════════════
  // CARD BUILDER
  // ══════════════════════════════════════════════════════════

  function buildCard(font, displayText, copyText, index) {
    const card = el('div', 'font-card');

    card.appendChild(el('div', 'font-number', (index + 1).toString()));
    if (font.isPopular) {
      card.classList.add('is-popular');
      card.appendChild(el('div', 'popular-badge', '🔥 Popular'));
    } else if (font.isBestMatch) {
      card.classList.add('is-best-match');
      card.appendChild(el('div', 'best-match-badge', '⭐ Best'));
    }
    card.appendChild(el('div', 'font-label',
      '<i class="fas fa-font"></i> <span class="fn">' + escapeHtml(font.name) + '</span>'));

    const box = el('div', 'preview-box');
    if (font.file || font.isUnicode) {
      box.style.fontFamily = "'" + (font.family || font.name) + "', sans-serif";
    }
    box.style.fontSize = ($size ? $size.value : DEFAULT_SIZE) + 'px';
    box.style.color = $fgColor ? $fgColor.value : DEFAULT_FG;
    box.style.backgroundColor = $bgColor ? $bgColor.value : DEFAULT_BG;
    box.textContent = displayText;
    box.setAttribute('data-copy-text', copyText);
    box.setAttribute('data-font-name', font.name);
    card.appendChild(box);

    const actions = el('div', 'card-actions');

    actions.appendChild(makeBtn(
      '<i class="fas fa-copy"></i> Copy',
      'btn-action',
      () => handleCopy(box, font)
    ));

    actions.appendChild(makeBtn(
      '<i class="fas fa-download"></i> PNG',
      'btn-action btn-green',
      () => handlePngExport(box, font.name, false)
    ));

    actions.appendChild(makeBtn(
      '<i class="fas fa-image"></i> Transparent',
      'btn-action btn-outline-action',
      () => handlePngExport(box, font.name, true)
    ));

    if (font.file) {
      actions.appendChild(makeBtn(
        '<i class="fas fa-file-download"></i> TTF',
        'btn-action btn-dark',
        () => downloadTtf(font.file, font.name)
      ));
    }

    card.appendChild(actions);
    return card;
  }

  // ══════════════════════════════════════════════════════════
  // COPY HANDLER
  // ══════════════════════════════════════════════════════════

  function handleCopy(box, font) {
    const copyText = box.getAttribute('data-copy-text') || box.textContent;
    copyToClipboard(copyText);

    if (font.isKrutidev || (!font.isUnicode && !font.isCopyOnly)) {
      flashToast('✓ Hindi text copied! Use PNG/Transparent for exact calligraphy style');
    } else {
      flashToast('✓ Stylish text copied!');
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
    } catch (e) {
      console.error('Copy failed:', e);
    }
    document.body.removeChild(ta);
  }

  // ══════════════════════════════════════════════════════════
  // TOAST
  // ══════════════════════════════════════════════════════════

  function flashToast(msg, duration = 2500) {
    let t = document.getElementById('hfs-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'hfs-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
      t.style.opacity = '0';
    }, duration);
  }

  // ══════════════════════════════════════════════════════════
  // PNG EXPORT — FIXED VERSION (No Box Visible)
  // ══════════════════════════════════════════════════════════

  async function handlePngExport(box, fontName, transparent) {
    // Load html2canvas if needed
    if (typeof html2canvas !== 'function') {
      flashToast('⏳ Preparing download...', 1500);
      try {
        await loadScript('vendor/html2canvas/html2canvas.min.js');
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.error('html2canvas load failed:', e);
        flashToast('❌ PNG library failed to load. Please refresh the page.');
        return;
      }
    }

    if (typeof html2canvas !== 'function') {
      flashToast('❌ PNG library not available');
      return;
    }

    // Wait for fonts to load
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Font loading check failed:', e);
    }

    // ── CREATE CLEAN CLONE WITHOUT BOX STYLING ──────────────
    // This is the KEY fix — we create a wrapper with ONLY text
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: fixed;
      top: -9999px;
      left: -9999px;
      padding: 20px;
      display: inline-block;
      font-family: ${box.style.fontFamily || 'sans-serif'};
      font-size: ${box.style.fontSize || '40px'};
      color: ${box.style.color || '#000'};
      background: ${transparent ? 'transparent' : (box.style.backgroundColor || '#fff')};
      white-space: pre-wrap;
      word-wrap: break-word;
      max-width: 800px;
      line-height: 1.5;
    `;
    wrapper.textContent = box.textContent;
    document.body.appendChild(wrapper);

    // Small delay to ensure rendering
    await new Promise(resolve => setTimeout(resolve, 200));

    try {
      const canvas = await html2canvas(wrapper, {
        backgroundColor: transparent ? null : (box.style.backgroundColor || '#ffffff'),
        scale: 3, // Higher quality
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: wrapper.scrollWidth,
        height: wrapper.scrollHeight,
        windowWidth: wrapper.scrollWidth,
        windowHeight: wrapper.scrollHeight
      });

      // Remove wrapper
      document.body.removeChild(wrapper);

      // ── TRIM TRANSPARENT EDGES (optional but recommended) ──
      const trimmedCanvas = transparent ? trimCanvas(canvas) : canvas;

      // Download
      trimmedCanvas.toBlob(blob => {
        if (!blob) {
          flashToast('❌ PNG generation failed');
          return;
        }
        const a = document.createElement('a');
        a.download = sanitizeFilename(fontName) + (transparent ? '_transparent' : '') + '.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        flashToast('✓ PNG downloaded!');
      }, 'image/png');

    } catch (err) {
      // Cleanup on error
      if (document.body.contains(wrapper)) {
        document.body.removeChild(wrapper);
      }
      console.error('PNG export failed:', err);
      flashToast('❌ PNG export failed. Please try again.');
    }
  }

  // ── TRIM CANVAS (removes extra transparent space) ────────
  function trimCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = pixels.data;
    let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

    // Find bounds
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const alpha = data[((y * canvas.width + x) * 4) + 3];
        if (alpha > 0) {
          if (y < top) top = y;
          if (y > bottom) bottom = y;
          if (x < left) left = x;
          if (x > right) right = x;
        }
      }
    }

    // Add padding
    const padding = 20;
    top = Math.max(0, top - padding);
    left = Math.max(0, left - padding);
    bottom = Math.min(canvas.height, bottom + padding);
    right = Math.min(canvas.width, right + padding);

    const trimmedWidth = right - left;
    const trimmedHeight = bottom - top;

    // Create trimmed canvas
    const trimmed = document.createElement('canvas');
    trimmed.width = trimmedWidth;
    trimmed.height = trimmedHeight;
    const trimmedCtx = trimmed.getContext('2d');
    trimmedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);

    return trimmed;
  }

  // ══════════════════════════════════════════════════════════
  // TTF DOWNLOAD
  // ══════════════════════════════════════════════════════════

  function downloadTtf(fileUrl, fontName) {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = sanitizeFilename(fontName) + '.ttf';
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    flashToast('✓ Downloading ' + fontName + '.ttf...');
  }

  // ══════════════════════════════════════════════════════════
  // UTILS
  // ══════════════════════════════════════════════════════════

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9_-]/gi, '_').substring(0, 50);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load: ' + src));
      document.head.appendChild(script);
    });
  }


  function renderFonts(pageId, fonts, startIndex = 0, count = null) {
    const grid = document.getElementById('previews');
    const config = PAGE_LOAD_CONFIG[pageId];
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!grid) return;

    if (startIndex === 0) {
      currentDisplayCount = config ? config.initial : fonts.length;
    } else {
      const increment = typeof count === 'number' ? count : (config ? config.increment : fonts.length);
      currentDisplayCount = Math.min(fonts.length, currentDisplayCount + increment);
    }

    grid.innerHTML = '';
    const fontsToShow = fonts.slice(0, currentDisplayCount);

    fontsToShow.forEach((font, idx) => {
      grid.appendChild(buildCard(font, font.__displayText, font.__copyText, idx));
      if ((idx + 1) % 4 === 0 && idx !== fontsToShow.length - 1) {
        const adSlot = el('div', 'in-grid-ad',
          '<span class="ad-label">Advertisement</span><div class=""></div>');
        grid.appendChild(adSlot);
      }
    });

    if (loadMoreBtn) {
      if (config && currentDisplayCount < fonts.length) {
        loadMoreBtn.style.display = 'flex';
        loadMoreBtn.onclick = () => renderFonts(pageId, fonts, currentDisplayCount, config.increment);
      } else {
        loadMoreBtn.style.display = 'none';
        loadMoreBtn.onclick = null;
      }
    }
  }

  window.renderFonts = renderFonts;

  // ══════════════════════════════════════════════════════════
  // PREVIEW RENDERER
  // ══════════════════════════════════════════════════════════

  async function renderPreviews() {
    const raw = ($input.value || '').trim();
    if (!raw) {
      $preview.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">Type something to see previews...</p>';
      const loadMoreBtn = document.getElementById('loadMoreBtn');
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    $preview.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">Generating previews...</p>';

    let hindi;
    if (isHindi(raw)) {
      hindi = raw;
    } else if (raw.toLowerCase() === 'mera bharat mahan') {
      hindi = 'मेरा भारत महान';
    } else {
      hindi = FONT_LIST.length > 0 ? await englishToHindi(raw) : raw;
    }

    const amsRoman = toAmsRoman(hindi);
    const kdRoman = toKrutidevRoman(hindi);

    const processedFonts = FONT_LIST.map(font => {
      const displayText = getDisplayText(font, raw, hindi, amsRoman, kdRoman);
      let copyText = hindi;
      if (font.isUnicode || font.isCopyOnly) {
        copyText = displayText;
      }
      return Object.assign({}, font, {
        __displayText: displayText,
        __copyText: copyText
      });
    });

    renderFonts(pageKey, processedFonts, 0);
  }

  // ══════════════════════════════════════════════════════════
  // EVENT HANDLERS
  // ══════════════════════════════════════════════════════════

  function init() {
    pageKey = document.body.getAttribute('data-page') || 'page1';
    pageLogic = (document.body.getAttribute('data-logic') || 'AMS').toUpperCase();
    if (pageLogic === 'CONVERTER') return;

    $input = document.getElementById('inputText');
    $size = document.getElementById('fontSize');
    $fgColor = document.getElementById('fontColor');
    $bgColor = document.getElementById('bgColor');
    $preview = document.getElementById('previews');
    $sizeLabel = document.getElementById('fontSizeValue');

    if ($input && $preview) {
      FONT_LIST = (typeof window.getPageFonts === 'function' ? window.getPageFonts(pageKey) : []);
      setupListeners();
      boot();
    }
  }

  window.__hfsInitGenerator = init;

  function setupListeners() {
    if (!$input) return;
    $input.oninput = () => {
      clearTimeout(inputTimer);
      inputTimer = setTimeout(() => {
        saveState();
        renderPreviews();
      }, 350);
    };

    if ($size && $sizeLabel) {
      $size.oninput = () => {
        $sizeLabel.textContent = $size.value;
        $preview.querySelectorAll('.preview-box').forEach(b => {
          b.style.fontSize = $size.value + 'px';
        });
        saveState();
      };
    }

    if ($fgColor) {
      $fgColor.oninput = () => {
        $preview.querySelectorAll('.preview-box').forEach(b => {
          b.style.color = $fgColor.value;
        });
        saveState();
      };
    }

    if ($bgColor) {
      $bgColor.oninput = () => {
        $preview.querySelectorAll('.preview-box').forEach(b => {
          b.style.backgroundColor = $bgColor.value;
        });
        saveState();
      };
    }
    window.onbeforeunload = saveState;
  }

  function boot() {
    if (!loadState()) applyDefaults();
    renderPreviews();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MODULE 3: ENHANCED CHARACTER MAP
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Enhanced Character Map with AMS/Kruti Mappings + Quick Modal
 */
(function () {
  'use strict';

  // ══════════════════════════════════════════════════════════
  // CHARACTER SETS & MAPPINGS
  // ══════════════════════════════════════════════════════════

  const CHARACTER_SETS = {
    // Devanagari Unicode
    vowels: [{ chars: 'अआइईउऊऋॠऌॡएऐओऔ', range: 'U+0905-U+0914' }],
    consonants: [{ chars: 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह', range: 'U+0915-U+0939' }],
    matras: [{ chars: 'ािীুূৃॄॢॣেৈোৌ্', range: 'U+093E-U+094F' }],
    combining: [{ chars: 'ँंःऽ॒॑॓॔ॕॖॗ़ॱॲॳॴॵॶॷॸॹॺ', range: 'Various combining marks' }],

    // Symbols
    currency: [{ chars: '₹$€£¥₩₽¢₨₦₡₪₫₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿＄￠￡￢￣￤￥￦', range: 'Currency symbols' }],
    'common-symbols': [{ chars: '©®™℗℠℡°℃℉Ω№@#%&*+−×÷=≈≠±∞∅∂∆∇∈∉∋∌∏∑√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳', range: 'Common symbols' }],
    religious: [{ chars: 'ॐ☪☮☯☸♈♉♊♋♌♍♎♏♐♑♒♓🔯✡☦☪☮☯☸♂♀☿♃♄♅♆♇⚡⚢⚣⚤⚥⚦⚧⚨⚩⚪⚫⚬⚭⚮⚯', range: 'Religious & cultural' }],

    // Punctuation
    'hindi-punct': [{ chars: '।॥॰ऽ‌‍', range: 'Hindi punctuation' }],
    'general-punct': [{ chars: '.,;:!?()[]{}@#$%^&*-_=+|\\/<>`~', range: 'ASCII punctuation' }],
    quotes: [{ chars: '""\'\'„‚‛""\'\'‹›«»「」『』〈〉《》【】〖〗〘〙〚〛', range: 'Quotation marks' }],

    // Numbers
    'hindi-digits': [{ chars: '०१२३४५६७८९', range: 'U+0966-U+096F' }],
    'ascii-digits': [{ chars: '0123456789', range: 'U+0030-U+0039' }],
    fractions: [{ chars: '½⅓¼⅕⅙⅛⅔⅖⅜¾⅗⅘⅚⅞⅟↉', range: 'Vulgar fractions' }],

    // Arrows
    'basic-arrows': [{ chars: '←↑→↓↔↕↖↗↘↙', range: 'Basic arrows' }],
    'double-arrows': [{ chars: '⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙', range: 'Double arrows' }],
    'curved-arrows': [{ chars: '↰↱↲↳↴↵↶↷↸↹↺↻⤴⤵⤶⤷', range: 'Curved arrows' }],

    // Math
    'math-basic': [{ chars: '+-×÷=≠±∓∔∗∘∙√∛∜∝∞∟∠∡∢', range: 'Basic math' }],
    'math-comparison': [{ chars: '<>≤≥≪≫≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⋖⋗⋘⋙', range: 'Comparison operators' }],
    'math-advanced': [{ chars: '∀∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳', range: 'Advanced math' }],
  };

  // AMS Roman Mapping (Hindi → AMS)
  const AMS_MAPPING = {
    // Vowels
    'अ': 'A', 'आ': 'Aa', 'इ': 'q', 'ई': 'qQ', 'उ': 'w', 'ऊ': 'W',
    'ऋ': 'R', 'ए': 'F', 'ऐ': 'Fe', 'ओ': 'Aae', 'औ': 'AaE',
    // Consonants
    'क': 'k', 'ख': 'Ka', 'ग': 'ga', 'घ': 'Ga', 'ङ': 'D',
    'च': 'ca', 'छ': 'C', 'ज': 'ja', 'झ': 'Ja', 'ञ': 'Pa',
    'ट': 'o', 'ठ': 'O', 'ड': 'D', 'ढ': 'Z', 'ण': 'Na',
    'त': 'ta', 'थ': 'Ta', 'द': 'd', 'ध': 'Ya', 'न': 'na',
    'प': 'pa', 'फ': 'f', 'ब': 'ba', 'भ': 'Ba', 'म': 'ma',
    'य': 'ya', 'र': 'r', 'ल': 'la', 'व': 'va',
    'श': 'Sa', 'ष': 'Va', 'स': 'sa', 'ह': 'h',
    // Matras
    'ा': 'a', 'ि': 'i', 'ी': 'aI', 'ु': 'u', 'ू': 'U',
    'ृ': '&', 'े': 'e', 'ै': 'E', 'ो': 'ae', 'ौ': 'aE',
    'ं': '/', 'ः': ':', 'ँ': 'a~', '्': 'x'
  };

  // Kruti Dev Mapping (Hindi → Kruti)
  const KRUTI_MAPPING = {
    // Vowels
    'अ': 'v', 'आ': 'vk', 'इ': 'b', 'ई': 'bZ', 'उ': 'm', 'ऊ': 'Å',
    'ऋ': '_', 'ए': ',', 'ऐ': ',s', 'ओ': 'vks', 'औ': 'vkS',
    // Consonants
    'क': 'd', 'ख': '[k', 'ग': 'x', 'घ': '?k', 'ङ': '³',
    'च': 'p', 'छ': 'N', 'ज': 't', 'झ': '>', 'ञ': '¥',
    'ट': 'V', 'ठ': 'B', 'ड': 'M', 'ढ': '<', 'ण': '.k',
    'त': 'r', 'थ': 'Fk', 'द': 'n', 'ध': '/k', 'न': 'u',
    'प': 'i', 'फ': 'Q', 'ब': 'c', 'भ': 'Hk', 'म': 'e',
    'य': ';', 'र': 'j', 'ल': 'y', 'व': 'o',
    'श': '\'k', 'ष': '"k', 'स': 'l', 'ह': 'g',
    // Matras
    'ा': 'k', 'ि': 'f', 'ी': 'h', 'ु': 'q', 'ू': 'w',
    'ृ': '`', 'े': 's', 'ै': 'S', 'ो': 'ks', 'ौ': 'kS',
    'ं': 'a', 'ः': '%', 'ँ': '¡', '्': '~'
  };

  // ══════════════════════════════════════════════════════════
  // INITIALIZATION
  // ══════════════════════════════════════════════════════════

  function init() {
    setupTabs();
    populateCharacterMaps();
    populateMappingGrids();
    setupFloatingKeyboard();
    setupQuickCharMap();
    setupTabSwitching();
  }

  window.__hfsInitCharMap = init;

  function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchTab(tab.getAttribute('data-tab'));
      });
    });
  }

  function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }

  function populateCharacterMaps() {
    Object.keys(CHARACTER_SETS).forEach(setId => {
      const container = document.getElementById(setId);
      if (!container) return;

      CHARACTER_SETS[setId].forEach(group => {
        group.chars.split('').forEach(char => {
          if (!char.trim()) return;

          const btn = createCharButton(char);
          container.appendChild(btn);
        });
      });
    });
  }

  function populateMappingGrids() {
    // AMS Mapping
    populateMapping('ams-vowels', AMS_MAPPING, 'अआइईउऊऋएऐओऔ');
    populateMapping('ams-consonants', AMS_MAPPING, 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह');
    populateMapping('ams-matras', AMS_MAPPING, 'ािীুূৃেৈোৌংঃঁ্');

    // Kruti Dev Mapping
    populateMapping('kruti-vowels', KRUTI_MAPPING, 'अआइईउऊऋएऐओऔ');
    populateMapping('kruti-consonants', KRUTI_MAPPING, 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह');
    populateMapping('kruti-matras', KRUTI_MAPPING, 'ািীুূৃেৈোৌংঃঁ্');
  }

  function populateMapping(containerId, mapping, chars) {
    const container = document.getElementById(containerId);
    if (!container) return;

    chars.split('').forEach(char => {
      if (!mapping[char]) return;

      const card = createMappingCard(char, mapping[char]);
      container.appendChild(card);
    });
  }

  function createCharButton(char) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = char;

    // Get Unicode info
    const codePoint = char.codePointAt(0);
    const hex = codePoint.toString(16).toUpperCase().padStart(4, '0');
    btn.title = `U+${hex} — Click to copy`;

    // Copy functionality
    btn.addEventListener('click', () => {
      copyToClipboard(char);
      showToast(`Copied: ${char} (U+${hex})`);
    });

    return btn;
  }

  function createMappingCard(hindiChar, romanMapping) {
    const card = document.createElement('div');
    card.className = 'mapping-card';
    card.title = `Click to copy: ${hindiChar}`;

    card.innerHTML = `
      <div class="mapping-hindi">${hindiChar}</div>
      <div class="mapping-arrow">↓</div>
      <div class="mapping-roman">${romanMapping}</div>
    `;

    // Copy functionality (copy Hindi character)
    card.addEventListener('click', () => {
      copyToClipboard(hindiChar);
      const codePoint = hindiChar.codePointAt(0);
      const hex = codePoint.toString(16).toUpperCase().padStart(4, '0');
      showToast(`Copied: ${hindiChar} (maps to "${romanMapping}")`);
    });

    return card;
  }

  // ══════════════════════════════════════════════════════════
  // FLOATING KEYBOARD & QUICK MAP
  // ══════════════════════════════════════════════════════════

  function setupFloatingKeyboard() {
    const fab = document.getElementById('keyboardFab');
    const modal = document.getElementById('quickCharMap');
    const closeBtn = modal.querySelector('.modal-close');

    if (!fab || !modal) return;

    fab.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
      }
    });
  }

  function setupQuickCharMap() {
    // Populate quick grids from all CHARACTER_SETS
    Object.keys(CHARACTER_SETS).forEach(setId => {
      const containerId = 'quick' + setId.charAt(0).toUpperCase() + setId.slice(1);
      const chars = CHARACTER_SETS[setId].map(group => group.chars).join('');
      populateQuickGrid(containerId, chars);
    });

    // Setup quick tabs
    const quickTabs = document.querySelectorAll('.quick-tab');
    quickTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-quick');
        switchQuickTab(targetId);

        // Update active tab
        quickTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }

  function populateQuickGrid(containerId, chars) {
    const container = document.getElementById(containerId);
    if (!container) return;

    chars.split('').forEach(char => {
      if (!char.trim()) return;

      const btn = createQuickCharButton(char);
      container.appendChild(btn);
    });
  }

  function createQuickCharButton(char) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = char;

    const codePoint = char.codePointAt(0);
    const hex = codePoint.toString(16).toUpperCase().padStart(4, '0');
    btn.title = `U+${hex}`;

    btn.addEventListener('click', () => {
      copyToClipboard(char);
      showToast(`Copied: ${char}`);
      // Close modal after copying
      document.getElementById('quickCharMap').classList.remove('show');
    });

    return btn;
  }

  function switchQuickTab(targetId) {
    const containerId = 'quick' + targetId.charAt(0).toUpperCase() + targetId.slice(1);

    document.querySelectorAll('.quick-grid').forEach(grid => {
      grid.style.display = grid.id === containerId ? 'grid' : 'none';
    });
  }

  function setupTabSwitching() {
    // Keyboard shortcuts for main tabs
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key >= '1' && e.key <= '8') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const tabs = document.querySelectorAll('.tab-btn');
        if (tabs[tabIndex]) {
          tabs[tabIndex].click();
        }
      }

      // Quick keyboard shortcut (Ctrl+K)
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('keyboardFab').click();
      }
    });
  }

  // ══════════════════════════════════════════════════════════
  // UTILITY FUNCTIONS
  // ══════════════════════════════════════════════════════════

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
    } catch (e) {
      console.error('Copy failed:', e);
    }
    document.body.removeChild(ta);
  }

  function showToast(message) {
    let toast = document.getElementById('hfs-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hfs-toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
    }, 2500);
  }

  // ══════════════════════════════════════════════════════════
  // AUTO-INIT
  // ══════════════════════════════════════════════════════════

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MODULE 4: USER GUIDE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * User Guide Component
 * Auto-expand for new users, toggle functionality, localStorage
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'hfs_guide_read';
  const AUTO_EXPAND_DELAY = 2000;

  function init() {
    const note = document.getElementById('userGuideNote');
    const header = document.getElementById('noteHeader');
    const closeBtn = document.getElementById('noteCloseBtn');

    if (!note || !header) {
      console.warn('[User Guide] Elements not found');
      return;
    }

    // ── Check if user has read it before ──
    const hasRead = localStorage.getItem(STORAGE_KEY) === 'true';

    // Removed auto-expand and scrollIntoView because it interrupts user experience.
    // The note will now remain collapsed by default until the user clicks it.

    // ── Toggle on header click ──
    header.addEventListener('click', toggleNote);

    // ── Close button ──
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        collapseNote();
        localStorage.setItem(STORAGE_KEY, 'true');
        showToast('✓ Got it! You can re-open this anytime.');
      });
    }

    // ── Helper Functions ──
    function toggleNote() {
      if (note.classList.contains('expanded')) {
        collapseNote();
      } else {
        expandNote();
      }
    }

    function expandNote() {
      note.classList.add('expanded');
      const toggle = note.querySelector('.note-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');

      // Stop pulse animation when expanded
      const icon = note.querySelector('.note-icon');
      if (icon) icon.classList.remove('pulse');
    }

    function collapseNote() {
      note.classList.remove('expanded');
      const toggle = note.querySelector('.note-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    function showToast(msg) {
      let t = document.getElementById('hfs-toast');
      if (!t) {
        t = document.createElement('div');
        t.id = 'hfs-toast';
        t.style.cssText = [
          'position:fixed',
          'bottom:30px',
          'left:50%',
          'transform:translateX(-50%)',
          'background:#222',
          'color:#fff',
          'padding:12px 28px',
          'border-radius:8px',
          'font-size:15px',
          'z-index:99999',
          'box-shadow:0 4px 20px rgba(0,0,0,.4)',
          'transition:opacity .3s',
          'pointer-events:none',
          'white-space:nowrap'
        ].join(';');
        document.body.appendChild(t);
      }
      t.textContent = msg;
      t.style.opacity = '1';
      clearTimeout(t._tmr);
      t._tmr = setTimeout(() => {
        t.style.opacity = '0';
      }, 3000);
    }
  }

  window.__hfsInitUserGuide = init;

  // ── Auto-init ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MODULE 5: QUICK CHARACTER MAP
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * quick-character-map.js
 * Standalone Quick Character Map modal for all font pages.
 * Includes: Devanagari character grids + AMS Roman + Kruti Dev mapping cards.
 */
(function () {
  'use strict';

  // ── Devanagari character sets ──
  var CHARACTER_SETS = {
    'vowels': 'अआइईउऊऋॠएऐओऔ',
    'consonants': 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह',
    'matras': 'ािীুূृॄেৈোৌ্',
    'combining': 'ँंःऽ़॒॑ॱ',
    'currency': '₹$€£¥₩₽¢₨₦₡₪₫₭₮₯₰₱₲₳₴₵₿',
    'common-symbols': '©®™℗°℃℉№@#%&*±∞√∂∆∇∈∩∪∫∑∏',
    'religious': 'ॐ☪☮☯☸✡☦♈♉♊♋♌♍♎♏♐♑♒♓',
    'hindi-punct': '।॥॰ऽ‌‍',
    'general-punct': '.,;:!?()[]{}@#$%^&*-_=+|\\/<>`~',
    'quotes': '""\'\'„‚‛""\'\'‹›«»「」『』〈〉《》【】',
    'hindi-digits': '०१२३४५६७८९',
    'ascii-digits': '0123456789',
    'fractions': '½⅓¼⅕⅙⅛⅔⅖⅜¾⅗⅘⅚⅞⅟',
    'basic-arrows': '←↑→↓↔↕↖↗↘↙',
    'double-arrows': '⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙',
    'curved-arrows': '↰↱↲↳↴↵↶↷↸↹↺↻⤴⤵',
    'math-basic': '+-×÷=≠±∓√∛∝∞∟∠',
    'math-comparison': '<>≤≥≪≫≲≳≺≻≼≽',
    'math-advanced': '∀∃∄∅∆∇∈∉∋∌∏∐∑∫∬∮∯∧∨∩∪'
  };

  // ── AMS Roman Mapping (Hindi → AMS key) ──
  var AMS_MAPPING = [
    // Vowels
    { h: 'अ', r: 'A' }, { h: 'आ', r: 'Aa' }, { h: 'इ', r: 'q' }, { h: 'ई', r: 'qQ' },
    { h: 'उ', r: 'w' }, { h: 'ऊ', r: 'W' }, { h: 'ऋ', r: 'R' }, { h: 'ए', r: 'F' },
    { h: 'ऐ', r: 'Fe' }, { h: 'ओ', r: 'Aae' }, { h: 'औ', r: 'AaE' },
    // Consonants
    { h: 'क', r: 'k' }, { h: 'ख', r: 'Ka' }, { h: 'ग', r: 'ga' }, { h: 'घ', r: 'Ga' },
    { h: 'ङ', r: 'D' }, { h: 'च', r: 'ca' }, { h: 'छ', r: 'C' }, { h: 'ज', r: 'ja' },
    { h: 'झ', r: 'Ja' }, { h: 'ञ', r: 'Pa' }, { h: 'ट', r: 'o' }, { h: 'ठ', r: 'O' },
    { h: 'ड', r: 'D' }, { h: 'ढ', r: 'Z' }, { h: 'ण', r: 'Na' }, { h: 'त', r: 'ta' },
    { h: 'थ', r: 'Ta' }, { h: 'द', r: 'd' }, { h: 'ध', r: 'Ya' }, { h: 'न', r: 'na' },
    { h: 'प', r: 'pa' }, { h: 'फ', r: 'f' }, { h: 'ब', r: 'ba' }, { h: 'भ', r: 'Ba' },
    { h: 'म', r: 'ma' }, { h: 'य', r: 'ya' }, { h: 'र', r: 'r' }, { h: 'ल', r: 'la' },
    { h: 'व', r: 'va' }, { h: 'श', r: 'Sa' }, { h: 'ष', r: 'Va' }, { h: 'स', r: 'sa' },
    { h: 'ह', r: 'h' },
    // Matras
    { h: 'ा', r: 'a' }, { h: 'ि', r: 'i' }, { h: 'ी', r: 'aI' }, { h: 'ु', r: 'u' },
    { h: 'ू', r: 'U' }, { h: 'ृ', r: '&' }, { h: 'े', r: 'e' }, { h: 'ै', r: 'E' },
    { h: 'ो', r: 'ae' }, { h: 'ौ', r: 'aE' }, { h: 'ं', r: '/' }, { h: 'ः', r: ':' },
    { h: 'ँ', r: 'a~' }, { h: '्', r: 'x' }
  ];

  // ── Kruti Dev Mapping (Hindi → Remington key) ──
  var KRUTI_MAPPING = [
    // Vowels
    { h: 'अ', r: 'v' }, { h: 'आ', r: 'vk' }, { h: 'इ', r: 'b' }, { h: 'ई', r: 'bZ' },
    { h: 'उ', r: 'm' }, { h: 'ऊ', r: 'Å' }, { h: 'ऋ', r: '_' }, { h: 'ए', r: ',' },
    { h: 'ऐ', r: ',s' }, { h: 'ओ', r: 'vks' }, { h: 'औ', r: 'vkS' },
    // Consonants
    { h: 'क', r: 'd' }, { h: 'ख', r: '[k' }, { h: 'ग', r: 'x' }, { h: 'घ', r: '?k' },
    { h: 'ङ', r: '³' }, { h: 'च', r: 'p' }, { h: 'छ', r: 'N' }, { h: 'ज', r: 't' },
    { h: 'झ', r: '>' }, { h: 'ञ', r: '¥' }, { h: 'ट', r: 'V' }, { h: 'ठ', r: 'B' },
    { h: 'ड', r: 'M' }, { h: 'ढ', r: '<' }, { h: 'ण', r: '.k' }, { h: 'त', r: 'r' },
    { h: 'थ', r: 'Fk' }, { h: 'द', r: 'n' }, { h: 'ध', r: '/k' }, { h: 'न', r: 'u' },
    { h: 'प', r: 'i' }, { h: 'फ', r: 'Q' }, { h: 'ब', r: 'c' }, { h: 'भ', r: 'Hk' },
    { h: 'म', r: 'e' }, { h: 'य', r: ';' }, { h: 'र', r: 'j' }, { h: 'ल', r: 'y' },
    { h: 'व', r: 'o' }, { h: 'श', r: "'k" }, { h: 'ष', r: '"k' }, { h: 'स', r: 'l' },
    { h: 'ह', r: 'g' },
    // Matras
    { h: 'ा', r: 'k' }, { h: 'ि', r: 'f' }, { h: 'ी', r: 'h' }, { h: 'ु', r: 'q' },
    { h: 'ू', r: 'w' }, { h: 'ृ', r: '`' }, { h: 'े', r: 's' }, { h: 'ै', r: 'S' },
    { h: 'ो', r: 'ks' }, { h: 'ौ', r: 'kS' }, { h: 'ं', r: 'a' }, { h: 'ः', r: '%' },
    { h: 'ँ', r: '¡' }, { h: '्', r: '~' }
  ];

  // ── Init ──
  function init() {
    populateAllGrids();
    populateMappingGrid('quickAmsGrid', AMS_MAPPING);
    populateMappingGrid('quickKrutiGrid', KRUTI_MAPPING);
    setupTabs();
    setupModal();
    setupFloatingButton();
  }

  window.__hfsInitQuickCharMap = init;

  // ── Populate character grids ──
  function populateAllGrids() {
    Object.keys(CHARACTER_SETS).forEach(function (setId) {
      var containerId = 'quick' + capitalize(setId);
      var container = document.getElementById(containerId);
      if (!container || container.children.length > 0) return;

      CHARACTER_SETS[setId].split('').forEach(function (char) {
        if (!char.trim()) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = char;
        var cp = char.codePointAt(0);
        var hex = cp.toString(16).toUpperCase().padStart(4, '0');
        btn.title = 'U+' + hex;
        btn.addEventListener('click', function () {
          copyChar(char);
          showToast('Copied: ' + char);
          closeModal();
        });
        container.appendChild(btn);
      });
    });
  }

  // ── Populate mapping cards (AMS / Kruti) ──
  function populateMappingGrid(containerId, mapping) {
    var container = document.getElementById(containerId);
    if (!container || container.children.length > 0) return;

    mapping.forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'qcm-map-card';
      card.title = 'Click to copy: ' + item.h;
      card.innerHTML =
        '<span class="qcm-hindi">' + item.h + '</span>' +
        '<span class="qcm-arrow">→</span>' +
        '<span class="qcm-roman">' + escapeHtml(item.r) + '</span>';
      card.addEventListener('click', function () {
        copyChar(item.h);
        showToast('Copied: ' + item.h + ' → ' + item.r);
        closeModal();
      });
      container.appendChild(card);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ── Tab switching ──
  function setupTabs() {
    // On init: hide all panels, show only quickAmsGrid (the default active tab)
    document.querySelectorAll('#quickCharMap .quick-grid, #quickCharMap .qcm-mapping-grid').forEach(function (el) {
      el.style.display = 'none';
    });
    var defaultPanel = document.getElementById('quickAmsGrid');
    if (defaultPanel) defaultPanel.style.display = 'grid';

    var tabs = document.querySelectorAll('#quickCharMap .quick-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetKey = tab.getAttribute('data-quick');

        // Active state
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        // Show correct panel
        document.querySelectorAll('#quickCharMap .quick-grid, #quickCharMap .qcm-mapping-grid').forEach(function (el) {
          el.style.display = 'none';
        });

        if (targetKey === 'ams-roman') {
          var ag = document.getElementById('quickAmsGrid');
          if (ag) ag.style.display = 'grid';
        } else if (targetKey === 'kruti-dev') {
          var kg = document.getElementById('quickKrutiGrid');
          if (kg) kg.style.display = 'grid';
        } else {
          var containerId = 'quick' + capitalize(targetKey);
          var panel = document.getElementById(containerId);
          if (panel) panel.style.display = 'grid';
        }
      });
    });
  }

  // ── Modal open/close ──
  function setupModal() {
    var modal = document.getElementById('quickCharMap');
    if (!modal) return;
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }

  function setupFloatingButton() {
    var fab = document.getElementById('keyboardFab');
    var modal = document.getElementById('quickCharMap');
    if (!fab || !modal) return;
    fab.addEventListener('click', function () {
      modal.classList.add('show');
    });
  }

  function closeModal() {
    var modal = document.getElementById('quickCharMap');
    if (modal) modal.classList.remove('show');
  }

  // ── Clipboard ──
  function copyChar(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { }
    document.body.removeChild(ta);
  }

  // ── Toast ──
  function showToast(message) {
    var toast = document.getElementById('hfs-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hfs-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () { toast.style.opacity = '0'; }, 2000);
  }

  // ── Boot ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();




(function () {
  'use strict';

  // ============================================================
  // 1) THEME (dark mode)
  // ============================================================
  var THEME_KEY = 'hfs_theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      var icon = btn.querySelector('i');
      if (icon) icon.className = (theme === 'dark') ? 'fas fa-sun' : 'fas fa-moon';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { }
    applyTheme(saved === 'dark' ? 'dark' : 'light');
  }
  function toggleTheme() {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { }
  }

  // ============================================================
  // 2) HAMBURGER (mobile)
  // ============================================================
  function openNav() {
    var n = document.getElementById('sideNav');
    var o = document.getElementById('navOverlay');
    if (n) n.classList.add('open');
    if (o) o.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    var n = document.getElementById('sideNav');
    var o = document.getElementById('navOverlay');
    if (n) n.classList.remove('open');
    if (o) o.classList.remove('show');
    document.body.style.overflow = '';
  }
  window.openNav = openNav;
  window.closeNav = closeNav;

  // ============================================================
  // 3) Active link highlight
  // ============================================================
  function highlightActive() {
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var links = document.querySelectorAll('.main-nav a, .side-nav a');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').toLowerCase();
      if (href === here) links[i].classList.add('active');
    }
  }

  // ============================================================
  // 4) Share Site (Web Share API + fallback modal)
  // ============================================================
  function getShareData() {
    return {
      title: document.title,
      text: (document.querySelector('meta[name="description"]') || {}).content || document.title,
      url: window.location.href
    };
  }
  function openShareModal() {
    var modal = document.getElementById('shareModal');
    if (!modal) return;
    var url = window.location.href;
    var t = encodeURIComponent(document.title);
    var u = encodeURIComponent(url);
    var setHref = function (id, href) {
      var el = document.getElementById(id); if (el) el.href = href;
    };
    setHref('share-facebook', 'https://www.facebook.com/sharer/sharer.php?u=' + u);
    setHref('share-twitter', 'https://twitter.com/intent/tweet?url=' + u + '&text=' + t);
    setHref('share-whatsapp', 'https://api.whatsapp.com/send?text=' + t + '%20' + u);
    setHref('share-telegram', 'https://t.me/share/url?url=' + u + '&text=' + t);
    setHref('share-linkedin', 'https://www.linkedin.com/shareArticle?mini=true&url=' + u);
    setHref('share-reddit', 'https://www.reddit.com/submit?url=' + u + '&title=' + t);
    setHref('share-pinterest', 'https://pinterest.com/pin/create/button/?url=' + u + '&description=' + t);
    setHref('share-email', 'mailto:?subject=' + t + '&body=' + u);
    var inp = document.getElementById('share-url-input');
    if (inp) inp.value = url;
    modal.classList.add('show');
  }
  function closeShareModal() {
    var modal = document.getElementById('shareModal');
    if (modal) modal.classList.remove('show');
  }
  async function shareSite() {
    var data = getShareData();
    if (navigator.share && navigator.canShare && navigator.canShare(data)) {
      try { await navigator.share(data); return; }
      catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }
    openShareModal();
  }
  window.shareSite = shareSite;

  // ============================================================
  // 5) Boot
  // ============================================================
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    highlightActive();

    var t = document.getElementById('themeToggle');
    if (t) t.addEventListener('click', toggleTheme);

    var burger = document.getElementById('navToggle');
    if (burger) burger.addEventListener('click', openNav);

    var closer = document.getElementById('navClose');
    if (closer) closer.addEventListener('click', closeNav);

    var ov = document.getElementById('navOverlay');
    if (ov) ov.addEventListener('click', closeNav);

    // Share buttons
    var shareHdr = document.getElementById('shareSiteBtn');
    if (shareHdr) shareHdr.addEventListener('click', shareSite);
    var shareFab = document.getElementById('shareFab');
    if (shareFab) shareFab.addEventListener('click', shareSite);

    // Modal close
    var modal = document.getElementById('shareModal');
    var modalClose = document.querySelector('#shareModal .modal-close');
    if (modalClose) modalClose.addEventListener('click', closeShareModal);
    if (modal) modal.addEventListener('click', function (e) {
      if (e.target === modal) closeShareModal();
    });

    // Copy URL
    var copyBtn = document.getElementById('share-copy-btn');
    if (copyBtn) copyBtn.addEventListener('click', function () {
      var inp = document.getElementById('share-url-input');
      if (!inp) return;
      if (navigator.clipboard) navigator.clipboard.writeText(inp.value);
      else { inp.select(); document.execCommand('copy'); }
      copyBtn.textContent = 'Copied!';
      setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
    });

    // ESC closes nav + modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeNav(); closeShareModal(); }
    });
  });
})();



/* ============================================================
   COOKIE CONSENT MANAGER
   IIFE (Immediately Invoked Function Expression)
   ============================================================ */

(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    storageKey: 'hindifontstyle_cookie_consent',
    showDelay: 1000, // 1 second
    autoHideDelay: 0, // 0 = no auto-hide, set to 5000 for 5 seconds
    enableConsoleLogging: true
  };

  // DOM Elements
  const banner = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  // Logger utility
  const logger = {
    log: (msg) => CONFIG.enableConsoleLogging && console.log(`[🍪 Cookie] ${msg}`),
    error: (msg) => CONFIG.enableConsoleLogging && console.error(`[🍪 Cookie] ❌ ${msg}`)
  };

  /**
   * Check if user already made a consent choice
   */
  function checkConsent() {
    logger.log('Checking existing consent...');
    const consent = localStorage.getItem(CONFIG.storageKey);

    if (consent === null) {
      logger.log('No previous consent found, showing banner...');
      showBannerAfterDelay();
    } else if (consent === 'accepted') {
      logger.log('✅ Consent: ACCEPTED');
      enableAnalytics();
    } else if (consent === 'rejected') {
      logger.log('🚫 Consent: REJECTED');
      disableAnalytics();
    }
  }

  /**
   * Show banner after delay
   */
  function showBannerAfterDelay() {
    setTimeout(() => {
      if (banner) {
        banner.style.display = 'block';
        setTimeout(() => banner.classList.add('show'), 100);
        logger.log('Banner shown');

        // Auto-hide if configured
        if (CONFIG.autoHideDelay > 0) {
          setTimeout(() => {
            if (!localStorage.getItem(CONFIG.storageKey)) {
              hideBanner();
            }
          }, CONFIG.autoHideDelay);
        }
      }
    }, CONFIG.showDelay);
  }

  /**
   * Handle Accept button click
   */
  function acceptCookies() {
    logger.log('User accepted cookies');
    localStorage.setItem(CONFIG.storageKey, 'accepted');
    hideBanner();
    enableAnalytics();
    showToast('✅ Cookies स्वीकार किए गए!', 'success');
  }

  /**
   * Handle Reject button click
   */
  function rejectCookies() {
    logger.log('User rejected cookies');
    localStorage.setItem(CONFIG.storageKey, 'rejected');
    hideBanner();
    disableAnalytics();
    showToast('🚫 Cookies अस्वीकार किए गए', 'info');
  }

  /**
   * Hide banner with animation
   */
  function hideBanner() {
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => {
        banner.style.display = 'none';
        logger.log('Banner hidden');
      }, 400);
    }
  }

  /**
   * Enable Google Analytics and other tracking
   */
  function enableAnalytics() {
    // Google Analytics (if gtag exists)
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
      logger.log('Google Analytics enabled');
    }

    // Facebook Pixel (if exists)
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'grant');
      logger.log('Facebook Pixel enabled');
    }

    // Custom events can be added here
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: { accepted: true } }));
  }

  /**
   * Disable tracking
   */
  function disableAnalytics() {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
      logger.log('Google Analytics disabled');
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'revoke');
      logger.log('Facebook Pixel disabled');
    }

    // Custom events
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: { accepted: false } }));
  }

  /**
   * Show toast notification
   */
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? '#138808' : '#FF9933';

    toast.className = `cookie-toast toast-${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${bgColor};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      z-index: 100000;
      font-size: 0.95rem;
      font-weight: 500;
      animation: toastSlideIn 0.3s ease-out;
    `;

    document.body.appendChild(toast);
    logger.log(`Toast shown: ${message}`);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.3s ease-out';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  /**
   * Reset consent (for Privacy Policy page)
   */
  window.resetCookieConsent = function () {
    localStorage.removeItem(CONFIG.storageKey);
    logger.log('Consent reset - please reload page');
    alert('✅ Cookie consent reset!\n\nपेज reload करें।');
    location.reload();
  };

  /**
   * Get current consent status
   */
  window.getCookieConsent = function () {
    return localStorage.getItem(CONFIG.storageKey);
  };

  /**
   * Set consent programmatically
   */
  window.setCookieConsent = function (value) {
    if (['accepted', 'rejected', null].includes(value)) {
      localStorage.setItem(CONFIG.storageKey, value);
      logger.log(`Consent set to: ${value}`);
      if (value === 'accepted') enableAnalytics();
      else if (value === 'rejected') disableAnalytics();
    }
  };

  // Event listeners
  if (acceptBtn) {
    acceptBtn.addEventListener('click', acceptCookies);
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', rejectCookies);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkConsent);
  } else {
    checkConsent();
  }

  window.__hfsInitCookieConsent = checkConsent;

})();

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// MASTER INITIALIZER FOR NEXT.JS ROUTING
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

window.__hfsInitAll = function () {
  console.log('[hfs] Re-initializing all modules...');
  if (typeof window.__hfsInitGenerator === 'function') window.__hfsInitGenerator();
  if (typeof window.__hfsInitCharMap === 'function') window.__hfsInitCharMap();
  if (typeof window.__hfsInitUserGuide === 'function') window.__hfsInitUserGuide();
  if (typeof window.__hfsInitQuickCharMap === 'function') window.__hfsInitQuickCharMap();
  if (typeof window.__hfsInitCookieConsent === 'function') window.__hfsInitCookieConsent();
};

