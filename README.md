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

## Project Structure

github-api-app/
┣ src/
┃ ┣ api.js # Handles all external GitHub REST API calls using Axios
┃ ┣ cache.js # Manages reading from and writing to local cache.json
┃ ┣ server.js # Main Express application setup and route definitions
┃ ┗ cli.js (optional) # Command-Line Interface functionality
┣ cache.json # Local storage file for fetched repository data
┣ package.json # Project dependencies and npm scripts
┗ README.md # Project documentation (this file)
