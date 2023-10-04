import React from 'react'

function EditTopicForm() {
  return (
   
    <>
        <form className='flex flex-col gap-3  ' action="">
            <input className='border border-slate-500 px-8 py-2' type="text" name="" id="" placeholder=' Topic Title' />
            <input className='border border-slate-500 px-8 py-2' type="text" name="" id="" placeholder=' Topic Description' />

            <button className='bg-green-600 text-white py-3 px-6 w-fit rounded-md justify-center '>Update Topic</button>
        </form>
    </>
   
  )
}

export default EditTopicForm