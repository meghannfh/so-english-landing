import fiveStepsDiagram from '../../media/images/five-steps.png'

export default function FiveSteps() {
    return (
        <div className="flex flex-col w-screen">
        <div className='px-6 py-24 md:px-24 lg:px-56'>
            <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">Methodology</h2>
            <h3 className="mt-6 font-semibold leading-relaxed md:leading-loose text-4xl md:text-2xl text-sky-600">ここでは実際にSo ENGLISH!英語教室で、生徒にどのような学習方法を提案しているかをお話します。</h3>
            <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">「どうやったら英語が話せるようになるか？」一言で言うのは難しいですが、大切なのは「総合的な力をつける」ことです。以下の図をご覧ください。</p>
        </div>
        <div className="h-80 md:h-[24rem] lg:h-[32rem] px-6 md:px-24 lg:px-56 flex justify-center">
            <img className="h-full rounded-3xl" alt={'diagram'} src={fiveStepsDiagram}/>
        </div>
        <div className='px-6 py-24 md:px-24 lg:px-56'>
            <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
            これは一般的に知られているリスニングとスピーキング時の脳のプロセスを5段階に分けた最も簡素化された図です。上段はリスニング、下段はスピーキングの時の脳のプロセスです。会話はリスニングとスピーキングの連続ですので、これを繰り返します。
            <br/>
            <br/>
            「アポー→apple」と書いてあるリスニングのステップ1は「音声知覚」といって、言語としての音を認識します。「アポー」と聞いて「apple」と頭の中に英語のスペルを思い浮かべるということです。
            <br/>
            <br/>
            「apple→🍎」と書いてあるリスニングのステップ2は「意味理解」といって、頭の中に浮かべた「apple」は「リンゴ」という意味だと理解することです。「❤️🍊」が描いてあるスピーキングのステップ1は「概念化」といって、自分が言いたいことを整理することです。
            <br/>
            <br/>
            「I like oranges.」と書いてあるスピーキングのステップ2は「文章化」といって、概念化した内容を頭の中で英文にします。
            「アイlaイクオreンジーズ」と書いてあるスピーキングのステップ3は「音声化」と言って、文章化した内容を正しく発音することです。その為に日本語の音には無いLとRをそのまま表記しています。
            <br/>
            <br/>
            真ん中にある「🧠」のマークは「データベース」といって、語彙や文法や定型文を指します。リスニング・スピーキングの各ステップで脳内にアクセスし、自分が持っている知識を瞬時に組み合わせます。
            </p>
        </div>
    </div>
    )
}