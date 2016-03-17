/**
 * Created by home on 23.02.2016.
 */
var slaying = function () {
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;
    if (youHit) {
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You did it! You slew the dragon! Total damage is "+ totalDamage);
        } else {
            slaying();
        }
    } else {
        console.log("The dragon burninates you! You're toast.");
    }
};
slaying();
