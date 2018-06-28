scanf('%d','postes');
var vetor = [];
for (var i = postes - 1; i >= 0; i--) {
	scanf('%d','vetor[' + i + ']');
};
i = 0;
var subs = 0, rep = 0;
while (i < postes) {
	if (vetor[i] >= 50 && vetor[i] < 85) rep++;
	if (vetor[i] < 50) subs++;
	i++;
}

printf('%d %d', subs, rep);