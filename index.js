// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(names, name) {
    const newNames = names.filter(n => n.toLowerCase() === name.toLowerCase());
    return newNames;
}

function fuzzyMatch(names , letter){
    return names.filter(n => {
        if (n.length < letter.length) {
            return false; 
        }
        const beginningOfName = n.substring(0, letter.length);
        return beginningOfName.toLowerCase() === letter.toLowerCase();
    });
}

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arrayDriver,driverName){
    return arrayDriver.filter(driver => driver.name === driverName);
}