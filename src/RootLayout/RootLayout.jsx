import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Spinner from '../components/Spinner';

const RootLayout = () => {
        const {loading} = useContext(AuthContext);
        if(loading){
                return <Spinner></Spinner>
        }
        return (
                <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        
                </div>
        );
};

export default RootLayout;