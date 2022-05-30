import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

    }, [user, from, navigate])


    const [token]=useToken(user);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signInError = <p className='text-red-600'><small>{error?.message}</small></p>
    }

    if (token) {
        navigate('/');
        // console.log(user);
    }
    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                <button type="button"
                    onClick={() => signInWithGoogle()}

                    className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
                <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Facebook</button>
                <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
            </div>
            {signInError}
        </div>
    );
};

export default SocialLogin;