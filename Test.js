// // 26.Remove Duplicates

// var nums = [1, 2, 2, 3, 3, 4, 5, 5]
// function removeDuplicates(nums) {

//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != nums[i + 1]) {
//       nums[j] = nums[i]
//       j++
//     }
//   };
//   return j;
// }

// console.log(removeDuplicates(nums))








// 35. Search Insert Position

var nums = [1, 3, 5, 6]
var target = 4
// var target = 2
// var target = 7



function searchInsert(nums, target) {

  // nums.push(target)
  // nums.sort((a, b) => a - b);
  // console.log(nums)
  // return nums.indexOf(target)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target ||  nums[i] > target) {
      return i
    }
    console.log(nums[i])
  }
  return nums.length
}

console.log(searchInsert(nums, target))