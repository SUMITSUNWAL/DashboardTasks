const employee = [
  {
    "id": "E001",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123",
    "workSummary": {
      "completed": 15,
      "failed": 2,
      "currentlyWorkingOn": 2
    }
  },
  {
    "id": "E002",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "123",
    "workSummary": {
      "completed": 25,
      "failed": 1,
      "currentlyWorkingOn": 3
    }
  },
  {
    "id": "E003",
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "password": "123",
    "workSummary": {
      "completed": 10,
      "failed": 5,
      "currentlyWorkingOn": 1
    }
  },
  {
    "id": "E004",
    "name": "Alice Brown",
    "email": "alice.brown@example.com",
    "password": "123",
    "workSummary": {
      "completed": 20,
      "failed": 3,
      "currentlyWorkingOn": 4
    }
  },
  {
    "id": "E005",
    "name": "Mike Davis",
    "email": "mike.davis@example.com",
    "password": "123",
    "workSummary": {
      "completed": 18,
      "failed": 4,
      "currentlyWorkingOn": 2
    }
  },
  {
    "id": "E006",
    "name": "Sarah Connor",
    "email": "sarah.connor@example.com",
    "password": "123",
    "workSummary": {
      "completed": 30,
      "failed": 0,
      "currentlyWorkingOn": 5
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

const task = [{
  "active": true,
  "Catogary": "Phir Hera Pheri",
  "date": "2025-01-23",
  "heading": "Project Report Submission",
  "description": "Make a youtubeeeeeee videoooooo and do your home work",
  "newTask": true,
  "completed": false,    
  "accepted": false,      
  "failed": false     
},{
  "active": true,
  "Catogary": "Mobile Dev",
  "date": "2025-01-20",
  "heading": "Team Meeting",
  "description": "Attend the weekly team meeting for project updates.",
  "newTask": false,
  "completed": false,
  "accepted": true,
  "failed": false
}, {
      "active": false,
      "Catogary": "Socket Io",
      "date": "2025-01-22",
      "heading": "Bug Fixing",
      "description": "Fix critical bugs reported by the testing team.",
      "newTask": false,
      "completed": true,
      "accepted": false,
      "failed": false
    },{
      "active": true,
      "date": "2025-01-18",
      "Catogary": "Yh pata nehe",
      "heading": "Prepare Presentation",
      "description": "Prepare a presentation for the upcoming client meeting.",
      "newTask": true,
      "completed": false,
      "accepted": false,
      "failed": false
    }, {
      "active": false,
      "date": "2025-01-24",
      "Catogary": "Udta ter",
      "heading": "Code Review",
      "description": "Review the code submitted by the team members.",
      "newTask": false,
      "completed": false,
      "accepted": false,
      "failed": true
    },{
      "active": false,
      "date": "2025-01-24",
      "Catogary": "Dev",
      "heading": "Code Crash",
      "description": "Review the code submitted by the other team members.",
      "newTask": false,
      "completed": false,
      "accepted": false,
      "failed": true
    }
]

export function getLocalStorage(){
 const employeeData = JSON.parse(localStorage.getItem("employee"));
 const adminData = JSON.parse(localStorage.getItem("admin"));
 const data = JSON.parse(localStorage.getItem("data"));
 const task = JSON.parse(localStorage.getItem("task"));
    return {employeeData,adminData,data,task};
}

export function setLocalStorage(){
  localStorage.setItem("employee",JSON.stringify(employee));
  localStorage.setItem("admin",JSON.stringify(admin));
  localStorage.setItem("data",JSON.stringify(data));
  localStorage.setItem("task",JSON.stringify(task));
}
// setLocalStorage()
// localStorage.clear()
