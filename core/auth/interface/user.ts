export interface User {
  ok: boolean;
  token: string;
  msg: string;
  data : {
    fullname : string;
    id: number
    role: number;
    afiliado : string;
    apellido : string;
    codpos: string;
    domicilio: string;
    descripcion: string;
    estado: string;
    fecnac: string;
    localidad: string;
    nombre: string;
    nrodoc: string;
    sexo: string;
    tel: string;
    descrip:string    
  } 
}

