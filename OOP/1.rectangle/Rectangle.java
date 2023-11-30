public class Rectangle {
    private double length;
    private double width;
    
    
    Rectangle(double length ,double width){
        this.length = length;
        this.width = width;
        
    }
    Rectangle(){
        length = 0;
        width = 0;
        
    }
    public void set_length(double x) {
        length=x;
        
    }
    public void set_width(double y) {
        width=y;
        
    }
    public double get_length() {
        return length;
    }
    public double get_width() {
        return width;
    }
    double calculateArea() {
        double Area=length*width;
                return Area;
    }
    double calculatePermeter() {
        double Perimeter=(length+width)*2;
                return Perimeter;
    }
    
    }