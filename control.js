function daa() {
  var a, a2, a3;
  var b2, b3;
  if ((A & 0x0a) == 0x0a) {
    A = toShort((A & 0xf0) + 0x10);
  }
  if ((A & 0x0b) == 0x0b) {
    A = toShort((A & 0xf0) + 0x11);
  }
  if ((A & 0x0c) == 0x0c) {
    A = toShort((A & 0xf0) + 0x12);
  }
  if ((A & 0x0d) == 0x0d) {
    A = toShort((A & 0xf0) + 0x13);
  }
  if ((A & 0x0e) == 0x0e) {
    A = toShort((A & 0xf0) + 0x14);
  }
  if ((A & 0x0f) == 0x0f) {
    A = toShort((A & 0xf0) + 0x15);
  }
  flags();
  flagz();
  flagh();
  flagpvp();
  flagc();
}
function cpl() {
  A = ~A;
  flaghl(true);
  flagn(true);
}
function neg() {
  A = 0 - A;
  flags();
  flagz();
  flagh();
  flagpvo();
  flagn(true);
  flagc();
}
function ccf() {
  CY = ~CY;
  flagn(false);
  flagc();
}
function scf() {
  CY = 0x0001;
  flaghl(false);
  flagn(false);
  flagcl(true);
}
function nop() {}
function halt() {}
function di() {
  IFF2 = false;
}
function ei() {
  IFF2 = true;
}
function im0() {
  intterup = 0x0000;
}
function im1() {
  intterup = 0x0001;
  /*
    if(IFF2){
        IFF1 = false;
        short pch,pcl;
        pch = (short)((PC&0xff00)/256);
        pcl = (short)(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0038;
    }
    */
}
function im2() {
  intterup = 0x0002;
}
