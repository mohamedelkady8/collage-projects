    class Time
    {
    int hours , minutes , seconds;

    Time()
    {
    hours = minutes = seconds = 0;
    }

    Time(int hours , int minutes , int seconds)
    {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    void sethours(int hours)
    {
        hours %= 24;
        this.hours = hours;
    }
    void setminutes(int minutes)
    {
        minutes %= 60;
        this.minutes = minutes;
    }
    void setseconds(int seconds)
    {
        seconds %= 60;
        this.seconds = seconds;
    }
    void gethours()
    {
        
        System.out.println((hours >= 10) ?  hours : "0" + hours);
    }
    void getminutes()
    {
        System.out.println((minutes >= 10) ? minutes : "0" + minutes);
    }
    void getseconds()
    {
        System.out.println((seconds >= 10) ? seconds : "0" + seconds);
    }
    void timepassed(Time a , Time b)
    {
        
        hours = (a.hours + b.hours);
        hours %= 24;
        minutes = (a.minutes + b.minutes);
        minutes %= 24;
        seconds = (a.seconds + b.seconds) ;
        seconds %= 24;
    }
    void display()
    {
            System.out.print((hours >= 10) ?  hours : "0" + hours);
            System.out.print(":");
            System.out.print((minutes >= 10) ? minutes : "0" + minutes);
            System.out.print(":");
            System.out.println((seconds >= 10) ? seconds : "0" + seconds);
    }
    }
