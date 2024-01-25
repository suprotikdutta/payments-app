import React from 'react';

function User() {
    return <>
        <div className='flex justify-between py-2 items-center'>
            <div className='flex justify-between items-center'>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ml-2">
                    <span className="font-medium text-gray-600">U</span>
                </div>
                <div className='text-lg font-bold pl-3'>
                    User 1
                </div>
            </div>
            <div className='bg-slate-900 text-white px-4 py-2 rounded-lg'>
                Send Money
            </div>
        </div>

    </>;
}

export default User;