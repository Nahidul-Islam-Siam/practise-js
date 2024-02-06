// ### Task -2:
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// ---

let heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallName(friends) {
  let found = friends[0];
  for (let friend of friends) {
    // console.log(friend);
    // console.log(friend.length);

    if (found.length > friend.length) {
      found = friend;
    }
  }
  return found;
}
let small = smallName(heights2);
console.log(small);
