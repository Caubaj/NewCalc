const display = document.getElementById("screen");

const numbers  = [];
let prev = [];
let current = [];
let numberDisplay = "";
 

//COULD SELECT ANY BUTTOON INSIDE THE CONATINER WITH THE ID NUMBERS: WHENEVER THEY ARE CLICKED, FUNCTION STARTS 
document.querySelectorAll("#numbers button").forEach(function(button)
{
    //BUT FIRST TAKE THE CONTENT OF WAHTEVER BUTTON IS PRESS AND SET IT TO "CURRENT" VALUE 
    const value = button.textContent;

    button.onclick = function()
    {
        if (!isNaN(value))
        {
            numbers.push(value);
            current = Number(addToDisplay(value));
            display.textContent = numberDisplay;
            console.log(`${value} is a number`);
            console.log(typeof current);
        }

        else if(value === "=")
        {
            equals(); 
        }

        else if(value === "AC")
            {
                numbers.length = 0;
                numberDisplay = "";
                display.textContent = "Clear";
            }
        else
        {
            numbers.push(value);
            operator(value);
            // console.log(`${value} is a string`)
            display.textContent = numberDisplay;
            console.log(numbers);
        }
    }
});

function addToDisplay(button)
{       
        numberDisplay += button;
        return numberDisplay;
}




function operator(button)
{

    switch(button)
    {
        case "+":
            {

                numberDisplay += ` ${button} `;
                console.log("Plus " + button);
                prev = current;

                current = [];

                console.log("Current "+ current);
                console.log("Prev " +  prev);

                return numberDisplay;
            }



    }

    numberDisplay += ` ${button} `;
    return numberDisplay;
}


//working 
function equals()
{

    //TRYING TO FIGURE OUT HOW TO GET THE FIRST SET Of NUMBERS THEN FIGURE UT WHA KIND OF EXPRESIION COME FIRST AND 
    //DO THAT EXPRESSION, if +, -, x, etc.., with the first set of number and the remeaining set of numbers
  
    numbers.forEach((element, index) => 
    {
        if(!isNaN(element))
        {
           
            before += (element);
            before = Number(before);

        }
        else if (element === "+")
        {
            console.log("+")


        }
        console.log(typeof before, before)
    });

}
                                              


