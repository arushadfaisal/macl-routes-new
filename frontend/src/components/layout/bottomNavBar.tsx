import {useState} from 'react';
import {House, InfoIcon, SendIcon} from 'lucide-react';

const BottomNavBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const navButton = (tab: string, icon: React.ReactNode, label: string) => {
        return (
            <button
                className={`flex flex-col rounded-full p-3 px-5 items-center
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
        <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-800 p-2">
            {navButton('about', <InfoIcon className="w-8 h-8" />, 'About')}
            {navButton('home', <House className="w-8 h-8" />, 'Home')}
            {navButton('contact', <SendIcon className="w-8 h-8" />, 'Contact')}
        </div>
    )
}
export default BottomNavBar;