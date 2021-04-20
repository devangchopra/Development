window.onload=function(){
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')
    
    addtask.onclick=function(){
        // we do not need mouse event here

        let li=document.createElement('li')
       
        //ADD THE X BUTTON
        let xbtn=document.createElement('button')
        xbtn.innerText='✗'

        xbtn.onclick=function(Mouseevent){
            Mouseevent.target.parentElement.remove()
        }

        //ADD THE UP BUTTON
        let upbtn=document.createElement('button')
        upbtn.innerText='⬆'

        upbtn.onclick=function(Mouseevent){
            //Mouseevent.target = the up button
            //Mouseevent.target.parentelemeent = the <li> item
            //Mouseevent.target.parentelemeent.parentElement = the todo list

            Mouseevent.target.parentElement.parentElement.insertBefore(
                Mouseevent.target.parentElement,//insert this element
                Mouseevent.target.parentElement.previousElementSibling //before its previous element

            )
        
        }

        //ADD THE DOWN BUTTON
        let dnbtn=document.createElement('button')
        dnbtn.innerText='⬇'

        dnbtn.onclick= function(Mouseevent){
            

            Mouseevent.target.parentElement.parentElement.insertBefore(
           
            Mouseevent.target.parentElement.nextElementSibling ,//insert next element
            Mouseevent.target.parentElement,//before current element


            )
        
        }
        
        //ADD THE TASK TEXT

        let taskspan=document.createElement('span')
        taskspan.innerText=newtask.value
        li.appendChild(xbtn)
        li.appendChild(upbtn)
        li.appendChild(dnbtn)
        li.appendChild(taskspan)
        todolist.appendChild(li)       
    
    }
}