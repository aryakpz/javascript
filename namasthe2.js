// import { add } from './namasthe.js'

// import { add as adding} from './namasthe3.js'


// const value=add([1,2,3])
// console.log(value)


// const concat =adding([2,4,5],[1,3,6])
// console.log(concat)






//==============================  calculator ================================================//



const display=document.getElementById('display');


function append(a)
{
    
  display.value += a;
}
function calculate(){
try{
    display.value=eval(display.value)
}
catch(er){
    display.value="error"
}

}
 function clears(){
    display.value=" ";
 }