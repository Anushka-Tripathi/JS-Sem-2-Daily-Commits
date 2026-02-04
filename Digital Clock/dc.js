// Create a new paragraph element
const para = document.createElement("p");
para.textContent = "This is a dynamically added paragraph.";
console.log(para);

// Append the paragraph to the content div
document.getElementById("content").appendChild(para);

// Remove the paragraph element
document.querySelector("#content p").remove();

// Create a new image element
const image = document.createElement("img");
image.setAttribute("src", "https://1.bp.blogspot.com/-XA0Z0_dhDG0/YPVRNhpT7ZI/AAAAAAAAByI/qAlpNExdCsMP5-SdzHCNTRxKNqxvjy6OwCLcBGAsYHQ/w1200-h630-p-k-no-nu/javascript.jpg");
image.setAttribute("alt", "Javascript Image");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);

// DOM Traversal Properties
setInterval(() => {

    let date = new Date();
    console.log(date);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const clock = document.getElementById("digi-clock");
    clock.textContent = `${hours}:${minutes}:${seconds}`;

}, 1000);