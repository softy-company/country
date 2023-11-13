// const block = document.querySelector(".blocks");
// const button = document.querySelector("button")
// const input = document.querySelector("input")
// console.log(button);
// console.log(input.value);
// fetch(`https://restcountries.com/v3.1/all`).then((res) => res.json()).then((json) => {
//    json.map((el) => {  
//     console.log(el.length);
//     for(let i = 0;i<el.length;i++) {
//         const blocks = document.createElement("div")
//         blocks.classList.add("block");
//         block.append(blocks)
// blocks.innerHTML =` <h1>${el.flag}</h1><h2>${el.name.common}</h2>
// <a href="${el.maps.googleMaps}" target="_blank"><ion-icon name="navigate-outline"></ion-icon></a>`
// //    

//     }
//     // console.log(blocks);

// //     block.innerHTML += `<div class="block"><h1>${el.flag}</h1><h2>${el.name.common}</h2>
// // <a href="${el.maps.googleMaps}" target="_blank"><ion-icon name="navigate-outline"></ion-icon></a>
// //     </div>`;
    
//     // el.flags.png.style.width = "300px"
//     // console.log(el);
//     // el.flags.png.style.heigth = "300px"
//    })
// //    console.log(json);
// })
// button.addEventListener("click", () => {
// // if(input.value===json.name.common){
//     // block.style.display = "block"
//     // blocks.style.background = "red";
// // }
// console.log(input.value);
// })
//         // console.log(blocks);








// fetch(`https://restcountries.com/v3.1/all`)
//   .then((res) => res.json())
//   .then((json) => {
//     countriesData = json; // Сохраняем данные
//     // Остальной код
//   });

//   button.addEventListener("click", () => {
//     const searchTerm = input.value.toLowerCase(); // Получаем значение из input и приводим к нижнему регистру для удобства сравнения
  
//     // Очищаем блоки от предыдущих результатов
//     block.innerHTML = "";
  
//     // Фильтруем данные и отображаем только те, которые соответствуют поисковому запросу
//     countriesData.forEach((country) => {
//       const commonName = country.name.common.toLowerCase();
  
//       if (commonName.includes(searchTerm)) {
//         const newBlock = document.createElement("div");
//         newBlock.classList.add("block");
//         newBlock.innerHTML = `
//           <h1>${country.flag}</h1>
//           <h2>${country.name.common}</h2>
//           <a href="${country.maps.googleMaps}" target="_blank">
//             <ion-icon name="navigate-outline"></ion-icon>
//           </a>
//         `;
//         block.appendChild(newBlock);
//       }
//     });
//   });




































































const button = document.querySelector('.button button');
const input = document.querySelector('.input input');
const countryList = document.querySelector("#countryList");
  


function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        displayCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }
//   console.log(fetchCountries());

function displayCountries(countries) {
    countryList.innerHTML = ""; 
  
    const searchTerm = searchInput.value.toLowerCase();
  
    countries.forEach((country) => {
      const commonName = country.name.common.toLowerCase();
  
      if (commonName.includes(searchTerm)) {
        const countryBlock = document.createElement("div");
        countryBlock.classList.add("block");
        countryBlock.innerHTML = `
          <h1>${country.flag}</h1>
          <h2>${country.name.common}</h2>
          <a href="${country.maps.googleMaps}" target="_blank">
            <ion-icon name="navigate-outline"></ion-icon>
          </a>
        `;
        countryList.appendChild(countryBlock);
      }
    });
  }
button.addEventListener("click", fetchCountries);
fetchCountries(); 
