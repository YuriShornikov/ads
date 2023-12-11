const rotator__case = document.querySelectorAll('.rotator__case');
let index = 0;






const func = function(index) {
    // находим время, но не понятно, как его передать в setInterval 
    let time = parseInt(rotator__case[index].getAttribute('data-speed'));
    rotator__case[index].classList.remove('rotator__case_active');
    index = (index + 1) % rotator__case.length;
    rotator__case[index].classList.add('rotator__case_active');
    const color = rotator__case[index].getAttribute('data-color');
    rotator__case[index].style.color = color;
    setTimeout(() => {func(index)}, time);
}

func(index)



