// index.ts
import { notification } from "antd";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

type Result<T> = {
  data: any;
  code: number;
  message: string;
  result: T;
};

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL as string;

// 导出Request类，可以用来自定义传递配置来创建实例
export class Request {
  // axios 实例
  instance: AxiosInstance;
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = { baseURL: BASE_API_URL, timeout: 60000 };

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    this.instance.interceptors.request.use(
      (config: any) => {
        // 一般会请求拦截里面加token，用于后端的验证
        const token = localStorage.getItem("token") as string;

        if (token) {
          config.headers!.Authorization = token;
        }

        return config;
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data } = res?.data || {};
        return data;
      },
      (err: any) => {
        let message = "";
        switch (err?.response?.status) {
          case 400:
            message = "Bad Request";
            break;
          case 401:
            message = "Unauthorized";
            // 这里可以做清空storage并跳转到登录页的操作
            break;
          case 403:
            message = "Forbidden";
            break;
          case 404:
            message = "Not Found";
            break;
          case 408:
            message = "Request Timeout";
            break;
          case 500:
            message = "Internal Server Error";
            break;
          case 502:
            message = "Bad Gateway";
            break;
          case 503:
            message = "Service Unavailable";
            break;
          case 504:
            message = "Gateway Timeout";
            break;
          case 505:
            message = "HTTP版本不受支持(505)";
            break;
          default:
            message = `link error(${err.response.status})!`;
        }

        notification.error({
          message: "Error!",
          description: message,
        });

        return Promise.reject(err.response);
      }
    );
  }

  // 定义请求方法
  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }
  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config);
  }
}

// 默认导出Request实例
export default new Request({});
