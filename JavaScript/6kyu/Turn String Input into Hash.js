// Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

// "a=1, b=2, c=3, d=4"
// This string should return a hash that looks like

// { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

function strToHash(str){
  // ...
  return str === '' ? {} : str.split(', ').map(value => value.split('=')).reduce((a,b) => (a[b[0]] = b[1]*1, a), {})
}

или

function strToHash(str){
  let result = {}
  
  if (str.length) {
    let items = str.split(", ")
    items.forEach(item => {
      const [key, val] = item.split("=")
      result[key] = +val
    })  
  }

  return result
}