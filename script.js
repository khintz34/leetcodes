var twoSum = function (nums, target) {
  for (let a = 0; a < nums.length; a++) {
    for (let i = a + 1; i <= nums.length - 1; i++) {
      if (nums[a] + nums[i] === target) {
        return [a, i];
      }
    }
  }
};

// twoSum([2, 4, 7, 8], 11);
// twoSum([1, 2, 3, 4], 6);

const palindrome = function (x) {
  let array = Array.from(String(x), Number);
  let reverse = Array.from(String(x), Number).reverse();
  let returnStatement = null;
  array.map((value, index) => {
    if (value !== reverse[index]) {
      returnStatement = false;
    }
  });
  if (returnStatement !== false) {
    return true;
  } else {
    return false;
  }
};

// palindrome(10);
// palindrome(-121);
// palindrome(121);

var romanToInt = function (s) {
  console.log(s[0]);
  let coder = [
    { symbol: "I", value: 1 },
    { symbol: "V", value: 5 },
    { symbol: "X", value: 10 },
    { symbol: "L", value: 50 },
    { symbol: "C", value: 100 },
    { symbol: "D", value: 500 },
    { symbol: "M", value: 1000 },
  ];

  let array = Array.from(String(s), String);
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (array[i] === "I" && array[i + 1] === "V") {
      total += 4;
      i++;
    } else if (array[i] === "I" && array[i + 1] === "X") {
      total += 9;
      i++;
    } else if (array[i] === "X" && array[i + 1] === "L") {
      total += 40;
      i++;
    } else if (array[i] === "X" && array[i + 1] === "C") {
      total += 90;
      i++;
    } else if (array[i] === "C" && array[i + 1] === "D") {
      total += 400;
      i++;
    } else if (array[i] === "C" && array[i + 1] === "M") {
      total += 900;
      i++;
    } else {
      coder.map((val) => {
        if (val.symbol === array[i]) {
          total += val.value;
        }
      });
    }
  }
  return total;
};

// romanToInt("CDXXIV");
// romanToInt("VVIIIX");

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let start = Array.from(String(strs[0]), String);
  let stop = false;

  //this works
  //   start.map((val, index) => {
  //     if (val === strs[1][index] && val === strs[2][index]) {
  //       prefix += val;
  //     }
  //   });

  //this works better
  start.map((val, index) => {
    let found = null;
    for (let i = 0; i < strs.length; i++) {
      if (val !== strs[i][index]) {
        found = false;
        stop = true;
        return;
      } else {
        found = true;
      }
    }
    if (found && !stop) {
      prefix += val;
    }
  });

  console.log("predex: ", prefix);
  return prefix;
};

// longestCommonPrefix(["flower", "flow", "floght", "flo"]);
// longestCommonPrefix(["cir", "car"]);

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

// isValid("{[]}");

var mergeTwoLists = function (list1, list2) {
  const sort1 = list1.sort();
  const sort2 = list2.sort();
  const totalLength = sort1.length + sort2.length;
  console.log(totalLength);
  const sortTotal = [];

  let a = 0;
  console.log(sort1, sort2);
  while (a < totalLength) {
    if (sort1.length === 0) {
      sortTotal.push(sort2[0]);
      a++;
    } else if (sort2.length === 0) {
      sortTotal.push(sort1[0]);
      a++;
    } else {
      console.log(sort1, sort2);
      if (sort1[0] <= sort2[0]) {
        sortTotal.push(sort1[0]);
        sort1.shift();
      } else {
        sortTotal.push(sort2[0]);
        sort2.shift();
      }
      a++;
    }
  }

  console.log(sortTotal);
  return sortTotal;
};

// mergeTwoLists([1, 2, 4], [1, 4, 3]);
// mergeTwoLists([1, 5, 4, 2], [1, 4, 3]);
// mergeTwoLists([], []);

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }

  return ++i;
};

// removeDuplicates([-3, -1, 0, 0, 0, 3, 3]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

