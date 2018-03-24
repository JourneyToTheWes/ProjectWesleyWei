let workExperienceTab = document.getElementById("work-experience-tab");
let skillsTab = document.getElementById("skills-tab");
let leadershipTab = document.getElementById("leadership-tab");
let honorsAndAwardsTab = document.getElementById("honors-and-awards-tab");

function displayResumePortion(section) {
    let work = document.getElementById("work-experience-section");
    let skills = document.getElementById("skills-section");
    let leadership = document.getElementById("leadership-section");
    let honorsAndAwards = document.getElementById("honors-and-awards-section");
    if (section === "work") {
        work.classList.remove("hidden");
        skills.classList.add("hidden");
        leadership.classList.add("hidden");
        honorsAndAwards.classList.add("hidden");
    } else if (section === "skills") {
        skills.classList.remove("hidden");
        work.classList.add("hidden");
        leadership.classList.add("hidden");
        honorsAndAwards.classList.add("hidden");
    } else if (section === "leadership") {
        leadership.classList.remove("hidden");
        work.classList.add("hidden");
        skills.classList.add("hidden");
        honorsAndAwards.classList.add("hidden");
    } else {
        honorsAndAwards.classList.remove("hidden");
        work.classList.add("hidden");
        skills.classList.add("hidden");
        leadership.classList.add("hidden");
    }
}

workExperienceTab.addEventListener('click', function(evt) {
    evt.preventDefault();
    displayResumePortion("work")
});
skillsTab.addEventListener('click', function(evt) {
    evt.preventDefault();
    displayResumePortion("skills")
});
leadershipTab.addEventListener('click', function(evt) {
    evt.preventDefault();
    displayResumePortion("leadership")
});
honorsAndAwardsTab.addEventListener('click', function(evt) {
    evt.preventDefault();
    displayResumePortion("honorsAndAwards")
});


