// let leads =`[ "www.com"] `
// leads=json.parse(leads)
// leads.push("y.com")
// leads=json.stringify(leads)
// window.alert(leads)

// let leads = []
// let inputid = document.getElementById("inputel")
// let buttonid = document.getElementById("button")
// let delbtn = document.getElementById("delete")
// let ulid = document.getElementById("ul")
// let saveid=document.getElementById("save")

// // localStorage.clear()
// // JSON.parse(localStorage.getItem("leads"))
// // localStorage.setItem("name","arya")
// // window.alert(localStorage.getItem("name"))
// // localStorage.clear()


// let local = JSON.parse(localStorage.getItem(leads))
// console.log(local)

// if (local) {
//   leads = local
//   render(leads)
// } 

// buttonid.addEventListener("click", function () {

//   leads.push(inputid.value)

//   inputid.value = " "
//   localStorage.setItem("leads",JSON.stringify(leads))

//   render(leads)
//   console.log(localStorage.getItem("leads"))
// })


// function render(mylead) {
//   let listitems = " "
//   for (let i = 0; i < mylead.length; i++) {
//     listitems += `
//    <li> 
//          <a href= ${leads[i]} >${leads[i]}</a>
//          </li>`

//   }
//   ulid.innerHTML = listitems

// }


// delbtn.addEventListener("dblclick", function () {
//   window.alert("all deleted")
//   console.log("all deleted")
//   leads = []
//   localStorage.clear()
//   render(leads)
// })


// // const tab="aryas"
// // saveid.addEventListener("click",function(){
//   // console.log(tab)
//   //  leads.push(tab)
//     // localStorage.setItem("leads",leads,JSON.stringify(leads))
//   // render(leads)
//  chrome.tabs.query({active: true, currentWindow:true},function(tab)
// {
//   console.log(tab)
//   let active=tab[0]
//   let aid=active.id
// });

// // let openid=document.getElementById("open")

// // openid.addEventListener("click",function(){
// //     window.alert("the bos is opend ")
// // }



// ================================player======================================================//


// let p1 ="arya"
// let p2 ="per"
// let game ="fight"
// let point = 0
// let haw =false


// point += 100
// haw =true

// if(false)
//   {
//     console.log(`${p1} got ${point} won the ${game} game`)
//   }
//   else{
//     console.log(`the wiiner is ${p2} and ${p1} lost the game`)
//   }


//==========================function==========================================================//

// function arr(course){

//   for(let i=0 ; i<course.length;i++)
//   {
//     console.log(course[i])
//   }
// }

// let course=["java","c","html"]
// arr(course)

//=======================================local storage==========================================//

// localStorage.setItem("cr","100")
// localStorage.getItem("cr")
// console.log(cr)


// ===============================event handle=================================================//

// let buttonid =document.getElementById("button")
// let scr=document.getElementById("sc")

// let data =[
//   {
//     p1:"jan",
//     score:52
//   },
//   {
//     p1:"mark",
//     score:41
//   }
// ]

// buttonid.addEventListener("click",function(){
//      console.log(data[0].score)
//      scr.innerHTML=data[0].score
// })

//======================================sentence================================================//
// function generate(des,arr)
// {
//   let base =` the ${des} are `

//  let l =arr.length-1
//   for (let i=0;i<arr.length; i++)

//      {
//       base+=arr[i]
//       if (i!=l)
//         {
//           base+=","
//         }

//            }
//   return base
// }

// let c=generate("fruit",["banana","apple","orenge"])
// // let c=generate("country",["india","china","norva"])
// console.log(c)

//====================================images==================================================//


// const imgs=[
//   "shoe.jpeg",
//   "shoe.jpeg",
//   "shoe.jpeg"
// ]
//  let imid=document.getElementById("images")

// function renderimg(sho)
// {  
//   let dom=""
//   for(let i=0;i<sho.length;i++)
//     {
//    dom+=`<img class="team" src="${sho[i]}">`
//     }
//     imid.innerHTML =dom
// }

// let m=renderimg(imgs)


//=================================  callback =================================================//

// let bt=document.getElementById("butn")


// document.getElementById("butn").onclick =disply;
// function disply(ar){
//   console.log(ar)
// }

// disply(90)


//========================== arrow  function ==================================================//

// const value=[1,2,3,4,5,6,7]
// value.forEach(
//   function(args){
//     console.log("arya",args)
//   }
//   )


// const f2= function(val){
//   console.log("arya",val)
// }

// const fn=(val) =>{
//   console.log("hello ",val)
// }

// f2(23)
// fn(34)

