import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const { loading, signup } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-50'>
                    Signup <span className='text-black'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-50'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-50'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10'
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-gray-50'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-gray-50'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to='/login'
                        className='text-sm hover:underline text-gray-50 hover:text-blue-600 mt-2 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? "Signing up..." : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;



//Start code here
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox.jsx'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
//         <h1 className='text-3xl font-semibold text-center text-gray-50' >Signup
//                 <span className='text-black' > ChatApp</span>
//         </h1>

//         <form>
//             <div>
//                 <label className='label p-2' >
//                     <span className='text-base label-text' >Full Name</span>
//                 </label>
//                 <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2' >
//                     <span className='text-base label-text' >Username</span>
//                 </label>
//                 <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label ' >
//                     <span className='text-base label-text' >Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter Password' className='w-full input input-border h-10' />
//             </div>
//             <div>
//                 <label className='label ' >
//                     <span className='text-base label-text' >Confirm Password</span>
//                 </label>
//                 <input type='password' placeholder='Confirm Password' className='w-full input input-border h-10' />
//             </div>
//             <GenderCheckbox/>

//             <a className='text-sm hover:underline hover:text-black mt-2 inline-block' href='0' >Already have an account ?</a>

//             <div><button className='btn btn-block btn-sm mt-2' >Signup</button></div>
//         </form>


//     </div>

//     </div>
//   )
// }

// export default SignUp