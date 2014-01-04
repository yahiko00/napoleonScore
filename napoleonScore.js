// ***************************
// Author: yahiko, 2013-12-31
// update: ironman compatibility
// ***************************

function taxProvince(provinces, id) {
  for (var i=0; i < provinces.length; i++) {
    var province = provinces[i];
    if (province.id == id) {
      return province.tax;
    }
    if (province.id > id) {
      return 0;
    }
  }
  return 0;
}

function sumTaxes(provinces) {
  var sum = 0;
  
  for (var i=0; i<provinces.length; i++) {
    province = provinces[i];
    sum += province.tax;
  }
  
  return sum;
}

function handleFileSelect(evt) {
  var savefile = evt.target.files[0]; // FileList object
  
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
          
    var index = 0;
    var country = "";
    var owner = "";
    var controller = "";
    var score = 0;
    var ironman = "";

    index = index = contents.indexOf('player=', index);
    country = contents.substr(index + 8, 3);
    document.getElementById('country').innerHTML = '<strong>' + country + '</strong>';
    
    if (contents.substr(0, 6) == 'EU4bin') {
      document.getElementById('ironman').innerHTML = 'oui (yes)';
    }
    else {
      document.getElementById('ironman').innerHTML = 'non (no)';
    }

    for (var i=0; i < provincesEurope.length; i++) {
      var province = provincesEurope[i];

      index = contents.indexOf('\r\n-' + province.id + '=\r\n', index);
      index = contents.indexOf('owner=', index);
      owner = contents.substr(index + 7, 3);
      index = contents.indexOf('controller=', index);
      controller = contents.substr(index + 12, 3);

      if (owner == country && controller == country) {
        score += taxProvince(provincesEurope, province.id);
      }
    }
    
    scorePercent = 100 * score / total;
    scorePercent = scorePercent.toFixed(2) + ' %';
    document.getElementById('score').innerHTML = '<strong>' + score + ' pts (' + scorePercent + ')</strong>';
  };

  reader.readAsText(savefile, 'ISO-8859-1');

  // files is a FileList of File objects. List some properties.
  var output = [];
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

