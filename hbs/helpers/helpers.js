
const hbs = require('hbs');


/*
    HELPERS
*/


// get year
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

// capitalize every fist letter of word in text
hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
});