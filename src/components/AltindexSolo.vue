<template>
  <section class="container">
    <single-line v-if="isLoaded == true" :data="this.points" :options="{responsive: true, maintainAspectRatio: true}"/>
    <p>{{this.points.labels}}</p>
  </section>
</template>

<script>
import axios from 'axios'
import SingleLine from './SingleLine'
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
  methods: {
    isLoaded () {
      return false
    }
  },
  components: { SingleLine },
  created () {
    axios.get(`https://data.altcointrading.net/api/chartdata.json`)
    .then(response => {
      // this.points = response.data.data
      var labels = []
      var set = []
      for (var i = 0; i < 15; i++) {
        labels.push(response.data.data[i]['time'])
        set.push(response.data.data[i]['index'])
      }
      this.points.labels = labels.reverse()
      this.points.datasets[0].data = set.reverse()
      this.isLoaded = true
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

</style>
