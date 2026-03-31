// SIGNUP
function signup() {
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Signup successful!");
window.location.href = "login.html";
}


// LOGIN
function login() {
let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");

if (email === storedEmail && password === storedPassword) {
window.location.href = "dashboard.html";
} else {
alert("Invalid login");
}
}


// LOGOUT
function logout() {
window.location.href = "login.html";
}


// CAREER PREDICTION
function predictCareer() {

let skills = document.getElementById("skills").value.toLowerCase();
let interests = document.getElementById("interests").value.toLowerCase();

let career = "";

if (skills.includes("coding") && interests.includes("ai")) {
career = "AI Engineer";
}
else if (skills.includes("coding")) {
career = "Software Developer";
}
else if (skills.includes("design")|| interests.includes("art")){
    career = "UI/UX Designer";
}
else if (skills.includes("medical")){
    career= "Medical Field";
}
else {
career = "General Career";
}

localStorage.setItem("career", career);

window.location.href = "career.html";
}

let title = document.getElementById("careerTitle");
let details = document.getElementById("careerDetails");

if(title){

let career = localStorage.getItem("career");

title.innerText = career;

if (career === "Software Developer") {

details.innerHTML = `
<h3>Courses:</h3>
<ul>
<li>DSA</li>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<h3>Skills:</h3>
<ul>
<li>Problem Solving</li>
<li>Programming</li>
<li>Debugging</li>
<li>Git & GitHub</li>
<li>Database Basics</li>
</ul>

<h3>Jobs:</h3>
<ul>
<li>Frontend Developer</li>
<li>Backend Developer</li>
<li>Full Stack Developer</li>
</ul>
`;

}

else if (career === "AI Engineer") {

details.innerHTML = `
<h3>Courses:</h3>
<ul>
<li>Machine Learning</li>
<li>Python</li>
<li>Deep Learning</li>
<li>Data Science</li>
</ul>

<h3>Skills:</h3>
<ul>
<li>Python Programming</li>
<li>TensorFlow / PyTorch</li>
<li>Data Analysis</li>
<li>Model Building</li>
<li>Problem Solving</li>
</ul>

<h3>Jobs:</h3>
<ul>
<li>AI Engineer</li>
<li>ML Engineer</li>
<li>Data Scientist</li>
</ul>
`;

}
else if (career === "UI/UX Designer") {

details.innerHTML = `
<h3>Courses:</h3>
<ul>
<li>UI/UX Fundamentals</li>
<li>Figma</li>
<li>Adobe XD</li>
<li>Graphic Design</li>
</ul>

<h3>Skills:</h3>
<ul>
<li>Wireframing</li>
<li>Prototyping</li>
<li>User Research</li>
<li>Creativity</li>
<li>Visual Design</li>
</ul>

<h3>Jobs:</h3>
<ul>
<li>UI Designer</li>
<li>UX Designer</li>
<li>Product Designer</li>
</ul>
`;
}
else if (career === "Medical Field") {

details.innerHTML = `
<h3>Courses:</h3>
<ul>
<li>MBBS</li>
<li>BDS</li>
<li>B.Sc Nursing</li>
<li>B.Pharmacy</li>
</ul>

<h3>Skills:</h3>
<ul>
<li>Patient Care</li>
<li>Medical Knowledge</li>
<li>Communication</li>
<li>Diagnosis</li>
</ul>

<h3>Jobs:</h3>
<ul>
<li>Doctor</li>
<li>Nurse</li>
<li>Pharmacist</li>
<li>Lab Technician</li>
</ul>
`;
}


else{
details.innerHTML = "<p>No data</p>";
}

}

else{
    details.innerHTML = "<p>No data</p>";
}

function goBack(){
    window.location.href = "dashboard.html";
}