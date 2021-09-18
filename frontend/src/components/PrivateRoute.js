import React, { Children } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";


export default function PrivateRoute({childern, ...rest}) {
    const {user} = auth()
    return (
        <Route 
        {...rest}
        render = {() => (user ? childern : <Redirect to = "Login"/>)}
        >
        </Route>
    )
}