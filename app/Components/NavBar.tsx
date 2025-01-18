import React from 'react'
import InputSearch from './InputSearch'

export const NavBar = () => {
  return (
    <div className="w-full bg-[#070720] py-5" suppressHydrationWarning>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
                <div className="nanart">
                    <a href="/">
                        <h1 className='text-white font-bold text-4xl'>Warts<span className='text-[#E94560]'>Nime</span></h1>
                    </a>
                </div>
                <div className='search'>
                    <InputSearch />
                </div>
            </div>
        </div>
    </div>
  )
}
