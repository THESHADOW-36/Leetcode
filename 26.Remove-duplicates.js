
// 26.Remove Duplicates

var nums = [1, 2, 2, 3, 3, 4, 5, 5]
function removeDuplicates(nums) {

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i]
      j++
    }
  };
  return j;
}

console.log(removeDuplicates(nums))