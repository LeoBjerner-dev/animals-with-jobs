//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const animalInfoBox = document.querySelector(".animal-info");
    if (animalInfoBox) {
        animalInfoBox.innerHTML = ""; // JAG ANVÄNDER DEN HÄR FÖR ATT RENSA SÅ ATT DET INTE BLIR DJUR PÅ DJUR
    }
    //=====================================================//
    //Rendera ut bilden på djuret
    //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
    //=====================================================//
    const animalImg = document.createElement("img");
    animalImg.src = `images/${animal.imageUrl}`;
    animalInfoBox?.appendChild(animalImg);
    const nameText = document.createElement("p");
    nameText.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    animalInfoBox?.appendChild(nameText);
    //=====================================================//
    //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
    //Följ formatet: "Trash Analyst - Currently (not) employed"
    //Använd template literals
    //=====================================================//
    const employmentText = document.createElement("p");
    if (animal.employmentEndDate) {
        employmentText.textContent = `${animal.job} - Currently (not) employed`;
    }
    else {
        employmentText.textContent = `${animal.job} - Currently (is) employed`;
    }
    animalInfoBox?.appendChild(employmentText);
    //=====================================================//
    //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
    //Följ formatet:  Age: 9 years old.
    //Använd template literals
    //Bonus om du skriver ut rubriken "Age" med CSS.
    //=====================================================//
    const ageText = document.createElement("p");
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(animal.birthYear);
    ageText.textContent = `Age: ${age} years old.`;
    animalInfoBox?.appendChild(ageText);
    //=====================================================//
    //Skriv ut en lista på djurets färdigheter
    //Följ formatet:    Skills:
    //                  Flying
    //                  Eating
    //Bonus om du skriver ut rubriken "Skills" med CSS.
    //=====================================================//
    const skillsText = document.createElement("ul");
    const skillList = animal.skills;
    if (Array.isArray(skillList)) {
        skillList.forEach((skill) => {
            const skillListItem = document.createElement("li");
            skillListItem.textContent = skill;
            skillsText.appendChild(skillListItem);
        });
    }
    else if (typeof skillList === "string") {
        const skillListSingular = document.createElement("li");
        skillListSingular.textContent = skillList;
        skillsText.appendChild(skillListSingular);
    }
    animalInfoBox?.appendChild(skillsText);
}
