window.onload= function my(){
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')
    addtask.onclick=function qwe(){
        let li=document.createElement('li')
        // creation of li in memory
        li.innerText=newtask.value
        //the new tasks's value  is in string

        let xbtn = document.createElement('button')
        xbtn.innerText='❎'

        //creation of delete button
    
        li.appendChild(xbtn)
        //appending btn with every list item
        todolist.appendChild(li)
        
        xbtn.onclick=function(Mouseevent){
            Mouseevent.target.parentElement.remove()
        }
        
       

    }


}