<template>
  <div>
    <!-- 三级联动组件(全局注册,无需引入) -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 传的值是floor 但子组件接受的是名字list -->
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入其余组件
import ListContainer from "@/pages/Home/ListContainer/ListContainer";
import Recommend from "@/pages/Home/Recommend/Recommend";
import Rank from "@/pages/Home/Rank/Rank";
import Like from "@/pages/Home/Like/Like";
import Floor from "@/pages/Home/Floor/Floor";
import Brand from "@/pages/Home/Brand/Brand";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 派发action 获取Floor组件数据
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>