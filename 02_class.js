
const arr = [1, 2, 3, 4, 5, 4, 6, 7];

// for(var i=0;i<arr.length;i++){
//      console.log(arr[i]);
// }

// const newArr = [];

const newArr1 = arr.forEach(val => {
     if(val % 2 === 0){

     }else{

     }
}); // not returning any values

// const newArr = arr.map(val => val); // return a new array

const newArr = arr.filter(val => val % 2 === 0);

const newArr2 = arr.fill(10);

// newArr[0] = 11;

// [1, 2, 3, 4, 5]
// console.log(newArr2);


const user = {
     age: 19,
     firstname: 'Usha',
     lastName: 'skk',
     printFullName:  function() {
          // console.log(`${user.firstname} ${user.lastName}`);
     },
     'My Name': 'USHA'
}

user.printFullName();

user['phone_number'] = 9999999999;

delete user['age'];

// console.log(user['My Name']);

const numbr = 10;

const arr2 = Array(numbr).fill(1);
// arr2.map(val => <Task />)
// console.log(arr2);

const obj1 = {name: 'USha'};
const obj2 = {name: 'USha', };


const card = [{isActive: true, name: 'Usha'}, {isActive: true, name: 'Sourav'}, {isActive: false}, {isActive: false}]

card.forEach(obj => {
     // if(obj.isActive){
     //      console.log("Card1");
     // }else{
     //      console.log("Card2");
     // }
});

// const indx = arr.findIndex(val => val === 4);
const arr3 = [1, 2, 3, 4, 5, 4, 6, 7];
const indx = card.find(obj => {
     let val = 0;
     //
     return obj.isActive === true;
});
console.log(indx);

// console.log(obj1 == obj2);
