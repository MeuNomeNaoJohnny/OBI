scanf("%d","fita");
scanf("%d","qtdePontos");
var dias=0;
var pontos=[];
for(var i=0;i<qtdePontos;i++){
   scanf("%d","pontos["+i+"]");	
}
pontos[qtdePontos]=qtdePontos;
if(dias<pontos[0])dias=pontos[0]-1;
for(var j=0;j<qtdePontos;j++){
	if((pontos[j+1]-pontos[j])/2>dias)dias=(pontos[j+1]-pontos[j])/2;
}
printf("%d",dias);
