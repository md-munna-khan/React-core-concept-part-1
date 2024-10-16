import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todo from './todo'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Bookstor'
import Order from './order'

function App() {


  const Orders =[
{Id:1, phone:"iphone", price:200},
{Id:2, phone:"samsung", price:2000},
{Id:3, phone:"vivo", price:500}

  ]

  const Books =[
    {id:1, name: "math",Price: 100},
    {id:2, name: "biology",Price: 300},
    {id:3, name: "english",Price: 100},
    {id:1, name: "math",Price: 100}
  ]
  
const actors = [ 'munna', "sakib","dipjol","salamn", "masud"]
const singers = [
{id:1, name: "mahdi",age: 34},
{id:2, name: "eva",age: 23},
{id:3, name: "pritom",age: 44},
{id:4, name: "boltu",age: 14}


]

  return (
    <>
    {
Orders.map(product =><Order order = {product}></Order>)
    }


   <BookStore pen = {Books}></BookStore> 
<h1>Vite + React</h1>


{
  singers.map(singer => <Singer singer= {singer}></Singer>)
}


<Actor name = "munna"></Actor>
{
  actors.map(actor => <Actor name={actor}></Actor>)
}

{/* <Todo task ="learn react" isDone={true} ></Todo>
<Todo task ="learn core concept" isDone={false}></Todo>
<Todo task ="learn rendering" isDone={true}></Todo> */}
{/* <Person></Person>
<Developer></Developer>
<Device name= "laptop" price="4000"></Device>
<Device name= "mobile" price="400"></Device>
<Device name= "watch" price="900"></Device>
<Students grade = "7" score = "99"></Students>
<Students></Students>
<Students></Students> */}

    </>
  )
}

function Device (props){
  console.log(props)
  return <h2> this Device :{props.name} Device prices : {props.price}  </h2>
}


function Person(){
const age = 34;

const person = {name:"munna", hobby:"playing football"}
return <h3> i am {person.name} my hobby {person.hobby}</h3>
}

const {grade, score }= { grade :'7', score : '99'};

function Students (grade=1,score=0){
 console.log(grade,score);
  return(
    <div className='student'>
      <h3>this is a student</h3>
    <p>Class: </p>
    <p>score: </p>
    </div>
  )
}

function Developer (){
  const devStyle ={
    margin : "20px",
    border : "2px solid blue",
    padding : "20px",
    borderRadius: "20px"
  }
return(
  <div style={devStyle}>
    <h5> i am a developer</h5>
    <p>i love coding</p>
  </div>
)
}





export default App
