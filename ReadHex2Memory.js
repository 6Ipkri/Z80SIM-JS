function readhex(fpath){
    String[] temp;
   // String[] memory;

    int initAddr, offset;    //initAddr : Initial Address,Offset: n(byte)
    int nLine = 0;

    //Count line of code
    try {
        BufferedReader in = new BufferedReader(new FileReader(fpath));
        String str_temp;
        while ((str_temp = in.readLine()) != null) {
            nLine++;
        }
        in.close();
    } catch (IOException e) {
        console.log("IO exception!");
    }


    //Read code in hex file to line array
    temp = new String[nLine];
 
        BufferedReader in = new BufferedReader(new FileReader(fpath));
        String str_line;
        int i = 0;
        while ((str_line = in.readLine()) != null) {
            temp[i] = str_line;
            i++;
        }
        in.close();

        String hex_temp[][] = new String[1][65536];
        int first_byte = 9;
        PC_nemonic = Integer.parseInt(temp[0].substring(3, 7),16);
        st_pc = PC_nemonic;
        //console.log("hex_code");
        for (int i = 0; i < nLine-1; i++) { // address array start 0 //address line start 1 for nLine -1
            //input(str)->parseInt(str)decimal->toHex->toInt::offset
            offset = Integer.parseInt(temp[i].substring(1, 3),16);
            initAddr = Integer.parseInt(temp[i].substring(3, 7),16);
            //outputhexcode = outputhexcode+""+ Integer.toHexString(initAddr)+" :";
            for (int j = 0; j < offset; j++) {
                hex_temp[0][initAddr + j] = temp[i].substring(first_byte + (j * 2),first_byte + (j * 2)+ 2);
                memory[0][initAddr+j] = Short.parseShort(hex_temp[0][initAddr+j], 16);
                //outputhexcode = outputhexcode+Integer.toHexString(memory[0][initAddr + j])+", ";
            }
            //outputhexcode = outputhexcode+"\n";
        }
}