var strStr = function (haystack, needle) {
  let j = 0;
  let output = -1;
  let start = 0;
  for (let i = 0; i < haystack.length; i++) {
    console.log("loop: ");
    console.log(haystack[i], needle[j]);
    console.log("j", j);
    if (haystack[i] === needle[j]) {
      // console.log(haystack[i], needle[j]);
      j++;
    } else {
      j = 0;
      i = start;
      start++;
      console.log("i", i);
    }
    // console.log(j, needle.length);
    if (j === needle.length) {
      console.log(i);
      output = i + 1 - j;
      console.log(i - j, output);
      return output;
    }
  }

  return output;
};

// strStr("sadbutsad", "sad");
// strStr("leetcode", "leeto");
// strStr("mississippi", "issi");

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], target);
    if (nums[i] > target) {
      return 0;
    }
    if (nums[i] === target) {
      console.log(i);
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      console.log(i + 1);
      return i + 1;
    }
    if (i === nums.length - 1) {
      console.log(nums.length);
      return nums.length;
    }
  }
};

// searchInsert([1, 3, 5, 6], 5);
// searchInsert([1, 3, 5, 6], 2);

var lengthOfLastWord = function (s) {
  let sLength = s.split(" ").reverse();

  for (let i = 0; i < sLength.length; i++) {
    if (sLength[i]) {
      return sLength[i].length;
    }
  }
};

// lengthOfLastWord("Hello World");
// lengthOfLastWord("   fly me   to   the moon  ");
// lengthOfLastWord("luffy is still joyboy");

var plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};

// plusOne([4, 2, 1]);
// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 7, 9, 4, 3]);

var mySqrt = function (x) {
  if (x === 1) return 1;
  let div = x / 2;
  let holder = 0;
  if (x < 0) {
    div = (x * -1) / 2;
  }
  console.log(div);

  for (let i = 1; i <= div; i++) {
    let num = i * i;
    console.log(num);
    if (num <= x) {
      if (num === x) {
        console.log("exact", num);
        return i;
      }
      if (x - num < x - holder) {
        holder = i;
        console.log("holder", holder);
      }
    } else {
      break;
    }
  }
  console.log("final holder", holder);
  return holder;
};

// mySqrt(26);

var merge = function (nums1, m, nums2, n) {
  let j = 0;

  nums1.splice(m);

  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1.splice(i, 0, nums2[i]);
    }
    nums1.length = n;
    console.log(nums1);
    return nums1;
  }

  for (let i = 0; i < m + n; i++) {
    console.log(nums1[i], nums2[j]);
    if (nums2[j] === undefined) {
      j++;
    } else if (nums1[i] > nums2[j] || nums1[i] === undefined) {
      console.log("push", nums2[j]);
      nums1.splice(i, 0, nums2[j]);
      j++;
    } else if (i > m && nums1[i] >= nums2[j]) {
      console.log(i, m);
      console.log("push here", nums2[j]);
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
  }
  nums1.length = m + n;

  console.log(nums1);
  return nums1;
};

//! better!!
// var merge = function (nums1, m, nums2, n) {
// var insertPos = m + n - 1;
// m--; n--;
// while (n >= 0) {
//     nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
// }
// }

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1, 0], 1, [2], 1);
// merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);

// var maxProfit = function (prices) {
//   let min;
//   let max = 0;
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (i === 0) {
//       min = prices[0];
//     } else if (prices[i] < min) {
//       min = prices[i];
//       max = 0;
//     } else if (prices[i] > max) {
//       max = prices[i];
//     }
//   }
//   profit = max - min;
//   if (profit < 0) profit = 0;
//   console.log("min", min);
//   console.log("max", max);
//   console.log("profit:", profit);
//   return profit;
// };

// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       // console.log(prices[i], prices[j]);
//       if (prices[j] - prices[i] > profit) {
//         profit = prices[j] - prices[i];
//         console.log("setting profit: ", prices[j], prices[i]);
//       }
//     }
//   }

//   // console.log("min", min);
//   // console.log("max", max);
//   // console.log("profit:", profit);
//   return profit;
// };

//! better
var maxProfit = function (prices) {
  if (prices == null || prices.length <= 1) return 0;
  let minBuy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i]);
    profit = Math.max(profit, prices[i] - minBuy);
  }
  console.log(profit);
  return profit;
};

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([933, 87, 162, 749, 357, 250, 469, 484, 182, 9]);

