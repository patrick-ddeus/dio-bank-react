/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosError } from "axios";
import { ILogin, IRegister } from "../api/Protocols/AuthProtocols";
import { RequestProtocol } from "./protocols/requestsProtocols/requestsProtocols";
import dioBankApiProtocols from "./protocols/dioBankApiProtocols";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL_API,
  headers: { "Content-Type": "application/json" },
});

class DioBankApi implements dioBankApiProtocols {
  authenticateUser = async (
    body: ILogin
  ): Promise<RequestProtocol> => {
    try {
      const response = await axiosInstance.post("/", body);
      return response.data as RequestProtocol;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  registerUser = async (
    body: IRegister
  ): Promise<RequestProtocol | AxiosError> => {
    try {
      const response = await axiosInstance.post("/", body);
      return response.data as RequestProtocol;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
export default new DioBankApi();
