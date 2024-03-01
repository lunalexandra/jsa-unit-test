import showHealth from '../game';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 20 }, 'wounded'],
  [{ name: 'лучник', health: 80 }, 'healthy'],
])('testing showHealth function %s with %i health percentages', (player, expected) => {
  const result = showHealth(player);
  expect(result).toBe(expected);
});
