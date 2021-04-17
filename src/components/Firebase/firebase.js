import app from 'firebase/app'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "react-firebase-authentic-4f07b",
    storageBucket: "react-firebase-authentic-4f07b.appspot.com",
    messagingSenderId: "288717755957",
    appId: "1:288717755957:web:d0d0014b713016b43e037c"
}

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
    }
}

export default Firebase