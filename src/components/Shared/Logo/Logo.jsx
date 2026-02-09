import React from 'react';
import proChallenger from '../../../assets/ProChallenger.png'
const Logo = () => {
    return (
        <div className='flex items-center'>
            <img src={proChallenger} alt='logo' width='70' height='70' />
                          <h1 className='text-2xl font-bold bg-gradient-to-r from-indigo-600 via-pink-600 to-blue-500 bg-clip-text text-transparent animate-pulse animate-gradient'>ProChallenger</h1>
        </div>
    );
};

export default Logo;