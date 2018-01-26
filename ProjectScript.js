function displayProject(divID) {
    var projectDetails = document.getElementById(divID);
    // projectDetails becomes hidden if unhidden and vice versa
    if (projectDetails) {
        projectDetails.className = (projectDetails.className=='hidden') ?
        'unhidden' : 'hidden';
    }
}