import topImage from '../media/images/IMG_7003.jpeg';
import Nav from '../components/top/Nav';

export default function Top(){
    return(
        <div>
            <div className="fixed top-0 z-30">
                <Nav />
            </div>
            <div className="font-bold h-[33rem] md:h-[50rem] relative overflow-hidden">
                <img alt="Soichi smiling at camera against cobbled-road backdrop" className="absolute object-cover bottom-0 lg:-bottom-96 right-0" src={topImage}/>
            </div>
        </div>
    )
}