<template>
  <div id="Main">
    <SideBar />
    <section class="container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import XmppClient from '../../utilities/XmppClient';
var client;
export default {
  components: {
    SideBar,
  },
  mounted() {
    console.log("main mounted");
    const test = XmppClient.getInstance().test();
    console.log("test = " + test);
    var _this = this;
    XmppClient.getInstance().startListenMessage((msg) => {
      const replyContent = "received message: " + msg.body;
      const replyMsg = {
        messageType: 302001,
        reply: replyContent,
      };
      _this.$store.dispatch("receiveMessage", replyMsg);
      console.log("main listen msg = " + msg.from);
    });
  },
};
</script>

<style lang="scss" scoped>
#Main {
  display: flex;
  width: 100%;
  height: 710px;
  background: #ffffff;
}
.el-select {
  display: block;
}
section {
  height: 100%;
  flex: 1;
  background: #f2f2f2;
  margin-left:0px;
}
</style>
