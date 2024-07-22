

document.getElementById('push').addEventListener('click', () => {

    if(document.querySelector('input').value.length == 0){
        alert("enter a task")

    }

    else{
    document.getElementById('tasks').innerHTML += `<div class="task">

        <span id="name">

            ${document.querySelector('input').value}
        </span>
            <button class="delete">Delete</button>
    
        </div>`

        document.querySelector('input').value = ' '
        var current =document.querySelectorAll(".delete")

        for(var i=0; i<current.length ;i++){
            current[i].onclick=function(){
                this.parentNode.remove();
            }

        }
    }

})