var provincesEurope = [
  {id: 1, tax: 5},
  {id: 2, tax: 3},
  {id: 3, tax: 2},
  {id: 4, tax: 2},
  {id: 5, tax: 2},
  {id: 6, tax: 6},
  {id: 7, tax: 3},
  {id: 8, tax: 2},
  {id: 9, tax: 2},
  {id: 10, tax: 1},
  {id: 11, tax: 1},
  {id: 12, tax: 7},
  {id: 13, tax: 4},
  {id: 14, tax: 3},
  {id: 15, tax: 3},
  {id: 16, tax: 2},
  {id: 17, tax: 3},
  {id: 18, tax: 1},
  {id: 19, tax: 1},
  {id: 20, tax: 2},
  {id: 21, tax: 1},
  {id: 22, tax: 1},
  {id: 23, tax: 3},
  {id: 24, tax: 2},
  {id: 25, tax: 4},
  {id: 26, tax: 3},
  {id: 27, tax: 3},
  {id: 28, tax: 2},
  {id: 29, tax: 1},
  {id: 30, tax: 2},
  {id: 31, tax: 1},
  {id: 32, tax: 1},
  {id: 33, tax: 2},
  {id: 34, tax: 2},
  {id: 35, tax: 1},
  {id: 36, tax: 3},
  {id: 37, tax: 3},
  {id: 38, tax: 6},
  {id: 39, tax: 2},
  {id: 40, tax: 3},
  {id: 41, tax: 7},
  {id: 42, tax: 2},
  {id: 43, tax: 12},
  {id: 44, tax: 10},
  {id: 45, tax: 12},
  {id: 46, tax: 5},
  {id: 47, tax: 6},
  {id: 48, tax: 3},
  {id: 49, tax: 5},
  {id: 50, tax: 7},
  {id: 51, tax: 5},
  {id: 52, tax: 9},
  {id: 53, tax: 5},
  {id: 54, tax: 8},
  {id: 55, tax: 3},
  {id: 56, tax: 4},
  {id: 57, tax: 5},
  {id: 58, tax: 3},
  {id: 59, tax: 5},
  {id: 60, tax: 4},
  {id: 61, tax: 6},
  {id: 62, tax: 5},
  {id: 63, tax: 4},
  {id: 64, tax: 6},
  {id: 65, tax: 14},
  {id: 66, tax: 3},
  {id: 67, tax: 12},
  {id: 68, tax: 6},
  {id: 69, tax: 5},
  {id: 70, tax: 4},
  {id: 71, tax: 5},
  {id: 72, tax: 4},
  {id: 73, tax: 8},
  {id: 74, tax: 3},
  {id: 75, tax: 7},
  {id: 76, tax: 10},
  {id: 77, tax: 6},
  {id: 78, tax: 6},
  {id: 79, tax: 3},
  {id: 80, tax: 7},
  {id: 81, tax: 12},
  {id: 82, tax: 5},
  {id: 83, tax: 2},
  {id: 84, tax: 4},
  {id: 85, tax: 8},
  {id: 86, tax: 6},
  {id: 87, tax: 5},
  {id: 88, tax: 6},
  {id: 89, tax: 6},
  {id: 90, tax: 6},
  {id: 91, tax: 6},
  {id: 92, tax: 8},
  {id: 93, tax: 6},
  {id: 94, tax: 6},
  {id: 95, tax: 7},
  {id: 96, tax: 8},
  {id: 97, tax: 8},
  {id: 98, tax: 7},
  {id: 99, tax: 6},
  {id: 100, tax: 6},
  {id: 101, tax: 10},
  {id: 102, tax: 4},
  {id: 103, tax: 7},
  {id: 104, tax: 14},
  {id: 105, tax: 5},
  {id: 106, tax: 5},
  {id: 107, tax: 8},
  {id: 108, tax: 8},
  {id: 109, tax: 9},
  {id: 110, tax: 4},
  {id: 111, tax: 4},
  {id: 112, tax: 10},
  {id: 113, tax: 6},
  {id: 114, tax: 6},
  {id: 115, tax: 6},
  {id: 116, tax: 12},
  {id: 117, tax: 8},
  {id: 118, tax: 12},
  {id: 119, tax: 5},
  {id: 120, tax: 5},
  {id: 121, tax: 9},
  {id: 122, tax: 1},
  {id: 123, tax: 1},
  {id: 124, tax: 6},
  {id: 125, tax: 8},
  {id: 126, tax: 3},
  {id: 127, tax: 4},
  {id: 128, tax: 9},
  {id: 129, tax: 9},
  {id: 130, tax: 6},
  {id: 131, tax: 2},
  {id: 132, tax: 6},
  {id: 133, tax: 6},
  {id: 134, tax: 14},
  {id: 135, tax: 5},
  {id: 136, tax: 5},
  {id: 137, tax: 3},
  {id: 138, tax: 2},
  {id: 139, tax: 2},
  {id: 140, tax: 3},
  {id: 141, tax: 4},
  {id: 142, tax: 4},
  {id: 143, tax: 1},
  {id: 144, tax: 2},
  {id: 145, tax: 3},
  {id: 146, tax: 5},
  {id: 147, tax: 7},
  {id: 148, tax: 6},
  {id: 149, tax: 6},
  {id: 150, tax: 5},
  {id: 151, tax: 9},
  {id: 152, tax: 2},
  {id: 153, tax: 5},
  {id: 154, tax: 8},
  {id: 155, tax: 3},
  {id: 156, tax: 2},
  {id: 157, tax: 1},
  {id: 158, tax: 2},
  {id: 159, tax: 3},
  {id: 160, tax: 3},
  {id: 161, tax: 6},
  {id: 162, tax: 2},
  {id: 163, tax: 5},
  {id: 164, tax: 3},
  {id: 165, tax: 5},
  {id: 166, tax: 4},
  {id: 167, tax: 4},
  {id: 168, tax: 6},
  {id: 169, tax: 5},
  {id: 170, tax: 3},
  {id: 171, tax: 4},
  {id: 172, tax: 5},
  {id: 173, tax: 3},
  {id: 174, tax: 6},
  {id: 175, tax: 5},
  {id: 176, tax: 4},
  {id: 177, tax: 6},
  {id: 178, tax: 6},
  {id: 179, tax: 7},
  {id: 180, tax: 6},
  {id: 181, tax: 6},
  {id: 182, tax: 5},
  {id: 183, tax: 15},
  {id: 184, tax: 8},
  {id: 185, tax: 5},
  {id: 186, tax: 7},
  {id: 187, tax: 5},
  {id: 188, tax: 6},
  {id: 189, tax: 6},
  {id: 190, tax: 5},
  {id: 191, tax: 6},
  {id: 192, tax: 8},
  {id: 193, tax: 5},
  {id: 194, tax: 5},
  {id: 195, tax: 5},
  {id: 196, tax: 7},
  {id: 197, tax: 4},
  {id: 198, tax: 3},
  {id: 199, tax: 3},
  {id: 200, tax: 9},
  {id: 201, tax: 9},
  {id: 202, tax: 3},
  {id: 203, tax: 7},
  {id: 204, tax: 6},
  {id: 205, tax: 11},
  {id: 206, tax: 4},
  {id: 207, tax: 6},
  {id: 208, tax: 5},
  {id: 209, tax: 3},
  {id: 210, tax: 3},
  {id: 211, tax: 4},
  {id: 212, tax: 4},
  {id: 213, tax: 13},
  {id: 214, tax: 7},
  {id: 215, tax: 4},
  {id: 216, tax: 6},
  {id: 217, tax: 11},
  {id: 218, tax: 5},
  {id: 219, tax: 8},
  {id: 220, tax: 8},
  {id: 221, tax: 6},
  {id: 222, tax: 2},
  {id: 223, tax: 5},
  {id: 224, tax: 8},
  {id: 225, tax: 5},
  {id: 226, tax: 5},
  {id: 227, tax: 10},
  {id: 228, tax: 7},
  {id: 229, tax: 4},
  {id: 230, tax: 7},
  {id: 231, tax: 10},
  {id: 232, tax: 6},
  {id: 233, tax: 4},
  {id: 234, tax: 7},
  {id: 235, tax: 6},
  {id: 236, tax: 12},
  {id: 237, tax: 7},
  {id: 238, tax: 8},
  {id: 239, tax: 6},
  {id: 240, tax: 5},
  {id: 241, tax: 4},
  {id: 242, tax: 3},
  {id: 243, tax: 5},
  {id: 244, tax: 6},
  {id: 245, tax: 7},
  {id: 246, tax: 6},
  {id: 247, tax: 3},
  {id: 248, tax: 7},
  {id: 249, tax: 4},
  {id: 250, tax: 4},
  {id: 251, tax: 4},
  {id: 252, tax: 2},
  {id: 253, tax: 1},
  {id: 254, tax: 6},
  {id: 255, tax: 4},
  {id: 256, tax: 3},
  {id: 257, tax: 7},
  {id: 258, tax: 6},
  {id: 259, tax: 6},
  {id: 260, tax: 6},
  {id: 261, tax: 2},
  {id: 262, tax: 10},
  {id: 263, tax: 3},
  {id: 264, tax: 6},
  {id: 265, tax: 6},
  {id: 266, tax: 13},
  {id: 267, tax: 3},
  {id: 268, tax: 6},
  {id: 269, tax: 6},
  {id: 270, tax: 4},
  {id: 271, tax: 2},
  {id: 272, tax: 7},
  {id: 273, tax: 2},
  {id: 274, tax: 5},
  {id: 275, tax: 4},
  {id: 276, tax: 8},
  {id: 277, tax: 3},
  {id: 278, tax: 3},
  {id: 279, tax: 4},
  {id: 280, tax: 14},
  {id: 281, tax: 4},
  {id: 282, tax: 5},
  {id: 283, tax: 4},
  {id: 284, tax: 7},
  {id: 285, tax: 5},
  {id: 286, tax: 4},
  {id: 287, tax: 1},
  {id: 288, tax: 4},
  {id: 289, tax: 6},
  {id: 290, tax: 8},
  {id: 291, tax: 7},
  {id: 292, tax: 3},
  {id: 293, tax: 4},
  {id: 294, tax: 6},
  {id: 295, tax: 10},
  {id: 296, tax: 2},
  {id: 297, tax: 4},
  {id: 298, tax: 4},
  {id: 299, tax: 4},
  {id: 300, tax: 3},
  {id: 301, tax: 6},
  {id: 302, tax: 6},
  {id: 303, tax: 6},
  {id: 304, tax: 7},
  {id: 305, tax: 6},
  {id: 306, tax: 5},
  {id: 307, tax: 7},
  {id: 308, tax: 5},
  {id: 309, tax: 3},
  {id: 310, tax: 8},
  {id: 311, tax: 3},
  {id: 312, tax: 5},
  {id: 313, tax: 2},
  {id: 314, tax: 2},
  {id: 315, tax: 1},
  {id: 316, tax: 5},
  {id: 317, tax: 7},
  {id: 318, tax: 7},
  {id: 319, tax: 4},
  {id: 320, tax: 2},
  {id: 321, tax: 8},
  {id: 322, tax: 6},
  {id: 323, tax: 4},
  {id: 324, tax: 5},
  {id: 325, tax: 4},
  {id: 326, tax: 5},
  {id: 327, tax: 3},
  {id: 328, tax: 3},
  {id: 329, tax: 3},
  {id: 330, tax: 3},
  {id: 331, tax: 3},
  {id: 332, tax: 3},
  {id: 333, tax: 4},
  {id: 366, tax: 3},
  {id: 367, tax: 3},
  {id: 368, tax: 4},
  {id: 369, tax: 1},
  {id: 370, tax: 1},
  {id: 371, tax: 1},
  {id: 372, tax: 4},
  {id: 373, tax: 5},
  {id: 374, tax: 4},
  {id: 375, tax: 4},
  {id: 376, tax: 2},
  {id: 424, tax: 3},
  {id: 425, tax: 3},
  {id: 462, tax: 3},
  {id: 463, tax: 4},
  {id: 464, tax: 5},
  {id: 466, tax: 1},
  {id: 467, tax: 5},
  {id: 468, tax: 5},
  {id: 469, tax: 3},
  {id: 473, tax: 9},
  {id: 474, tax: 6},
  {id: 475, tax: 7},
  {id: 1077, tax: 2},
  {id: 1079, tax: 2},
  {id: 1081, tax: 4},
  {id: 1082, tax: 5},
  {id: 1083, tax: 1},
  {id: 1247, tax: 3},
  {id: 1742, tax: 6},
  {id: 1743, tax: 5},
  {id: 1744, tax: 8},
  {id: 1745, tax: 6},
  {id: 1746, tax: 5},
  {id: 1747, tax: 3},
  {id: 1748, tax: 4},
  {id: 1749, tax: 6},
  {id: 1750, tax: 7},
  {id: 1752, tax: 5},
  {id: 1753, tax: 4},
  {id: 1754, tax: 4},
  {id: 1755, tax: 2},
  {id: 1756, tax: 6},
  {id: 1757, tax: 7},
  {id: 1758, tax: 7},
  {id: 1759, tax: 6},
  {id: 1760, tax: 6},
  {id: 1761, tax: 7},
  {id: 1762, tax: 3},
  {id: 1763, tax: 4},
  {id: 1764, tax: 5},
  {id: 1765, tax: 4},
  {id: 1766, tax: 3},
  {id: 1767, tax: 3},
  {id: 1768, tax: 5},
  {id: 1769, tax: 7},
  {id: 1770, tax: 6},
  {id: 1771, tax: 6},
  {id: 1772, tax: 8},
  {id: 1773, tax: 3},
  {id: 1774, tax: 9},
  {id: 1775, tax: 5},
  {id: 1776, tax: 1},
  {id: 1777, tax: 1},
  {id: 1778, tax: 4},
  {id: 1780, tax: 0},
  {id: 1781, tax: 0},
  {id: 1782, tax: 0},
  {id: 1783, tax: 0},
  {id: 1826, tax: 1},
  {id: 1827, tax: 2},
  {id: 1828, tax: 2},
  {id: 1831, tax: 2},
  {id: 1834, tax: 3},
  {id: 1841, tax: 4},
  {id: 1842, tax: 1},
  {id: 1846, tax: 4},
  {id: 1848, tax: 4},
  {id: 1851, tax: 6},
  {id: 1853, tax: 6},
  {id: 1856, tax: 2},
  {id: 1857, tax: 3},
  {id: 1858, tax: 6},
  {id: 1859, tax: 3},
  {id: 1860, tax: 3},
  {id: 1861, tax: 3},
  {id: 1862, tax: 6},
  {id: 1863, tax: 6},
  {id: 1864, tax: 3},
  {id: 1865, tax: 8},
  {id: 1866, tax: 7},
  {id: 1867, tax: 3},
  {id: 1868, tax: 8},
  {id: 1869, tax: 4},
  {id: 1870, tax: 3},
  {id: 1871, tax: 3},
  {id: 1872, tax: 8},
  {id: 1873, tax: 3},
  {id: 1874, tax: 8},
  {id: 1875, tax: 5},
  {id: 1876, tax: 8},
  {id: 1877, tax: 3},
  {id: 1878, tax: 7},
  {id: 1879, tax: 6},
  {id: 1880, tax: 6},
  {id: 1930, tax: 1},
  {id: 1931, tax: 2},
  {id: 1933, tax: 2},
  {id: 1934, tax: 1},
  {id: 1935, tax: 1},
  {id: 1936, tax: 2},
  {id: 1937, tax: 3},
  {id: 1938, tax: 2},
  {id: 1939, tax: 3},
  {id: 1940, tax: 3},
  {id: 1941, tax: 1},
  {id: 1942, tax: 3},
  {id: 1943, tax: 3},
  {id: 1944, tax: 3},
  {id: 1945, tax: 3},
  {id: 1951, tax: 3},
  {id: 1952, tax: 1},
  {id: 1953, tax: 2},
  {id: 1954, tax: 3},
  {id: 1955, tax: 2},
  {id: 1956, tax: 3},
  {id: 1957, tax: 2},
  {id: 1958, tax: 2},
  {id: 1959, tax: 3},
  {id: 1960, tax: 2},
  {id: 1961, tax: 2},
  {id: 1962, tax: 1},
  {id: 1963, tax: 2},
  {id: 1964, tax: 1},
  {id: 1965, tax: 6},
  {id: 1966, tax: 3},
  {id: 1967, tax: 2},
  {id: 1968, tax: 2},
  {id: 1969, tax: 1},
  {id: 1971, tax: 6},
  {id: 1972, tax: 2},
  {id: 1974, tax: 3},
  {id: 1978, tax: 1},
  {id: 1979, tax: 1},
  {id: 1981, tax: 1},
  {id: 1982, tax: 2},
  {id: 1983, tax: 2},
  {id: 1984, tax: 2},
  {id: 1985, tax: 2}
];

var total = sumTaxes(provincesEurope);

document.getElementById('files').addEventListener('change', handleFileSelect, false);
