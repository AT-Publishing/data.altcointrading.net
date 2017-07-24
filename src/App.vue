<template>
  <div id="app">
    <h1>Bitcoin & Altcoin Trading Data</h1>
    <nav>
      <ul>
        <li><router-link to="/">[Tabled Market Data]</router-link></li>
        <li><router-link to="/solo">[Altindex]</router-link></li>&nbsp;--&nbsp;
        <li><a target="_blank" href="https://data.altcointrading.net/chart/">[Altindex Chart]</a></li>
        <li><a target="_blank" href="https://data.altcointrading.net/api/chartdata.json">[API]</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width:60%;
  margin:0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-family: 'Avenir',serif;
  color: #777;
  font-weight: 200;
  font-size: 11px;
  text-transform: uppercase;
}

a {
  color: #001f3f;
}
</style>
