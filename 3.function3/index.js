function alphabetSort(message){
  return message
  .split('')
  .sort((a,b)=>a.charCodeAt()-b.charCodeAt())
}
alphabetSort('hello')