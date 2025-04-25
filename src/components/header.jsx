import React from 'react'
//import logo from '../assets/logo.png'

const Header = () => {
  return (
    <section className="bg-[#3b241f] text-white min-h-screen px-4 py-8 h-12">
        <header className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
                <img src='' alt="Logo" className="w-16 h-16 object-conatin" />
                <div className="text-center">
                  <h1 className='text-sm font-bold'>COFFEE</h1>
                  <p className='text-xs'>BORCELLET</p>
                </div>
            </div>
        </header>
            
    </section>
  )
}

export default Header
