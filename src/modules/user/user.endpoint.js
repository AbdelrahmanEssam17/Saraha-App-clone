import { roleTypes } from "../../middleware/auth.middleware.js";
export const endPoint={
    //profile:Object.values(roleTypes)
    profile:[roleTypes.Admin,roleTypes.User]
}