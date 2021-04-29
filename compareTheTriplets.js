// Did this on HackerRank
// Got it right
function compareTriplets(a, b) {
    // Write your code here
    var resultArray = [0,0];
    for(var i=0; i<a.length; i++){
        if(a[i] > b[i]){
            resultArray[0]++;
        }
        if(b[i] > a[i]){
            resultArray[1]++;
        }
    }
    return resultArray;
}
a[5, 6, 7];
b[3, 6, 10];