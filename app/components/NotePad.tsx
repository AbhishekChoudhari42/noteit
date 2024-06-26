"use client"
import React, { useEffect, useState } from 'react'

const NotePad = () => {
const [notes,setNotes] = useState([{date:'24/11/24',content:'test'}])    
const [text,setText] = useState('')

const save = () => {
    if(typeof window != undefined){
        window.localStorage.setItem('notes',JSON.stringify(notes))
    }

}

const addText = () =>{

    var today = new Date();
    var dd = String( today.getDate() ).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    const newNote = { 
                        date: dd+'/'+mm+'/'+yyyy,
                        content:text
                    }
    setNotes([...notes,newNote])
    setText('')

}

    // useEffect(()=>{
    // if(typeof window != undefined){
    //     let savedNotes = window.localStorage.getItem('notes')!
    //     setNotes(JSON.stringify(savedNotes))
    // }
    // },[])

return (
    <div className='relative flex flex-col w-full h-[100dvh]  p-4  max-w-[400px] overflow-y-scroll'>
        <div className='overflow-y-scroll flex-grow '>
        {   

            notes.map((el,index)=>{
                return <div key={index} className='w-full min-h-fit mb-4 pr-2'>
                           <div className='flex justify-between w-full mb-4'>
                                <p className='text-sm text-neutral-500'>{el.date}</p>
                                <p className='text-sm text-neutral-500 hover:text-neutral-100'>Edit</p>
                            </div> 
                            <p className='text-md'>{el.content}</p>
                            <hr className='mt-4 border-t-neutral-800'/>
                        </div>
            })
        }
            </div>
        <div className='w-full max-w-[400px] bg-black shadow'>
            <textarea onChange={(e)=>{setText(e.target.value)}} value={text} className='w-full mb-4 bg-neutral-800 p-2' ></textarea>
            <button onClick={addText} className='w-full p-4 bg-indigo-600'>Add</button>
        </div>
        {/* <button className='absolute top-0 right-0 w-[100px] p-2 bg-green-500'>Save</button> */}
    </div>
  )
}

export default NotePad