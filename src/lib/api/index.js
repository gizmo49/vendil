let requestHead = {
    "Content-Type": "application/json",
}

export const API = (RequestParams) => {
    const { RequestUri, MethodType, Payload, signal } = RequestParams;
    (MethodType === `GET` || MethodType === `DEL`) ? (
        fetch((RequestUri), {
            method: MethodType,
            headers: requestHead,
            signal: signal
        }).then(response => response.json())) : (
            fetch((RequestUri), {
                method: MethodType,
                headers: requestHead,
                body: JSON.stringify(Payload),
                signal: signal
            }).then(response => response.json()))
}
