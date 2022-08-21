function compute()
{
    principal = document.getElementById("principal").value;
    if (principal <= 0){//give alert when the user put 0 or negative number
        window.alert("Enter a positive number")
        document.getElementById('result').innerHTML.replace ="";
        reset();
    }else{
        rate = document.getElementById("rate").value;
        years = document.getElementById("years").value;
        interest = principal * years * rate /100;
        year = new Date().getFullYear()+parseInt(years);
        document.getElementById('result').innerHTML = 
        "If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
}//from here on they are functions to make the rate slider dynamic
addEventListener('load',updateRate,false);
function updateRate() 
{
    document.getElementById("rate").addEventListener("change",changeRate,false);
}        
function changeRate()
{
    document.getElementById("rate_val").innerHTML=document.getElementById("rate").value;
}
