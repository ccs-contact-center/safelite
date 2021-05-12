import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar, Pie, HorizontalBar } from "react-chartjs-2";



const optionsBar = {
  tooltips: {
    show: true,
    enabled: true,

    // callbacks: {
    //   label: function(tooltipItem, data) {
    //     //get the concerned dataset
    //     var dataset = data.datasets[tooltipItem.datasetIndex];
    //     //calculate the total of this data set
    //     var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
    //       return previousValue + currentValue;
    //     });
    //     //get the current items value
    //     var currentValue = dataset.data[tooltipItem.index];
    //     //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
    //     var percentage = Math.floor(((currentValue/total) * 100));

    //     return percentage + "%";
    //   }
    // }
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [

      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          drawBorder: false
        }
      },

    ],
    xAxes: [

      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          display: false
        }
      }
    ]
  }
};


const optionsPie = {
  maintainAspectRatio: false,
  responsive: true,

  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    },
    legend: { display: true, position: "right" },
  },
  tooltips: {
    show: true,
    enabled: true,
  },
}




class BarChartRGNTC extends Component {
  static defaultProps = {
    data: [10.7, 17.9, 17.1, 20.6, 25.5, 30.3, 25.5]
  };

  getData(dataProp) {
    var data = {
      labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartH extends Component {
  static defaultProps = {
    data: [55, 14,12,10,6,2,1,1]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Google","Recomendación","Cliente frecuente","Aseguradora","De pasada por el local","Facebook",
        "Colgantes","Volantes"],
      datasets: [
        {
          label: "%",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)", 
            "rgba(192,3,39,0.7)",

          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <HorizontalBar
                width={250}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartRGLLA extends Component {
  static defaultProps = {
    data: [758, 571, 641, 567, 444, 518, 641]
  };

  getData(dataProp) {
    var data = {
      labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
      datasets: [
        {
          label: "Llamadas Atendidas",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={120}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartRGTNC extends Component {
  static defaultProps = {
    data: [10.7, 17.9, 17.1, 20.6, 25.5, 30.3, 25.5]
  };

  getData(dataProp) {
    var data = {
      labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={130}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


//GRAAFICA BAR-LINE
const data = {
  datasets: [
    {
      label: 'AHT',
      type: 'line',
      data: [712, 559, 547, 544, 553, 619, 557],
      fill: false,
      borderColor: 'rgba(166, 164, 166)',
      backgroundColor: 'rgba(166, 164, 166)',
      pointBorderColor: 'rgba(166, 164, 166)',
      pointBackgroundColor: 'rgba(166, 164, 166)',
      pointHoverBackgroundColor: 'rgba(166, 164, 166)',
      pointHoverBorderColor: 'rgba(166, 164, 166)',
      yAxisID: 'y-axis-2'
    },
    {
      label: 'MixCharRG',
      type: 'bar',
      data: [935, 615, 694, 671, 496, 612, 721],
      fill: false,
      backgroundColor: 'rgba(192,3,39,0.8)',
      borderColor: 'rgba(192,3,39,0.7)',
      hoverBackgroundColor: 'rgba(192,3,39,0.7)',
      hoverBorderColor: 'rgba(192,3,39,0.7)',
      yAxisID: 'y-axis-1'
    }
  ]
};

const options = {
  responsive: true,
  labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },

        labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"]
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const plugins = [
  {
    afterDraw: (chartInstance, easing) => {
      const { ctx } = chartInstance.chart;
      ctx.fillText('', 100, 100);
    }
  }
];

class MixCharRG extends Component {
  render() {
    return (
      <div className="flex flex-col items-center w-full max-w-md">
        <Bar height={130} data={data} options={options} plugins={plugins} />
      </div>
    );
  }
}

class BarChartRGTNC2 extends Component {
  static defaultProps = {
    data: [10.7, 17.9, 17.1, 20.6, 25.5, 30.3, 25.5]
  };

  getData(dataProp) {
    var data = {
      labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={130}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class PieChartLlaIn1 extends Component {
  static defaultProps = {
    data: [73, 27,]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Otros",
        "Oportunidades",
      ],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "#gray",
          ],
          hoverBackgroundColor: [
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Pie
                width={300}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsPie}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartLlIn2 extends Component {
  static defaultProps = {
    data: [1, 2, 2, 3, 8, 10, 11, 11, 12, 17, 22]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "En espera de evidencia", "Comparar precios/otras marcas", "Auto en taller", "Por ubicación en su ciudad",
        "Sin convenio con su aseguradora", "Se corta llamada durante gestión", "Precio", "Se solicita evidencia para cotización",
        "Se genera cita en sucursal", "En espera de cotización", "Lo consultará"
      ],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={180}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartLlIn3 extends Component {
  static defaultProps = {
    data: [1, 1, 3, 4, 4, 11, 12, 19, 20, 21]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Otros", "Se corta llamada durante gestión", "Cita", "Sucursales", "Directorio", "Seguimiento",
        "Otros servicios (Refaccion/Reparaciones mecánica)", "Rechaza cita", "Se corta llamada", "Llamada equivocada"
      ],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={180}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartPA1 extends Component {
  static defaultProps = {
    data: [13.7, 19.2, 48.9, 13.8]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Jesus Angel Monroy Pioquinto", "Jessica Trillo Alatorre", "Gabriela Paredes Ledezma", "Mariana Ortega Garcia"
      ],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={130}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartLlSA1 extends Component {
  static defaultProps = {
    data: [19, 22, 25, 27, 42, 47, 52, 57, 99, 142]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Se programa servicio a domicilio", "Tel equivocado", "Sin convenio con su aseguradora", "Disponibilidad de inventario tienda",
        "Otros", "Precio", "Lo consultará", "Manda a buzón", "Ya realizó el servicio con otro taller", "No contesta",
      ],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={165}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartC1 extends Component {
  static defaultProps = {
    data: [90.1, 89.4, 92.9, 90.5, 90.8, 90.7, 91.81]
  };

  getData(dataProp) {
    var data = {
      labels: ["oct-20", "nov-20", "dic-20", "ene-21", "feb-21", "mar-21", "abr-21"],
      datasets: [
        {
          label: "TNC %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            
            
          ],
          data: dataProp,
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={135}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}







//grafica de doble
class BarChart9 extends Component {
  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [25, 50]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [75, 42]
        },
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [null, 8]
        },
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



//grafica doble
class BarChartDoble2 extends Component {
  getData(dataProp) {
    var data = {
      labels: ["Febrero", "Marzo", "Abril",],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [54, 29, 58]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [38, 71, 20]
        },
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [8, 0, 20]
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={1000}
                height={280}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}





export {
  BarChartRGNTC, BarChartRGLLA, BarChartRGTNC, MixCharRG, BarChartRGTNC2, PieChartLlaIn1, BarChartLlIn2, BarChartLlIn3,
  BarChartPA1, BarChartLlSA1, BarChartC1,BarChartH,
  BarChart9, BarChartDoble2
};
