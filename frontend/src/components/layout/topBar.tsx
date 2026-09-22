import {useState} from 'react';
import {Menu, Moon} from 'lucide-react';

const TopBar = () => {

    return (
        <div className="fixed top-0 w-full flex justify-around">
            <div className='grid grid-cols-3 gap-4 m-4 min-w-sm max-w-md bg-gray-300 p-2 rounded-full items-center'>
                <button className='flex flex-col rounded-full text-sm p-3 px-3 justify-self-start text-slate-800 
                 transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-slate-200 
                 active:scale-80 cursor-pointer'>
                    <Menu className="w-4 h-4" />
                </button>
                <h2 className="justify-self-center p-2 text-2xl text-slate-800 font-semibold">Route</h2>
                <button className='flex flex-col rounded-full text-sm p-3 px-3 justify-self-end text-slate-800 
                 transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-slate-200 
                 active:scale-80 cursor-pointer'>
                    <Moon className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default TopBar;