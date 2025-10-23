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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8851834944307289,
          "pitch": 0.6056981630241509,
          "rotation": 0.7853981633974483,
          "target": "6-stair"
        },
        {
          "yaw": -1.5072722383666637,
          "pitch": 0.8593003855332402,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": -1.4531286825493517,
          "pitch": 0.2991652073733029,
          "rotation": 1.5707963267948966,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway",
      "name": "Hallway",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.0798623621664856,
        "pitch": 0.006495430385163203,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.9024457219596798,
          "pitch": 0.48224522859095487,
          "rotation": 1.5707963267948966,
          "target": "2-great-room"
        },
        {
          "yaw": 2.5218738534889305,
          "pitch": 0.5105443083061321,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.502917463969517,
          "pitch": 0.14615355523854134,
          "rotation": 3.141592653589793,
          "target": "17-basement"
        },
        {
          "yaw": 0.06270624747152986,
          "pitch": 0.4964243865718352,
          "rotation": 4.71238898038469,
          "target": "0-foyer"
        },
        {
          "yaw": -0.41815450301450596,
          "pitch": 0.4710547440111501,
          "rotation": 5.497787143782138,
          "target": "6-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-great-room",
      "name": "Great Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.045647072744468886,
        "pitch": 0.0074210690956064695,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.705597251001886,
          "pitch": 0.4430441262168916,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": 1.6341849879567008,
          "pitch": 0.24463630708740247,
          "rotation": 4.71238898038469,
          "target": "0-foyer"
        },
        {
          "yaw": -2.6225242968469935,
          "pitch": 0.5326806362243843,
          "rotation": 0.7853981633974483,
          "target": "3-dining"
        },
        {
          "yaw": -3.087841355122883,
          "pitch": 0.3636526666158417,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.05907268237519503,
        "pitch": -0.0018552672738927356,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -3.06873695164656,
          "pitch": 0.8289447921266557,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.0412505255162596,
          "pitch": 0.38402781240605677,
          "rotation": 0.7853981633974483,
          "target": "5-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.057730121412122415,
        "pitch": -0.00185526727390517,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.797938928867782,
          "pitch": 0.5740382443280083,
          "rotation": 0.7853981633974483,
          "target": "5-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pantry",
      "name": "Pantry",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.03490658503988797,
        "pitch": 0.0018552672739016174,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.7911170507989933,
          "pitch": 0.6318987208628197,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        },
        {
          "yaw": -2.8872830201517914,
          "pitch": 0.3746879234727505,
          "rotation": 5.497787143782138,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stair",
      "name": "Stair",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.026192960762211,
          "pitch": 0.8069413172139299,
          "rotation": 3.141592653589793,
          "target": "0-foyer"
        },
        {
          "yaw": -2.268678741796288,
          "pitch": 0.9622449373981485,
          "rotation": 1.5707963267948966,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-landing",
      "name": "Landing",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.008055365778435686,
        "pitch": 0.012986870917311322,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.0836485904738744,
          "pitch": 0.2434902079308756,
          "rotation": 0,
          "target": "8-upstair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upstair",
      "name": "Upstair",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1221730476396079,
        "pitch": -8.881784197001252e-15,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.12010941574882494,
          "pitch": 0.7171534034233229,
          "rotation": 0,
          "target": "7-landing"
        },
        {
          "yaw": 2.025454137837766,
          "pitch": 0.541154308627128,
          "rotation": 1.5707963267948966,
          "target": "9-bonus-room"
        },
        {
          "yaw": 1.7024637488771956,
          "pitch": 0.3191746054542435,
          "rotation": 0,
          "target": "10-master-bedroom-scene-1"
        },
        {
          "yaw": -1.415398739617963,
          "pitch": 0.48725015309588926,
          "rotation": 0.7853981633974483,
          "target": "15-bedroom-1"
        },
        {
          "yaw": -1.872728914625311,
          "pitch": 0.452037414838113,
          "rotation": 5.497787143782138,
          "target": "16-bedroom-2"
        },
        {
          "yaw": -2.0516511860750875,
          "pitch": 0.7125970532606694,
          "rotation": 4.71238898038469,
          "target": "14-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bonus-room",
      "name": "Bonus Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.024166097335307057,
        "pitch": 0.012986870917313098,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.609673705988068,
          "pitch": 0.5571575901746897,
          "rotation": 1.5707963267948966,
          "target": "8-upstair"
        },
        {
          "yaw": 1.4902276536720578,
          "pitch": 0.3684830460181985,
          "rotation": 4.71238898038469,
          "target": "14-laundry"
        },
        {
          "yaw": -1.6149607352266742,
          "pitch": 0.6256508884248131,
          "rotation": 0,
          "target": "10-master-bedroom-scene-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-bedroom-scene-1",
      "name": "Master Bedroom Scene 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45473974882602164,
          "pitch": 0.4557699983183401,
          "rotation": 3.141592653589793,
          "target": "11-master-bedroom-scene-2"
        },
        {
          "yaw": 0.8496898494439673,
          "pitch": 0.4266822042118612,
          "rotation": 0.7853981633974483,
          "target": "13-ensuite"
        },
        {
          "yaw": -2.4226808603801704,
          "pitch": 0.77772908566374,
          "rotation": 5.497787143782138,
          "target": "12-walk-in-closet"
        },
        {
          "yaw": 2.88969431018553,
          "pitch": 0.4758354787857577,
          "rotation": 4.71238898038469,
          "target": "9-bonus-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom-scene-2",
      "name": "Master Bedroom Scene 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1127751208980996,
        "pitch": 0.0037105345477961293,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.37157910691028917,
          "pitch": 0.4535827154901497,
          "rotation": 3.141592653589793,
          "target": "10-master-bedroom-scene-1"
        },
        {
          "yaw": 0.6469690000246473,
          "pitch": 0.3380641910146718,
          "rotation": 5.497787143782138,
          "target": "12-walk-in-closet"
        },
        {
          "yaw": -1.2630205366839853,
          "pitch": 0.7345247882818615,
          "rotation": 0.7853981633974483,
          "target": "13-ensuite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-walk-in-closet",
      "name": "Walk in Closet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0013425609630726143,
        "pitch": 0.016697405465114556,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.914846448258656,
          "pitch": 0.8131047530209532,
          "rotation": 0.7853981633974483,
          "target": "10-master-bedroom-scene-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ensuite",
      "name": "Ensuite",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6991904495841936,
          "pitch": 0.7529591257433772,
          "rotation": 5.497787143782138,
          "target": "11-master-bedroom-scene-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-laundry",
      "name": "Laundry",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5255185695172955,
          "pitch": 0.7015419338424493,
          "rotation": 4.71238898038469,
          "target": "8-upstair"
        },
        {
          "yaw": -0.0360718216911895,
          "pitch": 0.37621238184780914,
          "rotation": 1.5707963267948966,
          "target": "9-bonus-room"
        },
        {
          "yaw": -2.6902930432364673,
          "pitch": 0.8605791343265423,
          "rotation": 0.7853981633974483,
          "target": "15-bedroom-1"
        },
        {
          "yaw": 2.4979486512909492,
          "pitch": 0.7965732187543075,
          "rotation": 5.497787143782138,
          "target": "16-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6615869139797077,
          "pitch": 0.5359681639405061,
          "rotation": 5.497787143782138,
          "target": "8-upstair"
        },
        {
          "yaw": 3.1020961826103592,
          "pitch": 0.5602745542959404,
          "rotation": 0.7853981633974483,
          "target": "14-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1249058719703697,
          "pitch": 0.6790112208339565,
          "rotation": 1.5707963267948966,
          "target": "14-laundry"
        },
        {
          "yaw": 2.961442538940103,
          "pitch": 0.47963476795163373,
          "rotation": 5.497787143782138,
          "target": "8-upstair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-basement",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5370243852290368,
        "pitch": 0.0018552672739087228,
        "fov": 1.38217411905719
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Hyden 22-10-25",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
