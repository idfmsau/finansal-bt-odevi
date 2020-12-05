
import * as firebase from 'firebase';

function userSignIn(email, password) {
    return (
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
        console.log('Üye giriş yaptı!');
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    })
    )
}

export default userSignIn;