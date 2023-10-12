console.error("This is error")
console.warn('This is a warning')
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)
  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)
  console.info('30 Days Of JavaScript challenge is trending on Github')


// This is error
// This is a warning
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │ 'Asabeneh' │
// │    1    │  'Brook'   │
// │    2    │  'David'   │
// │    3    │   'John'   │
// └─────────┴────────────┘
// ┌─────────┬───────────┬─────────────┐
// │ (index) │     0     │      1      │
// ├─────────┼───────────┼─────────────┤
// │    0    │ 'Finland' │ 'Helsinki'  │
// │    1    │ 'Sweden'  │ 'Stockholm' │
// │    2    │ 'Norway'  │   'Oslo'    │
// └─────────┴───────────┴─────────────┘
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │  name   │  'Asabeneh'  │
// │  title  │ 'Programmer' │
// │ country │  'Finland'   │
// │  city   │  'Helsinki'  │
// │   age   │     250      │
// └─────────┴──────────────┘
// 30 Days Of JavaScript challenge is trending on Github
