async function callback() {
    let p = new Promise(function(resolve, reject) {
        console.log('start')
        setTimeout(() => {
            resolve('resolved');
      }, 2000);
    });
    let a = await p;
    console.log(a);
}

callback().then(console.log);

//мені всеодно не дуже зрозуміло як то робити :(