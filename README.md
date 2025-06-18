# Express Server with REST API

This project is a simple Express.js server demonstrating basic web routing and CRUD operations via REST API.

##  Project Structure

- `server.js` – Main Express server with endpoints for webpages and API routes.
- `test.rest` – Test file for using with REST Client extension in VS Code.

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/basic-backend-project.git
cd basic-backend-project
```

### 2. Install Packages and set up the server

```bash
npm install
npm run dev
```

Server will start on: http://localhost:8383



#### API Endpoints
| Method | Route       | Description                          |
| ------ | ----------- | ------------------------------------ |
| GET    | `/api/data` | Returns current user list            |
| POST   | `/api/data` | Adds a new user (JSON body required) |
| DELETE | `/api/data` | Removes the last user from the list  |

