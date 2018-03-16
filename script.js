// IV. Calendar
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]

const DAYS_OF_THE_WEEK = [
  '  Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const NUM_WEEKS = 31 / 7

for (let month in MONTHS) {
  console.log('--------------------------------------------')
  console.log(MONTHS[month].padStart(22))
  console.log('--------------------------------------------')
  console.log(DAYS_OF_THE_WEEK.join(' '))

  for (let week = 0; week < NUM_WEEKS; week++) {
    let weekStr = ' '
    for (let day = 1; day <= 7; day++) {
      let monthDay = day + (week * 7)
      // exit out of the loop if the day of the month is greater than 31
      if (monthDay > 31) break
      weekStr += monthDay.toString().padStart(4)
    }
    console.log(weekStr)
  }
}
