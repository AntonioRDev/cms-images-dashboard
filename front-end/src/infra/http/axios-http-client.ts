import axios from "axios";
import { HttpClient } from "data/protocols/http-client";

export class AxiosHttpClient implements HttpClient{
    async get(params: any): Promise<any> {
        return axios.get(params.url);
    }

    async post(params: any): Promise<any> {       
        return await axios.post(params.url, params.body);
    }

    async put(params: any): Promise<any> {       
        return await axios.put(params.url, params.body);
    }

    async delete(params: any): Promise<any> {         
        return await axios.delete(params.url);
    }
}