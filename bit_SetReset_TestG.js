function bit_0_B() {
  if ((B & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_B() {
  if ((B & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_B() {
  if ((B & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_B() {
  if ((B & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_B() {
  if ((B & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_B() {
  if ((B & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_B() {
  if ((B & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_B() {
  if ((B & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_C() {
  if ((C & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_C() {
  if ((C & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_C() {
  if ((C & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_C() {
  if ((C & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_C() {
  if ((C & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_C() {
  if ((C & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_C() {
  if ((C & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_C() {
  if ((C & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_D() {
  if ((D & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_D() {
  if ((D & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_D() {
  if ((D & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_D() {
  if ((D & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_D() {
  if ((D & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_D() {
  if ((D & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_D() {
  if ((D & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_D() {
  if ((D & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_E() {
  if ((E & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_E() {
  if ((E & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_E() {
  if ((E & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_E() {
  if ((E & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_E() {
  if ((E & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_E() {
  if ((E & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_E() {
  if ((E & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_E() {
  if ((E & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_H() {
  if ((H & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_H() {
  if ((H & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_H() {
  if ((H & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_H() {
  if ((H & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_H() {
  if ((H & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_H() {
  if ((H & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_H() {
  if ((H & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_H() {
  if ((H & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_L() {
  if ((L & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_L() {
  if ((L & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_L() {
  if ((L & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_L() {
  if ((L & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_L() {
  if ((L & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_L() {
  if ((L & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_L() {
  if ((L & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_L() {
  if ((L & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_0_A() {
  if ((A & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_A() {
  if ((A & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_A() {
  if ((A & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_A() {
  if ((A & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_A() {
  if ((A & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_A() {
  if ((A & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_A() {
  if ((A & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_A() {
  if ((A & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
//BIT b,(HL) ::  Z <- (HL)b
function bit_0_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_mhl() {
  var tempHL = H * 256 + L;
  var mHL = memory[0][tempHL];

  if ((mHL & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
//BIT b,(IX+d)b  :: Z <- (IX+d)b
function bit_0_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_ixd() {
  var mIXd = memory[0][IX + op3];
  if ((mIXd & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
//BIT b,(IY+d) ::  Z <- (IY+d)b
function bit_0_iyd() {
  var mIYd = memory[0][IY + op3];
  if ((mIYd & 0x0001) == 0x0001) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_1_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0002) == 0x0002) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_2_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0004) == 0x0004) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_3_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0008) == 0x0008) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_4_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0010) == 0x0010) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_5_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0020) == 0x0020) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_6_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0040) == 0x0040) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
function bit_7_iyd() {
  var mIYd = memory[0][IX + op3];
  if ((mIYd & 0x0080) == 0x0080) {
    F = toShort(F & 0x00bf);
  } else {
    F = toShort(F | 0x0040);
  }
  flagz();
  flaghl(true);
  flagn(false);
}
//SET b,r  ::  rb <- 1
function set_0_B() {
  B = toShort(B | 0x0001);
}
function set_1_B() {
  B = toShort(B | 0x0002);
}
function set_2_B() {
  B = toShort(B | 0x0004);
}
function set_3_B() {
  B = toShort(B | 0x0008);
}
function set_4_B() {
  B = toShort(B | 0x0010);
}
function set_5_B() {
  B = toShort(B | 0x0020);
}
function set_6_B() {
  B = toShort(B | 0x0040);
}
function set_7_B() {
  B = toShort(B | 0x0080);
}
function set_0_C() {
  C = toShort(C | 0x0001);
}
function set_1_C() {
  C = toShort(C | 0x0002);
}
function set_2_C() {
  C = toShort(C | 0x0004);
}
function set_3_C() {
  C = toShort(C | 0x0008);
}
function set_4_C() {
  C = toShort(C | 0x0010);
}
function set_5_C() {
  C = toShort(C | 0x0020);
}
function set_6_C() {
  C = toShort(C | 0x0040);
}
function set_7_C() {
  C = toShort(C | 0x0080);
}
function set_0_D() {
  D = toShort(D | 0x0001);
}
function set_1_D() {
  D = toShort(D | 0x0002);
}
function set_2_D() {
  D = toShort(D | 0x0004);
}
function set_3_D() {
  D = toShort(D | 0x0008);
}
function set_4_D() {
  D = toShort(D | 0x0010);
}
function set_5_D() {
  D = toShort(D | 0x0020);
}
function set_6_D() {
  D = toShort(D | 0x0040);
}
function set_7_D() {
  D = toShort(D | 0x0080);
}
function set_0_E() {
  E = toShort(E | 0x0001);
}
function set_1_E() {
  E = toShort(E | 0x0002);
}
function set_2_E() {
  E = toShort(E | 0x0004);
}
function set_3_E() {
  E = toShort(E | 0x0008);
}
function set_4_E() {
  E = toShort(E | 0x0010);
}
function set_5_E() {
  E = toShort(E | 0x0020);
}
function set_6_E() {
  E = toShort(E | 0x0040);
}
function set_7_E() {
  E = toShort(E | 0x0080);
}
function set_0_H() {
  H = toShort(H | 0x0001);
}
function set_1_H() {
  H = toShort(H | 0x0002);
}
function set_2_H() {
  H = toShort(H | 0x0004);
}
function set_3_H() {
  H = toShort(H | 0x0008);
}
function set_4_H() {
  H = toShort(H | 0x0010);
}
function set_5_H() {
  H = toShort(H | 0x0020);
}
function set_6_H() {
  H = toShort(H | 0x0040);
}
function set_7_H() {
  H = toShort(H | 0x0080);
}
function set_0_L() {
  L = toShort(L | 0x0001);
}
function set_1_L() {
  L = toShort(L | 0x0002);
}
function set_2_L() {
  L = toShort(L | 0x0004);
}
function set_3_L() {
  L = toShort(L | 0x0008);
}
function set_4_L() {
  L = toShort(L | 0x0010);
}
function set_5_L() {
  L = toShort(L | 0x0020);
}
function set_6_L() {
  L = toShort(L | 0x0040);
}
function set_7_L() {
  L = toShort(L | 0x0080);
}
function set_0_A() {
  A = toShort(A | 0x0001);
}
function set_1_A() {
  A = toShort(A | 0x0002);
}
function set_2_A() {
  A = toShort(A | 0x0004);
}
function set_3_A() {
  A = toShort(A | 0x0008);
}
function set_4_A() {
  A = toShort(A | 0x0010);
}
function set_5_A() {
  A = toShort(A | 0x0020);
}
function set_6_A() {
  A = toShort(A | 0x0040);
}
function set_7_A() {
  A = toShort(A | 0x0080);
}
//SET b,(HL) :: (HL)b <-1
function set_0_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0001);
}
function set_1_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0002);
}
function set_2_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0004);
}
function set_3_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0008);
}
function set_4_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0010);
}
function set_5_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0020);
}
function set_6_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0040);
}
function set_7_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] | 0x0080);
}
//SET b,(IX+d) :: (IX+d)b <- 1
function set_0_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0001);
}
function set_1_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0002);
}
function set_2_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0004);
}
function set_3_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0008);
}
function set_4_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0010);
}
function set_5_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0020);
}
function set_6_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0040);
}
function set_7_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] | 0x0080);
}
//SET b,(IY+d) :: (IY+d)b <- 1
function set_0_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0001);
}
function set_1_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0002);
}
function set_2_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0004);
}
function set_3_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0008);
}
function set_4_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0010);
}
function set_5_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0020);
}
function set_6_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0040);
}
function set_7_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] | 0x0080);
}
//RES b,m   :: mb <- 0
//          :: mb is r,(HL),(IX+d),(IY+d)
//SET b,r  ::  rb <- 1
function res_0_B() {
  B = toShort(B & 0x00fe);
}
function res_1_B() {
  B = toShort(B & 0x00fd);
}
function res_2_B() {
  B = toShort(B & 0x00fb);
}
function res_3_B() {
  B = toShort(B & 0x00f7);
}
function res_4_B() {
  B = toShort(B & 0x00ef);
}
function res_5_B() {
  B = toShort(B & 0x00df);
}
function res_6_B() {
  B = toShort(B & 0x00bd);
}
function res_7_B() {
  B = toShort(B & 0x007f);
}
function res_0_C() {
  C = toShort(C & 0x00fe);
}
function res_1_C() {
  C = toShort(C & 0x00fd);
}
function res_2_C() {
  C = toShort(C & 0x00fb);
}
function res_3_C() {
  C = toShort(C & 0x00f7);
}
function res_4_C() {
  C = toShort(C & 0x00ef);
}
function res_5_C() {
  C = toShort(C & 0x00df);
}
function res_6_C() {
  C = toShort(C & 0x00bd);
}
function res_7_C() {
  C = toShort(C & 0x007f);
}
function res_0_D() {
  D = toShort(D & 0x00fe);
}
function res_1_D() {
  D = toShort(D & 0x00fd);
}
function res_2_D() {
  D = toShort(D & 0x00fb);
}
function res_3_D() {
  D = toShort(D & 0x00f7);
}
function res_4_D() {
  D = toShort(D & 0x00ef);
}
function res_5_D() {
  D = toShort(D & 0x00df);
}
function res_6_D() {
  D = toShort(D & 0x00bd);
}
function res_7_D() {
  D = toShort(D & 0x007f);
}
function res_0_E() {
  E = toShort(E & 0x00fe);
}
function res_1_E() {
  E = toShort(E & 0x00fd);
}
function res_2_E() {
  E = toShort(E & 0x00fb);
}
function res_3_E() {
  E = toShort(E & 0x00f7);
}
function res_4_E() {
  E = toShort(E & 0x00ef);
}
function res_5_E() {
  E = toShort(E & 0x00df);
}
function res_6_E() {
  E = toShort(E & 0x00bd);
}
function res_7_E() {
  E = toShort(E & 0x007f);
}
function res_0_H() {
  H = toShort(H & 0x00fe);
}
function res_1_H() {
  H = toShort(H & 0x00fd);
}
function res_2_H() {
  H = toShort(H & 0x00fb);
}
function res_3_H() {
  H = toShort(H & 0x00f7);
}
function res_4_H() {
  H = toShort(H & 0x00ef);
}
function res_5_H() {
  H = toShort(H & 0x00df);
}
function res_6_H() {
  H = toShort(H & 0x00bd);
}
function res_7_H() {
  H = toShort(H & 0x007f);
}
function res_0_L() {
  L = toShort(L & 0x00fe);
}
function res_1_L() {
  L = toShort(L & 0x00fd);
}
function res_2_L() {
  L = toShort(L & 0x00fb);
}
function res_3_L() {
  L = toShort(L & 0x00f7);
}
function res_4_L() {
  L = toShort(L & 0x00ef);
}
function res_5_L() {
  L = toShort(L & 0x00df);
}
function res_6_L() {
  L = toShort(L & 0x00bd);
}
function res_7_L() {
  L = toShort(L & 0x007f);
}
function res_0_A() {
  A = toShort(A & 0x00fe);
}
function res_1_A() {
  A = toShort(A & 0x00fd);
}
function res_2_A() {
  A = toShort(A & 0x00fb);
}
function res_3_A() {
  A = toShort(A & 0x00f7);
}
function res_4_A() {
  A = toShort(A & 0x00ef);
}
function res_5_A() {
  A = toShort(A & 0x00df);
}
function res_6_A() {
  A = toShort(A & 0x00bf);
}
function res_7_A() {
  A = toShort(A & 0x007f);
}
//SET b,(HL) :: (HL)b <-1
function res_0_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00fe);
}
function res_1_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00fd);
}
function res_2_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00fb);
}
function res_3_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00f7);
}
function res_4_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00ef);
}
function res_5_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00df);
}
function res_6_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x00bf);
}
function res_7_mhl() {
  var tempHL = H * 256 + L;
  memory[0][tempHL] = toShort(memory[0][tempHL] & 0x007f);
}
//SET b,(IX+d) :: (IX+d)b <- 1
function res_0_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00fe);
}
function res_1_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00fd);
}
function res_2_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00fb);
}
function res_3_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00f7);
}
function res_4_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00ef);
}
function res_5_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00df);
}
function res_6_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x00bf);
}
function res_7_ixd() {
  var tempIXd = IX + op3;
  memory[0][tempIXd] = toShort(memory[0][tempIXd] & 0x007f);
}
//SET b,(IY+d) :: (IY+d)b <- 1
function res_0_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00fe);
}
function res_1_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00fd);
}
function res_2_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00fb);
}
function res_3_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00f7);
}
function res_4_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00ef);
}
function res_5_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00df);
}
function res_6_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x00bf);
}
function res_7_iyd() {
  var tempIYd = IY + op3;
  memory[0][tempIYd] = toShort(memory[0][tempIYd] & 0x007f);
}
