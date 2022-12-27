let arr = [1, 2]

arr[0] = 4

arr = arr.map((item) => {
  if (!item.a) {
    const temp = item
    item = {}
    item.a = temp
  }
  return item
})


console.log('新增内容')