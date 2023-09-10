const arr = [1, 2, 10, 4, 'undefined', 'fly', 7, 0, 9, 6, null, 'crawl'];
let even = 0;
let odd = 0;
let other = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        other++;
    } else {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log("Четных чисел " + even);
console.log("Нечетных чисел " + odd);
console.log("Другое " + other);