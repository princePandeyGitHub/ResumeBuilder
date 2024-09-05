document.getElementById('user-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userAge = document.getElementById('user-age').value;
    const userAddress = document.getElementById('user-address').value;
    const userGender = document.getElementById('user-gender').value;
    const userEducation = document.getElementById('user-education').value;
    const userProjects = document.getElementById('user-projects').value;
    const userSkill = document.getElementById('user-skills').value;
    const userDescription = document.getElementById('user-description').value;
    const userExperience = document.getElementById('user-experience').value;
    const userNumber = document.getElementById('user-number').value;
    const userEmail = document.getElementById('user-email').value;

    const output = `<h1 class="heading">${userName}</h1>
    <p>Description:${userDescription.replace(/\n/g, '<br>')}</p>
    <hr>
    <h3>Personal Information</h3>
    <h4 class="resume-output">Age: ${userAge}</h4>
    <h4 class="resume-output">Gender: ${userGender}</h4>
    <h4 class="resume-output">Address: ${userAddress}</h4>
    <h4 class="resume-output">Contact Number: ${userNumber}</h4>
    <h4 class="resume-output">Email id: ${userEmail}</h4>
    <hr>
    <h3>Skills and Experience</h3>
    <h4 class="resume-output">Skills: ${userSkill.replace(/\n/g, '<br>')}</h4>
    <h4 class="resume-output">Experience: ${userExperience}</h4>
    <hr>
    <h3>Education</h3>
    <h4 class="resume-output">${userEducation.replace(/\n/g, '<br>')}</h4>
    <hr>
    <h3>Projects</h3>
    <h4 class="resume-output">${userProjects.replace(/\n/g, '<br>')}</h4>
    <input type="button" value="Download Resume" class="button" id="download">
    <hr>
    `
    document.getElementById('resume-output').innerHTML = output;

    document.getElementById('download').addEventListener('click',()=>{
        document.getElementById('heading').style.display='none';
        document.getElementById('user-details').style.display='none';
        document.getElementById('download').style.display='none';
        window.print();
    })
})
