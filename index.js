const employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newobj = { ...employee, [key]: value }
  return newobj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
  const delemployee = { ...employee }
  delete delemployee[key]
  return delemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}
