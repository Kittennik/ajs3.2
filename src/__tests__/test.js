import sortOfArray from '../js/app';

test('Сортировка по здоровью', () => {
  const array = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = sortOfArray(array);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});
