//====================================   closure   ===============================================================//


// function x() {
//     var a = 7
//     var b = 5
//     function y() {
//         var c = a + b
//         console.log(c)
//         function p() {
//             console.log(a,b)
//         }
//         p()
//     }
//     y()
// }
// var z = x()
// console.log()
// z()


//=======================================      statement     =============================================//



// function a(){
//     console.log("harirama jaganadaha")
// }
// a()

// var b=function(){
//     console.log("pling plong")

// }
// b()

// ={  hoising tymill variablelek function varunnath  vare ath undefined aahnu so startingill function call cheyth kazhinjal ath function expressionill error kanikm---because of js hoisting }
//{  first class functions :   funstion can pass as values inside a function parameteres  }//


// setTimeout(function()
// {
//   console.log("helooooo")
//   // document.body.style.background='red'

// },3000);


//================================ button =================================================//

// var a=0;
// var btn =document.createElement('button')
// var p=document.getElementById("count")
// btn.innerHTML="button"
// document.body.appendChild(btn)
// btn.onclick=function(){
//     console.log("click",a=a+1)
//     p.innerHTML=a
// }

//==================  higher order function ============================================//


// const r=[2,3,4,1]
// const calc=function(radius)
// {
//     const out=[]
//     for(let i=0;i<r.length;i++)
//         out.push(i+10)
//     return out
// }
// var p=calc()
// console.log(p)

//====================    transformation -- map    ==========================//


// const ar=[5,3,5,1,4]

// function double(x){
//     return x*2
// }
// const out=ar.map((x)=>x.toString(2))
// console.log(out)


// const ar=[2,3,5,1,4]
// var p=ar.filter((x)=>x%2!=0)
// console.log(p)


// const ar=[2,3,5,1,4]

// const out =ar.reduce(function(acc,curr){
//  acc=acc*curr
//  return acc
// })

// // console.log(Math.random(...ar))
// console.log(out)



// const users=[
//     {
//         name:"arya",age:23
//     },
//     {
//         name:"santhosh",age:52
//     },
//     {
//         name:"Smitha",age:45
//     },
//     {
//         name:"Adhi",age:2
//     }
// ]
// // const out=users.map((x)=>{
// //     if(x.age==23){
// //         return x.name
// //     }
    
// // })

// // console.log(out)


// // ep 19

// const out=users.reduce(function(acc,cur){
//     if(acc[cur.age]>20){
//         return cur.age
//     }
// })

// console.log(out)

//==============================   promise    ===========================//

// const cart=["shoes","pants","kurta"]

// const promise =create(cart)

//  promise.then(function(order){
//     proceed(order)

//  })

// ====================  destructuring  ================================//


// const obj={
//     name:'arya',
//     place:'nadavayal',
//     age:23
// }
// function myfunction(){
//   const p={ name,
//     age,
//     place
// }=obj;


// console.log(p)
// }
// myfunction()

// const mark=[5,6,7,3,4,5,5]
  
// function display(){
//     const[a,b,c,...all]=mark
//     console.log(a,b,all,c)
// }
// display()


//============================   import ===============================//

