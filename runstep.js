function runstep() {
    if (op1 != 0x76) {
        op1 = memory[0][PC];
        backupacc = A;
        if (op1 <= 127) {
            if (op1 <= 63) {
                if (op1 <= 31) {
                    if (op1 <= 15) {
                        if (op1 <= 7) {
                            switch (op1) { //0-7
                                case (0x00): {
                                    nop();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x01): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_bc_nn();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0x02): {
                                ld_bc_a();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x03): {
                                inc_bc();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x04): {
                                inc_b();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x05): {
                                dec_b();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x06): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_b_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x07): {
                                rlca();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //8-15
                                case (0x08): {
                                    af_apfp();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x09): {
                                add_hl_bc();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x0a): {
                                ld_a_bc();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x0b): {
                                dec_bc();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x0c): {
                                inc_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x0d): {
                                dec_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x0e): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_c_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x0f): {
                                rrca();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 23) {
                            switch (op1) { //16-23
                                case (0x10): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    djnz();
                                    //T_state = T_state+13;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x11): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_de_nn();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0x12): {
                                ld_de_a();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x13): {
                                inc_de();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x14): {
                                inc_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x15): {
                                dec_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x16): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_d_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x17): {
                                rla();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //24-31
                                case (0x18): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    jr_e();
                                    T_state = T_state + 12;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x19): {
                                add_hl_de();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x1a): {
                                ld_a_de();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x1b): {
                                dec_de();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x1c): {
                                inc_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x1d): {
                                dec_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x1e): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_e_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x1f): {
                                rra();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                } else {
                    if (op1 <= 47) {
                        if (op1 <= 39) {
                            switch (op1) { //32-39
                                case (0x20): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    jr_nz_e();
                                    //T_state = T_state+12;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x21): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_hl_nn();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0x22): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_mnn_hl();
                                T_state = T_state + 16;
                            }
                            break;
                            case (0x23): {
                                inc_hl();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x24): {
                                inc_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x25): {
                                dec_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x26): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_h_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x27): {
                                daa();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //40-47
                                case (0x28): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    jr_z_e();
                                    //T_state = T_state+12;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x29): {
                                add_hl_hl();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x2a): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_hl_mnn();
                                T_state = T_state + 16;
                            }
                            break;
                            case (0x2b): {
                                dec_hl();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x2c): {
                                inc_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x2d): {
                                dec_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x2e): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_l_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x2f): {
                                cpl();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 55) {
                            switch (op1) { //48-55
                                case (0x30): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    jr_nc_e();
                                    //T_state = T_state+12;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x31): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_sp_nn();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0x32): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_nn_a();
                                T_state = T_state + 13;
                            }
                            break;
                            case (0x33): {
                                inc_sp();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x34): {
                                inc_mhl();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x35): {
                                dec_mhl();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x36): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_hl_n();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0x37): {
                                scf();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //56-63
                                case (0x38): {
                                    PC = PC + 1;
                                    op2 = memory[0][PC];
                                    jr_c_e();
                                    //T_state = T_state+12;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0x39): {
                                add_hl_sp();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0x3a): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                ld_a_nn();
                                T_state = T_state + 13;
                            }
                            break;
                            case (0x3b): {
                                dec_sp();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0x3c): {
                                inc_a();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x3d): {
                                dec_a();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x3e): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                ld_a_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x3f): {
                                ccf();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                }
            } else {
                if (op1 <= 95) {
                    if (op1 <= 79) {
                        if (op1 <= 71) {
                            switch (op1) { //64-71
                                case (0x40): {
                                    ld_b_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x41): {
                                ld_b_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x42): {
                                ld_b_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x43): {
                                ld_b_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x44): {
                                ld_b_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x45): {
                                ld_b_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x46): {
                                ld_b_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x47): {
                                ld_b_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //72-79
                                case (0x48): {
                                    ld_c_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x49): {
                                ld_c_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x4a): {
                                ld_c_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x4b): {
                                ld_c_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x4c): {
                                ld_c_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x4d): {
                                ld_c_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x4e): {
                                ld_c_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x4f): {
                                ld_c_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 87) {
                            switch (op1) { //80-87
                                case (0x50): {
                                    ld_d_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x51): {
                                ld_d_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x52): {
                                ld_d_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x53): {
                                ld_d_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x54): {
                                ld_d_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x55): {
                                ld_d_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x56): {
                                ld_d_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x57): {
                                ld_d_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //88-95
                                case (0x58): {
                                    ld_e_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x59): {
                                ld_e_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x5a): {
                                ld_e_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x5b): {
                                ld_e_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x5c): {
                                ld_e_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x5d): {
                                ld_e_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x5e): {
                                ld_e_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x5f): {
                                ld_e_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                } else {
                    if (op1 <= 111) {
                        if (op1 <= 103) {
                            switch (op1) { //96-103
                                case (0x60): {
                                    ld_h_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x61): {
                                ld_h_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x62): {
                                ld_h_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x63): {
                                ld_h_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x64): {
                                ld_h_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x65): {
                                ld_h_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x66): {
                                ld_h_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x67): {
                                ld_h_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //104-111
                                case (0x68): {
                                    ld_l_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x69): {
                                ld_l_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x6a): {
                                ld_l_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x6b): {
                                ld_l_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x6c): {
                                ld_l_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x6d): {
                                ld_l_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x6e): {
                                ld_l_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x6f): {
                                ld_l_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 119) {
                            switch (op1) { //112-119
                                case (0x70): {
                                    ld_hl_b();
                                    T_state = T_state + 7;
                                }
                                break;
                            case (0x71): {
                                ld_hl_c();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x72): {
                                ld_hl_d();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x73): {
                                ld_hl_e();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x74): {
                                ld_hl_h();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x75): {
                                ld_hl_l();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x76): {
                                halt();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x77): {
                                ld_hl_a();
                                T_state = T_state + 7;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //120-127
                                case (0x78): {
                                    ld_a_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x79): {
                                ld_a_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x7a): {
                                ld_a_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x7b): {
                                ld_a_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x7c): {
                                ld_a_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x7d): {
                                ld_a_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x7e): {
                                ld_a_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x7f): {
                                ld_a_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                }

            }
        } else {
            if (op1 <= 191) {
                if (op1 <= 159) {
                    if (op1 <= 143) {
                        if (op1 <= 135) {
                            switch (op1) { //128-135
                                case (0x80): {
                                    add_a_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x81): {
                                add_a_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x82): {
                                add_a_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x83): {
                                add_a_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x84): {
                                add_a_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x85): {
                                add_a_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x86): {
                                add_a_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x87): {
                                add_a_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //136-143
                                case (0x88): {
                                    adc_a_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x89): {
                                adc_a_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x8a): {
                                adc_a_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x8b): {
                                adc_a_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x8c): {
                                adc_a_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x8d): {
                                adc_a_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x8e): {
                                adc_a_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x8f): {
                                adc_a_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 151) {
                            switch (op1) { //144-151
                                case (0x90): {
                                    sub_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x91): {
                                sub_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x92): {
                                sub_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x93): {
                                sub_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x94): {
                                sub_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x95): {
                                sub_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x96): {
                                sub_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x97): {
                                sub_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //152-159
                                case (0x98): {
                                    sbc_a_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0x99): {
                                sbc_a_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x9a): {
                                sbc_a_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x9b): {
                                sbc_a_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x9c): {
                                sbc_a_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x9d): {
                                sbc_a_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0x9e): {
                                sbc_a_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0x9f): {
                                sbc_a_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                } else {
                    if (op1 <= 175) {
                        if (op1 <= 167) {
                            switch (op1) { //160-167
                                case (0xa0): {
                                    and_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0xa1): {
                                and_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xa2): {
                                and_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xa3): {
                                and_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xa4): {
                                and_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xa5): {
                                and_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xa6): {
                                and_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xa7): {
                                and_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //168-175
                                case (0xa8): {
                                    xor_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0xa9): {
                                xor_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xaa): {
                                xor_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xab): {
                                xor_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xac): {
                                xor_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xad): {
                                xor_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xae): {
                                xor_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xaf): {
                                xor_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 183) {
                            switch (op1) { //176-183
                                case (0xb0): {
                                    or_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0xb1): {
                                or_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xb2): {
                                or_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xb3): {
                                or_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xb4): {
                                or_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xb5): {
                                or_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xb6): {
                                or_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xb7): {
                                or_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //184-191
                                case (0xb8): {
                                    cp_b();
                                    T_state = T_state + 4;
                                }
                                break;
                            case (0xb9): {
                                cp_c();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xba): {
                                cp_d();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xbb): {
                                cp_e();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xbc): {
                                cp_h();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xbd): {
                                cp_l();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xbe): {
                                cp_hl();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xbf): {
                                cp_a();
                                T_state = T_state + 4;
                            }
                            break;
                            }
                        }
                    }
                }
            } else {
                if (op1 <= 223) {
                    if (op1 <= 207) {
                        if (op1 <= 199) {
                            switch (op1) { //192-199
                                case (0xc0): {
                                    ret_nz();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xc1): {
                                pop_bc();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0xc2): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                nz_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xc3): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xc4): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_nz();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xc5): {
                                push_bc();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xc6): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                add_a_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xc7): {
                                rst00h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //200-207
                                case (0xc8): {
                                    ret_z();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xc9): {
                                ret();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xca): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                z_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xcb): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                switch (op2) {
                                    case (0x07): {
                                        rlc_a();
                                        T_state = T_state + 8;
                                    }
                                    break;
                                case (0x00): {
                                    rlcb();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x01): {
                                    rlcc();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x02): {
                                    rlcd();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x03): {
                                    rlce();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x04): {
                                    rlch();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x05): {
                                    rlcl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x06): {
                                    rlc_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x17): {
                                    rl_a();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x10): {
                                    rlb();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x11): {
                                    rlc();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x12): {
                                    rld();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x13): {
                                    rle();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x14): {
                                    rlh();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x15): {
                                    rll();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x16): {
                                    rl_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x0f): {
                                    rrc_a();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x08): {
                                    rrcb();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x09): {
                                    rrcc();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x0a): {
                                    rrcd();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x0b): {
                                    rrce();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x0c): {
                                    rrch();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x0d): {
                                    rrcl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x0e): {
                                    rrc_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x1f): {
                                    rr_a();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x18): {
                                    rrb();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x19): {
                                    rrc();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x1a): {
                                    rrd();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x1b): {
                                    rre();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x1c): {
                                    rrh();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x1d): {
                                    rrl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x1e): {
                                    rr_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x27): {
                                    slaa();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x20): {
                                    slab();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x21): {
                                    slac();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x22): {
                                    slad();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x23): {
                                    slae();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x24): {
                                    slah();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x25): {
                                    slal();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x26): {
                                    sla_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x2f): {
                                    sraa();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x28): {
                                    srab();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x29): {
                                    srac();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x2a): {
                                    srad();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x2b): {
                                    srae();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x2c): {
                                    srah();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x2d): {
                                    sral();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x2e): {
                                    sra_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x3f): {
                                    srla();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x38): {
                                    srlb();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x39): {
                                    srlc();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x3a): {
                                    srld();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x3b): {
                                    srle();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x3c): {
                                    srlh();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x3d): {
                                    srll();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x3e): {
                                    srl_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x40): {
                                    t_0_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x48): {
                                    t_1_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x50): {
                                    t_2_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x58): {
                                    t_3_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x60): {
                                    t_4_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x68): {
                                    t_5_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x70): {
                                    t_6_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x78): {
                                    t_7_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x41): {
                                    t_0_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x49): {
                                    t_1_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x51): {
                                    t_2_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x59): {
                                    t_3_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x61): {
                                    t_4_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x69): {
                                    t_5_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x71): {
                                    t_6_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x79): {
                                    t_7_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x42): {
                                    t_0_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x4A): {
                                    t_1_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x52): {
                                    t_2_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5A): {
                                    t_3_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x62): {
                                    t_4_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x6A): {
                                    t_5_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x72): {
                                    t_6_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x7A): {
                                    t_7_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x43): {
                                    t_0_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x4B): {
                                    t_1_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x53): {
                                    t_2_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5B): {
                                    t_3_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x63): {
                                    t_4_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x6B): {
                                    t_5_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x73): {
                                    t_6_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x7B): {
                                    t_7_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x44): {
                                    t_0_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x4C): {
                                    t_1_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x54): {
                                    t_2_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5C): {
                                    t_3_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x64): {
                                    t_4_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x6C): {
                                    t_5_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x74): {
                                    t_6_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x7C): {
                                    t_7_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x45): {
                                    t_0_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x4D): {
                                    t_1_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x55): {
                                    t_2_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5D): {
                                    t_3_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x65): {
                                    t_4_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x6D): {
                                    t_5_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x75): {
                                    t_6_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x7D): {
                                    t_7_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x47): {
                                    t_0_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x4F): {
                                    t_1_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x57): {
                                    t_2_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5F): {
                                    t_3_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x67): {
                                    t_4_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x6F): {
                                    t_5_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x77): {
                                    t_6_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x7F): {
                                    t_7_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x46): {
                                    t_0_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x4e): {
                                    t_1_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x56): {
                                    t_2_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x5e): {
                                    t_3_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x66): {
                                    t_4_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x6e): {
                                    t_5_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x76): {
                                    t_6_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x7e): {
                                    t_7_mhl();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0xc0): {
                                    set_0_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc8): {
                                    set_1_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd0): {
                                    set_2_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd8): {
                                    set_3_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe0): {
                                    set_4_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe8): {
                                    set_5_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf0): {
                                    set_6_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf8): {
                                    set_7_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc1): {
                                    set_0_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc9): {
                                    set_1_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd1): {
                                    set_2_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd9): {
                                    set_3_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe1): {
                                    set_4_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe9): {
                                    set_5_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf1): {
                                    set_6_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf9): {
                                    set_7_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc2): {
                                    set_0_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xcA): {
                                    set_1_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd2): {
                                    set_2_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xdA): {
                                    set_3_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe2): {
                                    set_4_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xeA): {
                                    set_5_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf2): {
                                    set_6_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xfA): {
                                    set_7_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc3): {
                                    set_0_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xcB): {
                                    set_1_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd3): {
                                    set_2_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xdB): {
                                    set_3_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe3): {
                                    set_4_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xeB): {
                                    set_5_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf3): {
                                    set_6_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xfB): {
                                    set_7_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc4): {
                                    set_0_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xcC): {
                                    set_1_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd4): {
                                    set_2_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xdC): {
                                    set_3_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe4): {
                                    set_4_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xeC): {
                                    set_5_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf4): {
                                    set_6_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xfC): {
                                    set_7_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc5): {
                                    set_0_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xcD): {
                                    set_1_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd5): {
                                    set_2_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xdD): {
                                    set_3_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe5): {
                                    set_4_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xeD): {
                                    set_5_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf5): {
                                    set_6_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xfD): {
                                    set_7_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc7): {
                                    set_0_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xcF): {
                                    set_1_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xd7): {
                                    set_2_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xdF): {
                                    set_3_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xe7): {
                                    set_4_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xeF): {
                                    set_5_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xf7): {
                                    set_6_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xfF): {
                                    set_7_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xc6): {
                                    set_0_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xce): {
                                    set_1_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xd6): {
                                    set_2_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xde): {
                                    set_3_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xe6): {
                                    set_4_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xee): {
                                    set_5_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xf6): {
                                    set_6_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xfe): {
                                    set_7_mhl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x80): {
                                    res_0_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x88): {
                                    res_1_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x90): {
                                    res_2_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x98): {
                                    res_3_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa0): {
                                    res_4_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa8): {
                                    res_5_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb0): {
                                    res_6_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb8): {
                                    res_7_B();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x81): {
                                    res_0_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x89): {
                                    res_1_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x91): {
                                    res_2_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x99): {
                                    res_3_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa1): {
                                    res_4_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa9): {
                                    res_5_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb1): {
                                    res_6_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb9): {
                                    res_7_C();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x82): {
                                    res_0_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8A): {
                                    res_1_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x92): {
                                    res_2_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9A): {
                                    res_3_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa2): {
                                    res_4_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xaA): {
                                    res_5_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb2): {
                                    res_6_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbA): {
                                    res_7_D();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x83): {
                                    res_0_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8B): {
                                    res_1_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x93): {
                                    res_2_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9B): {
                                    res_3_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa3): {
                                    res_4_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xaB): {
                                    res_5_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb3): {
                                    res_6_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbB): {
                                    res_7_E();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x84): {
                                    res_0_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8C): {
                                    res_1_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x94): {
                                    res_2_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9C): {
                                    res_3_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa4): {
                                    res_4_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xaC): {
                                    res_5_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb4): {
                                    res_6_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbC): {
                                    res_7_H();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x85): {
                                    res_0_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8D): {
                                    res_1_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x95): {
                                    res_2_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9D): {
                                    res_3_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa5): {
                                    res_4_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xaD): {
                                    res_5_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb5): {
                                    res_6_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbD): {
                                    res_7_L();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x87): {
                                    res_0_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8F): {
                                    res_1_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x97): {
                                    res_2_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9F): {
                                    res_3_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa7): {
                                    res_4_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xaF): {
                                    res_5_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb7): {
                                    res_6_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbF): {
                                    res_7_A();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x86): {
                                    res_0_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x8e): {
                                    res_1_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x96): {
                                    res_2_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x9e): {
                                    res_3_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa6): {
                                    res_4_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xae): {
                                    res_5_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xb6): {
                                    res_6_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xbe): {
                                    res_7_mhl();
                                    T_state = T_state + 8;
                                }
                                break;
                                }
                            }
                            break;
                            case (0xcc): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_z();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xcd): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_nn();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xce): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                adc_a_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xcf): {
                                rst08h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 215) {
                            switch (op1) { //208-215
                                case (0xd0): {
                                    ret_nc();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xd1): {
                                pop_de();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xd2): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                nc_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xd3): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                out_n_a();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xd4): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_nc();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xd5): {
                                push_de();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xd6): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                sub_a_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xd7): {
                                rst10h();
                                T_state = T_state + 11;
                                //PC = PC - 1;//จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //216-223
                                case (0xd8): {
                                    ret_c();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xd9): {
                                exx();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xda): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                c_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xdb): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                in_a_n();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xdc): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_c();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xdd): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                switch (op2) {
                                    case (0x7e): {
                                        PC = PC + 1;
                                        op3 = memory[0][PC];
                                        ld_a_ix_d();
                                        T_state = T_state + 19;
                                    }
                                    break;
                                case (0x46): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_b_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x4e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_c_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x56): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_d_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x5e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_e_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x66): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_h_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x6e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_l_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x77): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_a();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x70): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_b();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x71): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_c();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x72): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x73): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_e();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x74): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_h();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x75): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_ix_l();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x36): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_ix_n();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x21): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_ix_nn();
                                    T_state = T_state + 14;
                                }
                                break;
                                case (0x2a): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_ix_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x22): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_ix();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0xf9): {
                                    ld_sp_ix();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0xe5): {
                                    push_ix();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xe1): {
                                    pop_ix();
                                    T_state = T_state + 14;
                                }
                                break;
                                case (0x49): {
                                    add_ix_bc();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x59): {
                                    add_ix_de();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x69): {
                                    add_ix_ix();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x79): {
                                    add_ix_sp();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x23): {
                                    inc_ix();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0x2b): {
                                    dec_ix();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0x86): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    add_a_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x8e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    adc_a_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x96): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    sub_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x9e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    sbc_a_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xa6): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    and_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xb6): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    or_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xae): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    xor_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xbe): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    cp_IX();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x34): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    inc_IX();
                                    T_state = T_state + 23;
                                }
                                break;
                                case (0x35): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    dec_IX();
                                    T_state = T_state + 23;
                                }
                                break;
                                case (0xcb): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    switch (op4) {
                                        case (0x06): {
                                            rlc_mix();
                                            T_state = T_state + 23;
                                        }
                                        break;
                                    case (0x16): {
                                        rl_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x0e): {
                                        rrc_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x1e): {
                                        rr_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x26): {
                                        sla_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x2e): {
                                        sra_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x3e): {
                                        srl_mix();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x46): {
                                        t_0_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x4e): {
                                        t_1_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x56): {
                                        t_2_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x5e): {
                                        t_3_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x66): {
                                        t_4_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x6e): {
                                        t_5_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x76): {
                                        t_6_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x7e): {
                                        t_7_ixd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0xc6): {
                                        set_0_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xce): {
                                        set_1_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xd6): {
                                        set_2_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xde): {
                                        set_3_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xe6): {
                                        set_4_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xee): {
                                        set_5_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xf6): {
                                        set_6_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xfe): {
                                        set_7_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x86): {
                                        res_0_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x8e): {
                                        res_1_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x96): {
                                        res_2_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x9e): {
                                        res_3_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xa6): {
                                        res_4_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xae): {
                                        res_5_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xb6): {
                                        res_6_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xbe): {
                                        res_7_ixd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    }
                                }
                                break;
                                case (0xe9): {
                                    ix();
                                    T_state = T_state + 8;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                                case (0xe3): {
                                    msp_ix();
                                    T_state = T_state + 23;
                                }
                                break;
                                }
                            }
                            break;
                            case (0xde): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                sbc_a_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xdf): {
                                rst18h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        }
                    }
                } else {
                    if (op1 <= 239) {
                        if (op1 <= 231) {
                            switch (op1) { //224-231
                                case (0xe0): {
                                    ret_po();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xe1): {
                                pop_hl();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0xe2): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                po_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xe3): {
                                msp_hl();
                                T_state = T_state + 19;
                            }
                            break;
                            case (0xe4): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_po();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xe5): {
                                push_hl();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xe6): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                and_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xe7): {
                                rst20h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //232-239
                                case (0xe8): {
                                    ret_pe();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xe9): {
                                hl();
                                T_state = T_state + 4;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xea): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                pe_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xeb): {
                                de_hl();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xec): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_pe();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xed): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                switch (op2) {
                                    case (0x57): {
                                        ld_a_i();
                                        T_state = T_state + 9;
                                    }
                                    break;
                                case (0x5f): {
                                    ld_a_r();
                                    T_state = T_state + 9;
                                }
                                break;
                                case (0x47): {
                                    ld_i_a();
                                    T_state = T_state + 9;
                                }
                                break;
                                case (0x4f): {
                                    ld_r_a();
                                    T_state = T_state + 9;
                                }
                                break;
                                case (0x4b): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_bc_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x5b): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_de_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x6b): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_hl_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x7b): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_sp_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x43): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_bc();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x53): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_de();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x63): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_hl();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x73): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_sp();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x4a): {
                                    adc_hl_bc();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x5a): {
                                    adc_hl_de();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x6a): {
                                    adc_hl_hl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x7a): {
                                    adc_hl_sp();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x42): {
                                    sbc_hl_bc();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x52): {
                                    sbc_hl_de();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x62): {
                                    sbc_hl_hl();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x72): {
                                    sbc_hl_sp();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x6f): {
                                    rldd();
                                    T_state = T_state + 18;
                                }
                                break;
                                case (0x67): {
                                    rrdd();
                                    T_state = T_state + 18;
                                }
                                break;
                                case (0x44): {
                                    neg();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x46): {
                                    im0();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x56): {
                                    im1();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0x5e): {
                                    im2();
                                    T_state = T_state + 8;
                                }
                                break;
                                case (0xa0): {
                                    ldi();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb0): {
                                    ldir();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0xa8): {
                                    ldd();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb8): {
                                    lddr();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0xa1): {
                                    cpi();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb1): {
                                    cpir();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0xa9): {
                                    cpd();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb9): {
                                    cpdr();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0x4d): {
                                    reti();
                                    T_state = T_state + 14;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                                case (0x45): {
                                    retn();
                                    T_state = T_state + 14;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                                case (0x78): {
                                    in_a_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x40): {
                                    in_b_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x48): {
                                    in_c_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x50): {
                                    in_d_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x58): {
                                    in_e_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x60): {
                                    in_h_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x68): {
                                    in_l_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0xa2): {
                                    ini();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb2): {
                                    inir();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0xaa): {
                                    ind();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xba): {
                                    indr();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0x79): {
                                    out_c_a();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x41): {
                                    out_c_b();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x49): {
                                    out_c_c();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x51): {
                                    out_c_d();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x59): {
                                    out_c_e();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x61): {
                                    out_c_h();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0x69): {
                                    out_c_l();
                                    T_state = T_state + 12;
                                }
                                break;
                                case (0xa3): {
                                    outi();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xb3): {
                                    otir();
                                    //T_state = T_state+21;
                                }
                                break;
                                case (0xab): {
                                    outd();
                                    T_state = T_state + 16;
                                }
                                break;
                                case (0xbb): {
                                    otdr();
                                    //T_state = T_state+21;
                                }
                                break;
                                }
                            }
                            break;
                            case (0xee): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                xor_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xef): {
                                rst28h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        }
                    } else {
                        if (op1 <= 247) {
                            switch (op1) { //240-247
                                case (0xf0): {
                                    ret_p();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xf1): {
                                pop_af();
                                T_state = T_state + 10;
                            }
                            break;
                            case (0xf2): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                p_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xf3): {
                                di();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xf4): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_p();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xf5): {
                                push_af();
                                T_state = T_state + 11;
                            }
                            break;
                            case (0xf6): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                or_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xf7): {
                                rst30h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        } else {
                            switch (op1) { //248-255
                                case (0xf8): {
                                    ret_m();
                                    T_state = T_state + 11;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                            case (0xf9): {
                                ld_sp_hl();
                                T_state = T_state + 6;
                            }
                            break;
                            case (0xfa): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                m_nn();
                                T_state = T_state + 10;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xfb): {
                                ei();
                                T_state = T_state + 4;
                            }
                            break;
                            case (0xfc): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                PC = PC + 1;
                                op3 = memory[0][PC];
                                call_m();
                                T_state = T_state + 17;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            case (0xfd): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                switch (op2) {
                                    case (0x7e): {
                                        PC = PC + 1;
                                        op3 = memory[0][PC];
                                        ld_a_iy_d();
                                        T_state = T_state + 19;
                                    }
                                    break;
                                case (0x46): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_b_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x4e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_c_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x56): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_d_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x5e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_e_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x66): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_h_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x6e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_l_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x77): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_a();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x70): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_b();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x71): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_c();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x72): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_d();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x73): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_e();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x74): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_h();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x75): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    ld_iy_l();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x36): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_iy_n();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x21): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_iy_nn();
                                    T_state = T_state + 14;
                                }
                                break;
                                case (0x2a): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_iy_mnn();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0x22): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    ld_mnn_iy();
                                    T_state = T_state + 20;
                                }
                                break;
                                case (0xf9): {
                                    ld_sp_iy();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0xe5): {
                                    push_iy();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0xe1): {
                                    pop_iy();
                                    T_state = T_state + 14;
                                }
                                break;
                                case (0x9): {
                                    add_iy_bc();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x19): {
                                    add_iy_de();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x29): {
                                    add_iy_iy();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x39): {
                                    add_iy_sp();
                                    T_state = T_state + 15;
                                }
                                break;
                                case (0x23): {
                                    inc_iy();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0x2b): {
                                    dec_iy();
                                    T_state = T_state + 10;
                                }
                                break;
                                case (0x86): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    add_a_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x8e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    adc_a_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x96): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    sub_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x9e): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    sbc_a_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xa6): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    and_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xb6): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    or_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xae): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    xor_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0xbe): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    cp_IY();
                                    T_state = T_state + 19;
                                }
                                break;
                                case (0x34): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    inc_IY();
                                    T_state = T_state + 23;
                                }
                                break;
                                case (0x35): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    dec_IY();
                                    T_state = T_state + 23;
                                }
                                break;
                                case (0xcb): {
                                    PC = PC + 1;
                                    op3 = memory[0][PC];
                                    PC = PC + 1;
                                    op4 = memory[0][PC];
                                    switch (op4) {
                                        case (0x06): {
                                            rlc_miy();
                                            T_state = T_state + 23;
                                        }
                                        break;
                                    case (0x16): {
                                        rl_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x0e): {
                                        rrc_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x1e): {
                                        rr_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x26): {
                                        sla_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x2e): {
                                        sra_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x3e): {
                                        srl_miy();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x46): {
                                        t_0_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x4e): {
                                        t_1_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x56): {
                                        t_2_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x5e): {
                                        t_3_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x66): {
                                        t_4_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x6e): {
                                        t_5_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x76): {
                                        t_6_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0x7e): {
                                        t_7_iyd();
                                        T_state = T_state + 20;
                                    }
                                    break;
                                    case (0xc6): {
                                        set_0_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xce): {
                                        set_1_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xd6): {
                                        set_2_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xde): {
                                        set_3_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xe6): {
                                        set_4_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xee): {
                                        set_5_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xf6): {
                                        set_6_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xfe): {
                                        set_7_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x86): {
                                        res_0_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x8e): {
                                        res_1_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x96): {
                                        res_2_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0x9e): {
                                        res_3_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xa6): {
                                        res_4_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xae): {
                                        res_5_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xb6): {
                                        res_6_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    case (0xbe): {
                                        res_7_iyd();
                                        T_state = T_state + 23;
                                    }
                                    break;
                                    }
                                }
                                break;
                                case (0xe9): {
                                    iy();
                                    T_state = T_state + 8;
                                    PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                                }
                                break;
                                case (0xe3): {
                                    msp_iy();
                                    T_state = T_state + 23;
                                }
                                break;
                                }
                            }
                            break;
                            case (0xfe): {
                                PC = PC + 1;
                                op2 = memory[0][PC];
                                cp_n();
                                T_state = T_state + 7;
                            }
                            break;
                            case (0xff): {
                                rst38h();
                                T_state = T_state + 11;
                                PC = PC - 1; //จะมีการบวกคืนค่าภายหลัง
                            }
                            break;
                            }
                        }
                    }
                }

            }
        }
        memory[0][PC] = (short)(memory[0][PC] & 0x00ff);
        memory[0][op1] = (short)(memory[0][op1] & 0x00ff);
        memory[0][op2] = (short)(memory[0][op2] & 0x00ff);
        memory[0][op3] = (short)(memory[0][op3] & 0x00ff);
        memory[0][op4] = (short)(memory[0][op4] & 0x00ff);
        PC = PC + 1;
        A = (short)(A & 0x00ff);
        B = (short)(B & 0x00ff);
        C = (short)(C & 0x00ff);
        D = (short)(D & 0x00ff);
        E = (short)(E & 0x00ff);
        F = (short)(F & 0x00ff);
        H = (short)(H & 0x00ff);
        L = (short)(L & 0x00ff);
        Ap = (short)(Ap & 0x00ff);
        Bp = (short)(Bp & 0x00ff);
        Cp = (short)(Cp & 0x00ff);
        Dp = (short)(Dp & 0x00ff);
        Ep = (short)(Ep & 0x00ff);
        Fp = (short)(Fp & 0x00ff);
        Hp = (short)(Hp & 0x00ff);
        Lp = (short)(Lp & 0x00ff);
        I = (short)(I & 0x00ff);
        R = (short)(R & 0x00ff);
        CY = (short)(CY & 0x00ff);
    }
}