// const f2=(a,b)=>a+b

// let p =f2(3,4)
// console.log(p)


// const f2 = ()=>"hii"

// p=f2()
// console.log(p)

// const f2 =()=> [1,2,3,4]

// let p= f2()
// console.log(p)

// const f=()=>({ a:1,b:"arya"})

// let p= f()
// console.log(p)

//================================== this keyword =============================================//

// const sum={
//   a:100,
//   b:200,
//   c:function(){
//   console.log(this)
//   }
// }
// // const ob ={
// //   k:12,
// //   j:22
// // };
// sum.c =sum.c.bind(sum)
// var a=sum.c;
// a()
// {----------this is return the context -----------------------// }

//{------------use inner call fn--------------------------------//}



//===================================

// class myclass{
//   fn(){
//     console.log(this);
//   }
// }
// var obj =new myclass();
// var a =obj.fn.bind(obj)
// a(obj.fn)
// obj.fn()


//============================= call by value & references =======================================//
// function one(){
//   var a={
//     c:100
//   }

//   two(a)
//   console.log("one",a.c)
// }

// function two(a){
//   a.c=a.c+1
//    console.log("two",a.c)
// }

// one()

//------------------------------variable------------------------------------//
// function one(){
//   var a=100;


//   two(a)
//   console.log("one",a)
// }

// function two(a){
//   a=a+1
//    console.log("two",a)
// }

// one()
// two()

//----------------------------in array---------------------------------------------------------//

// function one(){
//   var a=[1,2,3]

//   two(a)
//   console.log("one",a[0])
// }

// function two(a){
//   a[0]=a[0]+2
//    console.log("two",a[0])
// }
// one()

//====================================== closure ==================================================//

// function add(a, b) 
// {

//   function my() {
//     const c = a + b
//     return c
//   }
//   return my
// }
// function main() {
//   const res = add(3, 4);
//   const val = res()
//   console.log(val)
// }
// main()



//=========================================//

// var obj =[    
//   {
//     name:'one',
//     msg:'helo one'
//   },
//   {
//     name:'two',
//     msg:'helo two'
//   },
//   {
//     name:'three',
//     msg:'helo three'
//   }
// ];
// function main(){
//   obj.forEach((item)=>{
//     let  bt = document.createElement('button')
//     bt.innerHTML= item.name
//     bt.onclick =getcallback(item.msg)
//     console.log("hii")
//     document.body.appendChild(bt)
//   });
// }
//  function getcallback(arg){
//  return function(){
//   alert(arg)
// }
// }
// main()



//======================= spread operator ==============================================//

// var obj ={
//   a:1,
//   b:2,
//   c:{
//     n:2,
//     m:5
//   }
// }

//   var a={
// ...obj
// }

// obj.a=10
// console.log(a)
// console.log(obj)

// console.log(obj)


//----------------------------array------------------------------------//

// var obj =[1,1,3,2,2,3]

//   var a=[
// ...obj
//   ]
// console.log(a)

// console.log(obj)

//========================= math values ======================================================//

// var m=Math.max(2,3,4,1,2,344,5,54,)
// console.log(m)

// const a=[2,3,6,7,4,45,6,34,5,6]
// var l=Math.max(...a)
// console.log(l)

// =========================de structuring =================================================//

// const obj = {
//   name: "arya",
//   age: 23,
//   dept: "cs"
// }
// function fn() {
//   const {
//     name, age, dept
//   } = obj
//   console.log(name, age, dept)
// }
//  fn()



// var c={
//   a:"ARYA",
//   b:23

// }

// function fn({a,b})
// {
//   console.log(a,b)
// }

// fn(c)



//=====================================arrya functions=======================================//
//-------for each----------//


// const ar=[
//   {
//     name:"arya",age:23
//   },
//   {
//     name:"anju",age:19
//   },
//   {
//     name:"krish",age:20
//   },
//   {
//     name:"anu",age:22
//   },
//   {
//     name:"pathu",age:24
//   },
//   {
//     name:"ali",age:30
//   }
// ]


// let sum=0
// ar.forEach((item)=>
// {
//   sum= sum+item.age
// })
// console.log(sum)

// var found= ar.forEach((item,index)=>{
//   console.log(index)
// })

// var found =ar.find((item)=>{
//   return item.age<20
// })
// console.log(found)

// var a=ar.filter((item,index)=>
// {
//   return item.name==='ali'
// })

// console.log(a)



// var newarray= ar.map((item)=>
// {
// return {
//   ...item , country:'india',plc:30
// }
// })

// console.log(newarray)

