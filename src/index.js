module.exports = function check(str, bracketsConfig) {
  let steck = [];
  open = ['(', '{', '[', '1', '3', '5'];
  close = [')', '}', ']', '2', '4', '6'];
  str.lenght % 2 !== 0 ? false : true

  for (let i = 0; i < str.length; i++){
   if (str[i] == '7'){
    if (steck[steck.length - 1] == '7'){
        steck.pop()
    } else {
        steck.push('7')
      }
  } else if (str[i] == '8'){
     if (steck[steck.length - 1] == '8'){
        steck.pop()
     } else {
        steck.push('8')
      }
  } 
    // Проверка на скобки и цифры in array open / close 
   else if (open.includes(str[i])){     
      steck.push(str[i])
    } else if (close.indexOf(str[i]) === open.indexOf(steck[steck.length - 1])){
      steck.pop()
     } else if (str[i] == '|'){
      if (steck[steck.length - 1] == '|'){
          steck.pop();
      } else {steck.push('|')};
    } else {
     return false
    }
  }
  return steck.length === 0
}
