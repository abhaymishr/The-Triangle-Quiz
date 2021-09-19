var sideOne=document.querySelector(".side-one");
var sideTwo=document.querySelector(".side-two");

var calculateHypotenuse=document.querySelector(".hypotenuse")
var result=document.querySelector(".result");

calculateHypotenuse.addEventListener("click",calculate)

function calculate() {

    var one=Number(sideOne.value);
    var two=Number(sideTwo.value);
    console.log(one)
    
    if(one&&two){

        if(one<0||two<0){
            result.innerText="Please Enter Valid Values"
        }

        else{
            var a=Math.pow(one,2);
            var b=Math.pow(two,2);
            var  s=a+b;
            var r=Math.sqrt(s);
            result.innerText="Hypotenuse is:"+r;


        }
    }
    else
    {
            result.innerText="Please Enter All Required Values"

        }
    }



