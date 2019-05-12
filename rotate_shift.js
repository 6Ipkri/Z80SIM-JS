function rlca() {
    CY = toShort((A & 0x0080) / 128);
    A = toShort(A * 2);
    A = toShort(A + CY);
    flaghl(false);
    flagn(false);
    flagc();
}

function rla() {
    var a2;
    a2 = A;
    A = toShort(A * 2 + CY);
    CY = toShort((a2 & 0x0080) / 128);
    flaghl(false);
    flagn(false);
    flagc();
}

function rrca() {
    CY = toShort(A & 0x0001);
    A = toShort(A / 2);
    A = toShort(A | (CY * 128));
    flaghl(false);
    flagn(false);
    flagc();
}

function rra() {
    var a2;
    a2 = A;
    A = toShort((A / 2) | (CY * 128));
    CY = toShort(a2 & 0x0001);
    flaghl(false);
    flagn(false);
    flagc();
}
//*******************************************************************
function rlcb() {
    CY = toShort((B & 0x0080) / 128);
    B = toShort(B * 2);
    B = toShort(B + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rlb() {
    var b2;
    b2 = B;
    B = toShort(B * 2 + CY);
    CY = toShort((b2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrcb() {
    CY = toShort(B & 0x0001);
    B = toShort(B / 2);
    B = toShort(B | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrb() {
    var b2;
    b2 = B;
    B = toShort((B / 2) | (CY * 128));
    CY = toShort(b2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//*******************************************************
function rlcc() {
    CY = toShort((C & 0x0080) / 128);
    C = toShort(C * 2);
    C = toShort(C + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rlc() {
    var c2;
    c2 = C;
    C = toShort(C * 2 + CY);
    CY = toShort((c2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrcc() {
    CY = toShort(C & 0x0001);
    C = toShort(C / 2);
    C = toShort(C | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrc() {
    var c2;
    c2 = C;
    C = toShort((C / 2) | (CY * 128));
    CY = toShort(c2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//**************************************************
function rlcd() {
    CY = toShort((D & 0x0080) / 128);
    D = toShort(D * 2);
    D = toShort(D + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rld() {
    var d2;
    d2 = D;
    D = toShort(D * 2 + CY);
    CY = toShort((d2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrcd() {
    CY = toShort(D & 0x0001);
    D = toShort(D / 2);
    D = toShort(D | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrd() {
    var d2;
    d2 = D;
    D = toShort((D / 2) | (CY * 128));
    CY = toShort(d2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//******************************************************
function rlce() {
    CY = toShort((E & 0x0080) / 128);
    E = toShort(E * 2);
    E = toShort(E + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rle() {
    var e2;
    e2 = E;
    E = toShort(E * 2 + CY);
    CY = toShort((e2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrce() {
    CY = toShort(E & 0x0001);
    E = toShort(E / 2);
    E = toShort(E | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rre() {
    var e2;
    e2 = E;
    E = toShort((E / 2) | (CY * 128));
    CY = toShort(e2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//***************************************************
function rlch() {
    CY = toShort((H & 0x0080) / 128);
    H = toShort(H * 2);
    H = toShort(H + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rlh() {
    var h2;
    h2 = H;
    H = toShort(H * 2 + CY);
    CY = toShort((h2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrch() {
    CY = toShort(H & 0x0001);
    H = toShort(H / 2);
    H = toShort(H | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrh() {
    var h2;
    h2 = H;
    H = toShort((H / 2) | (CY * 128));
    CY = toShort(h2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//*********************************************
function rlcl() {
    CY = toShort((L & 0x0080) / 128);
    L = toShort(L * 2);
    L = toShort(L + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rll() {
    var l2;
    l2 = L;
    L = toShort(L * 2 + CY);
    CY = toShort((l2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrcl() {
    CY = toShort(L & 0x0001);
    L = toShort(L / 2);
    L = toShort(L | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrl() {
    var l2;
    l2 = L;
    L = toShort((L / 2) | (CY * 128));
    CY = toShort(l2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//*********************************************
function rlc_a() {
    CY = toShort((A & 0x0080) / 128);
    A = toShort(A * 2);
    A = toShort(A + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rl_a() {
    var a2;
    a2 = A;
    A = toShort(A * 2 + CY);
    CY = toShort((a2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrc_a() {
    CY = toShort(A & 0x0001);
    A = toShort(A / 2);
    A = toShort(A | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rr_a() {
    var a2;
    a2 = A;
    A = toShort((A / 2) | (CY * 128));
    CY = toShort(a2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//***********************************************
function rlc_mhl() {
    var x = H * 256 + L;
    CY = toShort((memory[0][x] & 0x0080) / 128);
    memory[0][x] = toShort(memory[0][x] * 2);
    memory[0][x] = toShort(memory[0][x] + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rl_mhl() {
    var x = H * 256 + L;
    var m2;
    m2 = memory[0][x];
    memory[0][x] = toShort(memory[0][x] * 2 + CY);
    CY = toShort((m2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrc_mhl() {
    var x = H * 256 + L;
    CY = toShort(memory[0][x] & 0x0001);
    memory[0][x] = toShort(memory[0][x] / 2);
    memory[0][x] = toShort(memory[0][x] | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rr_mhl() {
    var x = H * 256 + L;
    var m2;
    m2 = memory[0][x];
    memory[0][x] = toShort((memory[0][x] / 2) | (CY * 128));
    CY = toShort(m2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//****************************************************
function rlc_mix() {
    CY = toShort((memory[0][IX + op3] & 0x0080) / 128);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] * 2);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rl_mix() {
    var ix2;
    ix2 = memory[0][IX + op3];
    memory[0][IX + op3] = toShort(memory[0][IX + op3] * 2 + CY);
    CY = toShort((ix2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrc_mix() {
    CY = toShort(memory[0][IX + op3] & 0x0001);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] / 2);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rr_mix() {
    var ix2;
    ix2 = memory[0][IX + op3];
    memory[0][IX + op3] = toShort((memory[0][IX + op3] / 2) | (CY * 128));
    CY = toShort(ix2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//**********************************************
function rlc_miy() {
    CY = toShort((memory[0][IY + op3] & 0x0080) / 128);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] * 2);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] + CY);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rl_miy() {
    var iy2;
    iy2 = memory[0][IY + op3];
    memory[0][IY + op3] = toShort(memory[0][IY + op3] * 2 + CY);
    CY = toShort((iy2 & 0x0080) / 128);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rrc_miy() {
    CY = toShort(memory[0][IY + op3] & 0x0001);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] / 2);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] | (CY * 128));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function rr_miy() {
    var iy2;
    iy2 = memory[0][IY + op3];
    memory[0][IY + op3] = toShort((memory[0][IY + op3] / 2) | (CY * 128));
    CY = toShort(iy2 & 0x0001);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//**********************************************************
function slaa() {
    CY = toShort((A & 0x0080) / 128);
    A = toShort(A * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slab() {
    CY = toShort((B & 0x0080) / 128);
    B = toShort(B * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slac() {
    CY = toShort((C & 0x0080) / 128);
    C = toShort(C * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slad() {
    CY = toShort((D & 0x0080) / 128);
    D = toShort(D * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slae() {
    CY = toShort((E & 0x0080) / 128);
    E = toShort(E * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slah() {
    CY = toShort((H & 0x0080) / 128);
    H = toShort(H * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function slal() {
    CY = toShort((L & 0x0080) / 128);
    L = toShort(L * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sla_mhl() {
    var x = H * 256 + L;
    CY = toShort((memory[0][x] & 0x0080) / 128);
    memory[0][x] = toShort(memory[0][x] * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sla_mix() {
    CY = toShort((memory[0][IX + op3] & 0x0080) / 128);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sla_miy() {
    CY = toShort((memory[0][IY + op3] & 0x0080) / 128);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] * 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//********************************************
function sraa() {
    CY = toShort(A & 0x0001);
    A = toShort((A / 2) | (A & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srab() {
    CY = toShort(B & 0x0001);
    B = toShort((B / 2) | (B & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srac() {
    CY = toShort(C & 0x0001);
    C = toShort((C / 2) | (C & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srad() {
    CY = toShort(D & 0x0001);
    D = toShort((D / 2) | (D & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srae() {
    CY = toShort(E & 0x0001);
    E = toShort((E / 2) | (E & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srah() {
    CY = toShort(H & 0x0001);
    H = toShort((H / 2) | (H & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sral() {
    CY = toShort(L & 0x0001);
    L = toShort((L / 2) | (L & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sra_mhl() {
    var x = H * 256 + L;
    CY = toShort(memory[0][x] & 0x0001);
    memory[0][x] = toShort((memory[0][x] / 2) | (memory[0][x] & 0x0080));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sra_mix() {
    CY = toShort(memory[0][IX + op3] & 0x0001);
    memory[0][IX + op3] = toShort(
        (memory[0][IX + op3] / 2) | (memory[0][IX + op3] & 0x0080)
    );
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function sra_miy() {
    CY = toShort(memory[0][IY + op3] & 0x0001);
    memory[0][IY + op3] = toShort(
        (memory[0][IY + op3] / 2) | (memory[0][IY + op3] & 0x0080)
    );
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//**********************************************************
function srla() {
    CY = toShort(A & 0x0001);
    A = toShort(A / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srlb() {
    CY = toShort(B & 0x0001);
    B = toShort(B / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srlc() {
    CY = toShort(C & 0x0001);
    C = toShort(C / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srld() {
    CY = toShort(D & 0x0001);
    D = toShort(D / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srle() {
    CY = toShort(E & 0x0001);
    E = toShort(E / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srlh() {
    CY = toShort(H & 0x0001);
    H = toShort(H / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srll() {
    CY = toShort(L & 0x0001);
    L = toShort(L / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srl_mhl() {
    var x = H * 256 + L;
    CY = toShort(memory[0][x] & 0x0001);
    memory[0][x] = toShort(memory[0][x] / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srl_mix() {
    CY = toShort(memory[0][IX + op3] & 0x0001);
    memory[0][IX + op3] = toShort(memory[0][IX + op3] / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}

function srl_miy() {
    CY = toShort(memory[0][IY + op3] & 0x0001);
    memory[0][IY + op3] = toShort(memory[0][IY + op3] / 2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagc();
}
//******************************************************
function rldd() {
    var x = H * 256 + L;
    var mhl = memory[0][x];
    var a2 = A;
    A = toShort((a2 & 0x00f0) + (mhl & 0x00f0) / 16);
    memory[0][x] = toShort((mhl & 0x000f) * 16 + (a2 & 0x000f));
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
}

function rrdd() {
    var x = H * 256 + L;
    var mhl = memory[0][x];
    var a2 = A;
    A = toShort((a2 & 0x00f0) + (mhl & 0x000f));
    memory[0][x] = toShort((mhl & 0x00f0) / 16 + (a2 & 0x000f) * 16);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
}