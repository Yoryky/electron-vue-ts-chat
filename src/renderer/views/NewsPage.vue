<template>
  <el-container class="main_content">
    <div class="chat_left dragable">
      <Search />
      <FriendList />
    </div>
    <div class="chat_right">
      <FriendInfo />
    </div>
  </el-container>
</template>
<script>
import Search from "../components/Search.vue";
import FriendList from "../components/FriendList.vue";
import FriendInfo from "../components/FriendInfo.vue";
export default {
  components: {
    Search,
    FriendList,
    FriendInfo,
  },
};
</script>
<style lang="scss" scoped>
</style>