var isPalindrome = function (s) {
  let newString = s.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
  let reverseString = newString.split("").reverse().join("").toLowerCase();

  return newString == reverseString;
};

// isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome(" ");

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    let found = 0;
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[j], nums[i]);
      if (nums[j] === nums[i]) {
        found++;
      }
    }
    console.log(found, "found");
    if (found === 1) {
      console.log(nums[i], "DONE");
      return nums[i];
    }
  }
};

// singleNumber([4, 1, 2, 1, 2]);

var removeElement = function (nums, val) {
  let k = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      k--;
    }
  }
  nums.sort();
  console.log(nums);
  console.log(k);
  return k;
};

// removeElement([3, 2, 2, 3], 3);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

var majorityElement = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        total++;
        if (total > nums.length / 2) {
          console.log(total);
          console.log(nums[i]);
          return nums[i];
        }
      }
    }
  }
};

// majorityElement([2, 3, 2]);

var isAnagram = function (s, t) {
  let sArr = Array.from(String(s), String).sort();
  let tArr = Array.from(String(t), String).sort();

  let output = true;

  if (sArr.length !== tArr.length) {
    output = false;
  } else {
    sArr.map((val, index) => {
      if (val !== tArr[index]) {
        output = false;
      }
    });
  }

  return output;

  // another answer
  // return s.split('').sort().join() === t.split('').sort().join()
};

isAnagram("cat", "rat");

var summaryRanges = function (nums) {
  let output = [];
  let start = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], nums[i + 1]);
    if (i === nums.length - 1) {
      start.push(nums[i]);
      console.log("last", start);
      if (start.length > 1) {
        output.push(`${start[0]}->${start.slice(-1)[0]}`);
      } else {
        output.push(`${start[0]}`);
      }
    } else if (nums[i] + 1 === nums[i + 1]) {
      console.log("pushing: ", nums[i]);
      start.push(nums[i]);
    } else {
      // console.log("start LEngth: ", start.length);
      if (start.length > 0) {
        console.log(start);
        start.push(nums[i]);
        output.push(`${start[0]}->${start.slice(-1)[0]}`);
      } else {
        start.push(nums[i]);
        output.push(`${start[0]}`);
      }
      start = [];
    }
  }
  console.log(output);
  return output;
};

// summaryRanges([0, 1, 2, 4, 5, 7]);
// summaryRanges([0, 2, 3, 4, 6, 8, 9]);

var isHappy = function (n) {
  let total = 0;
  let returnStatement = false;

  const tryAgain = (arr) => {
    total = 0;
    arr.map((val) => {
      total += val ** 2;
    });
    if (total === 1) {
      console.log("true");
      returnStatement = true;
    } else if (total === 4) {
      returnStatement = false;
    } else {
      console.log(Array.from(String(total), Number));
      tryAgain(Array.from(String(total), Number));
    }
  };
  tryAgain(Array.from(String(n), Number));
  console.log(returnStatement);
  return returnStatement;
};

// isHappy(2);

const stairClimber = (n) => {
  let arr = [n + 1];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    console.log(arr);
  }
  return arr[n];
};

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// answer: we know the solutions for 0, 1, and 2 and if we combine that knowledge with the algorithim:
// f(n) = f(n-1) + f(n - 2) then we are able to loop until we get to n and then take the last two answers and add them together.
// The easiest way to solve this is by already knowing the algo.

// console.log(stairClimber(5));

const letterMap = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "Q",
  24: "X",
  25: "Y",
  26: "Z",
};

const convertToTitle = (n) => {
  if (n <= 26) {
    return letterMap[n];
  }

  let letterArr = [];
  let num = n;

  while (num > 26) {
    let first = Math.floor(num / 26);
    console.log(first);
    letterArr.push(letterMap[first]);
    num = Math.floor(num % 26);
    console.log(num);
  }
  letterArr.push(letterMap[num]);

  return letterArr.join("");
};

