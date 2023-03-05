import { useState } from 'react'
import Menu from './Menu'
import SocialsBar from './SocialsBar'

export default function Nav(){
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prevOpen => !prevOpen)
    }

    return(
        <div className="w-screen relative">
            {/* <div className="flex flex-row justify-between items-center w-full lg:text-3xl h-fit">
                
            </div> */}
            <div className="pl-6 w-min absolute left-0 h-[53.98] md:h-[77.99px] flex flex-col justify-center">
                <h1 className="font-semibold text-white tracking-widest md:text-2xl">So<span className="italic uppercase">English</span></h1>
                <SocialsBar />
            </div>
            <div className="bg-slate-900 grid place-content-center p-3 md:p-6 w-min absolute right-0">
                <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
                    <span className={ open ? `open hamburger-top` : `hamburger-top`}></span>
                    <span className={ open ? `open hamburger-middle` : `hamburger-middle`}></span>
                    <span className={ open ?`open hamburger-bottom` : `hamburger-bottom`}></span>
                </button>
            </div>
            <div className={ open ? `show menu` : `menu`}>
                <Menu />
            </div>
        </div>
    )
}