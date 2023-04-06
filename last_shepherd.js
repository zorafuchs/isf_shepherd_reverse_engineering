function des(key, message, encrypt, mode, initialisation_vector, padding) {
    var spfunction1 = new Array(0x1010400, 0, 0x10000, 0x1010404, 0x1010004, 0x10404, 0x4, 0x10000, 0x400, 0x1010400, 0x1010404, 0x400, 0x1000404, 0x1010004, 0x1000000, 0x4, 0x404, 0x1000400, 0x1000400, 0x10400, 0x10400, 0x1010000, 0x1010000, 0x1000404, 0x10004, 0x1000004, 0x1000004, 0x10004, 0, 0x404, 0x10404, 0x1000000, 0x10000, 0x1010404, 0x4, 0x1010000, 0x1010400, 0x1000000, 0x1000000, 0x400, 0x1010004, 0x10000, 0x10400, 0x1000004, 0x400, 0x4, 0x1000404, 0x10404, 0x1010404, 0x10004, 0x1010000, 0x1000404, 0x1000004, 0x404, 0x10404, 0x1010400, 0x404, 0x1000400, 0x1000400, 0, 0x10004, 0x10400, 0, 0x1010004);
    var spfunction2 = new Array(-0x7fef7fe0, -0x7fff8000, 0x8000, 0x108020, 0x100000, 0x20, -0x7fefffe0, -0x7fff7fe0, -0x7fffffe0, -0x7fef7fe0, -0x7fef8000, -0x80000000, -0x7fff8000, 0x100000, 0x20, -0x7fefffe0, 0x108000, 0x100020, -0x7fff7fe0, 0, -0x80000000, 0x8000, 0x108020, -0x7ff00000, 0x100020, -0x7fffffe0, 0, 0x108000, 0x8020, -0x7fef8000, -0x7ff00000, 0x8020, 0, 0x108020, -0x7fefffe0, 0x100000, -0x7fff7fe0, -0x7ff00000, -0x7fef8000, 0x8000, -0x7ff00000, -0x7fff8000, 0x20, -0x7fef7fe0, 0x108020, 0x20, 0x8000, -0x80000000, 0x8020, -0x7fef8000, 0x100000, -0x7fffffe0, 0x100020, -0x7fff7fe0, -0x7fffffe0, 0x100020, 0x108000, 0, -0x7fff8000, 0x8020, -0x80000000, -0x7fefffe0, -0x7fef7fe0, 0x108000);
    var spfunction3 = new Array(0x208, 0x8020200, 0, 0x8020008, 0x8000200, 0, 0x20208, 0x8000200, 0x20008, 0x8000008, 0x8000008, 0x20000, 0x8020208, 0x20008, 0x8020000, 0x208, 0x8000000, 0x8, 0x8020200, 0x200, 0x20200, 0x8020000, 0x8020008, 0x20208, 0x8000208, 0x20200, 0x20000, 0x8000208, 0x8, 0x8020208, 0x200, 0x8000000, 0x8020200, 0x8000000, 0x20008, 0x208, 0x20000, 0x8020200, 0x8000200, 0, 0x200, 0x20008, 0x8020208, 0x8000200, 0x8000008, 0x200, 0, 0x8020008, 0x8000208, 0x20000, 0x8000000, 0x8020208, 0x8, 0x20208, 0x20200, 0x8000008, 0x8020000, 0x8000208, 0x208, 0x8020000, 0x20208, 0x8, 0x8020008, 0x20200);
    var spfunction4 = new Array(0x802001, 0x2081, 0x2081, 0x80, 0x802080, 0x800081, 0x800001, 0x2001, 0, 0x802000, 0x802000, 0x802081, 0x81, 0, 0x800080, 0x800001, 0x1, 0x2000, 0x800000, 0x802001, 0x80, 0x800000, 0x2001, 0x2080, 0x800081, 0x1, 0x2080, 0x800080, 0x2000, 0x802080, 0x802081, 0x81, 0x800080, 0x800001, 0x802000, 0x802081, 0x81, 0, 0, 0x802000, 0x2080, 0x800080, 0x800081, 0x1, 0x802001, 0x2081, 0x2081, 0x80, 0x802081, 0x81, 0x1, 0x2000, 0x800001, 0x2001, 0x802080, 0x800081, 0x2001, 0x2080, 0x800000, 0x802001, 0x80, 0x800000, 0x2000, 0x802080);
    var spfunction5 = new Array(0x100, 0x2080100, 0x2080000, 0x42000100, 0x80000, 0x100, 0x40000000, 0x2080000, 0x40080100, 0x80000, 0x2000100, 0x40080100, 0x42000100, 0x42080000, 0x80100, 0x40000000, 0x2000000, 0x40080000, 0x40080000, 0, 0x40000100, 0x42080100, 0x42080100, 0x2000100, 0x42080000, 0x40000100, 0, 0x42000000, 0x2080100, 0x2000000, 0x42000000, 0x80100, 0x80000, 0x42000100, 0x100, 0x2000000, 0x40000000, 0x2080000, 0x42000100, 0x40080100, 0x2000100, 0x40000000, 0x42080000, 0x2080100, 0x40080100, 0x100, 0x2000000, 0x42080000, 0x42080100, 0x80100, 0x42000000, 0x42080100, 0x2080000, 0, 0x40080000, 0x42000000, 0x80100, 0x2000100, 0x40000100, 0x80000, 0, 0x40080000, 0x2080100, 0x40000100);
    var spfunction6 = new Array(0x20000010, 0x20400000, 0x4000, 0x20404010, 0x20400000, 0x10, 0x20404010, 0x400000, 0x20004000, 0x404010, 0x400000, 0x20000010, 0x400010, 0x20004000, 0x20000000, 0x4010, 0, 0x400010, 0x20004010, 0x4000, 0x404000, 0x20004010, 0x10, 0x20400010, 0x20400010, 0, 0x404010, 0x20404000, 0x4010, 0x404000, 0x20404000, 0x20000000, 0x20004000, 0x10, 0x20400010, 0x404000, 0x20404010, 0x400000, 0x4010, 0x20000010, 0x400000, 0x20004000, 0x20000000, 0x4010, 0x20000010, 0x20404010, 0x404000, 0x20400000, 0x404010, 0x20404000, 0, 0x20400010, 0x10, 0x4000, 0x20400000, 0x404010, 0x4000, 0x400010, 0x20004010, 0, 0x20404000, 0x20000000, 0x400010, 0x20004010);
    var spfunction7 = new Array(0x200000, 0x4200002, 0x4000802, 0, 0x800, 0x4000802, 0x200802, 0x4200800, 0x4200802, 0x200000, 0, 0x4000002, 0x2, 0x4000000, 0x4200002, 0x802, 0x4000800, 0x200802, 0x200002, 0x4000800, 0x4000002, 0x4200000, 0x4200800, 0x200002, 0x4200000, 0x800, 0x802, 0x4200802, 0x200800, 0x2, 0x4000000, 0x200800, 0x4000000, 0x200800, 0x200000, 0x4000802, 0x4000802, 0x4200002, 0x4200002, 0x2, 0x200002, 0x4000000, 0x4000800, 0x200000, 0x4200800, 0x802, 0x200802, 0x4200800, 0x802, 0x4000002, 0x4200802, 0x4200000, 0x200800, 0, 0x2, 0x4200802, 0, 0x200802, 0x4200000, 0x800, 0x4000002, 0x4000800, 0x800, 0x200002);
    var spfunction8 = new Array(0x10001040, 0x1000, 0x40000, 0x10041040, 0x10000000, 0x10001040, 0x40, 0x10000000, 0x40040, 0x10040000, 0x10041040, 0x41000, 0x10041000, 0x41040, 0x1000, 0x40, 0x10040000, 0x10000040, 0x10001000, 0x1040, 0x41000, 0x40040, 0x10040040, 0x10041000, 0x1040, 0, 0, 0x10040040, 0x10000040, 0x10001000, 0x41040, 0x40000, 0x41040, 0x40000, 0x10041000, 0x1000, 0x40, 0x10040040, 0x1000, 0x41040, 0x10001000, 0x40, 0x10000040, 0x10040000, 0x10040040, 0x10000000, 0x40000, 0x10001040, 0, 0x10041040, 0x40040, 0x10000040, 0x10040000, 0x10001000, 0x10001040, 0, 0x10041040, 0x41000, 0x41000, 0x1040, 0x1040, 0x40040, 0x10000000, 0x10041000);
    
    //create the 16 or 48 subkeys we will need
    // Returns an array with 96 elements (they seem to be integers)
    var created_keys = des_createKeys(key);
    var m = 0,
        i, j, temp, temp2, right1, right2, left, right, looping;
    var cbcleft, cbcleft2, cbcright, cbcright2;
    var endloop, loopinc;
    var message_length = message['length'];
    var chunk = 0;
    //set up the loops for single and triple des
    var iterations = created_keys['length'] == 32 ? 3 : 9;  //single or triple des
    if (iterations == 3) {
        looping = encrypt ? new Array(0, 32, 2) : new Array(30, -2, -2)
    } else {
        looping = encrypt ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2)
    };

    //pad the message depending on the padding parameter
    if (padding == 2) {
        message += '        ' //pad the message with spaces
    } else {
        if (padding == 1) {
            temp = 8 - (message_length % 8);
            message += String['fromCharCode'](temp, temp, temp, temp, temp, temp, temp, temp);
            if (temp == 8) {
                message_length += 8
            }; //PKCS7 padding
        } else {
            if (!padding) {
                message += '\x00\x00\x00\x00\x00\x00\x00\x00' //pad the message out with null bytes
            }
        }
    };
    result = '';
    tempresult = '';
    if (mode == 1) { // CBC Mode
        cbcleft = (initialisation_vector['charCodeAt'](m++) << 24) | (initialisation_vector['charCodeAt'](m++) << 16) | (initialisation_vector['charCodeAt'](m++) << 8) | initialisation_vector['charCodeAt'](m++);
        cbcright = (initialisation_vector['charCodeAt'](m++) << 24) | (initialisation_vector['charCodeAt'](m++) << 16) | (initialisation_vector['charCodeAt'](m++) << 8) | initialisation_vector['charCodeAt'](m++);
        m = 0;
    };

    //loop through each 64 bit chunk of the message
    while (m < message_length) {
        left = (message['charCodeAt'](m++) << 24) | (message['charCodeAt'](m++) << 16) | (message['charCodeAt'](m++) << 8) | message['charCodeAt'](m++);
        right = (message['charCodeAt'](m++) << 24) | (message['charCodeAt'](m++) << 16) | (message['charCodeAt'](m++) << 8) | message['charCodeAt'](m++);
        
        //for Cipher Block Chaining mode, xor the message with the previous result
        if (mode == 1) {
            if (encrypt) {
                left ^= cbcleft;
                right ^= cbcright;
            } else {
                cbcleft2 = cbcleft;
                cbcright2 = cbcright;
                cbcleft = left;
                cbcright = right;
            }
        };

        //first each 64 but chunk of the message must be permuted according to IP
        temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
        right ^= temp;
        left ^= (temp << 4);
        temp = ((left >>> 16) ^ right) & 0x0000ffff;
        right ^= temp;
        left ^= (temp << 16);
        temp = ((right >>> 2) ^ left) & 0x33333333;
        left ^= temp;
        right ^= (temp << 2);
        temp = ((right >>> 8) ^ left) & 0x00ff00ff;
        left ^= temp;
        right ^= (temp << 8);
        temp = ((left >>> 1) ^ right) & 0x55555555;
        right ^= temp;
        left ^= (temp << 1);
        left = ((left << 1) | (left >>> 31));
        right = ((right << 1) | (right >>> 31));

        //do this either 1 or 3 times for each chunk of the message
        for (j = 0; j < iterations; j += 3) {
            endloop = looping[j + 1];
            loopinc = looping[j + 2];

            //now go through and perform the encryption or decryption  
            for (i = looping[j]; i != endloop; i += loopinc) {
                right1 = right ^ created_keys[i];
                right2 = ((right >>> 4) | (right << 28)) ^ created_keys[i + 1];
                temp = left;
                left = right;
                right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f] | spfunction6[(right1 >>> 8) & 0x3f] | spfunction8[right1 & 0x3f] | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f] | spfunction5[(right2 >>> 8) & 0x3f] | spfunction7[right2 & 0x3f]);
            };
            temp = left;
            left = right;
            right = temp;
        };

        //now perform IP-1, which is IP in the opposite direction
        left = ((left >>> 1) | (left << 31));
        right = ((right >>> 1) | (right << 31));
        temp = ((left >>> 1) ^ right) & 0x55555555;
        right ^= temp;
        left ^= (temp << 1);
        temp = ((right >>> 8) ^ left) & 0x00ff00ff;
        left ^= temp;
        right ^= (temp << 8);
        temp = ((right >>> 2) ^ left) & 0x33333333;
        left ^= temp;
        right ^= (temp << 2);
        temp = ((left >>> 16) ^ right) & 0x0000ffff;
        right ^= temp;
        left ^= (temp << 16);
        temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
        right ^= temp;
        left ^= (temp << 4);

        //for Cipher Block Chaining mode, xor the message with the previous result
        if (mode == 1) {
            if (encrypt) {
                cbcleft = left;
                cbcright = right;
            } else {
                left ^= cbcleft2;
                right ^= cbcright2;
            }
        };
        tempresult += String['fromCharCode']((left >>> 24), ((left >>> 16) & 0xff), ((left >>> 8) & 0xff), (left & 0xff), (right >>> 24), ((right >>> 16) & 0xff), ((right >>> 8) & 0xff), (right & 0xff));
        chunk += 8;
        if (chunk == 512) {
            result += tempresult;
            tempresult = '';
            chunk = 0;
        }; // for every 8 characters, or 64 bits in the message
    };
    result += tempresult;
    result = result['replace'](/\0*$/g, '');
    return result;
}

