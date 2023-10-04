import React from 'react'
import Image from 'next/image'
import Removebtn from './Removebtn'
import Link from 'next/link'




function TopicsList() {
  return (
    <>
      <div className='p-4 m-4 border border-slate-300 shadow-md flex justify-between gap-5 items-start'>
        <div>
            <h1 className='font-bold text-2xl'>Topic Title</h1>
            <div>Topic Description</div>
        </div>
        <div className='flex gap-2'>
            <Removebtn />
            <Link href={'/editTopic/123'} >
                <svg className="h-5 w-5 text-slate-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>

            </Link>
        </div>
      </div>
    </>
  )
}

export default TopicsList