// console.log(convertToTitle(50));
// ! todo didnt finish this

var mergeAlternately = function (word1, word2) {
  let i = 0;
  let res = "";
  while (i < Math.max(word1.length, word2.length)) {
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];

    i++;
  }

  return res;
};

// this one is pretty easy, but the idea is that while your counter, i, is less than the larger word, take that i letter from each work and add it to the string
// if one word is larger than the other then this still works because the if statements only work if there is a difit in word[i] position
// return the new res word

// mergeAlternately("tt", "okay");

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) return "";
  let m = str1.length;
  let n = str2.length;

  let gcd = function (x, y) {
    console.log("x: ", x);
    console.log("y: ", y);
    if (!y) return x;
    console.log("x % y", x % y);
    console.log("------");
    return gcd(y, x % y);
  };

  let div = gcd(m, n);
  console.log("final: ", str1.slice(0, div));
  return str1.slice(0, div);
};

// 1) the two strings added together have to be equal both ways i.e str1 + str2 === str2 + str1
// 2) now we need to think about it as numbers, not letters knowing that we are just looking for the smallest divisor of the two lengths since they are valid strings
// 3) call a recursive function using the two lengths, assuming str1 length > str2 length
// 4) The y value (smaller) then becomes the x value (larger) in each instance
// 5) continue calling itself until y === 0, then return x
// 6) This x value represents the amount of digits that is the smallest divisor between the two strings so we take either string and slice it from the first digit for x digits and return that value

// gcdOfStrings("ababab", "abab");

var kidsWithCandies = function (candies, extraCandies) {
  let returnArray = [];
  let max = Math.max(...candies);

  candies.map((val) => {
    if (val + extraCandies >= max) {
      returnArray.push(true);
    } else {
      returnArray.push(false);
    }
  });

  return returnArray;
};

// pretty easy one. create an empty array to be returned later.
// find the max value of the integer array.
// map through the array and add each value to extraCandy value. if >= then push true, else push false

// kidsWithCandies([2, 3, 5, 1, 3], 3);

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0) {
      console.log(true);
      return true;
    } else {
      if (flowerbed[0] === 1 && n == 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  flowerbed.map((val, index) => {
    if (index === 0) {
      if (flowerbed[1] === 0 && val === 0) {
        flowerbed[index] = 1;
        count++;
      }
    } else if (index === flowerbed.length - 1) {
      if (flowerbed[index - 1] === 0 && val === 0) {
        flowerbed[index] = 1;
        count++;
      }
    } else {
      if (
        flowerbed[index - 1] === 0 &&
        flowerbed[index + 1] === 0 &&
        val === 0
      ) {
        flowerbed[index] = 1;
        count++;
      }
    }
  });
  console.log(count, n);

  return count >= n;
};

// canPlaceFlowers([0], 0);

// this isnt the most concise solution. but its fairly easy.
// first check for edge cases
// then get into main map where you will look to see if the flowerbed[index] === 0 and if the index +1 and -1 are 0 too. If so then add 1 to count and change index to 0.
// return count >= n

var reverseVowels = function (s) {
  let vowelMap = ["a", "e", "i", "o", "u"];
  s = s.split("");
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !vowelMap.includes(s[start].toLowerCase())) {
      start++;
    }

    while (start < end && !vowelMap.includes(s[end].toLowerCase())) {
      end--;
    }

    console.log(s[start]);
    console.log(s[end]);

    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;
  }

  console.log(s.join(""));

  return s.join("");
};

reverseVowels("lUtcode");

// two pointer method answer.
// 1) create a vowel map to look for all vowels in
// 2) split string into array
// 3) create starting and ending pointers
// 4) while start is less than end loop
// 5) while start is less than end AND s[start] is not a vowel, keep incrementing start unitl you find a vowel or hit end
// 6) while start is less than end AND s[end] is not a vowel, keep decrementing end until you find a vowel or hit start
// 7) swap the s[start] and s[end] vowels and then increment/decrement the pointers
// 8) join array back to string and return

var reverseWords = function (s) {};
