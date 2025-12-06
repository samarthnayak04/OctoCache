const express = require("express");
const { fetchUserRepos, fetchRepoIssues } = require("./api");
const { saveCache, readCache } = require("./cache");

const app = express();
const PORT = 3000;

app.get("/", (_, res) =>
  res.json({ status: "GitHub API Integration Running" })
);
app.get("/repos", async (req, res) => {
  const username = req.query.username || "vercel";
  const language = req.query.language;
  const minStars = req.query.stars ? parseInt(req.query.stars) : 0;

  try {
    let repos = await fetchUserRepos(username);

    if (language) repos = repos.filter((r) => r.language === language);
    repos = repos.filter((r) => r.stargazers_count >= minStars);

    saveCache({ username, repos });

    res.json({ count: repos.length, repos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/repo/:name/issues", async (req, res) => {
  const username = req.query.username || "vercel";

  try {
    const issues = await fetchRepoIssues(username, req.params.name);
    res.json({ repo: req.params.name, count: issues.length, issues });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/item/:id", (req, res) => {
  const cache = readCache();
  const id = parseInt(req.params.id);

  if (!cache || !cache.repos || cache.repos.length === 0) {
    return res
      .status(400)
      .json({ error: "Cache is empty. Call /repos first." });
  }

  if (isNaN(id) || id < 0 || id >= cache.repos.length) {
    return res.status(404).json({ error: "Invalid index. Item not found." });
  }

  res.json(cache.repos[id]);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
