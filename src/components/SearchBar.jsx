import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('');

    const dispatch= useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(setQuery(text));

        setText('')
    }

  return (
    <div>
      <form
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex bg-gray-950 gap-5 p-7 '>
        <input 
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        className='border-2 px-4 py-2 text-2xl w-120 outline-none' 
        
        type="text" required placeholder='Enter Anything...' />
        <button className='active:scale-95 w-30 font-semibold border-2 px-4 py-2 text-2xl cursor-pointer outline-none hover:bg-white hover:text-gray-950'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
