import React from 'react';

function Sendmoney() {
    return <>
        <div className="h-screen bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className='bg-gray-100 shadow-2xl p-4 rounded-xl md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-auto'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Send Money
                    </h1>
                </div>
                <div className="mt-14 mb-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div className='flex justify-start items-center'>
                            <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-green-500 rounded-full">
                                <span className="text-2xl text-gray-50">A</span>
                            </div>
                            <div className="text-2xl pl-3 text-gray-950 font-extrabold">
                                Friend's Name
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                Amount(in Rs)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="h-10 flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>;
}

export default Sendmoney;