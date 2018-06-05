scanf('%d%d','habs','cheque');
var habneg = [];
var qnt = [];
var habpos = [];
var hab = [];
var comp = 0;
var res = 0;
for(var i=0;i<habs;i++){
	scanf('%d', 'habneg['+i+']');
	scanf('%d', 'qnt['+i+']');
	scanf('%d', 'habpos['+i+']');
	hab[i] = 0;
	comp += qnt[i];
}
for(i=0;i<habs;i++){
	hab[(habneg[i])-1] -= qnt[i];
	hab[(habpos[i])-1] += qnt[i];
}
for(i=0;i<habs;i++){
	if(hab[i] > 0){
		res += hab[i];
    }
}

if(comp > res){
	printf('S\n');
}
else{
	printf('N\n');
}
printf('%d\n', res);



