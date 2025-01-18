import React from 'react'

export const NavBar = () => {
  return (
    <div className="w-full bg-base-200 py-5" suppressHydrationWarning>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
                <div className="nanart">
                    <h1 className='text-white font-bold text-4xl'>Warts<span className='text-orange-400'>Nime</span></h1>
                </div>
                <div className='search'>
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    </div>
  )
}
