const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//function to convert the first letter of each word in the string into UpperCase


const titleCased = () => {

    //iterate through the array of strings
  return tutorials.map((string) => {

    //split each string into separate words and returns them as an array
    const words = string.split(' ')  //['what', 'does', ...]
    console.log(words)
    //iterate through new array of words, modifies the first letter, and returns the new array
    const capitalwords = words.map((word) => {
      // word[0].toUpperCase()  DOES NOT WORK. String are immutable objects. 
      //As a work around, we use charAt to return a new single character string
      //Slice the string at index 1 to return all the other letters aside from the first letter
      //Recombine into a new string ot be returned
      //['What', 'Does', ...]
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    
    //combines the array of capitalized words back into a string
    const ans = capitalwords.join(' ') //'What Does...'

    //puts the strings into a new array
    return ans
  })
}

titleCased()