//des_createKeys
//this takes as input a 64 bit key (even though only 56 bits are used)
//as an array of 2 integers, and returns 16 48 bit keys
function des_createKeys(key) {
    pc2bytes0 = new Array(0, 0x4, 0x20000000, 0x20000004, 0x10000, 0x10004, 0x20010000, 0x20010004, 0x200, 0x204, 0x20000200, 0x20000204, 0x10200, 0x10204, 0x20010200, 0x20010204);
    pc2bytes1 = new Array(0, 0x1, 0x100000, 0x100001, 0x4000000, 0x4000001, 0x4100000, 0x4100001, 0x100, 0x101, 0x100100, 0x100101, 0x4000100, 0x4000101, 0x4100100, 0x4100101);
    pc2bytes2 = new Array(0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808, 0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808);
    pc2bytes3 = new Array(0, 0x200000, 0x8000000, 0x8200000, 0x2000, 0x202000, 0x8002000, 0x8202000, 0x20000, 0x220000, 0x8020000, 0x8220000, 0x22000, 0x222000, 0x8022000, 0x8222000);
    pc2bytes4 = new Array(0, 0x40000, 0x10, 0x40010, 0, 0x40000, 0x10, 0x40010, 0x1000, 0x41000, 0x1010, 0x41010, 0x1000, 0x41000, 0x1010, 0x41010);
    pc2bytes5 = new Array(0, 0x400, 0x20, 0x420, 0, 0x400, 0x20, 0x420, 0x2000000, 0x2000400, 0x2000020, 0x2000420, 0x2000000, 0x2000400, 0x2000020, 0x2000420);
    pc2bytes6 = new Array(0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002, 0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002);
    pc2bytes7 = new Array(0, 0x10000, 0x800, 0x10800, 0x20000000, 0x20010000, 0x20000800, 0x20010800, 0x20000, 0x30000, 0x20800, 0x30800, 0x20020000, 0x20030000, 0x20020800, 0x20030800);
    pc2bytes8 = new Array(0, 0x40000, 0, 0x40000, 0x2, 0x40002, 0x2, 0x40002, 0x2000000, 0x2040000, 0x2000000, 0x2040000, 0x2000002, 0x2040002, 0x2000002, 0x2040002);
    pc2bytes9 = new Array(0, 0x10000000, 0x8, 0x10000008, 0, 0x10000000, 0x8, 0x10000008, 0x400, 0x10000400, 0x408, 0x10000408, 0x400, 0x10000400, 0x408, 0x10000408);
    pc2bytes10 = new Array(0, 0x20, 0, 0x20, 0x100000, 0x100020, 0x100000, 0x100020, 0x2000, 0x2020, 0x2000, 0x2020, 0x102000, 0x102020, 0x102000, 0x102020);
    pc2bytes11 = new Array(0, 0x1000000, 0x200, 0x1000200, 0x200000, 0x1200000, 0x200200, 0x1200200, 0x4000000, 0x5000000, 0x4000200, 0x5000200, 0x4200000, 0x5200000, 0x4200200, 0x5200200);
    pc2bytes12 = new Array(0, 0x1000, 0x8000000, 0x8001000, 0x80000, 0x81000, 0x8080000, 0x8081000, 0x10, 0x1010, 0x8000010, 0x8001010, 0x80010, 0x81010, 0x8080010, 0x8081010);
    pc2bytes13 = new Array(0, 0x4, 0x100, 0x104, 0, 0x4, 0x100, 0x104, 0x1, 0x5, 0x101, 0x105, 0x1, 0x5, 0x101, 0x105);
    
     //how many iterations (1 for des, 3 for triple des)
    var iterations = key['length'] > 8 ? 3 : 1;
    //stores the return keys
    var keys = new Array(32 * iterations);
    //now define the left shifts which need to be done
    var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
    var lefttemp, righttemp, m = 0,
        n = 0,
        temp;
    for (var j = 0; j < iterations; j++) { //either 1 or 3 iterations
        
        left = (key['charCodeAt'](m++) << 24) | (key['charCodeAt'](m++) << 16) | (key['charCodeAt'](m++) << 8) | key['charCodeAt'](m++);
        right = (key['charCodeAt'](m++) << 24) | (key['charCodeAt'](m++) << 16) | (key['charCodeAt'](m++) << 8) | key['charCodeAt'](m++);
        temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
        right ^= temp;
        left ^= (temp << 4);
        temp = ((right >>> -16) ^ left) & 0x0000ffff;
        left ^= temp;
        right ^= (temp << -16);
        temp = ((left >>> 2) ^ right) & 0x33333333;
        right ^= temp;
        left ^= (temp << 2);
        temp = ((right >>> -16) ^ left) & 0x0000ffff;
        left ^= temp;
        right ^= (temp << -16);
        temp = ((left >>> 1) ^ right) & 0x55555555;
        right ^= temp;
        left ^= (temp << 1);
        temp = ((right >>> 8) ^ left) & 0x00ff00ff;
        left ^= temp;
        right ^= (temp << 8);
        temp = ((left >>> 1) ^ right) & 0x55555555;
        right ^= temp;
        left ^= (temp << 1);

        //the right side needs to be shifted and to get the last four bits of the left side
        temp = (left << 8) | ((right >>> 20) & 0x000000f0);
        //left needs to be put upside down
        left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
        right = temp;
        //now go through and perform these shifts on the left and right keys
        for (i = 0; i < shifts['length']; i++) {
            //shift the keys either one or two bits to the left
            if (shifts[i]) {
                left = (left << 2) | (left >>> 26);
                right = (right << 2) | (right >>> 26);
            } else {
                left = (left << 1) | (left >>> 27);
                right = (right << 1) | (right >>> 27);
            };
            left &= -0xf;
            right &= -0xf;
            //now apply PC-2, in such a way that E is easier when encrypting or decrypting
            //this conversion will look like PC-2 except only the last 6 bits of each byte are used
            //rather than 48 consecutive bits and the order of lines will be according to 
            //how the S selection functions will be applied: S2, S4, S6, S8, S1, S3, S5, S7
            lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf] | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf] | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf] | pc2bytes6[(left >>> 4) & 0xf];
            righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf] | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf] | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf] | pc2bytes13[(right >>> 4) & 0xf];
            temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
            keys[n++] = lefttemp ^ temp;
            keys[n++] = righttemp ^ (temp << 16);
        };
    };
    return keys;
}

