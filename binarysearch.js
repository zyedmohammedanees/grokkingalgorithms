const assert = require('assert');

bs = (arr, item) => {
    low = 0
    high = arr.length -1 

    while (low <= high){
        mid = Math.floor((low + high) / 2)
        let guess = arr[mid];

        if(guess == item){
            return mid
        }

        if(guess > item){
            high = mid -1 
        }

        else {
            low = mid + 1 
        }
    }
    return null;
}



assert.equal(bs([1,2,3,4,5],5), 4, 'wrong implementation for item at the end');
assert.equal(bs([1,2,3,4,5],1), 0, 'wrong implementation for item at the begining');
assert.equal(bs([1,2,3,4,5],3), 2, 'wrong implementation for item in hte middle');
assert.equal(bs([1,2,3,4,5],9), null, 'wrong implementation for item not in list');