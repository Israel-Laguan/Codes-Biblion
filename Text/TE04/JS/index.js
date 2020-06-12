const vowels = ['A', 'E', 'I', 'O', 'U']

const count = word => word
    .split('')
    .filter(letter=>vowels.includes(letter.toUpperCase()))
    .reduce(acc=>{
        acc += 1
        return acc
    },0)

console.log(count('helloo'))