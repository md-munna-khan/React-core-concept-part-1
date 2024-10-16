export default function Book ({bag}){

    const {name, price} = bag;
    return(
        <div>
            <h3> Book Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}