import {api} from "./api";

export default function companiesApi() {
    return {
        create: async (data) =>
            api().post('/companies', data),
        listCompanies: async () =>
            api().get('/companies',),
        singleCompany: async (id) => 
            api().get(`/companies/${id}`),
        deleteCompany: async (id) =>
            api().delete(`/companies/${id}`),
        updateCompany: async (id, data) => 
            api().put(`/companies/${id}`, data)
     
        
    }
}