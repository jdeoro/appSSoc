import axios from 'axios';
import { SecureStorageAdapter } from '@/middelware/secure-storage.adapter';
import { Platform } from 'react-native';

 const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';
 export const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.desarrollosweb.net.ar'

// export const API_URL =
//   STAGE === 'prod'
//     ? process.env.EXPO_PUBLIC_API_URL
//     : Platform.OS === 'ios'
//     ? process.env.EXPO_PUBLIC_API_URL_IOS
//     : process.env.EXPO_PUBLIC_API_URL_ANDROID;

const productsApi = axios.create({
  baseURL: API_URL,
});

productsApi.interceptors.request.use(async (config) => {
  // Verifica si tenemos un token en el secure storage
  const token = await SecureStorageAdapter.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { productsApi };
