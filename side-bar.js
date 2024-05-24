let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

// let menuIcon = document.querySelector(".menu-icon")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");    
    
}


//Api fetch Video from YoutubeApi
 
const API_KEY = "AIzaSyBQtlfdd5xkBn4WX3md22D_DMtZDipey6Y";;


document.addEventListener('DOMContentLoaded', fetchTrendingVideos);

async function fetchTrendingVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1000000&key=${API_KEY}`);
    const data = await response.json();
    var videos = data.items;

    const videoContainer = document.querySelector('.list-container');
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid-list');
        videoElement.innerHTML = `
        <div>
        <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="100%"></iframe>
            <div class="vid-info">
                <p>${video.snippet.title}</p>
                <p>2k Views &bull; 2 days</p>
            </div>
        </div>
        `;
        console.log(video)
        videoContainer.appendChild(videoElement);
    });
}


async function fetchVideos() {
    const searchTerm = document.getElementById('search-term').value;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`);
    const data = await response.json();
    displayVideos(data.items);
}

function displayVideos(videos) {
    const videoContainer = document.querySelector('.list-container');
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid-list');
        videoElement.innerHTML = `
        <div>
        <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="100%"></iframe>
            <div class="vid-info">
                <p>${video.snippet.title}</p>
                <p>2k Views &bull; 2 days</p>
            </div>
        </div>
        `;
        console.log(video)
        videoContainer.appendChild(videoElement);
    });
}

