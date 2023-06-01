console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "city_ncs_released", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "unknown Brain x Rival", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Syn_Cole_-_Gizmo__NCS_Release_", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Heuse___Zeus_x_Crona_-_Pill__feat__Emma_Sa", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jim_Yosef_-_Link__NCS_Release_", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Janji Heroes Tonigh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Jo_Cohen___Sex_Whales_-_We_Are__NCS_Release", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Asketa___Natan_Chaim_Requenze", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Barren_Gates_-_Devil__NCS_Release_", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Cartoon_-_Howling__Ft__Asena___NCS_Release_", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Cartoon_-_Why_We_Lose__feat__Coleman_", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Culture_Code_-_Make_Me_Move__feat__Karr", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Diamond_Eyes_-_Everything__NCS_Release_", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Different_Heaven___EH_DE_-_My_Heart__", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Disfigure_-_Blank__NCS_Release_", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Egzod___Maestro_Chives_-_Royalty__", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Electro-Light_-_Symbolism__NCS_Release_", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Elektronomia_-_Energy__NCS_Release_", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Elektronomia_-_Limitless__NCS_Release_", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Elektronomia_-_sky_High_NCS_Release_", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Heuse___Zeus_x_Crona_-_Pill__", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "Janji_-_Heroes_Tonight__feat__", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Jim_Yosef_-_Link__NCS_Release_", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "JJD_-_Adventure__NCS_Release_", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "Jo_Cohen___Sex_Whales_-_We_Are_", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Johnning_-_WHAT_THE_HELL__NCS_Release_", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "JPB_-_High__NCS_Release_", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "Julius_Dreisig___Zeus_X_Crona_", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "Laszlo_-_Fall_To_Light__NCS_Release_", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "Lemon_Fight_-_Stronger__", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {songName: "Lost_Sky_-_Dreams_pt__II__feat_", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {songName: "Lost_Sky_-_Fearless_pt_II__feat__", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
    {songName: "Lost_Sky_-_Where_We_Started__feat__J", filePath: "songs/36.mp3", coverPath: "covers/36.jpg"},
    {songName: "Robin_Hustin_x_TobiMorrow_-_Light_It_", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {songName: "Sub_Urban_-_Cradles__NCS_Release_", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {songName: "Syn_Cole_-_Feel_Good__NCS_Release_", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {songName: "Syn_Cole_-_Gizmo__NCS_Release_", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {songName: "Unknown_Brain_-_MATAFAKA__feat__Mar", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {songName: "Unknown_Brain_-_Superhero__feat__Chr", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {songName: "Unknown_Brain_-_Why_Do_I___feat__Bri_", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},
    {songName: "Unknown_Brain_x_Rival_-_Control__f", filePath: "songs/44.mp3", coverPath: "covers/44.jpg"},
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/45.mp3", coverPath: "covers/45.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=44){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})