<template>
<span>
  <!-- <HeaderVue /> -->
  <CarouselVue />
</span>
</template>

<script>
import HeaderVue from "./components/header";
import CarouselVue from "./components/carousel";
export default {
    // 组件名称
    name: "HomePage",
    // 组件中数据
    data() {
        return {};
    },
    components: {
        HeaderVue,
        CarouselVue
    },
    methods: {
        // details: function() {
        // },
    }
};
</script>

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
.titleStyle {
    text-align: left;
}
</style>
