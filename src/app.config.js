export default defineAppConfig({
  pages: ["pages/index/index", "pages/second/index"],
  window: {
    backgroundColor: "#fff",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  subpackages: [
    {
      root: "pages/module_b",
      pages: ["test/index"],
    },
  ],
});
