let pattern = "";

const print = (a, n) => {
    if (a > (2 * n - 1)) {
        return;
    }
    pattern = pattern + (n - Math.abs(n - a)).toString() + " ";
    print(++a, n);
}
print(1, 5);

console.log(pattern);