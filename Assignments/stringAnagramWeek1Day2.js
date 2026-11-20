//============================================================================================================
/* Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 

Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 

Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 

Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */
//=================================================================================================================

//=================================================================================================================
//Given a string s consisting of words and spaces, return the length of the last word in the string.
console.log("=====================================================================================================")
console.log("1. Given a string 's' consisting of words and spaces, return the length of the last word in the string.")
console.log("======================================================================================================")
let s="An anagram is when you mix up the letters of a word to make a new one, using all the letters."
    console.log("Given Sentence:",s)
    
    s= s.split(" ")
    console.log("After Split",s)
let lastword_of_s = s[s.length-1];
    console.log("Last word of the given String:",lastword_of_s)
    console.log("Length of the given word:", lastword_of_s.length)
//=================================================================================================================
//=================================================================================================================
//To check if two strings are anagrams without a function. 
/* console.log("==========================================================")
console.log("2(a). To check if two strings are ANAGRAM WITHOUT using FUNCTION")
console.log("==========================================================")
let str1 = "DUSTY"
console.log("Given str1:",str1)
let str2 = "study"
console.log("Given str2:",str2)
let word1 = str1.toLowerCase().split("").sort().join("")
let word2 = str2.toLowerCase().split("").sort().join("")
if (word1 === word2)
{
    console.log("the strings are ANAGRAM")
}
else{
    console.log("the stings are NOT ANAGRAM")
}
console.log("After converting to Lowercase and sorting:",word1)
console.log("After converting to Lowercase and sorting:",word2) */
//=================================================================================================================
//Write a function to check if two strings are anagrams..
console.log("==========================================================") 
console.log("2(b). To check if two strings are ANAGRAM  using FUNCTION")
console.log("==========================================================")

function toChkAnagram(str1,str2){
    console.log("Given String1:",str1)
    let word1 = str1.toLowerCase().split("").sort().join("")
    console.log("String1 after lowercase conversion and sorting:",word1,"\n")

    console.log("Given String2:",str2)
    let word2 = str2.toLowerCase().split('').sort().join("")
     console.log("String2 after lowercase conversion and sorting:",word2,"\n")
     if(word1 === word2){
        //console.log("Above given words are ANAGRAM")         or
        console.log(`"${str1}" and "${str2}" are ANAGRAM`)
     }
     else{
       // console.log("Above given words are NOT ANAGRAM")     or
        console.log(`"${str1}" and "${str2}" are NOT ANAGRAM`)
     }
}
toChkAnagram("EARTH","heart")
//toChkAnagram("java", "javascript")
//toChkAnagram("night", "thing");