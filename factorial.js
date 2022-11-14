/**
 * 1. Base Case
 * 2. Difference Input
 */

function factorial(num) {
  if (num === 1) return 1;
  console.log(`${num} * ${num - 1}`);
  return num * factorial(num - 1);
}

console.log(factorial(4));

/**
 * factorial(4)
 *      return 4 * factorial(3)
 *                      return 3 * factorial(2)
 *                                      return 2 * factorial(1)
 *                                                        return 1
 *                                             2 * 1
 *                             3 * 2
 *            4 * 6
 *  24
 */
