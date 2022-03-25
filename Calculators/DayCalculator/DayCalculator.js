function CalculateTheDay()
{
    var Date = parseInt(document.getElementById('date').value);
    var Month = parseInt(document.getElementById('month').value);
    var Year = parseInt(document.getElementById('year').value);

    if (Date == null || Month == null || Year == null)
    {
        document.getElementById('h2').innerHTML = ("🙏Enter The Complete Values🙏");
    }

    var Code_Of_January = 1;
    var Code_Of_February = 4;
    var Code_Of_March = 4;
    var Code_Of_April = 0;
    var Code_Of_May = 2;
    var Code_Of_June = 5;    
    var Code_Of_July = 0;
    var Code_Of_August = 3;
    var Code_Of_September = 6;
    var Code_Of_October = 1;
    var Code_Of_November = 4;
    var Code_Of_December = 6;

    var CenturyCode = 0;
    var FinalDay = 0;
    
    if (((Year - (Year % 100)) / 100) % 4 == 0)
    {
        CenturyCode = 6;
    }
    else if (((Year - (Year % 100)) / 100) % 4 == 1)
    {
        CenturyCode = 4;
    }
    else if (((Year - (Year % 100)) / 100) % 4 == 2)
    {
        CenturyCode = 2;
    }
    else if (((Year - (Year % 100)) / 100) % 4 == 3)
    {
        CenturyCode = 0;
    }    

    if (Month == 1)
    {
        FinalDay += Code_Of_January;
    }
    else if (Month == 2)
    {
        FinalDay += Code_Of_February;
    }
    else if (Month == 3)
    {
        FinalDay += Code_Of_March;
    }
    else if (Month == 4)
    {
        FinalDay += Code_Of_April;
    }
    else if (Month == 5)
    {
        FinalDay += Code_Of_May;
    }
    else if (Month == 6)
    {
        FinalDay += Code_Of_June;
    }
    else if (Month == 7)
    {
        FinalDay += Code_Of_July;
    }
    else if (Month == 8)
    {
        FinalDay += Code_Of_August;
    }
    else if (Month == 9)
    {
        FinalDay += Code_Of_September;
    }
    else if (Month == 10)
    {
        FinalDay += Code_Of_October;
    }
    else if (Month == 11)
    {
        FinalDay += Code_Of_November;
    }
    else if (Month == 12)
    {
        FinalDay += Code_Of_December;
    }
    
    FinalDay += Date + (Year % 100) + Math.floor((Year % 100) / 4) + CenturyCode;

    FinalDay = FinalDay % 7;

    if (FinalDay == 1)
    {
        document.getElementById('h2').innerHTML = ("Sunday");
    }
    else if (FinalDay == 2)
    {
        document.getElementById('h2').innerHTML = ("Monday");
    }
    else if (FinalDay == 3)
    {
        document.getElementById('h2').innerHTML = ("Tuesday");
    }
    else if (FinalDay == 4)
    {
        document.getElementById('h2').innerHTML = ("Wednesday");
    }
    else if (FinalDay == 5)
    {
        document.getElementById('h2').innerHTML = ("Thursday");
    }
    else if (FinalDay == 6)
    {
        document.getElementById('h2').innerHTML = ("Friday");
    }
    else if (FinalDay == 0)
    {
        document.getElementById('h2').innerHTML = ("Saturday");
    }

}