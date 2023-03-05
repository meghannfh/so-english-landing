export default function Textbook({ img }){
    //w x h is 200 x 285px
    return (
        <div className="w-[200px] h-[285px] rounded-lg overflow-hidden">
            <img src={img} />
        </div>
    )
}