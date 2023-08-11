let apple = {
    name:'apple',
    Color:'red',
    size:'mid',
    weight:300
};

let orange = {
    name:'orange',
    Color:'orange',
    size:'small',
    weight:100
};

let grape = {
    name:'grape',
    Color:'purple',
    size:'big',
    weight:400
};

let fruit = [apple,orange,grape];

let sum=0;
for(let i = 0;i < fruit.length;i++){
   sum += fruit[i].weight;
}

console.log(sum);