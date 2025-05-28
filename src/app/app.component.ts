import { Component } from '@angular/core';
import { iCricket,  iperson,  products, users} from 'src/shared/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

public product = "this is property binding example";




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