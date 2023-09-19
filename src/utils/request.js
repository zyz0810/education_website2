import axios from "axios";
import Qs from "qs";
import { MessageBox, Message, Confirm } from "element-ui";
// import store from "@/store";
// import { getToken } from "@/utils/auth";
// let  requestUrl ='http://116.63.110.19:9200/' //dev环境
let requestUrl ='http://123.60.100.108:9200' //测试环境
// let  requestUrl ='http://124.71.148.233:9200/' //uat环境
// let requestUrl ='http://192.168.2.29:9200/' //袁仟伍环境
switch (process.env.VUE_APP_MODE) {
 case 'development':
  // requestUrl ='http://116.63.110.19:9200/' //dev环境
  requestUrl ='http://123.60.100.108:9200' //测试环境
  // requestUrl ='http://124.71.148.233:9200/'  //uat环境
  // requestUrl ='http://192.168.2.252:7003/' //李卫
  // requestUrl ='http://192.168.2.29:9200/' //袁仟伍环境
  break;
  //  //开发环境
  // case 'development':
  //  requestUrl='http://116.63.110.19:9200/'
  //  break;
 case 'production':
 requestUrl ='http://kyd.kyaoduo.com'
 break;
 case 'uat':
 requestUrl ='http://uat.shop.kyaoduo.com/'
 break;
 case 'test':
 requestUrl ='http://test.shop.kyaoduo.com'
 break;
 default:
  // requestUrl ='http://116.63.110.19:9200/'  //dev环境
  requestUrl ='http://123.60.100.108:9200/' //测试环境
  // requestUrl ='http://124.71.148.233:9200/' //uat环境
  // requestUrl ='http://192.168.2.29:9200/' //袁仟伍环境
  break;
}


export { requestUrl };


// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://192.168.124.249:9200/', //张文松
  // baseURL: 'http://192.168.124.39:9200/', //王文洛
  // baseURL: 'http://uat.shop.kyaoduo.com/',
  // withCredentials: false, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
});
axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = requestUrl;
    config.headers["client_id"] = "supplierApp";
    config.headers["client_secret"] = "supplierApp";
    // config.headers.Authorization = "Bearer " + 'df992a43-147e-4775-bc3a-748970f690e6';
    // if (store.getters.supplier_token) {
    //   // config.headers['Authorization'] = store.getters.token
    //   config.headers.Authorization = "Bearer " + store.getters.supplier_token;
    //   // config.headers.Authorization = "Bearer " + 'd48e1ec6-53a1-4e96-a069-9b7000a7ca86';
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    if (res.resp_code === 0 || !res.resp_code) {
      return res;
    }
    if (res.resp_code === 401) {
      store.dispatch("user/resetToken").then(() => {
        location.reload();
      });
    } else if (res.resp_code === 2) {
      Message({
        message: "登录密码错误",
        type: "error",
        duration: 5 * 1000
      });
    } else if (res.resp_code === 3) {
      Message({
        message: "您没此权限",
        type: "error",
        duration: 5 * 1000
      });
    } else if (res.resp_code === 4) {
      Message({
        message: "该数据不存在",
        type: "error",
        duration: 5 * 1000
      });
    } else if (res.resp_code === 5) {
      Message({
        message: "该数据已存在",
        type: "error",
        duration: 5 * 1000
      });
    } else if (res.resp_code === 6) {
      // MessageBox.confirm('该数据有关联数据，不能删除', '提示', {
      //   confirmButtonText: '确定',
      //   showCancelButton:false,
      //   type: 'warning'
      // });
      Message({
        message: "该数据有关联数据，不能删除",
        type: "error",
        duration: 5 * 1000
      });
      return res;
    } else {
      Message({
        message: res.resp_msg || "获取数据失败",
        type: "error",
        duration: 5 * 1000
      });
    }
  },
  error => { 
    Message({
      message: error.response.data.resp_msg||'接口报错',
      type: "warning",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
