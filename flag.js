function flagc() {
    if ((A > 0x00ff) || (A < 0x0000)) {
        F = toShort(F | 0x0001); //set c=1
    } else {
        F = toShort(F & 0x00fe); //set c=0
    }
}

function flagn(x) { //x=true sub //x= false add
    if (x) {
        F = toShort(F | 0x0002); //set n=1
    } else {
        F = toShort(F & 0x00fd); //set n=0
    }
}

function flagpvo() { //overflow
    if ((A > 127) || (A < -128)) {
        F = toShort(F | 0x0004); //set pv = 1
    } else {
        F = toShort(F & 0x00fb); //set pv = 0
    }
}

function flagpvp() { //parity
    var count = 0;
    if ((A & 0x0001) == 0x0001) {
        count = count + 1;
    }
    if ((A & 0x0002) == 0x0002) {
        count = count + 1;
    }
    if ((A & 0x0004) == 0x0004) {
        count = count + 1;
    }
    if ((A & 0x0008) == 0x0008) {
        count = count + 1;
    }
    if ((A & 0x0010) == 0x0010) {
        count = count + 1;
    }
    if ((A & 0x0020) == 0x0020) {
        count = count + 1;
    }
    if ((A & 0x0040) == 0x0040) {
        count = count + 1;
    }
    if ((A & 0x0080) == 0x0080) {
        count = count + 1;
    }
    if ((count % 2) != 0) { //ood
        F = toShort(F & 0x00fb); //set pv = 0
    } else { //even
        F = toShort(F | 0x0004); //set pv = 1
    }

}

function flagh() {
    var b3, b4, a3, a4;
    if ((backupacc & 0x00008) == 0x0008) {
        b3 = 1;
    } else {
        b3 = 0;
    }
    if ((backupacc & 0x00010) == 0x0010) {
        b4 = 1;
    } else {
        b4 = 0;
    }
    if ((A & 0x00008) == 0x0008) {
        a3 = 1;
    } else {
        a3 = 0;
    }
    if ((A & 0x00010) == 0x0010) {
        a4 = 1;
    } else {
        a4 = 0;
    }
    if ((b4 == 0) && (b3 == 1) && (a4 == 1) && (a3 == 0)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 0) && (b3 == 1) && (a4 == 1) && (a3 == 1)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 1) && (b3 == 0) && (a4 == 0) && (a3 == 1)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 1) && (b3 == 0) && (a4 == 1) && (a3 == 1)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 1) && (b3 == 1) && (a4 == 0) && (a3 == 1)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 1) && (b3 == 1) && (a4 == 1) && (a3 == 0)) {
        F = toShort(F | 0x0010); //set h = 1
    }
    if ((b4 == 1) && (b3 == 1) && (a4 == 0) && (a3 == 0)) {
        F = toShort(F | 0x0010); //set h = 1
    } else {
        F = toShort(F & 0x00ef); //set h = 0
    }
}

function flagz() {
    if (A == 0) {
        F = toShort(F | 0x0040); //set z = 1
    } else {
        F = toShort(F & 0x00bf); //set z = 0
    }
}

function flags() {
    if ((A & 0x0080) == 0x0080) {
        F = toShort(F | 0x0080); //set s = 1
    } else {
        F = toShort(F & 0x007f); //set s = 0
    }
}

function flaghl(x) { // h logic
    if (x) {
        F = toShort(F | 0x0010); //set h = 1
    } else {
        F = toShort(F & 0x00ef); //set h = 0
    }
}

function flagcl(x) { //carray
    if (x) {
        F = toShort(F | 0x0001); //set c=1
    } else {
        F = toShort(F & 0x00fe); //set c=0
    }
}

function flagpviff(x) { //carray
    if (x) {
        F = toShort(F | 0x0004); //set pv = 1
    } else {
        F = toShort(F & 0x00fb); //set pv = 0
    }
}

function flagpvex1() {
    var x = (B * 256) + C;
    if (x == 0) {
        F = toShort(F & 0x00fb); //set pv = 0
    } else {
        F = toShort(F | 0x0004); //set pv = 1
    }
}

function flagpvl(x) { //carray
    if (x) {
        F = toShort(F | 0x0004); //set pv = 1
    } else {
        F = toShort(F & 0x00fb); //set pv = 0
    }
}

function flagz_opin1() {
    if (B == 0) {
        F = toShort(F | 0x0040); //set z = 1
    } else {
        F = toShort(F & 0x00bf); //set z = 0
    }
}

function flagzl(x) {
    if (x) {
        F = toShort(F | 0x0040); //set z = 1
    } else {
        F = toShort(F & 0x00bf); //set z = 0
    }
}