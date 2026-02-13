import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { IoBagCheckOutline } from "react-icons/io5";

const PaymentSuccess = () => {
    const [searchParams, setSearchParams]= useSearchParams();
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);
    
    useEffect(()=>{
        if(sessionId){
            axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, {sessionId})
        }
    }, [sessionId])
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-white p-10 rounded-lg shadow-lg text-center'>
                <IoBagCheckOutline className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                <h1 className='text-3xl font-semibold mb-2'>Payment Successful!</h1>
                <p className='text-gray-600 mb-6'>Thanks for Registration in the Contest. Your registration is being processed.</p>

                <Link to='/dashboard/my-contests' className='inline-block bg-lime-500 text-white font-semibold py-2 px-4 rounded'>
                Go to My Contests
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;