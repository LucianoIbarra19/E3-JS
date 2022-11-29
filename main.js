const inputBtn = document.getElementById('input-btn')
const input = document.getElementById('input')
const formList = document.getElementById('form-list')
const pizzaContainer = document.getElementById('pizza-container')

const Pizza = [
    {
        id: 1,
        nombre: 'Pizza Napolitana',
        precio: 500,
        ingredientes: ['orégano', 'queso', 'salsa de tomate', 'harina'],
        img: "./img/PizzaNapolitana.jpg"
    },
    
    {
        id: 2,
        nombre: 'Pizza Hawaiana',
        precio: 700,
        ingredientes: ['harina', 'queso', 'orégano', 'cebolla'],
        img: "./img/PizzaHawaiana.jpg"
    },

    {
        id: 3,
        nombre: 'Pizza Mozzarella',
        precio: 400,
        ingredientes: ['Harina', 'queso', 'tomate', 'orégano', 'morrones'],
        img: "./img/PizzaMozzarella.jpg"
    },

    {
        id: 4,
        nombre: 'Pizza de Salame',
        precio: 800,
        ingredientes: ['Harina', 'queso', 'orégano', 'jamón', 'salame'],
        img: "./img/PizzaSalame.jpg"
    },

    {
        id: 5,
        nombre: 'Pizza de Jamón y Queso',
        precio: 750,
        ingredientes: ['harina', 'orégano', 'queso', 'jamón'],
        img: "./img/PizzaJyQ.jpg"
    },

    {
        id: 6,
        nombre: 'Pizza a la Calabreza',
        precio: 1000,
        ingredientes: ['harina', 'queso', 'orégano', 'calabreza'],
        img: "./img/PizzaCalabresa.jpg"
    },

    {
        id: 7,
        nombre: 'Pizza de Rúcula',
        precio: 850,
        ingredientes: ['Harina', 'queso', 'orégano', 'rúcula'],
        img: "./img/PizzaRúcula.jpg"
    }
]

const renderPizza = (Pizza) => {
    if (!Pizza) {
        pizzaContainer.innerHTML = 
        `<div>
            <h2>No existe la pizza</h2>
        </div>
        `
    } else {
        pizzaContainer.innerHTML = 
        `<div>
            <h2>${Pizza.nombre}</h2>
            <h3>Precio: $${Pizza.precio}</h3>
            <h4>Ingredientes: ${Pizza.ingredientes}</h4>
            <img src="${Pizza.img}">
        </div>
        `
    }
}

const searchPizza = (value) => Pizza.find((Pizza) => Pizza.id === value)

const saveLocalStorage = (Pizza) => {
    localStorage.setItem('Pizza', JSON.stringify(Pizza))
}

const sendForm = (e) => {
    e.preventDefault()
    const searchInput = input.value 
    const searchedInput = searchPizza(Number(searchInput))
    renderPizza(searchedInput)
    saveLocalStorage(searchedInput)
    if (!searchInput) {
        searchPizza('No existe la pizza buscada')
    }
}

const init = () =>{
    formList.addEventListener('submit', sendForm)
    const PizzaSaved = JSON.parse(localStorage.getItem('Pizza'))
    if (PizzaSaved) {
        renderPizza(PizzaSaved)
    }
}

init()