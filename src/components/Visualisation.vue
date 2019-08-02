<template>
	<Chart :chartData="dataCollection"></Chart>
</template>

<script>
	import Chart from './../Chart.js'

	export default {
		components: {
			Chart
		},
		data() {
			return {
				dataCollection: null,
			};
		},
		mounted() {
			this.fillData();
		},
		methods: {
			fillData() {
				this.dataCollection = {
					labels: ['CSS', 'HTML', 'JS', 'PHP'],
					datasets: [{
					  label: 'Languages',
					  data: [85, 95, 75, 30],
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