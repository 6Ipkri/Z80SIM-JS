function jp_nn() {
  PC = op3 * 256 + op2;
}
function jp_nz_nn() {
  if ((F & 0x0040) == 0x0000) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_z_nn() {
  if ((F & 0x0040) == 0x0040) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_nc_nn() {
  if ((F & 0x0001) == 0x0000) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_c_nn() {
  if ((F & 0x0001) == 0x0001) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_po_nn() {
  if ((F & 0x0004) == 0x0000) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_pe_nn() {
  if ((F & 0x0004) == 0x0004) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_p_nn() {
  if ((F & 0x0080) == 0x0000) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
function jp_m_nn() {
  if ((F & 0x0080) == 0x0080) {
    PC = op3 * 256 + op2;
  } else {
    PC = PC + 1;
  }
}
//**********************************************************
function jr_e() {
  if ((op2 & 0x0080) == 0x0080) {
    op2 = toShort(~op2 & 0x00ff);
    PC = PC - op2;
  } else {
    PC = PC + op2 + 1;
  }
}
function jr_c_e() {
  if ((F & 0x0001) == 0x0001) {
    if ((op2 & 0x0080) == 0x0080) {
      //two complement
      op2 = toShort(~op2 & 0x00ff);
      PC = PC - op2;
    } else {
      PC = PC + op2 + 1;
    }
    T_state = T_state + 12;
  } else {
    PC = PC + 1;
    T_state = T_state + 7;
  }
}
function jr_nc_e() {
  if ((F & 0x0001) == 0x0000) {
    if ((op2 & 0x0080) == 0x0080) {
      op2 = toShort(~op2 & 0x00ff);
      PC = PC - op2;
    } else {
      PC = PC + op2 + 1;
    }
    T_state = T_state + 12;
  } else {
    PC = PC + 1;
    T_state = T_state + 7;
  }
}
function jr_z_e() {
  if ((F & 0x0040) == 0x0040) {
    if ((op2 & 0x0080) == 0x0080) {
      op2 = toShort(~op2 & 0x00ff);
      PC = PC - op2;
    } else {
      PC = PC + op2 + 1;
    }
    T_state = T_state + 12;
  } else {
    PC = PC + 1;
    T_state = T_state + 7;
  }
}
function jr_nz_e() {
  if ((F & 0x0040) == 0x0000) {
    if ((op2 & 0x0080) == 0x0080) {
      op2 = toShort(~op2 & 0x00ff);
      PC = PC - op2;
    } else {
      PC = PC + op2 + 1;
    }
    T_state = T_state + 12;
  } else {
    PC = PC + 1;
    T_state = T_state + 7;
  }
}
//*******************************************************
function jp_hl() {
  PC = H * 256 + L;
}
function jp_ix() {
  PC = IX;
}
function jp_iy() {
  PC = IY;
}
//********************************************************
function djnz() {
  B = toShort(B - 1);
  if (B != 0x0000) {
    if ((op2 & 0x0080) == 0x0080) {
      op2 = toShort(~op2 & 0x00ff);
      PC = PC - op2;
    } else {
      PC = PC + op2 + 1;
    }
    T_state = T_state + 13;
  } else {
    PC = PC + 1;
    T_state = T_state + 8;
  }
}
