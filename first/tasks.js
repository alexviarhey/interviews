name = "John"

const isPalindrome = (str) => {

    let s1 = 0;
    let s2 = str.length - 1;

    while(s1 < s2) {
        if(str[s1] !== str[s2]) {
            return false
        }
        s1 += 1
        s2 -= 1
    }

    return true
}

//isPalindrome(Anna) true
//isPalindrome(madam) true
//isPalindrome() false

// const containsDuplicate = (nums) => {
//
//     const watched = {};
//
//     for(let i = 0; i < nums.length; i++) {
//         if(watched[nums[i]]) return true
//         watched[nums[i]] = 1
//     }
//
//     return false
// }

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false


// const search = (nums, target) => {
//
//     let left = 0;
//     let right = nums.length - 1
//
//     while(left <= right) {
//
//         const mid = Math.floor((left + right) / 2);
//
//         if(target === nums[mid]) return mid;
//
//         if(target < nums[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//
//     return -1
//
// }

// Input: nums = [-1,0,3,5,9,12,14], target = 9
// Output: 4

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1