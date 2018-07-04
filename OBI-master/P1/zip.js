scanf("%d\n%d", "lia1", "lia2");
scanf("%d\n%d", "caro1", "caro2");
var pontLia = 0, pontCaro = 0;
if (lia1 === lia2) pontLia = (lia1 + lia2)*2;
if (lia1 + 1 === lia2 || lia1 === lia2 + 1) pontLia = (lia1 + lia2)*3;
if (pontLia === 0) pontLia = lia1 + lia2;

if (caro1 === caro2) pontCaro = (caro1 + caro2)*2;
if (caro1 + 1 === caro2 || caro1 === caro2 + 1) pontCaro = (caro1 + caro2)*3;
if (pontCaro === 0) pontCaro = caro1 + caro2;

if (pontLia > pontCaro) printf('Lia');
if (pontLia < pontCaro) printf('Carolina');
if (pontLia === pontCaro) printf('Empate');