const str = prompt("Як тебе звати?")

switch (str) {
    case 'Ігор':
    case 'Сергій':
        alert('Привіт адмін ' + str);
        break;
    case 'Паша':
        alert('Привіт хворий ' + str);
        break;
    case 'Оля':
    case 'Оксана':
        alert('Вітання вам ' + str);
        break;
    default: {
        alert('Посторонім вхід заборонено, коронавірус');
        break;
    }
}