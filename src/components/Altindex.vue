<template>
  <section class="container">
    <single-line :data="$data.points" :options="{responsive: true, maintainAspectRatio: true}" :width="750" :height="560"/>
  </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import apicache from 'apicache'
import SingleLine from './SingleLine'
let cache = apicache.middleware
export default {
  name: 'altindex',
  data () {
    return {
      points: {
        labels: [],
        datasets: [
          {
            label: 'Altindex',
            borderWidth: 6,
            pointBorderWidth: 1,
            borderColor: '#41b883',
            pointHoverBackgroundColor: '#41b883',
            backgroundColor: 'rgba(65, 184, 131, 0.2)',
            data: []
          },
          {
            label: 'ETHBTC',
            borderWidth: 2,
            pointStyle: 'rect',
            pointBorderWidth: 1,
            borderColor: '#f88979',
            pointHoverBackgroundColor: '#f88979',
            backgroundColor: 'rgba(248, 137, 121, 0.3)',
            data: []
          },
          {
            label: 'XMRBTC',
            borderWidth: 2,
            pointStyle: 'rect',
            pointBorderWidth: 1,
            borderColor: '#fac59c',
            pointHoverBackgroundColor: '#fac59c',
            backgroundColor: 'rgba(250, 197, 156, 0.8)',
            data: []
          },
          {
            label: 'DASHBTC',
            borderWidth: 2,
            pointStyle: 'rect',
            pointBorderWidth: 1,
            borderColor: '#ffd1f9',
            pointHoverBackgroundColor: '#ffd1f9',
            backgroundColor: 'rgba(255, 209, 249, 0.8)',
            data: []
          }
        ]
      },
      options: [{responsive: false, maintainAspectRatio: false, width: '750px', height: '560px'}]
    }
  },
  components: { SingleLine },
  filters: {
    moment: function (str) {
      var d = new Date(str)
      if (moment(d).isValid()) {
        return moment(d).format('MMMM Do \'YY, h:mm a')
      } else {
        return '...'
      }
    },
    dollars: function (str) {
      var dp = str / 100
      if (isNaN(dp)) {
        return '...'
      } else {
        return dp
      }
    },
    bitcoins: function (str) {
      var dp = Math.round(str * 1000000) / 1000000
      if (isNaN(dp)) {
        return '...'
      } else {
        return dp
      }
    }
  },
  created () {
    axios.get(`https://data.altcointrading.net/api/advanced.json`, cache('5 minutes')) // , cache('5 minutes')
    .then(response => {
      // this.points = response.data.data
      var labels = []
      var index = []
      var eth = []
      var xmr = []
      var dash = []
      for (var i = 0; i < response.data.data.length; i++) {
        labels.push(response.data.data[i]['time'])
        index.push(response.data.data[i]['index'])
        eth.push(response.data.data[i]['eth'])
        xmr.push(response.data.data[i]['xmr'])
        dash.push(response.data.data[i]['dash'])
      }
      this.points.labels = labels.reverse()
      this.points.datasets[0].data = index.reverse()
      this.points.datasets[1].data = eth.reverse()
      this.points.datasets[2].data = xmr.reverse()
      this.points.datasets[3].data = dash.reverse()
    })
  }
}
</script>

<style scoped>

</style>
