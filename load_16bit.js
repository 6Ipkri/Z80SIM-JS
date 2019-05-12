function ld_bc_nn(){
    B = op3;
    C = op2;
    
}
function ld_de_nn(){
    D = op3;
    E = op2;
    
}
function ld_hl_nn(){
    H = op3;
    L = op2;
    
}
function ld_sp_nn(){
    SP = (op3*256) + op2;
    
}
function ld_ix_nn(){
    IX = (op3*256) + op2;
    
}
function ld_iy_nn(){
    IY = (op3*256) + op2;
    
}
//+++++++++++++++++++++++
function ld_hl_mnn(){
    var x = ((op3*256) + op2);
    H = toShort(memory[0][x+1]);
    L = toShort(memory[0][x]);
    
}
//++++++++++++++++
function ld_bc_mnn(){
    var x = ((op3*256) + op2);
    B = toShort(memory[0][x+1]);
    C = toShort(memory[0][x]);
    
}
function ld_de_mnn(){
    var x = ((op3*256) + op2);
    D = toShort(memory[0][x+1]);
    E = toShort(memory[0][x]);
    
}
function ld_hl_mmnn(){
    var x = ((op3*256) + op2);
    H = toShort(memory[0][x+1]);
    L = toShort(memory[0][x]);
    
}
function ld_sp_mnn(){
    var x = ((op3*256) + op2);
    SP = (((memory[0][x+1])*256) + memory[0][x]);
    
}
//+++++++++++++++++++++++++++
function ld_ix_mnn(){
    var x = ((op3*256) + op2);
    IX = (((memory[0][x+1])*256) + memory[0][x]);
    
}
function ld_iy_mnn(){
    var x = ((op3*256) + op2);
    IY = (((memory[0][x+1])*256) + memory[0][x]);
    
}
//++++++++++++++++++++++++++++++
function ld_mnn_hl(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort(H);
    memory[0][x] = toShort(L);
    
}
//++++++++++++++++++++++++++++++
function ld_mnn_bc(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort(B);
    memory[0][x] = toShort(C);
    
}
function ld_mnn_de(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort(D);
    memory[0][x] = toShort(E);
    
}
function ld_mmnn_hl(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort(H);
    memory[0][x] = toShort(L);
    
}
function ld_mnn_sp(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort((SP&0xff00)/256);
    memory[0][x] = toShort(SP&0xff);
    
}
//++++++++++++++++++++++++++++
function ld_mnn_ix(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort((IX&0xff00)/256);
    memory[0][x] = toShort(IX&0xff);
    
}
function ld_mnn_iy(){
    var x = ((op3*256) + op2);
    memory[0][x+1] = toShort((IY&0xff00)/256);
    memory[0][x] = toShort(IY&0xff);
    
}
//+++++++++++++++++++++++++++++++
function ld_sp_hl(){
    var x = ((H*256) + L);
    SP = x;
    
}
function ld_sp_ix(){
    SP = IX;
    
}
function ld_sp_iy(){
    SP = IY;
    
}
//++++++++++++++++++++++++++++++
function push_bc(){
    memory[0][SP-2] = C;
    memory[0][SP-1] = B;
    SP = SP -2;
    
}
function push_de(){
    memory[0][SP-2] = E;
    memory[0][SP-1] = D;
    SP = SP -2;
    
}
function push_hl(){
    memory[0][SP-2] = L;
    memory[0][SP-1] = H;
    SP = SP -2;
    
}
function push_af(){
    memory[0][SP-2] = F;
    memory[0][SP-1] = A;
    SP = SP -2;
    
}
function push_ix(){
    memory[0][SP-1] = toShort((IX&0xff00)/256);
    memory[0][SP-2] = toShort(IX&0xff);
    SP = SP -2;
    
}
function push_iy(){
    memory[0][SP-1] = toShort((IY&0xff00)/256);
    memory[0][SP-2] = toShort(IY&0xff);
    SP = SP -2;
    
}
//++++++++++++++++++++++++
function pop_bc(){
    B = memory[0][SP+1];
    C = memory[0][SP];
    SP = SP +2;
    
}
function pop_de(){
    D = memory[0][SP+1];
    E = memory[0][SP];
    SP = SP +2;
    
}
function pop_hl(){
    H = memory[0][SP+1];
    L = memory[0][SP];
    SP = SP +2;
    
}
function pop_af(){
    A = memory[0][SP+1];
    F = memory[0][SP];
    SP = SP +2;
    
}
function pop_ix(){
    var x = (((memory[0][SP+1])*256) + memory[0][SP]);
    IX = x;
    SP = SP +2;
    
}
function pop_iy(){
    var x = (((memory[0][SP+1])*256) + memory[0][SP]);
    IY = x;
    SP = SP +2;
    
}