let inch = document.getElementById('inch');
let mm = document.getElementById('mm');

inch.addEventListener('input',function(){
    let i = this.value;
    let m = i*25.4 ;
    mm.value = m ;
})

mm.addEventListener('input', function(){
    let m = this.value;
    let i = m / 25.4;
    inch.value = i ;
})