import java.util.*;

    class Employee {
  int id ; float salary;
  Employee() 
  {
    id = 0;
     salary = 0;
  }
  Employee(int i, float salar) 
  {
    id = i;
    salary = salar;
  }
  // geeetters
  int getId() 
  {
    return id;
  }
  float getSalary() 
  {
    return salary;
  }
  // setters
  void setId(int i) 
  {
    id = i;
  }
  void setSalary(float salar) 
  {
    salary = salar;
  }
  void display() 
  {
    System.out.println("Id: " + id + " Salary: " + salary);
  }
}

 
