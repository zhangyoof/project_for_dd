import Axios from 'axios';
import qs from 'qs';
import rootStore from "../RootStore";
import appUrlConfig from '../config/apiConfig';
import showToast from './Toast';
import Loading from '../components/Loading';

Axios.defaults.timeout = 600000; // 模型解析及pw文件传输耗时较长
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


var request = function (type, url, params, isToast, responseType = 'json') {

    type = type || 'get';
    isToast = isToast || false
    if (!url) throw new Error('请指定url');
    var obj = {};
    params = Object.prototype.toString.call(params) === '[object Object]' ? params : {};

    if (type === 'get') {
        obj.method = 'get';
        obj.url = url;
        obj.params = params;
        obj.responseType = responseType;
    } else if (type === 'post') {
        obj.method = 'post';
        obj.url = url;
        params = qs.stringify(params);
        obj.data = params;
        obj.responseType = responseType;
    } else {
        throw new Error('请指定请求方式');
    }
    var instance = Axios.create();
    //当创建实例的时候，拦截器放在default无效
    instance.interceptors.request.use(config => {
        //不能使用null，否则会将token的值变成'null'

        config.headers['Authorization'] = appUrlConfig.token || '';
        return config;
    }, error => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });
    let __promise = new Promise((resolve, reject) => {
        instance.request(obj).then(res => {
            if (res.status == 200) {
                /**
                 * 如果返回的事blob 则直接返回
                 */
                if (res.data instanceof Blob) {
                    return resolve(res);
                }
                /**
                 * 无权限处理
                 */
                if (res.data.code == 401) {
                    // 登出
                    rootStore._Logout();
                    return resolve(res.data);
                }

                /**
                 * 有权请求
                 */
                if (res.data.code == '200' || res.data.code == '201' || res.data.code == '202' || res.data.code == '204') {
                    isToast && message.info(res.data.message && res.data.message || '请求成功');
                    return resolve(res.data);
                } else {
                    isToast && message.warning(res.data.message && res.data.message || '请求错误');
                    return resolve(res.data);
                }
            }
            showToast('请求失败');
            Loading.hide();
            reject(res.data);
        }, err => {
            let parseError = JSON.parse(JSON.stringify(err));
            let code = parseError.response.status;
            if (code == 401) {
                return window.app._store.dispatch({type: 'global/getUngrantInfo'})
            }
            if (code >= 400 && code < 500 && code != 401) {
                showToast('客户端异常');
                Loading.hide();
            }
            if (code >= 500) {
                showToast('服务端异常');
                Loading.hide();
            }
            if (code == 'ECONNABORTED') {
                showToast('请求超时');
                Loading.hide();
            }
            reject(code);
        }).catch(e => {
            showToast('请求异常');
            Loading.hide();
            reject('异常');
        });
    });
    return __promise;
}

export default request;
