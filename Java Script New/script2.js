window.onload=function pqr (){
    let num=document.getElementById("num")
    let list=document.getElementById("list")
    let print=document.getElementById("print")
    // double quotes or single quotes are your choice

    let N= new Date().getTime();
    // commas are also your choice
    
    //coversion from string to number
    print.onclick=function abc (){
        let n=parseInt(num.value);

        let listHTML =' '
        for (let i=1;i<=n;i++)
        {
            listHTML+='<li>'+i+'</li>'
            //manually providing...not using inner html in inner loop
            //it uses a lot of manipulation for browser as well as CPU

        }
        list.innerHTML=listHTML;
        console.log(new Date()-N);
        }

}