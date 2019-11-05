function palindrome(message){
  return message.split('')
  .filter((_, index, arr)=>{return arr.length%2==0||(~~(arr.length/2))!=index})
  .reduce((output, value)=>{return output.slice(-1)==value?output.substring(0, output.length-1):output+value})
  .length<2
}
palindrome('hello');
palindrome('abcba');