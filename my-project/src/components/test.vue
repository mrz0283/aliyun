<template>
  <div class="tets">
    <h1>{{ msg }}</h1>
    <h1>{{ url }}</h1>
    <h1>{{ size }}</h1>
    <el-button type="primary" v-on:click="handleClose">主要按钮</el-button>
     <router-view />
  </div>
</template>

<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
export default {
  // name: "HelloWorld",
  data () {
    return {
      msg: '测试页面',
      url: '测试，测试，测试',
      size: '.............'
    }
  },
  methods: {
    handleClose() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
