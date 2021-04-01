const obj1 = [
  -0.2641, 0.1466, -0.8185, -0.2632, 0.1463, -0.8196, -0.2603, 0.1456, -0.8195, -0.2575, 0.1449, -0.8193, -0.2548, 0.1440, -0.8189, -0.2521, 0.1431, -0.8180, -0.2497, 0.1421, -0.8161, -0.2479, 0.1407, -0.8128, -0.2470, 0.1391, -0.8089, -0.2469, 0.1377, -0.8054, -0.2472, 0.1363, -0.8020, -0.2476, 0.1347, -0.7981, -0.2482, 0.1327, -0.7936, -0.2491, 0.1302, -0.7884, -0.2501, 0.1274, -0.7824, -0.2514, 0.1244, -0.7756, -0.2529, 0.1214, -0.7679, -0.2549, 0.1184, -0.7596, -0.2571, 0.1156, -0.7508, -0.2595, 0.1128, -0.7415, -0.2620, 0.1099, -0.7317, -0.2646, 0.1069, -0.7215, -0.2673, 0.1037, -0.7110, -0.2699, 0.1002, -0.7004, -0.2725, 0.0962, -0.6899, -0.2752, 0.0918, -0.6795, -0.2779, 0.0873, -0.6694, -0.2807, 0.0826, -0.6595, -0.2836, 0.0778, -0.6499, -0.2867, 0.0728, -0.6405, -0.2898, 0.0674, -0.6314, -0.2930, 0.0618, -0.6226, -0.2962, 0.0563, -0.6148, -0.2994, 0.0513, -0.6085, -0.3025, 0.0468, -0.6034, -0.3055, 0.0429, -0.5996, -0.3080, 0.0393, -0.5970, -0.3099, 0.0359, -0.5955, -0.3111, 0.0325, -0.5949, -0.3117, 0.0289, -0.5950, -0.3120, 0.0251, -0.5958, -0.3118, 0.0212, -0.5970, -0.3112, 0.0173, -0.5986, -0.3100, 0.0139, -0.6007, -0.3081, 0.0106, -0.6031, -0.3053, 0.0069, -0.6058, -0.3009, 0.0024, -0.6091, -0.2948, -0.0028, -0.6136, -0.2873, -0.0080, -0.6189, -0.2786, -0.0117, -0.6254, -0.2682, -0.0129, -0.6339, -0.2570, -0.0113, -0.6437, -0.2455, -0.0067, -0.6548, -0.2335, 0.0004, -0.6674, -0.2214, 0.0084, -0.6808, -0.2101, 0.0164, -0.6939, -0.1998, 0.0252, -0.7064, -0.1906, 0.0339, -0.7176, -0.1831, 0.0417, -0.7261, -0.1777, 0.0488, -0.7315, -0.1738, 0.0549, -0.7345, -0.1711, 0.0596, -0.7356, -0.1699, 0.0621, -0.7345, -0.1699, 0.0627, -0.7326, -0.1703, 0.0629, -0.7291, -0.1714, 0.0626, -0.7226, -0.1738, 0.0610, -0.7140, -0.1772, 0.0581, -0.7042, -0.1816, 0.0542, -0.6936, -0.1866, 0.0492, -0.6826, -0.1925, 0.0426, -0.6712, -0.1988, 0.0346, -0.6596, -0.2051, 0.0255, -0.6486, -0.2110, 0.0152, -0.6388, -0.2165, 0.0044, -0.6301, -0.2209, -0.0060, -0.6226, -0.2234, -0.0152, -0.6172, -0.2220, -0.0218, -0.6156, -0.2152, -0.0234, -0.6191, -0.2035, -0.0202, -0.6260, -0.1919, -0.0132, -0.6327, -0.1809, -0.0050, -0.6385, -0.1697, 0.0036, -0.6446, -0.1583, 0.0127, -0.6510, -0.1472, 0.0221, -0.6573, -0.1369, 0.0311, -0.6631, -0.1277, 0.0398, -0.6681, -0.1194, 0.0477, -0.6724, -0.1126, 0.0546, -0.6758, -0.1071, 0.0604, -0.6782, -0.1017, 0.0656, -0.6781, -0.0960, 0.0699, -0.6720, -0.0940, 0.0706, -0.6611, -0.0947, 0.0692, -0.6479, -0.0963, 0.0673, -0.6332, -0.0987, 0.0648, -0.6167, -0.1024, 0.0612, -0.5973, -0.1068, 0.0570, -0.5774, -0.1120, 0.0522, -0.5573, -0.1185, 0.0466, -0.5361, -0.1254, 0.0411, -0.5154, -0.1328, 0.0358, -0.4952, -0.1414, 0.0304, -0.4752, -0.1504, 0.0248, -0.4560, -0.1594, 0.0188, -0.4378, -0.1685, 0.0123, -0.4204, -0.1776, 0.0054, -0.4040, -0.1861, -0.0014, -0.3895, -0.1933, -0.0071, -0.3774, -0.1989, -0.0121, -0.3674, -0.2026, -0.0169, -0.3593, -0.2041, -0.0215, -0.3536, -0.2026, -0.0253, -0.3512, -0.1977, -0.0273, -0.3528, -0.1905, -0.0264, -0.3578, -0.1810, -0.0226, -0.3657, -0.1695, -0.0159, -0.3758, -0.1581, -0.0078, -0.3863, -0.1478, 0.0006, -0.3958, -0.1386, 0.0092, -0.4042, -0.1311, 0.0166, -0.4106, -0.1256, 0.0220, -0.4140, -0.1228, 0.0253, -0.4139, -0.1210, 0.0278, -0.4124, -0.1204, 0.0293, -0.4094, -0.1212, 0.0302, -0.4033, -0.1229, 0.0306, -0.3938, -0.1256, 0.0294, -0.3828, -0.1296, 0.0262, -0.3703, -0.1347, 0.0214, -0.3569, -0.1407, 0.0152, -0.3433, -0.1469, 0.0081, -0.3306, -0.1526, 0.0008, -0.3195, -0.1577, -0.0063, -0.3105, -0.1615, -0.0129, -0.3038, -0.1634, -0.0183, -0.3000, -0.1629, -0.0209, -0.2997, -0.1624, -0.0228, -0.3010, -0.1563, -0.0211, -0.3075, -0.1478, -0.0157, -0.3167, -0.1380, -0.0079, -0.3272, -0.1275, 0.0012, -0.3388, -0.1167, 0.0113, -0.3515, -0.1066, 0.0216, -0.3635, -0.0981, 0.0314, -0.3734, -0.0907, 0.0406, -0.3807, -0.0840, 0.0489, -0.3852, -0.0778, 0.0566, -0.3866, -0.0722, 0.0641, -0.3839, -0.0677, 0.0706, -0.3775, -0.0644, 0.0754, -0.3680, -0.0624, 0.0778, -0.3554, -0.0617, 0.0777, -0.3405, -0.0625, 0.0759, -0.3242, -0.0646, 0.0734, -0.3072, -0.0680, 0.0703, -0.2893, -0.0728, 0.0660, -0.2704, -0.0787, 0.0605, -0.2510, -0.0857, 0.0535, -0.2314, -0.0939, 0.0453, -0.2119, -0.1025, 0.0371, -0.1934, -0.1113, 0.0297, -0.1762, -0.1222, 0.0220, -0.1573, -0.1341, 0.0132, -0.1369, -0.1422, 0.0049, -0.1218, -0.1465, -0.0029, -0.1115, -0.1472, -0.0103, -0.1043, -0.1424, -0.0159, -0.1018, -0.1343, -0.0183, -0.1030, -0.1233, -0.0168, -0.1076, -0.1080, -0.0110, -0.1168, -0.0913, -0.0035, -0.1274, -0.0752, 0.0039, -0.1373, -0.0602, 0.0107, -0.1460, -0.0468, 0.0163, -0.1522, -0.0354, 0.0206, -0.1554, -0.0258, 0.0235, -0.1559, -0.0178, 0.0253, -0.1539, -0.0119, 0.0258, -0.1493, -0.0074, 0.0253, -0.1419, -0.0039, 0.0237, -0.1314, -0.0017, 0.0203, -0.1181, -0.0008, 0.0153, -0.1029, -0.0013, 0.0088, -0.0866, -0.0029, 0.0011, -0.0696, -0.0052, -0.0074, -0.0526, -0.0076, -0.0158, -0.0364, -0.0100, -0.0241, -0.0214, -0.0117, -0.0317, -0.0078, -0.0117, -0.0376, 0.0034, -0.0082, -0.0407, 0.0113, -0.0007, -0.0411, 0.0163, 0.0097, -0.0381, 0.0173, 0.0238, -0.0310, 0.0128, 0.0398, -0.0220, 0.0051, 0.0565, -0.0126, -0.0042, 0.0734, -0.0028, -0.0149, 0.0892, 0.0068, -0.0258, 0.1035, 0.0163, -0.0358, 0.1164, 0.0255, -0.0445, 0.1279, 0.0341, -0.0514, 0.1378, 0.0420, -0.0557, 0.1460, 0.0493, -0.0575, 0.1530, 0.0562, -0.0573, 0.1588, 0.0626, -0.0551, 0.1634, 0.0680, -0.0510, 0.1669, 0.0723, -0.0450, 0.1694, 0.0755, -0.0368, 0.1705, 0.0776, -0.0263, 0.1701, 0.0782, -0.0138, 0.1681, 0.0771, 0.0005, 0.1645, 0.0749, 0.0161, 0.1591, 0.0716, 0.0327, 0.1516, 0.0668, 0.0504, 0.1431, 0.0613, 0.0682, 0.1338, 0.0552, 0.0855, 0.1234, 0.0482, 0.1026, 0.1128, 0.0406, 0.1190, 0.1027, 0.0321, 0.1339, 0.0932, 0.0225, 0.1463, 0.0849, 0.0127, 0.1558, 0.0783, 0.0038, 0.1619, 0.0744, -0.0034, 0.1640, 0.0740, -0.0067, 0.1625, 0.0759, -0.0059, 0.1601, 0.0809, -0.0050, 0.1540, 0.0892, -0.0033, 0.1454, 0.0994, -0.0012, 0.1357, 0.1110, 0.0009, 0.1253, 0.1229, 0.0021, 0.1148, 0.1346, 0.0020, 0.1045, 0.1455, 0.0010, 0.0946, 0.1552, -0.0011, 0.0859, 0.1637, -0.0045, 0.0788, 0.1708, -0.0092, 0.0738, 0.1765, -0.0153, 0.0712, 0.1800, -0.0243, 0.0732, 0.1803, -0.0331, 0.0793, 0.1784, -0.0408, 0.0875, 0.1741, -0.0478, 0.0984, 0.1688, -0.0536, 0.1102, 0.1629, -0.0584, 0.1226, 0.1562, -0.0629, 0.1360, 0.1500, -0.0672, 0.1479, 0.1460, -0.0708, 0.1570, 0.1464, -0.0716, 0.1618, 0.1516, -0.0690, 0.1636, 0.1627, -0.0615, 0.1572, 0.1754, -0.0517, 0.1463, 0.1888, -0.0406, 0.1335, 0.2011, -0.0294, 0.1210, 0.2116, -0.0180, 0.1103, 0.2201, -0.0060, 0.1026, 0.2266, 0.0061, 0.0987, 0.2313, 0.0181, 0.0984, 0.2339, 0.0298, 0.1023, 0.2347, 0.0405, 0.1100, 0.2341, 0.0499, 0.1221, 0.2322, 0.0575, 0.1392, 0.2295, 0.0634, 0.1595, 0.2257, 0.0663, 0.1824, 0.2199, 0.0650, 0.2088, 0.2132, 0.0613, 0.2353, 0.2060, 0.0558, 0.2604, 0.1981, 0.0478, 0.2840, 0.1907, 0.0390, 0.3046, 0.1850, 0.0299, 0.3210, 0.1810, 0.0186, 0.3327, 0.1797, 0.0068, 0.3380, 0.1822, 0.0004, 0.3356, 0.1869, -0.0026, 0.3294, 0.1927, -0.0061, 0.3219, 0.1989, -0.0106, 0.3140, 0.2044, -0.0168, 0.3066, 0.2082, -0.0251, 0.3015, 0.2100, -0.0348, 0.3000, 0.2098, -0.0449, 0.3029, 0.2078, -0.0544, 0.3102, 0.2042, -0.0628, 0.3212, 0.1989, -0.0698, 0.3357, 0.1918, -0.0758, 0.3535, 0.1837, -0.0819, 0.3726, 0.1749, -0.0895, 0.3921, 0.1652, -0.0992, 0.4121, 0.1556, -0.1104, 0.4309, 0.1471, -0.1221, 0.4471, 0.1398, -0.1327, 0.4605, 0.1344, -0.1406, 0.4714, 0.1329, -0.1436, 0.4782, 0.1347, -0.1415, 0.4757, 0.1415, -0.1358, 0.4728, 0.1536, -0.1257, 0.4663, 0.1689, -0.1122, 0.4562, 0.1851, -0.0965, 0.4437, 0.2006, -0.0800, 0.4302, 0.2141, -0.0637, 0.4169, 0.2247, -0.0481, 0.4051, 0.2325, -0.0333, 0.3960, 0.2378, -0.0191, 0.3902, 0.2407, -0.0045, 0.3894, 0.2411, 0.0109, 0.3952, 0.2398, 0.0260, 0.4064, 0.2373, 0.0411, 0.4222, 0.2333, 0.0560, 0.4419, 0.2283, 0.0698, 0.4633, 0.2220, 0.0818, 0.4864, 0.2134, 0.0902, 0.5123, 0.2040, 0.0954, 0.5383, 0.1942, 0.0974, 0.5633, 0.1839, 0.0951, 0.5873, 0.1744, 0.0902, 0.6080, 0.1672, 0.0838, 0.6226, 0.1630, 0.0752, 0.6295, 0.1617, 0.0661, 0.6301, 0.1651, 0.0579, 0.6226, 0.1738, 0.0536, 0.6065, 0.1846, 0.0507, 0.5878, 0.1958, 0.0475, 0.5694, 0.2072, 0.0425, 0.5507, 0.2179, 0.0345, 0.5326, 0.2276, 0.0230, 0.5160, 0.2359, 0.0084, 0.5019, 0.2424, -0.0081, 0.4914, 0.2463, -0.0249, 0.4864, 0.2472, -0.0407, 0.4873, 0.2457, -0.0537, 0.4928, 0.2419, -0.0630, 0.5035, 0.2357, -0.0693, 0.5199, 0.2275, -0.0735, 0.5416, 0.2176, -0.0764, 0.5671, 0.2067, -0.0794, 0.5942, 0.1950, -0.0825, 0.6211, 0.1830, -0.0847, 0.6465, 0.1723, -0.0849, 0.6672, 0.1662, -0.0815, 0.6798, 0.1666, -0.0749, 0.6818, 0.1710, -0.0658, 0.6796, 0.1815, -0.0532, 0.6712, 0.2004, -0.0366, 0.6531, 0.2218, -0.0195, 0.6318, 0.2411, -0.0050, 0.6115, 0.2585, 0.0066, 0.5912, 0.2731, 0.0146, 0.5716, 0.2845, 0.0195, 0.5538, 0.2932, 0.0234, 0.5396, 0.3002, 0.0280, 0.5302, 0.3063, 0.0347, 0.5256, 0.3116, 0.0450, 0.5269, 0.3149, 0.0569, 0.5338, 0.3165, 0.0693, 0.5447, 0.3167, 0.0811, 0.5582, 0.3154, 0.0912, 0.5745, 0.3122, 0.0988, 0.5940, 0.3079, 0.1035, 0.6152, 0.3025, 0.1051, 0.6378, 0.2958, 0.1035, 0.6620, 0.2889, 0.0998, 0.6856, 0.2821, 0.0941, 0.7074, 0.2752, 0.0851, 0.7277, 0.2690, 0.0742, 0.7457, 0.2641, 0.0624, 0.7603, 0.2605, 0.0486, 0.7707, 0.2580, 0.0354, 0.7783, 0.2558, 0.0237, 0.7852, 0.2535, 0.0120, 0.7922, 0.2511, 0.0001, 0.7992, 0.2487, -0.0124, 0.8056, 0.2464, -0.0255, 0.8108, 0.2442, -0.0389, 0.8147, 0.2423, -0.0527, 0.8176, 0.2407, -0.0664, 0.8196, 0.2413, -0.0700, 0.8165
]

export default obj1