import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const AllUsers = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div>
            <h2 className="text-4xl text-center p-5 rancho-font"> Total Users: {users.length}</h2>
            <div className="overflow-x-auto lg:px-40 md:px-20 px-5">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-xl rancho-font'>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>creationTime</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}

                    {
                        users.map((user, index) => <tr className='text-lg rancho-font' key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.creationTime}</td>
                        </tr>)
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;