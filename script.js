function toggleImages() {
  var images = document.getElementById('images');
  var videos = document.getElementById('videos');
  
  images.classList.remove('hidden');
  videos.classList.add('hidden');
}

function toggleVideos() {
  var images = document.getElementById('images');
  var videos = document.getElementById('videos');
  
  videos.classList.remove('hidden');
  images.classList.add('hidden');
}

document.querySelector('.facebook').href = "https://www.facebook.com/search/top?q=beirt%20eile";
document.querySelector('.instagram').href = "https://www.instagram.com/beirteile/";