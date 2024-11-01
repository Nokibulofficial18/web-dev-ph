const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const cardsContainer = document.getElementById("Cards-container");
let sortArray =[];
//menu icon
menuBtn.addEventListener("click", function () {
    menuBtn.children[0].classList.toggle("hidden");
    const menuCloseBtn = document.getElementById("close-icon");
    menuCloseBtn.classList.toggle("hidden");
    mobileMenuEl.classList.toggle("hidden");
    mobileMenuEl.classList.toggle("flex");
});
//show loading shower
const showLoader = () => {
    const div = document.createElement("div");
    div.id = "loader";
    div.classList.add("col-span-3", "flex", "justify-center");

    div.innerHTML = `<span class="loading loading-bars loading-lg text-primary"></span>`;

    cardsContainer.appendChild(div);
};
//hide loading shower
const hideLoader = () => {
    const loader = document.getElementById("loader");
    cardsContainer.removeChild(loader);
};
//load all catagories
const loadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayAllCategories(data.categories))  // Fix the spelling
        .catch(err => console.log("Fetching is not available", err));
};

const loadSinglePetDetails = (petId) => {
    console.log(petId);
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);  
            displaySinglePetDetails(data.petData);  
        })
        .catch(err => console.log("Fetching is unavailable", err));
};

const displayAllCategories = (data) =>{
    console.log(data);
    const categoryBtnEl = document.getElementById("category-btn-container");
    categoryBtnEl.innerHTML ="";
    
    data.forEach(item=>{
        console.log(item);
        categoryBtnEl.innerHTML += 
        `
            <button id="${item.category}" onclick="loadByCategory('${item.category}')" class="flex items-center space-x-4 rounded-xl border p-4 sm:p-6 lg:p-8">
                <img src="${item.category_icon}">
                <h3 class="text-2xl font-bold text-secondary">${item.category}</h3>
            </button>
        `
    })
}

const loadByCategory=(categoryName) =>{
    console.log(categoryName);

    const categoryBtnContainer = document.querySelectorAll("category-btn-container button");
    categoryBtnContainer.className = "flex items-center justify-center space-x-4 border border-primary bg-primary/20 rounded-full p-4 sm:p-6 lg:p-8";
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
            .then(res => res.json())
            .then(pets => {
                console.log(pets);  
                cardsContainer.innerHTML = "";
                showLoader();  
    
                setTimeout(() => {
                    hideLoader();
    
                    if (pets.data) {  
                        sortArray = pets.data;
                        displayAllPets(pets.data);
                    } else {
                        console.log("No pets data found");
                    }
                }, 2000);
            })
            .catch(err => {
                console.log("Fetching is not available: " + err);  
                hideLoader();
            });
    
    
}

// Load all pets
const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => {
            console.log(data);  
            displayAllPets(data.pets);  
        })
        .catch(err => {
            console.log("Fetching is not available:", err);  
        });
};


//display all pets 
const displayAllPets = (data) =>{
    let i=0;
    if(data.length){
        sortArray = data;
        data.forEach(pet=>{
            const petId = pet.petId;
            const petName = pet.pet_name;
            const petImage = pet.image;
            const petBreed = pet.breed ? pet.breed : "Not available";
            const petDoB = pet.date_of_birth ? pet.date_of_birth : "Not Available";
            const petGender = pet.gender ? pet.gender : "Not Available";
            const petPrice = pet.price? pet.price : "Not Available";
            cardsContainer.innerHTML +=
            `
            <div class="card card-compact border border-secondary/10 rounded-lg p-5 space-y-5">
                <figure>
                    <img class="w-full rounded-lg"
                        src=${petImage} />
                </figure>
                <div class="space-y-1">
                    <h2 class="text-2xl font-bold text-secondary font-inter">${petName}</h2>
                    <p class="text-secondary/70">
                        <i class="fa-solid fa-border-all mr-3"></i>
                        <span>Breed: ${petBreed}</span>
                    </p>
                    <p class="text-secondary/70">
                        <i class="fa-regular fa-calendar mr-3"></i>
                        <span>Birth: ${petDoB}</span>
                    </p>
                    <p class="text-secondary/70">
                        <i class="fa-solid fa-venus mr-3"></i>
                        <span>Gender: ${petGender}</span>
                    </p>
                    <p class="text-secondary/70">
                        <i class="fa-solid fa-money-check-dollar mr-2"></i>
                        <span>Price: ${petPrice}</span>
                    </p>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <button onclick="likedPet('${petImage}')"
                        class="px-3 sm:px-4 py-2 border rounded-md hover:bg-primary hover:text-white transition duration-200 ease-in-out"><i
                            class="fa-solid fa-thumbs-up"></i></button>
                    <button id="adoption-btn-id-${petId}" onclick="adoptionProcess(this)"
                        class="px-3 sm:px-4 py-2 border rounded-md text-primary font-bold sm:text-lg hover:bg-primary hover:text-white transition duration-200 ease-in-out">Adopt</button>
                    <button onclick="loadSinglePetDetails(${petId})"
                        class="px-3 sm:px-4 py-2 border rounded-md text-primary font-bold sm:text-lg hover:bg-primary hover:text-white transition duration-200 ease-in-out">Details</button>
                </div>
            </div>
            `;
        });
    }
    else{
        noAvailableData();
    }
}

