const scroll = ScrollReveal({
            reset: 'ture',
            duration: 2600,
            distance: '60px'
        });

        scroll.reveal('.image-transform', {delay:400, origin:'top'});
        scroll.reveal('.text-transform', {delay:300, origin:'left'});

const bar = document.getElementById('bar');
const menu = document.querySelectorAll('#menu li');
const spanX = document.getElementById('spanX');
const barMenu = document.getElementById('bar-menu');

menu.forEach((e) => {
    e.ontouchstart = function () {
        e.classList.add('bg-white/10');
    }
});

bar.ontouchstart = function () {
    barMenu.classList.remove('-right-80');
    barMenu.classList.add('right-1');
}

spanX.ontouchstart = function (e) {  
    e.stopPropagation();

    barMenu.classList.add('-right-80');
    barMenu.classList.remove('right-1');
}
//right-1