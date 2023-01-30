import { SlSocialSpotify } from 'react-icons/sl'
import { useState, useEffect, useRef } from 'react'

export default function PodcastWidget(){
    const myRef = useRef();

    const[isIntersecting, setIsIntersecting] = useState()
    console.log('elementIsVisible', isIntersecting)

    useEffect(() => {
        console.log('myRef', myRef.current)
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            setIsIntersecting(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])

    return (
        <div ref={myRef} className="in-view max-h-fit px-6 py-36 flex flex-col lg:flex-row mb-20">
            <div className="lg:max-w-3xl">
                <h1 className="text-5xl lg:text-7xl font-semibold mb-5 leading-relaxed lg:leading-normal">That's So Carrot <br/> ポッドキャスト</h1>
                <button className="flex flex-row items-center gap-1 hover:text-teal-600">
                    今すぐ聴く
                    <SlSocialSpotify />
                </button>
                {/* <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                <div className="mt-8">
                    <iframe title="thats-so-caro" className="rounded-lg" src="https://open.spotify.com/embed/episode/2R8Fu0KCR96OFAkQAAME0e?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}