const promise1 = new Promise((successFun,failFun)=>{
    setTimeout(successFun,1000);
});

const promise2 = new Promise((successFun,failFun)=>{
    setTimeout(successFun,3000,"parameters 2 from promise2");
});

Promise.all([promise1,promise2]).then((results)=>{
    console.log(results);
});


//如果采用了这种方式，all所有的promise必须全部都执行完了，才能调用.then并且将successFun参数整合起来放入results
//如果不是每一个promise的successFun都传递了参数，那么没有参数的部分使用undefind站位