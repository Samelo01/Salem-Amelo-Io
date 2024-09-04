
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


const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(`Name: ${userName}`);
    console.log(`Email: ${userEmail}`);
    console.log(`Message: ${userMessage}`);
});
      
document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.forms['leave_message'];
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userName = event.currentTarget.usersName.value;
        const userEmail = event.currentTarget.usersEmail.value;
        const userMessage = event.currentTarget.usersMessage.value;

        console.log(`Name: ${userName}`);
        console.log(`Email: ${userEmail}`);
        console.log(`Message: ${userMessage}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.forms['leave_message'];

    if (!messageForm) {
        console.error('Form with name "leave_message" not found.');
        return;
    }

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userName = event.currentTarget.usersName.value;
        const userEmail = event.currentTarget.usersEmail.value;
        const userMessage = event.currentTarget.usersMessage.value;

        const messageSection = document.getElementById('messages');

        if (!messageSection) {
            console.error('Element with id "messages" not found.');
            return;
        }

        const messageList = messageSection.querySelector('ul');

        if (!messageList) {
            console.error('Unordered list not found within the messages section.');
            return;
        }

        const newMessage = document.createElement('li');
        newMessage.innerHTML = `
            <a href="mailto:${userEmail}">${userName}</a>
            <span> says: ${userMessage}</span>
        `;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', function() {
            const entry = removeButton.parentNode;
            entry.remove();

            if (messageList.children.length === 0) {
                messageSection.style.display = 'none';
            }
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageSection.style.display = 'block';
        messageForm.reset();
    });
});
