// This is a file for testing out data flow through functions 2/15/2022

function createWoodBlock() {
    const woodObject = {
        type: "woodblock",
        length: 10,
        material:"pine",
        purpose:"flute"
    }
    return woodObject;
}

function createBeautifulCarving(woodObject) {
    return `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
}

const woodBlock = createWoodBlock();
const carvingString = createBeautifulCarving(woodBlock);
console.log(carvingString);