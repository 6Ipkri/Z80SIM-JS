function ld_b_b() {}
function ld_b_c() {
  B = C;
}
function ld_b_d() {
  B = D;
}
function ld_b_e() {
  B = E;
}
function ld_b_h() {
  B = H;
}
function ld_b_l() {
  B = L;
}
function ld_b_a() {
  B = A;
}
function ld_c_b() {
  C = B;
}
function ld_c_c() {}
function ld_c_d() {
  C = D;
}
function ld_c_e() {
  C = E;
}
function ld_c_h() {
  C = H;
}
function ld_c_l() {
  C = L;
}
function ld_c_a() {
  C = A;
}
function ld_d_b() {
  D = B;
}
function ld_d_c() {
  D = C;
}
function ld_d_d() {}
function ld_d_e() {
  D = E;
}
function ld_d_h() {
  D = H;
}
function ld_d_l() {
  D = L;
}
function ld_d_a() {
  D = A;
}
function ld_e_b() {
  E = B;
}
function ld_e_c() {
  E = C;
}
function ld_e_d() {
  E = D;
}
function ld_e_e() {}
function ld_e_h() {
  E = H;
}
function ld_e_l() {
  E = L;
}
function ld_e_a() {
  E = A;
}
function ld_h_b() {
  H = B;
}
function ld_h_c() {
  H = C;
}
function ld_h_d() {
  H = D;
}
function ld_h_e() {
  H = E;
}
function ld_h_h() {}
function ld_h_l() {
  H = L;
}
function ld_h_a() {
  H = A;
}
function ld_l_b() {
  L = B;
}
function ld_l_c() {
  L = C;
}
function ld_l_d() {
  L = D;
}
function ld_l_e() {
  L = E;
}
function ld_l_h() {
  L = H;
}
function ld_l_l() {}
function ld_l_a() {
  L = A;
}
function ld_a_b() {
  A = B;
}
function ld_a_c() {
  A = C;
}
function ld_a_d() {
  A = D;
}
function ld_a_e() {
  A = E;
}
function ld_a_h() {
  A = H;
}
function ld_a_l() {
  A = L;
}
function ld_a_a() {}
//+++++++++++++++++++++++++++++++++++++++++
function ld_b_n() {
  B = op2;
}
function ld_c_n() {
  C = op2;
}
function ld_d_n() {
  D = op2;
}
function ld_e_n() {
  E = op2;
}
function ld_h_n() {
  H = op2;
}
function ld_l_n() {
  L = op2;
}
function ld_a_n() {
  A = op2;
}
//+++++++++++++++++++++++++++++++
function ld_b_hl() {
  var x = H * 256 + L;
  B = toShort(memory[0][x]);
}
function ld_c_hl() {
  var x = H * 256 + L;
  C = toShort(memory[0][x]);
}
function ld_d_hl() {
  var x = H * 256 + L;
  D = toShort(memory[0][x]);
}
function ld_e_hl() {
  var x = H * 256 + L;
  E = toShort(memory[0][x]);
}
function ld_h_hl() {
  var x = H * 256 + L;
  H = toShort(memory[0][x]);
}
function ld_l_hl() {
  var x = H * 256 + L;
  L = toShort(memory[0][x]);
}
function ld_a_hl() {
  var x = H * 256 + L;
  A = toShort(memory[0][x]);
}
//+++++++++++++++++++++++++++++++++++++
function ld_b_ix_d() {
  B = toShort(memory[0][IX + op3]);
}
function ld_c_ix_d() {
  C = toShort(memory[0][IX + op3]);
}
function ld_d_ix_d() {
  D = toShort(memory[0][IX + op3]);
}
function ld_e_ix_d() {
  E = toShort(memory[0][IX + op3]);
}
function ld_h_ix_d() {
  H = toShort(memory[0][IX + op3]);
}
function ld_l_ix_d() {
  L = toShort(memory[0][IX + op3]);
}
function ld_a_ix_d() {
  A = toShort(memory[0][IX + op3]);
}
//+++++++++++++++++++++++++++++++++++++++++++
function ld_b_iy_d() {
  B = toShort(memory[0][IY + op3]);
}
function ld_c_iy_d() {
  C = toShort(memory[0][IY + op3]);
}
function ld_d_iy_d() {
  D = toShort(memory[0][IY + op3]);
}
function ld_e_iy_d() {
  E = toShort(memory[0][IY + op3]);
}
function ld_h_iy_d() {
  H = toShort(memory[0][IY + op3]);
}
function ld_l_iy_d() {
  L = toShort(memory[0][IY + op3]);
}
function ld_a_iy_d() {
  A = toShort(memory[0][IY + op3]);
}
//+++++++++++++++++++++++++++++
function ld_hl_b() {
  var x = H * 256 + L;
  memory[0][x] = toShort(B);
}
function ld_hl_c() {
  var x = H * 256 + L;
  memory[0][x] = toShort(C);
}
function ld_hl_d() {
  var x = H * 256 + L;
  memory[0][x] = toShort(D);
}
function ld_hl_e() {
  var x = H * 256 + L;
  memory[0][x] = toShort(E);
}
function ld_hl_h() {
  var x = H * 256 + L;
  memory[0][x] = toShort(H);
}
function ld_hl_l() {
  var x = H * 256 + L;
  memory[0][x] = toShort(L);
}
function ld_hl_a() {
  var x = H * 256 + L;
  memory[0][x] = toShort(A);
}
//++++++++++++++++++++++++++
function ld_ix_b() {
  memory[0][IX + op3] = toShort(B);
}
function ld_ix_c() {
  memory[0][IX + op3] = toShort(C);
}
function ld_ix_d() {
  memory[0][IX + op3] = toShort(D);
}
function ld_ix_e() {
  memory[0][IX + op3] = toShort(E);
}
function ld_ix_h() {
  memory[0][IX + op3] = toShort(H);
}
function ld_ix_l() {
  memory[0][IX + op3] = toShort(L);
}
function ld_ix_a() {
  memory[0][IX + op3] = toShort(A);
}
//++++++++++++++++++++++++++
function ld_iy_b() {
  memory[0][IY + op3] = toShort(B);
}
function ld_iy_c() {
  memory[0][IY + op3] = toShort(C);
}
function ld_iy_d() {
  memory[0][IY + op3] = toShort(D);
}
function ld_iy_e() {
  memory[0][IY + op3] = toShort(E);
}
function ld_iy_h() {
  memory[0][IY + op3] = toShort(H);
}
function ld_iy_l() {
  memory[0][IY + op3] = toShort(L);
}
function ld_iy_a() {
  memory[0][IY + op3] = toShort(A);
}
//+++++++++++++++++++++++++++++++++
function ld_hl_n() {
  var x = H * 256 + L;
  memory[0][x] = toShort(op2);
}
function ld_ix_n() {
  memory[0][IX + op3] = toShort(op4);
}
function ld_iy_n() {
  memory[0][IY + op3] = toShort(op4);
}
//++++++++++++++++++++++++++
function ld_a_bc() {
  var x = B * 256 + C;
  A = toShort(memory[0][x]);
}
function ld_a_de() {
  var x = D * 256 + E;
  A = toShort(memory[0][x]);
}
function ld_a_nn() {
  var x = op3 * 256 + op2;
  A = toShort(memory[0][x]);
}
//++++++++++++++++++++++++++++++
function ld_bc_a() {
  var x = B * 256 + C;
  memory[0][x] = toShort(A);
}
function ld_de_a() {
  var x = D * 256 + E;
  memory[0][x] = toShort(A);
}
function ld_nn_a() {
  var x = op3 * 256 + op2;
  memory[0][x] = toShort(A);
}
//++++++++++++++++++++++++++++++++
function ld_a_i() {
  A = I;
  flags();
  flagz();
  flaghl(false);
  flagpviff(IFF2);
  flagn(false);
}
function ld_a_r() {
  A = R;
  flags();
  flagz();
  flaghl(false);
  flagpviff(IFF2);
  flagn(false);
}
function ld_i_a() {
  I = A;
}
function ld_r_a() {
  R = A;
}
