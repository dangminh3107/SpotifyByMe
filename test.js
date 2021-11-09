function convert(sec) {
    var hour,minute,second;

    hour = Math.floor(sec / 3600);
    temp = (sec / 3600)*60;
    minute = parseInt((sec / 3600) * 60);
    second = Math.round((temp - minute)*60)


    return JSON.stringify({hour,minute,second})
}

function secondsToTime(value) {
    
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours = hours === 0 ? "" : hours + ":"}
    if (minutes < 10) {minutes = hours === "" ? minutes : "0" + minutes} 
    if (seconds < 10) {seconds = "0" + seconds}

    return hours + minutes +':'+ seconds; 
}
var a = secondsToTime(7400);
console.log(a);

function setHeader([libHeader, libHdisplay], [headerSearch, headerSdisplay], 
    [subHeaderTop, subTopdisplay], [subHeaderOverlay, subOverlay], [subHeaderTitle, subTitledisplay], 
    [subHeaderBottom, subBottom], [playBtnHeader, playHeaddisplay], [playBtnRandomHeader, playRHeaddisplay]) {
        libHeader.style.display = libHdisplay;
        headerSearch.style.display = headerSdisplay;
        subHeaderTop.style.display = subTopdisplay;
        subHeaderOverlay.style.opacity = subOverlay.opacity;
        subHeaderOverlay.style.display = subOverlay.display;
        subHeaderOverlay.style.backgroundColor = subOverlay.backgroundColor;
        subHeaderTitle.style.display = subTitledisplay;
        subHeaderBottom.style.opacity = subBottom.opacity;
        subHeaderBottom.style.display = subBottom.display;
        playBtnHeader.style.display = playHeaddisplay;
        playBtnRandomHeader.style.display = playRHeaddisplay;
}