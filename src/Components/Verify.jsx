import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Verify = () => {
    const navigate=useNavigate()

    const[verify,setVerify]=useState({verify:""})

    const verifyOnsubmit = (e) =>{
        e.preventDefault()
        const url=`http://127.0.0.1:3001/${localStorage.email}/${verify.verify}`
        axios.get(url)
        .then((response)=>{
            console.log(response);
            navigate('/Thankyou')
            localStorage.removeItem('email')
        })
        .catch((error)=>{
            alert('worng otp')
            console.error(error);
        })

        


    }
    const onChangehandel = (e) =>{
        setVerify({...verify,[e.target.name]:e.target.value})
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 adjust">
                        <form onSubmit={verifyOnsubmit}>
                        <div className='col-md-3 mt-4'>
                                <input type="text" name="verify" id="verify" className='form-control' required style={{'width':'400px'}}
                                    placeholder='Enter OTP' onChange={onChangehandel} value={verify.verify} />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <input type="submit" value="Submit" className='btn btn-primary' style={{'marginLeft':'150px'}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verify;
