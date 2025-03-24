import {create} from 'zustand';

interface IData {
    externalUri: string
}

export const useDataStore = create<IData>()( () => ({
    externalUri: 'https://js.desarrollosweb.net.ar/img/' 
}));