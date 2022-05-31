async function change(){
    let color = '#' + Math.floor(Math.random() * 123165487984).toString(16).slice(2, 8);
    let back = document.querySelector('body');
    back!.style.backgroundColor = color;
    document.querySelector('h2')!.innerText = color;
}