/**
 * Converts a hexadecimal string into a utf8 string. 
 * Removes hexadecimal prefixes from string.
 * @param {string} hex_string 
 * @returns The string built based uppon the hexadecimal string
 */
function chars_from_hex(hex_string) {
    var chars_array = '';
    hex_string = hex_string['replace'](/^(0x)?/g, ''); // does nothing, because there is no '0x' in the string
    hex_string = hex_string['replace'](/[^A-Fa-f0-9]/g, ''); // tried in broeser, it does nothing as well
    hex_string = hex_string['split'](''); // probably does nothing, as it generats a char-array, which should be the same as a string
    for (var counter = 0; counter < hex_string['length']; counter += 2) { // Iterate over every second character in hex_string
        // parses hexadecimal string into a normal "readable" string. Every two hex codes = 1 char.
        chars_array += String['fromCharCode'](parseInt(hex_string[counter] + '' + hex_string[counter + 1], 16 /* Hexadecimal base */))
    };
    return chars_array;
}

function hex_from_chars(input_string) {
    var empty_string = '';
    var hex_result = ''; // Variable for the result
    var charcacter_set = '0123456789abcdef'; // chacracter set for the hex encoding
    charcacter_set = charcacter_set['split'](''); // Does absolutely nothing... ???
    var i, _0x655fx28;
    var input_words_list = input_string['split']('');
    for (var i = 0; i < input_words_list['length']; i++) {
        if (i > 0) {
            hex_result += empty_string
        };
        if (!empty_string && i % 32 == 0 && i > 0) {
            hex_result += '\x0A'
        };
        _0x655fx28 = input_string['charCodeAt'](i);
        hex_result += charcacter_set[(_0x655fx28 >> 4) & 0xf] + charcacter_set[_0x655fx28 & 0xf];
    };
    return hex_result;
}

