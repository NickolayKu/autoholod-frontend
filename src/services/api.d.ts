declare class Api {
    private baseUrl;
    private api;
    constructor();
    getCurrentUser(): Promise<any>;
}
export declare const api: Api;
export {};
