<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home和Search显示,在登陆和注册时隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知Vuex发请求,获取数据,存储于仓库之中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style lang="less">

</style>
