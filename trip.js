function trip() {

    var A = [];
    var B = [];

    var alice = 0;
    var bob = 0;

    var a = prompt('enter Alices score');
    var b = prompt('enter bobs score');

    c = A.push(a);
    d = B.push(b);
    
    for (var i = 0; i < A.length; i++){
        if (A[i] > B[i]){
            alice += 1;
        } else if (A[i] < B[i]){
            bob += 1;
        } else {
            console.log("equal points")
        }
    }
    
    console.log(alice + ' ' + bob);
}

function pangram(input) {
  var inputLetters = input.replace(/\s/g, '').toLowerCase().split('');
  var Alphabets = inputLetters.filter(function (x, pos) { return inputLetters.indexOf(x) === pos; }).length;
        if (Alphabets === 26){
            console.log('is pangram')

        } else {
            console.log('is not pangram')
        }
}

pangram('We promptly judged antique ivory buckles for the next prize')


