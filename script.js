function compute(){
      
      var principal = document.getElementByID("principal").value;
  
      if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
  
}

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;


    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
  
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlighResultNumber'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlighResultNumber'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlighResultNumber'>" + interest + "</span>" + ", <br> in the year " + "<span class='hhighlighResultNumber'>" + yearNow + "</span>";
  
 function updateRate() 
  {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
