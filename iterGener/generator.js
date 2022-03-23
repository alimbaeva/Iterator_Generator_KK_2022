function* genareteID() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

const ids = genareteID();

console.log(ids.next().value)
console.log(ids.next().value)
let a = 7;
let d = 3;
console.log(ids.next().value)
console.log(a + d);

console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)