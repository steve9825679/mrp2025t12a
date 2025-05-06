function fakultaet(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fakultaet(n - 1);
    }
}

const zahl = 5;
console.log(`Die Fakultät von ${zahl} ist ${fakultaet(zahl)}`);
