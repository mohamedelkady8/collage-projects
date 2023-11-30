public class Main {
    public static void main(String[] args) {
        Time first , second , third , fourth;
        first = new Time(8,55,20);
        second = new Time(18 , 19 , 45);
        third = new Time();
        third.timepassed(first, second);
        third.display();
        fourth = new Time(5 , 22 , 30);
        fourth.gethours();
        fourth.display();
        first.getminutes();
        second.getseconds();
    }
}