  export let tasks = [
{   id:1,
    title:"revise html concepts",
    completed:false

},
{   id:2,
    title:"revise flexbox",
    completed:false


},
{   id:3,
    title:"complete javascript closure",
    completed:false

}
]

 let idCounter = 4
export function getNextId(){
    return idCounter++
}
  