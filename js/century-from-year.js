function century(year) {

    let countOfCentury;

    if (year < 100) {
        return 1;
    }
    else {
        countOfCentury = Math.floor(year / 100);
    }

    if (year % countOfCentury == 0) {
        return countOfCentury;
    }
    else {
        return countOfCentury + 1;
    }
}

console.log(century(1900));