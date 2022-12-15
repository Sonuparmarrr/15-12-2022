// program to check if the number is even or odd
// take input from the user
function find(){

no=Number(document.getElementById("no_input").value);
	
if(no == 0){
  alert("Positive\n");
} 
else if(no < 0 && (no%2) != 0) 
{
  alert("Negative Odd\n");
} 
else if(no < 0 && (no%2) == 0) 
{
  alert("Negative Even\n");
} 
else if(no > 0 && (no%2) != 0) 
{
  alert("Positive Odd\n");
} 
else if(no > 0 && (no%2) == 0) 
{
  alert("Positive Even\n");
} 
}


  

function checkVowel()
{
  var ch;

  ch = document.getElementById("char").value;
  if(ch)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))
    {
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
        document.getElementById("res").innerHTML = "a Vowel";
      else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
        document.getElementById("res").innerHTML = "a Vowel";
      else
        document.getElementById("res").innerHTML = "a Consonant";
    }
    else
      document.getElementById("res").innerHTML = "neither Vowel nor Consonant";
  }
}