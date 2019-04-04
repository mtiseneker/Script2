var Pyramid1 = {

firstrow:  " *",
secondrow: " * *",
thirdrow: " * * *",
fourthrow: " * * * *",
fifthrow: " * * * * *"
}; 
var Pyramid2 = { sixthrow: "* * * * * " }; 
var Pyramid3 = { seventhrow: " * * * * * " }; 
var Pyramid4 = { eigthrow: " * * * * * * " }; 
var Pyramid5 = { ninthrow: " * * * * * * * *" }; 
document.getElementById("five").addEventListener("click", function(){ document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " 
" + Pyramid1.secondrow + " 
" + Pyramid1.thirdrow + " 
" + Pyramid1.fourthrow + " 
" + Pyramid1.fifthrow; }); document.getElementById("six").addEventListener("click", function(){ document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " 
" + Pyramid1.secondrow + " 
" + Pyramid1.thirdrow + " 
" + Pyramid1.fourthrow + " 
" + Pyramid1.fifthrow + " 
" + Pyramid2.sixthrow; }); document.getElementById("seven").addEventListener("click", function(){ document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " 
" + Pyramid1.secondrow + " 
" + Pyramid1.thirdrow + " 
" + Pyramid1.fourthrow + " 
" + Pyramid1.fifthrow + " 
" + Pyramid2.sixthrow + " 
" + Pyramid3.seventhrow; }); document.getElementById("eight").addEventListener("click", function(){ document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " 
" + Pyramid1.secondrow + " 
" + Pyramid1.thirdrow + " 
" + Pyramid1.fourthrow + " 
" + Pyramid1.fifthrow + " 
" + Pyramid2.sixthrow + " 
" + Pyramid3.seventhrow + " 
" + Pyramid4.eigthrow; }); document.getElementById("nine").addEventListener("click", function(){ document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " 
" + Pyramid1.secondrow + " 
" + Pyramid1.thirdrow + " 
" + Pyramid1.fourthrow + " 
" + Pyramid1.fifthrow + " 
" + Pyramid2.sixthrow + " 
" + Pyramid3.seventhrow + " 
" + Pyramid4.eigthrow + " 
" + Pyramid5.ninthrow; });
