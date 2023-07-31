
function next() {

    var name = document.getElementById('inp1').value;   
    var email = document.getElementById('inp2').value;
    var website = document.getElementById('inp3').value;
    var Gender = document.getElementById('inp4').value;
    var skills = document.getElementById('inp5').value;

    var add = document.getElementById('spanid');
    add.innerHTML = name;
    var percent = document.getElementById('spanid1');
    percent.innerHTML = email;
    document.getElementById("Remarks").innerHTML = website;

    document.getElementById("Gen").innerHTML = Gender;
    document.getElementById("skill").innerHTML = skills;

}

function res() {
    document.getElementById('spanid').innerHTML = '';
    document.getElementById('spanid1').innerHTML = '';
    document.getElementById("Remarks").innerHTML='';
    document.getElementById("Gen").innerHTML='';
    document.getElementById("skill").innerHTML='';
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
    document.getElementById('inp3').value="";
    document.getElementById('inp4').value="";
    document.getElementById('inp5').value="";

}

