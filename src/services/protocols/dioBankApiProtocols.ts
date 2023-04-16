import { ILogin, IRegister } from "../../api/Protocols/AuthProtocols";
import { RequestProtocol } from "./requestsProtocols/requestsProtocols";

export default interface dioBankApiProtocols {
  authenticateUser: (body: ILogin) => Promise<RequestProtocol>;
  registerUser: (body: IRegister) => void;
}
