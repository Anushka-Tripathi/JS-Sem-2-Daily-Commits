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

// Task 3: Paragraph Analyser(TagName)
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 === 0) {
        paragraphs[i].style.color = '#fa282c'; // Even paragraphs
    } else {
        paragraphs[i].style.color = '#b79df4'; // Odd paragraphs
    }
}
paragraphs[paragraphs.length - 1].style.fontWeight = 'bold'; // Last paragraph

// Task 4: First Match Modifier(QuerySelector) - change background color and change text to i am first box
const firstNote = document.querySelector('.note');
firstNote.style.backgroundColor = '#f7daad';
firstNote.style.padding = '10px';
firstNote.style.borderLeft = '5px solid #5bc0de';
firstNote.textContent = 'I am the first box';

// Task 5: All Matches Modifier(QuerySelectorAll)
const section = document.getElementById('task5-section');
const allNotes = section.querySelectorAll('p');

for(let i = 0; i < allNotes.length; i++) {
    allNotes[i].style.color = '#fab3e7';
}

// Task 6: Advanced Selection - innerText and innerHTML
const advancedSection = document.getElementById('guest');
console.log(advancedSection.innerText); // Logs text content without HTML tags
console.log(advancedSection.innerHTML); // Logs HTML content including tags