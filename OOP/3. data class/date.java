
class Date {
String month , day , year ;

    Date()
        {
            month = day = year = null;
        }
    Date(String month , String day , String year)
        {
            this.month = month;
            this.day = day;
            this.year = year;
        }
    void getdate(String date)
        {
            this.month = date.substring(0,2);
            this.day = date.substring(3,5);
            this.year = date.substring(6,10);
        } 
    void setmonth(String month)
        {
            this.month = month;
        }
    void setday(String day)
        {
            this.day = day;
        }
    void setyear(String year)
        {
            this.year = year;
        }
    void getmonth()
        {
            System.out.println(month);
        }
    void getday()
        {
            System.out.println(day);
        }
    void getyear()  
        {
            System.out.println(year);
        }
    void showdate()
        {
            System.out.println(month + "/" + day + "/" + year);
        }
    }

