/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
class Api {
    constructor() {
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseUrl = import.meta.env.VITE_API_URL;
        this.api = axios.create({
            baseURL: this.baseUrl,
        });
    }
    async getCurrentUser() {
        try {
            const { data } = await this.api.get(`/users/profile`);
            return data;
        }
        catch (error) {
            return error;
        }
    }
}
export const api = new Api();
