/////////////////////////Easy
//Question1: Write a function to check if a string is a palindrome.
function isPalindrome(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return str === reverseStr;
}
// console.log(isPalindrome("radar"));

//Question2: How do you count the number of vowels in a string?
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let numOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) numOfVowels++;
  }

  return numOfVowels;
}
// console.log(countVowels("hEllo"));

//Question3: Write a function to reverse a string.
function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}
// console.log(reverseString("masoud"));

// //Question4: How do you remove spaces from a given string?
//Answer4: 1. Using replace() with a Regular Expression
const str = "Hello World!";
const result = str.replace(/\s/g, "");
console.log(result);
// 2. Using split() and join()
const str1 = "Hello World!";
const result1 = str.split(" ").join("");
console.log(result1);
// 3. Using replaceAll() (ES2021+)
const str2 = "Hello World!";
const result2 = str.replaceAll(" ", "");
console.log(result2);
// 4. Using a Loop
function removeSpaces(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}
console.log(removeSpaces("Hello World!"));

//Question5: Write a function to capitalize the first letter of each word in a string.
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(" ");
}
// console.log(capitalizeFirstLetter("hello said masoud ashrafi"));

/////////////////////////Medium
//Question6: How can you find the first non-repeating character in a string?
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isNonRepeating = true;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isNonRepeating = false;
        break;
      }
    }

    if (isNonRepeating) {
      return str[i];
    }
  }
}
// console.log(firstNonRepeatingChar("aabbcde"));

//Question7: Write a function to check if two strings are anagrams.
function isAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  if (str1.length !== str2.length) return false;

  const charCount = {};

  // Count characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract character counts using str2
  for (let char of str2) {
    if (!charCount[char]) {
      return false; //Found an extra character in str2
    }
    charCount[char]--;
  }

  return true;
}
// console.log(isAnagrams("aabb", "abbb"));

//Question8: Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").
function compressString(str) {
  str = str.toLowerCase();
  let compressed = "";
  let i = 0;

  while (i < str.length) {
    let count = 1;

    // Count occurrences of the same character
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }

    // Append character and its count to result
    compressed += str[i] + count;
    i++; // Move to next character
  }

  return compressed.length < str.length ? compressed : str; // Return the shorter string
}
// console.log(compressString("aabcccccaaa"));

//Question9: How do you check if one string is a rotation of another string?
function isRotation(str, rotateStr) {
  if (str.length !== rotateStr.length) return false;
  let rotateArray = [str];

  for (let i = 1; i < str.length; i++) {
    rotateArray.push(str.slice(-i) + str.slice(0, str.length - i));
  }
  if (rotateArray.includes(rotateStr)) {
    return true;
  }

  return false;
}
// console.log(isRotation("hello", "elloh"));
//Version2: A rotated version of a string will always appear inside the double version of the original string.
function isRotation1(str, rotateStr) {
  if (str.length !== rotateStr.length) return false;

  return (str + str).includes(rotateStr);
}
// console.log(isRotation1("hello", "lohel"));

//Question10: Write a function to check if a string contains only unique characters.
function isUnique(str) {
  const seen = new Set();

  for (let char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }

  return true;
}
// console.log(isUnique("masoudm"));

/////////////////////////Hard
//Question11: Implement a function to find the longest palindrome substring in a string.
function longestPalindrome(str) {
  let longestPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let currentStr = str.substring(i, j);
      let reversedStr = currentStr.split("").reverse().join("");

      if (
        currentStr === reversedStr &&
        currentStr.length > longestPalindrome.length
      ) {
        longestPalindrome = currentStr;
      }
    }
  }

  return longestPalindrome;
}
// console.log(longestPalindrome("cbbd"));

//Question12: Write a function to find all permutations of a given string.
function getPermutations(str) {
  if (str.length === 1) return [str]; // Base case: a single character has one permutation

  let perms = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Fix one character
    let remaining = str.slice(0, i) + str.slice(i + 1); // Remove the fixed character
    let subPerms = getPermutations(remaining); // Recursively get permutations of the remaining string

    for (let perm of subPerms) {
      perms.push(char + perm); // Add the fixed character to each sub-permutation
    }
  }

  return perms;
}
console.log(getPermutations("abc"));

//Question13: Implement a function to count the number of occurrences of each character in a string.
function numOfOccurrrences(str) {
  const charCount = {};

  // Count characters in str1
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}
// console.log(numOfOccurrrences("masoudds"));

//Question14: How do you check if a string follows a given pattern (e.g., "abba" follows "dog cat cat dog")?
function followsPattern(pattern, str) {
  const words = str.split(" ");
  if (words.length !== pattern.length) return false;

  let charToWord = {};
  let WordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    // If the character is already mapped, ensure it maps to the same word
    if (charToWord[char] && charToWord[char] !== word) {
      return false;
    }

    // If the word is already mapped, ensure it maps to the same character
    if (WordToChar[word] && WordToChar[word] !== char) {
      return false;
    }

    charToWord[char] = word;
    WordToChar[word] = char;
  }

  return true;
}
// console.log(followsPattern("abba", "dog cat cat dog"));

//Question15: Implement a function to convert a given sentence into its abbreviation ("I am learning JavaScript" → "I a l J").
function abbreviation(str) {
  return str
    .split(" ")
    .map((word) => word[0])
    .join(" ");
}
// console.log(abbreviation("I am learning JavaScript"));
//Version2
function abbreviation1(str) {
  let result = str[0];
  const space = " ";
  let i = 0;
  let j = i + 1;

  while (i < str.length && j < str.length) {
    if (str[i] === " ") {
      result = result + space + str[j];
    }
    i++;
    j++;
  }

  return result;
}
// console.log(abbreviation1("I am learning JavaScript"));
