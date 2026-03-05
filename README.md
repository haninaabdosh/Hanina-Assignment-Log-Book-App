# Hanina Assignment Log Book App

REST API built with Next.js for managing assignments.

## How to Run
```bash
npm install
npm run dev
```
Open http://localhost:3000/docs for API documentation

## API Design Table

| Endpoint | Method | Description | Body Request | Body Response |
|---|---|---|---|---|
| /api/assignments | GET | Get list of all assignments | - | [{id, title, description, status}] |
| /api/assignments | POST | Create new assignment | {"title":"", "description":"", "status":""} | {id, title, description, status} |
| /api/assignments/:id | GET | Get detail of one assignment | - | {id, title, description, status} |
| /api/assignments/:id | PUT | Update an assignment | {"title":"", "status":""} | {id, title, description, status} |
| /api/assignments/:id | DELETE | Delete an assignment | - | {"message":"Deleted successfully"} |

## Testing Table

| Endpoint | Method | Scenario | Requirement | Expected Output | Actual Output | Status |
|---|---|---|---|---|---|---|
| /api/assignments | GET | Success | No input needed | 200 + array of assignments | 200 + array of assignments | PASS |
| /api/assignments | POST | Success | Send {title, description, status} | 201 + new assignment object | 201 + new assignment object | PASS |
| /api/assignments | POST | Error | Send body without title | 400 + {error: "Title is required"} | 400 + {error: "Title is required"} | PASS |
| /api/assignments/:id | GET | Success | id = 1 | 200 + assignment detail | 200 + assignment detail | PASS |
| /api/assignments/:id | GET | Error | id = 65 | 404 + {error: "Assignment not found"} | 404 + {error: "Assignment not found"} | PASS |
| /api/assignments/:id | PUT | Success | id = 1, send {status: "done"} | 200 + updated assignment | 200 + updated assignment | PASS |
| /api/assignments/:id | PUT | Error | id = 50 | 404 + {error: "Assignment not found"} | 404 + {error: "Assignment not found"} | PASS |
| /api/assignments/:id | DELETE | Success | id = 2 | 200 + {message: "Deleted successfully"} | 200 + {message: "Deleted successfully"} | PASS |
| /api/assignments/:id | DELETE | Error | id = 25 | 404 + {error: "Assignment not found"} | 404 + {error: "Assignment not found"} | PASS |
```
```