let inch = document.getElementById('inch');

let mm = document.getElementById('mm');

let cm = document.getElementById('cm');

inch.addEventListener('input',function(){
    let i = this.value;
    let m = i * 25.4 ;
    let c = i * 2.54 ;
    mm.value = m ;
    cm.value = c ;
})

mm.addEventListener('input', function(){
    let m = this.value;
    let i = m / 25.4;
    let c = m * 0.1 ;
    inch.value = i ;
    cm.value = c ;
})

cm.addEventListener('input', function(){
    let c = this.value;
    let m = c * 10 ;
    let i = c * 0.3937 ;
    mm.value = m ;
    inch.value = i ;
})