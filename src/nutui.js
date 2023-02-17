import { Icon, Button, Toast } from "@nutui/nutui-taro";
const setNutUi = app => {
  app
    .use(Icon)
    .use(Button)
    .use(Toast);
};
export default setNutUi;
