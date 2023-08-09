module.exports = function check(str, bracketsConfig) {
    let subString = str.split('');
    check: 
    for (let i = 0; i <= subString.length; ) {

        if (subString.length === 0) {
          return true;
        }

        if (subString.length === 1) {
          return false;
        }

        if (subString.length > 1) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (subString[i] === bracketsConfig[j][0] && subString[i+1] === bracketsConfig[j][1]) {
                    subString.splice(i,2);
                    i = 0;
                    continue check;
                }
            }
        }
        i++
    }
    return false;
}