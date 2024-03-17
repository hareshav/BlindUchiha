const ctx1 = document.getElementById("myChart1").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [3, 18, 6, 12, 5, 20, 8, 15, 3, 18],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(0, 211, 149, 1)",
        borderWidth: 3, // Increase line thickness
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis label color
        },
      },
      y: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          backgroundColor: "rgba(255, 255, 255, )",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    },
    backgroundColor: "rgba(0, 128, 0, 1)",
  },
});

// Repeat the same for myChart2, myChart3, and myChart4
const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [22, 10, 18, 5, 15, 7, 20, 8, 12, 19],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(0, 211, 149, 1)",
        borderWidth: 3, // Increase line thickness
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)",
          font: {
            size: 25, // Increase font size for y-axis labels
            weight: "bold", // Add font weight if desired
          }, // Change x-axis label color
        },
      },
      y: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          backgroundColor: "rgba(255, 255, 255, )",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    },
    backgroundColor: "rgba(0, 128, 0, 1)",
  },
});

// Repeat the same for myChart2, myChart3, and myChart4
const ctx3 = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 15, 7, 18, 10, 22, 8, 12, 19, 4],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(0, 211, 149, 1)",
        borderWidth: 3, // Increase line thickness
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis label color
        },
      },
      y: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          backgroundColor: "rgba(255, 255, 255, )",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    },
    backgroundColor: "rgba(0, 128, 0, 1)",
  },
});

// Repeat the same for myChart2, myChart3, and myChart4
const ctx4 = document.getElementById("myChart4").getContext("2d");
const myChart4 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 5, 20, 8, 15, 3, 18, 6, 22, 10],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(0, 211, 149, 1)",
        borderWidth: 3, // Increase line thickness
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change x-axis label color
        },
      },
      y: {
        grid: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis grid color
        },
        ticks: {
          color: "rgba(0, 211, 149, 1)", // Change y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          backgroundColor: "rgba(255, 255, 255, )",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    },
    backgroundColor: "rgba(0, 128, 0, 1)",
  },
});

// Repeat the same for myChart2, myChart3, and myChart4
