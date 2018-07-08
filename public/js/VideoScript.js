function displayTab(divID) {
    // var videoDisplaySection = document.getElementById("overallvideos");

    var videoDetails = document.getElementById(divID);
    // videoDetails becomes hidden if unhidden and vice versa
    toggleVisibility(videoDetails);
    if(checkUnhiddenAmount() > 1) {
        removeContent();
        toggleVisibility(videoDetails);
    }
}

// Returns the amount of video divs that are unhidden
function checkUnhiddenAmount() {
    let count = 0;
    for (let i = 1; i <= 2; i++) {
        let getVideoId = document.getElementById("video" + i);
        if (getVideoId.classList.contains('unhidden')) {
            count++;
        }
    }
    return count;
}

function removeContent() {
    for (let i = 1; i <= 2; i++) {
        let getVideoId = document.getElementById("video" + i);
        if (getVideoId.classList.contains('unhidden')) {
            getVideoId.className = 'hidden';
        }
    }
}

function toggleVisibility(videoDetails) {
    if (videoDetails) {
        videoDetails.className = (videoDetails.className == 'hidden') ?
        'unhidden' : 'hidden';
    }
}