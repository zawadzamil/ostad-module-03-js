// ****** a ****** 
function dateConverter(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let newDateIndex = new Date(date).getDay();
    return daysOfWeek[newDateIndex];
}

// ********** b ********** 

const today = new Date();
console.log(dateConverter(today));