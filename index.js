const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function reducer(array, reducerMethod, init) {
    let totalBatteries = init;
    array.forEach( element => {
        totalBatteries = reducerMethod(totalBatteries, element)
    })
    return totalBatteries
}

function batteryCount(acc, el) {
    return acc += el
}

const totalBatteries = reducer(batteryBatches, batteryCount, 0)
