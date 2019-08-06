import { PolarArea, mixins } from 'vue-chartjs';

export default {
	extends: PolarArea,
	props: ['chartData', 'options'],
	mixins: [mixins.reactiveProp],
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
}