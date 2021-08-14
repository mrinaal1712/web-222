
function validation() {

  let fVerify=false;
  let fName= document.getElementsByName('fname')[0];
  firstName=fName.value;
if(firstName!=''){

firstName=firstName.trim();
  if(firstName.charAt(0)==firstName.charAt(0).toUpperCase()){

      fVerify= true;
  }

}
else{
fVerify=false;}




/// email
let email=document.getElementsByName('email')[0];
email=email.value;
let integer=0;
let mail = false;
for(let i =0 ; i< email.length; i++){
if(email.charAt(i)=='@'){
  integer= i;
  if(integer>=1){


    mail=true;

  }
}
if(email.charAt(i)=='.'){
  let inT= i-integer-1;

  let len = email.length-i-1;

  if(inT>=1){
    mail=true;
  }
  if(len<=2){

    mail=false;
  }
}
}

;
// address
let add = document.getElementsByName('address')[0];
let address= false;
add=add.value;
for(let i =0 ; i< add.length; i++){
  if(add.charAt(i)==' '){
    if(Number.isInteger(parseInt(add.substring(0,i)))){
     address= true;
     break;
    }
  }
}



// city
let c = document.getElementsByName('city')[0];
c=c.value;
let city = false;
if(c!=''){

c=c.trim();
  if(c.charAt(0)==c.charAt(0).toUpperCase()){

      city= true;
  }

}
else{
city=false;}


let results = document.createElement('div');
if(!fVerify){
  console.log('h');
  document.getElementById('sir').style.visibility="visible";
}
if(!mail){
  document.getElementById('Emmail').style.visibility="visible";
}
if(!address){
  document.getElementById('Adddres').style.visibility="visible";
}

if(fVerify&&mail&&address&&city){
  //console.log('done')
 document.getElementById('sir').style.visibility="hidden";
 document.getElementById('Emmail').style.visibility="hidden";
 document.getElementById('Adddres').style.visibility="hidden";
  results.textContent=" Form is Submitted";
  document.body.appendChild(results);
  document.getElementById('myform').submit();

}
}
function callMeBeforeSubmitting(){
  let response = document.getElementsByName('retType')[0];
  if(response.checked==true){
  document.getElementById('rate').textContent="";}
  if(document.getElementsByName('retType')[1].checked==true){
    document.getElementById('rate').textContent="";
  }
  if(document.getElementsByName('retType')[2].checked==true){

    let d = document.createElement('label');
    d.for="rate"
    d.textContent="Hourly Rate";
    let e = document.createElement('input');
    e.name="rate";
    e.type="text";
    e.required;
    document.getElementById('rate').append(d);
    document.getElementById('rate').appendChild(e);
  }
}
function resume(){
  document.getElementById("title").scrollIntoView();
}
function contact(){
  document.getElementById("form").scrollIntoView();
}
