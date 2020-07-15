/* globals Chart:false, feather:false */

(function () {
  'use strict'

  // chart
  // var container = document.getElementById('chart-area');
  // var data = {
  //   categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  //   series: [{
  //       name: 'Seoul',
  //       data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6]
  //     },
  //     {
  //       name: 'Seattle',
  //       data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7]
  //     },
  //     {
  //       name: 'Sydney',
  //       data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6, 19.4, 21.2]
  //     },
  //     {
  //       name: 'Moskva',
  //       data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5]
  //     },
  //     {
  //       name: 'Jungfrau',
  //       data: [-13.2, -13.7, -13.1, -10.3, -6.1, -3.2, 0.0, -0.1, -1.8, -4.5, -9.0, -10.9]
  //     }
  //   ]
  // };
  // var options = {
  //   chartExportMenu: {
  //     visible: false // default is true.
  //   },
  //   legend: {
  //     visible: false
  //   },
  //   plot: {
  //     bands: [{
  //       range: ['03/01/2016', '05/01/2016'],
  //       color: 'gray',
  //       opacity: 0.1
  //     }],
  //     lines: [{
  //       value: '03/01/2016',
  //       color: '#fa2828'
  //     }]
  //   }
  // };
  // var theme = {
  //   series: {
  //     colors: [
  //       '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
  //       '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
  //     ]
  //   }
  // };
  // // For apply theme
  // // tui.chart.registerTheme('myTheme', theme);
  // // options.theme = 'myTheme';
  // var chart = tui.chart.lineChart(container, data, options);

  // // 그래프 영역 리사이즈
  // // .c-box : "padding-left: 30" + "padding-right: 30" = 60
  // function chartResize() {
  //   chart.resize({
  //     width: document.querySelector('.chart-box').clientWidth - 60,
  //     height: document.querySelector('.c-box').offsetHeight * 2 - 40
  //   });
  // };

  // chartResize();
  
  // document.body.onresize = function () {
  //   chartResize();
  // };


  // // grid

  // const grid = new tui.Grid({
  //   el: document.getElementById('grid'),
  //   data: gridData,
  //   rowHeaders: ['checkbox'],
  //   bodyHeight: 600,
  //   treeColumnOptions: {
  //     name: 'name',
  //     useCascadingCheckbox: true
  //   },
  //   columns: [{
  //       header: 'Name',
  //       name: 'name',
  //       align: 'center'
  //     },
  //     {
  //       header: 'Artist',
  //       name: 'artist',
  //       align: 'center'
  //     },
  //     {
  //       header: 'Type',
  //       name: 'type',
  //       align: 'center'
  //     },
  //     {
  //       header: 'Release',
  //       name: 'release',
  //       align: 'center'
  //     },
  //     {
  //       header: 'Genre',
  //       name: 'genre',
  //       align: 'center'
  //     }
  //   ]
  // });

  // grid.on('expand', ev => {
  //   const {
  //     rowKey
  //   } = ev;
  //   const descendantRows = grid.getDescendantRows(rowKey);

  //   console.log('rowKey: ' + rowKey);
  //   console.log('descendantRows: ' + descendantRows);

  //   if (!descendantRows.length) {
  //     grid.appendRow({
  //       name: 'dynamic loading data',
  //       _children: [{
  //           name: 'leaf row'
  //         },
  //         {
  //           name: 'internal row',
  //           _children: []
  //         }
  //       ]
  //     }, {
  //       parentRowKey: rowKey
  //     });
  //   }
  // });

  // grid.on('collapse', ev => {
  //   const {
  //     rowKey
  //   } = ev;
  //   const descendantRows = grid.getDescendantRows(rowKey);

  //   console.log('rowKey: ' + rowKey);
  //   console.log('descendantRows: ' + descendantRows);
  // });

  // tui.Grid.applyTheme('clean', {
  //   // area: {
  //   //   border: '#ebedf6'
  //   // },
  //   extOptions: {
  //     row: {
  //       odd: {
  //         text: 'red'
  //       }
  //     }
  //   },
  //   cell: {
  //     header: {
  //       background: '#fdfdff'
  //     }
  //   }
  // });

  // aside 토글
  var aSdBtn = document.querySelector('.side-toggle');
  var aSdArea = document.getElementById('aside-area');

  aSdBtn.addEventListener('click', function(){
    if (aSdArea.classList.contains('s-size')) {
      aSdArea.classList.remove('s-size');
    } else {
      aSdArea.classList.add('s-size');
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

}())