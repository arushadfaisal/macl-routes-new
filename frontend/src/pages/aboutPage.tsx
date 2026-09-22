

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
            <div className="min-w-sm max-w-md p-5 mb-4 flex flex-col items-center justify-center bg-gray-300 shadow-xl rounded-sm">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-md text-center max-w-md">
                    MACL Schedules is built to provide quick, reliable access to daily bus and ferry timetables across Malé, Hulhulé, and key airport service locations. 
                </p>
                <p className="text-md text-center max-w-md pt-3">
                    Designed for staff, the app lets you easily look up upcoming departure times, switch between daily schedules, and plan your daily travel smoothly.
                </p>
            </div>
            
            <div className="min-w-sm max-w-md p-5 mb-4 flex flex-col gap-2 items-center justify-center bg-gray-300 shadow-xl rounded-sm">
                <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
                <p className="text-md text-center max-w-md pb-2 text-red-600 font-semibold">
                    THIS IS NOT AN OFFICIAL APPLICATION FROM MACL!                
                </p>
                <p className="text-md text-center max-w-md">
                    All schedules and departure times displayed in this application are provided for general informational and planning purposes only. Timetables are subject to change without prior notice due to weather conditions, operational adjustments, maintenance, or official service revisions.
                </p>
                <p className="text-md text-center max-w-md">
                    While every effort is made to keep the information accurate and up to date, the developers assume no responsibility or liability for missed trips, delays, or disruptions resulting from reliance on the data provided. Please double-check critical departure times directly with service operators when necessary.
                </p>
                <p className="text-md text-center max-w-md pt-2 text-red-600 font-semibold">
                    THIS IS NOT AN OFFICIAL APPLICATION FROM MACL!                
                </p>
            </div>
        </div>
    );
}

export default AboutPage;