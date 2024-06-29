import React from 'react'

import { Link , useNavigate} from 'react-router-dom'



function User() {
    const navigate = useNavigate();
    const BackHandler=()=>{
        navigate(-1)
   }
  return (
    <div className='w-1/2 text-xl font-bold bg-zinc-200 h-72 mt-5 m-auto text-center' >
     <h1 className='w-full bg-blue-200'>Users </h1>
     <br />
     <Link className='w-full bg-red-200 px-10 py-2 mt-20 hover:bg-red-300' to='/User/Radhe'>1. Radhe</Link>
     <br />
     <br />
     <Link className='w-full bg-red-200 px-10 py-2 mt-20 hover:bg-red-300' to='/User/Shyam'>2. Shyam</Link>
     <br />
     <br />
     <Link className='w-full bg-red-200 px-10 py-2 mt-20 hover:bg-red-300' to='/User/Ashutosh'>3. Ashutosh</Link>

     <br />
     <br />
     <button onClick={BackHandler} className='px-3 py-2 bg-sky-300 text-white rounded'>Go Back </button>
    </div>
  )
}

export default User