import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

    }, [user, from, navigate])

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const [token]=useToken(user);



    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInError = <p>{error?.message || updateError?.message}</p>
    }
    if(token){
        // console.log(user);
        navigate('/');
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/')
    }






    return (
        <div>
            <div>
                <div>
                    <div className="min-h-screen bg-black text-white flex flex-col justify-center sm:py-12">
                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                            <h1 className="font-bold text-center text-2xl mb-5">CAR<span className="text-red-600">CORNER</span> Sign Up</h1>
                            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="px-5 py-7">
                                    {/**********************name*******************/}
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>

                                    <input
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                        })}
                                        type="text"
                                        placeholder="Your Name"
                                        className="text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                        required />

                                    <label className='label'>
                                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                                    </label>
                                    {/**********************email*******************/}
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>

                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                        required />

                                    <label className='label'>
                                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                    </label>
                                    {/**********************password*******************/}
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>

                                    <input
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                        type="password"
                                        placeholder="Your confirm password"
                                        className="text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                        required />

                                    <label className='label'>
                                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                    </label>

                                    {/**********************login button*******************/}
                                    <button type="submit" value="Signup" className="transition duration-200 bg-black hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                        <span className="inline-block mr-2">SignUp</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    {signInError}
                                </form>


                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                                </div>
                                {/**********************social login*******************/}
                                <div className="p-5">
                                    <SocialLogin></SocialLogin>
                                </div>

                                <div className="py-5">
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="text-center sm:text-left whitespace-nowrap">
                                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                </svg>
                                                <span className="inline-block ml-1">Forgot Password</span>
                                            </button>
                                        </div>
                                        <div className="text-center sm:text-right whitespace-nowrap">
                                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                                <span className="inline-block ml-1">Help</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;