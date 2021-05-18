<template>
  <el-container class="main_content">
    <div class="chat_left dragable" @click.stop="hideToggleBar">
      <Search />
      <ChatList />
    </div>
    <div class="chat_right" @click.stop="hideToggleBar">
      <MessageBox />
      <ChatInput />
      <ToggleBar />
    </div>
    <ToggleUserModal />
  </el-container>
</template>
<script>
import Search from "../components/Search.vue";
import ToggleBar from "../components/ToggleBar.vue";
import ToggleUserModal from "../components/ToggleUserModal.vue";
import ChatInput from "../components/ChatInput.vue";
import MessageBox from "../components/MessageBox.vue";
import ChatList from "../components/ChatList.vue";
export default {
  name: "HomePage",
  components: {
    Search,
    ChatList,
    MessageBox,
    ChatInput,
    ToggleBar,
    ToggleUserModal,
  },
  methods: {
    hideToggleBar() {
      this.$store.commit("hideToggleBar", false);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

