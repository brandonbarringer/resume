<template>
	<div class="chart__container">
		<PolarArea :options="options" :chartData="dataCollection"></PolarArea>
	</div>
</template>

<script>
	import PolarArea from './../PolarArea.js'

	export default {
		components: {
			PolarArea
		},
		data() {
			return {
				dataCollection: null,
				options: {
					legend: {
						position: 'bottom',
						labels: {
							boxWidth: 10
						}
					},
					layout: {
						padding: {
							left: 20,
							right: 20
						}
					}
				}
			};
		},
		mounted() {
			this.fillData();
		},
		methods: {
			fillData() {
				this.dataCollection = {
					labels: ['Vue', 'Angular', 'React', 'Jekyll'],
					datasets: [{
						label: 'Languages',
						data: [80, 20, 80, 40],
						backgroundColor: [
						'rgba(236,64,122 ,.1)',
						'rgba(41,182,246 ,.1)',
						'rgba(156,204,101 ,.1)',
						'rgba(255,112,67 ,.1)'
						],
						borderColor: [
						'rgba(236,64,122 ,.5)',
						'rgba(41,182,246 ,.5)',
						'rgba(156,204,101 ,.5)',
						'rgba(255,112,67 ,.5)'
						]
					}]
				}
			}
		}
	}
</script>