import React,{useState} from 'react'
import {Container , Logo , LogOut} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()
  const [open , setOpen] = useState(false)

  const navItems =[
    {
      name: 'Home',
      slug:'/',
      active: true
    },
    {
      name: 'Login',
      slug:'/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug:'/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug:'/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug:'/add-post',
      active: authStatus
    },
  ]
  return (
    <header className="py-3 shadow bg-slate-950">
  <Container>
    <nav className="flex flex-wrap items-center">
      <div className="mr-4">
        <Link to="/">
          <Logo width="20px" />
        </Link>
      </div>

      {/* Toggle button for mobile view */}
      <div className="ml-auto lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={`${
          open ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:ml-auto lg:flex-row flex-col lg:items-center`}
      >
        {navItems.map(
          (item) =>
            item.active && (
              <li key={item.name} className="my-2 lg:my-0">
                <button
                  onClick={() => navigate(item.slug)}
                  className="block py-2 px-6 text-white hover:text-black duration-200 hover:bg-blue-100 rounded-full lg:inline-block"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
        {authStatus && (
          <li className="my-2 lg:my-0">
            <LogOut />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>

  )
}

export default Header