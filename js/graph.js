var ctx = document.getElementById("line-researches");
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

var data1 = [12, 19, 3, 5, 2, 3, 5, 7, 34, 3, 2, 7];
var data2 = [50, 54, 3, 5, 2, 3, 5, 7, 34, 34, 2, 7];

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Researches",
        data: data1,
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(63,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      },
      {
        label: "# of Researches",
        data: data2,
        backgroundColor: ["rgba(255, 99, 132, 0)"],
        borderColor: ["rgb(255,170,109)"],
        borderWidth: 3,
        borderCapStyle: "square",
        pointBorderColor: "#318555",
        pointBackgroundColor: "#318555",
        pointRadius: 3
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
