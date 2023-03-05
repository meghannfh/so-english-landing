import TextbooksCard from "./TextbooksCard"
import textbook1 from '../../media/images/textbook1.png'
import textbook2 from '../../media/images/textbook2.png'
import textbook3 from '../../media/images/textbook3.png'
import textbook4 from '../../media/images/textbook4.png'
import textbook5 from '../../media/images/textbook5.png'
import textbook6 from '../../media/images/textbook6.png'
import textbook7 from '../../media/images/textbook7.png'
import textbook8 from '../../media/images/textbook8.png'

export default function StudyMaterial(){
    return (
        <div className="flex flex-col w-screen">
        <div className='px-6 py-24 md:px-24 lg:px-56'>
            <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">Material</h2>
            <h3 className="mt-6 font-semibold leading-relaxed md:leading-loose text-2xl md:text-2xl text-[#282828]">
                以上の５ステップ＋データベースだけでもそれぞれ役割が違い、別々にトレーニングする必要があります。多くの受験勉強だけしてきた人はデータベースの蓄積はありますが、他のステップのトレーニングをした経験が無いので、会話が出来ないのはその為です。なので決して、頑張った受験勉強は無駄ではなかったということをここで強くお伝えしておきたいと思います。
            </h3>
            <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                また、各スキルを伸ばす為のトレーニングは複数あり、トレーニングの種類の数だけ教材があり、レベル毎に異なるだけでなく、学習者との相性があります。So ENGLISH!では、市販の教材とオリジナルの教材を組み合わせて学習者に合った教材を使用しています。
            </p>
        </div>
        {/* <TextbooksCard book1={textbook1} book2={textbook2} book3={textbook3} book4={textbook4}/> */}
        <div className='px-6 py-24 md:px-24 lg:px-56'>
            <h4>授業で使っている教材例：</h4>
            <h5>①基礎文法</h5>
            <ul className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                <li>山田 暢彦『中学英語をもう一度ひとつひとつわかりやすく。』(学研教育出版、2011)</li>
                <li>山田 暢彦『中1英語をひとつひとつわかりやすく。改訂版』(学研教育出版、2021)</li>
                <li>田地野 彰『「意味順」だからできる! 絵と図でよくわかる 小学生のための中学英文法入門』(Jリサーチ出版、2020)</li>
                <li>『スーパーステップ中学英文法』(くもん出版、2021)など</li>
            </ul>
        </div>
        {/* <TextbooksCard book1={textbook5} book2={textbook6} book3={textbook7} book4={textbook8}/> */}
        <div className='px-6 py-24 md:px-24 lg:px-56'>
            <h5>②文章化トレーニング</h5>
            <ul className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                <li>山田 暢彦『NOBU式トレーニング コンプリートコース 話すための中学英語』(IBCパブリッシング、2018)</li>
                <li>森沢 洋介『どんどん話すための瞬間英作文トレーニング』(ベレ出版、2006)</li>
                <li>山田 暢彦『英語のスピーキングが驚くほど上達する NOBU式トレーニング』(IBCパブリッシング、2016)</li>
                <li>山田 暢彦『英会話に必要な瞬発力を身につける NOBU式トレーニング 実践編』(IBCパブリッシング、2017)</li>
            </ul>
        </div>
    </div>
    )
}