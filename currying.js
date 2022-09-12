/**
 * @title 커링 (currying)
 * @desc 커링(Currying)은 여러 인수를 갖는 함수의 평가를 각각 하나의 인수를 갖는 함수의 시퀀스를 평가하는 것으로 변환하는 기술이다.
 */

// standard way
function add(x, y, z) {
  return x + y + z;
}
console.log("standard: ", add(1, 2, 3));

// curried style
// 람다 함수에 인수가 하나만 있는 경우 괄호를 생략할 수 있습니다
const add2 = (x) => (y) => (z) => x + y + z;

console.log("curried: ", add2(1)(2)(3));

/**
 * applyCoupon 함수를 커리어블 함수로 리팩토링 해보기
 */

// E.g.
const item = {
  name: "Biscuits",
  type: "regular",
  category: "food",
  price: 2.0,
};

const applyCoupon = (category) => (discount) => (product) => {
  const price = product.price;
  if (product.category === category) {
    return {
      ...product,
      price: price - price * discount,
    };
  }
};

console.log(applyCoupon("food")(0.1)(item).price === 1.8);
console.log("[applyCoupon]", applyCoupon("food")(0.1)(item));
