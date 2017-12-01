var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x','2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
        ['Causas Externas', 2765, 2558, 2687, 2615, 2541, 2509, 2427, 2401, 2420, 2361, 2478, 2524, 2534, 2434, 2374, 2132],
        ['Aparelho Respiratório', 449, 502, 462, 425, 426, 403, 416, 367, 361, 460, 386, 378, 397, 394, 358, 346],
        ['Neoplasias', 656, 661, 649, 631, 715, 707, 734, 724, 675, 721, 679, 713, 714, 650, 624, 690],
        ['Sistema Nervoso', 330, 349, 320, 378, 354, 346, 404, 398, 397, 397, 443, 452, 455, 513, 448, 428],
        ['Sintomas e sinais', 703, 667, 625, 645, 529, 460, 390, 368, 412, 394, 397, 375, 327, 321, 362, 352]
      ],
  //    axes: {
  //      data2: 'y2'
  //    },
      types: {
        'Causas Externas': 'pie',
        'Aparelho Respiratório': 'pie',
        'Neoplasias': 'pie',
        'Sistema Nervoso': 'pie',
        'Sintomas e sinais': 'pie'
      }
    },
    axis: {
      x : {
        type : 'timeseries',
            tick: {
                format: function (x) { return x.getFullYear(); }
              //format: '%Y' // format string is also available for timeseries data
            }
          },
      y: {
        max: 3000,
        min: 1000,
        label: {
          text: 'Número',
          position: 'outer-middle'
        },
      },
 /*     y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }*/
    }
});

/*
setTimeout(function () {
    chart.transform('line', 'Gestantes com 7 ou mais consultas de pré-natal / ano');
}, 2000);

setTimeout(function () {
    chart.transform('line', 'Proporção de partos normais');
}, 4000);

setTimeout(function () {
    chart.transform('line', 'Percentual de óbitos de mulheres em idade fértil investigados');
}, 6000);

setTimeout(function () {
    chart.transform('area');
}, 8000);

setTimeout(function () {
    chart.transform('pie');
}, 10000);

setTimeout(function () {
    chart.transform('spline');
}, 15000);

setTimeout(function () {
    chart.transform('area-spline');
}, 17000);

setTimeout(function () {
    chart.transform('donut');
}, 19000);

setTimeout(function () {
    chart.transform('scatter');
}, 21000);

setTimeout(function () {
    chart.transform('bar');
}, 23000);

*/

  //    axes: {
  //      data2: 'y2'
  //    },
     
/*
chart.load({
  columns: [
    ['data1', 300, 100, 250, 150, 300, 150, 500],
    ['data2', 100, 200, 150, 50, 100, 250]
  ]
});
*/

/*
chart.unload({
    ids: ['data2', 'data3']
});
*/

/*
chart.hide(['data2', 'data3']);
chart.show(['data2', 'data3']);
*/