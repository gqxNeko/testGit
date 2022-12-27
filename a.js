console.log('hello world')

let arr = [1, 2]

arr[0] = 4
console.log('--', arr)

arr = arr.map((item) => {
  if (!item.a) {
    const temp = item
    item = {}
    item.a = temp
  }
  return item
})

console.log('---', arr)


123


