const findSmallest = (arr) => {
    let smallest_index = 0;
    let smallest = arr[smallest_index]
    let index = 1;
    while(index < arr.length){
        

        if(arr[index] < smallest){
            smallest = arr[index]
            smallest_index = index
        }
        index += 1;
    }

    return smallest_index;
}

const selectionSort = (arr) => {
    let newArray = []

    while(arr.length > 0){
        let smallest_index = findSmallest(arr)
        newArray.push(arr.splice(smallest_index,1)[0])
    }
    return newArray;
}

console.log(selectionSort([1,0,8,4,109,99]))