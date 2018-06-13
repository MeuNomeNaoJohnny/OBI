scanf("%d %d","n","total");
arr=[];
cont=0;
soma=0;
for(var i=0;i<n;i++){
	scanf("%d","arr["+i+"]");
}
for(i=0;i<n;i++){
	soma=arr[i];
	if(soma==total){
    	cont++;
    }else if(soma<total){
    	for(var j=i+1;j<n+i;j++){
           if(j>=n){
           	soma+=arr[j-n];
           }else
        	soma+=arr[j];
           if(soma==total){
				cont++;
              break;
           }else if(soma>total)break;
        }
    }
}
printf("%d",cont);
