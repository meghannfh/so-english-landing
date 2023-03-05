export default function Menu(){

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    /*the z index of the menu on medium screens and larger is putting it behind
the nav bar and making the links unclickable. Might have to redo nav bar to make the hamburger and the logo two seperate items not in the same container and place absolute position them on opposite sides of the viewport*/
    return(
        <div>
            <ul className="flex flex-col items-center pt-14 md:p-0 md:flex-row md:h-20 md:justify-end md:pr-40 md:gap-6 lg:pr-0 lg:justify-center lg:gap-10 bg-slate-900 text-white lg:text-2xl">
                <li>
                    <a href="#section1" onClick={(e) => handleLinkClick(e, 'section1')}>ポッドキャスト</a>
                </li>
                <li>
                    <a href="#section2" onClick={(e) => handleLinkClick(e, 'section2')}>アバウト</a>
                </li>
                <li>
                    <a href="#section3" onClick={(e) => handleLinkClick(e, 'section3')}>メソッド</a>
                </li>
                <li>
                    <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>教材</a>
                </li>
                <li>
                    <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>感想</a>
                </li>
            </ul>
        </div>
    )
}