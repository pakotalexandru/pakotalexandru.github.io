document.getElementById("id_business_version").innerHTML = "Business version: 2018.10.15.1";

function rezolva()
{
  // citire
  var a = document.getElementById("id_a").value;
  var b = document.getElementById("id_b").value;
  var c = document.getElementById("id_c").value;
  // rezolvare
  var delta = b*b-4*a*c;
  var x1_re, x1_im, x2_re, x2_im;
  if(delta>=0){
    x1_re= (-b + Math.sqrt(delta)) / (2 *a);
    x2_re= (-b - Math.sqrt(delta)) / (2 *a);
    x1_im = x2_im = 0;
  }
  else{
      x1_re = -b / (2 * a);
      x1_im = Math.sqrt(-delta) / (2 * a);
      x2_re = -b / (2 * a);
      x2_im = -Math.sqrt(-delta) / (2 * a);
  }
  
  // scriere
  document.getElementById("id_x1").innerHTML= x1_re + " + " x1_im + "i";
  document.getElementById("id_x2").innerHTML= x2_re + " + " x2_im + "i";
}
