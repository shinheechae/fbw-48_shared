//string

let name = 'shinhee '; //space is added to length, too
console.log(`type: ${typeof name}, name: ${name}`);
console.log(name.length); //length of any string: .length

let num = [1, 49, 229, 501];
console.log(num.length);

//string as aray
let familyName = 'chae';
console.log(`type: ${typeof familyName}, first letter: ${familyName[0]}`);

//trim: name.trim()
console.log(name.trim().length); //space error from line.3 is corrected

//change to lower/upper case
console.log(name.toLowerCase());
console.log(name.toUpperCase());

//substring: .substr(start, length)
let course ="javascript for backend";
let course2 = "javacript for frontend";
console.log(course.substr(0,10));
console.log(course.substr(10));
console.log(course.substr(-1)); // '-' indicates counting backwards
console.log(course.substr(-22, 4)); //역방향으로y 세서 22번째 글자, 거기에서 부터 정방향으로 4글자


let courses = course + course2;
console.log(courses);


let myFavoriteCourse = course + " & javascript for frontend"
console.log(myFavoriteCourse);
console.log(`My favorite course is ${course} & ${course2}.`);


let job = 'frontend';

if (job === 'frontend') {
    console.log(`Your job needs ${job} skills including ${course2}.`);
} else {
    console.log(`Your job needs fewer ${job} skills.`);
}

let jobPosition = (job === 'frontend' ? `your job needs ${course2}.` : `your job needs ${course}`);
console.log(jobPosition);



//incudes()
let languages = 'English Italian German Spanish';  
console.log(languages.length, languages.includes('talian', 9));

let laptops = ['Lenovo', 'HP', 'Mac', 'Dell']
console.log(laptops.includes('Dell'));
console.log(laptops.includes('LG'));
console.log(laptops.includes('hp' .toUpperCase()));

function upper(text) {
    console.log(text.toUpperCase());
}

upper('shinhee chae');


let person = {
    name: 'Shinhee',
    address: 'Kreuzberg',
    job: 'Web developer',

    info: function() {
        console.log(`My name is ${person.name}, living in ${person.address} and working as ${person.job}`);
    }
}
person.info();