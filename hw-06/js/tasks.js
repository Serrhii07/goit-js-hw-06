import users from './users.js';

// TASK-01

const getUserNames = function(users) {
  return users.map(function(user) {
    return user.name;
  });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TASK-02

const getUsersWithEyeColor = function(users, color) {
  return users.filter(function(user) {
    if (user.eyeColor === color) {
      return user;
    }
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// TASK-03

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TASK-04

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// TASK-05

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// TASK-06

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK-07

const calculateTotalBalance = function(users) {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// TASK-08

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// TASK-09

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// TASK-10

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);

      return allSkills;
    }, [])
    .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
