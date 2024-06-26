import songs from './songs.js';

var index = 0;
var son = [];
var h1 = document.querySelector(".musicSlider>div>h1");
var img = document.querySelector(".slider>img");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var music = document.querySelector("audio");
var range = document.querySelector(".range");

function menuAnimation() {
  var close = document.querySelector(".close");
  document.querySelector(".menuBtn").addEventListener("click", function() {
    document.querySelector(".menu").style.transform = "translateX(0%)";
  })
  close.addEventListener("click", function() {
    document.querySelector(".menu").style.transform = "translateX(-100%)";
  })
  document.querySelector(".b").addEventListener("click", function() {
    document.querySelector(".bengali").style.transform = "translateX(0%)";

  })
  document.querySelector(".bengaliArrow").addEventListener("click", function() {
    document.querySelector(".bengali").style.transform = "translateX(-100%)";
    console.log(`message`);
  })

  document.querySelector(".h").addEventListener("click", function() {
    document.querySelector(".hindi").style.transform = "translateX(0%)";

  })
  document.querySelector(".hindiArrow").addEventListener("click", function() {
    document.querySelector(".hindi").style.transform = "translateX(-100%)";
    console.log(`message`);
  })

  document.querySelector(".e").addEventListener("click", function() {
    document.querySelector(".english").style.transform = "translateX(0%)";

  })
  document.querySelector(".englishArrow").addEventListener("click", function() {
    document.querySelector(".english").style.transform = "translateX(-100%)";
    console.log(`message`);
  })

  document.querySelector(".p").addEventListener("click", function() {
    document.querySelector(".punjabi").style.transform = "translateX(0%)";

  })
  document.querySelector(".punjabiArrow").addEventListener("click", function() {
    document.querySelector(".punjabi").style.transform = "translateX(-100%)";
    console.log(`message`);
  })

}

function musicSlider(imgUrl, name) {
  var slid = document.createElement("div");
  slid.classList.add("slider");
  var img = document.createElement("img");
  img.src = imgUrl;
  slid.appendChild(img);
  var h1 = document.createElement("h1");
  h1.innerText = name;
  var div = document.createElement("div");
  div.classList.add("divSlide");
  div.appendChild(slid);
  div.appendChild(h1);
  document.querySelector(".musicSlider").appendChild(div);
}

function imsgeAndNameAdd() {
  document.querySelectorAll(".songCart").forEach((songCart) => {
    var imgUrl;
    var name;
    songCart.addEventListener("click", function(e) {
      var i = e.target.parentElement.id;

      son = songs[i].filter((song) => e.target.innerHTML == song.name);
      console.log(son[0].songUrl);
      document.querySelector(".musicSlider").innerHTML = "";
      imgUrl = son[0].imageUrl;
      name = son[0].name;
      document.querySelector(".rtime").innerText = son[0].minutes + ":" + son[0].second;
      musicSlider(imgUrl, name);
      music.src = son[0].songUrl;
      musicPlay();
    })
  })
}

function bengaliSongs() {

  songs[0].forEach((song) => {

    document.querySelector(".bengaliSongCart").innerHTML += '<div id=0 class="songCart w-full flex items-center justify-between border-b-[1px] border-zinc-200">' +
      '<div class="w-16 h-16 rounded-full overflow-hidden bg-red-300">' +
      `<img src='${song.imageUrl}' class="w-full h-full object-cover" alt="songImage" />` +
      "</div>" +
      `<h1 id=${song.id} class="text-xl font-semibold">${song.name}</h1>` +
      "</div>";

  })
  imsgeAndNameAdd()
}

function hindiSongs() {

  songs[1].forEach((song) => {
    console.log(song)

    document.querySelector(".hindiSongCart").innerHTML += '<div id=1 class="songCart w-full py-3 px-5 flex items-center justify-between border-b-[1px] border-zinc-200">' +
      '<div class="w-16 h-16 rounded-full overflow-hidden bg-red-300">' +
      `<img src=${song.songUrl} class="w-full h-full object-cover" alt="songImage" />` +
      "</div>" +
      `<h1 class="text-xl font-semibold">${song.name}</h1>` +
      "</div>";
  })
  imsgeAndNameAdd()
}

function englishSongs() {
  songs[2].forEach((song) => {
    document.querySelector(".englishSongCart").innerHTML = '<div id=2 class="songCart w-full py-3 px-5 flex items-center justify-between border-b-[1px] border-zinc-200">' +
      '<div class="w-16 h-16 rounded-full overflow-hidden bg-red-300">' +
      `<img src=${song.songUrl} class="w-full h-full object-cover" alt="songImage" />` +
      "</div>" +
      `<h1 class="text-xl font-semibold">${song.name}</h1>` +
      "</div>";
  })
  imsgeAndNameAdd()
}

function punjabiSongs() {

  songs[3].forEach((song) => {
    document.querySelector(".punjabiSongCart").innerHTML = '<div id=3 class="songCart w-full py-3 px-5 flex items-center justify-between border-b-[1px] border-zinc-200">' +
      '<div class="w-16 h-16 rounded-full overflow-hidden bg-red-300">' +
      `<img src=${song.songUrl} class="w-full h-full object-cover" alt="songImage" />` +
      "</div>" +
      `<h1 class="text-xl font-semibold">${song.name}</h1>` +
      "</div>";
  })
  imsgeAndNameAdd()
}

function musicPlay() {
  var second = 0;
  var minutes = 0;
  pause.style.display = "block";
  play.style.display = "none";
  music.play();
  setInterval(function(){
    second++;
    if (second == 60) {
      second = 0;
      minutes++;
    }
    if (second < 10) {
      document.querySelector(".ltime").innerText = minutes + ":" + "0" + second;
    }else{
      document.querySelector(".ltime").innerText = minutes + ":" + second;
    }
    if (minutes == son[0].minutes && second == son[0].second) {
      musicPause();
      
    }
    range.value = minutes*60 + second;
    range.max = Number(son[0].minutes)*60 + Number(son[0].second);
    range.min = 0;
  },1000)
}

function musicPause() {
  pause.style.display = "none";
  play.style.display = "block";
  music.pause();
}

function playAndPause() {
  play.addEventListener("click", function() {
    musicPlay();
  });

  pause.addEventListener("click", function() {
    musicPause();
  });
}

function forward() {
  index++;
  var slide = songs.filter((slide) => {
    return slide.id == index;
  });
  if (index < sliderArr.length - 1) {
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  } else if (index == sliderArr.length - 1 || index == sliderArr.length) {
    index = -1;
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  }
}

function backward() {
  index--;
  var slide = songs.filter((slide) => {
    return slide.id == index;
  });
  if (index >= 0) {
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  } else if (index < 0) {
    index = sliderArr.length - 1;
    if (index == 3) {
      console.log(sliderArr[3], index);
      h1.innerHTML = sliderArr[3].title;
      img.src = sliderArr[3].imgUrl;
      music.src = slide[0].musicUrl;
      musicPlay();
    } else {
      h1.innerHTML = slide[0].title;
      img.src = slide[0].imgUrl;
      music.src = slide[0].musicUrl;
      musicPlay();
    }
  }
}

function forWardAndBackWardBtn() {
  document.querySelector(".rightArrow").addEventListener("click", function() {
    console.log("forward");
    forward();
  });

  document.querySelector(".leftArrow").addEventListener("click", function() {
    console.log("backward");
    backward();
  });
}






menuAnimation();
bengaliSongs();
hindiSongs();
englishSongs();
punjabiSongs();
playAndPause();
forWardAndBackWardBtn();
