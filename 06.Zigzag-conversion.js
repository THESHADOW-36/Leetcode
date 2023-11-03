// 06.Zigzag-conversion

let s = "PAYPALISHIRING"
// let s = "P A Y P A L I S H I R I N G"
// index = "0 1 2 3 4 5 6 7 8 9 0 1 2 3";
let numRows = 4
// let output1 = "PAHNAPLSIIGYIR";
// let output2 = "PINALSIGYAHRPI";

// function zigzagConversion(s, numRows) {
//   if (numRows === 1) return s;
//   console.log('s-', s)

//   let n = s.length;
//   console.log('n-', n)

//   let charsInSection = numRows * 2 - 2;
//   console.log('charsInSection-', charsInSection)

//   let res = "";
//   console.log('res-', res)

//   for (let row = 0; row < numRows; row++) {
//     let i = row;
//     console.log("ForLoop:", 'Row i-', i)

//     while (i < n) {
//       console.log("i-", i, "n-", n)
//       res += s[i]
//       console.log("whileLoop:", 'res-', res, "s[i]-", s[i], i)

//       if (row != 0 && row != numRows - 1) {
//         console.log("row-", row, "numRows-1-", numRows - 1)
//         let charsInBet = charsInSection - 2 * row;
//         console.log("whileLoopIf:", 'charsInBet-', charsInBet)

//         let secondIndex = i + charsInBet;
//         console.log("whileLoopIf:", 'secondIndex-', secondIndex)

//         if (secondIndex < n) res += s[secondIndex]
//         console.log("res-", res)
//       }
//       i += charsInSection
//       console.log("whileLoop:", i, "+", charsInSection, "=", i + charsInSection)
//       console.log("----------------------------------------")
//     }
//     console.log("****************************************")
//   }
//   return res;
// }

// console.log(zigzagConversion(s, numRows))



let s1 = "PAYPALISHIRING"
let numRows1 = 4

function zigzagConversion1(s, numRows) {
  if (numRows === 1) return s;

  let n = s.length;
  let chartsInsect = numRows * 2 - 2;
  let res = "";

  for (row = 0; row < numRows; row++) {
    i = row;
    while (i < n) {
      res += s[i]
      if (row !== 0 && row !== numRows - 1) {
        let charsInBet = chartsInsect - 2 * row;
        let secondIndex = i + charsInBet;
        console.log(secondIndex ,'=', i, "+", charsInBet)
        if (secondIndex < n) res += s[secondIndex];
      }
      i += chartsInsect
    }
  }
  return res;
}
console.log(zigzagConversion1(s1, numRows1))