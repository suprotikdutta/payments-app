import React from 'react';

function Signup() {
    return <>
        <div className="h-screen bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className='bg-gray-100 shadow-2xl p-4 rounded-xl md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-auto'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign Up
                    </h1>
                    <h2 className="mt-2 text-center text-2xl tracking-tight text-gray-600">
                        Enter your information to create your account
                    </h2>
                </div>
                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                First Name
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

                        <div className="mt-5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="h-10 flex w-full justify-center rounded-md bg-gray-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 mb-5 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="#" className="font-semibold leading-6 text-gray-600 hover:text-gray-500 underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>;
}

export default Signup;