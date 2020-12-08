
import * as firebase from 'firebase';

function createUser(email, password) {
    return (
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
            console.log("Kullanıcı başarıyla kayıt oldu");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        })
    )
}

export default createUser;