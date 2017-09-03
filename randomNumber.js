const promiseFunction = (successFun, errFun) => {
    const randomNumber = Math.random() * 2;
    console.log("the random number is : " + randomNumber);

    setTimeout(() => {
        if (randomNumber < 1) {
            console.log('use success method!');
            successFun('200 is ok!');
        } else {
            console.log('use fail method!');
            errFun('time out !')
        }
    }, 1000 * randomNumber);
};

const promiseObject = new Promise(promiseFunction);
//创建一个promise对象，创建的方式就是使用promise构造函数并且要求promise构造函数的参数是一个函数

promiseObject
    .then((msg)=>{
       console.log("成功了！—"+msg);
    })
    .catch((msg)=>{
       console.log("失败了！-"+msg);
    });



