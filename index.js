// const rece ="jan"
// const name ="arya"

// const email =`hey  ${rece}! how are you ${name}`

// console.log(email)


// const c=1

// if(NaN)
//     {
//     console.log("play")
//     }
// else
//     {
//     console.log("nooo")
//     }



// const welc =document.getElementById("wel")
//    function user(name,jem){
//     welc.textContent=`${name} ${jem}`
//    }

// user("java",1)


// function add(a,b){
//     console.log(a+b)
// }

// add(3,5)


// function getarr( ar){
//  return ar[2]
// }


// let array=[1,2,3,4]
// let a=getarr(array)
// console.log(a)


// (function(){
//     var b=document.getElementById("bt")
//     b.addEventListener("click",function(){
//       console.log("haii")
//       console.log(a+b)
//     })
// })();



// import { add } from "/extens.js"
// const val=[2,3,4,3]
// var s=add(val)
// console.log(s)

// import {
//   name
// } from './extens.js'

// console.log(name)


//==============================  dynamic  import ==========================================//

// import {create } from './extens.js'


// create("feature 1", () => {
//   console.log("clicked 1")
//   alert("welcome to disco")
// })

// create("feature 2", () => {


//   console.log("clicked 2")
//   import('/script.js')
//     .then((obj) => {


//       create("start disco", obj.start)
//       create("stop disco", obj.stop)
//     });
// })


//================================= promise =================================================//



// function myfetch(urls) {

//     return new Promise((res, rej) => {
//         $.ajax({
//             type: 'GET',
//             url: urls,
//             success: (data) => {
//                  res(data.title)
//             },
//             error:(xhr,statusText)=>{
//                 rej(statusText)
//             }
//         })
//     });
// }


//=============================   build in fetch ============================================//


// function getjson(url) {

   
//     return fetch(url)
//         .then((data) => {
//             return data.json();
//         })
// }



//=======================    async & await ================================================//


// async function getvalue(){
//     return 112
//  }

//  const result=getvalue();
//  result.then((data)=>{
//     console.log(data)
// }



var a=getvalue()
a.then((data)=>{
    console.log(data)
})





// .catch((err)=>{
//     console.log("handled")
// })

// function getvalue(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((data)=>
//     {
//       console.log(data)
//     })
// }


// async function getvalue(){

//     try{
//     const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      const jdata=await data.json()
//     // console.log(jdata)
//     return(jdata)
//     }
//     catch(e){
//         console.log("handled")
//     }
// }

