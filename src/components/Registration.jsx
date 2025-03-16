import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log('Registration',email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const creationTime = result?.user?.metadata?.creationTime;
                const newUser = {name, email, creationTime};
                // save new user info to the database 
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created to db',data);
                        if(data.insertedId) {
                            Swal.fire({
                                title: "Registration !",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch(error => {
                console.log('Error', error)
            })

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegistration} className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" name='name' className="input"  placeholder="Name" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input"  placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input"  placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Registration</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;