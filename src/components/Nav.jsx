import { useState } from 'react'
import Menu from './Menu'

export default function Nav(){
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prevOpen => !prevOpen)
    }

    return(
        <div className="w-screen relative">
            <div className="text-black flex flex-row justify-between items-center w-full lg:text-3xl h-fit">
                <h1 className="pl-6 font-semibold text-white tracking-widest">So<span className="italic uppercase">English</span></h1>
                <div className="bg-slate-900 grid place-content-center p-3 md:p-6">
                <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
                    <span className={ open ? `open hamburger-top` : `hamburger-top`}></span>
                    <span className={ open ? `open hamburger-middle` : `hamburger-middle`}></span>
                    <span className={ open ?`open hamburger-bottom` : `hamburger-bottom`}></span>
                </button>
                </div>
            </div>
            <div className={ open ? `show menu` : `menu`}>
                <Menu />
            </div>
        </div>
    )
}