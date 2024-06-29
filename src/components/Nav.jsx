import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-1/2  text-3xl text-white flex justify-center  m-auto bg-zinc-400 gap-10 '>
        <NavLink to="/">home</NavLink>
        <NavLink to="/user">User</NavLink>
    </div>
  )
}

export default Nav