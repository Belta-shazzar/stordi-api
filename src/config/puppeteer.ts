// import puppeteer from "puppeteer";
// import { child } from "winston";

// const search = async (query: string) => {
//   const browser = await puppeteer.launch({ headless: "new" });

//   const tab = await browser.newPage();
//   await tab.goto("https://google.com");

//   await tab.type('textarea[name="q"]', query);

//   await tab.$eval("input[name=btnK]", (button) => button.click());

//   await tab.waitForSelector("div[id=search]");

//   await tab.screenshot({ path: "example.png" });

//   // let response = await tab.$$eval("div[class=MjjYud]", (results) => {
//   // > div[class=MjjYud]
//   let response = await tab.$$eval("div[class=v7W49e]", (result) => {
//     let count = 0;
//     let actualRes: any = [];
//     // let dummyRes: any = [];
//     // result.forEach((parentElement) => {
//     //   // Get the direct child elements of the current parent element
//     //   const directChildren = parentElement.children;

//     //   // Loop through the direct child elements
//     //   for (let i = 0; i < directChildren.length; i++) {
//     //     const childElement = directChildren[i];
//     //     if (childElement.className.includes("MjjYud")) {
//     //       actualRes.push(childElement);
//     //     }
//     //     // Do something with each direct child element
//     //   }
//     // });

//     // actualRes.forEach((parent: any) => {
//     //   dummyRes.push({ name: parent.className })
//       // const direct = parent.querySelector(".g");
//       // // if (direct === null) {
//       // //   return;
//       // // }
//       // let step = direct.querySelector(".N54PNb");

//       // Array.from(step).forEach((dummy: any) => {
//       //   // Get the direct child elements of the current parent element
//       //   const dummyDC = dummy.children;

//       //   // Loop through the direct child elements
//       //   for (let i = 0; i < dummyDC.length; i++) {
//       //     const childElement = dummyDC[i];
//       //     // if (childElement.className.includes("MjjYud")) {
//       //     // dummyRes.push(childElement.className);
//       //     count++;
//       //     // }
//       //     // Do something with each direct child element
//       //   }
//       // });
//     // });
//     // return dummyRes;
//   // });
//   //  (results) => {
//     let data: any[] = [];

//     // result.forEach((parent) => {
//       // const direct = parent.querySelector(".g");
//   //     if (direct === null) {
//   //       return;
//   //     }
//     // }
//   //     let step = direct.querySelector(".kvH3mc");
//   //     let arrIndex = 1; //For {}

//   //     if (step === null) return; //{
//   //     // step = direct.querySelector(".GLI8Bc")
//   //     // arrIndex = 2
//   //     // }

//   //     let pickUp: any = step.querySelectorAll(".Z26q7c");

//   //     pickUp = Array.from(pickUp);

//   //     const url = pickUp[0].querySelector("div[class=yuRUbf] > div > a").href;
//   //     const title = pickUp[0].querySelector("div[class=yuRUbf] > div > a > h3").innerText;

//   //     let deet: Record<string, any> = { title, url };
//   //     const desc = pickUp[arrIndex].querySelector(".VwiC3b > span").innerText;

//   //     if (desc !== null && desc !== undefined) {
//   //       deet = { ...deet, desc };
//   //     }

//   //     // const desc = description === null ? "" : description;

//   //     data.push(deet);
//   //     // data.push({ title, url, desc });
//     });

//     return data;
//   });

//   await browser.close();
//   console.log("Executed!");
//   return response;
// };

// export default search;