// Encrypted Coupon codes
var valid_incrypted_coupon_codes = ['048ccd1fb6067ee0e304dc2025b96f4b', '296b66f3e332ab4c27501ca175c3b34d', '048ccd1fb6067ee0d4ca5da7e899def6', 'bad5ede188bd1df1db8b06031867621a', '048ccd1fb6067ee0d6bd98bdb9a1a9b8a3f09b75107ca0da', 'f316e31f45811c72c4e04380eac44e13', '47e046fb250a0b95cade3eff4ebda29c93157b2fc01c2430', '296b66f3e332ab4c27501ca175c3b34d'];

function checkCoupon(user_inputed_coupon) {

    var encrypted_user_input = hex_from_chars(des(chars_from_hex('0ba950d08830c8079bded71b852934453db8f4ffff1f5842'), user_inputed_coupon, 1, chars_from_hex('821fd38b9a7c0247') ? 1 : 0, chars_from_hex('821fd38b9a7c0247')));
    var is_match = valid_incrypted_coupon_codes['indexOf'](encrypted_user_input);
    if (is_match < 0) {
        return false
    } else {
        return true
    };
}

/* -----------------------------------------------------------------------
██╗░░░██╗███╗░░██╗██╗████████╗  ████████╗███████╗░██████╗████████╗░██████╗
██║░░░██║████╗░██║██║╚══██╔══╝  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
██║░░░██║██╔██╗██║██║░░░██║░░░  ░░░██║░░░█████╗░░╚█████╗░░░░██║░░░╚█████╗░
██║░░░██║██║╚████║██║░░░██║░░░  ░░░██║░░░██╔══╝░░░╚═══██╗░░░██║░░░░╚═══██╗
╚██████╔╝██║░╚███║██║░░░██║░░░  ░░░██║░░░███████╗██████╔╝░░░██║░░░██████╔╝
░╚═════╝░╚═╝░░╚══╝╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚══════╝╚═════╝░░░░╚═╝░░░╚═════╝░
----------------------------------------------------------------------- */

