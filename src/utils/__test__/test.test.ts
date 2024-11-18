// 반환값이 원시 값일때 테스트

test("primitive success case", () => {
  expect(1).toBe(1);
});

test("primitive fail case", () => {
  expect(1).toBe(0);
});

// 반환값이 참조 값일때 테스트

test("reference success case", () => {
  expect({ height: 185, weight: 75 }).toEqual({ height: 185, weight: 75 });
});

test("reference fail case", () => {
  expect({ height: 196, weight: 105 }).toEqual({ height: 185, weight: 75 });
});
