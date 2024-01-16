const projectContainerEl = document.querySelector(".project-container");

const projects = [
  {
    image: "image/project1.png",
    title: "APj abdul kalam",
    url: "./abdulkhalam/index.html",
  },
  {
    image: "image/project2.png",
    title: "job Application",
    url: "./Form/index.html",
  },
  {
    image: "image/project3.png",
    title: "parallex website",
    url: "./parallex/index.html",
  },
  {
    image: "image/project4.png",
    title: "developer page",
    url: "./developerpage/index.html",
  },
  {
    image: "image/project5.png",
    title: "Resturent-website",
    url: "./Resturent-website/index.html",
  },
  {
    image: "image/project6.png",
    title: "Music website",
    url: "./musicwebsite/index.html",
  },
  {
    image: "image/project7.png",
    title: "youtube clone",
    url: "./youtube-clone/index.html",
  },
  {
    image: "image/project8.png",
    title: "Document",
    url: "./js document/index.html",
  },
];

const showProjects = () => {
  let output = "";
  projects.forEach(
    ({ image, title, url }) =>
      (output += `
             <div class="grid-items">
              <div class="card">
                <img src="${image}" />
                <a href ='${url}' >
                <div class="card-content">
                  <h3>${title}</h3>
                </div>
                </a>              
                </div>
            </div>`)
  );

  projectContainerEl.innerHTML = output;
};
showProjects();
