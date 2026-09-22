import {useState} from 'react';
import {House, InfoIcon, SendIcon} from 'lucide-react';

interface BottomNavBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const BottomNavBar = ({ activeTab, setActiveTab }: BottomNavBarProps) => {

    const navButton = (tab: string, icon: React.ReactNode, label: string) => {
        return (
            <button
                className={`flex flex-col rounded-full text-sm p-3 px-3 items-center
                    ${activeTab === tab ? 'text-blue-300 bg-gray-600' : 'text-slate-200 bg-gray-800'}
                    transition duration-200 ease-in-out transform 
                    hover:scale-105 hover:bg-gray-700 active:scale-80 cursor-pointer`}
                onClick={() => setActiveTab(tab)} type="button"
            >
                {icon}
                <span>{label}</span>
            </button>
        )
    }

    return (
        <div className="fixed bottom-0 w-full">
            <div className="mx-auto m-5 rounded-full min-w-sm max-w-sm flex justify-around bg-gray-800 p-2">
                {navButton('about', <InfoIcon className="w-4 h-4" />, 'About')}
                {navButton('home', <House className="w-4 h-4" />, 'Home')}
                {navButton('contact', <SendIcon className="w-4 h-4" />, 'Contact')}
            </div>
        </div>
    )
}
export default BottomNavBar;