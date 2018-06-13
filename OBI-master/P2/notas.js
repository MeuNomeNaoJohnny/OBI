// O professor Arquimedes precisa da sua ajuda para descobrir qual é a nota mais frequente entre as notas que os alunos dele tiraram na última prova. A turma tem N alunos e seu programa deve imprimir a nota que aparece mais vezes na lista de N notas. Se houver mais de uma nota mais frequente, você deve imprimir a maior delas! Por exemplo, se a turma tiver N=10 alunos e as notas forem [20,25,85,40,25,90,25,40,55,40], as notas mais frequentes são 25 e 40, ocorrendo três vezes cada. Seu programa, então, deve imprimir 40.
var n, vetor = [];
scanf("%d\n", "n");
for (var i = 0; i < n; i++) {
   scanf("%d","vetor[" + i + "]");
}
var rept = [1], cont = 1, cont2 = 0, aux = 1;
for (var i = 0; i < vetor.length; i++) {
   for (var i2 = 1; i2 < vetor.length; i2++) {
      if (vetor[i] === vetor[i2]) {
         cont++;
         if (cont > aux) {
            aux = cont;
         }
         rept[cont2] = cont;
      }

   }
   cont2++;
   cont = 0;
}
cont2 = aux;
for (var i = 0; i < vetor.length; i++) {
   vetor[i] = rept[i] * vetor[i];
   if (vetor[i] > aux && rept[i] === cont2) {
      aux = vetor[i];
      cont = rept[i];
   }

}
printf("%d\n", aux/cont);