const findTheOldest = function (person) {
  // console.log(person);
  // olhar ~/NerdShit/OdinProject/js/testing.js
  const ages = [];
  for (let i = 0; i < person.length; i++) {
    /* console.log(
      `${person[i].name} birth: ${person[i].yearOfBirth}, death: ${person[i].yearOfDeath}`
    ); */

    if (person[i].yearOfDeath == undefined) {
      continue;
    }

    ages.push(person[i].yearOfDeath - person[i].yearOfBirth);
    ages.push(person[i]);
  }
  console.log(ages);

  let biggestAge = ages[0];
  console.log(biggestAge);

  for (let j = 0; j < ages.length; j++) {
    if (ages[j] > biggestAge) {
      biggestAge = ages[j];
    }
    continue;
  }

  console.log(biggestAge);

  // let oldest = ages.sort()[ages.length - 1];
  // console.log(oldest);

  // old
  // let index = ages.indexOf(oldest) - 1;
  // console.log(index);

  // new
  let index = ages.indexOf(biggestAge) + 1;
  console.log(index);

  // let name = person[index].name;
  // console.log(`name: ${name}\ntypeof ${name}: ${typeof name}`);

  console.log(ages[index]);
  return ages[index];
  // return person[index]; // the whole person object!!!
};

/* console.log(
  findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
); */

// Do not edit below this line
module.exports = findTheOldest;
