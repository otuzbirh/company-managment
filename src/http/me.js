import {api} from "./api";

export default function meApi() {
    return {
        
        meEndpoint: async () =>
            api().get('/me',),
       
     
        
    }
}