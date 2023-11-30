# Hotel Management System Database Project

## Overview

This project is a comprehensive Hotel Management System that includes tables for room management, customer information, payments, and employee details. The database is designed to efficiently manage hotel-related data and operations.

## Table Structure

### Rooms Table

- RoomID (Primary Key)
- RoomNumber
- RoomType
- RoomStatus
- ...

### Customers Table

- CustomerID (Primary Key)
- FirstName
- LastName
- Email
- PhoneNumber
- ...

### Payments Table

- PaymentID (Primary Key)
- CustomerID (Foreign Key referencing Customers)
- Amount
- PaymentDate
- ...

### Employees Table

- EmployeeID (Primary Key)
- FirstName
- LastName
- Position
- ...

## Relationships

- **Customers and Rooms:** The Customers table is related to the Rooms table through the CustomerID foreign key.

- **Customers and Payments:** The Customers table is related to the Payments table through the CustomerID foreign key.

## Queries

### Room Queries

- Retrieve all available rooms.
- Retrieve room details based on room number.
- ...

### Payment Queries

- Retrieve all payments for a specific customer.
- Calculate the total revenue for a given period.
- ...

## ERD Diagram

![ERD Diagram](/project%20ERD.pdf)

## How to Use

    Database Setup:
        Create a new database.
        Execute the SQL script to create tables and relationships.

    Run Queries:
        Use the provided queries in the queries/ directory to interact with the database.

    Contribute:
        Fork the repository.
        Make changes and submit a pull request.
