function multiTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//   }
return [1,2,3,4,5,6,7,8,9,10].map(item => `${item} * ${number} = ${item*number}`).join('\n');
}