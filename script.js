const form=document.getElementById("MyForm");
let vol=document.querySelector("#volume");
function volume_sphere(e) {
	e.preventDefault();
  let radius=Number(form[0].value);
  radius=Math.pow(radius,3);
  let volume=(radius*4)
  volume*=Math.PI;
	volume=volume/3;
  vol.value=volume;
	// e.target.reset();
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
