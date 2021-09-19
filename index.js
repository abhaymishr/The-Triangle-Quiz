var angleOne=document.querySelector(".angle-one");
var angleTwo=document.querySelector(".angle-two");
var angleThree=document.querySelector(".angle-three");
var isTriangle=document.querySelector(".is-triangle")
var result=document.querySelector(".result");

isTriangle.addEventListener("click",checkTriangle)

function checkTriangle(){

    var one=Number(angleOne.value);
    var two=Number(angleTwo.value);
    var three=Number(angleThree.value);
    console.log(one,two,three)



    if(one&&two&&three){
        if(one<0||two<0||three<0){
            result.innerText="Please Enter Valid Values"
        }
        else{
            var sum=one+two+three;
            console.log(sum)
            if(sum==180){
                result.innerText="Yes!! It is triangle!!"
            }
            else{

                result.innerText="It is Not a triangle"

            }
        }
    }
    else{
        result.innerText="Please Enter all three angles"
    }

}
