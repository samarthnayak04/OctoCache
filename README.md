# GitHub Repository Explorer

This project is a Node.js and Express based API integration task built using the public GitHub REST API.  
The application fetches public repository and issue data from GitHub, supports filtering, stores data in a local cache, and allows a detailed view of a selected item.

---

## Features

- Fetch public repositories from GitHub based on a username
- Filtering supported by:
  - Programming language
  - Minimum number of stars
- View issue data for any selected repository
- Local caching to reduce repeated API calls
- Single item detail retrieval using cached data
- Error handling for invalid input, network errors, and empty cache access

---

## Tech Stack

| Component   | Technology                |
| ----------- | ------------------------- |
| Runtime     | Node.js                   |
| Framework   | Express.js                |
| HTTP Client | Axios                     |
| Storage     | Local JSON (`cache.json`) |

---

---

## 📂 Project Structure

github-api-app/
├─ src/
│ ├─ api.js # Handles all external GitHub REST API calls using Axios
│ ├─ cache.js # Manages reading from and writing to local cache.json
│ ├─ server.js # Main Express application setup and route definitions
│ └─ cli.js # (optional) Command-Line Interface functionality
├─ cache.json # Local storage file for fetched repository data
├─ package.json # Project dependencies and npm scripts
└─ README.md # Project documentation (this file)

text

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone <YOUR_REPOSITORY_URL>
cd github-api-app

text

### 2. Install dependencies

npm install

text

### 3. Start the server

npm run start

text

(Optional, if using nodemon:)

npm run dev

text

---

## 🚀 API Endpoints

### 1. Root Status

**Endpoint:**

GET /

text

**Example Response:**

{ "status": "GitHub API Integration Running" }

text

---

### 2. Fetch Repositories (Supports Filtering)

**Endpoint:**

GET /repos?username=<github_user>&language=<optional>&stars=<optional>

text

| Parameter | Required | Description | Example |
|------------|-----------|-------------|----------|
| username | No | GitHub username (defaults to `vercel`) | `?username=microsoft` |
| language | No | Filter by programming language | `&language=JavaScript` |
| stars | No | Minimum star threshold | `&stars=1000` |

**Example Request:**

http://localhost:3000/repos?username=vercel&language=TypeScript&stars=500

text

---

### 3. Get Issues for a Repository

**Endpoint:**

GET /repo/:name/issues?username=<optional>

text

**Example:**

http://localhost:3000/repo/next.js/issues?username=vercel

text

---

### 4. Retrieve Single Cached Repository by Index

> Note: Must call `/repos` at least once before using this route.

**Endpoint:**

GET /item/0

text

**Example Output:**

{
"name": "next.js",
"language": "TypeScript",
"stargazers_count": 120000
}

text

---

## 💻 Example cURL Commands

curl "http://localhost:3000/repos?username=vercel"
curl "http://localhost:3000/repos?username=vercel&stars=5000"
curl "http://localhost:3000/repo/next.js/issues?username=vercel"
curl "http://localhost:3000/item/0"

text

---

## 🧩 Error Handling Summary

| Scenario | Expected Behavior |
|-----------|------------------|
| Invalid GitHub username | Returns structured JSON error |
| Cache not yet created | Asks user to call `/repos` first |
| Invalid item index | Returns `404 - Item not found` |
| API/network failure | Sends readable error message |

---

## 📝 Assumptions & Notes

- Only public GitHub repository data is used.
- No authentication (API key) is required.
- Cached data persists until overwritten by a new `/repos` request.
- Repository issue count may vary or be empty depending on the project.

---

## 🏁 Conclusion

This project demonstrates:
- API integration and data fetching from GitHub.
- Local caching for performance improvement.
- Modular architecture with Node.js and Express.
- Clear code organization and documentation.

---
