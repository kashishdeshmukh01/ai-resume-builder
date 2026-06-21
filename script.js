function generateResume() {

    let name = document.getElementById("name").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;

    let photoInput = document.getElementById("photo");

    let photoURL = "";

    if (photoInput.files.length > 0) {
        photoURL = URL.createObjectURL(photoInput.files[0]);
    }

    document.getElementById("resume").innerHTML = `
        <img src="${photoURL}" width="120">

        <h2>${name}</h2>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Education</h3>
        <p>${education}</p>
    `;
}
function generateSummary(){

document.getElementById("summary").value =
"Motivated and enthusiastic student with strong problem-solving skills and interest in web development. Passionate about learning new technologies and building practical projects.";
}

function generateSummary(){

document.getElementById("summary").value =
"Motivated and enthusiastic student with strong problem-solving skills and interest in web development. Passionate about learning new technologies and building practical projects.";

}
