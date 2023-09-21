// function job(callback1, callback2) {
//   setTimeout(() => {
//     callback1();
//   }, 2000);

//   let counter = 0;
//   let timer = setInterval(() => {
//     callback2();
//     counter += 1;

//     if (counter >= 3) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("hello world");
//   }, 2000);
// });

// promise.then(function (data) {
//   console.log(data);
// });

const url = "https://yummly2.p.rapidapi.com/categories/list";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "52e45221aamsh291d365e94c68ecp10cee2jsn6c88101151c8",
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
