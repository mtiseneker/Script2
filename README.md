# Script2
var Pyramid1 = {
	
	firstrow:  " *",
	secondrow: " * *",
	thirdrow: " * * *",
	fourthrow: " * * * *",
	fifthrow: " * * * * *"
	
};
var Pyramid2 = {
	sixthrow: "* * * * * *"
};
var Pyramid3 = {
	seventhrow: "* * * * * * *"
};
var Pyramid4 = {
	eigthrow: "* * * * * * * *"
};
var Pyramid5 = {
	ninthrow: "* * * * * * * * *"
};
document.getElementById("five").addEventListener("click", function(){
  document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " <br /> " + Pyramid1.secondrow + " <br /> " + Pyramid1.thirdrow + " <br /> " + Pyramid1.fourthrow + " <br /> " + Pyramid1.fifthrow;
});
document.getElementById("six").addEventListener("click", function(){
  document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " <br /> " + Pyramid1.secondrow + " <br /> " + Pyramid1.thirdrow + " <br /> " + Pyramid1.fourthrow + " <br /> " + Pyramid1.fifthrow + " <br /> " + Pyramid2.sixthrow;
});
document.getElementById("seven").addEventListener("click", function(){
  document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " <br /> " + Pyramid1.secondrow + " <br /> " + Pyramid1.thirdrow + " <br /> " + Pyramid1.fourthrow + " <br /> " + Pyramid1.fifthrow + " <br /> " + Pyramid2.sixthrow + " <br />" + Pyramid3.seventhrow;
});
document.getElementById("eight").addEventListener("click", function(){
  document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " <br /> " + Pyramid1.secondrow + " <br /> " + Pyramid1.thirdrow + " <br /> " + Pyramid1.fourthrow + " <br /> " + Pyramid1.fifthrow + " <br /> " + Pyramid2.sixthrow + " <br />" + Pyramid3.seventhrow + " <br /> " + Pyramid4.eigthrow;
});
document.getElementById("nine").addEventListener("click", function(){
  document.getElementById("pyramid").innerHTML = Pyramid1.firstrow + " <br /> " + Pyramid1.secondrow + " <br /> " + Pyramid1.thirdrow + " <br /> " + Pyramid1.fourthrow + " <br /> " + Pyramid1.fifthrow + " <br /> " + Pyramid2.sixthrow + " <br />" + Pyramid3.seventhrow + " <br /> " + Pyramid4.eigthrow + " <br />" + Pyramid5.ninthrow;
});
