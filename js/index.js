
const today = new Date();
const thisYear = today.getFullYear();
const body = document.body;
const footer = document.createElement('footer');
footer.textContent = 'This is the footer content';
body.appendChild(footer);
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Salem. Amelo ${thisYear}`;
footer.appendChild(copyright);

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript file loaded'); 
    const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js", "Git/GitHub", "Responsive Design"];
    const skillsSection = document.getElementById('Skills'); 
    console.log('Skills Section:', skillsSection); 
     if (!skillsSection) {
        console.error('No element with id "Skills" found');
        return;
    }
   const skillsList = skillsSection.querySelector('ul');
    console.log('Skills List:', skillsList); 
    if (!skillsList) {
        console.error('No <ul> element found within the skills section');
        return;
    }
       for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }
});

