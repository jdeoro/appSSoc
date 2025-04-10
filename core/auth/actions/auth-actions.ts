import { productsApi } from '../api/productsApi';
import { User } from '../interface/user';

export interface AuthResponse {
  token: string;
  ok : boolean;
  msg : string
  data : {
    fullname : string;
    id: number
    role: number;
    afiliado : string;
  }
}

const returnUserToken = ( data: AuthResponse  ): { user: User } => {
  const { token , ok , msg,data : datos} = data;
  console.log("returnUserToken.data:", datos,ok,msg,token)
  const user: User = {
      msg,  ok, token,
    data: {
      fullname: datos.fullname,
      id: datos.id,
      role: datos.role,
      afiliado: datos.afiliado,
    }
  };

  console.log("user:",user)
//data.data.afiliado
  return {
    user,
  };
};

export const authLogin = async (email: string, pas: string) => {
  email = email.toLowerCase();
  
  try {
    const { data } = await productsApi.post<AuthResponse>('/login', { email, pas, });
 
    console.log("DATA=", data)
    return returnUserToken(data);
  } catch (error) {
    //console.log(error);
    // throw new Error('User and/or password not valid');
    return null;
  }
};

export const authRegister = async (email: string, pas: string , fullname : string ) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>('/register', { email,pas, fullname });

    return returnUserToken(data);
    
  } catch (error) {
    console.log(error);
    // throw new Error('User and/or password not valid');
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>('/auth/check-status');

    return returnUserToken(data);
  } catch (error) {
    return null;
  }
};

// TODO: Tarea: Hacer el register