// ARRANGE
var valid_example_coupon_codes = 
[
    "RageMemeForFree",
    "PleaseTakeARage"
];

var random_invalid_codes =
[
    "7293186948",
    "0087656175",
    "7724126523",
    "0375719233",
    "6625777020",
    "fQcZg1C6t98QYQN",
    "CnCNoDM8a6ULWbU",
    "8gUiUexcq3zdZqx",
    "wcYooclAdeAu8SN",
    "ruKGmk7Le3mMJDT",
    "8CYQ2ZiNeBFCn2R",
    "rdDyrISuNzNbwqc",
    "Xm65XZp2M5J0DER",
    "6mvwDCYvEJNRWh6",
    "86ardeNOisHWA15"
]

// ASSERT

for (let index = 0; index < valid_example_coupon_codes.length; index++) {
    const element = valid_example_coupon_codes[index];
    if (checkCoupon(element) != true)
    {
        console.log('dont commit');
    }
}

for (let index = 0; index < random_invalid_codes.length; index++) {
    const element = random_invalid_codes[index];
    if (checkCoupon(element) == true)
    {
        console.log('dont commit');
    }
}

// Test functions
//================

// chars_from_hex

if (chars_from_hex('0ba950d08830c8079bded71b852934453db8f4ffff1f5842') == "©PÐ0ÈÞ×)4E=¸ôÿÿXB") {
    console.log('yeyy, chars_from_hex still works as expected!')
} else {
    console.log("sorry you kinda messed up, please dont commit o.o")
}

