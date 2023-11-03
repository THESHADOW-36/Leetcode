
// 349.Intersection-of-two-arrays

// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2];
let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4]
let nums3 = [];
// Output: [2]
function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && nums1[i] !== nums1[i + 1] && nums2[j] !== nums2[j + 1]) {
        nums3.push(nums1[i])
      }
    }
  }
  return nums3;
}
console.log(intersection(nums1, nums2))