function add_a_a(){
    A = toShort(A + A);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_b(){
    A = toShort(A + B);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_c(){
    A = toShort(A + C);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_d(){
    A = toShort(A + D);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_e(){
    A = toShort(A + E);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_h(){
    A = toShort(A + H);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_l(){
    A = toShort(A + L);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_n(){
    A = toShort(A + op2);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_hl(){
    var x = ((H*256) + L);
    A = toShort(A + memory[0][x]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_IX(){
    A = toShort(A + memory[0][IX+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function add_a_IY(){
    A = toShort(A + memory[0][IY+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++++
function adc_a_a(){
    A = toShort(A + A + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_b(){
    A = toShort(A + B + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_c(){
    A = toShort(A + C + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_d(){
    A = toShort(A + D + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_e(){
    A = toShort(A + E + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_h(){
    A = toShort(A + H + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_l(){
    A = toShort(A + L + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_n(){
    A = toShort(A + op2 + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_hl(){
    var x = ((H*256) + L);
    A = toShort(A + memory[0][x] + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_IX(){
    A = toShort(A + memory[0][IX+op3] + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_a_IY(){
    A = toShort(A + memory[0][IY+op3] + CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++++++++++
function sub_a(){
    A = toShort(A - A);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_b(){
    A = toShort(A - B);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_c(){
    A = toShort(A - C);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_d(){
    A = toShort(A - D);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_e(){
    A = toShort(A - E);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_h(){
    A = toShort(A - H);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_l(){
    A = toShort(A - L);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_a_n(){
    A = toShort(A - op2);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_hl(){
    var x = ((H*256) + L);
    A = toShort(A - memory[0][x]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_IX(){
    A = toShort(A - memory[0][IX+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sub_IY(){
    A = toShort(A - memory[0][IY+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
//+++++++++++++++++++++++++++++++++++
function sbc_a_a(){
    A = toShort(A - A - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_b(){
    A = toShort(A - B - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_c(){
    A = toShort(A - C - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_d(){
    A = toShort(A - D - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_e(){
    A = toShort(A - E - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_h(){
    A = toShort(A - H - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_l(){
    A = toShort(A - L - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_n(){
    A = toShort(A - op2 - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_hl(){
    var x = ((H*256) + L);
    A = toShort(A - memory[0][x] - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_IX(){
    A = toShort(A - memory[0][IX+op3] - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_a_IY(){
    A = toShort(A - memory[0][IY+op3] - CY);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
}
//++++++++++++++++++++++++++++++++++++
function and_a(){
    A = toShort(A & A);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_b(){
    A = toShort(A & B);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_c(){
    A = toShort(A & C);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_d(){
    A = toShort(A & D);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_e(){
    A = toShort(A & E);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_h(){
    A = toShort(A & H);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_l(){
    A = toShort(A & L);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_n(){
    A = toShort(A & op2);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_hl(){
    var x = ((H*256) + L);
    A = toShort(A & memory[0][x]);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_IX(){
    A = toShort(A & memory[0][IX+op3]);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function and_IY(){
    A = toShort(A & memory[0][IY+op3]);
    flags();
    flagz();
    flaghl(true);
    flagpvp();
    flagn(false);
    flagcl(false);
}
//++++++++++++++++++++++++++++++++++++
function or_a(){
    A = toShort(A | A);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_b(){
    A = toShort(A | B);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_c(){
    A = toShort(A | C);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_d(){
    A = toShort(A | D);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_e(){
    A = toShort(A | E);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_h(){
    A = toShort(A | H);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_l(){
    A = toShort(A | L);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_n(){
    A = toShort(A | op2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_hl(){
    var x = ((H*256) + L);
    A = toShort(A | memory[0][x]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_IX(){
    A = toShort(A | memory[0][IX+op3]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function or_IY(){
    A = toShort(A | memory[0][IY+op3]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
//++++++++++++++++++++++++++++++
function xor_a(){
    A = toShort(A ^ A);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_b(){
    A = toShort(A ^ B);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_c(){
    A = toShort(A ^ C);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_d(){
    A = toShort(A ^ D);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_e(){
    A = toShort(A ^ E);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_h(){
    A = toShort(A ^ H);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);;
}
function xor_l(){
    A = toShort(A ^ L);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_n(){
    A = toShort(A ^ op2);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_hl(){
    var x = ((H*256) + L);
    A = toShort(A ^ memory[0][x]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_IX(){
    A = toShort(A ^ memory[0][IX+op3]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
function xor_IY(){
    A = toShort(A ^ memory[0][IY+op3]);
    flags();
    flagz();
    flaghl(false);
    flagpvp();
    flagn(false);
    flagcl(false);
}
//+++++++++++++++++++++++++++++++++++
function cp_a(){
    var a;
    a = A;
    A = toShort(A - A);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_b(){
    var a;
    a = A;
    A = toShort(A - B);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_c(){
    var a;
    a = A;
    A = toShort(A - C);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_d(){
    var a;
    a = A;
    A = toShort(A - D);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_e(){
    var a;
    a = A;
    A = toShort(A - E);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_h(){
    var a;
    a = A;
    A = toShort(A - H);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_l(){
    var a;
    a = A;
    A = toShort(A - L);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_n(){
    var a;
    a = A;
    A = toShort(A - op2);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_hl(){
    var a;
    a = A;
    var x = ((H*256) + L);
    A = toShort(A - memory[0][x]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_IX(){
    var a;
    a = A;
    A = toShort(A - memory[0][IX+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
function cp_IY(){
    var a;
    a = A;
    A = toShort(A - memory[0][IY+op3]);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    flagc();
    A = a;
}
//+++++++++++++++++++++++++++
function inc_a(){
    A = toShort(A + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_b(){
    B = toShort(B + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_c(){
    C = toShort(C + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_d(){
    D = toShort(D + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_e(){
    E = toShort(E + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_h(){
    H = toShort(H + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_l(){
    L = toShort(L + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_mhl(){
    var x = ((H*256) + L);
    memory[0][x] = toShort(memory[0][x] + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_IX(){
    memory[0][IX+op3] = toShort(memory[0][IX+op3] + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
function inc_IY(){
    memory[0][IY+op3] = toShort(memory[0][IY+op3] + 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(false);
}
//++++++++++++++++++++++++++++++++++++
function dec_a(){
    A = toShort(A - 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
}
function dec_b(){
    B = toShort(B - 1);
    var keepa = A;
    A = B;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_c(){
    C = toShort(C - 1);
    var keepa = A;
    A = C;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_d(){
    D = toShort(D - 1);
    var keepa = A;
    A = D;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_e(){
    E = toShort(E - 1);
    var keepa = A;
    A = E;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_h(){
    H = toShort(H - 1);
    var keepa = A;
    A = H;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_l(){
    L = toShort(L - 1);
    var keepa = A;
    A = L;
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
    A = keepa;
}
function dec_mhl(){
    var x = ((H*256) + L);
    memory[0][x] = toShort(memory[0][x] - 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
}
function dec_IX(){
    memory[0][IX+op3] = toShort(memory[0][IX+op3] - 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
}
function dec_IY(){
    memory[0][IY+op3] = toShort(memory[0][IY+op3] - 1);
    flags();
    flagz();
    flagh();
    flagpvo();
    flagn(true);
}