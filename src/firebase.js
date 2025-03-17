import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBS8dvy1QlQqEIlz3cuq705hQSM1lNcQa8',
    authDomain: 'ecommerce-2ad96.firebaseapp.com',
    projectId: 'ecommerce-2ad96',
    storageBucket: 'ecommerce-2ad96.firebasestorage.app',
    messagingSenderId: '191820395272',
    appId: '1:191820395272:web:57d5b5e6199caca77d32bd',
    measurementId: 'G-HYB38TZPSC',
}
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setFcmToken) => {
    return getToken(await messaging, {
        vapidKey: '',
    })
        .then((currentToken) => {
            if (currentToken) {
                setFcmToken(currentToken)
            } else {
                setFcmToken()
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )
export const auth = getAuth(firebaseApp)
