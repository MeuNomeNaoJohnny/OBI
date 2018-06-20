scanf("%d","andares");
scanf("%d","eventos");
var arr=[];
var soma=0;
for(var i=0;i<andares;i++){
	scanf("%d","arr["+i+"]");
}

for(var j=0;j<eventos;j++){
	scanf("%d","aux");
    if(aux==1){
       scanf("%d","andar");
       soma=0;
   		for(var k=0;k<andar;k++){
    		soma=soma+arr[k];
    	}
       
       printf("%d\n",soma);
    }
   
   if(aux==0){
      scanf("%d","andar");
      scanf("%d","aux");
   	arr[andar-1]=aux;
   }
   
}
