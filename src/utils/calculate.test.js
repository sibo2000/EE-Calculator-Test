import calculate from './calculate';

test('the array [1] + [1] to return Number 2', () => {
    expect(calculate([1], '+', [1])).toBe(2)
})

test('the array [1,0] + [1,0] to return Number 20', () => {
    expect(calculate([1,0], '+', [1,0])).toBe(20)
})