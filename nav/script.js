fetch("https://api.github.com/users/diegot-code/repos")
  .then((Response) => Response.json())
  .then((data) => {
    //limit the number to 6

    const limitedData = data.slice(0, 6);
    //repo container var
    const reposConatiner = document.getElementById("reposContainer");
    //foreach loop
    for (let i = 0; i < limitedData.length; i++) {
      const repo = limitedData[i];

      const repoInfoDiv = document.createElement("div");

      //add a class
      repoInfoDiv.classList.add("repo-info");

      repoInfoDiv.innerHTML = `<h3>${repo.name}</h3>
      <p class="desc">${repo.description || ""}</p>
      <ul id="language-${repo.name}"></ul>
      <a href="${repo.html_url}" target="_blank">View on GitHub &rarr; </a>`;

      reposContainer.appendChild(repoInfoDiv);

      fetch(repo.languages_url)
        .then((Response) => Response.json())
        .then((langData) => {
          const langList = document.getElementById(`language-${repo.name}`);

          Object.keys(langData).forEach((language) => {
            const newLanguageEl = document.createElement("li");
            newLanguageEl.textContent = language;
            langList.appendChild(newLanguageEl);
          });
        });
    }
  })
  .catch((error) => {
    console.error(error);
  });
