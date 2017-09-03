const baseFunction = (successFun, failFun) => {
    console.log('now we should start a computation! number 1 is 1,number 2 is 2');
    const randomNumber = Math.random() * 2;
    setTimeout(() => {
        if (0 < 1) {
            console.log('starting computation!');
            successFun({number1: 1, number2: 2, answer: 0});
        } else {
            failFun('can not connect compute server,timeout!');
        }
    }, 1000 * randomNumber);
};

// 能够成功开始计算的时候才会执行的函数
//发现.then(function(*))  * 这里只能传递一个参数因此我传入了对象
const addFunction = (data) => {
    return new Promise((successFun, failFun) => {
        const randomNumber = Math.random() * 2;
        setTimeout(() => {
            if (0 < 1) {
                const newAnswer = parseInt((parseInt(data.number1) + parseInt(data.number2)) + parseInt(data.answer));
                console.log('add server compute successful the answer is :' + newAnswer);
                successFun(Object.assign({},data,{answer:newAnswer}));
            } else {
                failFun('can not connect compute add server,timeout!');
            }
        }, 1000 * randomNumber);

    })
};

const mulFunction = (data) => {
    return new Promise((successFun, failFun) => {
        const randomNumber = Math.random() * 2;
        setTimeout(() => {
            if (0 < 1) {
                const newAnswer = (Number(data.number1) + Number(data.number2)) + Number(data.answer);
                console.log('mul server compute successful the answer is :' + newAnswer);
                successFun(Object.assign({},data,{answer:newAnswer}));
            } else {
                failFun('can not connect compute mul server,timeout!');
            }
        }, 1000 * randomNumber);

    })
};


new Promise(baseFunction)
    .then(addFunction)
    .then(mulFunction)
    .then(addFunction)
    .then(mulFunction)
    .catch((msg) => {
        console.log(msg)
    });

//1.promise 构造函数的参数