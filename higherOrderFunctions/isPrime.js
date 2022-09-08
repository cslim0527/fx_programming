console.clear();
/**
 * @title 고차함수
 * @desc 고차함수는 다른 함수를 매개변수로 받는 함수이다.
 */

/**
 * Filter
 * filter 메서드를 사용해서 prime 타입의 자료만 필터하기
 */
const cart = [
  { name: "Biscuits", type: "regular", category: "food", price: 2.0 },
  { name: "Monitor", type: "prime", category: "tech", price: 119.99 },
  { name: "Mouse", type: "prime", category: "tech", price: 25.5 },
  { name: "dress", type: "regular", category: "clothes", price: 49.9 },
];

function isPrime(item) {
  return item.type === "prime";
}

function primeItems(cart) {
  return cart.filter(isPrime);
}

console.log(primeItems(cart));

/**
 * Reject
 * underscore reject 함수를 커스텀하여 prime 타입이 아닌 자료만 필터하기
 */

const _ = {
  reject,
  applyCoupon,
  totalCost,
};

function reject(arr, callback) {
  const correctArr = arr.filter(callback);
  return arr.filter((item) => !correctArr.includes(item));
}

console.log(_.reject(cart, isPrime));

/**
 * Map
 * map 함수를 사용하여 "tech" 카테고리 가격정보를 20프로 할인가로 조정하기
 */

function applyCoupon(cart) {
  return cart.map((item) => {
    if (item.category === "tech") item.price = item.price * 0.8;
    return item;
  });
}

console.log("applyCoupon => ", _.applyCoupon(cart));

/**
 * Reduce
 * reduce 함수를 사용하여 주문 총액을 계산하는 함수 만들기
 */

function totalCost(cart) {
  return cart.reduce((acc, item) => (acc += item.price), 0);
}

console.log("totalCost => ", _.totalCost(cart));
