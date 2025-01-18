const display = document.getElementById("screen");

function math(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = "";
}

function calculate() {
   try{
    display.value = eval(display.value);
   }

   catch(error)
   {
    display.value = "Error";
   }
}