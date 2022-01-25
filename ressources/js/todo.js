window.onload=function(){
  
 // var table=document.getElementsByClassName("modif");
  var supp=document.getElementsByClassName("supp");
/*for (i=0;i<table.length;i++) {
      table[i].addEventListener("click",modification);}*/
for (j=0;j<supp.length;j++) {
      supp[j].addEventListener("click",suppression);}
}
function suppression(){
  var confirmation=confirm("vous etes sur?");
  if (confirmation) {
      this.parentElement.parentElement.remove();
  }
  }