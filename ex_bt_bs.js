function ex_de_hl() {
    var temp = 0;
    temp = D;
    D = H;
    H = temp;
    temp = E;
    E = L;
    L = temp;
}

function ex_af_apfp() {
    var temp = 0;
    temp = A;
    A = Ap;
    Ap = temp;
    temp = F;
    F = Fp;
    Fp = temp;
}

function exx() {
    var temp = 0;
    temp = B;
    B = Bp;
    Bp = temp;
    temp = C;
    C = Cp;
    Cp = temp;
    temp = D;
    D = Dp;
    Dp = temp;
    temp = E;
    E = Ep;
    Ep = temp;
    temp = H;
    H = Hp;
    Hp = temp;
    temp = L;
    L = Lp;
    Lp = temp;
}

function ex_msp_hl() {
    var temp = 0;
    temp = memory[0][SP + 1];
    memory[0][SP + 1] = H;
    H = toShorttemp;

    temp = memory[0][SP];
    memory[0][SP + 1] = L;
    L = toShorttemp;
}

function ex_msp_ix() {
    var tempM1,
        tempM,
        tempH,
        tempL = 0;
    tempM1 = memory[0][SP + 1];
    tempM = memory[0][SP];
    tempH = toShort((IX & 0xff00) / 256); //IXh
    tempL = toShort(IX & 0xff); //IXl

    memory[0][SP + 1] = tempH;
    memory[0][SP] = tempL;

    IX = tempM1 * 256 + tempM;
}

function ex_msp_iy() {
    var tempM1,
        tempM,
        tempH,
        tempL = 0;
    tempM1 = memory[0][SP + 1];
    tempM = memory[0][SP];
    tempH = toShort((IY & 0xff00) / 256); //IYh
    tempL = toShort(IY & 0xff); //IYl

    memory[0][SP + 1] = tempH;
    memory[0][SP] = tempL;

    IY = tempM1 * 256 + tempM;
}

function ldi() {
    var tempDE = D * 256 + E; //Temp DE
    var tempHL = H * 256 + L; //Memory[0][HL]
    var tempBC = B * 256 + C;
    //computing
    memory[0][tempDE] = memory[0][tempHL];
    tempDE = tempDE + 1;
    tempHL = tempHL + 1;
    tempBC = tempBC - 1;

    //return value to registers
    D = toShort((tempDE & 0xff00) / 256);
    E = toShort(tempDE & 0x00ff);
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flaghl(false);
    flagpvex1();
    flagn(false);
}

function ldir() {
    var tempDE = D * 256 + E; //Temp DE
    var tempHL = H * 256 + L; //Memory[0][HL]
    var tempBC = B * 256 + C;

    while (tempBC != 0) {
        memory[0][tempDE] = memory[0][tempHL];
        tempDE = tempDE + 1;
        tempHL = tempHL + 1;
        tempBC = tempBC - 1;
        T_state = T_state + 21;
    }

    T_state = T_state + 16;
    //return value to registers
    D = toShort((tempDE & 0xff00) / 256);
    E = toShort(tempDE & 0x00ff);
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flaghl(false);
    flagpvl(false);
    flagn(false);
}

function ldd() {
    var tempDE = D * 256 + E; //Temp DE
    var tempHL = H * 256 + L; //Memory[0][HL]
    var tempBC = B * 256 + C;
    //computing
    memory[0][tempDE] = memory[0][tempHL];
    tempDE = tempDE - 1;
    tempHL = tempHL - 1;
    tempBC = tempBC - 1;

    //return value to registers
    D = toShort((tempDE & 0xff00) / 256);
    E = toShort(tempDE & 0x00ff);
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flaghl(false);
    flagpvex1();
    flagn(false);
}

function lddr() {
    var tempDE = D * 256 + E; //Temp DE
    var tempHL = H * 256 + L; //Memory[0][HL]
    var tempBC = B * 256 + C;

    while (tempBC != 0) {
        memory[0][tempDE] = memory[0][tempHL];
        tempDE = tempDE - 1;
        tempHL = tempHL - 1;
        tempBC = tempBC - 1;
        T_state = T_state + 21;
    }

    T_state = T_state + 16;
    //return value to registers
    D = toShort((tempDE & 0xff00) / 256);
    E = toShort(tempDE & 0x00ff);
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flaghl(false);
    flagpvl(false);
    flagn(false);
}

function cpi() {
    var tempHL = H * 256 + L;
    var tempBC = B * 256 + C;
    var mHL = memory[0][tempHL];
    var a = A;
    A = toShort(A - mHL);
    tempHL = tempHL + 1;
    tempBC = tempBC - 1;

    //return value to registers
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flags();
    flagz();
    flagh();
    flagpvex1();
    flagn(true);
    A = a;
}

function cpir() {
    var tempHL = H * 256 + L;
    var tempBC = B * 256 + C;
    var mHL = memory[0][tempHL];
    var a = A;

    while (tempBC != 0 || A != 0) {
        A = toShort(A - mHL);
        tempHL = tempHL + 1;
        mHL = memory[0][tempHL];
        tempBC = tempBC - 1;
        if (A != 0) {
            A = a;
        }
        T_state = T_state + 21;
    }

    T_state = T_state + 16;
    //return value to registers
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flags();
    flagz();
    flagh();
    flagpvex1();
    flagn(true);
    A = a;
}

function cpd() {
    var tempHL = H * 256 + L;
    var tempBC = B * 256 + C;
    var mHL = memory[0][tempHL];
    var a = A;
    A = toShort(A - mHL);
    tempHL = tempHL - 1;
    tempBC = tempBC - 1;

    //return value to registers
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flags();
    flagz();
    flagh();
    flagpvex1();
    flagn(true);
    A = a;
}

function cpdr() {
    var tempHL = H * 256 + L;
    var tempBC = B * 256 + C;
    var mHL = memory[0][tempHL];
    var a = A;

    while (tempBC != 0 || A != 0) {
        A = toShort(A - mHL);
        tempHL = tempHL - 1;
        mHL = memory[0][tempHL];
        tempBC = tempBC - 1;
        if (A != 0) {
            A = a;
        }
        T_state = T_state + 21;
    }

    T_state = T_state + 16;
    //return value to registers
    H = toShort((tempHL & 0xff00) / 256);
    L = toShort(tempHL & 0x00ff);
    B = toShort((tempBC & 0xff00) / 256);
    C = toShort(tempBC & 0x00ff);
    flags();
    flagz();
    flagh();
    flagpvex1();
    flagn(true);
    A = a;
}