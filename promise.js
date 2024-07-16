//============================    code malayalam promise    ===============================//

// console.log("started");

// const p=myfetch('https://jsonplaceholder.typicode.com/todos/1'); 
// p.then((data)=>{
//     console.log(data)
// })

//================= namasthe functionl programming====================//


// const radius=[3,2,1,5]

// const area =function(radius)
// {
//     return Math.PI *radius*radius;
// };

// const circumference=function(radius){
//     return 2*Math.PI*radius
// };

// const diameter=function(radius){
//     return 2*radius
// }

// const calculate =function(radius,logic){
// const output=[]
// for (let i=0;i<radius.length;i++){
//     output.push(logic(radius[i]))
// }return output
// }

// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))



// console.log("hii")

// setTimeout( 
//     function(){
//     console.log("arya")
// },5000)

// console.log("meme")

// const cart = ["shoes", "pants", "kurtas"]
// api.createorder(cart, function () {
//     api.payment(
//         function () {
//             api.summery(
//                 function () {
//                     api.update()
//                 })
//         })
// })




// const cart = ["shoes", "pants", "kurtas"]
// createorder(cart,function(orderid){
//     payment(orderid,function(infos){
//         summery(infos,function(){
//             update();
//         });
//     });
// });

// const pro =createorder(cart)
// pro.then((orderid)=>{ 
//     payment(orderid)
// })
// .then((infos)=>{
//      summery(infos)
// })
// .then(function(infos){
//      update(infos)
// })




// const p='https://jsonplaceholder.typicode.com/todos/1'
// const user=fetch(p)
// user.then((data)=>
// console.log(data),
// console.log(user)
// )              


// const cart=["shoes","kurta","pants"]
// const promise =createorder(cart);
// promise.then(function(orderid){
//     console.log(orderid)
//     // payment(ordreid)
// })

// function createorder(cart){
//     return new Promise((res,rej)=>{
//         if(!validatecart(cart)){
//             const err=new Error("card is not valid")
//             rej(err)
//         }
//         const orderid="34"
//         if(orderid){
//             setTimeout(function(){
//                 res(orderid)
//             },2000)


//         }
//     })
// }
// function validatecart(){
//     return true
// }


// const cart = ["arya", "ali", "anju"]

// const promise = createorder(cart)
// promise
// .then((data) => {
//     console.log(data)
// })
// .catch((er)=>{
//     console.log(er.medsage)
// })

// function createorder(cart) {
//     return new Promise((res,rej) => {
//       if(!validate(cart)){
//         const err=new Error("not valid")
//         rej(err)
//       }
//        else{
//       res(cart)
//        }
//     })
// }

// function validate() {
//     return false
// }




// const cart = ["arya", "ali", "anju"]

// createorder(cart)
//     .then((data) => {
//         console.log(data)
//         return data
//     })
//     .catch((er)=>{
//         console.log(er.message)
//     })
//     .then((orderid)=>{
//        return payment(orderid)

//     })



// function createorder(cart) {
//     return new Promise((res, rej) => {
//         if (!validate(cart)) {
//             const err = new Error("cart is not valid")
//             rej(err)
//         }
//            const orderid="1234"
//            if(orderid){
//             res(orderid)
//            }

//     })
// }

// function payment(orderid) {
//     return new Promise((res,rej)=> {
//         res("successfully");
//     })
// }
// function validate() {
//     return true
// }


//===================== this keyword =================================//

// const student={
//     no:10,
//     name:"arya",
//     add:function(){
//         console.log(this)
//         const y=()=>{
//         console.log(this)
//         }
//         y()
//     }
// };
// student.add()


// const student2={
//     name:"Santhosh"
// }
// student.add.call(student2)




//===============  rotate gallery ======================================/

// const image=document.querySelector(".image-container")
// const pr=document.getElementById("prev")
// const nxt=document.getElementById("next")
// let x=0
// pr.addEventListener("click",()=>{
//      x=x+45;
//      update()
// })

// function update(){
//     image.style.transform=`perspective(1000px) rotateY(${x}deg)`
// }
// nxt.addEventListener("click",()=>{
//     x=x-45
//     update()
// })
// image.style.transform=`perspective(1000px) rotateY${x}deg`



//==================loan calculator ==================================//


// function calculate() {

//     amt = document.getElementById("amount").value;
//     intrst = document.getElementById("inter").value;
//     month = document.getElementById("months").value;

//     inter = (amt * (intrst * 0.01)) / month
//     pay = (amt / month + intrst)
//     document.getElementById("pay").innerHTML = `monthly payments : ${pay}`
// }


//=================   sticky navbar ======================================//

// const navel=document.querySelector(".navbar")

// window.addEventListener("scroll",()=>
// {
//     if(window.scrollY>303){
//     navel.style.background="black"
//     navel.style.color="white"

//    }
//    else{
//     navel.style.background="white"
//     navel.style.color="black"
//    }   
// })


//=========================   random images ==============================//



