function displayProject(divID) {
    // var projectDisplaySection = document.getElementById("overallProjects");

    var projectDetails = document.getElementById(divID);
    // projectDetails becomes hidden if unhidden and vice versa
    toggleVisibility(projectDetails);
    if(checkUnhiddenAmount() > 1) {
        removeContent();
        toggleVisibility(projectDetails);
    }
}

function checkUnhiddenAmount() {
    let count = 0;
    for (let i = 1; i <= 6; i++) {
        let getProjectId = document.getElementById("project" + i);
        if (getProjectId.classList.contains('unhidden')) {
            count++;
        }
    }
    return count;
}

function removeContent() {
    for (let i = 1; i <= 6; i++) {
        let getProjectId = document.getElementById("project" + i);
        if (getProjectId.classList.contains('unhidden')) {
            getProjectId.className = 'hidden';
        }
    }
}

function toggleVisibility(projectDetails) {
    if (projectDetails) {
        projectDetails.className = (projectDetails.className == 'hidden') ?
        'unhidden' : 'hidden';
    }
}