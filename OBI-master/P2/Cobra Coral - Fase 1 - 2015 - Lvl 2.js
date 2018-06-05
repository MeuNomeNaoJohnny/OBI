var N = [], R;

for (var i = 0; i < 4; i++) {
    scanf("%d", "N[" + i + "]");
}

for (var i = 0; i < 4; i++) {

    if (i + 2 < 4) {
        if (N[i] === N[i + 2]) {
            R = "V";
            break;
        } else {
            R = "F";
        }
    }

}
printf("%s", R);