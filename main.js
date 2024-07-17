
// const str={
//     id:0,
//     name:"arya",
//     place:"chngd"
// }
// console.log(str)
// const jsons=`[
// {
//     "id":0,
//     "name":"arya",
//     "place":"chngd"
// }]`

// console.log(jsons)

// const js = JSON.parse(jsons);

// const string=JSON.stringify(str)

// console.log(js)
// // console.log(typeof(jsons))
// console.log(string)






let api =new XMLHttpRequest();

api.open('get','main.json',true);

api.send();

api.onload=function()
{
    let products=JSON.parse(this.responseText);
    let output



    for(let i of products ){
        output +=`
        <div class="products">
        <img src="" alt="">
        <p class="name"></p>
        <p class="place"></p>
        </div>
        `
    }
}