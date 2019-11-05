import axios from 'axios/index'

/**
 * Сокращение для того что бы каждый раз не писать адрес и порт сервера
 * @type {AxiosInstance}
 */
export const HTTP = axios.create({
    baseURL: "https://5daca7380af117001417072a.mockapi.io/api/v1/"
});
