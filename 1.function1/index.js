function reverseString(message){
  return message.split('').reduce((accumulator, currentValue) => {return currentValue + accumulator}, '')
}
reverseString('hello')