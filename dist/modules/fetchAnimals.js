export default async function fetchAnimals() {
    try {
        const response = await fetch("data/data.json");
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            throw new Error("Could not fetch animal");
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
