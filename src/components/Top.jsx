import topImage from '../media/images/IMG_7003.jpeg';
import Nav from './Nav';
import { BsSpotify, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Top(){
    return(
        <div className="mb-20">
            <div className="fixed top-0 z-30">
                <Nav />
            </div>
            <div className="font-bold h-[40rem] md:h-[50rem] relative overflow-hidden">
                {/* <div className="absolute z-10 top-0 bottom-0 right-0 left-0 gradient">
                </div> */}
                <img alt="Soichi smiling at camera against cobbled-road backdrop" className="absolute object-cover bottom-0 lg:-bottom-96 right-0" src={topImage}/>
                {/* <div className="animate fadeInUp absolute bottom-24 md:bottom-48 w-full flex flex-col gap-5 items-center">
                    <h2 className='text-2xl'>なんとかなんとか</h2>
                    <button className="py-5 px-6 border-2 border-gray-800 bg-white/50">公式LINE登録</button>
                </div> */}
                <div className="flex flex-row items-center justify-center gap-6 text-3xl md:text-4xl w-full absolute bottom-10 text-white">
                    <span className='one animate fadeInUp rounded-full bg-slate-900/75 p-2'>
                    <BsInstagram />
                    </span>
                    <span className="two animate fadeInUp rounded-full bg-slate-900/75 p-2">
                    <BsTwitter />
                    </span>
                    <span className="three animate fadeInUp rounded-full bg-slate-900/75 p-2">
                    <BsYoutube />
                    </span>
                    <span className="four animate fadeInUp rounded-full bg-slate-900/75 p-2">
                    <BsSpotify />
                    </span>
                    </div>
            </div>
        </div>
    )
}