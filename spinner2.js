process.stdout.write('hello from spinner1.js... \rheyyy\n');
const arr = ["\r|   ", "\r/   ", "\r-  ", "\r\\   "];
let time = 300;
for (let a of arr) {
  setTimeout(() => {
    process.stdout.write(a);
  }, time);
  time += 200;
}
