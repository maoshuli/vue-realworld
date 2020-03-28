import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from "./jwt.service";
import { API_URL} from "./config";

Vue.use(VueAxios, axios);

const ApiService = {
  // 初始化
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  // 设置头 jwt
  setHeader() {
    Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    });
  },
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },
  put() {

  },
  delete() {

  }
};

export default ApiService;

// 获取标签
export const TagsService = {
  get() {
    return ApiService.get("tags")
  }
};

export const ArticlesService = {
  query(type, params) {
    return ApiService.query("articles" + (type === "feed" ? "/feed" : ""), {
      params: params
    })
  },
  get(slug) {
    return ApiService.get("articles", slug);
  },
  create(params) {
    return ApiService.post("articles", { article: params})
  },

};