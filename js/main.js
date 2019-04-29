function Year(){
    const a = new Date()
    const name = document.querySelector('#name').innerHTML = 'RRabelo'
    document.querySelector('#year').innerHTML = a.getFullYear();
    
}