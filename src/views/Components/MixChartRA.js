
import React,{ Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
	datasets: [
		{
			label: 'Llamadas Recibidas Atención',
			type: 'line',
			data: [2255, 4035, 3385, 1924],
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
			label: 'Llamadas Recibidas Venta Nueva',
			type: 'bar',
			data: [2255, 4035, 3385, 1924],
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
	labels: ["Ene-21","Feb-21","Mar-21","Abr-21"],
	tooltips: {
		mode: 'label',
		callbacks: {
			label: function(tooltipItem, data) {
			  //get the concerned dataset
			  var dataset = data.datasets[tooltipItem.datasetIndex];
			  //calculate the total of this data set
			  var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
				return previousValue + currentValue;
			  });
			  //get the current items value
			  var currentValue = dataset.data[tooltipItem.index];
			  //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
			  var percentage = Math.floor(((currentValue/total) * 100)+0.5);
		
			  return percentage + "%";
			}
		  }

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

				labels: ["Enero-21","Feb-21","Mar-21","Abr-21"],
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

class MixChartRA extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<Bar height={130} data={data} options={options} plugins={plugins} />
			</div>
		);
	}
}

export default MixChartRA;