const employee = [
  {
    "id": "E001",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123"
  },
  {
    "id": "E002",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "123"
  },
  {
    "id": "E003",
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "password": "123"
  },
  {
    "id": "E004",
    "name": "Alice Brown",
    "email": "alice.brown@example.com",
    "password": "123"
  },
  {
    "id": "E005",
    "name": "Mike Davis",
    "email": "mike.davis@example.com",
    "password": "123"
  }
]

const admin = [
  {
    "id": "A001",
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
]

export function getLocalStorage(){
 const employeeData = JSON.parse(localStorage.getItem("employee"));
 const adminData = JSON.parse(localStorage.getItem("admin"));
    return {employeeData,adminData};
}

export function setLocalStorage(){
  localStorage.setItem("employee",JSON.stringify(employee));
  localStorage.setItem("admin",JSON.stringify(admin));
}