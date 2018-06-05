var count=1;
scanf("%d","numero");
for(var i=1;i<=numero/2;i++)
{
	if(numero%i==0)count++;
}
printf("%d",count);
