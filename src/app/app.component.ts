import { Component, OnInit } from '@angular/core';
import { iCricket,  iperson,  products, users} from 'src/shared/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
public productName : string = "string interpolation property";
public productID : string= "12345";

public productProp = " property binding example";

public skillName :string = "love front end dev"

public pic : string = "data:image/jpeg;base64,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"
public isdisabled : boolean = true
ngOnInit(): void {
  setTimeout(() => {
    this.isdisabled = !this.isdisabled
  }, 4000);
}
  person : Array<iperson> =[
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
    { id: 4, name: 'Bob White', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'Admin' }
  ]
 
   cricketers : Array<iCricket> = [
    {
      name: "Sachin Tendulkar",
      country: "India",
      odiDebut: "18 December 1989",
      matches: 463,
      runs: 18426,
      highestScore: 200,
      centuries: 49,
      fifties: 96,
      battingAverage: 44.83,
      wickets: 154
    },
    {
      name: "Virat Kohli",
      country: "India",
      odiDebut: "18 August 2008",
      matches: 292,
      runs: 13848,
      highestScore: 183,
      centuries: 50,
      fifties: 72,
      battingAverage: 58.67,
      wickets: 4
    },
    {
      name: "MS Dhoni",
      country: "India",
      odiDebut: "23 December 2004",
      matches: 350,
      runs: 10773,
      highestScore: 183,
      centuries: 10,
      fifties: 73,
      battingAverage: 50.57,
      wickets: 1
    },
    {
      name: "Rohit Sharma",
      country: "India",
      odiDebut: "23 June 2007",
      matches: 262,
      runs: 10709,
      highestScore: 264,
      centuries: 31,
      fifties: 55,
      battingAverage: 49.1,
      wickets: 10
    },
    {
      name: "Yuvraj Singh",
      country: "India",
      odiDebut: "3 October 2000",
      matches: 304,
      runs: 8701,
      highestScore: 150,
      centuries: 14,
      fifties: 52,
      battingAverage: 36.56,
      wickets: 111
    },
    {
      name: "Sourav Ganguly",
      country: "India",
      odiDebut: "11 January 1992",
      matches: 311,
      runs: 11363,
      highestScore: 183,
      centuries: 22,
      fifties: 72,
      battingAverage: 41.02,
      wickets: 100
    },
    {
      name: "Kapil Dev",
      country: "India",
      odiDebut: "1 October 1978",
      matches: 225,
      runs: 3783,
      highestScore: 175,
      centuries: 1,
      fifties: 14,
      battingAverage: 23.79,
      wickets: 253
    },
    {
      name: "Rahul Dravid",
      country: "India",
      odiDebut: "3 April 1996",
      matches: 344,
      runs: 10889,
      highestScore: 153,
      centuries: 12,
      fifties: 83,
      battingAverage: 39.16,
      wickets: 4
    },
    {
      name: "Virender Sehwag",
      country: "India",
      odiDebut: "1 April 1999",
      matches: 251,
      runs: 8273,
      highestScore: 219,
      centuries: 15,
      fifties: 38,
      battingAverage: 35.05,
      wickets: 96
    },
     
    // International Cricketers
    {
      name: "Ricky Ponting",
      country: "Australia",
      odiDebut: "15 February 1995",
      matches: 375,
      runs: 13704,
      highestScore: 164,
      centuries: 30,
      fifties: 82,
      battingAverage: 42.03,
      wickets: 3
    },
    {
      name: "AB de Villiers",
      country: "South Africa",
      odiDebut: "2 February 2005",
      matches: 228,
      runs: 9577,
      highestScore: 176,
      centuries: 25,
      fifties: 53,
      battingAverage: 53.50,
      wickets: 7
    },
    {
      name: "Jacques Kallis",
      country: "South Africa",
      odiDebut: "9 January 1996",
      matches: 328,
      runs: 11579,
      highestScore: 139,
      centuries: 17,
      fifties: 86,
      battingAverage: 44.36,
      wickets: 273
    },
    {
      name: "Chris Gayle",
      country: "West Indies",
      odiDebut: "11 September 1999",
      matches: 301,
      runs: 10480,
      highestScore: 215,
      centuries: 25,
      fifties: 54,
      battingAverage: 37.83,
      wickets: 167
    },
    {
      name: "Brian Lara",
      country: "West Indies",
      odiDebut: "9 November 1990",
      matches: 299,
      runs: 10405,
      highestScore: 169,
      centuries: 19,
      fifties: 63,
      battingAverage: 40.48,
      wickets: 4
    },
    {
      name: "Kane Williamson",
      country: "New Zealand",
      odiDebut: "10 August 2010",
      matches: 161,
      runs: 6932,
      highestScore: 148,
      centuries: 13,
      fifties: 42,
      battingAverage: 47.60,
      wickets: 37
    },
    {
      name: "Ben Stokes",
      country: "England",
      odiDebut: "25 August 2011",
      matches: 122,
      runs: 3491,
      highestScore: 182,
      centuries: 5,
      fifties: 22,
      battingAverage: 40.47,
      wickets: 74
    },
   
  ];
  
  users: Array<users> = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
    { id: 4, name: 'Bob White', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'Admin' }
  ];
  
  
 products: Array<products>= [
  { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 102, name: 'Phone', price: 699, category: 'Electronics' },
  { id: 103, name: 'Shoes', price: 89, category: 'Fashion' },
  { id: 104, name: 'Watch', price: 150, category: 'Accessories' },
  { id: 105, name: 'Backpack', price: 50, category: 'Travel' }
];

 orders = [
  { orderId: 1001, user: 'John Doe', amount: 250, status: 'Pending' },
  { orderId: 1002, user: 'Jane Smith', amount: 480, status: 'Shipped' },
  { orderId: 1003, user: 'Alice Brown', amount: 120, status: 'Delivered' },
  { orderId: 1004, user: 'Bob White', amount: 320, status: 'Processing' },
  { orderId: 1005, user: 'Charlie Green', amount: 90, status: 'Cancelled' }
];

 employees = [
  { id: 201, name: 'Sam Wilson', department: 'HR', salary: 60000 },
  { id: 202, name: 'Diana Prince', department: 'Finance', salary: 75000 },
  { id: 203, name: 'Bruce Wayne', department: 'IT', salary: 90000 },
  { id: 204, name: 'Clark Kent', department: 'Marketing', salary: 65000 },
  { id: 205, name: 'Peter Parker', department: 'Sales', salary: 55000 }
];

 books = [
  { id: 301, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 302, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 303, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 304, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
  { id: 305, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];

 students = [
  { id: 401, name: 'Emma Johnson', grade: 'A', age: 16 },
  { id: 402, name: 'Liam Brown', grade: 'B', age: 17 },
  { id: 403, name: 'Olivia Davis', grade: 'A', age: 15 },
  { id: 404, name: 'Noah Wilson', grade: 'C', age: 16 },
  { id: 405, name: 'Ava Martinez', grade: 'B', age: 17 }
];

 cars = [
  { id: 501, brand: 'Toyota', model: 'Corolla', year: 2022 },
  { id: 502, brand: 'Honda', model: 'Civic', year: 2021 },
  { id: 503, brand: 'Ford', model: 'Mustang', year: 2020 },
  { id: 504, brand: 'Tesla', model: 'Model 3', year: 2023 },
  { id: 505, brand: 'BMW', model: 'X5', year: 2019 }
];

 transactions = [
  { id: 601, user: 'John Doe', amount: 100, type: 'Deposit' },
  { id: 602, user: 'Jane Smith', amount: 50, type: 'Withdrawal' },
  { id: 603, user: 'Alice Brown', amount: 200, type: 'Deposit' },
  { id: 604, user: 'Bob White', amount: 75, type: 'Withdrawal' },
  { id: 605, user: 'Charlie Green', amount: 150, type: 'Deposit' }
];

 movies = [
  { id: 701, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 702, title: 'Titanic', director: 'James Cameron', year: 1997 },
  { id: 703, title: 'Avatar', director: 'James Cameron', year: 2009 },
  { id: 704, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
  { id: 705, title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 }
];

 cities = [
  { id: 801, name: 'New York', country: 'USA', population: 8419600 },
  { id: 802, name: 'Tokyo', country: 'Japan', population: 37400068 },
  { id: 803, name: 'London', country: 'UK', population: 8982000 },
  { id: 804, name: 'Paris', country: 'France', population: 2148000 },
  { id: 805, name: 'Berlin', country: 'Germany', population: 3769000 }
];
 
}