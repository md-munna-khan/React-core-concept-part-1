export default function Order ({order}){
    const {Id,phone,price} = order
    return(
<div>
    <h3> order :{Id}</h3>
    <h3> product :{phone}</h3>
    <h3> Price :{price}</h3>
</div>
    )
}