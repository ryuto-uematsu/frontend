try {
    var a = [1,2,3];
    console.log(a[0]);  
}catch (e) {
    if(e instanceof ReferenceError);
    console.log('例外 ReferenceError')
}