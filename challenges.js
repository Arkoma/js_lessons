const helloWorld = () => {
  return "Hello World"
}

function cube(n) {
  return n*n*n;
}

const isPrime = (n) => {
  let count = 0;
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      if (n%i === 0) count++;
    }
    return count === 1;
  } else { return false; }
}

const howManyPrimes = (low, high) => {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

exports._tests = {helloWorld, cube, howManyPrimes, isPrime}