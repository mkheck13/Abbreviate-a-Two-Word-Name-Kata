// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



// we are going to want to name to equal two  differnt strings
// we want the first letter to be uppercase when its returned, .toUpperCase() will do that
// we have to get the first letter from each string, .split() will do this
// when we return first and last names we will set them to the index of [0] which will be the first letter
function abbrevName(name){
    [firstName, lastName] = name.toUpperCase().split(' ');
    return firstName[0] + '.' + lastName[0];
}