//liked image adding to the right side
const likedPet =(image)=>{
    const likeCardsContainer = document.getElementById("liked-cards-container");
    likeCardsContainer.innerHTML +=
    `
    <img src=${image} class="rounded-lg border p-3">
    `
}

const adoptionProcess = (adoptionButtonId) =>{
    const congratsModal = document.getElementById("Congrats-modal");
    const adoptionButton = document.getElementById(adoptionButtonId.id);
    adoptionButton.onclick = congratsModal.showModal();
    
    const intervalId = setInterval(() => {
        const counter = document.getElementById("Count-down");
        let counterValue = parseInt(counter.innerText);

        counterValue--;
        counter.innerText = counterValue;
        if(counterValue <= 0){
            clearInterval(intervalId);
            document.getElementById("close-btn").click();
            adoptionButton.className = "px-3 sm:px-4 py-2 border rounded-md  font-bold sm:text-lg bg-stone-400 opacity-50 cursor-not-allowed";
            adoptionButton.innerText = "Adopted";
            counter.innerText = 3;
        }
    }, 1000)
}

const displaySinglePetDetails = (pet) => {
    console.log(pet);
    const petDetailsContainer = document.getElementById("pet-details-container");
    petDetailsContainer.innerHTML = "";

    const petImage = pet.image;
    const petName = pet.pet_name;
    const petBreed = pet.breed ? pet.breed : "Not available";
    const petDOB = pet.date_of_birth ? pet.date_of_birth : "Not available";
    const petGender = pet.gender ? pet.gender : "Not available";
    const petPrice = pet.price ? `${pet.price}$` : "Not available";
    const petIsVaccinated = pet.vaccinated_status ? pet.vaccinated_status : "Not available";
    const petDetails = pet.pet_details;
    
    petDetailsContainer.innerHTML = `
    <div class="space-y-4">
        <img class="w-full h-60 sm:h-80 rounded-lg" src=${petImage}>

        <h2 class="text-2xl font-bold text-secondary font-inter">${petName}</h2>
        <div class="space-y-1 grid grid-cols-1 sm:grid-cols-2">
            <p class="text-secondary/70">
                <i class="fa-solid fa-border-all mr-3"></i>
                <span>Breed: ${petBreed}</span>
            </p>
            <p class="text-secondary/70">
                <i class="fa-regular fa-calendar mr-3"></i>
                <span>Birth: ${petDOB}</span>
            </p>
            <p class="text-secondary/70">
                <i class="fa-solid fa-venus mr-3"></i>
                <span>Gender: ${petGender}</span>
            </p>
            <p class="text-secondary/70">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span>Price: ${petPrice}</span>
            </p>
            <p class="text-secondary/70">
                <i class="fa-solid fa-syringe mr-2"></i>
                <span>Vaccinated Status: ${petIsVaccinated}</span>
            </p>
        </div>

        <div class="space-y-2">
            <h3 class="text-secondary font-inter font-semibold">Details Information</h3>
            <p class="text-secondary/70 text-justify font-inter">${petDetails}</p>
        </div>
    </div>

    <div class="pt-4">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn w-full bg-primary/20 text-primary text-lg font-bold">Close</button>
        </form>
    </div>
    `;
    
    document.getElementById("Pet-details-modal").showModal();
};

const noAvailableData= () =>{
    const div = document.createElement("div");
    div.className = "col-span-3 flex flex-col justify-center items-center space-y-3";

    div.innerHTML = `
        <img class="w-24" src="./images/error.webp" alt="No Data Found">
        <h3 class="text-3xl font-bold font-inter text-secondary text-center">No information Available</h3>
        <p class="text-secondary/70 text-justify sm:w-3/4 mx-auto sm:text-center">Sorry there is no information available for this page.</p>
    `;
    cardsContainer.appendChild(div);
}

//sort the cards
document.getElementById("sort-btn").addEventListener("click", () => {
    console.log(sortArray);

    sortArray.sort((petA, petB) => {
        let priceA = petA.price !== null && petA.price !== undefined ? petA.price : -Infinity;
        let priceB = petB.price !== null && petB.price !== undefined ? petB.price : -Infinity;

        return priceB - priceA;
    });

    console.log(sortArray);
    cardsContainer.innerHTML = "";
    displayAllPets(sortArray);
});

window.onload = () => {

    // Call loadAllCategories function
    loadAllCategories();
    loadAllPets()
    
    // Show Loader
    showLoader();
    
    setTimeout(() => {
        hideLoader();
        loadAllPets();
    }, 2000);

};