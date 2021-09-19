var sideOne=document.querySelector(".side-one");
var sideTwo=document.querySelector(".side-two");
var sideThree=document.querySelector(".side-three");
var calculateArea=document.querySelector(".calculate-area")
var result=document.querySelector(".result");


calculateArea.addEventListener("click",area)

function area(){

    var one=Number(sideOne.value)
    var two=Number(sideTwo.value)
    var three=Number(sideThree.value)
    

    if(one&&two&&three){
        if(one<0||two<0||three<0){
            result.innerText="Enter Valid Values"
        }

            else{
    
            if((one+two)>three||(two+three)>one||(three+one)>two){
    
                var s=(one+two+three)/2;
                var a=s*(s-one);
                var b=s*(s-two);
                var c=s*(s-three);
                var r=Math.sqrt(a+b+c)
                result.innerText="Area is "+r;
    
    
    
            }
            else{
    
                result.innerText="Enter Valid Values such that sum of two side is greater than third side"
                
            }
        }
    }
    else{
        reusult.innerText="Enter All VAlues"
    }

   
}


    
