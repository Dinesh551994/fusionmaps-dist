(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=594)})({594:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(595);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},595:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Marlborough.18.08-09-2012 12:29:04
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Marlborough",revision:18,standaloneInit:true,baseWidth:434,baseHeight:600,baseScaleFactor:10,entities:{1:{outlines:[[M,2519,1004,L,2519,1031,2499,1031,2499,1057,2469,1057,2469,1089,2386,1089,2386,1118,2490,1118,2490,1145,Q,2507,1144,2517,1147,L,2548,1147,Q,2541,1108,2580,1116,L,2580,1089,2608,1092,2605,1092,2605,1165,2577,1165,2577,1190,2496,1190,2496,1211,2436,1211,2436,1268,2461,1268,2461,1286,2449,1286,2452,1303,2412,1303,2412,1279,2398,1279,2398,1248,2368,1248,2368,1266,2331,1266,2331,1239,2351,1236,2351,1188,2305,1188,2305,1167,2280,1167,Q,2279,1196,2270,1279,2242,1268,2243,1301,2243,1319,2245,1357,L,2227,1357,2228,1468,Q,2224,1504,2224,1571,L,2188,1571,2188,1594,Q,2150,1592,2131,1592,2098,1590,2111,1627,L,2064,1627,2064,1676,2002,1676,Q,1976,1702,1962,1718,1933,1748,1950,1784,L,1923,1784,1923,1804,1894,1804,Q,1886,1837,1886,1846,L,1849,1868,Q,1847,1897,1832,1896,1816,1894,1815,1953,1814,2010,1815,2032,1684,2109,1675,2116,1657,2128,1655,2149,1650,2177,1647,2184,1630,2197,1621,2204,1605,2216,1598,2245,1533,2272,1497,2277,L,1497,2305,1465,2305,1465,2331,1493,2331,1493,2400,Q,1474,2408,1465,2428,1454,2449,1440,2459,1420,2472,1418,2494,1416,2506,1392,2507,L,1392,2541,1412,2541,1412,2564,1438,2564,1438,2592,1501,2592,Q,1501,2647,1513,2650,L,1513,2677,1465,2677,1465,2705,Q,1329,2705,1260,2701,L,1260,2723,1170,2723,Q,1182,2797,1150,2912,L,1101,2912,1101,2932,1054,2932,1054,2998,1022,2998,1022,3030,985,3030,985,3049,911,3049,911,3089,875,3091,875,3138,903,3138,903,3190,Q,884,3193,859,3219,849,3256,838,3268,L,798,3307,Q,798,3349,778,3365,757,3392,741,3402,739,3403,708,3408,685,3412,682,3425,675,3457,642,3462,597,3464,573,3465,L,573,3539,608,3539,608,3590,581,3590,581,3612,564,3612,564,3639,531,3639,Q,531,3663,527,3671,L,503,3671,503,3703,476,3703,476,3724,440,3724,440,3786,414,3786,414,3857,Q,378,3843,390,3883,L,358,3883,358,3946,382,3946,382,3974,414,3974,414,4051,394,4051,394,4071,362,4071,362,4129,313,4129,313,4156,285,4156,285,4237,261,4237,261,4258,230,4258,230,4293,201,4293,201,4374,180,4374,180,4404,148,4404,148,4431,87,4431,Q,87,4499,67,4568,L,67,4722,72,4771,36,4771,36,4835,64,4835,64,4859,95,4859,95,4885,196,4885,196,4859,Q,212,4859,216,4855,L,253,4855,253,4932,Q,255,4933,313,4929,337,4928,337,4964,337,4998,311,4992,L,311,5151,313,5155,Q,314,5155,364,5155,394,5154,390,5178,411,5178,418,5182,L,418,5206,386,5206,386,5256,362,5256,362,5283,Q,366,5299,366,5340,L,386,5340,386,5376,476,5376,476,5340,549,5340,549,5473,614,5473,614,5604,Q,648,5594,681,5636,696,5645,723,5641,768,5636,770,5636,L,770,5663,741,5663,741,5695,715,5695,715,5768,686,5768,686,5829,759,5829,759,5800,795,5800,795,5829,820,5829,820,5865,851,5865,851,5938,871,5938,871,5962,903,5962,903,5938,925,5938,925,5857,1001,5857,1001,5833,1024,5833,1024,5800,1040,5800,1040,5838,1139,5838,1139,5716,1167,5716,1167,5699,1222,5699,1222,5679,1251,5679,1251,5610,1283,5610,1283,5586,1304,5586,1304,5505,1331,5505,1331,5481,1199,5481,1199,5453,1233,5453,1233,5423,1279,5423,Q,1271,5363,1304,5377,L,1304,5344,1361,5344,1361,5314,1393,5314,1393,5282,Q,1430,5270,1463,5225,1498,5212,1493,5193,L,1493,5127,1519,5127,1519,5150,1571,5150,1571,5127,1607,5127,Q,1607,5107,1612,5097,L,1687,5097,Q,1677,5068,1719,5070,L,1719,5041,1795,5041,1795,5018,1849,5018,1849,4995,1904,4995,1904,4926,1960,4926,1960,4833,1924,4833,1924,4735,1897,4735,1897,4692,1983,4692,Q,1986,4659,1986,4594,L,2013,4594,2013,4560,2056,4560,2056,4541,2119,4544,2119,4507,2149,4507,Q,2147,4494,2160,4476,2170,4460,2165,4439,L,2218,4439,2218,4412,2250,4412,Q,2250,4392,2247,4380,L,2273,4380,2273,4353,2359,4353,2359,4320,2405,4320,2405,4261,2441,4261,Q,2444,4254,2444,4237,2496,4247,2487,4202,2535,4201,2546,4195,2547,4193,2553,4138,L,2553,4102,Q,2553,4093,2576,4093,L,2576,4040,2605,4040,Q,2597,4023,2612,4015,2627,4005,2622,3994,L,2639,3994,Q,2639,4020,2642,4033,2667,4020,2680,4044,2690,4064,2685,4089,L,2715,4089,2715,4155,Q,2728,4159,2751,4161,L,2751,4132,2794,4132,Q,2797,4125,2797,4102,L,2826,4102,Q,2824,4062,2890,4063,L,3004,4066,3004,4040,3113,4040,Q,3113,4027,3116,4020,L,3166,4020,Q,3168,4036,3172,4076,L,3221,4076,Q,3221,4088,3225,4116,L,3300,4116,3300,4142,3339,4142,3339,4102,3405,4102,Q,3405,4122,3409,4159,L,3471,4159,3471,4129,3498,4129,3498,4099,3517,4099,Q,3505,4040,3560,4027,3582,4020,3590,3997,3622,3969,3629,3961,3675,3924,3675,3888,3675,3837,3682,3835,L,3734,3835,3734,3780,3766,3780,3766,3724,3787,3724,3787,3694,3814,3694,3814,3625,3846,3625,3846,3596,3873,3596,Q,3873,3593,3866,3566,L,3898,3566,3898,3540,3921,3540,3921,3497,3937,3497,3937,3477,3971,3477,Q,3971,3468,3974,3461,L,3974,3418,3869,3418,3869,3399,3760,3399,3760,3386,3727,3386,3727,3349,3695,3349,3695,3263,3675,3260,3675,3033,3704,3033,3704,2984,3678,2977,3678,2951,Q,3657,2943,3651,2934,L,3655,2847,3626,2847,Q,3637,2806,3598,2816,L,3598,2774,3574,2774,3574,2835,3497,2835,3497,2815,3469,2815,3469,2770,3497,2770,3497,2746,3529,2746,3529,2719,3478,2719,3478,2679,3432,2679,3432,2621,3396,2621,3396,2572,3356,2572,3356,2404,Q,3380,2413,3379,2382,3374,2343,3377,2330,L,3401,2330,Q,3393,2300,3418,2292,3448,2281,3453,2273,3457,2266,3457,2180,3510,2203,3506,2147,3502,2088,3551,2107,3552,2086,3554,2074,3557,2051,3583,2060,L,3583,1974,3606,1974,Q,3605,1950,3607,1947,3609,1946,3630,1946,L,3675,1951,3737,1951,3737,1926,3760,1926,3760,1992,3699,1992,Q,3699,2004,3695,2021,L,3661,2019,3663,2056,Q,3657,2079,3655,2087,L,3602,2087,3602,2152,3638,2152,3638,2116,3688,2116,3688,2094,3723,2094,3757,2087,3826,2087,3826,2028,3849,2028,3854,1994,3854,1955,3901,1955,3901,1909,3954,1909,3954,1846,3982,1846,3982,1728,4036,1728,4036,1668,4133,1668,4133,1623,4180,1623,4180,1647,4220,1647,4220,1619,4245,1619,4245,1563,4224,1563,4224,1426,4249,1426,Q,4248,1400,4245,1388,L,4301,1388,4301,1325,4224,1325,4224,1352,4197,1352,4197,1380,4165,1380,4165,1404,Q,4137,1398,4123,1413,L,4123,1449,4205,1449,4205,1514,4156,1514,Q,4155,1523,4164,1539,L,4164,1567,4115,1567,4115,1522,4038,1522,4036,1481,4006,1481,Q,4002,1489,4002,1509,L,3963,1509,3963,1526,4024,1526,Q,4023,1531,4028,1535,L,4028,1586,3946,1586,3946,1651,3853,1651,3853,1683,3772,1683,3772,1709,3723,1709,Q,3723,1713,3721,1722,L,3723,1760,3776,1760,3776,1804,3804,1804,Q,3804,1810,3808,1829,3808,1842,3804,1850,L,3735,1850,3735,1818,3699,1818,3699,1846,3663,1846,3663,1814,3638,1814,3638,1788,Q,3642,1777,3642,1752,L,3583,1752,3583,1784,3485,1788,Q,3485,1798,3489,1804,L,3489,1834,3380,1834,3380,1853,3255,1853,3255,1873,Q,3253,1873,3163,1873,3116,1872,3094,1885,L,3069,1885,3069,1841,Q,3089,1841,3121,1849,L,3137,1849,3137,1817,3242,1817,3242,1768,Q,3250,1768,3271,1772,L,3271,1744,3392,1744,3392,1720,3412,1720,3412,1697,Q,3428,1697,3453,1691,L,3481,1691,3481,1733,3521,1733,3521,1679,3598,1679,3598,1632,3630,1632,3630,1672,3679,1672,3679,1551,3708,1551,3708,1588,3731,1588,3731,1620,3773,1620,3773,1578,3816,1578,3816,1534,3792,1534,3800,1497,3727,1497,3727,1465,3704,1465,3704,1418,3679,1418,3679,1352,3731,1352,3731,1287,3760,1287,3760,1388,3915,1388,3915,1332,3882,1332,3882,1276,3925,1276,Q,3921,1259,3921,1223,L,3970,1223,3970,1204,3990,1202,3990,1114,4026,1114,4026,1070,4022,1066,3974,1066,3974,1114,3901,1114,3901,1139,3869,1139,3870,1150,3870,1219,3820,1219,3820,1202,3772,1202,3772,1142,3735,1142,3735,1111,3804,1111,3804,1006,3757,1006,3757,948,3717,948,3717,875,3659,875,3659,903,3695,903,3695,956,3672,956,3672,1029,3622,1029,3622,988,3595,988,3595,952,3537,952,3537,1057,3578,1057,3578,1134,3559,1134,3559,1097,3527,1097,3527,1057,3505,1057,3505,1025,Q,3490,1027,3490,976,L,3446,976,3446,929,3477,929,3477,852,3513,852,3513,766,Q,3509,766,3509,750,L,3469,750,3469,775,3428,775,3428,823,3457,823,3457,863,3428,863,3428,1004,3352,1004,3352,976,Q,3331,981,3307,957,3315,957,3329,953,L,3329,895,3348,895,3348,840,3292,840,3292,876,3267,876,3267,928,3247,928,Q,3242,907,3242,903,L,3224,903,3224,1026,3158,1026,3158,1004,3125,1004,3125,1034,3154,1034,3154,1070,3179,1070,3179,1114,3206,1114,3206,1143,3271,1143,3271,1122,3296,1122,3296,1030,3369,1030,3369,1066,3405,1066,3405,1139,3364,1139,3364,1180,3337,1180,3337,1220,Q,3362,1218,3379,1255,3397,1296,3405,1301,L,3405,1333,3369,1333,3369,1301,3344,1301,3344,1279,3292,1279,3292,1312,3260,1312,Q,3256,1337,3256,1396,L,3216,1396,Q,3215,1421,3210,1461,L,3183,1461,3183,1406,3166,1406,3166,1320,Q,3182,1319,3187,1306,3193,1294,3216,1293,3210,1267,3210,1256,L,3260,1256,3260,1224,3154,1224,3154,1247,3117,1247,3117,1320,3066,1320,3066,1348,3030,1348,3030,1392,2980,1392,2980,1410,Q,2981,1411,2985,1446,L,2944,1446,2944,1473,2972,1473,2972,1505,Q,2989,1509,3030,1514,L,3030,1554,3e3,1554,3e3,1619,3047,1619,Q,3077,1628,3129,1620,L,3129,1588,3191,1588,3191,1559,3224,1559,3224,1586,3319,1586,3319,1546,Q,3315,1538,3315,1523,L,3388,1523,3389,1542,3416,1542,3416,1574,3498,1574,3498,1546,3571,1546,3571,1574,3531,1574,3531,1596,3389,1596,3389,1615,Q,3350,1613,3327,1612,3286,1610,3299,1643,L,3252,1643,3253,1671,3187,1671,3187,1639,3129,1639,Q,3122,1651,3093,1651,L,3045,1651,3045,1681,3030,1681,3030,1732,3004,1732,3004,1780,2972,1780,2972,1821,2917,1821,Q,2908,1816,2891,1817,L,2891,1845,2814,1845,2814,1881,Q,2840,1893,2830,1914,L,2876,1914,2876,1943,2814,1943,2814,1918,2795,1918,2795,1885,Q,2778,1885,2767,1881,L,2750,1881,2750,1903,2705,1903,2705,1877,2661,1877,2661,1849,2709,1849,2709,1821,2782,1821,2782,1790,2891,1790,2891,1659,2917,1659,2917,1627,2949,1627,2949,1534,Q,2935,1536,2935,1497,L,2913,1497,2913,1542,2880,1542,2880,1501,Q,2887,1501,2887,1491,2880,1486,2869,1487,2787,1505,2754,1505,L,2754,1559,2690,1559,2690,1519,2727,1519,2727,1473,2818,1473,2818,1446,2836,1449,2872,1449,2872,1404,2935,1404,Q,2931,1372,2931,1356,L,3e3,1356,3e3,1301,2931,1301,2931,1287,2957,1287,2957,1243,3062,1243,3062,1196,3162,1196,3162,1166,3097,1166,3097,1142,3019,1142,3019,1167,2979,1167,2979,1136,2961,1136,Q,2938,1137,2893,1136,2848,1136,2847,1139,L,2847,1171,Q,2842,1187,2838,1194,2833,1205,2814,1200,L,2814,1266,2756,1266,2756,1318,Q,2751,1315,2731,1316,L,2731,1336,Q,2733,1336,2733,1344,L,2690,1344,2690,1313,2655,1313,2655,1283,2693,1283,2693,1252,2739,1252,2739,1205,Q,2741,1158,2739,1140,L,2739,1093,2771,1093,2771,1044,2733,1044,2733,1006,2762,1006,2762,986,2817,986,2817,951,2857,951,2857,1003,2898,1003,2898,1018,Q,2892,1029,2892,1038,2898,1038,2898,1041,L,2941,1041,2941,1015,2976,1015,2976,1e3,2993,1e3,2993,1046,3016,1046,3016,1064,3057,1064,3057,1015,3036,1015,3036,947,3077,947,3077,924,3106,924,3106,906,3031,906,3031,878,3051,878,3051,843,3187,843,3187,812,3210,812,3210,716,3291,716,3291,800,3308,800,3308,754,3329,754,3329,712,3352,712,Q,3349,699,3349,669,3291,669,3265,672,3269,594,3260,578,L,3248,578,3248,600,3216,600,Q,3215,637,3202,649,L,3172,649,Q,3170,690,3144,684,L,3144,712,3057,712,3057,739,3081,739,3081,788,3054,788,3054,812,Q,3034,812,2999,817,L,2999,840,2973,840,2973,872,2948,872,2948,930,2900,930,2900,759,2927,759,2927,730,2863,730,2863,794,Q,2832,797,2814,797,L,2814,863,2759,863,2759,924,2736,924,2736,901,2706,901,2706,875,2684,875,2684,924,2655,924,2655,956,2623,956,Q,2635,983,2596,982,2556,979,2560,1004,Z],[M,2899,120,L,2899,152,2871,152,2871,217,Q,2836,206,2837,241,2840,278,2812,273,L,2812,314,Q,2818,318,2818,386,L,2838,386,2838,447,2880,447,2880,491,2840,491,2838,463,2812,463,2812,487,Q,2802,483,2771,483,L,2771,382,2754,382,2754,408,Q,2733,410,2735,450,2736,491,2717,495,L,2717,596,2775,596,2775,653,2758,653,2758,711,2735,711,2733,774,2766,774,2766,751,2794,751,2794,711,2830,711,2841,709,2841,683,2871,687,2871,653,2903,653,2903,633,2946,633,2946,578,2976,578,2976,528,Q,2992,527,2999,532,2982,495,3012,494,3030,494,3067,495,L,3067,439,3094,439,3094,406,3120,406,Q,3147,358,3140,308,L,3172,308,Q,3171,261,3171,237,3170,194,3193,190,3192,154,3199,133,L,3198,39,3141,39,3141,89,3086,89,Q,3090,107,3090,148,L,3036,148,3036,194,Q,3040,193,3040,198,L,3093,198,3093,176,3133,176,3133,200,3093,208,3093,226,3008,225,Q,3008,251,2999,258,2988,265,2988,289,L,2953,289,2953,262,Q,2957,257,2976,257,L,2976,200,2956,200,2956,176,2977,176,2977,107,3e3,107,3e3,75,Q,3028,75,3040,71,L,3040,31,3018,31,3018,56,Q,2976,56,2956,52,L,2956,120,Z]],label:"Marlborough District",shortLabel:"MB",labelPosition:[216.8,299.6],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"marlborough",type:"maps"}}})});