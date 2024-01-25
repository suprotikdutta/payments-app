import React from 'react';
import User from './User';
function Dashboard() {
    return <>
        <div className='flex justify-between py-5 items-center border-b-2 px-3'>
            <div className='text-3xl font-bold'>Payments App</div>
            <div className='flex justify-between items-center'>
                <div className='text-lg font-normal'>
                    Hello ,User
                </div>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ml-2">
                    <span className="font-medium text-gray-600">U</span>
                </div>
            </div>
        </div>
        <div className="px-3">
            <div className='text-2xl font-bold pt-5'>
                Your Balance $5000
            </div>
            <div className='py-5'>
                <div className='text-2xl font-bold pb-2'>
                    Users
                </div>
                <input
                    className='w-full bg-slate-50 h-10 rounded-lg border-2 px-2 text-slate-700'
                    placeholder='Search Users'
                />
            </div>

            <div>
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    </>;
}

export default Dashboard;