const arr = ['1', '2', 'null', 'fly', '5']

let expression = true
for (let i = 0; i < arr.length - 1; i++){
   for (let num = i + 1; num < arr.length; num++){
     
      if (typeof(arr[i]) !== typeof(arr[num])){
            expression = false;
        }
   }
}

if (expression) {
    console.log("Массив одинаковый!");
} else {
    console.log("Массив не одинаковый!");
}