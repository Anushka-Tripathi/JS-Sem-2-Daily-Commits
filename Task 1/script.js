// DOM Manipulation

// Task 1: Profile Section Styling(ID)
const profileSection = document.getElementById('profile');
profileSection.style.padding = '15px';
profileSection.style.backgroundColor = '#93e8f5';
profileSection.style.textAlign = 'center';

// Task 2: Highlight Important Text(ClassName)
const highlight = document.getElementsByClassName('important');
for (let i = 0; i < highlight.length; i++) {
    highlight[i].style.color = '#d9534f';
    highlight[i].style.fontSize = '20px';
    console.log(`Total important elements: ${highlight.length}`);
}

