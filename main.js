let num = +prompt('Введите число')
let step = +prompt('Введите степень')
let answer = 1

for(let i = 0; i < step;i++){
    answer=answer*num
}
console.log(answer);
