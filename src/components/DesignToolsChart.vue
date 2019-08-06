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
					maintainAspectRatio: false,
					legend: {
						position: 'bottom'
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
					labels: ['Ps', 'Id', 'Sketch', 'Ai'],
					datasets: [{
						label: 'Languages',
						data: [95, 60, 95, 70],
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