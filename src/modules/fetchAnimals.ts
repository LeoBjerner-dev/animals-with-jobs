//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
import { IAnimal } from "./IAnimal";

export default async function fetchAnimals(): Promise<IAnimal[] | null> {
  try {
    const response = await fetch("data/data.json");

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Could not fetch animal");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
