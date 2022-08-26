function findWaldo(group) {
  console.log(group);
  for (let i = 0; i < group.length; i++);{
    if (group[i] === 'Waldo'){
        newArr.push("I found Waldo!")
    }else {
        newArr.push(group[i])
    }
    }

    return
findWaldo(['Stacy', 'Waldo', 'John']) // returns ['Stacy', 'Found Waldo!', 'John']
findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']) // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']

