// function LeapYear (year){

//     if (year != 1582){
//         return true;
//     }
//     if (year % 4 || year % 400){
//         return true;
//     }
//     if (year % 100) {
//         return false
//     }
//     co

// }
// LeapYear();
// console.log(LeapYear(1582));

// export default LeapYear;

function leapYear(year) {
    if(year < 1582) {
      throw new Error('Leap year rules do not work before 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 || !div100);
  }
  
  // The next line makes the function available to other JavaScript modules
  // This is necessary for the test code to be able to run this function
  export default leapYear;