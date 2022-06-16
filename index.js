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







//***try out first on sentence */

// const capitalizeStr =(str)=> str[0].toUpperCase()+ str.slice(1).toLowerCase()


// const CapitalizeWords=(str)=>str.split(" ").map(capitalizeStr).join(" ")


//     function titleCase (tutorials){
//       const CapitalizeWords=(str)=>str.split(" ").map(capitalizeStr).join(" ")
//     }

//     console.log(titleCase("I will be back"))


/// last trial//
function titleCased(){
  const ArrayOfElements= tutorials.map(function (element){
   const splitElements= element.split(" ");
   const upperCase= splitElements.map(function (elements){
    const capitalizeElement=elements [0].toUpperCase()+elements.slice(1);
    return capitalizeElement;
   })
   const joinElementStrings= upperCase.join(" ");
   return joinElementStrings;
  })
    console.log(ArrayOfElements);
    return ArrayOfElements;
   }



