import aboutSo from '../media/images/IMG_6789.jpeg'

export default function AboutOne(){
    return(
        <div className="flex flex-col w-screen">
            <div className="relative w-full h-96 md:h-[20rem] lg:h-[36rem] md:overflow-hidden">
                <img className="absolute w-full h-full object-cover top-0 md:bottom-0" alt={'so smiling to the right at camera'} src={aboutSo}/>
                <h1 className="text-4xl font-bold uppercase absolute top-10 left-7 p-3 bg-white md:text-5xl md:top-24 md:left-36 lg:text-7xl"><span className="italic">Who is</span> So?</h1>
            </div>

            <div className='px-6 py-24 md:px-24 lg:px-56'>
                <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">About</h2>
                <h3 className="mt-6 font-semibold leading-relaxed md:leading-loose text-4xl md:text-2xl text-sky-600">私は、友達や生徒や他の英語の先生方から「ペラペラだね」と言っていただくことはたまにありますが、自分自身をそのように思ったことは一度もありません。</h3>
                <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">それでも、どのようにして私が今のように英語を話せるようになり、海外に住み友達を作り、夜な夜なお酒を飲みながら政治の話や恋の話をし、ホテルや空港や市役所でトラブルがあっても話し合って解決をできるようになったかを少しお話したいと思います。英語と直接は関係のないことでも、英語学習のヒントになることがあるかもしれませんので、よければ読んでみてくださいね。</p>
            </div>
        </div>
    )
}