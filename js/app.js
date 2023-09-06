// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement("audio");

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "Love Really Hurts Without You",
    artist: "Billy Ocean",
    image: "imgs/BillyOcean-LoveReallyHurtsWithoutYou.jpeg",
    path: "audio/BillyOcean-LoveReallyHurtsWithoutYou.mp4",
  },
  {
    name: "Old Time Rock n Roll",
    artist: "Bob Seger",
    image: "imgs/BobSeger-OldTimeRockAndRoll.jpeg",
    path: "audio/BobSeger-OldTimeRockAndRoll.mp4",
  },
  {
    name: "Lonely World",
    artist: "Dion",
    image: "imgs/Dion-LonelyWorld.jpeg",
    path: "audio/Dion-LonelyWorld.mp4",
  },
  {
    name: "L-O-V-E",
    artist: "Nat King Cole",
    image: "imgs/NatKingCole-LOVE.jpeg",
    path: "audio/NatKingCole-LOVE.mp4",
  },
  {
    name: "Be My Baby",
    artist: "The Ronettes",
    image: "imgs/TheRonettes-BeMyBaby.jpeg",
    path: "audio/TheRonettes-BeMyBaby.mp4",
  },
  {
    name: "Sing Me An Old Fashioned Song",
    artist: "Billie Jo Spears",
    image: "imgs/BillieJoSpears-SingMeAnOldFashionedSong.jpeg",
    path: "audio/BillieJoSpears-SingMeAnOldFashionedSong.mp4",
  },
  {
    name: "Rose Garden",
    artist: "Lynn Anderson",
    image: "imgs/LynnAnderson-RoseGarden.jpeg",
    path: "audio/LynnAnderson-RoseGarden.mp4",
  },
  {
    name: "Cry To Me",
    artist: "Solomon Burke",
    image: "imgs/SolomonBurke-CryToMe.jpeg",
    path: "audio/SolomonBurke-CryToMe.mp4",
  },
  {
    name: "Only You (And You Alone)",
    artist: "The Platters",
    image: "imgs/ThePlatters-OnlyYou.jpeg",
    path: "audio/ThePlatters-OnlyYou.mp4",
  },
  {
    name: "Will You Still Love Me Tomorrow?",
    artist: "The Shirelles",
    image: "imgs/TheShirelles-WillYouStillLoveMeTomorrow.jpeg",
    path: "audio/TheShirelles-WillYouStillLoveMeTomorrow.mp4",
  },
  {
    name: "Tie A Yellow Ribbon Round The Ole Oak Tree",
    artist: "Dawn",
    image: "imgs/Dawn-TieAYellowRibbonRoundTheOleOakTree.jpeg",
    path: "audio/Dawn-TieAYellowRibbonRoundTheOleOakTree.mp4",
  },
  {
    name: "Goodbye Yellow Brick Road",
    artist: "Elton John",
    image: "imgs/EltonJohn-GoodbyeYellowBrickRoad.jpeg",
    path: "audio/EltonJohn-GoodbyeYellowBrickRoad.mp4",
  },
  {
    name: "(Now And Then There's) A Fool Such As I",
    artist: "Elvis Presley",
    image: "imgs/ElvisPresley-AFoolSuchAsI.jpeg",
    path: "audio/ElvisPresley-AFoolSuchAsI.mp4",
  },
  {
    name: "That's Life",
    artist: "Frank Sinatra",
    image: "imgs/FrankSinatra-ThatsLife.jpeg",
    path: "audio/FrankSinatra-ThatsLife.mp4",
  },
  {
    name: "Oh Carol",
    artist: "Smokie",
    image: "imgs/Smokie-OhCarol.jpeg",
    path: "audio/Smokie-OhCarol.mp4",
  },
  {
    name: "Don't Play That Song",
    artist: "Aretha Franklin",
    image: "imgs/ArethaFranklin-DontPlayThatSong.jpeg",
    path: "audio/ArethaFranklin-DontPlayThatSong.mp4",
  },
  {
    name: "Macho Man",
    artist: "Village People",
    image: "imgs/VillagePeople-MachoMan.jpeg",
    path: "audio/VillagePeople-MachoMan.mp4",
  },
  {
    name: "Rötter",
    artist: "Lasse Tennander",
    image: "imgs/LasseTennander-Rötter.jpeg",
    path: "audio/LasseTennander-Rötter.mp4",
  },
  {
    name: "Achy Breaky Heart",
    artist: "Billy Ray Cyrus",
    image: "imgs/BillyRayCyrus-AchyBreakyHeart.jpeg",
    path: "audio/BillyRayCyrus-AchyBreakyHeart.mp4",
  },
  {
    name: "Non, Je Ne Regrette Rien",
    artist: "Edith Piaf",
    image: "imgs/EdithPiaf-NonJeNeRegretteRien.jpeg",
    path: "audio/EdithPiaf-NonJeNeRegretteRien.mp4",
  },
  {
    name: "Unchain My Heart",
    artist: "Joe Cocker",
    image: "imgs/JoeCocker-UnchainMyHeart.jpeg",
    path: "audio/JoeCocker-UnchainMyHeart.mp4",
  },
  {
    name: "She's In Love With You",
    artist: "Suzi Quatro",
    image: "imgs/SuziQuatro-ShesInLoveWithYou.jpeg",
    path: "audio/SuziQuatro-ShesInLoveWithYou.mp4",
  },
  {
    name: "I'm On My Way",
    artist: "The Proclaimers",
    image: "imgs/TheProclaimers-ImOnMyWay.jpeg",
    path: "audio/TheProclaimers-ImOnMyWay.mp4",
  },
  {
    name: "Atlantis Is Calling (S.O.S For Love)",
    artist: "Modern Talking",
    image: "imgs/ModernTalking-AtlantisIsCalling.jpeg",
    path: "audio/ModernTalking-AtlantisIsCalling.mp4",
  },
  {
    name: "Fading Like A Flower",
    artist: "Roxette",
    image: "imgs/Roxette-FadingLikeAFlower.jpeg",
    path: "audio/Roxette-FadingLikeAFlower.mp4",
  },
];

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  random_bg_color();
}

function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color with the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  // Set the background to the new color
  document.body.style.background = bgColor;
}

// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);
