import axios from "taro-axios";
import Taro from "@tarojs/taro";

const http = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  baseURL: "https://ycb-test1.yichuangbao.com/api",
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

http.interceptors.request.use(config => {
  const token = "111";
  config.headers = {
    Authorization: `Bearer ${token}`,
    token,
    ...config.headers
  };
  return config;
});

const showToast = title => {
  Taro.showToast({
    title,
    icon: "none",
    duration: 3000
  });
};
const showMessage = title => {
  const message = JSON.stringify(title).replace(/"/g, "");
  console.log(message);
  // TODO Request failed with status code 500 优化展示逻辑
  if (message.indexOf("Network") > -1) {
    showToast("请求失败，请联系客服");
  } else if (message.indexOf("timeout") > -1) {
    showToast("请求超时");
  } else {
    showToast(message);
  }
};
export default function request(options) {
  return new Promise((resolve, reject) => {
    http(options)
      .then(response => {
        if (response?.status === 200) {
          resolve(response.data);
        } else {
          throw response;
        }
      })
      .catch(result => {
        if (result?.status === 200 && result?.data?.code === -1) {
          //重新登陆 result?.data?.code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有 message 就显示
          showMessage(result?.data?.message ?? result?.message);
        }
        reject(result);
      })
      .finally(() => {});
  });
}
