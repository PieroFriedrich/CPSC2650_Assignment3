function rejectAfter2Seconds() {
console.log("starting slow promise");
return new Promise((_, reject) => {
    setTimeout(() => {
    reject("slow");
    }, 2000);
});
}

function rejectAfter1Second() {
console.log("starting fast promise");
return new Promise((_, reject) => {
    setTimeout(() => {
    reject("fast");
    }, 1000);
});
}

console.log("== starting ==");

const slowPromise = rejectAfter2Seconds().catch(e => e);
const fastPromise = rejectAfter1Second().catch(e => e);

Promise.all([slowPromise, fastPromise])
.then(([slow, fast]) => {
  console.log(`it broke! ${fast}`);
  console.log(`it broke! ${slow}`);
  console.log("== done ==");
})
.catch(error => console.error(error));