<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button block type="primary" @click="handleClick">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
    <nut-icon @click="handleClick2" name="dongdong"></nut-icon>
    <navigator url="/pages/module_b/test/index">跳转</navigator>
  </view>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { login } from "@/api/test";
export default {
  name: "Index",
  components: {},
  setup() {
    const state = reactive({
      msg: "toast",
      // type: "text",
      show: false,
      cover: false,
      // title: "",
      // bottom: "",
      // center: true,
    });
    const msg = ref(0)
    const state2 = reactive({
      msg: "toast",
      show: false,
    });
    // const msg = ref("欢迎使用 NutUI3.0 开发小程序");
    // const state = reactive({
    //   msg: '欢迎使用 NutUI3.0 开发小程序1',
    //   type: 'text',
    //   show: false,
    //   cover: false
    // });

    const handleClick = () => {
      state.msg = "123";
      state.show = true;
      state2.msg='sss'
      state2.show='sss2'
      // console.log(msg);
    };
    const handleClick2 = (ev) => {
      msg.value = 2222
      login();
      console.log(ev);
    };

    return {
      // msg,
      msg,
      ...toRefs(state),
      ...toRefs(state2),
      handleClick,
      handleClick2,
    };
  },
};
</script>

<style lang="scss">
</style>