if (chars_from_hex('821fd38b9a7c0247') == "Ó|G") {
    console.log('yeyy, chars_from_hex still works as expected!')
} else {
    console.log("sorry you kinda messed up, please dont commit o.o")
}

// hex_from_chars

if (hex_from_chars("©PÐ0ÈÞ×)4E=¸ôÿÿXB") == "0ba950d08830c8079bded71b852934453db8f4ffff1f5842") {
    console.log('yeyy, hex_from_chars still works as expected!')
} else {
    console.log("sorry you kinda messed up, please dont commit o.o")
}

// des

if (des("©PÐ0ÈÞ×)4E=¸ôÿÿXB", "RageMemeForFree", 1, 1, "Ó|G") == ")kfóã2«L'P¡uÃ³M") {
    console.log('yeyy, des still works as expected!')
} else {
    console.log("sorry you kinda messed up, please dont commit o.o")
}

// des_createKeys

var expected_result_key_array = [604113932, 34476549, 838928424, 420024626, 1023410969, 36831793, 35274032, 369560064, 201921570, 219152436,
                                805699604, 270803744, 169153556, 170012683, 304748553, 84935690, 135004700, 271518744, 253956358, 67112450,
                                270665251 ,674562306 ,100999685 ,940181793 ,420489234 ,68954119 ,20125699 ,285409564 ,1006903296 ,755046161,
                                18549030, 557061121, 605162301, 822162699, 70458893, 353122835, 956378895, 688134682, 805774639, 34287382,
                                353903907, 235021103, 2633265, 84358445, 605370392, 606092349, 302258970, 53229084, 839653677, 403973919,
                                134556965, 303171131, 406466101, 337647158, 170014233, 688007734, 537278227, 741882380, 51393582, 436747532,
                                154927374, 17904943, 202381844, 538384151, 638467369, 155138829, 588594234, 220143417, 891624734, 389093173,
                                1044127548, 839328531, 204414757, 656292411, 824912959, 1009528378, 455423255, 707471166, 387855921, 607856399,
                                69080631, 423312683, 791951391, 488906027, 708000543, 590685463, 910113573, 991431455, 956837415, 991829559,
                                691743775, 371923766, 521811739, 790704919, 387849011, 623786813]

