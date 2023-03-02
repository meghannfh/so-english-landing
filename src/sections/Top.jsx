import topImage from '../media/images/IMG_7003.jpeg';
import Nav from '../components/Nav';
import SocialsBar from '../components/SocialsBar';

export default function Top(){
    return(
        <div>
            <div className="fixed top-0 z-30">
                <Nav />
            </div>
            <div className="font-bold h-[33rem] md:h-[50rem] relative overflow-hidden">
                <img alt="Soichi smiling at camera against cobbled-road backdrop" className="absolute object-cover bottom-0 lg:-bottom-96 right-0" src={topImage}/>
                {/* <div className="animate fadeInUp absolute bottom-24 md:bottom-48 w-full flex flex-col gap-5 items-center">
                    <h2 className='text-2xl'>なんとかなんとか</h2>
                    <button className="py-5 px-6 border-2 border-gray-800 bg-white/50">公式LINE登録</button>
                </div> */}
            </div>
        </div>
    )
}