const form=document.getElementById("MyForm");
function volume_sphere() {
  let radius=Number(form[0].value);
  radius=Math.pow(radius,3);
  let volume=(radius*4)/3;
  volume*=3.14;
  form[1].value=volume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
