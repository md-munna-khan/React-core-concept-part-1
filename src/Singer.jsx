export default function Singer ({singer}){
    console.log(singer)
    return(
<div>
<h3>id: {singer.id}  </h3>
<h3>name: {singer.name} </h3>
<h3>age:  {singer.age}</h3>

</div>


    )
}