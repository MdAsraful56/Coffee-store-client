import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    // const handleUserDelete = id => {
    //     // console.log(id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //         }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Swal.fire({
    //             // title: "Deleted!",
    //             // text: "Your file has been deleted.",
    //             // icon: "success"
    //             // });

    //             // delete form database 
    //             fetch(`http://localhost:5000/users/${id}`, {
    //                 method: 'delete'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                 })
    //         }});
    // }

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
                        <th></th>
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
                            <td>{user.creationTime}</td>
                            {/* <td>
                                <button className="btn">x</button>
                                <button onClick={()=>handleUserDelete(user._id)} className="btn bg-red-600"><MdDelete size={25} color='white' /></button>
                            </td> */}
                        </tr>)
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;