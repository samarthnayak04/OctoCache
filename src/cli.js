const { fetchUserRepos } = require("./api");

(async () => {
  const username = process.argv[2] || "vercel";
  const repos = await fetchUserRepos(username);

  console.log(`Repositories for ${username}:`);
  repos.forEach((r, i) =>
    console.log(`${i + 1}. ${r.name} ⭐ ${r.stargazers_count}`)
  );
})();
