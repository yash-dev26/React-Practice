import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

	const [noteTitle, setNoteTitle] = useState('')
	const [content, setContent] = useState('')
	const [task, setTask] = useState([])

	const LOCALSTORAGE_KEY = 'my-notes'
    useEffect(() => {
    const raw = localStorage.getItem(LOCALSTORAGE_KEY);
			if (raw) {
			try {
					setTask(JSON.parse(raw));
			} catch (err) {
					console.error('Failed to parse notes from localStorage', err);
			}
			}
    }, []);

    useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(task));
    }, [task]);


    const submitHandler = (e)=>{
		e.preventDefault();

		const copyTask=[...task];
		copyTask.push({noteTitle, content})
		setTask(copyTask)

		setNoteTitle('')
		setContent('')
	}
	
	const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='bg-black h-screen text-white lg:flex '>

      <form onSubmit={(e)=>{submitHandler(e)}} className='flex p-10 items-start lg:w-1/2'>
				
        <div className=' w-1/2 gap-3 flex flex-col items-start'>
					<h1 className='text-3xl font-bold'> Add Notes </h1>
          <input
						type="text" 
						placeholder="Enter Notes Title" 
						className=' border-2 w-full  font-medium rounded px-5 py-2 outline-none'
						value={noteTitle}
						onChange={(e)=>{
							setNoteTitle(e.target.value)
						}}
					/>
          <textarea
            placeholder="Enter Notes Content Here..."
            className=' h-32 border-2 w-full  font-medium rounded px-5 py-2 outline-none'
						value={content}
						onChange={(e)=>{
							setContent(e.target.value)
						}}
					/>
          <button className='bg-white active:scale-98 font-medium w-full text-black px-5 py-2 mt-3 rounded outline-none hover:bg-amber-700 active:bg-amber-500'>
            Add Note
          </button>
        </div>
        <img className='h-65 mt-7' src="https://i.pinimg.com/736x/85/00/d5/8500d582ca2b8ee33624db36aa8c86e4.jpg" alt="Note Icon" />
      </form>

			<div className=' p-10 lg:border-l-2 lg:w-1/2'>
				<h1 className='text-3xl font-bold'>Recent Notes</h1>
				<div className='flex items-start flex-wrap gap-5 mt-5 overflow-auto h-full'>
					{task.map(function(elem, idx){
							return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
								<div className='break-all'>
									<h3 className='leading-tight text-xl font-bold'>{elem.noteTitle}</h3>
									<p className='mt-5 leading-tight text-xs font-semibold overflow-auto text-gray-700'>{elem.content}</p>
								</div>
								<button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
							</div>
							
					})}
				</div>
				
			</div>
    </div>
  )
}

export default App
