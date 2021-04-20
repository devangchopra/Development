$(()=>{
    let list=$('#people')
    let page=1

    $('#fetch').click(()=>
    {
        
        $.get{`http://reqres.in/api/users?page=${page}`,(data)=>
        {
            page++
            for(let p of data.data)
            {
                list.append
                (
                    $(`<li>${p.first_name}${p.last_name}</li>`
                )
            }
        }}
    })
    
})