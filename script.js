document.getElementById('user-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userAge = document.getElementById('user-age').value;
    const userSkill = document.getElementById('user-skills').value;
    const userDescription = document.getElementById('user-description').value;
    const userExperience = document.getElementById('user-experience').value;
    const userNumber = document.getElementById('user-number').value;
    const userEmail = document.getElementById('user-email').value;

    const output = `<h1 class="heading">${userName}</h1>
    <p>Description:${userDescription}</p>
    <hr>
    <h4 class="resume-output">Age: ${userAge}</h4>
    <h4 class="resume-output">Skills: ${userSkill}</h4>
    <h4 class="resume-output">Experience: ${userExperience}</h4>
    <h4 class="resume-output">Contact Number: ${userNumber}</h4>
    <h4 class="resume-output">Email id: ${userEmail}</h4>
    <input type="button" value="Download Resume" class="button" id="download">
    `
    document.getElementById('resume-output').innerHTML = output;

    document.getElementById('download').addEventListener('click',()=>{
        document.getElementById('heading').style.display='none';
        document.getElementById('user-details').style.display='none';
        document.getElementById('download').style.display='none';
        window.print();
    })
})
