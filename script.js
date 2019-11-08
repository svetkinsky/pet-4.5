//1
console.log('Задание 1')
const arr = [
    1,
    2,
    'строка 1',
    'строка 2',
    true,
    false,
]

for (const key1 in arr) {
    console.log(arr[key1])
}

//2
console.log('Задание 2')
let a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
}

for (let key2 in a3){
    console.log(key2)
}

//3
console.log('Задание 3')
const button = document.getElementById('button')
const a7 = {}

button.addEventListener("click", function(){
    
    const key3 = document.getElementById('u7-key__input').value
    const val = document.getElementById('u7-value__input').value
    a7[key3] = val;
    console.log(a7)
})

//4
console.log('Задание 4')
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet']
console.log(a.length)

//5
console.log('Задание 5')
const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]
let a1 = []
let a2 = []

for (let i = 0;i < d.length; ++i){
    if((i % 2) == 0){
         //a2[i] = d[i]
         a2.push(d[i])
    } else a1.push(d[i])
    //i % 2 ? a1[i] = d[i] : a2[i] = d[i]
}

console.log(a1)
console.log(a2)

//6
console.log('Задание 6')
let max

for (let k = 0; k < d.length; ++k){
    //let k1 = k+1
    if (d[k] < d[k+1]) max = d[k+1]
}
console.log(max)

