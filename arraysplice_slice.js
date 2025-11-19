const arr=[1,2,3,4,5,6,7,8,9];
console.log("Oroginal array :",arr);
const arr1=arr.slice(1,4);
console.log("arr.slice(1,4):",arr1);
console.log(arr);
const arr2=arr.splice(1,3);
console.log("arr.splice(1,3):",arr2);
console.log(arr);

// #####################
const M_h=['thor','ironnmam','spiderman'];
const dc_heros=['superamn','falsh','batman'];
console.log(dc_heros);
// console.log(M_h);
// M_h.push(dc_heros)
// console.log("pushong array in another array :",M_h);
const all_heros=M_h.concat(dc_heros)
console.log("cancatenation",all_heros);


const a=[1,2,3,4,5];
const b=[10,20,30,40];
const c=[100,200,300,400];
const d=[0,0,0,0,0];
const all =[...a,...b,...c,...c];
console.log(all);
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));









