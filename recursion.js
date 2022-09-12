/**
 * Recursion: 재귀함수
 * 재귀 함수는 기본 케이스 에 도달할 때까지 자신을 호출 하는 함수입니다 .
 * 이것은 훨씬 더 유연 하기 때문에 재귀 언어에서 for 루프를 대체하는 데 자주 사용됩니다 .
 * 여기서 핵심은 함수가 스스로를 호출할 때마다 문제가 감소된다는 것입니다.
 */

// 리스트 정보를 트리구조로 결과값을 도출하는 재귀함수를 만들어라.
const list = [
  { id: "Grandad", parent: null },
  { id: "Dad", parent: "Grandad" },
  { id: "You", parent: "Dad" },
  { id: "Son", parent: "You" },
  { id: "Daughter", parent: "You" },
  { id: "Brother", parent: "Dad" },
  { id: "Nephew", parent: "Brother" },
  { id: "Niece", parent: "Brother" },
  { id: "Sister", parent: "Dad" },
  { id: "Uncle", parent: "Grandad" },
  { id: "Cousin", parent: "Uncle" },
];

/**
 * E.g.
 *
 * "Grandad": {
 *   "Dad": {
 *     "You": {
 *       "Son": {},
 *       "Daughter": {}
 *     },
 *     "Brother": {
 *       "Nephew": {},
 *       "Niece": {}
 *     },
 *     "Sister": {}
 *   },
 *   "Uncle": {
 *     "Cousin": {}
 *   }
 * }
 * }
 */

const buildTree = (list, parent) => {
  return list
    .filter((p) => p.parent === parent)
    .reduce((children, child) => {
      children[child.id] = buildTree(list, child.id);
      return children;
    }, {});
};

console.log(buildTree(list, null));
