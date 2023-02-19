import photoTwo from '../media/images/soenglishpic2.png'
import photoThree from '../media/images/soenglishpic3.png'
import photoFour from '../media/images/soenglishpic4.png'
import photoFive from '../media/images/soenglishpic5.png'

export default function AboutThree(){
    return(
        <div className="w-screen">
            <div className="w-full flex flex-col gap-12 py-20 items-center justify-center px-6">
                <div className="flex">
                    <img src={photoTwo} className="lg:w-56 w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
                    <img src={photoThree} className="lg:w-56 w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
                </div>
                <p className="px-6 md:px-24 lg:px-56 my-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-semibold text-sky-600">
                中学では、英語はできるが暗記教科には興味がない平均的な生徒でした。東京の田舎に住んでいて、少し目立ったことをすれば、次の日には周りのお母さんたちが噂話をする、そんな小さくて閉鎖的な空間に嫌気がさしていて、早くもっと大きなところに行きたいと思っていました。それが理由で、高校は地元から離れたところに通い、都心でばかり遊んでいましたが、確かに人生は好転した気がしました。そのうち、更に大きなところへ行けば、人生が大きく変わるかもしれないと思い、アメリカ留学を決意しました。ちなみに、高校は外国語コースに入ったため、中学でちょっと英語が得意だった私は完全に英語落ちこぼれになり、勉強ができないひょうきんキャラを通していた為、担任に留学を相談した時は「甘くないよ」と猛反対されました。笑
                </p>
            </div>
            <div className='py-10 px-6 md:px-24 lg:px-56'>
                <div className="flex justify-center">
                    <img src={photoFour} className="-rotate-[5deg] lg:w-[25%] w-1/3" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
                    <img src={photoFive} className="-rotate-[-5deg] lg:w-[50%] w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
                </div>
                <p className="pt-10 lg:mt-20 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                それでも周囲の反対を押し切って留学しましたが、実は最初、そんなに苦労しなかったのです。英語はHello, my name is Soichi. Please call me So.ぐらいしか話せませんでしたが、ラッキーなことに配属先がミネソタ州という辺鄙な場所で、留学生が珍しかったことと、高校生だったので、周りが興味を持ってたくさん話しかけてくれたのです。英語は話せませんでしたが、小さい頃から知らない人と話す機会が多くあり、ノリだけでなんとなく留学生活をうまくやっている気になっていました。が、それが大きな落とし穴でした。
                </p>
            </div>
            <div className='py-6 px-6 md:px-24 lg:px-56 border-2'>
                <p className="text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                3ヶ月も経つ頃には、話しかけても話を広げられない私のことには誰も興味がなくなっていました。学校の授業は現地の学生たちと一緒に受けていたので、Shake SpearやCivil Warなどの難しい内容に、まったくついていくことが出来ず、完全に孤立していました。唯一楽しかったのはChoirという合唱の授業で、そこだけが学校で居場所を感じられる場所でした。どんなに悩んでもインターネットもろくに使えない時代だったので、日本の家族と話す機会は、3ヶ月に一度ほど、高い通話料を払ってする国際電話だけでした。そこから意を決し、家で何度も友達との会話をイメトレし、質問されたら答えるだけの受け身にならないよう自分から話題を作る練習をし、授業中やランチタイムやスクールバスで話しかけては失敗し、たまに成功し、喜び、落ち込む、というのを毎日繰り返していました。気がついたら、ホストマザーの送り迎えを断って友達の車で登校したり、友達とバンドを組んでライブをしたり、仲の良い友達を誘ってタキシードを着てプロムに行けるようになっていて、そんな自分を第三者の視点から見て、感慨深い思いになりました。英語で友達と腹を抱えて笑って、お別れの時には泣きながらハグをする関係を作ることができた自分の英語力の伸びと、それ以上に人間の持つ可能性を実感したのを覚えています。
                </p>
            </div>
        </div>
    )
}