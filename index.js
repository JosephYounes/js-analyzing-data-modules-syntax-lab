const Datejs = require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }
  // Use Datejs for formatting the date
  const today = new Date();
  const formatted = today.toString('M/d/yyyy');
  combinedObject.merge_date = formatted;
  return combinedObject;
}

module.exports = {
  combineUsers
};