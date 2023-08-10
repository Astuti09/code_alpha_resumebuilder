//alert("loading")

function addNewAQfield(){
    //console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq"); 

    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewSfield(){
    //console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let sOb=document.getElementById("s"); 

    let sAddButtonOb = document.getElementById("sAddButton");

    sOb.insertBefore(newNode,sAddButtonOb);
}
function addNewPWfield(){
    //console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pwfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let pwOb=document.getElementById("pw"); 

    let pwAddButtonOb = document.getElementById("pwAddButton");

    pwOb.insertBefore(newNode,pwAddButtonOb);

}

function addNewIfield(){
    //console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ifield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let iOb=document.getElementById("i"); 

    let iAddButtonOb = document.getElementById("iAddButton");

    iOb.insertBefore(newNode,iAddButtonOb);
}
function addNewTfield(){
    //console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("tfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let tOb=document.getElementById("t"); 

    let tAddButtonOb = document.getElementById("tAddButton");

    tOb.insertBefore(newNode,tAddButtonOb);
}
function generateCv(){
    //console.log("generating CV");

    let namefield=document.getElementById("namefield").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedinfield").value;
    document.getElementById("githubT").innerHTML = document.getElementById("gfield").value;


    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;
    //aceadamic qualifications
    
    let aqs = document.getElementsByClassName("aqfield");
    let str = "";
    for(let e of aqs){
        str += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str;

    //skills

    let ss=document.getElementsByClassName("sfield");
    let str1 ="";
    for(let e of ss){
        str1 += `<li> ${e.value}</li>`;

    }

    document.getElementById("sT").innerHTML = str1;

    //project work

    let pws = document.getElementsByClassName("pwfield");
    let str2 = "";
    for(let e of pws){
        str2 +=`<li> ${e.value} </li>`;

    }
    document.getElementById("pwT").innerHTML = str2;
    //Internship
    let is = document.getElementsByClassName("ifield");
    let str3 = "";
    for(let e of is){
        str3 +=`<li> ${e.value} </li>`;

    }
    document.getElementById("iT").innerHTML = str3;

    //Training

    let ts = document.getElementsByClassName("tfield");
    let str4 = "";
    for(let e of ts){
        str4 +=`<li> ${e.value}</li>`;

    }
    document.getElementById("tT").innerHTML = str4;
    //code for setting image
    let file = document.getElementById("imgfield").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);


    //set the image to template
    reader.onloadend = function(){

      document.getElementById("imgTemplate").src = reader.result;
    }


document.getElementById("CV-form").style.display = "none";
document.getElementById("CV-template").style.display = "block";

} 

//print cv


function printCV(){
    window.print();

}