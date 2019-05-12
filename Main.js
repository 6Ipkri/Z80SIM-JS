var A,B,C,D,E,F,H,L,Ap,Bp,Cp,Dp,Ep,Fp,Hp,Lp,I,R,CY;
var memory = [[1],[65536]];
var nemonic = [65536];
var op1 = 0x0001;
var op2,op3,op4,backupacc;
var intterupt = 0x0001;
var IX,IY,PC,PC_nemonicic,st_pc;
var SP = 0x1000;
var T_state;
var IFF1,IFF2,IMFa,IMFb;
var led,segment;
var lcd00="",lcd01="",lcd02="",lcd03="",lcd04="",lcd05="",lcd06="",lcd07="",lcd40="",lcd41="",lcd42="",lcd43="",lcd44="",lcd45="",lcd46="",lcd47="";
var cursor=0;
var cursor_onoff=false;
var speaker=0;
var outputnemonic = [6000];
var outputhexcode,inputfill;

function toShort(number) {
    const int16 = new Int16Array(1)
    int16[0] = number
    return int16[0]
  }