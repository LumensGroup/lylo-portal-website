
const bookingEngineUrl = process.env.REACT_APP_BOOKING_ENGINE_URL;
const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
const identityApiUrl = process.env.REACT_APP_IDENTITY_API_URL;

export const getFullBoolingEngineUrl = (path: string) => {
    return `${bookingEngineUrl}/#${path}`;
};

export const getAuthUrl = () => {
    return `${identityApiUrl}/sps/lylo/authorize`
}

export const getSingpassCallbackUrl = (sessionId: string) => {
    return `${baseApiUrl}/driver/singpass/callback?session_id=${encodeURIComponent(
        sessionId
    )}`
}

export const getSingpassCallbackErrorUrl = (sessionId: string) => {
    return `${baseApiUrl}/driver/singpass/callback/error?session_id=${encodeURIComponent(
        sessionId
    )}`
}