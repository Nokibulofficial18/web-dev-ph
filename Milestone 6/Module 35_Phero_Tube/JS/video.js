console.log("video")
function getTimeString(time) {
    //get Hour and rest seconds
    const year = parseInt(time/31536000)
    let remainingSecond = time % 31563000;
    const day= parseInt(remainingSecond / 86400);
    remainingSecond = remainingSecond % 86400;
    const hour = parseInt(remainingSecond / 3600);
    remainingSecond = remainingSecond % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${year} year ${day} day ${hour} hour  ${minute} minute ${remainingSecond} second ago`;
}

const removeActiveClass = () =>{
    buttons = document.getElementsByClassName("category-btn");
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}
//1 - Fetch, Load and show Catagories on html

// create loadCatagories
const loadCatagories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err))
};
const loadVideos = (searchText ="") =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err))
};

const loadCategoryVideos=(id) =>{
    //alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active")
        displayVideos(data.category)
    })
    .catch((err) => console.log(err))
}

const loadDetails= async (videoId) => {
    const uri =  `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.video)
}
const displayDetails = (video) =>{
    const detailsContainer = document.getElementById("modal-content");

    detailsContainer.innerHTML=
    `
    <img src="${video.thumbnail}"/>
    <p>${video.description}</p>
    `
    document.getElementById("showModalData").click();
}


const displayVideos = (videos) => {
    const videosContainer = document.getElementById("videos");
    videosContainer.innerHTML="";

    if(videos.length==0){
        videosContainer.classList.remove("grid")
        videosContainer.innerHTML=
        `
        <div class="min-h-[600px] flex flex-col gap-5 justify-center items-center">
        <img src="assets/Icon.png"/>
        <h2 class="text-center text-2xl font-bold">No Content here in this Category</h2>
        </div>
        `;
        return;
    }
    else{
        videosContainer.classList.add("grid");
    }
    videos.forEach( (video) =>{
        const card = document.createElement("div");
        card.classList ="card card-compact"
        card.innerHTML = 
        `
        <figure class="h-[200px] relative">
        <img
            src=${video.thumbnail}
            class = "h-full w-full object-cover"
            alt="Shoes" />
            ${
                video.others.posted_date ?.length==0?""
                : `<span class="absolute right-2 bottom-2 text-xs bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`
            }
            
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
            </div>
            <div>
            <h2 class="font-bold ">${video.title}</h2>
            <div class ="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>
            ${video.authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">`:"" }
            </div>

            <p><button onclick="loadDetails('${video.video_id}')" class ="btn btn-sm btn-error">details</button></p>
            </div>
        </div>
        `;
        videosContainer.append(card);
    })
    
}
//create DisplayCatagories
const displayCatagories = (catagories) =>{
    const catagoriesEl = document.getElementById("categories")
    catagories.forEach( (item) => {
        console.log(item);
        //create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML=
        `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
        ${item.category}
        </button>
        `

        // add button to category container
        catagoriesEl.append(buttonContainer);
    })

};

document.getElementById("search-input").addEventListener("keyup",(e) => {
    loadVideos(e.target.value)
});
//loading page
loadCatagories();
loadVideos();