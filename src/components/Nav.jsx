import { useState } from 'react'

export default function Nav(){
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prevOpen => !prevOpen)
    }

    return(
        <div className="w-screen">
            <div className="text-black flex flex-row justify-between items-center w-full lg:text-3xl h-fit">
                <h1 className="pl-6 font-semibold text-white tracking-widest">So<span className="italic uppercase">English</span></h1>
                {/* <ul className="flex flex-1 flex-row justify-end gap-10">
                    <li>
                        <button>アバウト</button>
                    </li>
                    <li>
                        <button>教材</button>
                    </li>
                    <li>
                        <button>感想</button>
                    </li>
                </ul> */}
                <div className="bg-slate-900 grid place-content-center p-3 md:p-6">
                <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
                    <span className={ open ? `open hamburger-top` : `hamburger-top`}></span>
                    <span className={ open ? `open hamburger-middle` : `hamburger-middle`}></span>
                    <span className={ open ?`open hamburger-bottom` : `hamburger-bottom`}></span>
                </button>
                </div>
            </div>
        </div>
    )
}