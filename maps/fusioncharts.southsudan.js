(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=252)})({252:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(253);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},253:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.SouthSudan.17.09-06-2012 09:09:37
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"SouthSudan",revision:17,standaloneInit:true,baseWidth:417,baseHeight:314,baseScaleFactor:10,entities:{"SD.WH":{outlines:[[M,2027,732,Q,1909,757,1889,785,1870,814,1875,917,1666,898,1665,967,L,1612,1053,1612,1053,Q,1622,1050,1627,1047,L,1645,1042,Q,1651,1048,1666,1057,1676,1066,1675,1076,L,1677,1079,1677,1085,Q,1640,1093,1647,1114,1644,1144,1635,1162,L,1760,1162,Q,1776,1197,1830,1292,1839,1309,1861,1318,1884,1326,1878,1333,1873,1341,1890,1355,1908,1369,1965,1377,1979,1499,1949,1600,1945,1612,1952,1604,L,1955,1602,Q,1984,1590,1999,1586,2015,1583,2079,1694,2144,1806,2137,1842,L,2330,1842,Q,2333,1837,2330,1832,2303,1796,2286,1772,2255,1727,2255,1712,2255,1706,2260,1698,2265,1691,2265,1684,2265,1671,2247,1652,2230,1635,2230,1634,2230,1623,2240,1610,2249,1598,2255,1597,2250,1582,2204,1522,2160,1466,2160,1464,2175,1404,2175,1379,2175,1329,2155,1291,2135,1253,2135,1219,2135,1177,2162,1143,2190,1109,2190,1092,2190,1080,2188,1079,2185,1075,2170,1077,L,2170,1037,Q,2226,1008,2231,1007,2257,997,2295,997,2311,997,2383,1009,L,2384,1009,2385,912,Q,2317,912,2290,901,2252,886,2215,832,2201,812,2145,786,Q,2109,770,2027,732,Z]],label:"Unity",shortLabel:"WH",labelPosition:[198.8,111.7],labelAlignment:[CEN,MID]},"SD.WR":{outlines:[[M,1830,1292,Q,1776,1198,1760,1162,L,1635,1162,Q,1628,1177,1618,1183,1608,1187,1550,1187,1498,1187,1406,1177,1345,1177,1325,1197,1322,1210,1315,1274,1310,1325,1300,1342,1276,1385,1261,1401,1252,1412,1240,1420,1241,1438,1260,1464,1285,1501,1290,1510,1308,1546,1325,1555,L,1372,1577,Q,1399,1602,1461,1619,1512,1646,1535,1679,1536,1681,1537,1682,1539,1701,1547,1741,1557,1784,1555,1827,L,1555,2003,Q,1576,2001,1616,2e3,1688,1998,1723,1893,1757,1788,1823,1724,1892,1654,1913,1636,L,1946,1609,Q,1948,1605,1949,1600,1979,1499,1965,1377,1908,1370,1890,1355,1873,1341,1878,1334,1884,1327,1861,1318,Q,1839,1310,1830,1292,Z]],label:"Warap",shortLabel:"WR",labelPosition:[164.4,150.2],labelAlignment:[CEN,MID]},"SD.EB":{outlines:[[M,2138,1842,Q,2144,1806,2080,1695,2016,1583,2e3,1587,1984,1590,1955,1602,L,1914,1635,Q,1892,1653,1823,1723,1758,1787,1723,1892,1689,1997,1617,2e3,1576,2001,1556,2002,1556,2002,1555,2002,1540,2003,1537,2005,1530,2007,1530,2072,1530,2136,1567,2169,1578,2179,1604,2201,1672,2223,1676,2266,1680,2308,1748,2299,1816,2290,1848,2294,1880,2298,1895,2299,1910,2300,1928,2251,1941,2215,1960,2197,1977,2189,1987,2184,2005,2175,2005,2152,2007,2051,2043,2067,2091,2060,2143,2067,2141,2134,2165,2158,2173,2166,2185,2172,2206,2181,2236,2179,2282,2177,2290,2164,2297,2151,2315,2119,2325,2143,2364,2175,2403,2206,2405,2227,2438,2236,2447,2239,2456,2242,2492,2254,2527,2265,2635,2252,L,2635,2187,Q,2550,2072,2525,1997,2502,1977,2488,1965,2473,1953,2464,1937,2455,1921,2333,1842,Z]],label:"Lakes",shortLabel:"EB",labelPosition:[198.2,194.3],labelAlignment:[CEN,MID]},"SD.UN":{outlines:[[M,3135,49,Q,3112,48,3084,49,2992,52,2990,52,L,2990,127,2787,127,Q,2789,129,2791,131,2808,146,2822,165,2857,211,2858,222,2859,233,2865,292,2870,350,2871,365,2871,380,2890,452,2863,454,2818,516,2779,569,2745,576,2740,577,2755,582,2750,583,2746,584,2729,590,2732,615,2735,646,2690,687,2680,711,2650,736,2608,773,2600,782,2584,799,2556,837,2534,866,2519,878,2479,912,2385,912,L,2384,1010,Q,2399,1012,2415,1015,2530,1036,2563,1043,2597,1049,2613,1069,2629,1089,2653,1128,2677,1166,2681,1190,2685,1214,2699,1225,2713,1236,2743,1227,2772,1217,2795,1191,2818,1165,2845,1168,2872,1172,2899,1219,2926,1267,2940,1307,2957,1328,3e3,1349,3052,1373,3070,1387,3047,1381,3042,1403,3040,1411,3040,1447,3040,1505,3044,1512,3053,1526,3103,1536,L,3103,1536,Q,3106,1537,3112,1539,3164,1504,3160,1417,3156,1363,3181,1352,3190,1347,3248,1347,3255,1347,3315,1347,3327,1349,3342,1357,3356,1365,3369,1365,3400,1365,3409,1362,3423,1358,3450,1337,3485,1309,3489,1300,3492,1294,3492,1256,3485,1086,3487,992,L,3400,992,Q,3400,826,3409,781,3418,736,3329,690,3311,680,3240,627,3169,574,3157,586,3145,598,3139,505,3132,412,3129,335,3125,257,3133,202,3145,128,3155,62,L,3150,50,Q,3142,49,3135,49,Z]],label:"Upper Nile",shortLabel:"UN",labelPosition:[298.8,82.3],labelAlignment:[CEN,MID]},"SD.JG":{outlines:[[M,3112,1539,Q,3107,1536,3103,1535,L,3103,1535,Q,3053,1525,3045,1511,3040,1504,3040,1447,3040,1411,3042,1403,3048,1381,3070,1387,3052,1373,3e3,1348,2957,1328,2940,1307,2927,1266,2900,1219,2873,1171,2846,1168,2819,1164,2795,1190,2772,1217,2743,1226,2714,1235,2699,1225,2685,1214,2681,1189,2677,1165,2653,1127,2629,1089,2613,1069,2597,1049,2564,1042,2530,1036,2416,1015,2399,1012,2385,1009,2384,1009,2384,1009,2312,997,2295,997,2258,997,2232,1007,2227,1008,2170,1037,L,2170,1077,Q,2186,1075,2189,1079,2190,1080,2190,1092,2190,1109,2163,1143,2135,1177,2135,1219,2135,1253,2155,1291,2175,1329,2175,1379,2175,1404,2160,1464,2160,1466,2205,1522,2250,1582,2255,1597,2249,1598,2240,1610,2230,1623,2230,1634,2230,1635,2248,1652,2265,1671,2265,1684,2265,1691,2260,1698,2255,1706,2255,1712,2255,1727,2287,1772,2304,1796,2330,1832,L,2330,1841,Q,2455,1921,2464,1937,2473,1953,2487,1965,2502,1977,2525,1997,2550,2072,2635,2187,L,2635,2252,Q,2665,2245,2865,2253,2934,2256,3022,2260,3368,2278,3375,2281,3382,2284,3425,2287,3469,2290,3509,2289,3550,2289,3575,2277,3600,2266,3637,2261,3674,2256,3735,2219,3796,2183,3811,2174,3805,2159,3800,2147,3748,2044,3740,2012,3730,1969,3696,1957,3678,1952,3671,1949,3660,1945,3655,1937,3655,1935,3654,1934,3654,1934,3654,1934,3643,1904,3593,1865,3519,1808,3518,1807,3496,1784,3473,1743,3438,1682,3428,1667,3406,1634,3362,1621,3337,1613,3274,1606,3212,1600,3182,1590,3136,1576,3107,1544,3106,1543,3106,1543,3109,1541,3112,1539,Z]],label:"Jonglei",shortLabel:"JG",labelPosition:[288.2,179.8],labelAlignment:[CEN,MID]},"SD.EE":{outlines:[[M,3426,2287,Q,3382,2284,3375,2281,3368,2278,3022,2260,2934,2256,2866,2253,2859,2263,2832,2308,2805,2353,2806,2358,2806,2363,2811,2385,2817,2407,2839,2414,2814,2422,2806,2437,2805,2440,2815,2475,2825,2509,2853,2572,2881,2634,2878,2637,2875,2640,2857,2681,2835,2728,2830,2747,2815,2800,2813,2810,2810,2820,2777,2852,2744,2884,2715,2892,L,2715,3005,Q,2727,3015,2748,3043,2780,3087,2808,3087,2832,3087,2840,3073,2854,3047,2878,3029,2897,3015,2970,3014,3019,3005,3145,2972,3159,2972,3176,2989,3193,3007,3217,3007,3223,3007,3265,3004,3278,3004,3310,3014,3314,3014,3316,3014,L,3316,3014,Q,3337,3004,3382,2948,3435,2881,3453,2867,3552,2784,3598,2712,3622,2674,3664,2645,3705,2616,3738,2612,3743,2611,3827,2583,3914,2554,3938,2554,3959,2554,3970,2572,3973,2577,3985,2612,4004,2669,4068,2669,4095,2669,4101,2658,4107,2641,4114,2627,4110,2589,4110,2568,4110,2533,4118,2523,4125,2512,4125,2483,4125,2444,4120,2427,4111,2394,4080,2394,4063,2394,4056,2404,4050,2414,4038,2414,4030,2414,4021,2407,4011,2399,3999,2399,3965,2412,3957,2412,3869,2349,3850,2297,3828,2221,3811,2174,3796,2183,3735,2220,3674,2256,3637,2261,3600,2266,3575,2278,3550,2289,3510,2289,Q,3469,2290,3426,2287,Z]],label:"Eastern Equatoria",shortLabel:"EE",labelPosition:[331.9,260],labelAlignment:[CEN,MID]},"SD.BG":{outlines:[[M,2815,2474,Q,2805,2440,2806,2437,2814,2422,2839,2414,2817,2407,2811,2385,2806,2363,2805,2358,2805,2353,2832,2308,2859,2263,2865,2253,2665,2245,2635,2252,2527,2265,2491,2253,2456,2242,2447,2239,2438,2236,2405,2227,2403,2206,2364,2175,2325,2143,2315,2119,2297,2151,2289,2164,2282,2177,2235,2179,2206,2181,2185,2172,2193,2192,2233,2219,2252,2232,2283,2272,2299,2292,2348,2322,2375,2339,2375,2388,2375,2432,2353,2447,2373,2499,2353,2552,2342,2572,2277,2615,2213,2658,2175,2662,2136,2667,2117,2661,2098,2654,2076,2654,2058,2654,2038,2699,L,1994,2743,Q,1994,2745,1995,2748,1999,2760,2003,2779,2012,2801,2039,2824,2082,2860,2093,2872,2110,2890,2139,2929,2169,2960,2213,2964,2257,2968,2263,3004,2263,3007,2260,3040,2261,3072,2278,3072,L,2295,3061,Q,2313,3049,2329,3049,2345,3049,2383,3072,2384,3070,2385,3069,2411,3031,2435,3020,2461,3010,2502,3008,2544,3007,2565,3023,2585,3039,2613,3039,2636,3039,2666,3019,2696,2999,2705,2999,2708,2999,2712,3002,2713,3003,2715,3005,L,2715,2892,Q,2744,2884,2777,2852,2810,2820,2812,2810,2815,2800,2830,2747,2835,2728,2857,2681,2875,2640,2878,2637,2881,2634,2853,2572,Q,2825,2509,2815,2474,Z]],label:"Central Equatoria",shortLabel:"BG",labelPosition:[251.5,262.5],labelAlignment:[CEN,MID]},"SD.WE":{outlines:[[M,1848,2294,Q,1816,2290,1748,2299,1680,2308,1676,2266,1672,2223,1604,2201,1578,2179,1567,2169,1530,2136,1530,2072,1530,2007,1537,2005,1540,2003,1555,2002,L,1555,1984,1380,1984,Q,1392,1958,1350,1949,1308,1940,1293,1944,1277,1949,1183,1963,1088,1977,1049,1975,1010,1973,923,1989,838,2005,799,2008,798,2008,797,2008,795,2021,793,2044,793,2064,814,2096,835,2129,835,2137,835,2143,825,2167,825,2181,853,2189,891,2200,898,2204,968,2251,975,2254,1079,2299,1102,2354,L,1102,2429,Q,1117,2461,1118,2484,1118,2488,1118,2491,1126,2508,1146,2533,1176,2569,1208,2589,1225,2600,1265,2637,1276,2647,1277,2665,1278,2685,1285,2697,1298,2716,1303,2720,1317,2733,1338,2729,1357,2726,1390,2759,1413,2782,1447,2797,1488,2813,1510,2824,L,1514,2828,Q,1602,2752,1629,2759,1710,2779,1710,2779,1719,2784,1733,2784,1751,2783,1755,2784,1766,2787,1774,2794,1780,2799,1794,2799,1817,2799,1843,2753,1870,2707,1905,2707,1920,2707,1938,2712,1964,2720,1973,2722,1986,2724,1994,2743,L,2038,2699,Q,2058,2654,2076,2654,2098,2654,2117,2661,2136,2667,2175,2663,2213,2658,2278,2615,2342,2572,2353,2552,2373,2499,2353,2447,2375,2432,2375,2388,2375,2339,2348,2322,2299,2292,2283,2272,2252,2232,2233,2219,2193,2192,2185,2172,2173,2166,2165,2158,2141,2134,2143,2067,2091,2060,2043,2067,2007,2051,2005,2152,2005,2175,1987,2184,1977,2189,1960,2197,1941,2215,1928,2251,1910,2300,1895,2299,Q,1880,2298,1848,2294,Z]],label:"Western Equatoria",shortLabel:"WE",labelPosition:[158.3,238.5],labelAlignment:[CEN,MID]},"SD.WB":{outlines:[[M,793,1497,Q,780,1456,750,1467,745,1402,750,1284,718,1260,711,1247,705,1234,713,1098,720,962,722,810,L,722,809,Q,715,800,706,794,688,781,678,770,668,758,668,737,669,716,668,692,L,385,692,Q,355,722,355,739,355,773,341,798,326,823,293,843,260,863,258,928,257,994,218,1086,178,1178,170,1202,92,1190,73,1255,75,1256,76,1257,80,1259,80,1263,80,1276,63,1312,45,1348,45,1354,45,1394,155,1413,265,1425,268,1427,284,1436,314,1467,353,1508,358,1512,412,1557,423,1607,L,423,1612,Q,415,1621,415,1661,414,1701,461,1735,508,1769,561,1788,613,1808,628,1822,662,1854,703,1907,705,1910,756,1947,798,1977,798,1994,L,798,2008,Q,838,2005,923,1989,1010,1973,1049,1975,1088,1977,1183,1963,1277,1949,1292,1944,1308,1940,1350,1949,1392,1958,1380,1984,L,1555,1984,1555,1827,Q,1557,1784,1548,1741,1539,1701,1538,1682,1537,1680,1535,1678,1512,1646,1461,1618,1399,1602,1373,1577,L,1325,1554,Q,1308,1546,1290,1509,1286,1500,1261,1464,1241,1437,1240,1420,1227,1429,1210,1437,1176,1452,1095,1508,1015,1557,976,1572,936,1587,896,1569,857,1551,832,1546,Q,808,1542,793,1497,Z]],label:"Western Bahr Al Ghazal",shortLabel:"WB",labelPosition:[74.9,166],labelAlignment:[CEN,MID]},"SD.NB":{outlines:[[M,1379,1007,Q,1351,1014,1349,971,L,1139,962,Q,1093,962,1033,976,972,990,954,992,936,994,892,991,849,989,831,971,814,953,796,920,779,888,765,874,751,860,737,833,730,820,722,810,722,810,721,810,L,721,810,Q,719,962,712,1098,704,1234,710,1247,717,1260,749,1284,744,1402,749,1467,779,1456,792,1497,807,1542,831,1546,856,1551,895,1569,935,1587,975,1572,1014,1557,1094,1508,1175,1452,1209,1437,1226,1429,1239,1420,1251,1411,1261,1401,1275,1384,1299,1342,1309,1325,1314,1273,1321,1210,1324,1197,1344,1177,1406,1177,1498,1187,1549,1187,1608,1187,1617,1182,1628,1177,1635,1162,1643,1144,1647,1114,1640,1093,1677,1085,L,1677,1079,1674,1079,Q,1675,1078,1675,1076,1676,1066,1666,1057,1650,1048,1644,1042,L,1627,1047,Q,1622,1050,1611,1053,L,1611,1053,Q,1611,1053,1610,1053,1588,1058,1543,1061,1452,1066,1417,1071,Q,1383,1076,1379,1007,Z]],label:"Northern Bahr Al Ghazal",shortLabel:"NB",labelPosition:[105.2,119.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"southsudan",type:"maps"}}})});