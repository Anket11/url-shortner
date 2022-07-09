// document.querySelector(".shorten").addEventListener("click", shortenUrl);

// function shortenUrl(e) {
//   let link = document.querySelector("#input").value;
//   var lastCode;
//   fetch("https://api-ssl.bitly.com/v4/shorten", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer 922e3639832cb5ecc99ecdd0faadaa8095115c94",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ long_url: link, domain: "bit.ly" }),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       document.querySelector("#output1").value = response.link
//       document.querySelector("#output2").value = document.querySelector("#output1").value.replace("https://bit.ly/","http://myt.lb/");
//     });
// }
