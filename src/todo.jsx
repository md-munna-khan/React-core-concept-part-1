// export default function Todo ({task, isDone}){
//     return (
//         <li>task: {task}</li>
//     )
// }


// conditional rendering option 1
// export default function Todo ({task, isDone}){
//  if(isDone){
//     return <li>Finished: {task}</li>
//  } else{
//     return <li> not Finished: {task}</li>
    
//  }
// }


// conditional rendering option 2
// export default function Todo ({task, isDone}){
//  if(isDone){
//     return <li> task Finished {task}</li>
//  }
//  return <li>not finished {task}</li>
// }

// conditional rendering option 3  ternary operator
// export default function Todo ({task, isDone}){
// return (
//     <li>{isDone ? "work finised" : "not finished" } {task} </li>
// )
// }

// conditional rendering option 4 &&
// export default function Todo ({task, isDone}){
//     return (
//         <li> {task} {isDone && "Done"}</li>
//     )
// }

// conditional rendering option 5  0r ||
// export default function Todo ({task, isDone}){
//     return (
//         <li> {task} {isDone || "Work Do it"}</li>
//     )
// }

// conditional rendering option 6
export default function Todo ({task, isDone}){
    let listItem;
 if(isDone){
  listItem =   <li> work Finished {task}</li>
 }
  else{
    listItem = <li>not finished {task}</li>
  }
  return listItem
}