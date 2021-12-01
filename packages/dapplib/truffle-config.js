require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot notice rifle rural unusual hundred light army genre'; 
let testAccounts = [
"0x863d9da247d069d31ef66e27cda90bb8cbbfadaaaae4d53e04f7c6473eddeb4f",
"0x892f15a258e292d26b52907ae5b91fc5c1873b7a70674923e4c98bcabd2dd6ba",
"0x09d8a78c89253eec77d921b05dc9edb4db46ae9ed8100d76e8ceb13931b61767",
"0xc53802062334189e403b58b2c2d35198bdaa168d9cac1f6b51a6a7cef6bd3065",
"0x1d541159ec7dc5e27a5fb47aa3a46755a0f0b1a5d27950375675b8080a89f192",
"0x090397cd35b69fa25554747dbd369f6455893aa995793b55e44a79f712ee1f21",
"0x8dbc16e866f4f2d27f8e77daf0ec909cf10064b5293e53976c40b5386821c223",
"0x0fc2a9fa46882f9168569cb68c2366eaff2687cffff58d973ccf687f7d2825b9",
"0xaacecc440e3630ca7a6c4ca4461f33d11a332af08ba11a554c9b04f44a3cf920",
"0x641d6f000095c9d1ac7d0bd8a14da267b5c1ed8b8ec4ec531505eaeaac35b9d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

