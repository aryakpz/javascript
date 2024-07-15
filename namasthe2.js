// import { add } from './namasthe.js'

// import { add as adding} from './namasthe3.js'

// const value=add([1,2,3])
// console.log(value)

// const concat =adding([2,4,5],[1,3,6])
// console.log(concat)

//==============================  calculator ================================================//

// const display=document.getElementById('display');

// function append(a)
// {

//   display.value += a;
// }
// function calculate(){
// try{
//     display.value=eval(display.value)
// }
// catch(er){
//     display.value="error"
// }

// }
//  function clears(){
//     display.value=" ";
//  }

//==============================  debugg media ===============================================//

// console.log("run1")
//  setTimeout(()=>{
//     console.log("run2")
// },8000)
// console.log("run3")

// console.log("start")
// function get(cb){
//     setTimeout(()=>
//         {
//             cb("javas")
//         },3000
//     )
// }
// console.log("end")
// get((a)=>{
//     console.log(a)
// })

// const pr= new Promise((res,rej)=>{
//     rej("failed")
// })
// pr.then((data)=>
//     {
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// const pro1 = new Promise((res, rej)=>{
//     res(["java", "js"])

// })

// const pro2 = new Promise((res, rej)=>{
//     res(["react", "python"])
// })

// const pro3 = new Promise((res,rej)=>{
//     // res(["html","cpp"])
//     rej("API rejected")
// })

// // pro1.then((data)=>{
// //     console.log(...data)
// // })

// // pro2.then((data)=>{
// //     console.log(...data)
// // })

// const pro4 = Promise.race([pro1, pro2,pro3])
// pro4.then((data) => {
//     console.log(data)
// })

//===================== ========================== =================== =======================//



// =======================================   array  =============================================//

// const arr=[
//     {
//         name:"arya",
//         place:"chngd",
//         age:23
//     },
//     {
//         name:"aishu",
//         place:"ndvyl",
//         age:25
//     },
//     {
//         name:"achu",
//         place:"knchra",
//         age:17
//     }
// ]

// console.log(arr)
// let sum=0
// arr.forEach((item,index)=>{
//      sum=sum+item.age
//      console.log(index)
// })  
// console.log(sum)


//  var found=arr.find((item)=>{
//     return item.age<25
//     // console.log(index)
//  })
//  console.log(found)


// var found =arr.filter((item)=>{
//     return item.age<25
// })
// console.log(found)


// var found=arr.map((total,item)=>{
// return found
// },0)
// console.log(found)


// var value=arr.reduce((total,item)=>{
// total.push(item.name);
// return total
// },[])
// console.log(value)


// class Student{
//     name;
//     age;
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     static mini=function (...arr){
//         var ar=arr.map((item=>item.age))
//         console.log(Math.min(...ar))
//     }

// }
// var obj1=new Student('anjali',24)
// var obj=new Student('arya',34)
// var obj2 =new Student('maya',23)
// Student.mini(obj,obj1,obj2)

// class Button
// {
//     constructor(name)
//     {
//         this.bt =document.createElement('button')
//         this.bt.innerHTML=name
//         document.body.appendChild(this.bt)
//     }
//     set width(w){
//        this.bt.style.width=w + 'px'
//     }
//     set height(h){
//         this.bt.style.height=h+'px'
//     }
// }

// var b1=new Button('click me')
// b1.width=200
// b1.height=49

class Button {
    constructor(name) {
        this.bt = document.createElement("button")
        this.bt.innerHTML = name
        document.body.appendChild(this.bt)
    }
    onClick(fn) {
        this.bt.onclick = fn
    }
}

// a=addEventListener('click',function(){
//     console.log("clicked")
// })

class greenbutton extends Button{
    onClick(fn){
       this.bt.style.background="red"
          fn();
    }
}
var a = new greenbutton('help')
a.onClick(function () {
    console.log("hii")
});

