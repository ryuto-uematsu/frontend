//関数名がある場合
function Area(p1,p2){
    let p = p1 * p2 / 2;
    return p;
}

console.log(Area(2,2));

//関数名がない場合
let area = {};
area.triangle = function(p1,p2){
    let p = p1 * p2 / 2;
    return p;
}

console.log(area.triangle(2,2));