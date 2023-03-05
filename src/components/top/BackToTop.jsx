import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export default function BackToTop(){
    return(
        <div className='absolute bottom-0 right-0 text-lg md:text-xl'>
            <span className=''>
                <BsFillArrowUpSquareFill />
            </span>
        </div>
    )
}