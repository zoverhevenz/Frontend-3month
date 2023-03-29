// const obj = {
//     name: "Alex",
//     age: 21
// }
// console.log(obj)
//
// const data = JSON.stringify(obj)
// console.log(data)
//
// console.log(JSON.parse(data))

// const arr = [1, 2, 3, 4, 5, 6,]
//
// console.log(JSON.parse(JSON.stringify(arr)))

// const btn = document.querySelector("button")
//
// btn.addEventListener("click", () =>{
//     const request = new XMLHttpRequest()
//     request.open("GET", "https://pokeapi.co/api/v2/pokemon")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         request.map()
//         console.log(data)
// document.querySelector(".name").innerHTML = data.name
// document.querySelector(".age").innerHTML = data.age
//     })
// })

// const myFunc = (ar1, ...ar2) => {
//     console.log(ar1)
//     console.log(ar2)
// }
// myFunc("1", '2', '3', '54')

const wrapper = document.querySelector(".wrapper");

const colors = ["green", "red", "yellow", "blue"];

const req = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "data.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    const data = JSON.parse(request.response);
    console.log(data.results);

    data.results.map((i) => {
      console.log(i);
      const block = document.createElement("div");
      block.setAttribute("class", "block");

      block.style.height = "100px";
      block.style.width = "100px";
      block.style.margin = "10px";
      block.style.border = "2px solid blueviolet";
      block.style.backgroundColor = colors[i];
      block.style.textAlign = "center";

      block.innerHTML = i.name;

      wrapper.append(block);
    });
  });
};
req();
