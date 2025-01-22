const employee = [
  {
    "id": "E001",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123",
    "task": {
      "active": true,
      "date": "2025-01-23",
      "heading": "Project Report Submission",
      "description": "Make a youtubeeeeeee videoooooo and do your home work",
      "newTask": true,
      "completed": false,    
      "accepted": false,      
      "failed": false     
    }
  },
  {
    "id": "E002",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "123",
    "task": {
      "active": true,
      "date": "2025-01-20",
      "heading": "Team Meeting",
      "description": "Attend the weekly team meeting for project updates.",
      "newTask": false,
      "completed": false,
      "accepted": true,
      "failed": false
    }
  },
  {
    "id": "E003",
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "password": "123",
    "task": {
      "active": false,
      "date": "2025-01-22",
      "heading": "Bug Fixing",
      "description": "Fix critical bugs reported by the testing team.",
      "newTask": false,
      "completed": true,
      "accepted": false,
      "failed": false
    }
  },
  {
    "id": "E004",
    "name": "Alice Brown",
    "email": "alice.brown@example.com",
    "password": "123",
    "task": {
      "active": true,
      "date": "2025-01-18",
      "heading": "Prepare Presentation",
      "description": "Prepare a presentation for the upcoming client meeting.",
      "newTask": true,
      "completed": false,
      "accepted": false,
      "failed": false
    }
  },
  {
    "id": "E005",
    "name": "Mike Davis",
    "email": "mike.davis@example.com",
    "password": "123",
    "task": {
      "active": false,
      "date": "2025-01-24",
      "heading": "Code Review",
      "description": "Review the code submitted by the team members.",
      "newTask": false,
      "completed": false,
      "accepted": false,
      "failed": true
    }
  }
];

const admin = [
  {
    "id": "A001",
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
]

const data = {
  "newTask": "1",
  "completed": "2",
  "failed": "0",
  "accepted": "3"
}

export function getLocalStorage(){
 const employeeData = JSON.parse(localStorage.getItem("employee"));
 const adminData = JSON.parse(localStorage.getItem("admin"));
 const data = JSON.parse(localStorage.getItem("data"));
    return {employeeData,adminData,data};
}

export function setLocalStorage(){
  localStorage.setItem("employee",JSON.stringify(employee));
  localStorage.setItem("admin",JSON.stringify(admin));
  localStorage.setItem("data",JSON.stringify(data));
}
// setLocalStorage()
