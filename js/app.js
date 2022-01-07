document.addEventListener('DOMContentLoaded', () =>{
    const newItemform = document.querySelector('#new-item-form')
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteForm = document.querySelector('#delete-all')
    deleteForm.addEventListener('click', handleDeleteAllClick)
})

const handleNewItemFormSubmit = function(event){
    event.preventDefault();

    const endageredAnimalsList = createEndageredAnimalsList(event.target);
    const animalList = document.querySelector('#animals-list')
    animalList.appendChild(endageredAnimalsList);

    event.target.reset();
}

const createEndageredAnimalsList = function(form) {
    const endageredAnimalsList = document.createElement('li')
    endageredAnimalsList.classList.add('animals-list');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    endageredAnimalsList.appendChild(name);

    const species = document.createElement('h3')
    species.textContent = form.species.value
    endageredAnimalsList.appendChild(species);

    const continent = document.createElement('h3')
    continent.textContent = form.continent.value
    endageredAnimalsList.appendChild(continent)

    return endageredAnimalsList;
}

const handleDeleteAllClick = function(event){
    const endageredAnimalsList = document.querySelector('#animals-list')
    endageredAnimalsList.innerHTML = '';
}