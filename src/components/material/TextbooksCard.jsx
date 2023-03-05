import Textbook from './Textbook'

export default function TextbooksCard({ book1, book2, book3, book4 }){
    return (
        <div className="flex flex-row justify-center gap-1 w-100">
            <Textbook img={book1} />
            <Textbook img={book2} />
            <Textbook img={book3} />
            <Textbook img={book4} />
        </div>
    )
}