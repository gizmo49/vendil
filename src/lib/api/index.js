let requestHead = {
    "Content-Type": "application/json",
}
const BASE_URL = process.env.REACT_APP_API_DOMAIN;

export const API = (RequestParams) => {
    const { RequestUri, MethodType, Payload, signal } = RequestParams;
    if (MethodType === `GET` || MethodType === `DEL`) {
        return fetch((`${BASE_URL}${RequestUri}`), {
            method: MethodType,
            headers: requestHead,
            signal: signal
        }).then(response => response.json())
    } else {
        return fetch((`${BASE_URL}${RequestUri}`), {
            method: MethodType,
            headers: requestHead,
            body: JSON.stringify(Payload),
            signal: signal
        }).then(response => response.json())
    }
}
