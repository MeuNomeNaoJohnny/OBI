scanf("%d%d","cabine","alunos");
if(alunos%(cabine-1)>0)
{
	printf("%d",alunos/(cabine-1)+1);
}
else printf("%d",alunos/(cabine-1));
