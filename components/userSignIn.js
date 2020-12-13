import {connect} from 'react-redux';
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

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(null,mapDispatchToProps)(userSignIn);