import { initializeApp } from "firebase/app";


function firebaseInit() {
    const firebaseConfig = {
        apiKey: "AIzaSyDQ6dsBEH1aNYrjJLkRHbOKCu_ngwMWmD0",
        authDomain: "blog-23ad3.firebaseapp.com",
        projectId: "blog-23ad3",
        storageBucket: "blog-23ad3.appspot.com",
        messagingSenderId: "613309717866",
        appId: "1:613309717866:web:e276e7f9295acad7551913",
        measurementId: "G-57TT12SS8J"
    };

    const init = initializeApp(firebaseConfig);
}

export default firebaseInit
