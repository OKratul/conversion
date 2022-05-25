let inch = document.getElementById('inch');

let mm = document.getElementById('mm');

let cm = document.getElementById('cm');
 
let mic = document.getElementById('micm');

inch.addEventListener('input',function(){
    let i = this.value;
    let m = i * 25.4 ;
    let c = i * 2.54 ;
    let d = i * 25400 ;
    mm.value = m ;
    cm.value = c ;
    mic.value = d ;
})

mm.addEventListener('input', function(){
    let m = this.value;
    let i = m / 25.4;
    let c = m * 0.1 ;
    let d = m * 1000 ;
    inch.value = i ;
    cm.value = c ;
    mic.value = d ;
})

cm.addEventListener('input', function(){
    let c = this.value;
    let m = c * 10 ;
    let i = c * 0.3937 ;
    let d = c * 10000 ;
    mm.value = m ;
    inch.value = i ;
    mic.value = d ;
})

