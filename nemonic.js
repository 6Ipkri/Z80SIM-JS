function add_nemonic(){
    while(op1 != 0x00){
    op1 = memory[0][PC_nemonic];
        switch(op1){
            case (0x00):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"NOP";
            }break;
            case (0x01):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD BC,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x02):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (BC),A";
            }break;
            case (0x03):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC BC";
            }break;
            case (0x04):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC B";
            }break;
            case (0x05):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC B";
            }break;
            case (0x06):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD B,n";
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x07):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RLCA";
            }break;
            case (0x08):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"EX AF,AF'";
            }break;
            case (0x09):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD HL,BC";
            }break;
            case (0x0a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,(BC)";
            }break;
            case (0x0b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC BC";
            }break;
            case (0x0c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC C";
            }break;
            case (0x0d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC C";
            }break;
            case (0x0e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD C,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x0f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RRCA";
            }break;
            case (0x10):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"DJNZ e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x11):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD DE,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x12):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD DE,A";
            }break;
            case (0x13):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC DE";
            }break;
            case (0x14):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC D";
            }break;
            case (0x15):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC D";
            }break;
            case (0x16):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD D,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x17):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RLA";
            }break;
            case (0x18):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"JR e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x19):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD HL,DE";
            }break;
            case (0x1a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,(DE)";
            }break;
            case (0x1b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC DE";
            }break;
            case (0x1c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC E";
            }break;
            case (0x1d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC E";
            }break;
            case (0x1e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD E,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x1f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RRA";
            }break;
            case (0x20):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"JR NZ,e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x21):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD HL,nn";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x22):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD (nn),HL";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x23):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC HL";
            }break;
            case (0x24):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC H";
            }break;
            case (0x25):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC H";
            }break;
            case (0x26):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD H,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x27):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DAA";
            }break;
            case (0x28):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"JR Z,e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x29):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD HL,HL";
            }break;
            case (0x2a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD HL,(nn)";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x2b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC HL";
            }break;
            case (0x2c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC L";
            }break;
            case (0x2d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC L";
            }break;
            case (0x2e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD L,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x2f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CPL";
            }break;
            case (0x30):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"JR NC,e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x31):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD SP,nn";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x32):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD (nn),A";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x33):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC SP";
            }break;
            case (0x34):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC (HL)";
            }break;
            case (0x35):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC (HL)";
            }break;
            case (0x36):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD (HL),n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x37):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SCF";
            }break;
            case (0x38):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"JR C,e";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x39):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD HL,SP";
            }break;
            case (0x3a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"LD A,(nn)";
                PC_nemonic = PC_nemonic + 1;
                PC_nemonic = PC_nemonic + 1;
            }break;
            case (0x3b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC SP";
            }break;
            case (0x3c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"INC A";
            }break;
            case (0x3d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DEC A";
            }break;
            case (0x3e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"LD A,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0x3f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CCF";
            }break;
            case (0x40):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,B";
            }break;
            case (0x41):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,C";
            }break;
            case (0x42):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,D";
            }break;
            case (0x43):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,E";
            }break;
            case (0x44):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,H";
            }break;
            case (0x45):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,L";
            }break;
            case (0x46):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,(HL)";
            }break;
            case (0x47):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD B,A";
            }break;
            case (0x48):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,B";
            }break;
            case (0x49):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,C";
            }break;
            case (0x4a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,D";
            }break;
            case (0x4b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,E";
            }break;
            case (0x4c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,H";
            }break;
            case (0x4d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,L";
            }break;
            case (0x4e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,(HL)";
            }break;
            case (0x4f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD C,A";
            }break;
            case (0x50):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,B";
            }break;
            case (0x51):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,C";
            }break;
            case (0x52):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,D";
            }break;
            case (0x53):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,E";
            }break;
            case (0x54):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,H";
            }break;
            case (0x55):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,L";
            }break;
            case (0x56):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,(HL)";
            }break;
            case (0x57):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD D,A";
            }break;
            case (0x58):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,B";
            }break;
            case (0x59):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,C";
            }break;
            case (0x5a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,D";
            }break;
            case (0x5b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,E";
            }break;
            case (0x5c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,H";
            }break;
            case (0x5d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,L";
            }break;
            case (0x5e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,(HL)";
            }break;
            case (0x5f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD E,A";
            }break;
            case (0x60):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,B";
            }break;
            case (0x61):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,C";
            }break;
            case (0x62):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,D";
            }break;
            case (0x63):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,E";
            }break;
            case (0x64):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,H";
            }break;
            case (0x65):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,L";
            }break;
            case (0x66):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,(HL)";
            }break;
            case (0x67):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD H,A";
            }break;
            case (0x68):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,B";
            }break;
            case (0x69):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,C";
            }break;
            case (0x6a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,D";
            }break;
            case (0x6b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,E";
            }break;
            case (0x6c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,H";
            }break;
            case (0x6d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,L";
            }break;
            case (0x6e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,(HL)";
            }break;
            case (0x6f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD L,A";
            }break;
            case (0x70):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),B";
            }break;
            case (0x71):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),C";
            }break;
            case (0x72):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),D";
            }break;
            case (0x73):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),E";
            }break;
            case (0x74):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),H";
            }break;
            case (0x75):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),L";
            }break;
            case (0x76):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"HALT";
            }break;
            case (0x77):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD (HL),A";
            }break;
            case (0x78):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,B";
            }break;
            case (0x79):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,C";
            }break;
            case (0x7a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,D";
            }break;
            case (0x7b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,E";
            }break;
            case (0x7c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,H";
            }break;
            case (0x7d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,L";
            }break;
            case (0x7e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,(HL)";
            }break;
            case (0x7f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD A,A";
            }break;
            case (0x80):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,B";
            }break;
            case (0x81):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,C";
            }break;
            case (0x82):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,D";
            }break;
            case (0x83):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,E";
            }break;
            case (0x84):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,H";
            }break;
            case (0x85):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,L";
            }break;
            case (0x86):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,(HL)";
            }break;
            case (0x87):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADD A,A";
            }break;
            case (0x88):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,B";
            }break;
            case (0x89):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,C";
            }break;
            case (0x8a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,D";
            }break;
            case (0x8b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,E";
            }break;
            case (0x8c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,H";
            }break;
            case (0x8d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,L";
            }break;
            case (0x8e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,(HL)";
            }break;
            case (0x8f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"ADC A,A";
            }break;
            case (0x90):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB B";
            }break;
            case (0x91):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB C";
            }break;
            case (0x92):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB D";
            }break;
            case (0x93):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB E";
            }break;
            case (0x94):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB H";
            }break;
            case (0x95):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB L";
            }break;
            case (0x96):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB (HL)";
            }break;
            case (0x97):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SUB A";
            }break;
            case (0x98):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,B";
            }break;
            case (0x99):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,C";
            }break;
            case (0x9a):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,D";
            }break;
            case (0x9b):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,E";
            }break;
            case (0x9c):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,H";
            }break;
            case (0x9d):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,L";
            }break;
            case (0x9e):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,(HL)";
            }break;
            case (0x9f):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"SBC A,A";
            }break;
            case (0xa0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND B";
            }break;
            case (0xa1):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND C";
            }break;
            case (0xa2):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND D";
            }break;
            case (0xa3):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND E";
            }break;
            case (0xa4):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND H";
            }break;
            case (0xa5):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND L";
            }break;
            case (0xa6):{
                 nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND (HL)";
            }break;
            case (0xa7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"AND A";
            }break;
            case (0xa8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR B";
            }break;
            case (0xa9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR C";
            }break;
            case (0xaa):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR D";
            }break;
            case (0xab):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR E";
            }break;
            case (0xac):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR H";
            }break;
            case (0xad):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR L";
            }break;
            case (0xae):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR (HL)";
            }break;
            case (0xaf):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"XOR A";
            }break;
            case (0xb0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR B";
            }break;
            case (0xb1):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR C";
            }break;
            case (0xb2):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR D";
            }break;
            case (0xb3):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR E";
            }break;
            case (0xb4):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR H";
            }break;
            case (0xb5):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR L";
            }break;
            case (0xb6):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR (HL)";
            }break;
            case (0xb7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"OR A";
            }break;
            case (0xb8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP B";
            }break;
            case (0xb9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP C";
            }break;
            case (0xba):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP D";
            }break;
            case (0xbb):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP E";
            }break;
            case (0xbc):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP H";
            }break;
            case (0xbd):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP L";
            }break;
            case (0xbe):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP (HL)";
            }break;
            case (0xbf):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"CP A";
            }break;
            case (0xc0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET NZ";
            }break;
            case (0xc1):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"POP BC";
            }break;
            case (0xc2):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP NZ,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xc3):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xc4):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL NZ,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xc5):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"PUSH BC";
            }break;
            case (0xc6):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"ADD A,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xc7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 00H";
            }break;
            case (0xc8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET Z";
            }break;
            case (0xc9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET";
            }break;
            case (0xca):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP Z,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xcb):{
                PC_nemonic = PC_nemonic+1;
                op2 = memory[0][PC_nemonic];
                switch(op2){
                    case (0x07):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC A";
                    }break;
                    case (0x00):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC B";
                    }break;
                    case (0x01):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC C";
                    }break;
                    case (0x02):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC D";
                    }break;
                    case (0x03):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC E";
                    }break;
                    case (0x04):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC H";
                    }break;
                    case (0x05):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC L";
                    }break;
                    case (0x06):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLC (HL)";
                    }break;
                    case (0x17):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL A";
                    }break;
                    case (0x10):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL B";
                    }break;
                    case (0x11):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL C";
                    }break;
                    case (0x12):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL D";
                    }break;
                    case (0x13):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL E";
                    }break;
                    case (0x14):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL H";
                    }break;
                    case (0x15):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL L";
                    }break;
                    case (0x16):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RL (HL)";
                    }break;
                    case (0x0f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC A";
                    }break;
                    case (0x08):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC B";
                    }break;
                    case (0x09):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC C";
                    }break;
                    case (0x0a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC D";
                    }break;
                    case (0x0b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC E";
                    }break;
                    case (0x0c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC H";
                    }break;
                    case (0x0d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC L";
                    }break;
                    case (0x0e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRC (HL)";
                    }break;
                    case (0x1f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR A";
                    }break;
                    case (0x18):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR B";
                    }break;
                    case (0x19):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR C";
                    }break;
                    case (0x1a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR D";
                    }break;
                    case (0x1b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR E";
                    }break;
                    case (0x1c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR H";
                    }break;
                    case (0x1d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR L";
                    }break;
                    case (0x1e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RR (HL)";
                    }break;
                    case (0x27):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA A";
                    }break;
                    case (0x20):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA B";
                    }break;
                    case (0x21):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA C";
                    }break;
                    case (0x22):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA D";
                    }break;
                    case (0x23):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA E";
                    }break;
                    case (0x24):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA H";
                    }break;
                    case (0x25):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA L";
                    }break;
                    case (0x26):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SLA (HL)";
                    }break;
                    case (0x2F):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA A";
                    }break;
                    case (0x28):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA B";
                    }break;
                    case (0x29):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA C";
                    }break;
                    case (0x2a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA D";
                    }break;
                    case (0x2b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA E";
                    }break;
                    case (0x2c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA H";
                    }break;
                    case (0x2d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA L";
                    }break;
                    case (0x2e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRA (HL)";
                    }break;
                    case (0x3F):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL A";
                    }break;
                    case (0x38):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL B";
                    }break;
                    case (0x39):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL C";
                    }break;
                    case (0x3a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL D";
                    }break;
                    case (0x3b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL E";
                    }break;
                    case (0x3c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL H";
                    }break;
                    case (0x3d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL L";
                    }break;
                    case (0x3e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SRL (HL)";
                    }break;
                    case (0x40):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,B";
                    }break;
                    case (0x48):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,B";
                    }break;
                    case (0x50):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,B";
                    }break;
                    case (0x58):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,B";
                    }break;
                    case (0x60):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,B";
                    }break;
                    case (0x68):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,B";
                    }break;
                    case (0x70):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,B";
                    }break;
                    case (0x78):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,B";
                    }break;
                    case (0x41):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,C";
                    }break;
                    case (0x49):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,C";
                    }break;
                    case (0x51):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,C";
                    }break;
                    case (0x59):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,C";
                    }break;
                    case (0x61):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,C";
                    }break;
                    case (0x69):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,C";
                    }break;
                    case (0x71):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,C";
                    }break;
                    case (0x79):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,C";
                    }break;
                    case (0x42):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,D";
                    }break;
                    case (0x4A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,D";
                    }break;
                    case (0x52):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,D";
                    }break;
                    case (0x5A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,D";
                    }break;
                    case (0x62):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,D";
                    }break;
                    case (0x6A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,D";
                    }break;
                    case (0x72):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,D";
                    }break;
                    case (0x7A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,D";
                    }break;
                    case (0x43):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,E";
                    }break;
                    case (0x4B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,E";
                    }break;
                    case (0x53):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,E";
                    }break;
                    case (0x5B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,E";
                    }break;
                    case (0x63):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,E";
                    }break;
                    case (0x6B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,E";
                    }break;
                    case (0x73):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,E";
                    }break;
                    case (0x7B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,E";
                    }break;
                    case (0x44):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,H";
                    }break;
                    case (0x4c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,H";
                    }break;
                    case (0x54):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,H";
                    }break;
                    case (0x5c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,H";
                    }break;
                    case (0x64):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,H";
                    }break;
                    case (0x6c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,H";
                    }break;
                    case (0x74):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,H";
                    }break;
                    case (0x7c):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,H";
                    }break;
                    case (0x45):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,L";
                    }break;
                    case (0x4d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,L";
                    }break;
                    case (0x55):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,L";
                    }break;
                    case (0x5d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,L";
                    }break;
                    case (0x65):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,L";
                    }break;
                    case (0x6d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,L";
                    }break;
                    case (0x75):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,L";
                    }break;
                    case (0x7d):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,L";
                    }break;
                    case (0x47):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,A";
                    }break;
                    case (0x4f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,A";
                    }break;
                    case (0x57):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,A";
                    }break;
                    case (0x5f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,A";
                    }break;
                    case (0x67):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,A";
                    }break;
                    case (0x6f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,A";
                    }break;
                    case (0x77):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,A";
                    }break;
                    case (0x7f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,A";
                    }break;
                    case (0x46):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 0,(HL)";
                    }break;
                    case (0x4e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 1,(HL)";
                    }break;
                    case (0x56):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 2,(HL)";
                    }break;
                    case (0x5e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 3,(HL)";
                    }break;
                    case (0x66):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 4,(HL)";
                    }break;
                    case (0x6e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 5,(HL)";
                    }break;
                    case (0x76):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 6,(HL)";
                    }break;
                    case (0x7e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"BIT 7,(HL)";
                    }break;
                    case (0xc0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,B";
                    }break;
                    case (0xc8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,B";
                    }break;
                    case (0xd0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,B";
                    }break;
                    case (0xd8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,B";
                    }break;
                    case (0xe0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,B";
                    }break;
                    case (0xe8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,B";
                    }break;
                    case (0xf0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,B";
                    }break;
                    case (0xf8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,B";
                    }break;
                    case (0xc1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,C";
                    }break;
                    case (0xc9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,C";
                    }break;
                    case (0xd1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,C";
                    }break;
                    case (0xd9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,C";
                    }break;
                    case (0xe1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,C";
                    }break;
                    case (0xe9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,C";
                    }break;
                    case (0xf1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,C";
                    }break;
                    case (0xf9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,C";
                    }break;
                    case (0xc2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,D";
                    }break;
                    case (0xca):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,D";
                    }break;
                    case (0xd2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,D";
                    }break;
                    case (0xda):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,D";
                    }break;
                    case (0xe2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,D";
                    }break;
                    case (0xea):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,D";
                    }break;
                    case (0xf2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,D";
                    }break;
                    case (0xfa):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,D";
                    }break;
                    case (0xc3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,E";
                    }break;
                    case (0xcb):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,E";
                    }break;
                    case (0xd3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,E";
                    }break;
                    case (0xdb):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,E";
                    }break;
                    case (0xe3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,E";
                    }break;
                    case (0xeb):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,E";
                    }break;
                    case (0xf3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,E";
                    }break;
                    case (0xfb):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,E";
                    }break;
                    case (0xc4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,H";
                    }break;
                    case (0xcc):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,H";
                    }break;
                    case (0xd4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,H";
                    }break;
                    case (0xdc):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,H";
                    }break;
                    case (0xe4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,H";
                    }break;
                    case (0xec):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,H";
                    }break;
                    case (0xf4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,H";
                    }break;
                    case (0xfc):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,H";
                    }break;
                    case (0xc5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,L";
                    }break;
                    case (0xcd):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,L";
                    }break;
                    case (0xd5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,L";
                    }break;
                    case (0xdd):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,L";
                    }break;
                    case (0xe5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,L";
                    }break;
                    case (0xed):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,L";
                    }break;
                    case (0xf5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,L";
                    }break;
                    case (0xfd):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,L";
                    }break;
                    case (0xc7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,A";
                    }break;
                    case (0xcf):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,A";
                    }break;
                    case (0xd7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,A";
                    }break;
                    case (0xdf):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,A";
                    }break;
                    case (0xe7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,A";
                    }break;
                    case (0xef):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,A";
                    }break;
                    case (0xf7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,A";
                    }break;
                    case (0xff):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,A";
                    }break;
                    case (0xc6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 0,(HL)";
                    }break;
                    case (0xce):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 1,(HL)";
                    }break;
                    case (0xd6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 2,(HL)";
                    }break;
                    case (0xde):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 3,(HL)";
                    }break;
                    case (0xe6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 4,(HL)";
                    }break;
                    case (0xee):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 5,(HL)";
                    }break;
                    case (0xf6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 6,(HL)";
                    }break;
                    case (0xfe):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SET 7,(HL)";
                    }break;
                    case (0x80):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,B";
                    }break;
                    case (0x88):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,B";
                    }break;
                    case (0x90):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,B";
                    }break;
                    case (0x98):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,B";
                    }break;
                    case (0xa0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,B";
                    }break;
                    case (0xa8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,B";
                    }break;
                    case (0xb0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,B";
                    }break;
                    case (0xb8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,B";
                    }break;
                    case (0x81):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,C";
                    }break;
                    case (0x89):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,C";
                    }break;
                    case (0x91):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,C";
                    }break;
                    case (0x99):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,C";
                    }break;
                    case (0xa1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,C";
                    }break;
                    case (0xa9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,C";
                    }break;
                    case (0xb1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,C";
                    }break;
                    case (0xb9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,C";
                    }break;
                    case (0x82):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,D";
                    }break;
                    case (0x8A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,D";
                    }break;
                    case (0x92):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,D";
                    }break;
                    case (0x9A):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,D";
                    }break;
                    case (0xa2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,D";
                    }break;
                    case (0xaA):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,D";
                    }break;
                    case (0xb2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,D";
                    }break;
                    case (0xbA):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,D";
                    }break;
                    case (0x83):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,E";
                    }break;
                    case (0x8B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,E";
                    }break;
                    case (0x93):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,E";
                    }break;
                    case (0x9B):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,E";
                    }break;
                    case (0xa3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,E";
                    }break;
                    case (0xaB):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,E";
                    }break;
                    case (0xb3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,E";
                    }break;
                    case (0xbB):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,E";
                    }break;
                    case (0x84):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,H";
                    }break;
                    case (0x8C):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,H";
                    }break;
                    case (0x94):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,H";
                    }break;
                    case (0x9C):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,H";
                    }break;
                    case (0xa4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,H";
                    }break;
                    case (0xaC):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,H";
                    }break;
                    case (0xb4):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,H";
                    }break;
                    case (0xbC):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,H";
                    }break;
                    case (0x85):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,L";
                    }break;
                    case (0x8D):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,L";
                    }break;
                    case (0x95):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,L";
                    }break;
                    case (0x9D):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,L";
                    }break;
                    case (0xa5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,L";
                    }break;
                    case (0xaD):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,L";
                    }break;
                    case (0xb5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,L";
                    }break;
                    case (0xbD):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,L";
                    }break;
                    case (0x87):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,A";
                    }break;
                    case (0x8F):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,A";
                    }break;
                    case (0x97):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,A";
                    }break;
                    case (0x9F):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,A";
                    }break;
                    case (0xa7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,A";
                    }break;
                    case (0xaF):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,A";
                    }break;
                    case (0xb7):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,A";
                    }break;
                    case (0xbF):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,A";
                    }break;
                    case (0x86):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 0,(HL)";
                    }break;
                    case (0x8e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 1,(HL)";
                    }break;
                    case (0x96):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 2,(HL)";
                    }break;
                    case (0x9e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 3,(HL)";
                    }break;
                    case (0xa6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 4,(HL)";
                    }break;
                    case (0xae):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 5,(HL)";
                    }break;
                    case (0xb6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 6,(HL)";
                    }break;
                    case (0xbe):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RES 7,(HL)";
                    }break;
                }
            }break;
            case (0xcc):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL Z,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xcd):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xce):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"ADC A,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xcf):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 08H";
            }break;
            case (0xd0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET NC";
            }break;
            case (0xd1):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"POP DE";
            }break;
            case (0xd2):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP NC,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xd3):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"OUT (n),A";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xd4):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL NC,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xd5):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"PUSH DE";
            }break;
            case (0xd6):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"SUB A,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xd7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 10H";
            }break;
            case (0xd8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET C";
            }break;
            case (0xd9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"EXX";
            }break;
            case (0xda):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP C,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xdb):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"IN A,(N)";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xdc):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL C,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xdd):{
                PC_nemonic = PC_nemonic+1;
                op2 = memory[0][PC_nemonic];
                switch(op2){
                    case(0x7e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD A,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x46):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD B,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x4e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD C,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x56):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD D,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x5e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD E,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x66):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD H,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x6e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD L,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x77):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),A";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x70):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),B";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x71):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),C";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x72):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),D";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x73):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),E";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x74):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),H";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x75):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IX+d),L";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x36):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (IX+d),n";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x21):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD IX,nn";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x2a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD IX,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x22):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),IX";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xf9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD SP,IX";
                    }break;
                    case(0xe5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"PUSH IX";
                    }break;
                    case(0xe1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"POP IX";
                    }break;
                    case(0x49):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IX,BC";
                    }break;
                    case(0x59):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IX,DE";
                    }break;
                    case(0x69):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IX,IX";
                    }break;
                    case(0x79):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IX,SP";
                    }break;
                    case(0x23):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"INC IX";
                    }break;
                    case(0x2b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"DEC IX";
                    }break;
                    case(0x86):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"ADD A,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x8e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"ADC A,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x96):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"SUB (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x9e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"SBC A,(IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xa6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"AND (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xb6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"OR (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xae):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"XOR (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xbe):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"CP (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x34):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"INC (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x35):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"DEC (IX+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xcb) :{
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                        op4 = memory[0][PC_nemonic];
                        switch(op4){
                            case (0x06):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RLC (IX+d)";
                            }break;
                            case (0x16):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RL (IX+d)";
                            }break;
                            case (0x0e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RRC (IX+d)";
                            }break;
                            case (0x1e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RR (IX+d)";
                            }break;
                            case (0x26):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SLA (IX+d)";
                            }break;
                            case (0x2e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SRA (IX+d)";
                            }break;
                            case (0x3e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SRL (IX+d)";
                            }break;
                            case (0x46):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 0,(IX+d)";
                            }break;
                            case (0x4e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 1,(IX+d)";
                            }break;
                            case (0x56):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 2,(IX+d)";
                            }break;
                            case (0x5e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 3,(IX+d)";
                            }break;
                            case (0x66):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 4,(IX+d)";
                            }break;
                            case (0x6e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 5,(IX+d)";
                            }break;
                            case (0x76):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 6,(IX+d)";
                            }break;
                            case (0x7e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 7,(IX+d)";
                            }break;
                            case (0xc6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 0,(IX+d)";
                            }break;
                            case (0xce):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 1,(IX+d)";
                            }break;
                            case (0xd6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 2,(IX+d)";
                            }break;
                            case (0xde):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 3,(IX+d)";
                            }break;
                            case (0xe6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 4,(IX+d)";
                            }break;
                            case (0xee):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 5,(IX+d)";
                            }break;
                            case (0xf6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 6,(IX+d)";
                            }break;
                            case (0xfe):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 7,(IX+d)";
                            }break;
                            case (0x86):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 0,(IX+d)";
                            }break;
                            case (0x8e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 1,(IX+d)";
                            }break;
                            case (0x96):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 2,(IX+d)";
                            }break;
                            case (0x9e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 3,(IX+d)";
                            }break;
                            case (0xa6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 4,(IX+d)";
                            }break;
                            case (0xae):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 5,(IX+d)";
                            }break;
                            case (0xb6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 6,(IX+d)";
                            }break;
                            case (0xbe):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 7,(IX+d)";
                            }break;
                        }
                    }break;
                    case (0xe3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"EX (SP),IX";
                    }break;
                    case (0xe9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"JP (IX)";
                    }break;
                }
            }break;
            case (0xde):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"SBC A,n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xdf):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 18H";
            }break;
            case (0xe0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET PO";
            }break;
            case (0xe1):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"POP HL";
            }break;
            case (0xe2):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP PO,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xe3):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"EX (SP),HL";
            }break;
            case (0xe4):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL PO,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xe5):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"PUSH HL";
            }break;
            case (0xe6):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"AND n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xe7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 20H";
            }break;
            case (0xe8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET PE";
            }break;
            case (0xe9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"JP (HL)";
            }break;
            case (0xea):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP PE,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xeb):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"EX DE,HL";
            }break;
            case (0xec):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL PE,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xed):{
                PC_nemonic = PC_nemonic+1;
                op2 = memory[0][PC_nemonic];
                switch(op2){
                    case (0x57):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD A,I";
                    }break;
                    case (0x5f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD A,R";
                    }break;
                    case (0x47):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD I,A";
                    }break;
                    case (0x4f):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD R,A";
                    }break;
                    case(0x4b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD BC,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x5b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD DE,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x6b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD HL,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x7b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD SP,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x43):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),BC";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x53):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),DE";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x63):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),HL";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x73):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),SP";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x4a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADC HL,BC";
                    }break;
                    case(0x5a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADC HL,DE";
                    }break;
                    case(0x6a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADC HL,HL";
                    }break;
                    case(0x7a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADC HL,SP";
                    }break;
                    case(0x42):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SBC HL,BC";
                    }break;
                    case(0x52):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SBC HL,DE";
                    }break;
                    case(0x62):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SBC HL,HL";
                    }break;
                    case(0x72):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"SBC HL,SP";
                    }break;
                    case (0x6F):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RLD";
                    }break;
                    case (0x67):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RRD";
                    }break;
                    case (0xa0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LDI";
                    }break;
                    case (0xb0):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LDIR";
                    }break;
                    case (0xa8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LDD";
                    }break;
                    case (0xb8):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LDDR";
                    }break;
                    case (0xa1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"CPI";
                    }break;
                    case (0xb1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"CPIR";
                    }break;
                    case (0xa9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"CPD";
                    }break;
                    case (0xb9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"CPDR";
                    }break;
                    case (0x44):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"NEG";
                    }break;
                    case (0x46):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IM0";
                    }break;
                    case (0x56):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IM1";
                    }break;
                    case (0x5e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IM2";
                    }break;
                    case (0x4D):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RETI";
                    }break;
                    case (0x45):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"RETN";
                    }break;
                    case (0x78):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN A,(C)";
                    }break;
                    case (0x40):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN B,(C)";
                    }break;
                    case (0x48):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN C,(C)";
                    }break;
                    case (0x50):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN D,(C)";
                    }break;
                    case (0x58):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN E,(C)";
                    }break;
                    case (0x60):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN H,(C)";
                    }break;
                    case (0x68):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IN L,(C)";
                    }break;
                    case (0xA2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"INI";
                    }break;
                    case (0xB2):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"INIR";
                    }break;
                    case (0xAA):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"IND";
                    }break;
                    case (0xBA):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"INDR";
                    }break;
                    case (0x79):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),A";
                    }break;
                    case (0x41):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),B";
                    }break;
                    case (0x49):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),C";
                    }break;
                    case (0x51):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),D";
                    }break;
                    case (0x59):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),E";
                    }break;
                    case (0x61):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),H";
                    }break;
                    case (0x69):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUT (C),L";
                    }break;
                    case (0xA3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUTI";
                    }break;
                    case (0xB3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OTIR";
                    }break;
                    case (0xAB):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OUTD";
                    }break;
                    case (0xBB):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"OTDR";
                    }break;
                }
            }break;
            case (0xee):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"XOR n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xef):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 28H";
            }break;
            case (0xf0):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET P";
            }break;
            case (0xf1):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"POP AF";
            }break;
            case (0xf2):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP P,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xf3):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"DI";
            }break;
            case (0xf4):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL P,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xf5):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"PUSH AF";
            }break;
            case (0xf6):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"OR n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xf7):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 30H";
            }break;
            case (0xf8):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RET M";
            }break;
            case (0xf9):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"LD SP,HL";
            }break;
            case (0xfa):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"JP M,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xfb):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"EI";
            }break;
            case (0xfc):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+"  "+" "+"CALL M,nn";
                PC_nemonic = PC_nemonic+1;
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xfd):{
                fd();
            }break;
            case (0xfe):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"    "+" "+"CP n";
                PC_nemonic = PC_nemonic+1;
            }break;
            case (0xff):{
                nemonic[PC_nemonic] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic])+"      "+" "+"RST 38H";
            }break;
        }
       PC_nemonic = PC_nemonic+1;
    }
    //PC_nemonic = PC_nemonic - 1; //เนื่องจากนับเกินไปหนึ่งครั้ง//เอาออกเนื่องจากนับไม่เกินใช้คำสั่ง halt เป็นตัวหยุด
    op1 = 0x01;//เพื่อให้ runopcode ทำงาน
    }
    function regtwo(v){
        var s="";
        if((v&0xf0)==0x00){
            s = "0"+Integer.toHexString(v);//.toUpperCase();
        }else{
            s = Integer.toHexString(v);//.toUpperCase();
        }
        return(s);
    }
    //แยกเพื่อเก็บลง ฟังก์ชั่นเดียวไม่ได้
    function fd(){
                PC_nemonic = PC_nemonic+1;
                op2 = memory[0][PC_nemonic];
                switch(op2){
                    case(0x7e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD A,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x46):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD B,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x4e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD C,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x56):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD D,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x5e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD E,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x66):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD H,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x6e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD L,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x77):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),A";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x70):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),B";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x71):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),C";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x72):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),D";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x73):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),E";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x74):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),H";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x75):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"LD (IY+d),L";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x36):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (IY+d),n";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x21):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD IY,nn";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x2a):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD IY,(nn)";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x22):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+""+regtwo(memory[0][PC_nemonic+2])+" "+"LD (nn),IY";
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xf9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"LD SP,IY";
                    }break;
                    case(0xe5):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"PUSH IY";
                    }break;
                    case(0xe1):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"POP IY";
                    }break;
                    case(0x9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IY,BC";
                    }break;
                    case(0x19):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IY,DE";
                    }break;
                    case(0x29):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IY,IY";
                    }break;
                    case(0x39):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"ADD IY,SP";
                    }break;
                    case(0x23):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"INC IY";
                    }break;
                    case(0x2b):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"DEC IY";
                    }break;
                    case(0x86):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"ADD A,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x8e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"ADC A,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x96):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"SUB (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x9e):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"SBC A,(IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xa6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"AND (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xb6):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"OR (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xae):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"XOR (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xbe):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"CP (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x34):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"INC (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0x35):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+""+regtwo(memory[0][PC_nemonic+1])+"  "+" "+"DEC (IY+d)";
                        PC_nemonic = PC_nemonic+1;
                    }break;
                    case(0xcb) :{
                        PC_nemonic = PC_nemonic+1;
                        PC_nemonic = PC_nemonic+1;
                        op4 = memory[0][PC_nemonic];
                        switch(op4){
                            case (0x06):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RLC (IY+d)";
                            }break;
                            case (0x16):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RL (IY+d)";
                            }break;
                            case (0x0e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RRC (IY+d)";
                            }break;
                            case (0x1e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RR (IY+d)";
                            }break;
                            case (0x26):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SLA (IY+d)";
                            }break;
                            case (0x2e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SRA (IY+d)";
                            }break;
                            case (0x3e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SRL (IY+d)";
                            }break;
                            case (0x46):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 0,(IY+d)";
                            }break;
                            case (0x4e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 1,(IY+d)";
                            }break;
                            case (0x56):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 2,(IY+d)";
                            }break;
                            case (0x5e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 3,(IY+d)";
                            }break;
                            case (0x66):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 4,(IY+d)";
                            }break;
                            case (0x6e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 5,(IY+d)";
                            }break;
                            case (0x76):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 6,(IY+d)";
                            }break;
                            case (0x7e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"BIT 7,(IY+d)";
                            }break;
                            case (0xc6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 0,(IY+d)";
                            }break;
                            case (0xce):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 1,(IY+d)";
                            }break;
                            case (0xd6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 2,(IY+d)";
                            }break;
                            case (0xde):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 3,(IY+d)";
                            }break;
                            case (0xe6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 4,(IY+d)";
                            }break;
                            case (0xee):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 5,(IY+d)";
                            }break;
                            case (0xf6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 6,(IY+d)";
                            }break;
                            case (0xfe):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"SET 7,(IY+d)";
                            }break;
                            case (0x86):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 0,(IY+d)";
                            }break;
                            case (0x8e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 1,(IY+d)";
                            }break;
                            case (0x96):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 2,(IY+d)";
                            }break;
                            case (0x9e):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 3,(IY+d)";
                            }break;
                            case (0xa6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 4,(IY+d)";
                            }break;
                            case (0xae):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 5,(IY+d)";
                            }break;
                            case (0xb6):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 6,(IY+d)";
                            }break;
                            case (0xbe):{
                                nemonic[PC_nemonic-3] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-3])+""+regtwo(memory[0][PC_nemonic-2])+""+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+" "+"RES 7,(IY+d)";
                            }break;
                        }
                    }break;
                    case (0xe3):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"EX (SP),IY";
                    }break;
                    case (0xe9):{
                        nemonic[PC_nemonic-1] = ""+PC_nemonic.toString(16)+"  "+regtwo(memory[0][PC_nemonic-1])+""+regtwo(memory[0][PC_nemonic])+"    "+" "+"JP (IY)";
                    }break;
                }
    }