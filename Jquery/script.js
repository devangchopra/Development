$(function(){
    let item=$('#item')
    let list=$('#list')

    $('#prepend').click(function(){
        let text=item.val()
        list.prepend($(`<li>${text}</li>`))
    })

    $('#append').click(function(){
        let text=item.val()
        list.append($(`<li>${text}</li>`))
})})