arr=[];
var x;
var y;
for(var i=0;i<4;i++){
	scanf("%d","arr["+i+"]");
}
if(arr[0]>arr[2]){
	x=arr[0]-arr[2];
}else{
	x=arr[2]-arr[0];
}
if(arr[1]>arr[3]){
	y=arr[1]-arr[3];
}else{
	y=arr[3]-arr[1];
}
printf("%d",x+y);
