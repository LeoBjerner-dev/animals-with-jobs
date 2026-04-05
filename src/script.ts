import fetchAnimals from "./modules/fetchAnimals.ts";
import renderListOfAnimals from "./modules/renderListOfAnimals.ts";
import { IAnimal } from "./modules/IAnimal";

async function init() {
  const animals = await fetchAnimals();
  if (animals) {
    renderListOfAnimals(animals);
  }
}

init();
