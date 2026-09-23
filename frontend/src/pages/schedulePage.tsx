import {useState} from 'react'

const ScheduleTable = () => {
    return (
        <div className='flex flex-col min-w-sm max-w-md items-center justify-center gap-5 mt-10 bg-amber-100'>
            <table className='w-full min-w-max table-auto'>
                <thead className='border-b bg-amber-200 text-center'>
                    <th className='p-4 text-center'>
                        Test
                    </th>
                    <th className='p-4 text-center'>
                        Test 2
                    </th>
                </thead>
                <tbody className='text-center align-center'>
                    <tr>
                        <td className='p-4'>1</td>
                        <td className='p-4'>2</td>
                    </tr>
                    <tr>2</tr>
                    <tr>3</tr>

                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;