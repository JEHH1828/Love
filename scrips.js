/*
function generateRandom(min,max){
    return Math.round( Math.random()*(1+max-min)+min);
}
console.log(generateRandom(1,100))

function pintar(col){
    document.getElementById('no').style.color=col;
};
*/


const no = document.querySelector('#no');

no.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
no.addEventListener('onclick', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})