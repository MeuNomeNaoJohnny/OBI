arr=[];
for(var i=0;i<4;i++)
{
	scanf("%d","arr["+i+"]");
}
arr.sort(function(a,b){return a - b;});
if(arr[3]< arr[1]+arr[2] || arr[2]< arr[0]+arr[1])
{
   printf("S");
}else{
	printf("N");
}