var result_key_array = des_createKeys("©PÐ0ÈÞ×)4E=¸ôÿÿXB")

var test_result_for_createKeys = (expected_result_key_array.length == result_key_array.length) && expected_result_key_array.every(function(element, index) {
    return element === result_key_array[index]; 
});

if (test_result_for_createKeys) {
    console.log('yeyy, des_createKeys still works as expected!')
} else {
    console.log("sorry you kinda messed up, please dont commit o.o")
}

// Encrypted Coupon Codes Matches

// "RageMemeForFree" => '296b66f3e332ab4c27501ca175c3b34d' index: 1 und 7
hex_from_chars(des("©PÐ0ÈÞ×)4E=¸ôÿÿXB", "RageMemeForFree", 1, 1, "Ó|G"))


// "RageMemeForFree" => '048ccd1fb6067ee0e304dc2025b96f4b' index: 0
hex_from_chars(des("©PÐ0ÈÞ×)4E=¸ôÿÿXB", "PleaseTakeARage", 1, 1, "Ó|G"))


if (des("©PÐ0ÈÞ×)4E=¸ôÿÿXB", ")kfóã2«L'P¡uÃ³M", 0, 1, "Ó|G") == "RageMemeForFree") {
    console.log('yeyy, decrypted!!!')
} else {
    console.log("sorry...")
}

// Prints codes to console
for (let index = 0; index < valid_incrypted_coupon_codes.length; index++) {
    const element = valid_incrypted_coupon_codes[index];
    console.log(des("©PÐ0ÈÞ×)4E=¸ôÿÿXB", chars_from_hex(element), 0, 1, "Ó|G"));
}
