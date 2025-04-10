export interface User {
  ok: boolean;
  token: string;
  msg: string;
  data : {
    fullname : string;
    id: number
    role: number;
    afiliado : string;
  } 
}
