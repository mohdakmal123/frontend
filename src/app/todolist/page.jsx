'use client'
import React, { useState } from 'react'

const Todolist = () => {

    const [count, setCount] = useState(0);

    const [taskList, setTaskList] = useState([
        { text: 'Ghar Ki safai', completes: false, added: new Date },
        { text: 'Padhai', completes: false, added: new Date() },
        { text: 'Sona', completes: false, added: new Date() },
        { text: 'Khana', completes: false, added: new Date() },
        { text: 'Roz Nahana', completes: false, added: new Date() },
        { text: 'Bhahiyo Par Chilana', completes: false, added: new Date() },


    ]);

    const addTask = (e) => {

        if (e.code === 'Enter') {
            console.log(e.target.value);

const newTask ={ text: e.target.value, completed:false, added: new Date() };

setTaskList([newTask, ...taskList ]);

            e.target.value = '';
        }
    }

const deleteTask = (index) => {
    console.log(index);

    const temp= taskList;
    temp.splice(index, 1);
setTaskList([...temp]);
}

const toggleCompleted = (index) => {
const temp = taskList;

temp[index].completes = !temp[index].completes;
setTaskList([...temp]);




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

                                {
                                      task.completes? (
                                        <p className='bg-green-500 text-white rounded-full text-sm px-2 w-fit'>Completed</p>
                                      ) : (
                                        <p className='bg-yellow-500 text-white rounded-full text-sm px-2 w-fit'>Pending</p>
                                      )  
                                }


                                    <p>{task.text}</p>
                                    <div className='mt-2 flex justify-end gap-4'>
                                        <button 
                                            onClick={() => {toggleCompleted(index)}}
                                            className='bg-blue-500 px-3 py-1 rounded-full'>
                                                {task.completes ? 'Mark as Pending': 'Mark as Completed'}
                                            </button>
                                        <button 
                                            onClick={() => {deleteTask(index)}}
                                            className='bg-red-500 px-3 py-1 rounded-full'
                                        >Delete</button>
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