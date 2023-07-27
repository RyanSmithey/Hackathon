// const test = ()=>{
//     console.log("Test");
// }

//setInterval(test, 250);


// chrome.storage.local.set({ key: "value" }).then(() => {
//     chrome.storage.local.get(["key"]).then(result => console.log(result));
//   });
const d = new Date();
let time = d.getTime();

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

time = time % day;
time = time / hour;
time -= 4;

function myFunction(){
  document.querySelector("body").innerHTML = savedHTML
}

const innerHTML = '<h1>You have Un-Distract enabled</h1><div>This website will become accessible outside business hours</div><button onclick="myFunction()">Bypass</button>'

const savedHTML = document.querySelector("body").innerHTML;

if (time > 9.0 && time < 17.0){
  document.querySelector("body").innerHTML = innerHTML;
}