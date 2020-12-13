
import * as firebase from 'firebase';

function createUser(email, password) {
    return (
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            throw error.toString();
        })
    )
}

export default createUser;