<template>
  <div>
    <div style="text-align: center;">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
   <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
    color: #333;
    font-size: 14px;
    font-weight: 400;
    background-color: #edf2f5;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
}
</style>