// var newarray= ar.reduce((total,item)=>
//   {

//     total.push(item.name)
//   return total
//   },[])

//   console.log(newarray)



//=================================== nested destructuring ====================================//

// var obj ={
//   name :'lice',
//   age:3,
//   c:{
//     dep:'cs'
//   }
// }

// var {
// name,age,c:{
//   dep
// }
// }=obj

// console.log(name,age,dep)

// var a=[
//   {
//     name :'lice',
//   age:3,
//   c:{
//     dept:'cs'
//   }
//   },
//   3,
//   4
// ]

// var [{
//    c:{dept}
// }]=a

// console.log(dept)

//==================================== class ================================================//

// var std={
//   name: "arya",
//   dob: 2000,
//   getage: function() {
//     return new Date().getFullYear()-this.dob;
// },
// getname:function(){
//   return this.name;
// }
// };
// console.log(std.getage())




// class Std{
//   name;
//   age;
//   place;

//   dept(){
//     return "cs"
//   };
//   constructor(name,age,place){
//     this.name=name;
//     this.age=age;
//     this.place=place;
//   }
// }

// Std.min=function(...args){
//   var a=args.map((m=>m.age));
//   console.log(Math.min(...a))
// }
// var s=new Std("arya",24,"chngd");
// var s2 =new Std("ajay",17,"ndvyl");
// var s3 =new Std("maya",29,"knchra")

// Std.min(s,s2,s3);





//console.log(s)
// s.name="arya";
// s.age=23
// s.place="chngd"


// console.log(s.dept())



//=================================  setters & Getters =========================================================//



// class Button{
//   constructor(name){
//     this.button =document.createElement('button');
//     this.button.innerHTML= name;
//     document.body.appendChild(this.button)
//     // this.btn=document.addEventListener("click",function(){
//     //   alert("hii")
//     // })
//   }

// set height(h){
//   this.button.style.height=h + 'px'
// }
// set wi(w)
// {
//   this.button.style.width=w+'px'
// }
// set cl(c){
//   this.button.style.color=c
// }
// get cl(){
//   return this.button.style.color;
// }
// }
// var b= new Button("click me")
// b.height=100
// b.wi=100
// b.cl="green"

// console.log(b.cl)


//========================== inheritance==============================//

// class Button{
//   constructor(name){
//     this.button=document.createElement('button')
//     this.button.innerHTML=name
//     document.body.appendChild(this.button)

//   }
//     onclick(fn){
//     this.button.onclick=fn;
//   }
// }

// class gb extends Button{
//  onclick(fn){
//   this.button.onclick=function(){
//     this.button.style.background='green'
//     fn();

//   }.bind(this)
//  }
// }
// var b=new gb("click me");
// b.onclick(function(){
//   // console.log("clicked")
// })



// class Button{
//   constructor(name){
//     this.button=document.createElement('button')
//     this.button.innerHTML=name
//     document.body.appendChild(this.button)

//   }
//   onclick(fn){
//     this.button.onclick=fn
//   }

// }
// class gb extends Button{
//   onclick(fn){

//     super.onclick( function()
//    {
//     this.button.style.background='red'
//     fn();
//     }.bind(this));
//   }
// }

// var b=new gb("click me ")

// b.onclick(function(){
// console.log("clicked")
// })


//======================   prototype ========================================//


// var button =document.getElementById("btn");
// button.onclick=(function()
// {
//   console.log("he")
// })


//====================== error handling ===================================//


// console.log("hii")
// var s1;
// var s2;
// var sum;

// try{
//   s1=value1();
//   s2=value2();
//   s3=sum(s1,s2)
// }


// finally{
//   console.log('in finally')
// }
//   function value1(){
//   junk();
//   throw "error is an error";
//   return 10;
//  }
//  function value2(){
//   return 20;


//  }

//  function sum(a,b)
//  {
//   console.log(a+b)
//  }


//=========================  scope====================================================//

// let button =document.createElement('button')
// button.innerHTML="click here "
// document.body.appendChild(button)


// button.addEventListener("click",function(){
//   console.log(button.innerHTML)
//   button.style.background="red"
// })




// let butn=document.createElement('button')
// butn.innerHTML="need help"
// document.body.appendChild(butn)

// butn.addEventListener("click",function(){
//   console.log(butn.innerHTML)
//   butn.style.background="green"
// })


// var bt=document.getElementById('btn')
// bt.addEventListener("click",function(){
//   console.log(bt.innerHTML)
// })

//=========================================  import and export  ===========================//

