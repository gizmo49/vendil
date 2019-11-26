const base64EncodeObject = (obj) => {
    let objJsonStr = JSON.stringify(obj);
    return btoa(objJsonStr)
}

export const generateAuthHeaders = ({MethodType, RequestUri, Payload }) => {
    let withBearer = {
        "Content-Type":"application/json",
    }

    return withBearer;

};

