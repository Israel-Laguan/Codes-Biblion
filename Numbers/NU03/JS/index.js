const fibonacciToNth = (n) => {
  if (!n || n < 0) return 0;
  if (n < 2) {
    return [0, 1];
  } else {
    let s = fibonacciToNth(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacciToNth(8));
