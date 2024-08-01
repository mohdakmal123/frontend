'use client'
import React, { useState } from 'react'

const Todolist = () => {

    const [count, setCount] = useState(0);

    const [taskList, settaskList] = useState([
        { text: 'Ghar Ki safai', completes: false, added: new Date },
        { text: 'Padhai', completes: false, added: new Date() },
        { text: 'Sona', completes: false, added: new Date() },
        { text: 'Khana', completes: false, added: new Date() },


    ]);

    const addTask = (e) => {

        if (e.code === 'Enter') {
            console.log(e.target.value);



            e.target.value = '';
        }
    }
    return (
        <div className='max-w-5xl mx-auto mt-6'>
            <div className='border shadow rounded-3xl'>
                <div className='p-4'>
                    <input
                        onKeyDown={addTask}
                        placeholder='Add a new task'
                        type="text"
                        className='w-full px-3 py-1 border border-gray-500 rounded-xl otline-none' />

                </div>
                <div className='p-6'>


                    {/*  <h1 className='text-3xl text-blue-500'>{count}</h1>

<button className='bg-gray-300 p-4'
    onClick={() => { setCount(count+1); console.log(count);}}
   >Add Count </button>*/}
                    {
                        taskList.map((task, index) => {
                            return (
                                <div key={index} className='rounded-md border mb-5 shadow p-4 bg-gray-200'>
                                    <p>{task.text}</p>
                                    <div className='mt-2 flex justify-end gap-4'>
                                        <button className='bg-blue-500 px-3 py-1 rounded-full'>omplete</button>
                                        <button className='bg-red-500 px-3 py-1 rounded-full'>Delete</button>
                                    </div>
                                </div>

                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default Todolist;