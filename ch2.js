"use strict";
var nameTwo = "Max";
var ageTwo = 27;
var anything;
anything = 12;
// noUnusedParameters -> in tsconfig.json
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
