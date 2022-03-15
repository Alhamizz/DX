
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });

  if (longestWord[0].length === longestWord[1].length){
    var word0 = longestWord[0];
    var word1 = longestWord[1];

    const Count0 = word0.match(/[aeiou]/gi).length;
    const Count1 = word1.match(/[aeiou]/gi).length;

    if(Count1 > Count0){ 
      return word1;
      }
      return word0;
    }
    return longestWord[0]; 
}
console.log(findLongestWord("Smart people learn from everything and everyone average people from their experience stupid people already have all the answers"));
