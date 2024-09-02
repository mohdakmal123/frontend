'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsersData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.log(res.status);
        console.table(res.data);
        setUserList(res.data);
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                toast.success('User Deleted successfully');
                fetchUsersData();
            }).catch((err) => {
                console.log(err);
                toast.error('Error Failed to delete user');
            });
    }

    const displayUsers = () => {
        if (userList.length === 0) {
            return <p>Loading...Please Wait</p>

        } else {
            return <table className='w-full border-2 border-blue-500'>
                <thead className='text-left bg-blue-500 text-white'>
                    <tr>
                        <th className='p-3 text-lg'>ID</th>
                        <th className='p-3 text-lg'>Name</th>
                        <th className='p-3 text-lg' >Email</th>
                        <th className='p-3 text-lg'>City</th>
                        <th colSpan={2}>Actions</th>

                    </tr>
                </thead>
                <tbody className=''>
                    {
                        userList.map((user) => {
                            return <tr key={user._id} className='border border-blue-300'>
                                <td className='p-3'>{user._id}</td>
                                <td className='p-3'>{user.name}</td>
                                <td className='p-3'>{user.email}</td>
                                <td className='p-3'>{user.city}</td>

                                <td>
                                    <button 
                                    onClick={() =>{deleteUser(user._id)}}
                                    className='px-3 py-1 bg-red-500 rounded-full text-white'>Delete</button>
                                </td>
                                <td>
                                    <Link href={'/updateuser/'+user._id} className='px-3 py-1 bg-blue-500 rounded-full text-white'>Edit</Link>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        }

    }
    return (
        <div>
            <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
                <h1 className='text-center font-bold text-3xl mt-5'>ManageUser</h1>

                {displayUsers()}

            </div>
        </div>
    )
}

export default ManageUser;