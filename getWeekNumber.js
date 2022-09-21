console.log(getWeekNumber());

function getWeekNumber() {
    const SUNDAY_DATE_NUMBER = 0;
    const SUNDAY_NUMBER = 7;
    const MS_PER_DAY = 24 * 60 * 60 * 1000; // hours, minutes, seconds, miliseconds 

    const currentDate = new Date();
    const oneJan = new Date(currentDate.getFullYear(), 0, 1);

    let daysToEqualizeWeek = oneJan.getDay() - 1;
    if (daysToEqualizeWeek === SUNDAY_DATE_NUMBER) {
        daysToEqualizeWeek = SUNDAY_NUMBER - 1;
    }

    const absoluteDayInTheYear = Math.floor((currentDate - oneJan) / MS_PER_DAY);
    const weekNumber = Math.floor((absoluteDayInTheYear + daysToEqualizeWeek) / 7);

    return weekNumber;
}