import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    Employee in = new Employee();
    Scanner inp = new Scanner(System.in);
    System.out.println("Enter employee number: ");
    int n = inp.nextInt();
    System.out.println("Enter employee salary: ");
    float salar = inp.nextFloat();
    in.setId(n);
    in.setSalary(salar);
    in.display();
    }
}
