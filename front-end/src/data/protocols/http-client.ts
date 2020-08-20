export interface HttpClient {
    get(params: any): Promise<any>;
    post(params: any): Promise<any>;
    put(params: any): Promise<any>;
    delete(params: any): Promise<any>
}