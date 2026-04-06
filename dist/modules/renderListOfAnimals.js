//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const animalList = document.querySelector(".list-of-animals ul");
    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        animalList?.appendChild(listItem);
        listItem.addEventListener("click", () => {
            renderAnimalInfo(animal);
        });
    });
}
