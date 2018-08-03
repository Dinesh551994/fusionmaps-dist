(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=596)})({596:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(597);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},597:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.VientianeProvince.1.08-09-2016 04:23:01
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"VientianeProvince",revision:1,standaloneInit:true,baseWidth:600,baseHeight:472,baseScaleFactor:10,entities:{"LA.VI.PH":{outlines:[[M,2920,2319,Q,2910,2351,2882,2387,2848,2430,2821,2469,2818,2473,2795,2510,2779,2535,2771,2546,2769,2547,2768,2548,2727,2618,2718,2635,2709,2652,2690,2677,2671,2702,2665,2711,2660,2717,2655,2722,2649,2728,2640,2735,2632,2741,2626,2746,2622,2751,2609,2766,2595,2781,2588,2789,2568,2808,2552,2821,2544,2827,2532,2843,2517,2860,2477,2893,2470,2899,2451,2918,2432,2936,2421,2944,2409,2952,2387,2978,2392,2985,2397,2993,2429,3042,2446,3079,2448,3086,2459,3127,2467,3161,2477,3174,L,2511,3199,Q,2537,3219,2537,3234,2559,3227,2587,3212,2604,3203,2626,3203,2650,3203,2655,3226,2659,3248,2680,3248,2689,3248,2700,3244,2711,3240,2720,3240,2745,3240,2767,3271,2789,3303,2803,3303,2815,3303,2864,3267,2913,3231,2933,3231,2951,3231,2967,3254,2976,3266,2989,3286,2997,3292,3053,3303,3096,3312,3110,3319,3107,3300,3100,3238,3094,3174,3094,3168,3094,3154,3096,3135,3098,3120,3098,3118,3096,3117,3087,3112,3074,3106,3062,3100,3031,3088,3023,3083,3015,3077,3001,3064,2987,3052,2967,3030,2946,3012,2942,2995,2938,2978,2937,2940,2937,2901,2937,2882,2937,2862,2948,2810,2955,2786,2958,2773,2964,2752,2969,2742,2971,2737,2982,2729,2991,2722,2995,2720,3e3,2718,3007,2711,3010,2707,3016,2701,3012,2700,3009,2698,2985,2688,2972,2683,2938,2662,2927,2631,2920,2611,2920,2565,2920,2534,2925,2513,2934,2462,2938,2439,2957,2352,2953,2241,2952,2239,2952,2236,Q,2928,2292,2920,2319,Z]],label:"Phonhong",shortLabel:"PH",labelPosition:[274.8,292.8],labelAlignment:[CEN,MID]},"LA.VI.TH":{outlines:[[M,3847,2689,Q,3806,2694,3745,2706,3716,2712,3700,2718,L,3699,2719,Q,3692,2721,3659,2737,3624,2753,3617,2756,3613,2758,3600,2766,3591,2772,3579,2774,3577,2776,3577,2778,3563,2798,3563,2799,3553,2811,3540,2819,3537,2821,3516,2840,3497,2856,3493,2856,3477,2856,3469,2841,3461,2823,3455,2816,3449,2809,3437,2799,3426,2790,3419,2782,3411,2782,3405,2782,3394,2784,3349,2778,3348,2778,3346,2778,3335,2778,3327,2778,3311,2779,3300,2777,3293,2775,3277,2769,3274,2768,3271,2767,3266,2785,3261,2809,3256,2834,3255,2848,3254,2860,3253,2864,3251,2876,3245,2891,3241,2899,3237,2905,3232,2911,3227,2922,3226,2923,3226,2924,L,3202,2969,Q,3198,2977,3185,2995,3172,3011,3168,3019,3152,3049,3145,3060,3142,3064,3129,3082,L,3098,3118,Q,3098,3120,3096,3135,3094,3154,3094,3168,3094,3174,3100,3238,3107,3300,3110,3319,3114,3322,3116,3324,3123,3333,3150,3407,3185,3480,3211,3480,3231,3480,3241,3459,3252,3437,3268,3437,3295,3437,3304,3458,3309,3472,3307,3504,3306,3539,3309,3551,3315,3572,3338,3572,3340,3572,3358,3553,3375,3534,3393,3534,3403,3534,3417,3539,3431,3543,3438,3543,3455,3543,3487,3529,3524,3512,3524,3494,3524,3481,3522,3467,3518,3453,3518,3447,3518,3422,3542,3394,3565,3366,3590,3366,3591,3366,3620,3387,3648,3408,3679,3408,3697,3408,3707,3390,3717,3369,3739,3366,3747,3364,3775,3362,3792,3360,3796,3357,3820,3340,3824,3313,3824,3284,3828,3271,3830,3265,3849,3263,3856,3263,3875,3263,3913,3263,3947,3274,3980,3286,3988,3286,4019,3286,4043,3264,4067,3244,4100,3243,4101,3243,4102,3243,4102,3240,4152,3248,4177,3252,4202,3257,4242,3257,4254,3205,4260,3181,4260,3113,4260,3050,4212,3001,4181,2972,4164,2955,4133,2924,4111,2893,4075,2843,4052,2781,4036,2737,4008,2661,L,4008,2661,Q,3983,2674,3948,2670,3938,2671,3900,2679,Q,3861,2687,3847,2689,Z]],label:"Thoulakhom",shortLabel:"TH",labelPosition:[367.7,303.2],labelAlignment:[CEN,MID]},"LA.VI.KA":{outlines:[[M,2734,140,Q,2719,140,2716,128,2711,109,2707,104,2702,98,2690,98,2675,98,2669,111,2668,112,2661,138,2649,179,2602,179,2561,179,2551,153,2544,136,2544,136,2539,128,2527,128,2509,128,2477,153,2445,179,2430,179,2404,179,2379,156,2364,142,2338,106,2312,69,2298,56,2275,34,2251,34,2240,34,2202,54,2164,75,2151,75,2129,75,2094,57,2060,38,2049,38,2033,38,1999,77,1963,120,1963,152,1963,193,1995,215,2003,220,2017,228,2027,235,2027,241,2027,261,2005,270,1979,276,1972,282,1925,317,1915,335,1904,353,1897,380,1888,414,1887,419,1872,456,1812,456,1797,456,1779,442,1761,427,1750,427,1739,427,1715,454,1692,481,1692,492,1692,498,1704,524,1717,550,1717,560,1717,575,1707,584,1693,593,1685,601,1680,606,1672,624,1663,646,1662,650,1653,667,1647,700,1643,718,1637,755,1640,782,1621,795,1595,810,1581,824,1574,831,1557,875,1543,913,1520,925,1500,936,1466,936,1430,934,1416,935,1389,936,1374,966,1363,1001,1358,1010,1345,1037,1329,1044,1313,1052,1280,1047,1265,1045,1231,1054,1199,1062,1189,1063,L,1189,1064,Q,1168,1180,1168,1189,1168,1224,1191,1274,1214,1324,1214,1362,1214,1377,1217,1403,1216,1421,1207,1435,1206,1436,1205,1441,1201,1454,1190,1493,1173,1551,1173,1566,1173,1599,1198,1627,1200,1629,1202,1631,1216,1609,1224,1594,1239,1567,1250,1541,1264,1507,1275,1502,1280,1500,1317,1500,L,1318,1500,Q,1322,1498,1357,1500,1377,1501,1397,1502,1417,1502,1427,1498,1456,1487,1480,1480,1496,1475,1502,1471,1504,1471,1523,1457,1550,1437,1568,1432,1574,1430,1610,1414,1637,1402,1648,1402,1665,1402,1680,1391,1688,1385,1705,1365,1710,1355,1721,1345,1727,1339,1737,1327,1746,1314,1764,1298,1781,1283,1801,1268,1821,1254,1843,1236,1864,1219,1897,1218,1929,1218,1953,1226,1978,1234,2009,1257,2022,1267,2030,1280,2036,1288,2046,1307,2054,1320,2054,1373,2054,1433,2043,1478,2032,1516,1999,1592,1998,1593,1998,1594,1992,1605,1983,1619,1972,1635,1969,1644,1965,1653,1957,1670,1948,1687,1944,1700,1939,1713,1928,1744,1920,1766,1905,1802,1890,1838,1881,1860,L,1878,1877,1883,1877,Q,1886,1875,1906,1863,1920,1855,1927,1849,1944,1833,1985,1813,2016,1798,2044,1780,2072,1762,2093,1750,2115,1739,2122,1732,2129,1724,2147,1714,2164,1705,2173,1701,2182,1696,2205,1682,2227,1667,2237,1658,2246,1648,2266,1630,2287,1613,2301,1598,2311,1587,2317,1582,2319,1581,2320,1580,2328,1575,2338,1564,2354,1547,2358,1545,2364,1540,2377,1529,2389,1517,2397,1512,2397,1511,2398,1510,2400,1509,2400,1509,2415,1496,2434,1476,2447,1462,2474,1432,2490,1415,2516,1393,2537,1375,2544,1366,2566,1339,2566,1276,2566,1257,2561,1237,2556,1216,2556,1203,2558,1185,2558,1176,2558,1174,2558,1173,2558,1173,2559,1172,2579,1124,2582,1117,2590,1093,2590,1075,2590,1061,2588,1053,2585,1045,2585,1036,2585,1027,2590,1018,2593,1013,2603,997,2611,985,2611,955,2610,924,2610,907,2610,890,2612,877,2612,861,2613,840,2614,820,2627,800,2639,780,2666,753,2670,748,2688,735,2706,721,2719,715,2732,708,2751,704,2769,699,2782,699,2795,699,2801,701,2807,704,2824,717,2833,723,2846,729,2858,734,2867,735,2885,739,2935,751,2960,757,2982,759,3052,766,3068,809,3075,829,3084,864,3094,889,3117,889,3125,889,3166,880,3186,875,3188,874,3188,874,3191,873,3192,870,3192,861,3192,836,3176,809,3159,783,3159,776,3159,766,3187,741,3214,715,3223,715,3231,715,3239,718,3248,721,3253,721,3267,721,3278,711,3292,700,3292,682,3292,664,3274,658,3256,653,3256,641,3256,635,3257,634,3257,631,3291,608,3306,570,3269,550,3240,534,3208,537,3163,541,3159,509,3163,467,3162,447,3159,387,3077,325,3025,286,3022,283,2997,261,2997,243,2999,204,2999,190,2999,167,2987,167,2958,167,2909,186,L,2865,204,Q,2851,192,2833,179,2796,150,2760,140,Q,2757,138,2734,140,Z]],label:"Kasy",shortLabel:"KA",labelPosition:[223.1,77.9],labelAlignment:[CEN,MID]},"LA.VI.VA":{outlines:[[M,3068,809,Q,3052,766,2982,759,2960,757,2935,751,2885,739,2867,735,2858,734,2846,729,2833,723,2824,717,2807,704,2801,701,2795,699,2782,699,2769,699,2751,704,2732,708,2719,715,2706,721,2688,735,2670,748,2666,753,2639,780,2627,800,2614,820,2613,840,2612,861,2612,877,2610,890,2610,907,2610,924,2611,955,2611,985,2603,997,2593,1013,2590,1018,2585,1027,2585,1036,2585,1045,2588,1053,2590,1061,2590,1075,2590,1093,2582,1117,2579,1124,2559,1172,2558,1173,2558,1173,2558,1174,2558,1176,2558,1185,2556,1203,2556,1216,2561,1237,2566,1257,2566,1276,2566,1339,2544,1366,2537,1375,2516,1393,2490,1415,2474,1432,2447,1462,2434,1476,2415,1496,2400,1509,2467,1571,2480,1584,2492,1596,2500,1602,2503,1605,2517,1619,2530,1633,2540,1642,2549,1651,2568,1674,2586,1696,2595,1702,2604,1709,2618,1718,2631,1727,2636,1731,2646,1740,2680,1772,2699,1789,2716,1817,2733,1845,2737,1859,2742,1900,2751,1915,2756,1924,2761,1940,2765,1954,2771,1962,2785,1980,2805,1998,2835,2024,2845,2034,2846,2035,2881,2069,2901,2087,2915,2107,2926,2122,2936,2157,2939,2167,2948,2203,2948,2201,2949,2200,2950,2185,2958,2169,2967,2148,2973,2137,2980,2125,2988,2118,2997,2110,3004,2105,3011,2099,3019,2097,3022,2097,3026,2097,3042,2094,3046,2095,3058,2097,3067,2102,3074,2106,3080,2113,3090,2124,3092,2126,L,3128,2179,Q,3132,2188,3142,2209,3149,2227,3148,2239,3145,2256,3151,2271,3152,2273,3153,2276,3153,2289,3167,2300,3176,2307,3193,2317,3189,2310,3189,2300,3189,2289,3198,2267,3208,2245,3208,2232,3208,2211,3182,2191,3156,2172,3156,2152,3156,2145,3159,2132,3162,2120,3163,2116,3164,2113,3167,2106,3169,2100,3170,2094,3171,2089,3171,2074,3171,2055,3157,2038,3138,2018,3128,2003,3105,1968,3101,1963,3092,1954,3087,1948,3077,1936,3077,1928,L,3079,1918,3082,1918,Q,3084,1920,3090,1923,3098,1928,3102,1928,3113,1928,3129,1907,3145,1885,3148,1885,3156,1885,3159,1918,3163,1950,3177,1950,3183,1950,3198,1935,3213,1919,3230,1919,3244,1919,3250,1925,3255,1930,3255,1941,3255,1957,3237,1982,3218,2007,3218,2013,3218,2026,3242,2027,3276,2030,3277,2031,3278,2031,3306,2040,3334,2050,3334,2062,3334,2068,3308,2074,3282,2080,3282,2095,3282,2106,3300,2135,3317,2164,3317,2176,3317,2182,3296,2194,3275,2205,3275,2226,3275,2233,3279,2242,3281,2247,3288,2259,3290,2268,3296,2271,3302,2273,3304,2273,3305,2272,3312,2277,3319,2282,3323,2279,3326,2277,3335,2272,3345,2265,3351,2263,3357,2261,3364,2257,3368,2255,3379,2249,3400,2236,3404,2225,3406,2219,3406,2194,3404,2160,3404,2149,3404,2142,3409,2130,3416,2118,3421,2110,3427,2102,3432,2089,3425,2055,3422,2046,3418,2033,3401,2033,3391,2033,3385,2037,3379,2041,3372,2041,3364,2041,3357,2037,3349,2032,3349,2025,3349,2013,3365,2001,3381,1989,3381,1985,3371,1973,3362,1960,3343,1934,3343,1899,3343,1880,3344,1875,3346,1869,3357,1846,3359,1843,3366,1822,3376,1804,3393,1804,3396,1804,3408,1806,3413,1806,3418,1803,3422,1801,3425,1798,3449,1731,3449,1723,3449,1717,3440,1705,3430,1693,3430,1686,3430,1680,3440,1666,3450,1653,3450,1649,3450,1640,3438,1622,3426,1605,3426,1592,3426,1570,3454,1570,3481,1571,3481,1554,3481,1546,3468,1536,3453,1525,3453,1513,3453,1510,3464,1494,3475,1478,3475,1468,3475,1457,3461,1440,3447,1423,3440,1423,3435,1423,3432,1433,3430,1444,3425,1444,3416,1444,3412,1425,3410,1416,3410,1405,3409,1405,3409,1402,3409,1402,3409,1400,3409,1393,3410,1387,3411,1383,3411,1382,3411,1368,3409,1365,3406,1362,3388,1353,3375,1345,3371,1343,3361,1338,3354,1338,3346,1338,3336,1344,3325,1348,3315,1348,3299,1348,3281,1338,3263,1325,3257,1323,3246,1319,3240,1303,3236,1291,3236,1276,3236,1269,3256,1246,3276,1224,3276,1207,3276,1196,3262,1160,3251,1128,3246,1120,3228,1091,3219,1079,3215,1074,3198,1063,3187,1056,3187,1043,3187,1036,3194,1029,3201,1022,3204,1019,3205,1018,3209,1015,3214,1011,3218,1002,3222,994,3225,981,3229,968,3216,948,3203,927,3201,922,3199,916,3194,897,3191,880,3191,873,3188,874,3188,874,3186,875,3166,880,3125,889,3117,889,3094,889,3084,864,Q,3075,829,3068,809,Z]],label:"Vangvieng",shortLabel:"VA",labelPosition:[294,150.8],labelAlignment:[CEN,MID]},"LA.VI.FE":{outlines:[[M,2398,1510,Q,2397,1511,2397,1512,2389,1517,2377,1529,2364,1540,2358,1545,2354,1547,2338,1564,2328,1575,2320,1580,2319,1581,2317,1582,2311,1587,2301,1598,2287,1613,2266,1630,2246,1648,2237,1658,2227,1667,2205,1682,2182,1696,2173,1701,2164,1705,2147,1714,2129,1724,2122,1732,2115,1739,2093,1750,2072,1762,2044,1780,2016,1798,1985,1813,1944,1833,1927,1849,1920,1855,1906,1863,1886,1875,1883,1877,L,1878,1877,Q,1871,1888,1863,1908,1854,1927,1849,1941,1843,1966,1836,1983,1833,1993,1823,2016,1820,2023,1811,2054,1804,2075,1798,2090,1794,2098,1784,2121,1777,2139,1767,2157,1765,2161,1752,2191,1750,2194,1745,2208,1742,2217,1739,2222,1738,2223,1737,2224,1726,2243,1707,2277,1687,2313,1682,2332,1676,2351,1662,2385,1647,2420,1644,2430,1642,2441,1642,2443,1635,2461,1618,2486,1594,2518,1588,2532,1586,2536,1567,2578,1553,2610,1543,2630,1542,2630,1542,2631,1529,2664,1504,2697,1487,2719,1478,2739,1475,2744,1462,2776,L,1426,2861,Q,1420,2874,1407,2899,1397,2921,1394,2938,L,1391,2947,Q,1403,2952,1444,2967,1446,2968,1449,2969,1457,2971,1470,2978,1494,2990,1499,2990,1509,2990,1535,2987,L,1616,2987,Q,1629,2987,1697,2988,1767,2988,1798,2981,L,1818,2981,Q,1822,2975,1830,2968,1847,2954,1847,2951,1860,2944,1881,2922,1901,2900,1932,2858,1962,2815,1994,2765,2026,2716,2043,2687,2061,2657,2080,2610,2099,2563,2128,2501,2128,2501,2128,2500,2138,2486,2150,2457,2166,2422,2172,2410,2181,2393,2193,2366,2204,2337,2212,2322,2219,2307,2229,2277,2239,2254,2254,2229,2270,2177,2281,2157,2291,2137,2326,2011,2326,2010,2326,2009,2331,2002,2333,1992,2337,1975,2339,1970,2344,1957,2348,1928,2350,1911,2358,1883,2368,1850,2372,1832,2380,1806,2383,1792,2389,1768,2389,1754,2388,1736,2388,1713,Q,2389,1687,2398,1510,Z]],label:"Feuang",shortLabel:"FE",labelPosition:[196.4,225],labelAlignment:[CEN,MID]},"LA.VI.XA":{outlines:[[M,1391,2947,L,1386,2958,Q,1385,2963,1383,2966,1377,2981,1377,2986,1373,3003,1365,3011,1358,3019,1336,3030,1304,3045,1274,3068,1259,3080,1238,3080,1223,3080,1191,3076,1159,3073,1139,3072,1099,3072,1037,3072,968,3073,878,3061,877,3061,796,3048,741,3039,714,3040,676,3041,633,3023,593,3006,573,2983,548,3002,542,3017,537,3030,527,3068,515,3102,496,3118,482,3130,466,3155,444,3190,438,3198,401,3245,329,3235,294,3231,273,3253,259,3269,247,3305,234,3349,229,3358,217,3380,198,3379,163,3414,107,3524,40,3653,40,3716,40,3738,62,3758,85,3778,88,3818,89,3833,109,3870,128,3906,128,3920,128,3927,123,3984,123,4020,143,4059,163,4098,163,4131,163,4162,137,4219,111,4276,111,4319,111,4354,113,4363,115,4371,120,4375,144,4388,166,4429,181,4457,201,4478,225,4504,246,4504,254,4504,284,4494,313,4484,318,4484,327,4484,337,4514,348,4544,371,4544,381,4544,406,4533,426,4524,436,4518,L,470,4518,470,4538,Q,448,4571,440,4591,433,4609,433,4631,433,4657,438,4667,448,4684,477,4684,499,4684,532,4639,574,4582,582,4576,595,4599,608,4599,639,4599,651,4584,664,4562,674,4547,680,4537,690,4505,699,4474,705,4466,715,4453,739,4453,753,4453,783,4455,790,4454,882,4418,887,4418,908,4423,928,4429,933,4429,981,4429,1002,4405,1019,4386,1021,4347,1021,4300,1020,4275,1020,4231,1030,4208,1044,4174,1063,4137,1089,4084,1093,4076,1096,4046,1102,4018,1113,3964,1137,3964,1151,3964,1265,4010,1379,4056,1421,4056,1483,4056,1499,4030,1504,4024,1512,4001,1520,3979,1529,3964,1557,3921,1589,3894,1645,3849,1649,3844,1672,3821,1727,3778,1785,3734,1790,3729,1811,3710,1841,3642,1867,3584,1867,3577,1867,3566,1855,3555,1852,3551,1829,3535,1790,3507,1790,3475,1790,3461,1793,3449,1795,3441,1802,3422,1802,3419,1802,3416,1814,3382,1826,3347,1850,3276,1848,3254,1844,3220,1862,3177,1882,3130,1882,3095,1882,3065,1848,3034,1813,3003,1813,2992,1813,2988,1818,2981,L,1798,2981,Q,1767,2988,1697,2988,1629,2987,1616,2987,L,1535,2987,Q,1509,2990,1499,2990,1494,2990,1470,2978,1457,2971,1449,2969,1446,2968,1444,2967,Q,1403,2952,1391,2947,Z]],label:"Xanakharm",shortLabel:"XA",labelPosition:[96.1,359],labelAlignment:[CEN,MID]},"LA.VI.MA":{outlines:[[M,2046,1307,Q,2036,1288,2030,1280,2022,1267,2009,1257,1978,1234,1953,1226,1929,1218,1897,1218,1864,1219,1843,1236,1821,1254,1801,1268,1781,1283,1764,1298,1746,1314,1737,1327,1727,1339,1721,1345,1710,1355,1705,1365,1688,1385,1680,1391,1665,1402,1648,1402,1637,1402,1610,1414,1574,1430,1568,1432,1550,1437,1523,1457,1504,1471,1502,1471,1496,1475,1480,1480,1456,1487,1427,1498,1417,1502,1397,1502,1377,1501,1357,1500,1322,1498,1318,1500,1319,1500,1321,1500,1321,1500,1318,1500,1317,1501,1317,1500,1280,1500,1275,1502,1264,1507,1250,1541,1239,1567,1224,1594,1216,1609,1202,1631,1216,1645,1254,1676,1293,1708,1310,1735,1336,1774,1336,1823,1336,1870,1322,1896,1312,1914,1274,1982,1264,2003,1227,2062,1195,2118,1195,2149,1195,2160,1199,2181,1202,2201,1202,2216,1202,2240,1178,2300,1164,2335,1150,2366,1149,2368,1148,2370,1127,2424,1091,2485,1061,2538,1030,2581,1019,2597,1003,2635,984,2679,975,2696,934,2767,860,2767,854,2767,821,2763,789,2759,786,2759,752,2759,734,2780,723,2795,712,2832,699,2875,690,2892,671,2926,639,2943,597,2964,573,2983,593,3006,633,3023,676,3041,714,3040,741,3039,796,3048,877,3061,878,3061,968,3073,1037,3072,1099,3072,1139,3072,1159,3073,1191,3076,1223,3080,1238,3080,1259,3080,1274,3068,1304,3045,1336,3030,1358,3019,1365,3011,1373,3003,1377,2986,1377,2981,1383,2966,1385,2963,1386,2958,L,1394,2938,Q,1397,2921,1407,2899,1420,2874,1426,2861,L,1462,2776,Q,1475,2744,1478,2739,1487,2719,1504,2697,1529,2664,1542,2631,1542,2630,1543,2630,1553,2610,1567,2578,1586,2536,1588,2532,1594,2518,1618,2486,1635,2461,1642,2443,1642,2441,1644,2430,1647,2420,1662,2385,1676,2351,1682,2332,1687,2313,1707,2277,1726,2243,1737,2224,1738,2223,1739,2222,1742,2217,1745,2208,1750,2194,1752,2191,1765,2161,1767,2157,1777,2139,1784,2121,1794,2098,1798,2090,1804,2075,1811,2054,1820,2023,1823,2016,1833,1993,1836,1983,1843,1966,1849,1941,1854,1927,1863,1908,1871,1888,1878,1877,L,1881,1860,Q,1890,1838,1905,1802,1920,1766,1928,1744,1939,1713,1944,1700,1948,1687,1957,1670,1965,1653,1969,1644,1972,1635,1983,1619,1992,1605,1998,1594,1998,1593,1999,1592,2032,1516,2043,1478,2054,1433,2054,1373,Q,2054,1320,2046,1307,Z]],label:"Mad",shortLabel:"MA",labelPosition:[145.4,214.9],labelAlignment:[CEN,MID]},"LA.VI.HI":{outlines:[[M,2595,1702,Q,2586,1696,2568,1674,2549,1651,2540,1642,2530,1633,2517,1619,2503,1605,2500,1602,2492,1596,2480,1584,2467,1571,2400,1509,2400,1509,2398,1510,2389,1687,2388,1713,2388,1736,2389,1754,2389,1768,2383,1792,2380,1806,2372,1832,2368,1850,2358,1883,2350,1911,2348,1928,2344,1957,2339,1970,2337,1975,2333,1992,2331,2002,2326,2009,2326,2010,2326,2011,2291,2137,2281,2157,2270,2177,2254,2229,2239,2254,2229,2277,2219,2307,2212,2322,2204,2337,2193,2366,2181,2393,2172,2410,2166,2422,2150,2457,2138,2486,2128,2500,2128,2501,2128,2501,2099,2563,2080,2610,2061,2657,2043,2687,2026,2716,1994,2765,1962,2815,1932,2858,1901,2900,1881,2922,1860,2944,1847,2951,L,1852,2953,Q,1867,2953,1927,2979,1940,2985,1974,2996,2001,3009,1996,3034,L,2028,3034,Q,2056,3024,2074,2972,2089,2929,2088,2888,2086,2877,2102,2888,2109,2894,2115,2901,2120,2905,2128,2905,2135,2905,2149,2897,2163,2888,2172,2888,2181,2888,2216,2906,2252,2925,2264,2925,2271,2925,2321,2919,2346,2919,2387,2978,2409,2952,2421,2944,2432,2936,2451,2918,2470,2899,2477,2893,2517,2860,2532,2843,2544,2827,2552,2821,2568,2808,2588,2789,2595,2781,2609,2766,2622,2751,2626,2746,2632,2741,2640,2735,2649,2728,2655,2722,2660,2717,2665,2711,2671,2702,2690,2677,2709,2652,2718,2635,2727,2618,2768,2548,2769,2547,2771,2546,2779,2535,2795,2510,2818,2473,2821,2469,2848,2430,2882,2387,2910,2351,2920,2319,2928,2292,2952,2236,2949,2228,2948,2222,2947,2217,2948,2207,2948,2205,2948,2203,2939,2167,2936,2157,2926,2122,2915,2107,2901,2087,2881,2069,2846,2035,2845,2034,2835,2024,2805,1998,2785,1980,2771,1962,2765,1954,2761,1940,2756,1924,2751,1915,2742,1900,2737,1859,2733,1845,2716,1817,2699,1789,2680,1772,2646,1740,2636,1731,2631,1727,2618,1718,Q,2604,1709,2595,1702,Z]],label:"Hineherb",shortLabel:"HI",labelPosition:[253.9,227.1],labelAlignment:[CEN,MID]},"LA.VI.VI":{outlines:[[M,3257,2764,Q,3236,2761,3204,2753,3171,2744,3154,2736,3122,2719,3106,2712,3079,2700,3057,2703,3035,2706,3016,2701,3010,2707,3007,2711,3e3,2718,2995,2720,2991,2722,2982,2729,2971,2737,2969,2742,2964,2752,2958,2773,2955,2786,2948,2810,2937,2862,2937,2882,2937,2901,2937,2940,2938,2978,2942,2995,2946,3012,2967,3030,2987,3052,3001,3064,3015,3077,3023,3083,3031,3088,3062,3100,3074,3106,3087,3112,3096,3117,3098,3118,L,3129,3082,Q,3142,3064,3145,3060,3152,3049,3168,3019,3172,3011,3185,2995,3198,2977,3202,2969,L,3226,2924,Q,3226,2923,3227,2922,3232,2911,3237,2905,3241,2899,3245,2891,3251,2876,3253,2864,3254,2860,3255,2848,3256,2834,3261,2809,3266,2785,3271,2767,Q,3262,2765,3257,2764,Z]],label:"Viengkham",shortLabel:"VI",labelPosition:[310.4,290.9],labelAlignment:[CEN,MID]},"LA.VI.KE":{outlines:[[M,3690,2683,Q,3685,2666,3679,2654,3673,2644,3658,2602,3645,2612,3628,2623,3606,2632,3591,2641,3563,2657,3563,2681,3563,2693,3574,2717,3584,2742,3584,2751,3584,2757,3582,2761,3579,2767,3577,2775,3578,2774,3579,2774,3591,2772,3600,2766,3613,2758,3617,2756,3624,2753,3659,2737,3692,2721,3699,2719,L,3699,2708,Q,3694,2702,3693,2697,Q,3692,2690,3690,2683,Z],[M,3128,2179,L,3092,2126,Q,3090,2124,3080,2113,3074,2106,3067,2102,3058,2097,3046,2095,3042,2094,3026,2097,3022,2097,3019,2097,3011,2099,3004,2105,2997,2110,2988,2118,2980,2125,2973,2137,2967,2148,2958,2169,2950,2185,2949,2200,2948,2201,2948,2203,2948,2205,2948,2207,2947,2217,2948,2222,2949,2228,2952,2236,2952,2239,2953,2241,2957,2352,2938,2439,2934,2462,2925,2513,2920,2534,2920,2565,2920,2611,2927,2631,2938,2662,2972,2683,2985,2688,3009,2698,3012,2700,3016,2701,3035,2706,3057,2703,3079,2700,3106,2712,3122,2719,3154,2736,3171,2744,3204,2753,3236,2761,3257,2764,3262,2765,3271,2767,3274,2768,3277,2769,3293,2775,3300,2777,3311,2779,3327,2778,3335,2778,3346,2778,3348,2778,3349,2778,3394,2784,3405,2782,3411,2782,3419,2782,3417,2780,3415,2778,3415,2778,3400,2760,3389,2748,3381,2741,3373,2736,3355,2727,3339,2719,3334,2713,3319,2699,3299,2665,3277,2628,3267,2616,3262,2610,3252,2593,3242,2576,3239,2567,3224,2528,3224,2517,3224,2514,3230,2496,3235,2483,3237,2478,L,3238,2477,3238,2476,3255,2423,Q,3265,2394,3265,2375,3265,2358,3252,2351,3234,2344,3223,2337,3208,2330,3201,2325,3196,2322,3193,2317,3176,2307,3167,2300,3153,2289,3153,2276,3152,2273,3151,2271,3145,2256,3148,2239,3149,2227,3142,2209,Q,3132,2188,3128,2179,Z]],label:"Keo Oudom",shortLabel:"KE",labelPosition:[307.5,247.5],labelAlignment:[CEN,MID]},"LA.VI.HO":{outlines:[[M,4921,817,Q,4903,817,4852,830,4802,843,4761,843,4738,843,4724,817,4723,815,4695,744,4687,724,4649,721,4607,723,4595,723,4580,723,4574,711,4572,707,4566,684,4556,645,4516,645,4487,645,4463,656,4439,666,4417,666,4396,666,4359,648,4322,629,4307,629,4296,629,4271,651,4245,673,4233,673,4223,673,4209,650,4189,618,4180,608,4169,597,4143,586,4115,576,4106,571,4058,554,4033,545,3989,527,3973,502,3962,485,3955,474,3951,457,3935,443,3919,429,3904,429,3861,438,3860,438,3854,438,3844,427,3831,412,3823,403,3792,367,3756,367,3735,367,3682,403,3653,424,3635,435,3634,438,3632,443,3627,455,3613,480,3595,514,3588,514,3561,514,3533,497,3506,478,3495,472,3457,503,3457,513,3457,523,3452,531,3447,540,3447,560,3446,579,3442,581,3420,591,3390,598,3354,605,3337,608,L,3291,608,Q,3257,631,3257,634,3256,635,3256,641,3256,653,3274,658,3292,664,3292,682,3292,700,3278,711,3267,721,3253,721,3248,721,3239,718,3231,715,3223,715,3214,715,3187,741,3159,766,3159,776,3159,783,3176,809,3192,836,3192,861,3192,870,3191,873,3191,880,3194,897,3199,916,3201,922,3203,927,3216,948,3229,968,3225,981,3222,994,3218,1002,3214,1011,3209,1015,3205,1018,3204,1019,3201,1022,3194,1029,3187,1036,3187,1043,3187,1056,3198,1063,3215,1074,3219,1079,3228,1091,3246,1120,3251,1128,3262,1160,3276,1196,3276,1207,3276,1224,3256,1246,3236,1269,3236,1276,3236,1291,3240,1303,3246,1319,3257,1323,3263,1325,3281,1338,3299,1348,3315,1348,3325,1348,3336,1344,3346,1338,3354,1338,3361,1338,3371,1343,3375,1345,3388,1353,3406,1362,3409,1365,3411,1368,3411,1382,3411,1383,3410,1387,3409,1393,3409,1400,3409,1402,3409,1402,3409,1405,3410,1405,3410,1416,3412,1425,3416,1444,3425,1444,3430,1444,3432,1433,3435,1423,3440,1423,3447,1423,3461,1440,3475,1457,3475,1468,3475,1478,3464,1494,3453,1510,3453,1513,3453,1525,3468,1536,3481,1546,3481,1554,3481,1571,3454,1570,3426,1570,3426,1592,3426,1605,3438,1622,3450,1640,3450,1649,3450,1653,3440,1666,3430,1680,3430,1686,3430,1693,3440,1705,3449,1717,3449,1723,3449,1731,3425,1798,3422,1801,3418,1803,3413,1806,3408,1806,3396,1804,3393,1804,3376,1804,3366,1822,3359,1843,3357,1846,3346,1869,3344,1875,3343,1880,3343,1899,3343,1934,3362,1960,3371,1973,3381,1985,3381,1989,3365,2001,3349,2013,3349,2025,3349,2032,3357,2037,3364,2041,3372,2041,3379,2041,3385,2037,3391,2033,3401,2033,3418,2033,3422,2046,3425,2055,3432,2089,L,3432,2088,3439,2088,3439,2104,Q,3438,2105,3436,2110,3434,2115,3433,2116,3426,2126,3426,2131,3426,2142,3429,2147,3433,2154,3442,2160,3446,2162,3453,2169,3459,2175,3467,2178,3480,2183,3490,2195,3495,2202,3497,2210,3499,2216,3499,2221,3499,2234,3497,2237,3494,2241,3481,2241,L,3462,2239,Q,3453,2239,3440,2247,3425,2255,3425,2264,3425,2294,3434,2314,3445,2339,3470,2339,3493,2339,3505,2316,3512,2304,3517,2275,3533,2271,3565,2270,3591,2270,3604,2263,3612,2259,3623,2250,3635,2240,3639,2233,3646,2220,3654,2211,3656,2209,3671,2195,3684,2183,3715,2171,3742,2160,3750,2160,3757,2160,3763,2191,3765,2204,3767,2219,3767,2220,3768,2222,3769,2233,3761,2241,3753,2250,3740,2250,3738,2250,3710,2249,3692,2249,3681,2251,3676,2251,3660,2289,3644,2326,3644,2337,3644,2353,3659,2362,3665,2366,3690,2374,3702,2378,3714,2389,3718,2392,3723,2401,3729,2409,3734,2413,3761,2433,3784,2430,3788,2430,3813,2439,3841,2449,3841,2456,3841,2466,3831,2471,3822,2474,3816,2477,3815,2478,3814,2479,3802,2484,3796,2487,3784,2494,3784,2502,3784,2519,3852,2535,3921,2553,3921,2561,3921,2567,3916,2573,3911,2579,3902,2581,3896,2582,3887,2585,3875,2588,3869,2592,3853,2602,3844,2607,3829,2614,3814,2614,3812,2614,3784,2600,3756,2586,3714,2586,3682,2586,3676,2589,3668,2595,3658,2602,3673,2644,3679,2654,3685,2666,3690,2683,3692,2690,3693,2697,3694,2702,3699,2708,L,3699,2719,3700,2718,Q,3716,2712,3745,2706,3806,2694,3847,2689,3861,2687,3900,2679,3938,2671,3948,2670,3983,2674,4008,2661,4012,2659,4016,2658,4038,2650,4074,2633,4122,2613,4137,2613,4143,2613,4186,2631,4230,2650,4247,2650,4277,2650,4313,2623,4350,2596,4374,2596,4389,2596,4425,2612,4462,2628,4511,2627,L,4629,2627,Q,4629,2631,4678,2630,4705,2629,4755,2627,4847,2625,4858,2621,4875,2616,4931,2594,4984,2575,5015,2573,5297,2557,5357,2565,5384,2569,5386,2569,5405,2569,5470,2561,5478,2561,5524,2560,5560,2560,5579,2554,5638,2534,5622,2441,5643,2440,5693,2437,5736,2429,5762,2392,5769,2383,5784,2353,5800,2323,5810,2308,5845,2258,5888,2281,L,5888,2264,Q,5885,2215,5884,2193,5882,2157,5885,2129,5886,2117,5905,2052,5922,1987,5922,1983,5922,1978,5910,1971,5891,1962,5881,1955,5839,1930,5839,1890,5842,1856,5842,1837,5843,1833,5843,1829,5842,1809,5828,1781,5810,1744,5810,1728,5810,1701,5830,1687,5848,1674,5880,1674,5880,1674,5880,1674,5882,1676,5891,1675,5904,1674,5906,1675,5910,1677,5916,1686,5919,1691,5922,1699,5937,1725,5939,1738,L,5948,1738,Q,5961,1713,5961,1688,5961,1671,5958,1666,5952,1658,5948,1636,5945,1624,5926,1624,5904,1626,5897,1626,5888,1625,5874,1611,5868,1605,5852,1585,5838,1570,5832,1563,5821,1551,5821,1544,5821,1538,5829,1533,5842,1525,5843,1524,5848,1520,5851,1513,5854,1504,5852,1493,5857,1483,5858,1465,5858,1459,5858,1438,5858,1395,5854,1388,5844,1370,5797,1364,5772,1361,5743,1347,5733,1343,5725,1339,5712,1331,5703,1323,5699,1306,5579,1224,5458,1141,5417,1118,5376,1096,5354,1049,5329,993,5316,964,5265,859,5212,859,5191,859,5141,870,5089,882,5069,882,5033,882,4988,850,Q,4943,817,4921,817,Z]],label:"Hom",shortLabel:"HO",labelPosition:[434,136.7],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"vientianeprovince",type:"maps"}}})});