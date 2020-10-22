require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stool deny oval minor imitate private equal gather'; 
let testAccounts = [
"0x19ee6b443426de7ccf43ac0c2b04fabc06f18d556977b46b4d6586e2d20ec4ea",
"0xa489c3e3a9c451aeb3a9a8d231fdd00712929bd411eebcbca785576dfe2ea2ca",
"0x857ff24506572fefb6c4ae79f29dd086259b888e1a2db560be2697279f2750e0",
"0xa6c9d73288df532441c5d9d37fe404279604e306accf976eb11b9b8be39ef3d8",
"0xc102ccaf942139b9dfa697e691b9b7157bbae21a59750a422f2bd1cfe95d1a48",
"0x5ce95e16c36936f5b797a942bbf1ecdeab2f253c1f929156d5ecf7b3ad2d7a53",
"0xe586869ec0cae93ee3f51aa98f13d7ba48662b05ca85e37a7c26fe423cbdf067",
"0x04fd038ce5a63e3a132a21f54b8a001a3b2cc24761e38861b5ca26e167a16815",
"0xb0b16dc02f39447cff54ff8e7a98af86dcd2e4bf6b4947e6b87c841218e1ef3b",
"0x46056b4216e0699e6eff9daa1792d4a7eb13a7068758e9add7ecf6120a55ef81"
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
            version: '^0.5.11'
        }
    }
};
