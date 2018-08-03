(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=310)})({310:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(311);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},311:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Batanes.1.04-14-2017 01:17:41
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Batanes",revision:1,standaloneInit:true,baseWidth:169,baseHeight:586,baseScaleFactor:10,entities:{"PH.BN.IB":{outlines:[[M,1027,2728,Q,1014,2727,1011,2738,1010,2741,1007,2743,1006,2744,1004,2745,1001,2747,998,2748,995,2749,992,2749,982,2750,972,2750,971,2750,970,2751,968,2754,964,2757,961,2760,961,2762,960,2764,960,2765,955,2772,945,2771,944,2770,942,2771,941,2771,940,2772,937,2773,936,2776,935,2777,934,2778,931,2781,931,2785,931,2786,931,2787,930,2790,929,2791,926,2793,926,2797,927,2802,926,2806,926,2807,926,2809,925,2814,925,2819,925,2827,921,2830,919,2831,918,2831,913,2832,912,2836,912,2838,912,2839,912,2854,912,2868,913,2869,913,2869,913,2893,913,2916,915,2916,917,2916,923,2916,928,2917,939,2918,940,2910,941,2903,947,2902,948,2902,949,2902,954,2901,959,2901,960,2901,960,2900,962,2900,963,2899,965,2897,969,2897,976,2898,984,2897,1005,2896,1027,2896,1031,2896,1034,2895,1040,2894,1046,2894,1048,2894,1051,2895,1057,2896,1056,2891,1056,2888,1055,2884,1055,2883,1055,2881,1054,2868,1055,2854,1055,2848,1053,2842,1052,2841,1050,2840,1048,2839,1046,2839,1045,2838,1044,2838,1043,2837,1042,2837,1040,2833,1037,2829,1037,2828,1036,2827,1036,2823,1035,2819,1035,2816,1035,2814,1034,2785,1034,2755,1034,2752,1034,2749,1033,2747,1033,2745,1033,2738,1031,2732,Q,1030,2728,1027,2728,Z],[M,485,1910,Q,484,1911,484,1911,483,1916,480,1920,479,1921,478,1921,469,1923,468,1931,468,1936,466,1937,464,1938,463,1939,454,1942,447,1945,445,1946,445,1947,441,1961,426,1964,421,1965,421,1970,421,1974,421,1978,421,1980,421,1982,421,1986,419,1987,412,1991,405,1996,399,1999,399,2009,400,2013,400,2017,402,2026,395,2031,394,2031,393,2032,388,2033,387,2037,386,2040,386,2044,385,2046,385,2047,385,2055,383,2061,382,2063,381,2064,376,2067,371,2071,365,2076,363,2082,363,2084,362,2086,361,2092,361,2099,361,2129,362,2158,362,2174,359,2188,358,2196,351,2197,350,2198,349,2198,339,2198,340,2208,341,2213,340,2218,340,2220,339,2220,332,2222,327,2225,327,2226,326,2227,324,2232,324,2239,323,2250,314,2253,312,2255,309,2255,307,2256,306,2257,302,2263,303,2270,304,2278,303,2285,303,2287,302,2288,294,2292,290,2297,289,2299,288,2301,285,2315,286,2331,286,2340,281,2345,279,2346,277,2347,270,2351,264,2354,262,2355,262,2356,260,2380,260,2405,260,2407,260,2410,259,2413,254,2415,252,2416,250,2416,249,2416,248,2417,245,2422,245,2428,245,2432,246,2436,247,2443,248,2449,244,2448,239,2448,233,2448,227,2448,209,2446,200,2456,199,2458,198,2460,198,2465,195,2468,193,2473,187,2475,184,2476,182,2476,176,2476,175,2480,175,2482,175,2483,174,2485,174,2487,174,2491,172,2493,168,2498,160,2498,158,2498,157,2499,155,2500,153,2501,152,2503,152,2503,152,2513,145,2518,142,2520,138,2521,135,2522,133,2524,132,2525,132,2527,131,2534,131,2540,130,2547,123,2550,122,2551,120,2552,114,2553,108,2557,107,2558,107,2559,106,2570,106,2581,106,2586,101,2588,100,2589,98,2589,97,2590,96,2590,95,2591,93,2591,87,2594,86,2602,86,2606,86,2609,85,2612,85,2614,85,2620,82,2622,79,2625,74,2626,73,2627,72,2628,70,2630,67,2632,65,2635,65,2639,66,2643,65,2646,64,2648,64,2649,59,2659,49,2666,48,2667,46,2668,45,2669,45,2669,41,2683,44,2698,45,2703,49,2708,50,2710,50,2711,L,51,2713,Q,58,2714,58,2720,58,2723,59,2727,60,2729,60,2732,61,2759,61,2787,61,2791,61,2795,62,2797,62,2799,63,2802,63,2805,64,2812,65,2819,65,2821,66,2822,68,2830,75,2835,76,2837,78,2836,83,2836,85,2841,85,2842,85,2842,85,2854,93,2860,95,2862,96,2862,100,2862,101,2864,101,2866,102,2867,107,2875,105,2886,104,2891,107,2894,111,2898,118,2899,120,2899,121,2900,123,2900,123,2902,124,2907,127,2911,127,2912,128,2913,130,2916,131,2916,135,2917,138,2918,142,2920,143,2923,143,2925,144,2928,144,2929,144,2930,145,2931,146,2932,153,2940,167,2938,175,2936,180,2941,181,2942,181,2943,182,2945,182,2946,183,2948,183,2951,182,2957,185,2961,186,2962,187,2962,197,2963,207,2963,236,2963,266,2963,273,2963,279,2964,285,2964,289,2961,294,2957,295,2951,296,2950,296,2948,298,2944,301,2942,306,2940,313,2940,314,2940,314,2939,315,2937,319,2937,321,2938,321,2937,323,2933,325,2930,326,2927,329,2924,332,2922,336,2922,345,2923,353,2923,357,2924,359,2921,361,2920,362,2918,366,2914,365,2906,365,2900,365,2893,366,2888,366,2883,365,2874,367,2867,368,2866,368,2864,370,2860,370,2854,368,2846,373,2844,375,2843,376,2843,387,2842,398,2842,405,2842,404,2836,404,2832,407,2831,408,2831,409,2830,411,2828,415,2828,417,2827,418,2826,420,2825,423,2825,438,2826,452,2826,470,2827,469,2807,469,2806,470,2805,471,2804,474,2803,480,2802,489,2800,490,2800,490,2799,490,2778,490,2757,492,2757,494,2756,495,2756,495,2756,498,2755,502,2755,508,2753,515,2754,523,2756,523,2749,523,2743,529,2742,536,2741,541,2738,542,2738,543,2736,545,2735,546,2734,547,2733,547,2732,549,2703,549,2673,549,2644,549,2614,549,2612,550,2610,559,2599,567,2592,568,2591,569,2589,572,2582,571,2574,571,2560,571,2546,572,2544,573,2543,576,2540,579,2535,581,2533,583,2531,589,2526,598,2523,599,2523,601,2523,613,2521,617,2509,618,2507,618,2507,623,2505,628,2504,630,2504,633,2503,634,2503,634,2502,635,2501,636,2500,637,2499,638,2498,643,2495,645,2492,646,2489,648,2487,650,2482,656,2478,658,2478,660,2476,664,2474,671,2473,673,2473,674,2471,677,2466,677,2458,676,2455,676,2452,674,2441,673,2428,673,2425,672,2422,670,2417,671,2410,671,2407,671,2405,670,2401,670,2398,669,2393,665,2392,664,2392,663,2392,651,2388,651,2373,650,2359,650,2344,650,2343,649,2341,649,2340,649,2339,648,2331,643,2326,641,2324,639,2323,634,2321,636,2314,636,2313,637,2311,640,2307,645,2305,646,2305,646,2304,646,2297,646,2291,646,2283,653,2280,655,2280,658,2278,664,2275,663,2267,663,2260,670,2261,675,2261,675,2257,676,2256,676,2255,676,2250,678,2245,679,2245,680,2244,689,2240,688,2230,687,2225,690,2222,694,2217,703,2215,713,2212,712,2203,711,2198,714,2193,714,2193,715,2192,718,2186,716,2178,715,2171,720,2166,722,2166,723,2165,728,2165,731,2163,734,2162,734,2160,735,2137,735,2114,735,2113,734,2111,734,2110,732,2109,730,2106,725,2105,724,2105,722,2104,721,2103,720,2102,715,2100,717,2094,718,2089,715,2086,712,2083,710,2082,709,2081,709,2079,710,2069,703,2064,702,2063,700,2063,693,2063,688,2057,687,2057,687,2056,684,2049,682,2042,681,2041,680,2039,679,2037,676,2035,676,2035,675,2034,673,2033,671,2033,669,2032,666,2032,666,2031,665,2031,660,2029,657,2024,656,2022,656,2020,655,2015,655,2010,655,2002,650,1997,644,1990,645,1978,647,1969,641,1967,637,1966,633,1964,630,1963,628,1961,622,1958,614,1956,613,1956,611,1956,607,1956,605,1953,604,1952,602,1950,602,1949,601,1948,599,1945,599,1942,598,1938,595,1935,594,1934,593,1934,589,1933,586,1933,584,1932,582,1932,574,1931,566,1930,564,1930,563,1929,560,1927,554,1928,552,1928,551,1928,544,1925,537,1925,532,1925,529,1923,527,1921,527,1918,526,1910,520,1906,519,1905,517,1904,506,1903,495,1903,Q,488,1903,485,1910,Z],[M,846,1438,Q,839,1435,833,1433,831,1432,830,1431,829,1428,829,1425,829,1423,827,1423,818,1420,809,1423,800,1426,801,1435,801,1437,800,1437,798,1438,799,1441,799,1443,798,1444,794,1447,787,1446,780,1445,776,1448,775,1449,774,1450,774,1452,774,1455,773,1463,764,1464,763,1464,762,1465,760,1467,759,1472,759,1478,759,1483,759,1491,758,1498,757,1505,761,1510,762,1511,762,1512,762,1521,766,1529,767,1530,766,1532,766,1540,769,1547,771,1553,771,1560,771,1561,771,1562,772,1570,782,1571,784,1571,785,1572,788,1573,789,1576,789,1577,790,1578,792,1579,791,1584,791,1586,792,1587,794,1590,801,1590,809,1589,818,1589,822,1588,826,1587,833,1586,841,1585,845,1585,849,1584,851,1584,852,1583,855,1582,855,1580,856,1576,856,1571,855,1566,858,1566,860,1566,860,1565,862,1563,866,1563,870,1562,873,1561,875,1560,875,1559,876,1543,876,1527,876,1523,877,1519,878,1509,871,1505,869,1504,866,1503,857,1501,858,1493,858,1491,857,1489,855,1486,856,1482,856,1468,857,1455,857,1447,851,1442,850,1441,848,1439,Q,847,1438,846,1438,Z],[M,970,1277,Q,966,1273,959,1273,948,1274,938,1273,934,1273,934,1270,933,1269,933,1267,932,1265,932,1262,932,1260,931,1259,930,1257,929,1255,928,1254,926,1253,922,1252,918,1252,911,1252,910,1257,909,1260,908,1264,907,1268,905,1272,903,1274,900,1275,898,1276,896,1276,884,1277,871,1277,870,1277,869,1277,868,1305,868,1332,868,1336,868,1339,870,1346,870,1354,869,1358,870,1360,872,1359,874,1360,876,1361,878,1363,879,1364,880,1364,882,1364,883,1365,885,1366,889,1369,891,1371,890,1376,890,1378,890,1379,892,1381,894,1382,896,1383,900,1383,901,1384,901,1384,907,1384,912,1384,927,1384,942,1384,954,1383,956,1394,956,1396,956,1398,956,1402,960,1402,965,1403,970,1402,984,1401,999,1401,1003,1401,1007,1402,1017,1403,1018,1394,1019,1386,1018,1378,1016,1371,1016,1364,1016,1363,1015,1361,1014,1359,1014,1356,1014,1352,1013,1347,1013,1347,1013,1346,1010,1335,1011,1322,1011,1320,1010,1317,1010,1317,1009,1316,1001,1316,994,1316,990,1317,989,1314,987,1309,988,1302,988,1297,982,1298,974,1299,974,1292,Q,975,1284,970,1277,Z],[M,1072,53,Q,1072,54,1072,54,1073,62,1076,68,1077,69,1078,69,1086,69,1091,71,1092,72,1093,72,1099,72,1099,76,1100,79,1100,81,1100,111,1100,140,1100,142,1099,145,1099,146,1099,146,1098,152,1097,157,1097,162,1096,168,L,1096,170,Q,1111,172,1125,172,1132,172,1140,171,1147,171,1155,170,1157,170,1158,169,1161,167,1160,163,1160,159,1160,155,1161,153,1162,153,1174,152,1187,152,1191,152,1195,152,1202,153,1200,146,1200,145,1199,143,1199,141,1198,138,1198,137,1198,135,1198,132,1195,130,1190,127,1183,128,1182,128,1181,128,1180,127,1180,125,1177,118,1177,110,1177,106,1176,103,1176,102,1176,101,1175,98,1175,94,1174,93,1174,91,1174,86,1168,86,1167,86,1166,86,1165,83,1162,84,1159,84,1159,84,1157,68,1157,51,1157,49,1156,49,1151,47,1145,47,1142,47,1142,47,1140,39,1140,31,1140,28,1139,28,1135,26,1130,26,1101,26,1071,26,Q,1071,39,1072,53,Z]],label:"Itbayat",shortLabel:"IB",labelPosition:[32.8,259.5],labelAlignment:[CEN,MID]},"PH.BN.BS":{outlines:[[M,1523,4284,Q,1520,4284,1518,4284,1516,4283,1514,4283,1507,4283,1501,4281,1499,4280,1498,4279,1493,4275,1488,4271,1485,4268,1481,4269,1472,4269,1464,4269,1455,4268,1449,4273,1447,4274,1446,4276,1440,4290,1425,4294,1424,4295,1422,4296,1421,4298,1420,4299,1419,4300,1417,4301,1416,4303,1415,4304,1414,4305,1412,4305,1404,4306,1400,4309,1398,4310,1398,4312,1397,4316,1393,4319,1388,4326,1378,4327,1377,4327,1376,4327,1368,4329,1365,4336,1364,4338,1363,4339,1362,4341,1360,4342,1358,4343,1356,4344,1355,4345,1353,4345,1348,4347,1343,4347,1341,4347,1340,4347,1333,4348,1329,4355,1328,4357,1326,4360,1321,4366,1309,4367,1301,4367,1296,4373,1295,4375,1294,4376,1293,4377,1291,4379,1290,4380,1289,4380,1279,4384,1267,4384,1253,4383,1239,4384,1232,4384,1228,4381,1223,4379,1220,4375,1216,4370,1207,4372,1202,4373,1197,4373,1190,4374,1183,4375,1183,4376,1182,4376,1180,4376,1179,4377,1169,4383,1170,4393,1170,4395,1170,4397,1169,4398,1169,4398,1168,4400,1168,4401,1167,4404,1166,4406,1163,4413,1163,4420,1163,4422,1164,4424,1164,4426,1164,4427,1164,4435,1168,4441,1169,4442,1170,4444,1170,4446,1171,4447,1174,4451,1175,4456,1180,4467,1178,4481,1178,4483,1179,4483,1184,4486,1187,4494,1188,4495,1188,4496,1189,4501,1189,4506,1190,4509,1189,4511,1189,4515,1192,4517,1194,4519,1195,4520,1197,4521,1199,4522,1201,4524,1203,4525,1208,4528,1208,4533,1209,4538,1209,4543,1210,4544,1210,4545,1210,4550,1215,4552,1217,4552,1219,4553,1221,4555,1221,4557,1222,4563,1222,4570,1222,4576,1221,4582,1250,4582,1279,4582,1298,4582,1316,4582,1319,4583,1321,4584,1326,4586,1327,4591,1328,4593,1329,4594,1331,4595,1331,4597,1336,4604,1346,4602,1352,4602,1358,4602,1386,4602,1415,4602,1416,4597,1420,4593,1423,4591,1425,4588,1426,4587,1427,4585,1430,4576,1439,4573,1448,4570,1459,4571,1472,4571,1486,4571,1487,4571,1489,4571,1494,4571,1495,4568,1495,4567,1496,4566,1498,4565,1499,4564,1510,4563,1521,4561,1524,4560,1527,4558,1531,4554,1538,4554,1539,4554,1539,4553,1543,4553,1546,4551,1548,4550,1549,4547,1549,4546,1550,4545,1552,4543,1556,4542,1566,4540,1571,4534,1574,4530,1578,4530,1583,4528,1584,4523,1585,4521,1586,4520,1587,4519,1588,4519,1589,4519,1590,4518,L,1592,4518,Q,1592,4512,1596,4511,1598,4510,1600,4509,1602,4508,1603,4508,1610,4507,1611,4501,1612,4499,1613,4498,1617,4495,1623,4492,1629,4489,1630,4484,1630,4482,1630,4481,1632,4477,1638,4472,1643,4469,1643,4464,1643,4462,1644,4461,1647,4455,1653,4449,1658,4445,1659,4437,1660,4434,1661,4432,1664,4425,1664,4417,1664,4412,1664,4407,1666,4396,1659,4392,1658,4391,1657,4390,1655,4390,1654,4389,1651,4385,1651,4378,1651,4376,1649,4375,1646,4372,1642,4368,1636,4364,1635,4355,1634,4353,1634,4351,1634,4344,1630,4342,1629,4342,1628,4342,1623,4341,1620,4336,1616,4330,1616,4323,1616,4315,1608,4313,1607,4312,1605,4312,1596,4310,1591,4305,1590,4304,1589,4302,1588,4301,1587,4300,1584,4295,1580,4292,1576,4289,1568,4289,1564,4289,1561,4289,Q,1543,4285,1523,4284,Z]],label:"Basco",shortLabel:"BS",labelPosition:[141.4,443.6],labelAlignment:[CEN,MID]},"PH.BN.MH":{outlines:[[M,1321,4584,Q,1319,4583,1316,4582,1298,4582,1279,4582,1250,4582,1221,4582,1221,4584,1220,4587,1220,4588,1218,4589,1211,4593,1205,4596,1204,4598,1203,4599,1202,4600,1201,4602,1200,4604,1199,4607,1199,4609,1198,4610,1198,4611,1197,4612,1195,4614,1192,4615,1189,4616,1187,4617,1181,4621,1180,4629,1179,4635,1175,4639,1174,4640,1173,4641,1167,4644,1162,4649,1161,4651,1159,4652,1155,4655,1155,4664,1155,4671,1148,4674,1147,4675,1145,4676,1141,4680,1140,4686,1139,4688,1138,4691,1136,4695,1130,4699,1127,4700,1123,4704,1119,4709,1118,4716,1117,4718,1117,4719,1116,4721,1115,4722,1112,4727,1105,4729,1097,4731,1093,4738,1092,4739,1091,4739,1085,4741,1083,4749,1082,4751,1082,4753,1082,4758,1079,4762,1073,4770,1064,4773,1057,4775,1053,4781,1052,4783,1051,4785,1050,4791,1046,4796,1044,4799,1042,4800,1037,4802,1033,4805,1032,4813,1038,4818,1039,4819,1039,4820,1039,4824,1042,4827,1043,4829,1043,4830,1042,4837,1046,4839,1047,4839,1048,4840,1060,4844,1058,4860,1058,4865,1059,4868,1060,4871,1062,4872,1063,4872,1064,4873,1068,4874,1071,4875,1079,4876,1080,4882,1081,4884,1081,4885,1083,4893,1083,4901,1083,4906,1083,4911,1084,4913,1084,4914,1085,4920,1088,4923,1089,4923,1090,4924,1091,4924,1092,4925,1094,4926,1096,4926,1109,4926,1122,4926,1126,4926,1129,4928,1130,4929,1132,4929,1154,4929,1177,4928,1179,4928,1180,4927,1183,4925,1189,4925,1196,4924,1204,4924,1207,4924,1208,4921,1209,4919,1210,4917,1212,4916,1212,4914,1215,4908,1222,4907,1224,4907,1226,4907,1228,4906,1231,4905,1238,4904,1243,4900,1244,4899,1246,4897,1242,4895,1239,4891,1238,4889,1237,4887,1237,4886,1236,4886,1231,4883,1226,4878,1225,4877,1223,4876,1222,4875,1222,4874,1221,4861,1222,4848,1222,4848,1222,4846,1220,4840,1220,4833,1220,4832,1221,4830,1221,4829,1221,4828,1222,4824,1223,4820,1223,4818,1223,4816,1223,4809,1225,4803,1225,4801,1226,4800,1227,4798,1230,4796,1231,4795,1231,4794,1231,4790,1235,4789,1236,4789,1237,4788,1241,4784,1244,4783,1248,4781,1251,4776,1252,4775,1251,4773,1251,4768,1254,4764,1255,4764,1256,4763,1260,4763,1263,4759,1264,4758,1265,4755,1267,4749,1272,4744,1276,4740,1282,4740,1286,4739,1289,4737,1290,4736,1291,4735,1294,4734,1294,4731,1294,4725,1299,4721,1301,4720,1302,4718,1304,4717,1305,4717,1309,4714,1314,4712,1315,4712,1316,4711,1317,4706,1323,4704,1325,4703,1326,4702,1327,4701,1328,4700,1333,4699,1337,4694,1338,4692,1340,4691,1343,4689,1346,4688,1354,4686,1361,4682,1369,4677,1377,4671,1382,4667,1383,4660,1383,4659,1384,4658,1389,4653,1392,4648,1393,4648,1393,4647,1396,4644,1395,4638,1395,4632,1394,4625,1394,4621,1397,4619,1398,4618,1399,4618,1402,4617,1403,4616,1411,4616,1413,4610,1414,4608,1414,4606,1414,4604,1415,4602,1386,4602,1358,4602,1352,4602,1346,4602,1336,4604,1331,4597,1331,4595,1329,4594,1328,4593,1327,4591,Q,1326,4586,1321,4584,Z]],label:"Mahatao",shortLabel:"MH",labelPosition:[125.4,466.5],labelAlignment:[CEN,MID]},"PH.BN.IA":{outlines:[[M,1038,4818,Q,1032,4813,1033,4805,1029,4806,1026,4808,1024,4809,1024,4810,1023,4815,1019,4815,1017,4815,1016,4815,1014,4818,1007,4818,997,4819,991,4827,986,4834,980,4840,979,4842,978,4844,977,4845,977,4845,974,4847,975,4852,975,4858,972,4862,971,4863,970,4863,966,4864,965,4869,964,4874,964,4879,965,4888,962,4894,962,4896,961,4897,956,4907,947,4914,946,4915,946,4916,945,4931,945,4946,945,4948,944,4949,941,4951,940,4956,939,4957,938,4958,926,4967,926,4981,926,4989,925,4996,923,5004,919,5010,913,5019,912,5033,912,5035,911,5036,909,5043,910,5052,910,5059,905,5063,903,5064,902,5065,899,5068,895,5070,894,5071,894,5072,893,5074,893,5075,892,5076,892,5077,891,5090,891,5104,891,5105,892,5106,894,5111,893,5120,893,5122,894,5123,896,5127,896,5132,896,5135,897,5137,897,5138,897,5139,900,5149,908,5153,909,5153,909,5154,910,5160,910,5166,911,5173,909,5178,908,5179,907,5180,906,5182,905,5184,904,5186,903,5187,900,5188,898,5193,897,5194,897,5194,896,5214,896,5235,902,5235,907,5235,914,5235,920,5235,927,5236,932,5233,937,5231,942,5232,951,5233,955,5225,957,5220,962,5219,962,5213,962,5206,962,5199,964,5193,965,5191,965,5189,965,5188,966,5186,968,5181,974,5177,975,5177,975,5176,975,5171,977,5167,978,5165,978,5162,977,5157,981,5155,982,5155,982,5154,989,5150,994,5146,995,5145,995,5144,998,5137,997,5129,997,5126,998,5124,1001,5121,1005,5115,1007,5114,1008,5113,1011,5108,1010,5102,1009,5094,1014,5091,1016,5090,1017,5089,1018,5086,1021,5084,1025,5080,1025,5077,1026,5075,1026,5073,1027,5072,1027,5070,1026,5061,1031,5055,1032,5054,1033,5053,1035,5050,1038,5047,1041,5044,1041,5038,1041,5035,1041,5032,1042,5031,1042,5030,1042,5025,1045,5024,1051,5019,1054,5015,1055,5013,1057,5012,1058,5011,1058,5009,1059,5003,1059,4996,1059,4995,1060,4993,1061,4990,1065,4988,1078,4984,1076,4969,1075,4955,1081,4947,1082,4946,1082,4944,1083,4943,1084,4942,1086,4940,1087,4936,1087,4934,1088,4932,1091,4929,1090,4924,1089,4923,1088,4923,1085,4920,1084,4914,1084,4913,1083,4911,1083,4906,1083,4901,1083,4893,1081,4885,1081,4884,1080,4882,1079,4876,1071,4875,1068,4874,1064,4873,1063,4872,1062,4872,1060,4871,1059,4868,1058,4865,1058,4860,1060,4844,1048,4840,1047,4839,1046,4839,1042,4837,1043,4830,1043,4829,1042,4827,1039,4824,1039,4820,Q,1039,4819,1038,4818,Z]],label:"Ivana",shortLabel:"IA",labelPosition:[98.3,502],labelAlignment:[CEN,MID]},"PH.BN.UU":{outlines:[[M,1243,4900,Q,1238,4904,1231,4905,1228,4906,1226,4907,1224,4907,1222,4907,1215,4908,1212,4914,1212,4916,1210,4917,1209,4919,1208,4921,1207,4924,1204,4924,1196,4924,1189,4925,1183,4925,1180,4927,1179,4928,1177,4928,1154,4929,1132,4929,1130,4929,1129,4928,1126,4926,1122,4926,1109,4926,1096,4926,1094,4926,1092,4925,1091,4924,1090,4924,1091,4929,1088,4932,1087,4934,1087,4936,1086,4940,1084,4942,1083,4943,1082,4944,1082,4946,1081,4947,1075,4955,1076,4969,1078,4984,1065,4988,1061,4990,1060,4993,1059,4995,1059,4996,1059,5003,1058,5009,1058,5011,1057,5012,1055,5013,1054,5015,1051,5019,1045,5024,1042,5025,1042,5030,1042,5031,1041,5032,1041,5035,1041,5038,1041,5044,1038,5047,1035,5050,1033,5053,1032,5054,1031,5055,1026,5061,1027,5070,1027,5072,1026,5073,1026,5075,1025,5077,1025,5080,1021,5084,1018,5086,1017,5089,1016,5090,1014,5091,1009,5094,1010,5102,1011,5108,1008,5113,1007,5114,1005,5115,1001,5121,998,5124,997,5126,997,5129,998,5137,995,5144,995,5145,994,5146,989,5150,982,5154,982,5155,981,5155,977,5157,978,5162,978,5165,977,5167,975,5171,975,5176,975,5177,974,5177,968,5181,966,5186,965,5188,965,5189,965,5191,964,5193,962,5199,962,5206,962,5213,962,5219,964,5219,967,5219,969,5220,970,5220,977,5223,984,5226,986,5226,986,5227,989,5230,992,5232,994,5233,996,5234,999,5235,1002,5235,1032,5235,1061,5235,1091,5235,1120,5235,1125,5235,1130,5234,1138,5233,1140,5225,1140,5223,1141,5223,1146,5220,1152,5217,1154,5216,1155,5216,1162,5216,1163,5209,1164,5208,1164,5208,1178,5202,1182,5186,1183,5183,1185,5181,1191,5174,1199,5169,1200,5169,1200,5168,1202,5162,1204,5157,1205,5156,1206,5155,1207,5153,1209,5152,1216,5147,1217,5139,1217,5137,1218,5136,1219,5135,1220,5133,1222,5132,1223,5132,1225,5131,1227,5130,1229,5130,1230,5128,1235,5121,1241,5117,1242,5116,1242,5116,1253,5115,1263,5115,1270,5114,1273,5109,1274,5107,1274,5105,1275,5104,1276,5102,1276,5097,1276,5092,1276,5090,1276,5089,1273,5082,1272,5073,1272,5070,1271,5069,1266,5065,1267,5057,1268,5055,1268,5054,1270,5050,1276,5048,1277,5048,1277,5047,1279,5043,1280,5041,1282,5039,1286,5037,1291,5034,1296,5029,1297,5028,1297,5026,1296,5018,1301,5015,1302,5014,1303,5014,1305,5013,1307,5012,1310,5012,1311,5010,1313,5009,1314,5008,1316,5007,1316,5005,1318,4989,1318,4974,1319,4964,1316,4956,1316,4954,1314,4953,1313,4952,1312,4950,1311,4949,1311,4948,1309,4941,1307,4934,1307,4933,1307,4932,1306,4931,1306,4930,1305,4928,1304,4925,1301,4916,1291,4916,1284,4916,1279,4914,1275,4912,1274,4909,1272,4906,1268,4901,1267,4899,1265,4899,1259,4897,1253,4898,1249,4898,1246,4897,Q,1244,4899,1243,4900,Z]],label:"Uyugan",shortLabel:"UU",labelPosition:[114,508.8],labelAlignment:[CEN,MID]},"PH.BN.SB":{outlines:[[M,162,5409,Q,162,5410,162,5411,161,5431,161,5451,161,5453,162,5453,164,5454,163,5458,163,5459,163,5460,166,5463,170,5466,171,5467,171,5467,174,5469,176,5470,178,5471,178,5473,180,5485,180,5498,180,5501,179,5505,177,5515,185,5521,186,5522,186,5523,190,5526,195,5525,197,5525,198,5526,203,5527,205,5530,206,5532,206,5533,206,5539,208,5542,209,5543,209,5543,211,5552,220,5550,227,5548,233,5546,235,5546,237,5545,240,5544,244,5543,245,5543,245,5541,247,5535,246,5528,245,5519,254,5518,258,5517,262,5516,266,5516,267,5513,267,5512,268,5511,270,5509,272,5508,275,5507,277,5506,280,5505,280,5502,282,5494,282,5484,282,5483,283,5482,286,5479,287,5476,290,5468,289,5459,289,5456,289,5453,291,5448,292,5446,294,5443,297,5441,301,5440,304,5436,306,5434,306,5432,307,5418,307,5404,307,5399,308,5394,309,5384,302,5378,301,5376,299,5375,295,5372,295,5364,296,5360,296,5355,297,5346,292,5342,291,5340,288,5339,284,5338,280,5338,279,5338,277,5338,270,5338,269,5333,269,5330,268,5327,268,5326,267,5325,266,5324,265,5323,255,5322,244,5322,231,5323,220,5319,219,5319,218,5319,202,5318,186,5318,186,5325,186,5327,186,5329,183,5330,181,5330,179,5333,177,5337,173,5337,172,5338,171,5338,170,5339,168,5340,163,5343,163,5350,Q,163,5380,162,5409,Z],[M,67,5298,Q,64,5298,61,5299,59,5300,57,5300,53,5301,50,5303,50,5304,49,5304,47,5305,46,5306,43,5308,41,5312,40,5313,41,5315,43,5320,43,5327,44,5330,44,5333,45,5337,45,5343,L,45,5344,Q,46,5344,47,5345,49,5347,54,5349,55,5350,56,5350,63,5353,71,5357,72,5358,72,5358,75,5359,77,5359,79,5360,80,5361,83,5366,92,5363,94,5363,96,5363,103,5362,111,5362,118,5362,118,5354,118,5346,117,5338,117,5335,116,5330,115,5328,115,5325,114,5322,111,5320,107,5318,103,5317,100,5317,97,5316,93,5315,92,5312,92,5311,91,5310,89,5308,89,5305,88,5303,88,5302,88,5297,86,5296,79,5293,71,5296,Q,69,5297,67,5298,Z],[M,573,5250,Q,564,5251,559,5244,558,5244,558,5243,557,5239,555,5238,554,5237,553,5236,549,5231,544,5230,537,5228,532,5224,532,5224,531,5223,524,5220,517,5215,516,5214,514,5212,513,5211,512,5210,511,5208,509,5207,509,5206,508,5205,500,5196,496,5187,490,5174,474,5177,472,5177,471,5178,469,5179,468,5180,467,5182,466,5183,464,5184,464,5186,463,5188,462,5190,456,5196,447,5194,447,5210,446,5225,446,5226,446,5228,446,5234,443,5240,443,5241,442,5241,441,5243,440,5245,438,5247,437,5249,434,5253,434,5260,434,5274,430,5287,429,5289,429,5290,428,5300,428,5310,427,5324,425,5337,420,5344,421,5354,422,5365,420,5374,420,5376,419,5376,416,5380,413,5382,412,5384,411,5386,407,5394,408,5403,408,5425,408,5448,407,5457,410,5465,411,5466,410,5466,410,5474,416,5477,417,5477,418,5478,421,5482,425,5486,427,5487,427,5488,428,5504,432,5518,433,5519,433,5520,440,5522,445,5527,447,5529,447,5530,449,5543,446,5555,446,5558,446,5560,445,5572,442,5584,440,5592,435,5598,434,5599,433,5600,430,5602,430,5606,430,5618,430,5631,430,5634,430,5638,431,5639,431,5641,431,5650,433,5658,434,5660,436,5662,440,5666,445,5672,448,5676,449,5683,450,5685,450,5686,453,5690,452,5698,452,5705,452,5711,453,5712,453,5713,453,5721,457,5726,459,5728,460,5729,468,5733,467,5743,467,5747,467,5750,469,5757,475,5759,477,5759,479,5759,486,5760,487,5765,487,5767,487,5768,488,5771,488,5774,489,5778,494,5778,498,5778,499,5780,501,5782,501,5784,503,5792,509,5795,511,5795,512,5796,515,5797,517,5798,519,5799,519,5799,523,5806,524,5814,524,5816,524,5817,528,5823,537,5823,559,5824,581,5824,581,5820,580,5816,578,5811,583,5811,588,5811,593,5809,595,5808,598,5808,601,5807,604,5806,606,5806,608,5804,610,5804,610,5803,611,5800,611,5797,611,5794,611,5790,610,5789,610,5787,609,5783,606,5781,605,5781,604,5780,604,5780,603,5779,600,5777,598,5775,597,5774,596,5772,595,5771,593,5770,592,5769,592,5767,591,5756,591,5745,591,5738,590,5732,589,5722,594,5718,600,5713,603,5708,604,5703,608,5702,613,5700,618,5698,620,5697,620,5695,623,5691,628,5689,629,5689,630,5688,637,5687,636,5679,636,5678,637,5676,640,5670,650,5671,660,5673,665,5667,666,5667,667,5666,674,5664,680,5663,682,5662,683,5662,687,5659,692,5658,699,5655,705,5652,709,5651,710,5649,711,5648,711,5647,710,5637,715,5632,717,5630,718,5627,720,5621,722,5615,723,5614,724,5613,727,5610,729,5609,732,5608,733,5605,736,5597,735,5585,735,5582,735,5578,733,5571,733,5563,733,5554,732,5545,731,5543,731,5542,730,5531,730,5520,730,5490,730,5461,730,5458,729,5456,728,5452,729,5444,729,5443,728,5441,728,5440,728,5439,727,5432,723,5426,723,5425,723,5424,722,5417,715,5412,709,5407,707,5401,707,5399,706,5397,705,5395,702,5392,699,5389,699,5385,698,5379,693,5372,692,5371,690,5370,686,5369,682,5368,680,5368,679,5366,677,5363,675,5360,675,5359,674,5357,672,5351,672,5345,673,5336,667,5330,665,5329,663,5329,657,5329,653,5326,648,5322,646,5315,646,5314,645,5313,645,5304,636,5300,635,5300,633,5299,626,5298,622,5291,619,5287,617,5284,615,5279,609,5277,607,5276,605,5275,604,5275,602,5273,599,5270,598,5266,597,5262,594,5258,593,5256,591,5255,586,5252,578,5251,Q,575,5250,573,5250,Z]],label:"Sabtang",shortLabel:"SB",labelPosition:[56.8,550],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"batanes",type:"maps"}}})});