// An isogram is a word that has no repeating letters, consecutive or non - consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram.Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

or

function isIsogram (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size);
}