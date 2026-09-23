import {useState} from 'react';

interface TimeCardProps {
    route: string;
    previousTime: string;
    nextTime: string;
    nextNextTime: string;
    onClick?: () => void;
}

const TimeCard = ({ route, previousTime, nextTime, nextNextTime, onClick}: TimeCardProps ) => {
    const [statetime, setstateTime] = useState(nextTime);
    const [nextstatetime, setNextstateTime] = useState(nextNextTime);
    const [previousstatetime, setPreviousstateTime] = useState(previousTime);

    return (
        <>
            <div onClick={onClick} className="flex flex-col items-center justify-center bg-gray-200 p-4 m-2 rounded-lg shadow-md max-w-sm mx-auto
                    transition duration-200 hover:scale-105 cursor-pointer active:scale-80">
                <div>
                    <h2 className="text-2xl font-bold pb-3">{route}</h2>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xs text-red-500 font-semibold">Previous</p>
                        <h4 className="text-lg">{previousstatetime}</h4>
                    </div>
                    <h2 className="text-6xl font-bold px-4">{statetime}</h2>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xs text-green-500 font-semibold">Next</p>
                        <h4 className="text-lg">{nextstatetime}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeCard;