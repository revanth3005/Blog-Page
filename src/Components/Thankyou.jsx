import React from 'react';
import { Navigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate=Navigate()
    
    return (
        <div>
            <h1 style={{'textAlign':'center'}} className='mt-4'>
                Thank you🤩
            </h1>
        </div>
    );
}

export default Thankyou;
