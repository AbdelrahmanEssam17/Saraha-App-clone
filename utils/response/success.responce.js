export const successResponse=({message,data,status}={})=>{
    return res.status(status||200).json({successmessage:message,data})
}