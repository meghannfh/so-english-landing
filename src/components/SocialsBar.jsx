import { BsSpotify, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function SocialsBar(){
    return(
        <div className="flex flex-row items-center justify-between text-lg md:text-xl text-white">
            <span className='one animate fadeInUp'>
            <BsInstagram />
            </span>
            <span className="two animate fadeInUp">
            <BsTwitter />
            </span>
            <span className="three animate fadeInUp">
            <BsYoutube />
            </span>
            <span className="four animate fadeInUp">
            <BsSpotify />
            </span>
        </div>
    )
}