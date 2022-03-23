const users = ["Jone", "Mary", "Pete"];

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length
                ? {
                    value: names[nextIndex++],
                    done: false
                }
                : {
                    done: true,
                };
        }
    }
}

const names = nameIterator(users);
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next())
console.log(names.next())
console.log(names.next())