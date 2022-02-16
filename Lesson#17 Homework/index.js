const sub_buttons = document.querySelectorAll('.submit');
let coms = document.querySelector('.comments');
let com_input = document.querySelector('.comInput');

for (let i = 0; i < sub_buttons.length; i++) {
    sub_buttons[i].addEventListener('click', () => {
        let newCom = document.createElement('p');
        newCom.innerHTML = com_input.value;
        coms.appendChild(newCom);
        com_input.value = '';
    })
}

const add_button = document.querySelector('.add');
let title_input = document.querySelector('.title_txt');
let descr_input = document.querySelector('.descr_txt');
add_button.addEventListener('click', () => {
    let div = document.querySelector('.bigDiv');
    let copy = div.cloneNode(true);
    copy.querySelector('.title').innerHTML = title_input.value;
    copy.querySelector('.descr').innerHTML = descr_input.value;
    
    ps = copy.querySelector('.com').querySelector('.comments');

    while (ps.firstChild) {
        ps.removeChild(ps.lastChild);
        console.log(ps);
    }
    div.parentNode.insertBefore(copy, document.querySelector('.bigDiv'));
});
