import React from 'react'
import { loginByEmail , logout } from '../../commonjs/auth';

const Public = () => {

    const login = async (event) => { 

        event.preventDefault() ;
        console.log(event) ;
        const { email , password } = event.target ;

        loginByEmail(email.value , password.value) .then(user => {

            console.log('user' , user)

        }).catch(error => {

            console.log('error' , error.code)

        });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    {/* Début formulaire */}
                    <form onSubmit={login}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            {/*Fin Email */}


                            {/* Mot de passe */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/*Fin Mot de passe */}


                            {/* Connexion */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                    </form>
                    {/* Fin formulaire */}


                </div>
            </div>
        </div>
    )
}

export default Public