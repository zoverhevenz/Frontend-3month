const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target,target1) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET","data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target1.value = (elem.value / response.eur).toFixed(2);

            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target1.value = (elem.value * response.eur / response.usd).toFixed(2);

            }else if (elem === eur) {
                target.value = (elem.value * response.eur).toFixed(2);
                target1.value = (elem.value * response.usd / response.eur).toFixed(2);
            }
            elem.value === "" && (target.value = "");
            elem.value === "" && (target1.value = "")
        });
    });
};
convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som, usd);