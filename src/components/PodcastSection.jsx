import { SlSocialSpotify } from 'react-icons/sl'
import { useRef, useEffect, useCallback } from 'react'
import PodcastWidget from './PodcastWidget';

export default function PodcastSection(){
    const animatedRef = useRef(null)

    const options = {
        rootMargin: '0px',
        threshold: 0.25 // half of item height
      }

    const handleIntersection = useCallback((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);

        if(animatedRef.current){
            observer.observe(animatedRef.current);
        }

        return () => {
            observer.disconnect();
        }
    }, [handleIntersection])

    return (
        <div ref={animatedRef} className="animated-component max-h-fit px-6 py-36 flex justify-center flex-col lg:flex-row mb-20 border-2">
            <div className="lg:max-w-3xl border-2 flex flex-col">
                <h1 className="text-6xl lg:text-7xl font-semibold leading-relaxed lg:leading-normal text-center">That's So Carrot</h1>
                <h3 className="text-4xl font-bold text-center italic">ポッドキャスト!!</h3>
                <button className="flex flex-row items-center gap-1 hover:text-teal-600">
                    今すぐ聴く
                    <SlSocialSpotify />
                </button>
                <PodcastWidget />
                <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}