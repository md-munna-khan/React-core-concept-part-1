import Book from "./book"
import book from "./book"

export default function BookStore ({pen}){
    return (
<div>
    <h3> Books:{pen.length}</h3>

    {
        pen.map(bag=><Book bag= {bag}></Book> )
    }
</div>

    )
}