import photoOne from '../media/images/babysonsis.png'

export default function AboutTwo(){
    return(
        <div className="w-screen">
            <div className="px-6 md:px-24 max-h-[56rem] w-full flex flex-col lg:flex-row gap-12 items-center justify-center">
                <img src={photoOne} className="-rotate-[5deg] lg:w-56 w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
                <p className="lg:w-96 mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-semibold text-sky-600">
                私が小さい頃、母は本業のイラストレーターの傍ら、自宅でこども英語教室を始めました。洋楽好きの影響で発音が得意な母の英語が、私が最初に耳にした英語でした。放任主義で育てられた私は、妹と違ってどんな習い事にも興味を示さず、ゲームばかりしていましたが、小学６年生の時に我が家に飛び込みで来た爽やか営業マンの話を聞いて、初めて自分から「やりたい」と言ったのが子供英会話教室でした。
                </p>
            </div>
            <div className='px-6 md:px-24 lg:px-56'>
                <p className="lg:mt-20 my-10 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                そこで初めてフォニックスという英語の音と文字を繋げる学習に触れました。今では英語学習界隈では知らない人の方が少ないフォニックスは、その時はまだ誰も知らない画期的なものだったと思います。今私が多くの方に発音を褒めていただくようになったのは間違いなくフォニックス学習があったからです。
                </p>
            </div>
        </div>
    )
}