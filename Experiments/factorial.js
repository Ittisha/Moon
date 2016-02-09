/*var factorial = function (n) {
*    if (n != 0){
*       return n*factorial(n-1)
*    }
*    else {
*        return 1
*    }
*};
*alert(factorial(4));*/
var factorial2 = function (n) {
    var x = 1;
    for (i=1; i<=n; i++){
        x = x * i;
    }
    alert (x);
};
factorial2(5);
