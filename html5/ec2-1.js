document.getElementById("id_business_version").innerHTML = "Business version: 2018.10.15.2";

function citire()
{
var _a = document.getElementById("id_a").value;
var _b = document.getElementById("id_b").value;
var _c = document.getElementById("id_c").value;

var coeficienti = {a:_a, b:_b, c:_c};
	return coeficienti;
}
 // -----
function rezolvare(coeficienti)
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
function afisare(solutii)
{

  document.getElementById("id_x1").innerHTML= solutii.x1.re + " + " solutii.x1.im + "i";
  document.getElementById("id_x2").innerHTML= solutii.x2.re + " + " solutii.x2.im + "i";

	
}

// ----

function rezolva()
{

var coeficienti = citire();
var solutii = rezolvare(coeficienti);
afisare(solutii);

}

// ------