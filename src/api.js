const axios = require("axios");

async function fetchUserRepos(username) {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { timeout: 5000 }
    );
    return res.data;
  } catch (err) {
    throw new Error("Error fetching repositories: " + err.message);
  }
}

async function fetchRepoIssues(username, repoName) {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/${username}/${repoName}/issues`,
      { timeout: 5000 }
    );
    return res.data;
  } catch (err) {
    throw new Error("Error fetching issues: " + err.message);
  }
}

module.exports = { fetchUserRepos, fetchRepoIssues };
