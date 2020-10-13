/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
      ],
      datasets: [{
        data: [
          5,
          5,
          4,
          4,
          3,
          4,
          3,
        ],
        label: 'Direct Impacts',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 3,
        pointBackgroundColor: '#007bff'
      },
      {
        data: [
          -5,
          -4,
          -3,
          0,
          3.4,
          4.8,
          3.9,
        ],
        label: 'Indirect Impact',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'Red',
        borderWidth: 3,
        pointBackgroundColor: 'Red'
      },
    ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
