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
      <p class="language">${repo.language || ""}</p>
      <a href="${repo.html_url}" target="_blank">View on GitHub &rarr; </a>`;

      reposContainer.appendChild(repoInfoDiv);
    }
  })
  .catch((error) => {
    console.error(error);
  });
