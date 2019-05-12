function in_a_n() {
    switch (op2) {
        case 0x0040: {
            A = led;
        }
        break;
    case 0x0060: {
        A = segment;
    }
    break;
    }
}

function in_a_c() {
    switch (C) {
        case 0x0040: {
            A = led;
        }
        break;
    case 0x0060: {
        A = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_b_c() {
    switch (C) {
        case 0x0040: {
            B = led;
        }
        break;
    case 0x0060: {
        B = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_c_c() {
    switch (C) {
        case 0x0040: {
            C = led;
        }
        break;
    case 0x0060: {
        C = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_d_c() {
    switch (C) {
        case 0x0040: {
            D = led;
        }
        break;
    case 0x0060: {
        D = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_e_c() {
    switch (C) {
        case 0x0040: {
            E = led;
        }
        break;
    case 0x0060: {
        E = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_h_c() {
    switch (C) {
        case 0x0040: {
            H = led;
        }
        break;
    case 0x0060: {
        H = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function in_l_c() {
    switch (C) {
        case 0x0040: {
            L = led;
        }
        break;
    case 0x0060: {
        L = segment;
    }
    break;
    }
    flags();
    flagz();
    flagh();
    flagpvp();
    flagn(false);
}

function ini() {
    var x = H * 256 + L;
    switch (C) {
        case 0x0040: {
            memory[0][x] = led;
        }
        break;
    case 0x0060: {
        memory[0][x] = segment;
    }
    break;
    }
    x = x + 1;
    H = toShort((x & 0xff00) / 256);
    L = toShort(x & 0x00ff);
    B = toShort(B - 1);
    flagz_opin1();
    flagn(true);
}

function inir() {
    while (B != 0) {
        var x = H * 256 + L;
        switch (C) {
            case 0x0040: {
                memory[0][x] = led;
            }
            break;
        case 0x0060: {
            memory[0][x] = segment;
        }
        break;
        }
        x = x + 1;
        H = toShort((x & 0xff00) / 256);
        L = toShort(x & 0x00ff);
        B = toShort(B - 1);
        T_state = T_state + 21;
    }
    T_state = T_state + 16;
    flagzl(true);
    flagn(true);
}

function ind() {
    var x = H * 256 + L;
    switch (C) {
        case 0x0040: {
            memory[0][x] = led;
        }
        break;
    case 0x0060: {
        memory[0][x] = segment;
    }
    break;
    }
    x = x - 1;
    H = toShort((x & 0xff00) / 256);
    L = toShort(x & 0x00ff);
    B = toShort(B - 1);
    flagz_opin1();
    flagn(true);
}

function indr() {
    while (B != 0) {
        var x = H * 256 + L;
        switch (C) {
            case 0x0040: {
                memory[0][x] = led;
            }
            break;
        case 0x0060: {
            memory[0][x] = segment;
        }
        break;
        }
        x = x - 1;
        H = toShort((x & 0xff00) / 256);
        L = toShort(x & 0x00ff);
        B = toShort(B - 1);
        T_state = T_state + 21;
    }
    T_state = T_state + 16;
    flagzl(true);
    flagn(true);
}
//**********************************************
function out_n_a() {
    switch (op2) {
        case 0x0040: {
            led = byte(A);
        }
        break;
    case 0x0060: {
        segment = byte(A);
    }
    break;
    }
}

function out_c_a() {
    switch (C) {
        case 0x0040: {
            led = byte(A);
        }
        break;
    case 0x0060: {
        segment = byte(A);
    }
    break;
    }
}

function out_c_b() {
    switch (C) {
        case 0x0040: {
            led = byte(B);
        }
        break;
    case 0x0060: {
        segment = byte(B);
    }
    break;
    }
}

function out_c_c() {
    switch (C) {
        case 0x0040: {
            led = byte(C);
        }
        break;
    case 0x0060: {
        segment = byte(C);
    }
    break;
    }
}

function out_c_d() {
    switch (C) {
        case 0x0040: {
            led = byte(D);
        }
        break;
    case 0x0060: {
        segment = byte(D);
    }
    break;
    }
}

function out_c_e() {
    switch (C) {
        case 0x0040: {
            led = byte(E);
        }
        break;
    case 0x0060: {
        segment = byte(E);
    }
    break;
    }
}

function out_c_h() {
    switch (C) {
        case 0x0040: {
            led = byte(H);
        }
        break;
    case 0x0060: {
        segment = byte(H);
    }
    break;
    }
}

function out_c_l() {
    switch (C) {
        case 0x0040: {
            led = byte(L);
        }
        break;
    case 0x0060: {
        segment = byte(L);
    }
    break;
    }
}

function outi() {
    var x = H * 256 + L;
    switch (C) {
        case 0x0040: {
            led = byte(memory[0][x]);
        }
        break;
    case 0x0060: {
        segment = byte(memory[0][x]);
    }
    break;
    }
    x = x + 1;
    H = toShort((x & 0xff00) / 256);
    L = toShort(x & 0x00ff);
    B = toShort(B - 1);
    flagz_opin1();
    flagn(true);
}

function otir() {
    while (B != 0) {
        var x = H * 256 + L;
        switch (C) {
            case 0x0040: {
                led = byte(memory[0][x]);
            }
            break;
        case 0x0060: {
            segment = byte(memory[0][x]);
        }
        break;
        }
        x = x + 1;
        H = toShort((x & 0xff00) / 256);
        L = toShort(x & 0x00ff);
        B = toShort(B - 1);
        T_state = T_state + 21;
    }
    T_state = T_state + 16;
    flagzl(true);
    flagn(true);
}

function outd() {
    var x = H * 256 + L;
    switch (C) {
        case 0x0040: {
            led = byte(memory[0][x]);
        }
        break;
    case 0x0060: {
        segment = byte(memory[0][x]);
    }
    break;
    }
    x = x - 1;
    H = toShort((x & 0xff00) / 256);
    L = toShort(x & 0x00ff);
    B = toShort(B - 1);
    flagz_opin1();
    flagn(true);
}

function otdr() {
    while (B != 0) {
        var x = H * 256 + L;
        switch (C) {
            case 0x0040: {
                led = byte(memory[0][x]);
            }
            break;
        case 0x0060: {
            segment = byte(memory[0][x]);
        }
        break;
        }
        x = x - 1;
        H = toShort((x & 0xff00) / 256);
        L = toShort(x & 0x00ff);
        B = toShort(B - 1);
        T_state = T_state + 21;
    }
    T_state = T_state + 16;
    flagzl(true);
    flagn(true);
}