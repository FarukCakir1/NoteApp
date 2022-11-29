// import axios from "axios"


// export const appAxios = axios.create({
//     baseURL: "http://localhost:5000"
// })


import axios from "axios";
import { useUserStore } from '@/stores/';

const axiosClient = axios.create({
    baseURL: "http://localhost:5000"
});

axiosClient.interceptors.request.use((config) => {
    const userStore = useUserStore();
    config.headers.Authorization = `Bearer ${userStore.user?.tokens?.access_token}`;
    config.headers.Accept = "application/json";
    return config
})

export default axiosClient;