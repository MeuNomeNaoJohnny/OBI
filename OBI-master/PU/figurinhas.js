scanf('%d%d%d','numfig','figcar', 'figcom');
var car = [];
var com = [];
var res = 0;
for(var i=0;i<figcar;i++){
	scanf('%d','car['+i+']');
}
for(i=0;i<figcom;i++){
	scanf('%d','com['+i+']');
}
for(i=0;i<car.length;i++){
	if(com.includes(car[i]) === false){
		res++;
    }
}
printf('%d\n', res);
