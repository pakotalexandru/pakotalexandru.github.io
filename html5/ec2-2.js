document.getElementById("id_business_version").innerHTML = "Business version: 2018.10.15.3";

function t_ec2()
{
	this.citire = function()
	{
	this.a = document.getElementById("id_a").value;
	this.b = document.getElementById("id_b").value;
	this.c = document.getElementById("id_c").value;
	}
	 // -----
	this.rezolvare = function()
	{

	var delta = coeficienti.b*coeficienti.b-4*coeficienti.a*coeficienti.c;
	  var x1_re, x1_im, x2_re, x2_im;
	  if(delta>=0){
	    x1_re= (-coeficienti.b + Math.sqrt(delta)) / (2 *coeficienti.a);
	    x2_re= (-coeficienti.b - Math.sqrt(delta)) / (2 *coeficienti.a);
	    x1_im = x2_im = 0;
	  }
	  else{
	      x1_re = -coeficienti.b / (2 * coeficienti.a);
	      x1_im = Math.sqrt(-delta) / (2 * coeficienti.a);
	      x2_re = -coeficienti.b / (2 * coeficienti.a);
	      x2_im = -Math.sqrt(-delta) / (2 * coeficienti.a);
	  }
	var x1 = {re: x1_re, im: x1_im};
	var x1 = {re: x2_re, im: x2_im};
	var solutii = {x1:x1, X2:x2}
	return solutii;

	}
	 // -----
	this.afisare = function()
	{

	  document.getElementById("id_x1").innerHTML= solutii.x1.re + " + " solutii.x1.im + "i";
	  document.getElementById("id_x2").innerHTML= solutii.x2.re + " + " solutii.x2.im + "i";


	}

	// ----

	function rezolva()
	{
	var ex2 = new t_ec2();
	var coeficienti = citire();
	var solutii = rezolvare(coeficienti);
	afisare(solutii);

	}
}
// ------
