function add_hl_bc(){
    var x = ((H*256)+(B*256)+L+C);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flagn(false);
    flagc();
}
function add_hl_de(){
    var x = ((H*256)+(D*256)+L+E);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flagn(false);
    flagc();
}
function add_hl_hl(){
    var x = ((H*256)+(H*256)+L+L);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flagn(false);
    flagc();
}
function add_hl_sp(){
    var x = ((H*256)+L+SP);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++++
function adc_hl_bc(){
    var x = ((H*256)+(B*256)+L+C+CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_hl_de(){
    var x = ((H*256)+(D*256)+L+E+CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_hl_hl(){
    var x = ((H*256)+(H*256)+L+L+CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(false);
    flagc();
}
function adc_hl_sp(){
    var x = ((H*256)+L+SP+CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++++++
function sbc_hl_bc(){
    var x = ((H*256)-(B*256)+L-C-CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_hl_de(){
    var x = ((H*256)-(D*256)+L-E-CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_hl_hl(){
    var x = ((H*256)-(H*256)+L-L-CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(true);
    flagc();
}
function sbc_hl_sp(){
    var x = ((H*256)+L-SP-CY);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    flags();
    flagz();
    flagpvo();
    flagn(true);
    flagc();
}
//+++++++++++++++++++++++++++++++++++++++++
function add_ix_bc(){
    var ix = (IX+(B*256)+C);
    v//ar nix = vareger.tovar(ix);
    IX = toShort(ix);
    flagn(false);
    flagc();
}
function add_ix_de(){
    var ix = (IX+(D*256)+E);
    v//ar nix = vareger.tovar(ix);
    IX = toShort(ix);
    flagn(false);
    flagc();
}
function add_ix_ix(){
    var ix = (IX+IX);
    v//ar nix = vareger.tovar(ix);
    IX = toShort(ix);
    flagn(false);
    flagc();
}
function add_ix_sp(){
    var ix = (IX+SP);
    v//ar nix = vareger.tovar(ix);
    IX = toShort(ix);
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++
function add_iy_bc(){
    var iy = (IY+(B*256)+C);
   // v//ar niy = vareger.tovar(iy);
    IY = toShort(iy);
    flagn(false);
    flagc();
}
function add_iy_de(){
    var iy = (IY+(D*256)+E);
   //// v//ar niy = vareger.tovar(iy);
    IY = toShort(iy);
    flagn(false);
    flagc();
}
function add_iy_iy(){
    var iy = (IY+IY);
   // v//ar niy = vareger.tovar(iy);
    IY = toShort(iy);
    flagn(false);
    flagc();
}
function add_iy_sp(){
    var iy = (IY+SP);
   // v//ar niy = vareger.tovar(iy);
    IY = toShort(iy);
    flagn(false);
    flagc();
}
//+++++++++++++++++++++++++++
function inc_bc(){
    var x = ((B*256)+C+1);
    var b = ((x&0xff00)/256);
    var c = x&0xff;
    //var nb = vareger.tovar(b);
    //var nc = vareger.tovar(c);
    B = toShort(b);
    C = toShort(c);
    
}
function inc_de(){
    var x = ((D*256)+E+1);
    var d = ((x&0xff00)/256);
    var e = x&0xff;
    //var nd = vareger.tovar(d);
    //var ne = vareger.tovar(e);
    D = toShort(d);
    E = toShort(e);
    
}
function inc_hl(){
    var x = ((H*256)+L+1);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    
}
function inc_sp(){
    SP = SP+1;
    
}
function inc_ix(){
    IX = IX+1;
    
}
function inc_iy(){
    IY = IY+1;
    
}
//++++++++++++++++++++++++++++
function dec_bc(){
    var x = ((B*256)+C-1);
    var b = ((x&0xff00)/256);
    var c = x&0xff;
    //var nb = vareger.tovar(b);
    //var nc = vareger.tovar(c);
    B = toShort(b);
    C = toShort(c);
    
}
function dec_de(){
    var x = ((D*256)+E-1);
    var d = ((x&0xff00)/256);
    var e = x&0xff;
    //var nd = vareger.tovar(d);
    //var ne = vareger.tovar(e);
    D = toShort(d);
    E = toShort(e);
    
}
function dec_hl(){
    var x = ((H*256)+L-1);
    var h = ((x&0xff00)/256);
    var l = x&0xff;
    //var nh = vareger.tovar(h);
    //var nl = vareger.tovar(l);
    H = toShort(h);
    L = toShort(l);
    
}
function dec_sp(){
    SP = SP-1;
    
}
function dec_ix(){
    IX = IX-1;
    
}
function dec_iy(){
    IY = IY-1;
    
}