let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'javascript is cool';
console.log(s3.length);
const strings = [s1, s2, s3];
for ( const s of strings ) {
    console.log(s.length);
}