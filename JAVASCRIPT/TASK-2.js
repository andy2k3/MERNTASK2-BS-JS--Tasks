function alphabetizeString(given) {

    return given.split('').sort().join('');
}

const string = "webmaster";
console.log(alphabetizeString(string));
