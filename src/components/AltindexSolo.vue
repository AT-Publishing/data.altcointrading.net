<template>
  <section class="container">
    <single-line :data="$data.points"/>
  </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import apicache from 'apicache'
import SingleLine from './SingleLine'
let cache = apicache.middleware
//     <single-line :data="$data.points"/>
export default {
  name: 'altindex',
  data () {
    return {
      points: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Altindex - AltBTC Pairs Index',
            borderWidth: 3,
            borderColor: '#f88979',
            backgroundColor: 'rgba(248, 137, 121, 0.6)',
            data: [40, 20]
          }
        ]
      },
      options: [{responsive: true, maintainAspectRatio: true}]
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
    axios.get(`https://data.altcointrading.net/api/chartdata.json`, cache('5 minutes')) // , cache('5 minutes')
    .then(response => {
      // this.points = response.data.data
      var labels = []
      var set = []
      for (var i = 0; i < response.data.data.length; i++) {
        labels.push(response.data.data[i]['time'])
        set.push(response.data.data[i]['index'])
      }
      this.points.labels = labels.reverse()
      this.points.datasets[0].data = set.reverse()
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

</style>
