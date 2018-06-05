// digite aqui seu programa
var C, F = 0;
var E = [];
var T = [];
scanf("%d", "C");
for (var i = 0; i < C; i++) {
    scanf("%d", "T[i]");
    if (E.indexOf(T[i]) === -1) {
        F += 2;
        E.push(T[i]);
    } else {
        E.splice(i, 1);
    }
}
printf("%d", F);