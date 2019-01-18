var playPauseButton = document.getElementById("play-pause");
playPauseButton.addEventListener("click", playFunc);
var audioTag = document.getElementById("myAudioTag");
var myIndexNum = 0; // 'cause 0 represents first array item
var listItem = document.getElementsByTagName("li");

/*var minutes = (audioTag.duration / 60);.... I need to learn more about the duration  property*/


function playFunc() {

audioTag.play();   //start playing whatever value is in the audio's src attribute.

playPauseButton.removeEventListener("click", playFunc); // so pauseFunc can work after the current function is invoked.
playPauseButton.style.fontSize = "2rem"; //pause button is too large otherwise
playPauseButton.innerHTML = "\| \|"; // "||" is the pause button.
playPauseButton.addEventListener("click", pauseFunc); //only listen for this function after playFunc was called. 

listItem[myIndexNum].style.color = "#d7d2d2";
//sets the track list color to its normal color once song is skipped. Note, track color only changes when forward or rewind is used. It's not changed when tapped. I'm yet to figure that one out.

}

function pauseFunc() {
	
audioTag.pause(); //pause audio.
playPauseButton.innerHTML = "\>";  //play button text "symbol".
playPauseButton.style.fontSize = "5rem"; //play button size.
playPauseButton.addEventListener("click", playFunc); //add back play function()
	
}

//end of play/pause button.


//start of previous and next buttons using arrays

//assign buttons
var prevButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");


//add event listeners to buttons
prevButton.addEventListener("click", previousFunc);
nextButton.addEventListener("click", nextFunc);

//WRITE THIS DOWN: If there's an event listener with a function that's not been written yet, it can come in the way of other functions. DO NOT HAVE UNDEFINED FUNCTIONS.

//soundtrack of album, random notes I recorded.
var musicTracksArr = [ 

    "tracks/COUNTRY-by-JK.mp3",
    "tracks/DANCE-by-JK.mp3",
    "tracks/PIANO-by-JK.mp3",
	"tracks/TRANCE-by-JK.mp3"
];

//art work (photo) of track. Thanks pixabay.com for providing the photos.
var trackArtArray = [

    "artTrack/01-less-than.jpg",
    "artTrack/02-if-only-photo.jpg",
    "artTrack/03-functional.jpg",
    "artTrack/04-aspire.jpg"


];

var trackTitleTag = document.getElementById("trackTitle");


var trackTitleArray = [
	
"Less Than by JaKup",
"If Only... by JaKup",
"Functional by JaKup",
"Desperate Aspirations by JaKup"

];

var imgTrackTag = document.getElementById("trackArtImgTag");



function nextFunc() {
	
    playFunc(); //call the play function
    myIndexNum++; // index number is now one more than it was before clicked next

    if (myIndexNum >= musicTracksArr.length) {
        myIndexNum = 0; //if you're on the last track, this function should take you to index [0], that is, the first track
       
    }
    //otherwise, the following assigns an array src based on original, or current, myIndexNum
	
    audioTag.src = musicTracksArr[myIndexNum]; //which as previously established, means one more than the number it was on before it's called, and 0 if it's at the last array member
	
    audioTag.play(); //play the song

    //img array src
    imgTrackTag.src = trackArtArray[myIndexNum];

   //track title array src
    trackTitleTag.innerHTML = trackTitleArray[myIndexNum];
	
listItem[myIndexNum].style.color = "#e2ab9a";


}



//invokes next func every time a song ends... so it loops through all songs 
audioTag.addEventListener("ended", nextFunc);



function previousFunc() {
	
 playFunc(); //so the state of the play/pause button is changed 

myIndexNum--; //whatever the index number before clicked, now it's one less
	
if (myIndexNum < 0) {
	
    myIndexNum = musicTracksArr.length-1; // last item in array. 
	// the "-1" is important because array length is always one more than number of items/indices

}

audioTag.src = musicTracksArr[myIndexNum];
audioTag.play();
imgTrackTag.src = trackArtArray[myIndexNum];
trackTitleTag.innerHTML = trackTitleArray[myIndexNum];
listItem[myIndexNum].style.color = "#e2ab9a";

}

//list of track names or songs

var liFirstSong = listItem[0]; //I previously defined listItme; it's NOT a JS property.
var liSecondSong = listItem[1];
var liThirdSong = listItem[2];
var liFourthSong = listItem[3];

liFirstSong.addEventListener("click", songOneFunc);
liSecondSong.addEventListener("click", songTwoFunc);
liThirdSong.addEventListener("click", songThreeFunc);
liFourthSong.addEventListener("click", songFourFunc);


function trackGeneralFunc(x) { 
	
	audioTag.src = musicTracksArr[x];
	playFunc(); 
	imgTrackTag.src = trackArtArray[x];
	trackTitleTag.innerHTML = trackTitleArray[x];	

}

//each function below passes a number as an argument, which is plugged into the trackGeneralFunc's x parameters and used to reference that array index number for audio, image, and title.

function songOneFunc() {
    
	trackGeneralFunc(0);
	
}


function songTwoFunc() {
    
	trackGeneralFunc(1);
	
	
}

function songThreeFunc() {
    
	trackGeneralFunc(2);
	
}

function songFourFunc() {
    
	trackGeneralFunc(3);
	
}







