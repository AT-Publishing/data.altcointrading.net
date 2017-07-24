<template>
  <section class="container">


    <div class="table">
      <div class="table-line">
        <p><strong>OKEX futures</strong></p>
        <p><small>Last data <br>{{this.forwardLast.date}}</small></p>
      </div>
      <div class="table-line">
        <p>Okex Index</p>
        <p>{{this.forwardLast.index}}</p>
      </div>
      <div class="table-line">
        <p>Weekly F0</p>
        <p>{{this.forwardLast.f0_week}}</p>
      </div>
      <div class="table-line">
        <p>Weekly True</p>
        <p>{{this.forwardLast.f_week}}</p>
      </div>
      <div class="table-line">
        <p>Qtly F0</p>
        <p>{{this.forwardLast.f0_qtly}}</p>
      </div>
      <div class="table-line">
        <p>Qtly True</p>
        <p>{{this.forwardLast.f_qtly}}</p>
      </div>
    </div>

    <div class="table">
      <div class="table-line">
        <p><strong>OKEX futures</strong></p>
        <p><small>Last data <br>{{this.forwardLast.date}}</small></p>
      </div>
      <div class="table-line">
        <p>Okex Index</p>
        <p>{{this.forwardLast.index}}</p>
      </div>
      <div class="table-line">
        <p>Weekly F0</p>
        <p>{{this.forwardLast.f0_week}}</p>
      </div>
      <div class="table-line">
        <p>Weekly True</p>
        <p>{{this.forwardLast.f_week}}</p>
      </div>
      <div class="table-line">
        <p>Qtly F0</p>
        <p>{{this.forwardLast.f0_qtly}}</p>
      </div>
      <div class="table-line">
        <p>Qtly True</p>
        <p>{{this.forwardLast.f_qtly}}</p>
      </div>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'altindex',
  data () {
    return {
      forwardLast: {
        '-': '-'
      }
    }
  },
  components: { },
  methods: {
    isLoaded () {
      return false
    }
  },
  created () {
    axios.get(`https://data.altcointrading.net/fwd/forwardPoints.json`) // , cache('5 minutes')
    .then(response => {
      this.forwardLast = response.data.data[0]
      this.isLoaded = true
    })
  }
}
</script>

<style scoped>
.table {
  display: table;
  margin: 10px;
  float: left;
}
.table-line {
  display: table-row;
}
.table-line:first-of-type {
  background: rgba(161, 179, 197, 0.84);
}
.table-line:nth-of-type(2n) {
  background: rgba(161, 179, 197, 0.14);
}
.table-line > p {
  display: table-cell;
  padding: 4px 8px;
  border-bottom: 1px solid #607387;
  vertical-align: middle
}
.table-line:first-of-type > p {
  border-top: 1px solid #607387;
}

.green-bg {
  background: #4fc08d;
}
.red-bg {
  background: #FF4136;
}
</style>
