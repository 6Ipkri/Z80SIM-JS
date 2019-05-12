
    function call_nn(){
        var pch,pcl;
        PC = PC +1;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = ((op3*256)+op2);
    }
    function call_nz(){
        if((F&0x0040)==0x0000){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);  
        }else{
            PC = PC +1;
        }
    }
    function call_z(){
        if((F&0x0040)==0x0040){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_nc(){
        if((F&0x0001)==0x0000){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_c(){
        if((F&0x0001)==0x0001){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_po(){
        if((F&0x0004)==0x0000){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_pe(){
        if((F&0x0004)==0x0004){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_p(){
        if((F&0x0080)==0x0000){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function call_m(){
        if((F&0x0080)==0x0080){
            var pch,pcl;
            PC = PC +1;
            pch = toShort((PC&0xff00)/256);
            pcl = toShort(PC&0x00ff);
            memory[0][SP-1] = pch;
            memory[0][SP-2] = pcl;
            SP = SP-2;
            PC = ((op3*256)+op2);
        }else{
            PC = PC +1;
        }
    }
    function ret(){
        var pch,pcl;
        pch = memory[0][SP+1];
        pcl = memory[0][SP];
        SP = SP+2;
        PC = toShort((pch*256)+pcl);
    }
    function ret_nz(){
        if((F&0x0040)==0x0000){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_z(){
        if((F&0x0040)==0x0040){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_nc(){
        if((F&0x0001)==0x0000){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_c(){
        if((F&0x0001)==0x0001){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_po(){
        if((F&0x0004)==0x0000){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_pe(){
        if((F&0x0004)==0x0004){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_p(){
        if((F&0x0080)==0x0000){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function ret_m(){
        if((F&0x0080)==0x0080){
            var pch,pcl;
            pch = memory[0][SP+1];
            pcl = memory[0][SP];
            SP = SP+2;
            PC = toShort((pch*256)+pcl);
        }else{
            PC = PC +1;
        }
    }
    function reti(){
        var pch,pcl;
        pch = memory[0][SP+1];
        pcl = memory[0][SP];
        SP = SP+2;
        PC = toShort((pch*256)+pcl);
        IFF2 = false;
    }
    function retn(){
        var pch,pcl;
        pch = memory[0][SP+1];
        pcl = memory[0][SP];
        SP = SP+2;
        PC = toShort((pch*256)+pcl);
        IFF1 = IFF2;
        IFF2 = false;
    }
    function rst00h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0000;
    }
    function rst08h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0008;
    }
    function rst10h(){
        /*var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0010;
        */        
        switch(A){
            case(0x02):{//scank
                if(A!=0x02){
                        
                }else{
                    gui_input_syscall gis = new gui_input_syscall();
                    gis.gui_input_syscall_scank();
                    A = 0xff;
                }                                
            }break;
            case(0x03):{//scanc
                gui_input_syscall gis = new gui_input_syscall();
                gis.gui_input_syscall_scanc();
            }break;
            case(0x2f):{//dsec
                gui_syscall_delay gsd = new gui_syscall_delay();
                gsd.gui_syscall_delay();
            }break;
            case(0x0a):{//INIT_LCD/////////////////////////////ยังไม่เสร็จ
                cursor_onoff = true;
            }break;
            case(0x0b):{//LCDCMD/////////////////////////////ยังไม่เสร็จ
                if(D==0x02){
                    cursor = 0;
                }
            }break;
            case(0x0d):{//GOTO_ADDR/////////////////////////////ยังไม่เสร็จ
                cursor = (byte) (D);
            }break;
            case(0x0e):{//WRLCD
                var keep;
                if(cursor == 0){
                    keep =  String.fromCharCode(D);
                    lcd00 = String.valueOf(keep);
                }
                if(cursor == 1){
                    keep =  String.fromCharCode(D);
                    lcd01 = String.valueOf(keep);
                }
                if(cursor == 2){
                    keep =  String.fromCharCode(D);
                    lcd02 = String.valueOf(keep);
                }
                if(cursor == 3){
                    keep =  String.fromCharCode(D);
                    lcd03 = String.valueOf(keep);
                }
                if(cursor == 4){
                    keep =  String.fromCharCode(D);
                    lcd04 = String.valueOf(keep);
                }
                if(cursor == 5){
                    keep =  String.fromCharCode(D);
                    lcd05 = String.valueOf(keep);
                }
                if(cursor == 6){
                    keep =  String.fromCharCode(D);
                    lcd06 = String.valueOf(keep);
                }
                if(cursor == 7){
                    keep =  String.fromCharCode(D);
                    lcd07 = String.valueOf(keep);
                }
                if(cursor == 8){
                    keep =  String.fromCharCode(D);
                    lcd40 = String.valueOf(keep);
                }
                if(cursor == 9){
                    keep =  String.fromCharCode(D);
                    lcd41 = String.valueOf(keep);
                }
                if(cursor == 10){
                    keep =  String.fromCharCode(D);
                    lcd42 = String.valueOf(keep);
                }
                if(cursor == 11){
                    keep =  String.fromCharCode(D);
                    lcd43 = String.valueOf(keep);
                }
                if(cursor == 12){
                    keep =  String.fromCharCode(D);
                    lcd44 = String.valueOf(keep);
                }
                if(cursor == 13){
                    keep =  String.fromCharCode(D);
                    lcd45 = String.valueOf(keep);
                }
                if(cursor == 14){
                    keep =  String.fromCharCode(D);
                    lcd46 = String.valueOf(keep);
                }
                if(cursor == 15){
                    keep =  String.fromCharCode(D);
                    lcd47 = String.valueOf(keep);
                }
                cursor++;
            }break;
            case(0x14):{//LCDHEX
                if(cursor == 0){
                    lcd00 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 1){                   
                    lcd01 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 2){                    
                    lcd02 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 3){                    
                    lcd03 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 4){                    
                    lcd04 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 5){                    
                    lcd05 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 6){                    
                    lcd06 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 7){                    
                    lcd07 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 8){                    
                    lcd40 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 9){                    
                    lcd41 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 10){                    
                    lcd42 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 11){                    
                    lcd43 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 12){                    
                    lcd44 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 13){                    
                    lcd45 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 14){                    
                    lcd46 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
                if(cursor == 15){                    
                    lcd47 = regtwo(D);
                    cursor = (byte) (cursor + 2);break;
                }
            }break;
            case(0x16):{//WR_LCD_MSG/////////////////////////////ยังไม่เสร็จ
                var x = ((H*256) + L);
                while((memory[0][x])!=0x00){
                    var keep;
                    if(cursor == 0){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd00 = String.valueOf(keep);
                    }
                    if(cursor == 1){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd01 = String.valueOf(keep);
                    }
                    if(cursor == 2){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd02 = String.valueOf(keep);
                    }
                    if(cursor == 3){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd03 = String.valueOf(keep);
                    }
                    if(cursor == 4){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd04 = String.valueOf(keep);
                    }
                    if(cursor == 5){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd05 = String.valueOf(keep);
                    }
                    if(cursor == 6){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd06 = String.valueOf(keep);
                    }
                    if(cursor == 7){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd07 = String.valueOf(keep);
                    }
                    if(cursor == 8){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd40 = String.valueOf(keep);
                    }
                    if(cursor == 9){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd41 = String.valueOf(keep);
                    }
                    if(cursor == 10){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd42 = String.valueOf(keep);
                    }
                    if(cursor == 11){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd43 = String.valueOf(keep);
                    }
                    if(cursor == 12){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd44 = String.valueOf(keep);
                    }
                    if(cursor == 13){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd45 = String.valueOf(keep);
                    }
                    if(cursor == 14){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd46 = String.valueOf(keep);
                    }
                    if(cursor == 15){
                        keep =  String.fromCharCode(memory[0][x]);
                        lcd47 = String.valueOf(keep);
                    }
                    cursor++;
                    x = ((H*256)+L+1);
                    var h = ((x&0xff00)/256);
                    var l = x&0xff;
                    var nh = h.toString;
                    var nl = l.toString;
                    H = toShort(h);
                    L = toShort(l);
                }
            }break;
            case(0x17):{//CLR_LCD
                lcd00="";lcd01="";lcd02="";lcd03="";lcd04="";lcd05="";lcd06="";lcd07="";lcd40="";lcd41="";lcd42="";lcd43="";lcd44="";lcd45="";lcd46="";lcd47="";
                cursor=0;
            }break;
            case(0x18):{//CUR_ON
                cursor_onoff = true;
            }break;
            case(0x19):{//CUR_OFF
                cursor_onoff = false;
            }break;
            case(0x4c):{//HBEEP
                speaker = 1;
            }break;
            case(0x4d):{//LBEEP
                speaker = 2;
            }break;
            case(0x4e):{//TITLE
                speaker = 3;
            }break;
        }        
    }
    function rst18h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0018;
    }
    function rst20h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0020;
    }
    function rst28h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0028;
    }
    function rst30h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0030;
    }
    function rst38h(){
        var pch,pcl;
        pch = toShort((PC&0xff00)/256);
        pcl = toShort(PC&0x00ff);
        memory[0][SP-1] = pch;
        memory[0][SP-2] = pcl;
        SP = SP-2;
        PC = 0x0038;
    }
   function regtwo(v){
        var s="";
        if((v&0xf0)==0x00){
            s = "0"+vareger.toHexString(v);
        }else{
            s = vareger.toHexString(v);
        }
        return(s);
    }
