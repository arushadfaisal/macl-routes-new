import {useState} from 'react';

const BottomNavBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around p-4">
            <button
                className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-500' : ''}`}
                onClick={() => setActiveTab('home')}
            >
                Home
            </button>
        </div>
    )
}

export default BottomNavBar;