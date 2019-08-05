import { PolarArea, mixins } from 'vue-chartjs';

export default {
	extends: PolarArea,
	props: ['chartData', 'options'],
	mixins: [mixins.reactiveProp],
	name: 'Chart',
	mounted() {
		this.renderChart(this.chartData, this.options)
	}
}
