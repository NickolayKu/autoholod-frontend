/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

class Api {
  private baseUrl: string;
  private api: any;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
    this.api = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async getCurrentUser() {
    try {
      const { data } = await this.api.get(`/users/profile`);
      return data;
    } catch(error){
      return error;
    }
  }
}

export const api = new Api();