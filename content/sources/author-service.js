const resolve = function resolve(query){
    const requestURI = '/author/v1/?limit=10';
    return requestURI;
};
export const authorFilter = '{firstName lastName email}'
export default {
    resolve,
    params: {},

};