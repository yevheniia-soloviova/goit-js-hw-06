// Write code under this line
const getSortedUniqueSkills = (array) =>
  [...array]
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
