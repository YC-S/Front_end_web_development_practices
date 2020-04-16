var officers = [
  { id: 20, name: 'captain Piett' },
  { id: 24, name: 'general veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' },
];

let map = new Map(Object.entries(officers));
console.log(map.keys());

let rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 },
];

// const total = rockets.reduce((total, amount) => {
//   amount.launches.forEach((launches) => {
//     total += launches;
//   });
//   return total;
// }, []);
// console.log(total);
