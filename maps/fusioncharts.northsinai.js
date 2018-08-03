(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=264)})({264:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(265);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},265:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.NorthSinai.18.08-10-2012 01:12:12
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NorthSinai",revision:18,standaloneInit:true,baseWidth:770,baseHeight:594,baseScaleFactor:10,entities:{"01":{outlines:[[M,5859,874,Q,5835,817,5830,789,5801,708,5792,677,5784,645,5764,606,5743,566,5733,528,5723,489,5687,393,5650,296,5639,271,5627,247,5625,241,5615,215,5614,198,5613,189,5604,178,5605,163,5601,158,5592,148,5582,119,5572,91,5560,79,5547,66,5530,36,5528,34,5489,34,5457,34,5453,37,5446,48,5428,62,5393,86,5374,101,5344,127,5318,146,5266,167,5262,184,5260,185,5258,185,5227,190,5221,202,5220,205,5190,221,5179,227,5148,236,5142,238,5133,247,5126,254,5113,253,5104,253,5100,256,5096,260,5092,262,5074,261,5070,264,5052,275,5043,286,5038,292,5024,296,5011,300,5006,307,5002,313,4986,317,4971,320,4968,326,4965,333,4956,337,4944,341,4936,350,4932,356,4915,357,4898,358,4894,362,4887,371,4877,371,4863,378,4858,381,4848,386,4827,382,4812,380,4803,384,4794,389,4792,389,4767,386,4746,394,4716,405,4698,408,4691,409,4688,413,4686,418,4683,418,4665,417,4659,420,4654,423,4637,425,4626,426,4626,437,4603,433,4597,455,4569,457,4501,501,4477,501,4466,502,4447,502,4439,510,4437,512,4409,516,4386,520,4389,530,L,4353,530,Q,4341,542,4333,542,4317,544,4305,552,4293,559,4279,560,4246,570,4222,569,4214,577,4201,578,4169,582,4167,584,4160,591,4140,592,4123,603,4110,603,4104,603,4087,613,4080,617,4069,615,4060,614,4057,617,4053,624,4046,624,4030,623,4011,623,3999,623,3992,629,3984,634,3978,634,3938,635,3921,635,3911,635,3901,637,3890,638,3884,642,3878,645,3850,644,3823,642,3817,644,3811,645,3807,649,3802,652,3799,652,L,3665,652,Q,3514,652,3442,651,3443,643,3420,644,3393,645,3386,644,3383,632,3363,633,3340,635,3332,634,L,3332,624,3246,624,3247,605,Q,3247,594,3232,597,3234,587,3228,577,3220,565,3210,570,3210,563,3208,561,3207,562,3205,562,3204,564,3197,567,3192,570,3192,577,3203,577,3203,583,3203,587,3201,592,3216,593,3216,595,L,3216,605,Q,3207,604,3194,607,3182,602,3176,603,3169,603,3166,604,L,3150,602,3150,610,3138,610,Q,3138,614,3141,622,3162,623,3165,628,3169,634,3177,635,3186,635,3188,638,3197,650,3217,650,3228,649,3252,646,3291,643,3313,653,3343,655,3379,673,3386,675,3465,675,3489,675,3498,680,3499,681,3514,681,3526,682,3528,686,3532,695,3549,695,3556,695,3588,702,L,3639,702,Q,3647,702,3651,708,3655,714,3664,714,L,3664,721,3651,721,3651,731,3636,731,3619,729,Q,3618,734,3596,733,3575,732,3573,745,L,3552,745,3552,753,3532,753,Q,3512,751,3505,751,L,3502,729,3519,729,3519,721,3510,721,3510,712,3489,712,Q,3479,715,3460,715,3407,715,3339,712,L,3316,712,3316,719,3301,719,3301,730,3312,730,3312,738,3325,738,3325,751,3306,751,3306,763,Q,3267,758,3246,758,3207,756,3210,775,L,3174,775,Q,3166,763,3156,763,L,3156,751,3135,751,Q,3136,746,3133,745,3129,744,3129,743,L,3123,745,3110,745,Q,3107,733,3089,733,3067,733,3069,742,L,3028,742,3028,751,Q,3016,751,3010,754,3002,758,2991,760,L,2991,770,2979,770,2979,782,2964,782,Q,2965,779,2958,776,L,2958,754,Q,2961,754,2966,753,L,2966,719,2934,719,Q,2931,723,2930,750,2930,769,2915,765,L,2916,787,2907,787,Q,2907,794,2903,803,2903,809,2915,814,L,2915,827,2899,827,2899,838,Q,2881,838,2871,841,L,2868,827,2848,827,2848,817,2833,817,Q,2832,819,2832,826,L,2817,826,2817,841,Q,2774,839,2764,844,L,2755,844,Q,2754,836,2752,832,L,2752,811,Q,2757,811,2764,809,L,2764,794,Q,2762,790,2754,790,2734,796,2718,796,2710,796,2711,784,2701,782,2699,782,L,2699,755,Q,2681,748,2673,745,L,2674,753,2643,753,2643,764,2618,764,2617,773,2599,773,2599,785,Q,2602,788,2602,792,L,2583,792,Q,2580,787,2580,781,L,2565,781,Q,2563,772,2555,772,L,2548,772,2548,781,Q,2531,783,2494,796,2461,808,2443,808,L,2443,819,2439,827,Q,2446,827,2448,832,2449,838,2472,838,2473,849,2475,851,L,2475,863,2422,863,Q,2421,860,2421,854,L,2403,854,Q,2398,862,2380,862,2360,862,2355,865,2322,881,2301,883,L,2301,892,Q,2288,891,2284,892,2276,893,2277,902,L,2235,902,2235,890,2223,890,2223,875,2208,875,Q,2207,868,2207,864,2207,861,2214,857,2221,853,2217,847,2221,847,2229,845,L,2229,826,Q,2229,823,2235,814,2242,802,2251,802,L,2251,783,Q,2247,778,2221,767,2198,757,2193,746,2177,744,2173,744,2173,732,2172,725,L,2172,715,Q,2184,715,2197,710,L,2197,700,Q,2186,701,2180,701,2169,700,2165,690,2136,688,2124,688,L,2124,681,Q,2130,672,2136,674,L,2136,664,Q,2131,651,2127,646,2113,646,2110,639,L,2129,638,Q,2130,619,2132,615,2136,607,2153,610,2148,602,2164,597,2173,595,2185,592,L,2185,574,Q,2178,572,2176,572,2179,561,2172,552,2162,544,2160,541,2159,540,2153,536,2149,534,2149,527,2149,527,2137,513,L,2137,498,Q,2127,498,2125,494,2124,493,2124,483,2124,474,2134,469,L,2134,449,2112,449,Q,2100,461,2097,463,2090,467,2079,481,2075,483,2072,484,2066,488,2064,494,2063,499,2058,500,2050,502,2047,505,2040,511,2021,518,2003,524,1998,527,1986,529,1977,532,1968,544,1961,544,1936,544,1920,561,1899,583,1890,587,1891,598,1883,601,1875,604,1876,613,L,1863,613,Q,1859,632,1851,628,1850,633,1846,642,1838,639,1835,649,1831,659,1821,658,1828,674,1807,678,1785,683,1785,693,L,1764,693,Q,1760,693,1756,698,1752,704,1747,706,L,1724,706,Q,1722,718,1712,718,1698,717,1690,718,L,1690,731,Q,1693,734,1704,738,1705,738,1707,740,1713,740,1720,745,1726,745,1752,736,1767,736,1795,733,1804,733,1834,740,1854,741,1857,746,1860,749,1871,749,1884,749,1883,725,1882,701,1899,703,L,1899,691,Q,1915,690,1920,680,1923,680,1934,680,1944,679,1946,672,L,2001,672,2001,685,2042,685,Q,2047,684,2058,684,L,2058,703,Q,2050,701,2046,701,L,2046,714,Q,2040,714,2038,715,L,2023,715,Q,2022,707,2020,703,L,1998,703,Q,1992,715,1984,712,L,1984,731,Q,1973,729,1973,740,1973,745,1976,745,1981,745,1984,749,L,1984,760,1974,760,1974,772,Q,1966,772,1961,773,L,1954,773,Q,1953,770,1953,763,L,1930,763,Q,1913,774,1907,772,1910,784,1894,784,1879,784,1883,799,1880,798,1866,805,1854,811,1854,819,1854,833,1859,836,1863,840,1880,836,L,1880,854,1871,854,1871,863,Q,1854,866,1850,866,1713,860,1682,853,1681,844,1680,842,L,1689,842,1689,833,Q,1712,833,1722,831,L,1722,790,Q,1727,793,1730,790,1731,789,1734,785,L,1734,761,1707,761,1707,754,1696,753,Q,1686,751,1687,746,L,1662,746,Q,1659,736,1659,730,1636,727,1635,727,1630,722,1617,721,L,1617,714,1585,714,1584,703,1572,703,1572,714,1556,714,Q,1559,725,1559,727,L,1572,727,Q,1572,730,1573,736,1618,736,1618,742,1621,742,1624,741,1624,749,1632,751,L,1632,768,Q,1620,770,1615,770,L,1615,763,1596,763,Q,1596,766,1595,772,L,1581,772,Q,1581,781,1566,785,1559,785,1556,773,1554,760,1544,760,1522,768,1507,768,1504,758,1503,756,1502,755,1492,755,1484,755,1483,758,1482,762,1473,765,L,1466,765,Q,1464,758,1464,755,L,1393,755,Q,1389,760,1372,768,1355,776,1353,782,L,1323,782,1323,790,Q,1307,789,1301,789,1290,790,1293,803,1267,806,1266,807,1262,811,1253,811,1243,811,1242,812,1226,818,1219,822,1206,828,1209,841,1200,841,1196,848,1192,852,1192,855,1181,849,1173,862,1166,875,1152,868,1152,880,1150,886,1145,885,1140,885,1131,885,1131,895,L,1062,895,Q,1059,891,1059,884,L,1026,884,1026,892,1008,892,Q,1008,894,1006,902,L,993,902,Q,993,910,992,914,L,972,914,Q,971,922,923,922,885,922,870,921,L,870,911,Q,876,909,883,909,879,893,897,894,L,897,870,859,870,Q,858,871,855,883,L,809,883,Q,809,874,807,871,L,807,856,867,856,Q,871,855,874,849,876,843,883,844,L,914,844,Q,913,828,945,828,963,829,1e3,831,L,1008,824,Q,1024,824,1037,818,1049,812,1065,812,1064,804,1073,803,1078,802,1092,802,1092,790,1107,790,1116,790,1135,792,1145,792,1155,784,1162,779,1177,782,1176,772,1184,770,1188,769,1207,769,L,1207,761,Q,1219,764,1231,751,1236,747,1252,745,1258,741,1272,738,1281,729,1296,731,1290,722,1297,720,1302,719,1311,721,1313,716,1314,714,L,1332,714,Q,1336,714,1338,708,1339,703,1344,703,1355,702,1369,692,1374,691,1398,680,1413,673,1432,677,1430,664,1446,664,1452,664,1464,655,1473,651,1500,643,1503,642,1506,637,1508,633,1515,632,1524,631,1536,625,1556,625,1576,607,1581,602,1597,602,1606,595,1615,595,1629,595,1630,582,1634,579,1650,580,1667,573,1743,556,1737,537,1767,542,1764,525,1785,530,L,1785,519,1807,519,Q,1806,512,1821,511,1818,503,1826,502,1831,501,1842,502,1838,487,1854,491,1855,488,1855,481,1865,480,1877,470,1886,461,1900,463,1900,457,1906,456,1909,456,1917,456,1917,445,1931,443,1945,441,1945,434,L,1968,433,Q,1964,420,1990,420,2e3,420,2005,417,2011,413,2025,413,2040,413,2053,401,2058,401,2072,402,2083,402,2083,393,L,2092,393,2092,379,Q,2086,379,2080,374,L,2080,355,2094,355,2094,349,2112,349,2113,342,Q,2132,345,2157,339,2181,332,2189,332,L,2319,335,Q,2370,335,2380,343,2397,344,2426,349,2450,353,2467,352,2484,351,2499,361,2506,365,2541,367,2576,368,2600,377,2623,386,2624,386,2640,386,2640,388,2646,396,2652,396,2673,397,2679,408,2685,410,2716,407,2742,404,2751,413,2755,418,2776,423,2796,427,2800,431,2808,438,2823,442,2826,444,2838,445,2848,445,2851,448,2863,460,2876,464,2884,467,2901,478,2921,482,2924,486,2934,487,2953,490,2960,495,2973,505,2987,513,3012,510,L,3078,510,Q,3077,519,3094,524,3111,530,3111,541,L,3124,541,3124,550,3139,551,3139,565,3168,565,3168,564,3168,547,Q,3160,544,3158,544,L,3158,534,3132,533,Q,3130,520,3100,515,3098,506,3086,499,3066,488,3063,486,3061,485,3046,483,3036,483,3037,472,L,3002,472,Q,3001,461,2985,461,2967,462,2961,460,2960,448,2947,448,L,2916,448,Q,2909,447,2895,439,2883,431,2873,431,2865,431,2861,426,2856,420,2854,420,2835,422,2829,421,L,2829,410,Q,2791,416,2794,400,2752,396,2730,397,L,2730,386,Q,2701,386,2689,385,2682,374,2681,374,L,2661,374,2661,362,Q,2621,367,2618,353,2617,353,2580,353,2559,352,2554,345,2551,340,2526,341,2503,342,2503,331,2501,331,2499,330,L,2451,331,Q,2437,333,2430,327,2422,321,2416,320,L,2313,320,Q,2311,314,2311,308,L,2245,308,Q,2236,315,2162,316,2098,317,2108,328,2088,327,2065,349,2035,366,2026,381,2001,382,2004,393,L,1989,393,1989,398,Q,1975,394,1973,400,1970,410,1953,410,1927,412,1933,432,1922,431,1915,435,1904,441,1902,442,1892,442,1887,443,1878,444,1881,455,L,1863,455,1863,464,1842,464,1842,470,1826,470,1826,480,1807,480,1807,490,1794,490,1794,505,1773,505,1773,515,Q,1756,512,1743,521,1727,531,1717,532,1710,533,1706,538,1703,541,1692,541,1669,539,1671,553,1656,551,1644,562,1641,564,1627,563,1617,563,1620,571,L,1599,571,1599,581,Q,1587,576,1577,585,1565,595,1559,595,1553,594,1550,599,1546,604,1539,602,1522,600,1524,613,L,1503,613,1503,622,1485,622,Q,1487,632,1475,633,1461,633,1458,634,L,1458,641,Q,1444,641,1439,642,1432,643,1430,655,1387,664,1383,670,1368,663,1363,672,1357,683,1345,683,1331,691,1323,689,1317,688,1312,693,1306,698,1303,699,1297,701,1297,707,1298,710,1295,712,1294,712,1291,712,1276,718,1267,718,1251,718,1248,730,1246,738,1227,731,1227,740,1219,740,1207,740,1203,748,1201,750,1184,751,1170,752,1174,761,L,1147,761,Q,1144,761,1141,767,1138,770,1134,772,1133,772,1131,772,L,1107,772,Q,1099,772,1094,776,1090,779,1083,779,1073,779,1058,787,1044,794,1035,793,1022,792,1012,797,1002,803,991,802,982,801,978,805,970,812,969,813,951,813,940,814,879,829,842,833,830,834,822,840,815,845,802,844,790,843,779,845,768,848,752,849,749,849,747,849,672,848,648,847,644,846,636,839,630,832,618,835,L,540,835,Q,535,835,530,829,525,823,517,823,504,823,487,816,470,808,462,808,460,787,434,790,L,434,785,Q,429,786,417,823,L,413,824,Q,405,839,402,845,397,853,385,876,372,900,367,909,361,918,337,950,330,963,305,1016,289,1036,266,1083,243,1129,231,1144,219,1159,182,1228,168,1255,147,1284,126,1312,112,1351,98,1390,77,1412,57,1434,27,1497,23,1501,23,1511,22,1523,43,1559,64,1594,76,1616,89,1637,105,1677,121,1716,138,1736,150,1752,201,1844,211,1862,227,1901,242,1938,256,1962,332,2089,499,2428,L,502,2426,Q,514,2446,545,2487,576,2528,591,2560,606,2591,663,2670,700,2721,743,2795,786,2870,807,2909,812,2919,834,2969,855,3019,866,3039,876,3059,886,3087,895,3115,907,3135,919,3156,922,3168,928,3194,953,3238,979,3284,985,3304,1018,3416,1044,3436,1054,3454,1061,3472,1080,3519,1096,3567,1112,3614,1139,3655,1165,3696,1194,3787,1222,3877,1253,3929,1284,3981,1316,4068,1347,4154,1359,4178,1377,4213,1414,4315,1441,4391,1474,4430,1526,4439,1713,4482,1875,4520,1973,4538,2071,4557,2153,4572,2234,4587,2303,4600,2372,4613,2477,4647,2561,4674,2618,4680,2731,4692,2906,4739,3080,4785,3199,4803,3317,4820,3503,4874,3688,4927,3696,4929,3853,4972,4326,5111,4737,5232,4971,5293,5006,5302,5050,5330,5094,5358,5177,5384,5259,5410,5344,5453,5429,5496,5539,5537,5648,5578,5751,5624,5854,5670,5878,5682,5902,5693,6022,5736,6122,5772,6168,5799,6206,5803,6222,5810,6231,5814,6243,5824,6260,5833,6295,5846,6347,5865,6445,5860,6480,5858,6521,5864,6569,5870,6591,5871,6596,5871,6681,5870,6732,5869,6759,5875,6785,5880,6847,5882,6879,5882,6927,5883,6973,5885,7069,5891,L,7220,5891,Q,7232,5891,7249,5897,7267,5903,7279,5903,L,7344,5903,7344,5895,7354,5895,7354,5883,7362,5883,7362,5866,7370,5866,7371,5852,Q,7371,5844,7370,5843,7367,5842,7362,5839,L,7362,5828,Q,7382,5828,7383,5827,7394,5824,7391,5812,L,7391,5790,Q,7390,5788,7395,5785,7400,5781,7398,5775,7407,5779,7412,5766,L,7431,5766,7431,5749,7426,5744,Q,7426,5725,7449,5731,7450,5725,7469,5725,7473,5725,7473,5719,7473,5713,7479,5711,7485,5709,7495,5700,7498,5697,7497,5680,7508,5679,7508,5665,7506,5646,7507,5639,7507,5621,7509,5614,7516,5610,7517,5606,7518,5603,7524,5602,7538,5606,7542,5595,7548,5590,7551,5581,7547,5573,7554,5572,7558,5571,7566,5572,7570,5560,7597,5563,7594,5552,7610,5554,7615,5554,7616,5551,7618,5543,7618,5543,7621,5536,7665,5536,L,7665,5522,Q,7651,5516,7654,5500,7646,5499,7641,5491,7634,5478,7633,5477,L,7633,5475,Q,7611,5445,7611,5436,7606,5429,7605,5424,7606,5414,7604,5410,7595,5394,7596,5389,7596,5381,7590,5375,7585,5369,7585,5361,L,7585,5311,Q,7578,5307,7577,5304,7576,5300,7576,5276,L,7576,5260,Q,7576,5257,7584,5248,L,7584,5233,Q,7589,5229,7591,5224,7590,5203,7594,5184,L,7594,5147,Q,7593,5127,7594,5122,7594,5117,7584,5104,L,7584,5089,Q,7575,5089,7569,5078,7565,5075,7563,5073,7558,5068,7561,5064,7554,5065,7552,5052,7544,5043,7543,5039,7533,5030,7533,5026,7533,5010,7526,5009,7520,4934,7515,4921,L,7515,4848,Q,7515,4818,7513,4813,7503,4792,7503,4788,7504,4783,7499,4779,7495,4775,7495,4774,L,7492,4760,Q,7486,4756,7484,4749,7481,4741,7478,4738,7473,4733,7472,4724,7472,4714,7471,4709,7463,4697,7458,4686,7450,4675,7450,4673,7452,4660,7450,4653,7438,4640,7434,4630,7433,4619,7432,4616,7425,4609,7425,4607,L,7416,4582,Q,7415,4574,7414,4569,7412,4562,7406,4558,7399,4553,7399,4545,7397,4533,7397,4532,7368,4467,7343,4431,L,7343,4417,Q,7335,4409,7323,4383,7312,4359,7308,4350,7297,4325,7291,4310,7283,4285,7280,4277,7277,4252,7269,4239,7263,4230,7263,4223,7250,4205,7250,4204,7243,4174,7234,4163,7235,4146,7230,4141,7222,4134,7222,4123,7221,4113,7215,4107,L,7212,4086,Q,7206,4075,7204,4067,7199,4046,7199,4045,7196,4041,7193,4021,7191,4005,7184,4002,7187,3990,7179,3978,7171,3965,7172,3958,7172,3951,7169,3947,7164,3942,7163,3941,7156,3926,7152,3925,7148,3913,7138,3888,7127,3864,7116,3827,7104,3790,7092,3778,7073,3732,7064,3714,7054,3695,7041,3664,7028,3632,6971,3511,6914,3390,6914,3388,6904,3344,6863,3260,6821,3174,6811,3121,6790,3062,6783,3046,6767,2998,6764,2985,6764,2956,6736,2935,6712,2914,6702,2903,6680,2888,6674,2887,6668,2885,6653,2874,6638,2863,6630,2861,6613,2850,6603,2843,6592,2834,6584,2831,6552,2818,6540,2806,6532,2798,6533,2785,6533,2779,6529,2773,6523,2766,6523,2765,6522,2707,6522,2704,L,6522,2653,Q,6524,2651,6530,2649,6534,2647,6533,2638,L,6533,2614,Q,6548,2616,6551,2605,6551,2590,6553,2584,6555,2564,6559,2561,6562,2559,6562,2543,6562,2528,6534,2502,6501,2472,6501,2472,6485,2448,6472,2436,6452,2417,6444,2404,6448,2288,6448,2269,6450,2239,6449,2236,6446,2228,6438,2203,6427,2162,6420,2143,6410,2131,6409,2117,6409,2087,6406,2085,6401,2081,6399,2073,6397,2061,6396,2058,6392,2052,6387,2036,6387,2034,6386,2032,6375,1969,6334,1904,6316,1868,6300,1848,6283,1824,6282,1820,L,6271,1789,Q,6252,1768,6222,1711,6213,1681,6205,1667,6192,1645,6187,1637,6186,1635,6185,1633,6097,1476,6075,1425,6052,1373,6026,1328,6001,1282,5998,1258,5994,1235,5988,1226,5979,1213,5965,1171,L,5950,1128,Q,5949,1111,5946,1104,5930,1081,5925,1065,5900,1010,5890,977,Z]],label:"North Sinai",shortLabel:"NS",labelPosition:[405.8,296.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"northsinai",type:"maps"}}})});