const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elem, target, target1) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      target.forEach((e) => {
        target1 === "som"
          ? (e.value = (elem.value / data[e.id]).toFixed(2))
          : e === som
          ? (e.value = (elem.value * data[elem.id]).toFixed(2))
          : (e.value = ((elem.value * data[elem.id]) / data[e.id]).toFixed(2));
      });
      elem.value === "" ? target.forEach((e) => (e.value = "")) : null;
    });
  });
};
convert(som, [usd, eur], "som");
convert(usd, [som, eur]);
convert(eur, [som, usd]);
