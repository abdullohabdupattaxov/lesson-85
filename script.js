import pokemons from "./pokemons.js";

let kartochki = document.querySelector('.kartochki')
let btn = document.querySelector('.btn')
let inputSearch = document.querySelector('.inputSearch')
let selectSort = document.querySelector('.selectSort')

console.log(pokemons);

function generator(massiv) {
    kartochki.textContent = ''
    massiv.forEach(element => {
        // console.log(element.weight);

        let newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.innerHTML = `
        <h2>${element.name}</h2>
        <img src=${element.img} alt="">
        <span class="type">${element.type}</span>
        <span class="ves">${element.weight}</span>
    `
        kartochki.appendChild(newCard)
    })
}

generator(pokemons)


inputSearch.addEventListener('input', () => {
    const inputSearchValue = inputSearch.value.toLowerCase().trim()
    const filteredPokemons = pokemons.filter(element =>
        element.name.toLowerCase().trim().includes(inputSearchValue)   
    )

    generator(filteredPokemons)
})

let sortedPokemons = pokemons 
selectSort.addEventListener('change', ()=>{
  console.log(selectSort.value);
  if(selectSort.value == 'ABC'){
    sortedPokemons.sort((a, b)=> a.name.localecompare (b.name))
  }else if(selectSort.value == 'CBA'){
    sortedPokemons.sort((a, b)=>b.name.localecompare(a.name))
  }else if(selectSort.value == 'BIG'){
    sortedPokemons.sort (( a, b)=>parseFloat(b.weight) - parseFloat(a.weight))
  }else if(selectSort.value == 'SMALL'){
    sortedPokemons.sort((a, b)=> parseFloat(a.weight) - parseFloat(b.weight))
  }
  generator(sortedPokemons)
})

selectCategory

btn.addEventListener('click',()=> {
  console.log(selectCategory.value);
  
})