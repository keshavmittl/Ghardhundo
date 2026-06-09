import React from 'react'
import { Search } from 'lucide-react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-slate-300 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
            <Link to="/">
            <h1 className="text-2xl font-bold text-slate-900 cursor-pointer">
                
                <span className="text-slate-500">Ghar</span>
                <span className='text-slate-700'>Dhundo</span>
            </h1>
            </Link>
            <form className="relative"> 
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input type="text" placeholder="Search..." className="wfull h-10 pl-10 px-5 text-sm text-slate-500 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent" />
            </form>
            <ul className="flex items-center gap-4">
                <Link to='/'>
                        <li className="hidden sm:inline text-slate-600 hover:underline hover:text-slate-900 cursor-pointer">Home</li>
                </Link>
                <Link to= '/about'>
                <li className="hidden sm:inline text-slate-600 hover:underline hover:text-slate-900 cursor-pointer">About</li>
                </Link>
                <Link to= '/sign-in'>
                <li className="text-slate-600 hover:underline hover:text-slate-900  cursor-pointer">Sign In</li> 
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
