import { describe, expect, test } from 'vitest';

import { add } from '../utils/common';

describe('add', () => {
  test('add 함수 테스트', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(1, 3)).toEqual(4);
    expect(add(2, 3)).toEqual(5);
  });
});
