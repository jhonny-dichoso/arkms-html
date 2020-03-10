Chart.defaults.global.legend.position = "bottom";
Chart.defaults.global.legend.align = "start";

var ctxresearches = document.getElementById("line-researches");
var ctxauthor = document.getElementById("line-author");
var ctxagency = document.getElementById("line-agency");
var ctxlocation = document.getElementById("line-location");
var ctxCategory = document.getElementById("bar-category");

var ctxdoughnutresearch = document.getElementById("doughnut-research");
var ctxdoughnutauthor = document.getElementById("doughnut-author");

var labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

var weeks = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8"
];

const defaultOption = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

//Linebar
var researchesGraph = new Chart(ctxresearches, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Researches",
        data: [50, 54, 3, 5, 2, 3, 5, 7, 34, 34, 2, 7],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var researchesGraph = new Chart(ctxauthor, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Researches",
        data: [50, 54, 3, 5, 2, 3, 5, 7, 34, 34, 2, 7],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var researchesGraph = new Chart(ctxagency, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Researches",
        data: [50, 54, 45, 5, 2, 3, 12, 8, 45, 3, 32, 12],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var researchesGraph = new Chart(ctxlocation, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Researches",
        data: [50, 54, 33, 52, 12, 33, 25, 17, 6, 4, 12, 43],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

//Line Category
var categoryBarChart = new Chart(ctxCategory, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: "#318555",
        barPercentage: 0.1,
        barThickness: 90,
        maxBarThickness: 70,
        minBarLength: 2,
        data: [30, 23, 25, 33, 23, 24, 25, 27, 23, 32, 34, 32]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true
          }
        }
      ]
    }
  }
});

//Piechart

var doughnutResearches = new Chart(ctxdoughnutresearch, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [40, 56, 23, 76, 23, 67],
        backgroundColor: [
          "#FFC592",
          "#FFF5B2",
          "#BEDBA9",
          "#BBE0F7",
          "#C4CBE7",
          "#ECC6DE"
        ]
      }
    ],

    labels: ["Cacao", "Farming", "Organic", "Mango", "Coffee", "Other"]
  },
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  }
});
var doughnutResearches = new Chart(ctxdoughnutauthor, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [40, 56, 23, 76, 23, 67],
        backgroundColor: [
          "#FFC592",
          "#FFF5B2",
          "#BEDBA9",
          "#BBE0F7",
          "#C4CBE7",
          "#ECC6DE"
        ]
      }
    ],

    labels: [
      "Estela Taño",
      "Daisynette Manalo",
      "Concepcion Amat",
      "Elizabeth Gregorio",
      "Virgilia Arellano",
      "Other"
    ]
  },
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  }
});

// TOP Forum topic
var ctxTopOne = document.getElementById("line-top-one");
var ctxTopTwo = document.getElementById("line-top-two");
var ctxTopThree = document.getElementById("line-top-three");
var ctxTopFour = document.getElementById("line-top-four");
var ctxTopFive = document.getElementById("line-top-five");
var ctxTopAll = document.getElementById("line-top-all");
var ctxTopAllDoughnut = document.getElementById("doughnut-top-all");

var forumGraphOne = new Chart(ctxTopOne, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "1. Masarap ba ang cacao",
        data: [30, 44, 3, 5, 22, 13, 45, 27, 14, 24, 22, 37],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var forumGraphTwo = new Chart(ctxTopTwo, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "2. Masarap ba ang saging? :D",
        data: [23, 54, 23, 25, 23, 13, 25, 27, 34, 34, 12, 7],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var forumGraphThree = new Chart(ctxTopThree, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "3. Guest Topic",
        data: [50, 54, 33, 45, 22, 13, 35, 27, 34, 24, 12, 8],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var forumGraphFour = new Chart(ctxTopFour, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "4. Sample Gift",
        data: [10, 24, 13, 15, 12, 23, 35, 17, 24, 34, 22, 47],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var forumGraphFive = new Chart(ctxTopFive, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "5. Loverboy",
        data: [20, 24, 13, 45, 22, 13, 25, 37, 44, 42, 22, 27],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: defaultOption
});

var forumGraphAll = new Chart(ctxTopAll, {
  type: "line",
  data: {
    labels: weeks,
    datasets: [
      {
        label: "1. Masarap ba ang cacao",
        data: [30, 44, 3, 5, 22, 13, 45, 27],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: "#FFC592",
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#FFC592",
        pointBackgroundColor: "#FFC592",
        pointRadius: 3
      },

      {
        label: "2. Masarap ba ang saging? :D",
        data: [23, 54, 23, 25, 23, 13, 25, 27],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: "#FFF5B2",
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#FFF5B2",
        pointBackgroundColor: "#FFF5B2",
        pointRadius: 3
      },

      {
        label: "3. Guest Topic",
        data: [50, 54, 33, 45, 22, 13, 35, 27],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: "#BEDBA9",
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#BEDBA9",
        pointBackgroundColor: "#BEDBA9",
        pointRadius: 3
      },

      {
        label: "4. Sample Gift",
        data: [50, 54, 33, 45, 22, 13, 35, 27],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: "#BBE0F7",
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#BBE0F7",
        pointBackgroundColor: "#BBE0F7",
        pointRadius: 3
      },

      {
        label: "5. Loverboy",
        data: [10, 24, 13, 15, 12, 23, 35, 17],
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        fontStyle: "bold"
      }
    }
  }
});

var doughnutResearches = new Chart(ctxTopAllDoughnut, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [40, 56, 23, 76, 23, 67],
        backgroundColor: [
          "#FFC592",
          "#FFF5B2",
          "#BEDBA9",
          "#BBE0F7",
          "#C4CBE7",
          "#ECC6DE"
        ]
      }
    ],

    labels: [
      "1. Masarap ba ang Cacao",
      "2. Masarap ba ang Saging",
      "3. Guest Topic",
      "4. Sample Gift",
      "5. Loverboy"
    ]
  },
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  }
});
