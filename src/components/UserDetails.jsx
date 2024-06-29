import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function UserDetails() {
    // const params = useParams();
    // console.log(params);
    const {name}= useParams();
    const navigate = useNavigate();

    const backHandler=()=>{
        // navigate(-1);
        navigate('/User');
    }
        
  return (
    <div className='w-3/2 h-52 bg-sky-200 text-center text-2xl font-bold'>

        <h1>{name}</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam odio distinctio minima quia velit, nihil repellendus voluptate similique assumenda soluta eligendi nisi sequi, facilis reprehenderit exercitationem dolor laboriosam optio?</p>
        <button onClick={backHandler} className='px-4 py-2 bg-red-200 mt-5 rounded'>GO Back</button>
    </div>
  )
}

export default UserDetails