// class Studnet{
//   name;
//   dob;
//   age;
// }
// var st =new Studnet();
// st.name="anu";
// st.dob=33;
// st.age=10

// console.log(st)

//=============  button ==========================================//

// var bt=document.getElementById("btn")
// bt.style.background="red"
// bt.style.width=200+ 'px'
// bt.style.height=100+ 'px'

// bt.addEventListener("click",function(){
//     bt.style.background="green"
//     bt.innerHTML="blig bling"
//     bt.style.width=100+'px'
//     bt.style.height=80+ 'px'
// })


//=================================================================//
//  (function(){
//     var b=document.getElementById("btn")
//     b.addEventListener("click",function(){
//         console.log("hello")
//     })
//  }) ();


//=====================================================================//


// console.log('script1')
//  export function add(a)
// {
//   return a.reduce((total,item)=>total+item,0);
// }



//==========================    import  & export ================================//

//  export const name="arya"
// const data ={
//   name:"arya",
//   age:23
// }

//  export function add(a=[]){
//   console.log("addall")
//   return a.reduce((total,item)=>total+item ,0)
// }


//  export function max(a=[])
// {
//   console.log("max")
//   return Math.max(...a)
// }



// function log(val)
// {
//   console.log('inside',val)
// }



//==============================   dynmaic import   ==============================================//


// export function create(name,fn){
//   const bt=document.createElement('button')
//   bt.innerHTML=name
//   document.body.appendChild(bt)
//   bt.onclick=fn
// }



//====================== string literal =============================================//


// document.body.innerHTML=`
//   <div>
//   <h1> product name </h1>
//   <p>price 000</p>
//   </div>
// `


// var a="arya "
// var b=23
// document.body.innerHTML=`
// i am ${a} age is ${b}`


//=================  default parametrs  ==============================================//



// function avg(a=sum(),b=a)
// {
//   console.log(a,b)
//    var s= a+b
//    return s

// }
// function sum(){
//   return 20
// }

//  let p=avg(1)
// console.log(p)



//=================== rest operator ===============================================//


// function test(...all){
//   const sum=all.reduce((total,item)=>total+item,0)
//   console.log(sum)

// }

// test(11,34,55,3,4,3,90)


// function test(...all)
// {
//   console.log(all)
// }

// var a=[1,2,3,4]
// test(...a)




///===================  parameter destructuring =====================================//



// function print({name,age}){
// console.log(name,age)
// }

//   const p=
//   {
//   name:"Arya",
//   age:23
//   }


//  print(p);



//  ====================let var  const ============================================//

// function submit(){
//     const items=document.getElementById('data')
//     const data ={}
//     for(let item of items)
//         {
//             data[item.name]=item.value;
//         }
//     console.log(data);
// }




// var json={

//     name:'code malayalam',
//     age:23,
//     topic:['js','react','scss','git','aws'],
//     caption:'keep calm and js'
// }


// var json= "anjaly"


// var j =JSON.stringify(json)
// console.log(j)
//  var p=JSON.parse(j)
//  console.log(typeof j)
//  console.log(p)
//  console.log(typeof p)
// console.log(json)
// console.log(typeof json)


//=====================  string  library ===============================================//






// function texts(args) {
//     const a = document.getElementById('te')
//     const error = validate(args.value)
//     if (error) {
//         a.innerHTML = error;
//     }
//     else {
//         a.innerHTML = '';
//     }
// }

// function validate(value) {
//     const reg = /^([012]?\d|3[01])-([0]?\d|1[012])-\d{4}$/;

//     const res = value.match(reg)
//     //  const result=reg.test(value)
//     console.log(res)
//     if (result) {
//         return ''
//     }
//     else {
//         return 'ivalid input'
//     }
// }


//  const reg=/catt?$/;

//  const result=reg.test('my var catt')
//  const a=reg.test('i am cat')
//  const b=reg.test("cat is small")

//  console.log(result)
// console.log(a)
// console.log(b)




//====================== mutable ====================================================//

//  function junk(obj)
//  {
//     const ret={
//         ...obj,
//         age:23
//     }
//  }

//  const data={
//     name:"arya"
//  }
// var result=junk(data)

// console.log(result===data)


//=============================    immer    =========================================//




var bt=document.getElementById('btn')
bt.onclick=()=>{
console.log("started")


//    $.ajax({
//     url:'https://jsonplaceholder.typicode.com/todos/1',
//     success:(data)=>{
//         console.log(data);
//     },
//     async:false,
//    }); 



var ar=[1,2,3,4]
ar.forEach((item)=>
{
    console.log(item)
})


   console.log("ended")
}
