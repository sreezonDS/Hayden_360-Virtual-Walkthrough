var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14797458567584343,
          "pitch": 0.27076226856923924,
          "rotation": 7.0685834705770345,
          "target": "1-formal-living"
        },
        {
          "yaw": 1.0208079731260575,
          "pitch": 0.17273021492022345,
          "rotation": 0.7853981633974483,
          "target": "4-family-living"
        },
        {
          "yaw": 0.37204289200322904,
          "pitch": 0.4969932982303469,
          "rotation": 2.356194490192345,
          "target": "8-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-formal-living",
      "name": "Formal Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.118408923773238,
          "pitch": 0.26281043461313836,
          "rotation": 6.283185307179586,
          "target": "0-foyer"
        },
        {
          "yaw": -0.15575031846553422,
          "pitch": 0.460234236708537,
          "rotation": 0.7853981633974483,
          "target": "2-dining"
        },
        {
          "yaw": -0.7586063924824806,
          "pitch": 0.26243199704569165,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.2350748204109934,
          "pitch": 0.39934313928946175,
          "rotation": 5.497787143782138,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6183056013457593,
          "pitch": 0.4513625051161192,
          "rotation": 0,
          "target": "1-formal-living"
        },
        {
          "yaw": -2.9838537289735765,
          "pitch": 0.4862850205071787,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.672261869196973,
          "pitch": 0.17667378829838576,
          "rotation": 7.0685834705770345,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5409035609847201,
          "pitch": 0.5863666149825093,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -0.14559246488471445,
          "pitch": 0.3677100802033788,
          "rotation": 0,
          "target": "1-formal-living"
        },
        {
          "yaw": 0.8923536210625933,
          "pitch": 0.2816303439840784,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-family-living",
      "name": "Family Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2928376928189635,
          "pitch": 0.36457994768662694,
          "rotation": 2.356194490192345,
          "target": "0-foyer"
        },
        {
          "yaw": 1.1412652709224211,
          "pitch": 0.2394413947308074,
          "rotation": 0,
          "target": "6-bedroom-1"
        },
        {
          "yaw": 1.0095998574698335,
          "pitch": 0.24302098247599346,
          "rotation": 5.497787143782138,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -2.1068282037563506,
          "pitch": 0.4026368811946739,
          "rotation": 0,
          "target": "5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.880226433716688,
          "pitch": 0.1680895246704619,
          "rotation": 0,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0900860284823572,
          "pitch": 0.14729592060161423,
          "rotation": 10.995574287564278,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4920188763514464,
          "pitch": 0.05263054702274417,
          "rotation": 1.5707963267948966,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9656748718553967,
          "pitch": 0.29924366391039925,
          "rotation": 5.497787143782138,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
