import request from "@/utils/request";
export const login = async () => {
  return await request({
    url: "/test",
    method: "get"
  });
};
