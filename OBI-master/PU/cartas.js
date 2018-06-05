var cartas=[];
var resp;
for(var i=0;i<5;i++)
{
	scanf("%d","cartas["+i+"]");
}
if(cartas[0]<cartas[1] && cartas[1]<cartas[2] && cartas[2]<cartas[3] && cartas[3]<cartas[4])
{
   resp="C";
}
else if(cartas[0]>cartas[1] && cartas[1]>cartas[2] && cartas[2]>cartas[3] && cartas[3]>cartas[4])
{
	resp="D";
}
else
{ 
   resp="N";
}
printf(resp);
