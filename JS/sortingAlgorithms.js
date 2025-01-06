class sortingAlgorithms {
    bubbleSort(array) {
        const swap = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swap.push({ firstPosition: j, lastPosition: j + 1 });
                }
            }
        }
        return swap;
    }

    selectionSort(array) {
        const swaps = [];
        let min;
        for (let i = 0; i < array.length - 1; i++) {
            min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }

            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
            swaps.push({ firstPosition: min, lastPosition: i });
        }
        return swaps;
    }
}

export {
    sortingAlgorithms
};
