var N, C = [], M = 0, F = "N";

scanf("%d", "N");

for (var i = 0; i < N; i++) {
    scanf("%d", "C[i]");
    if (C[i] === M) {
        F = "S";
    } else {
        if (C[i] > M) {
            M = C[i];
            F = "N";
        }
    }
}
printf(F);
