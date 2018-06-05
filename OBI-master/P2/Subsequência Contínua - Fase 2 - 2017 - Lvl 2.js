var N, V = [], M = 0, C = 1;
scanf("%d", "N");
for (var i = 0; i < N; i++) {
    scanf("%d", "V[" + i + "]");
}
for (var i = 1; i < N; i++) {
    if ((V[i] - V[i - 1] >= -1) && (V[i] - V[i - 1] <= 1)) {
        C++;
    } else {
        if (C > M) {
            M = C;
        }
        C = 1;
    }
}
printf("%d", M);