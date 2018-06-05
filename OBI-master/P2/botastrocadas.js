var botas=[];
var pe=[];
var pares=0;
scanf("%d",'n');
for(var i=0;i<n;i++){
	scanf("%d","botas["+i+"]");
   	scanf("%s","pe["+i+"]");	
}
for(var j=0;j<n;j++)
{
   if(botas[j]!=null)
   {
       for(var k=j+1;k<n;k++)
       {
           if(botas[j]==botas[k])
           {
              if(pe[j]!=pe[k])
              {
              botas[j]=null;
              botas[k]=null;
              pares++;
              }
           }
       }
   }
}
printf("%d",pares);
