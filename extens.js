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

//===============================local storage=====================================//

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
  function generate(des,arr)
  {
    let base =` the ${des} are `

   let 

    for (let i=0;i<arr.length; i++)
       {
        base+=arr[i]
        l      }

    return base
  }

  let c=generate("fruit",["banana","apple","orenge"])
  // let c=generate("country",["india","china","norva"])
  console.log(c)

  