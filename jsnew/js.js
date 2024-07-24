//  ====================   dark mode toggle =============================

// const inputel=document.querySelector('.input')
// const bodyel=document.querySelector('body')

// inputel.checked = localStorage.getItem("mode")
// inputel.checked =false
// check()


// function check(){
//   if (inputel.checked){
//     bodyel.style.background="black"
//   }
//   else{
//     bodyel.style.background="white"
//   }
// }



// inputel.addEventListener('input',()=>{
//     check()
//     flocalStorage()
// })

// function flocalStorage(){
//     localStorage.setItem("mode",
//         JSON.stringify(inputel.checked)
//     );
// }


//   =================  heart animation ===================================


// const bodyel=document.querySelector("body")
// bodyel.addEventListener("mousemove",(event)=>{
//     const x=event.offsetX;
//     const y=event.offsetY;
//     const spanel =document.createElement("span")
//     spanel.style.left=x+"px"
//     //
//     spanel.style.top=y+"px"


//     const size=Math.random() *100

//     spanel.style.width=size + "px"
//     spanel.style.height=size +"px"
//     bodyel.appendChild(spanel)


//     setTimeout(()=>{
//         spanel.remove()
//     },3000)

// })



//  ================= auto text animation =====================================

// const content=document.querySelector('.container')

// let cindex=0
// let careerindex=0
// const career=["youtuber","freelancer","instructor","developer",]
//  update()


// function update(){
//     cindex++;
// content.innerHTML=
//  `<h1>
//   I am a
//    ${career [careerindex].slice(0,cindex)}
//  </h1>`


// if(cindex === career[careerindex].length){
//   careerindex ++
//   cindex=0

// }

// if(careerindex === career.length){
//     careerindex=0
// }

// setTimeout(update,400)

// }



// ===========================  mini calender ==============================

// const monthl =document.querySelector('.months')
// const day =document.querySelector('.day')
// const date =document.querySelector('.date')
// const year =document.querySelector('.year')


// const cal=new Date();

// const month=cal.getMonth();

// day.innerHTML=cal.toLocaleString("en",{
//     weekday:'long'
// });

// date.innerHTML=cal.getDate();

// year.innerHTML =cal.getFullYear();


// monthl.innerHTML=cal.toLocaleString("en",{
//     month:"long"
// })



// ==================   button ripple =================================

// const btnel=document.querySelector('.btn')

// btnel.addEventListener("mouseover",(event)=>{
//     const x=event.pageX - btnel.offsetLeft;
//     const y=event.pageY - btnel.offsetTop;
//     btnel.style.setProperty("--xPos", x + "px")
//     btnel.style.setProperty("--yPos", y + "px")
// })





//================ array ============
let a=["afrf","fjen","ecnj"]
console.log(a)