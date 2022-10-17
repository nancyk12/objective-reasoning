// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
/*## 1. `isAdmin`

Write a function, `isAdmin` that takes in a user object and returns true if the user is an admin,
as indicated by their `userRole` key. All admins' `userRole` attributes are equal to `'ADMIN'`.

A user object will look like this:
```
{
    firstName: String,
    lastname: String,
    userRole: String
}
```

**Examples**
```
isAdmin({
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
})
=> false

isAdmin({
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
})
=> false

isAdmin({
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
})
=> true
```
*/

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }
    return false;
}
const user = {
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
}
//for debugging
console.log(isAdmin(user));




/*## 2. `getEmail`

Write a function, `getEmail`, that given a user object, return the users' Code Immersives email. We'll assume that
a Code Immersives email is always in `firstName.lastName@codeimmersives.com` form.

**Examples**
```
getEmail({
    firstName: 'Brian'
    lastName: 'Carela'
})
=> 'brian.carela@codeimmersives.com'

getEmail({
    firstName: 'Anthony',
    lastName: 'DeRosa'
})
=> 'anthony.derosa@codeimmersives.com'
```
*/

function getEmail(user1){
    //return code-immersives email. 
    return `${user1.firstName.toLowerCase()}.${user1.lastName.toLowerCase()}@codeimmersives.com`;
}

const user1 = {
    firstName: 'Brian',
    lastName: 'Carela'
}

console.log(getEmail(user1));


/*
## 3. `getPlaylistLength`

Write a function, `getPlaylistLength` that takes in a playlist and returns the number of songs in the playlist

A playlist object will look like this:
```
{
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!']
*/

function getPlaylistLength(playlistObject){
    //return playlist length
    return playlistObject.songs.length;
}
const playlistObject = {name: 'my jams',
songs: ['Vienna', 'Hey Ya!']
}

console.log(getPlaylistLength(playlistObject));




/*## 4. `getHardestHomework`

Write a function, `getHardestHomework` that takes in an array of homework objects and returns the name of 
the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

**Examples**

```
getHardestHomework([])
=> ''

getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
])
=> 'homework 2'

getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
])
=> 'hip-hip-array'
*/


function getHardestHomework(array){
    let min_obj = undefined;

    //iterate over array checking the value of each 
    // average score to find the object with the lowest score
    if(array.length  === 0) {
        return "";
    }
    for (let i = 0; i < array.length; i++) {

        // if the min key is empty, set first obj in the list
        // equal to the min key
        if(min_obj === undefined || array[i].averageScore < min_obj.averageScore ){
            min_obj = array[i];
        }
    }

    return min_obj['name'];
}

const homeworks = [
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
]
console.log(getHardestHomework(homeworks));

/*## 5. `createPhonebook`

Write a function, `createPhonebook`, that creates a phonebook object from an array of names
and phone numbers.

**Examples**
```
createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766'])
=> {
    'Jimothy': '123-456-7890',
    'Maria': '000-000-0000',
    'Karl': '999-888-7766'
}

createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424'])
=> {
    'Melissa': '206-111-2233',
    'Andre': '321-123-2424'
}

createPhonebook([], []);
=> {}
```
*/


//let names = ['Jimothy', 'Maria', 'Karl'];
//let phoneNumbers = ['123-456-7890', '000-000-0000', '999-888-7766'];


function createPhonebook(names, phoneNumbers){
   // let names = ['Jimothy', 'Maria', 'Karl'];
//let phoneNumbers = ['123-456-7890', '000-000-0000', '999-888-7766'];
    let phonebook = {};
    for (let i = 0; i < names.length; i++) {
    phonebook[names[i]] = phoneNumbers[i];
  }
  return phonebook;
    }

    //let names = ['Jimothy', 'Maria', 'Karl'];
    //let phoneNumbers = ['123-456-7890', '000-000-0000', '999-888-7766'];
console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'],['123-456-7890', '000-000-0000', '999-888-7766']));


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};