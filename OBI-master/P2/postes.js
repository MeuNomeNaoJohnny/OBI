var cons = 0;
var sub = 0;
scanf('%d','n');
for(var i=0;i<n;i++){
	scanf('%d','t');
	if(t < 50) {
		sub++;
    }
	if((t >= 50)&&(t < 85)){
		cons++;
    }
}
printf('%d %d\n',sub,cons);

