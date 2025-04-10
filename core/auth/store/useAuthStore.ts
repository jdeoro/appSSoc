import { create } from 'zustand';
import { User } from '@/core/auth/interface/user';
import { authCheckStatus, authLogin, authRegister } from '@/core/auth/actions/auth-actions';
import { SecureStorageAdapter } from '@/middelware/secure-storage.adapter';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
  
  //property
  estado: AuthStatus;
  token?: string;
  user?: User;

  //methods
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: ( user?: User) => Promise<boolean>;
  register: (email:string, password : string , fullname : string ) => Promise<boolean>

}

export const useAuthStore = create<AuthState>()((set, get) => ({
  // Properties
  estado: 'checking',
  token: undefined,
  user: undefined,

  // methods
  changeStatus: async ( user?: User) => {
    // NO hay token o usuario
    if (!user) {
      set({
         estado: 'unauthenticated',
         token: undefined,
         user: undefined
         });

      await SecureStorageAdapter.deleteItem('token');
      return false;
    }
    console.log("user:", JSON.stringify(user))
    // SI hay token y usuario
    set({
      estado: 'authenticated',
      token: user.token,
      user: user,
    });
    await SecureStorageAdapter.setItem('token', user.token);
    return true;
  },

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    
    return get().changeStatus(resp?.user);
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    get().changeStatus(resp?.user);
  },

  logout: async () => {
    SecureStorageAdapter.deleteItem('token');

    set({ estado: 'unauthenticated', token: undefined, user: undefined });
  },
  
  register: async (email: string, password: string,fullname: string ) => {
    const resp = await authRegister(email, password, fullname);

    if (resp?.user) {
      await get().changeStatus(resp.user);
      return true;
    }
    return false;
  },



}));
