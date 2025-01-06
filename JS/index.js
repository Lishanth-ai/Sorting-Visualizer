// Initialize necessary elements
const generateBtn = document.getElementById("generateBtn");
const solveBtn = document.getElementById("solveBtn");
const stage = document.getElementById("stage");
const numbersBars = document.getElementById("numbersBars");
const selectAlgorithm = document.getElementById("selectAlgorithm");

let array = [];

// Function to generate a new array
function generateArray() {
    array = [];
    let numBars = numbersBars.value;
    for (let i = 0; i < numBars; i++) {
        array.push(Math.floor(Math.random() * 600) + 20); // Random height between 10 and 300
    }
    renderArray();
}

// Function to render the array bars on the screen
function renderArray() {
    stage.innerHTML = ""; // Clear previous bars
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${array[i]}px`;
        bar.style.left = `${i * 25}px`; // Space between bars
        stage.appendChild(bar);
    }
}

// Swap two bars in the array
function swapBars(i, j) {
    const bars = document.querySelectorAll(".bar");
    const tempHeight = array[i];
    array[i] = array[j];
    array[j] = tempHeight;

    // Visually swap the bars
    const bar1 = bars[i];
    const bar2 = bars[j];
    bar1.style.height = `${array[i]}px`;
    bar2.style.height = `${array[j]}px`;
    bar1.style.backgroundColor = "greenyellow"; // Highlight during swap
    bar2.style.backgroundColor = "greenyellow"; // Highlight during swap

    // Reset color after short delay
    setTimeout(() => {
        bar1.style.backgroundColor = "#fff";
        bar2.style.backgroundColor = "#fff";
    }, 100);
}

// Sorting Algorithms
async function bubbleSort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapBars(j, j + 1);
                await sleep(100); // Slow down for visualization
            }
        }
    }
}

async function selectionSort() {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swapBars(i, minIndex);
            await sleep(100); // Slow down for visualization
        }
    }
}

async function quickSort(low = 0, high = array.length - 1) {
    if (low < high) {
        let pivotIndex = await partition(low, high);
        await quickSort(low, pivotIndex - 1);
        await quickSort(pivotIndex + 1, high);
    }
}

async function partition(low, high) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swapBars(i, j);
            await sleep(100); // Slow down for visualization
        }
    }
    swapBars(i + 1, high);
    return i + 1;
}

// Sleep function to create delays for visualization
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listeners
generateBtn.addEventListener("click", generateArray);
solveBtn.addEventListener("click", async () => {
    const algorithm = selectAlgorithm.value;
    switch (algorithm) {
        case "bubbleSort":
            await bubbleSort();
            break;
        case "selectionSort":
            await selectionSort();
            break;
        case "quickSort":
            await quickSort();
            break;
        default:
            alert("Please select a valid algorithm.");
    }
});

// Initial setup
generateArray();







