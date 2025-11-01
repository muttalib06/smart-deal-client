import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Spinner from '../components/Spinner';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
        const {loading,user} = useContext(AuthContext);
        if(loading){
                return <Spinner></Spinner>
        } else if(user){
                return children
        }
        else{
                return <Navigate to="/login"></Navigate>
        }
};

export default PrivateRoute;