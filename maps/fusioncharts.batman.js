(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=316)})({316:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(317);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},317:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Batman.1.02-22-2017 12:07:12
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Batman",revision:1,standaloneInit:true,baseWidth:472,baseHeight:700,baseScaleFactor:10,entities:{"TR.BM.BM":{outlines:[[M,1282,4119,Q,1274,4111,1269,4103,1262,4091,1257,4087,1248,4078,1234,4078,1197,4075,1187,4075,1161,4071,1143,4064,1139,4062,1102,4061,1066,4061,1064,4061,1059,4059,1052,4054,1044,4048,1043,4048,1038,4046,1023,4046,991,4045,986,4043,956,4034,947,4036,940,4037,920,4034,L,854,4021,Q,841,4014,810,4009,779,4006,769,3999,L,732,3986,Q,691,3977,672,3977,669,3985,666,3994,646,4057,636,4075,626,4094,625,4096,617,4114,603,4151,590,4188,578,4211,573,4221,568,4241,562,4260,555,4271,532,4306,521,4330,484,4407,417,4454,380,4479,310,4522,309,4523,307,4523,252,4562,239,4574,216,4591,205,4603,200,4607,190,4616,177,4621,174,4626,166,4644,105,4694,103,4695,72,4720,42,4747,42,4759,42,4768,51,4802,61,4834,66,4844,80,4875,98,4935,98,4938,99,4940,102,4972,112,5004,131,5072,131,5073,134,5085,154,5095,166,5100,186,5109,192,5110,217,5130,227,5134,250,5144,415,5236,483,5276,481,5279,480,5283,497,5292,589,5342,601,5348,642,5380,709,5412,715,5408,765,5410,772,5406,779,5401,797,5408,817,5415,827,5415,858,5412,887,5420,905,5424,943,5438,964,5444,1e3,5451,1029,5457,1045,5464,1050,5466,1058,5470,1064,5472,1071,5476,1084,5482,1093,5483,1100,5483,1119,5487,1138,5492,1147,5495,1188,5510,1252,5529,1321,5551,1373,5563,1412,5572,1431,5573,1469,5575,1489,5573,1513,5572,1559,5580,1584,5584,1625,5591,L,1708,5591,Q,1710,5591,1722,5599,1733,5605,1738,5605,1742,5605,1767,5606,1775,5606,1780,5606,1786,5606,1786,5605,1865,5605,1898,5612,1901,5612,1919,5616,1936,5620,1947,5620,1958,5619,1987,5617,2016,5614,2027,5617,2036,5619,2049,5616,2130,5612,2133,5618,2137,5623,2252,5589,2253,5589,2273,5581,2287,5575,2299,5573,2306,5572,2331,5571,2329,5569,2275,5514,2240,5478,2212,5456,2197,5445,2182,5424,2165,5401,2156,5392,2137,5371,2126,5362,2109,5344,2100,5343,2091,5341,2085,5332,2079,5323,2061,5308,2043,5293,2037,5288,2025,5277,2008,5260,1992,5243,1984,5238,1976,5233,1947,5206,1918,5180,1913,5178,1907,5176,1887,5160,1868,5142,1805,5078,1802,5077,1781,5053,1773,5043,1754,5028,1746,5021,1740,5014,1738,5010,1732,5009,1727,5009,1726,5009,1708,5e3,1698,4988,1677,4964,1640,4944,1602,4923,1586,4922,1569,4921,1557,4918,1545,4915,1538,4912,1531,4909,1521,4909,1510,4909,1500,4905,1471,4894,1463,4889,1456,4885,1444,4880,1432,4876,1429,4875,1387,4856,1357,4843,1347,4838,1339,4838,1322,4830,1320,4830,1318,4830,1313,4817,1309,4804,1296,4790,1284,4776,1275,4762,1257,4737,1255,4710,1252,4685,1236,4657,1232,4651,1229,4644,1225,4633,1222,4629,1220,4624,1209,4582,1210,4571,1201,4552,1189,4529,1185,4520,L,1171,4485,Q,1171,4478,1169,4467,1168,4455,1168,4448,1168,4440,1172,4434,1179,4426,1183,4421,1194,4402,1203,4388,1212,4373,1218,4369,1223,4364,1262,4335,1301,4307,1312,4294,1323,4282,1323,4260,1323,4259,1324,4259,1328,4254,1331,4250,1338,4242,1337,4231,1335,4225,1339,4217,1343,4208,1343,4204,1343,4202,1334,4191,1324,4179,1323,4172,1321,4165,1312,4154,1302,4142,1298,4137,Q,1296,4135,1282,4119,Z]],label:"Batman",shortLabel:"BM",labelPosition:[81.9,479.8],labelAlignment:[CEN,MID]},"TR.BM.BE":{outlines:[[M,2678,4795,Q,2660,4790,2608,4768,2591,4760,2564,4753,2526,4743,2523,4741,2500,4734,2444,4712,2394,4692,2375,4687,2350,4679,2337,4670,2321,4660,2300,4634,2289,4620,2275,4611,2259,4600,2250,4593,2247,4590,2245,4589,2228,4566,2164,4500,2140,4486,2119,4472,2079,4443,2079,4423,2079,4412,2103,4362,2120,4328,2135,4302,2136,4300,2158,4252,2169,4229,2188,4202,2193,4196,2203,4176,2212,4156,2216,4151,2227,4135,2231,4131,2236,4128,2244,4125,2251,4123,2255,4119,2258,4114,2279,4105,2290,4100,2302,4094,2325,4078,2341,4066,2343,4064,2345,4063,2356,4061,2371,4053,2389,4043,2403,4030,2423,4016,2438,4005,2467,3984,2469,3972,2472,3949,2473,3938,2476,3917,2484,3895,2488,3864,2490,3860,2501,3834,2501,3817,2498,3787,2497,3774,2497,3752,2505,3736,2509,3724,2511,3718,2513,3710,2520,3706,2507,3702,2491,3688,2472,3669,2462,3658,2442,3638,2431,3627,2412,3607,2396,3596,2335,3548,2332,3547,2304,3528,2261,3520,2193,3505,2105,3500,2091,3500,2054,3500,2027,3500,2015,3497,1969,3484,1931,3484,1921,3484,1898,3486,1873,3487,1857,3487,1838,3486,1834,3486,1822,3487,1813,3490,1803,3493,1783,3497,1765,3500,1765,3499,1749,3498,1578,3450,1540,3439,1528,3436,1509,3431,1486,3421,1478,3417,1443,3399,1414,3384,1399,3380,1343,3365,1309,3366,1286,3367,1256,3360,1225,3353,1199,3353,L,1144,3353,Q,1138,3353,1123,3346,1108,3339,1100,3340,1053,3342,1041,3335,1027,3329,998,3329,978,3329,968,3330,950,3333,923,3335,918,3346,913,3356,910,3360,909,3364,825,3599,788,3691,L,702,3901,Q,688,3927,672,3977,691,3977,732,3986,L,769,3999,Q,779,4006,810,4009,841,4014,854,4021,L,920,4034,Q,940,4037,947,4036,956,4034,986,4043,991,4045,1023,4046,1038,4046,1043,4048,1044,4048,1052,4054,1059,4059,1064,4061,1066,4061,1102,4061,1139,4062,1143,4064,1161,4071,1187,4075,1197,4075,1234,4078,1248,4078,1257,4087,1262,4091,1269,4103,1274,4111,1282,4119,1296,4135,1298,4137,1302,4142,1312,4154,1321,4165,1323,4172,1324,4179,1334,4191,1343,4202,1343,4204,1343,4208,1339,4217,1335,4225,1337,4231,1338,4242,1331,4250,1328,4254,1324,4259,1323,4259,1323,4260,1323,4282,1312,4294,1301,4307,1262,4335,1223,4364,1218,4369,1212,4373,1203,4388,1194,4402,1183,4421,1179,4426,1172,4434,1168,4440,1168,4448,1168,4455,1169,4467,1171,4478,1171,4485,L,1185,4520,Q,1189,4529,1201,4552,1210,4571,1209,4582,1220,4624,1222,4629,1225,4633,1229,4644,1232,4651,1236,4657,1252,4685,1255,4710,1257,4737,1275,4762,1284,4776,1296,4790,1309,4804,1313,4817,1318,4830,1320,4830,1322,4830,1339,4838,1347,4838,1357,4843,1387,4856,1429,4875,1432,4876,1444,4880,1456,4885,1463,4889,1471,4894,1500,4905,1510,4909,1521,4909,1531,4909,1538,4912,1545,4915,1557,4918,1569,4921,1586,4922,1602,4923,1640,4944,1677,4964,1698,4988,1708,5e3,1726,5009,1727,5009,1732,5009,1738,5010,1740,5014,1746,5021,1754,5028,1773,5043,1781,5053,1802,5077,1805,5078,1868,5142,1887,5160,1907,5176,1913,5178,1918,5180,1947,5206,1976,5233,1984,5238,1992,5243,2008,5260,2025,5277,2037,5288,2043,5293,2061,5308,2079,5323,2085,5332,2091,5341,2100,5343,2109,5344,2126,5362,2137,5371,2156,5392,2165,5401,2182,5424,2197,5445,2212,5456,2240,5478,2275,5514,2329,5569,2331,5571,2337,5571,2343,5571,2375,5571,2387,5570,2400,5568,2418,5563,L,2507,5559,Q,2514,5559,2525,5558,2536,5558,2548,5555,2567,5551,2577,5547,2582,5545,2606,5546,L,2658,5546,Q,2669,5545,2696,5536,2709,5534,2745,5534,2777,5533,2792,5527,2802,5522,2813,5522,2829,5522,2833,5522,2838,5521,2855,5516,2868,5511,2876,5511,2887,5511,2919,5502,2947,5495,2968,5497,2985,5497,2992,5496,3002,5495,3013,5493,3025,5491,3033,5490,3041,5488,3059,5481,L,3177,5480,Q,3208,5481,3228,5483,3248,5485,3254,5488,3259,5492,3281,5491,3304,5490,3310,5483,3316,5476,3333,5457,3353,5435,3361,5428,3378,5412,3393,5409,3417,5404,3464,5377,3474,5370,3497,5366,3508,5362,3518,5359,3525,5357,3537,5357,3553,5357,3563,5359,3573,5360,3596,5360,3613,5360,3621,5366,3628,5369,3636,5368,3646,5368,3648,5368,3654,5369,3659,5375,3668,5385,3669,5386,3689,5402,3692,5404,3701,5410,3713,5421,3724,5430,3740,5428,3740,5426,3740,5424,3744,5412,3758,5380,3771,5348,3775,5343,3778,5338,3787,5325,3796,5311,3849,5192,3865,5156,3868,5150,3877,5133,3890,5112,3901,5098,3909,5079,3916,5060,3918,5052,3920,5043,3909,5e3,3896,4958,3895,4953,3893,4947,3893,4929,3891,4905,3891,4903,3890,4894,3882,4876,3874,4860,3874,4855,3848,4856,3834,4857,3808,4857,3792,4855,3777,4854,3756,4848,3738,4844,3729,4843,3673,4841,3595,4842,L,3595,4842,Q,3534,4842,3517,4841,3497,4841,3467,4837,3460,4835,3435,4831,3416,4827,3407,4827,3383,4827,3372,4828,3353,4828,3341,4825,3318,4819,3286,4816,3252,4814,3229,4808,3198,4800,3141,4802,3108,4805,3096,4805,L,3089,4805,Q,2987,4805,2974,4812,2962,4818,2840,4818,2777,4816,2745,4818,2735,4818,2712,4809,Q,2685,4796,2678,4795,Z]],label:"Besiri",shortLabel:"BE",labelPosition:[256.5,513.6],labelAlignment:[CEN,MID]},"TR.BM.GE":{outlines:[[M,2021,6088,Q,1998,6081,1992,6080,1946,6075,1848,6074,1756,6073,1710,6066,1621,6052,1569,6045,1522,6038,1493,6034,1438,6027,1412,6033,L,1393,6034,Q,1382,6034,1334,6025,1277,6017,1262,6009,1219,5990,1199,5979,1165,5960,1153,5940,1137,5913,1096,5818,1081,5783,1081,5743,1084,5701,1083,5674,1083,5671,1083,5669,1084,5617,1076,5559,1074,5546,1058,5470,1050,5466,1045,5464,1029,5457,1e3,5451,964,5444,943,5438,905,5424,887,5420,858,5412,827,5415,817,5415,797,5408,779,5401,772,5406,765,5410,715,5408,709,5412,642,5380,601,5348,589,5342,497,5292,480,5283,474,5292,467,5305,459,5321,452,5328,440,5348,387,5399,377,5407,375,5417,372,5426,364,5433,L,356,5442,Q,352,5447,348,5451,344,5454,342,5463,339,5472,337,5474,335,5476,318,5492,305,5504,288,5524,284,5528,271,5541,262,5547,250,5560,229,5580,223,5587,221,5589,220,5590,L,189,5620,Q,185,5625,179,5629,173,5633,171,5633,169,5633,160,5639,152,5644,151,5645,147,5648,138,5652,128,5656,118,5662,108,5667,98,5669,87,5671,77,5678,71,5681,64,5688,66,5701,70,5704,73,5707,80,5711,89,5717,96,5735,L,128,5781,Q,141,5802,163,5829,169,5837,183,5851,195,5864,198,5873,199,5879,204,5886,214,5901,215,5902,224,5918,234,5933,243,5946,279,5986,291,5998,326,6049,360,6098,364,6105,393,6130,397,6136,400,6142,411,6155,L,462,6208,Q,464,6213,470,6221,476,6228,477,6235,478,6242,503,6263,527,6283,539,6294,550,6305,559,6316,566,6327,568,6332,569,6341,575,6348,L,589,6362,Q,607,6376,624,6419,641,6461,662,6508,668,6519,676,6543,677,6544,685,6559,692,6570,691,6578,L,709,6623,Q,709,6623,724,6647,732,6660,736,6670,737,6674,756,6717,756,6719,767,6740,773,6753,775,6763,787,6793,819,6858,824,6867,830,6883,835,6898,841,6908,844,6914,855,6932,864,6947,864,6954,898,6951,983,6951,1050,6951,1080,6943,1087,6941,1197,6937,1292,6934,1301,6935,1310,6935,1314,6933,1317,6932,1342,6939,1366,6945,1376,6945,L,1475,6946,Q,1476,6946,1493,6946,1504,6945,1511,6946,1520,6947,1527,6951,1537,6958,1539,6959,1546,6962,1622,6962,1628,6962,1633,6962,1669,6961,1712,6957,1757,6953,1777,6954,1780,6954,1782,6954,1851,6955,1880,6945,1907,6935,1941,6935,1960,6934,1997,6935,2117,6930,2122,6929,2190,6927,2247,6930,2262,6930,2281,6926,2290,6925,2307,6921,2376,6914,2380,6913,L,2490,6896,Q,2493,6895,2543,6887,2577,6882,2599,6880,L,2706,6853,Q,2744,6847,2822,6834,2892,6822,2929,6813,2947,6809,2983,6806,3013,6802,3022,6784,3036,6758,3054,6730,3071,6703,3081,6687,3082,6684,3084,6682,3110,6620,3128,6602,3137,6592,3148,6574,3159,6556,3164,6545,3169,6533,3173,6528,3175,6522,3180,6516,3185,6510,3188,6502,3190,6493,3208,6474,3227,6454,3233,6448,3240,6440,3254,6422,3267,6403,3288,6385,3307,6369,3317,6358,3318,6356,3320,6355,3335,6334,3368,6302,3401,6271,3407,6261,3413,6251,3425,6240,3436,6229,3439,6226,L,3466,6199,Q,3467,6197,3473,6189,3392,6146,3380,6140,3369,6134,3366,6123,3365,6107,3361,6093,3352,6064,3339,6045,3306,5981,3301,5972,3298,5968,3245,5968,3209,5966,3197,5968,3190,5969,3159,5990,3143,6001,3114,6017,3091,6031,3075,6044,3034,6077,3001,6121,2969,6164,2941,6162,2913,6161,2905,6162,2898,6163,2884,6156,2875,6151,2865,6151,2859,6150,2838,6151,L,2783,6151,Q,2780,6150,2764,6142,2748,6134,2747,6134,2717,6131,2699,6134,2688,6135,2678,6130,2666,6123,2662,6123,2647,6122,2621,6122,2586,6123,2577,6123,L,2269,6119,Q,2262,6119,2238,6115,2212,6111,2196,6109,2180,6108,2155,6109,2137,6110,2119,6106,2075,6096,2056,6095,Q,2042,6095,2021,6088,Z]],label:"Gercüs",shortLabel:"GE",labelPosition:[176.8,649],labelAlignment:[CEN,MID]},"TR.BM.HA":{outlines:[[M,3033,5490,Q,3025,5491,3013,5493,3002,5495,2992,5496,2985,5497,2968,5497,2947,5495,2919,5502,2887,5511,2876,5511,2868,5511,2855,5516,2838,5521,2833,5522,2829,5522,2813,5522,2802,5522,2792,5527,2777,5533,2745,5534,2709,5534,2696,5536,2669,5545,2658,5546,L,2606,5546,Q,2582,5545,2577,5547,2567,5551,2548,5555,2536,5558,2525,5558,2514,5559,2507,5559,L,2418,5563,Q,2400,5568,2387,5570,2375,5571,2343,5571,2337,5571,2331,5571,2306,5572,2299,5573,2287,5575,2273,5581,2253,5589,2252,5589,2137,5623,2133,5618,2130,5612,2049,5616,2036,5619,2027,5617,2016,5614,1987,5617,1958,5619,1947,5620,1936,5620,1919,5616,1901,5612,1898,5612,1865,5605,1786,5605,1786,5606,1780,5606,1775,5606,1767,5606,1742,5605,1738,5605,1733,5605,1722,5599,1710,5591,1708,5591,L,1625,5591,Q,1584,5584,1559,5580,1513,5572,1489,5573,1469,5575,1431,5573,1412,5572,1373,5563,1321,5551,1252,5529,1188,5510,1147,5495,1138,5492,1119,5487,1100,5483,1093,5483,1084,5482,1071,5476,1064,5472,1058,5470,1074,5546,1076,5559,1084,5617,1083,5669,1083,5671,1083,5674,1084,5701,1081,5743,1081,5783,1096,5818,1137,5913,1153,5940,1165,5960,1199,5979,1219,5990,1262,6009,1277,6017,1334,6025,1382,6034,1393,6034,L,1412,6033,Q,1438,6027,1493,6034,1522,6038,1569,6045,1621,6052,1710,6066,1756,6073,1848,6074,1946,6075,1992,6080,1998,6081,2021,6088,2042,6095,2056,6095,2075,6096,2119,6106,2137,6110,2155,6109,2180,6108,2196,6109,2212,6111,2238,6115,2262,6119,2269,6119,L,2577,6123,Q,2586,6123,2621,6122,2647,6122,2662,6123,2666,6123,2678,6130,2688,6135,2699,6134,2717,6131,2747,6134,2748,6134,2764,6142,2780,6150,2783,6151,L,2838,6151,Q,2859,6150,2865,6151,2875,6151,2884,6156,2898,6163,2905,6162,2913,6161,2941,6162,2969,6164,3001,6121,3034,6077,3075,6044,3091,6031,3114,6017,3143,6001,3159,5990,3190,5969,3197,5968,3209,5966,3245,5968,3298,5968,3301,5972,3306,5981,3339,6045,3352,6064,3361,6093,3365,6107,3366,6123,3369,6134,3380,6140,3392,6146,3473,6189,3479,6182,3488,6171,3510,6147,3527,6133,3545,6118,3601,6096,3657,6073,3672,6068,3686,6062,3742,6043,3790,6027,3981,5951,3983,5950,3985,5949,3999,5945,4044,5924,4097,5901,4111,5896,4187,5866,4208,5861,4230,5857,4235,5854,4240,5852,4260,5839,4279,5827,4301,5824,4324,5821,4352,5808,4380,5795,4413,5784,4432,5778,4466,5768,4483,5762,4521,5743,4553,5727,4568,5723,4575,5721,4598,5712,4616,5703,4622,5703,4625,5702,4652,5697,4678,5690,4678,5685,4646,5621,4636,5591,4622,5552,4615,5535,4605,5508,4600,5484,L,4562,5486,Q,4540,5487,4533,5480,4522,5467,4503,5466,4489,5465,4487,5468,L,4487,5468,Q,4489,5469,4490,5469,4488,5469,4486,5469,4458,5470,4422,5486,4377,5508,4354,5518,4258,5562,4219,5577,4173,5592,4151,5600,4110,5614,4077,5629,4070,5632,4015,5663,3967,5690,3960,5690,3951,5690,3921,5653,3893,5618,3873,5592,3872,5590,3871,5588,3863,5577,3854,5568,3842,5557,3836,5552,3826,5542,3803,5511,3796,5502,3781,5488,3770,5477,3765,5468,3761,5462,3749,5449,3740,5438,3740,5428,3724,5430,3713,5421,3701,5410,3692,5404,3689,5402,3669,5386,3668,5385,3659,5375,3654,5369,3648,5368,3646,5368,3636,5368,3628,5369,3621,5366,3613,5360,3596,5360,3573,5360,3563,5359,3553,5357,3537,5357,3525,5357,3518,5359,3508,5362,3497,5366,3474,5370,3464,5377,3417,5404,3393,5409,3378,5412,3361,5428,3353,5435,3333,5457,3316,5476,3310,5483,3304,5490,3281,5491,3259,5492,3254,5488,3248,5485,3228,5483,3208,5481,3177,5480,L,3059,5481,Q,3041,5488,3033,5490,Z]],label:"Hasankeyf",shortLabel:"HA",labelPosition:[274.5,582.2],labelAlignment:[CEN,MID]},"TR.BM.KO":{outlines:[[M,3475,1094,Q,3473,1089,3473,1079,3473,1077,3473,1075,3472,1071,3472,1069,L,3472,1068,Q,3465,1029,3455,968,3453,956,3451,941,3436,945,3411,956,3386,968,3372,971,3366,973,3354,980,3341,986,3338,988,3333,990,3325,993,L,3294,1004,Q,3259,1023,3244,1033,3229,1044,3216,1062,3203,1078,3189,1088,3174,1099,3172,1101,3157,1114,3142,1125,3134,1128,3094,1166,3049,1209,3035,1236,3031,1241,3024,1248,3011,1259,3011,1266,3008,1269,2999,1283,2988,1296,2981,1306,2973,1315,2965,1327,2953,1344,2947,1351,2945,1352,2943,1354,2933,1361,2916,1380,2914,1383,2903,1397,2893,1410,2887,1415,2852,1439,2851,1440,2825,1461,2813,1480,2806,1489,2798,1498,2788,1508,2781,1514,2765,1530,2765,1531,2755,1539,2736,1551,2718,1561,2711,1565,2699,1573,2693,1581,2679,1597,2674,1602,2669,1608,2668,1615,2667,1617,2667,1620,2664,1626,2655,1634,2643,1647,2640,1654,2637,1659,2625,1669,2612,1679,2607,1686,L,2579,1723,Q,2569,1734,2566,1743,L,2554,1762,Q,2541,1773,2515,1791,2483,1811,2468,1822,2431,1848,2401,1883,2378,1900,2352,1911,2316,1922,2291,1932,2270,1941,2259,1946,2239,1954,2226,1956,2216,1957,2192,1966,2167,1974,2158,1975,2130,1975,2120,1979,2083,1998,2077,1999,2055,2001,2032,2008,2009,2016,2e3,2018,1949,2025,1927,2030,1914,2033,1889,2042,1870,2049,1863,2052,1860,2053,1859,2054,1851,2054,1834,2056,1811,2058,1808,2060,1766,2065,1751,2069,L,1378,2069,Q,1366,2074,1336,2080,L,1190,2080,Q,1153,2100,1101,2098,1071,2096,1055,2099,1041,2101,1032,2104,1026,2108,1016,2108,1007,2108,1e3,2106,L,980,2106,Q,981,2108,981,2109,991,2165,995,2205,998,2232,1009,2274,1015,2296,1027,2335,1028,2339,1029,2342,1033,2358,1041,2384,1050,2415,1052,2434,1052,2443,1058,2457,1066,2474,1068,2481,1071,2496,1068,2535,1068,2603,1059,2622,L,1059,2710,Q,1059,2722,1057,2755,1055,2784,1055,2801,1056,2814,1050,2847,1046,2868,1044,2880,1042,2890,1043,2894,1038,2919,1036,2945,1032,2976,1030,2999,1025,3059,1002,3117,991,3142,960,3237,943,3291,923,3335,950,3333,968,3330,978,3329,998,3329,1027,3329,1041,3335,1053,3342,1100,3340,1108,3339,1123,3346,1138,3353,1144,3353,L,1199,3353,Q,1225,3353,1256,3360,1286,3367,1309,3366,1343,3365,1399,3380,1414,3384,1443,3399,1478,3417,1486,3421,1509,3431,1528,3436,1540,3439,1578,3450,1749,3498,1765,3499,1765,3500,1783,3497,1803,3493,1813,3490,1822,3487,1834,3486,1838,3486,1857,3487,1873,3487,1898,3486,1921,3484,1931,3484,1969,3484,2015,3497,2027,3500,2054,3500,2091,3500,2105,3500,2193,3505,2261,3520,2304,3528,2332,3547,2335,3548,2396,3596,2412,3607,2431,3627,2442,3638,2462,3658,2472,3669,2491,3688,2507,3702,2520,3706,2520,3706,2521,3706,2527,3702,2544,3700,2561,3697,2577,3699,2593,3700,2616,3697,2635,3694,2658,3685,2668,3680,2715,3681,2745,3681,2755,3681,2758,3681,2759,3681,L,2760,3681,Q,2787,3681,2795,3679,2809,3678,2828,3670,2833,3668,2843,3668,2852,3669,2858,3666,L,2893,3647,Q,2921,3636,2935,3631,2949,3627,2985,3607,3020,3587,3040,3581,3055,3561,3104,3547,3109,3545,3120,3539,3133,3532,3136,3528,3137,3527,3141,3513,3144,3502,3151,3495,3189,3454,3199,3420,3201,3410,3214,3388,3229,3362,3238,3346,3261,3323,3270,3313,L,3295,3268,Q,3299,3262,3319,3234,3338,3208,3344,3195,3370,3144,3381,3119,3398,3081,3398,3058,3398,3054,3398,3050,3397,3037,3397,3028,3397,3011,3400,2995,3401,2992,3403,2965,3403,2944,3409,2935,3414,2924,3433,2869,3435,2860,3435,2847,3435,2834,3435,2829,3435,2816,3442,2799,3444,2697,3474,2657,3483,2643,3493,2619,3504,2590,3505,2589,L,3536,2526,3536,2524,Q,3541,2513,3570,2460,3594,2415,3594,2404,3594,2400,3581,2386,3567,2372,3568,2339,3568,2332,3564,2304,3560,2276,3560,2264,3560,2209,3554,2176,3547,2143,3547,2110,3547,2058,3563,2039,L,3563,1997,Q,3571,1974,3574,1961,3576,1948,3575,1925,3575,1856,3575,1853,3575,1821,3572,1778,3569,1728,3564,1714,3554,1685,3552,1647,3550,1583,3549,1576,3553,1556,3545,1517,3534,1467,3534,1459,3528,1396,3527,1393,3523,1352,3515,1324,3507,1298,3502,1255,L,3495,1195,Q,3487,1158,3483,1127,Q,3478,1102,3475,1094,Z]],label:"Kozluk",shortLabel:"KO",labelPosition:[225.8,266.6],labelAlignment:[CEN,MID]},"TR.BM.SA":{outlines:[[M,3080,77,L,3040,72,Q,3004,65,2994,65,2979,66,2950,60,2917,54,2913,54,2830,50,2799,43,2779,38,2705,38,2699,38,2693,38,2695,38,2698,37,2684,37,2646,37,2581,38,2545,44,2520,48,2486,60,2440,75,2431,77,2414,81,2383,94,2346,109,2330,114,2316,118,2270,136,2243,147,2228,150,2225,150,2222,150,2206,153,2180,164,2149,177,2133,175,L,2133,178,Q,2135,186,2151,203,2169,221,2174,232,2183,249,2188,264,2189,266,2197,293,2201,309,2215,352,2220,366,2245,419,2245,421,2228,446,2210,472,2209,479,2206,491,2195,512,2181,538,2177,549,2174,555,2163,556,2150,558,2147,562,2142,566,2130,569,2120,570,2112,569,2088,566,2071,576,2052,586,2038,586,2029,586,1978,563,1931,541,1924,535,1903,519,1868,516,1822,512,1816,510,L,1812,510,Q,1785,511,1761,512,1736,514,1695,540,1654,567,1559,625,1483,670,1437,704,1390,737,1314,781,1312,783,1309,785,1274,799,1251,810,1206,833,1194,861,1186,877,1179,928,1172,983,1165,1003,1151,1040,1113,1184,1105,1211,1094,1262,1091,1276,1091,1304,1090,1324,1082,1332,1080,1353,1072,1380,1056,1435,1055,1438,1052,1454,1040,1500,1030,1542,1023,1563,1015,1584,1011,1623,1004,1680,1002,1691,996,1723,994,1753,991,1806,988,1846,L,988,1847,Q,988,1851,989,1856,989,1880,983,1930,975,2001,975,2034,975,2080,980,2106,L,1e3,2106,Q,1007,2108,1016,2108,1026,2108,1032,2104,1041,2101,1055,2099,1071,2096,1101,2098,1153,2100,1190,2080,L,1336,2080,Q,1366,2074,1378,2069,L,1751,2069,Q,1766,2065,1808,2060,1811,2058,1834,2056,1851,2054,1859,2054,1860,2053,1863,2052,1870,2049,1889,2042,1914,2033,1927,2030,1949,2025,2e3,2018,2009,2016,2032,2008,2055,2001,2077,1999,2083,1998,2120,1979,2130,1975,2158,1975,2167,1974,2192,1966,2216,1957,2226,1956,2239,1954,2259,1946,2270,1941,2291,1932,2316,1922,2352,1911,2378,1900,2401,1883,2431,1848,2468,1822,2483,1811,2515,1791,2541,1773,2554,1762,L,2566,1743,Q,2569,1734,2579,1723,L,2607,1686,Q,2612,1679,2625,1669,2637,1659,2640,1654,2643,1647,2655,1634,2664,1626,2667,1620,2667,1617,2668,1615,2669,1608,2674,1602,2679,1597,2693,1581,2699,1573,2711,1565,2718,1561,2736,1551,2755,1539,2765,1531,2765,1530,2781,1514,2788,1508,2798,1498,2806,1489,2813,1480,2825,1461,2851,1440,2852,1439,2887,1415,2893,1410,2903,1397,2914,1383,2916,1380,2933,1361,2943,1354,2945,1352,2947,1351,2953,1344,2965,1327,2973,1315,2981,1306,2988,1296,2999,1283,3008,1269,3011,1266,3011,1259,3024,1248,3031,1241,3035,1236,3049,1209,3094,1166,3134,1128,3142,1125,3157,1114,3172,1101,3174,1099,3189,1088,3203,1078,3216,1062,3229,1044,3244,1033,3259,1023,3294,1004,L,3325,993,Q,3333,990,3338,988,3341,986,3354,980,3366,973,3372,971,3386,968,3411,956,3436,945,3451,941,3443,897,3432,824,3416,724,3401,654,3386,584,3386,570,3384,557,3370,510,3353,455,3355,432,3357,414,3350,394,3347,381,3335,356,3331,347,3323,315,3316,285,3313,280,3268,217,3209,169,3196,158,3178,141,3158,122,3150,115,3139,105,3116,95,Q,3091,86,3080,77,Z]],label:"Sason",shortLabel:"SA",labelPosition:[221.3,121.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"batman",type:"maps"}}})});