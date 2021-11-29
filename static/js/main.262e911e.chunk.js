(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
    [1],
    {
        121: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
            );
        },
        154: function (e) {
            e.exports = JSON.parse(
                '{"name":"TYME EXCHANGE Default List","timestamp":"2021-03-17T09:56:23Z","version":{"major":2,"minor":1,"patch":0},"tags":{},"logoURI":"https://exchange.pancakeswap.finance/images/pancakeswap.png","keywords":["pancake","default"],"tokens":[{"name":"TYME TOKEN","symbol":"TYME","address":"0xAe81B57BFaf5fB86908Bfb3a6395fd4245Ff0DfB","chainId":56,"decimals":9,"logoURI":"https://tyme.exchange/images/coins/0xAe81B57BFaf5fB86908Bfb3a6395fd4245Ff0DfB.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"USDT Token","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0x55d398326f99059ff775485246999027b3197955.png"},{"name":"ETH Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"},{"name":"DAI Token","symbol":"DAI","address":"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":9,"logoURI":"https://tyme.exchange/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"},{"name":"Safemoon Token","symbol":"SAFEMOON","address":"0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3","chainId":56,"decimals":18,"logoURI":"https://tyme.exchange/images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png"}]}'
            );
        },
        248: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        249: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        279: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        280: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        281: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
            );
        },
        392: function (e, t) {},
        492: function (e, t) {},
        512: function (e, t, n) {
            "use strict";
            n.r(t);
            var c,
                ye = n(0),
                p = n.n(ye),
                r = n(79),
                a = n.n(r),
                Oe = n(3),
                i = n(9),
                xe = n(4),
                o = Object(xe.createGlobalStyle)(Object(i.a)(["\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]), function (e) {
                    return e.theme.colors.background;
                }),
                s = n(7),
                ve = n.n(s),
                ge = n(31),
                Ce = n(11),
                h = n(43),
                d = n(44),
                b = n(270),
                we = n(21),
                j = n(56),
                f = n(125),
                ke = n(17),
                l = n(183),
                u = n(126),
                m = n(127),
                y = n(272),
                O = n(144),
                x = n(12),
                v = n(128),
                g = n(10),
                C = n(14),
                w = n(15),
                k = n(129),
                T = n(84),
                I = n(20),
                E = (function (e) {
                    Object(C.a)(a, e);
                    var r = Object(w.a)(a);
                    function a(e, t, n) {
                        return Object(g.a)(this, a), ((e = r.call(this, e)).code = t), (e.data = n), e;
                    }
                    return a;
                })(Object(k.a)(Error)),
                N = function e(t, n, r) {
                    var a,
                        p = this;
                    Object(g.a)(this, e),
                        (this.isMetaMask = !1),
                        (this.chainId = void 0),
                        (this.url = void 0),
                        (this.host = void 0),
                        (this.path = void 0),
                        (this.batchWaitTimeMs = void 0),
                        (this.nextId = 1),
                        (this.batchTimeoutId = null),
                        (this.batch = []),
                        (this.clearBatch = Object(ge.a)(
                            ve.a.mark(function e() {
                                var t, n, r, a, i, c, o, s, l, u, d, b;
                                return ve.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.info("Clearing batch", p.batch),
                                                        (t = p.batch),
                                                        (p.batch = []),
                                                        (p.batchTimeoutId = null),
                                                        (e.prev = 4),
                                                        (e.next = 7),
                                                        fetch(p.url, {
                                                            method: "POST",
                                                            headers: { "content-type": "application/json", accept: "application/json" },
                                                            body: JSON.stringify(
                                                                t.map(function (e) {
                                                                    return e.request;
                                                                })
                                                            ),
                                                        })
                                                    );
                                                case 7:
                                                    (n = e.sent), (e.next = 14);
                                                    break;
                                                case 10:
                                                    return (
                                                        (e.prev = 10),
                                                        (e.t0 = e.catch(4)),
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to send batch call"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 14:
                                                    if (n.ok) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return (
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new E("".concat(n.status, ": ").concat(n.statusText), -32e3));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 17:
                                                    return (e.prev = 17), (e.next = 20), n.json();
                                                case 20:
                                                    (r = e.sent), (e.next = 27);
                                                    break;
                                                case 23:
                                                    return (
                                                        (e.prev = 23),
                                                        (e.t1 = e.catch(17)),
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to parse JSON response"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 27:
                                                    (a = t.reduce(function (e, t) {
                                                        return (e[t.request.id] = t), e;
                                                    }, {})),
                                                        (i = Object(v.a)(r));
                                                    try {
                                                        for (i.s(); !(s = i.n()).done; )
                                                            (c = s.value),
                                                                (l = a[c.id]),
                                                                (o = l.resolve),
                                                                (s = l.reject),
                                                                (l = l.request.method),
                                                                o &&
                                                                    ("error" in c
                                                                        ? s(
                                                                              new E(
                                                                                  null == c || null === (u = c.error) || void 0 === u ? void 0 : u.message,
                                                                                  null == c || null === (d = c.error) || void 0 === d ? void 0 : d.code,
                                                                                  null == c || null === (b = c.error) || void 0 === b ? void 0 : b.data
                                                                              )
                                                                          )
                                                                        : "result" in c
                                                                        ? o(c.result)
                                                                        : s(new E("Received unexpected JSON-RPC response to ".concat(l, " request."), -32e3, c)));
                                                    } catch (e) {
                                                        i.e(e);
                                                    } finally {
                                                        i.f();
                                                    }
                                                case 30:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [
                                        [4, 10],
                                        [17, 23],
                                    ]
                                );
                            })
                        )),
                        (this.sendAsync = function (t, n) {
                            p.request(t.method, t.params)
                                .then(function (e) {
                                    return n(null, { jsonrpc: "2.0", id: t.id, result: e });
                                })
                                .catch(function (e) {
                                    return n(e, null);
                                });
                        }),
                        (this.request =
                            ((a = Object(ge.a)(
                                ve.a.mark(function e(n, r) {
                                    var t, a;
                                    return ve.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("string" != typeof n) return e.abrupt("return", p.request(n.method, n.params));
                                                    e.next = 2;
                                                    break;
                                                case 2:
                                                    if ("eth_chainId" === n) return e.abrupt("return", "0x".concat(p.chainId.toString(16)));
                                                    e.next = 4;
                                                    break;
                                                case 4:
                                                    return (
                                                        (a = new Promise(function (e, t) {
                                                            p.batch.push({ request: { jsonrpc: "2.0", id: p.nextId++, method: n, params: r }, resolve: e, reject: t });
                                                        })),
                                                        (p.batchTimeoutId = null !== (t = p.batchTimeoutId) && void 0 !== t ? t : setTimeout(p.clearBatch, p.batchWaitTimeMs)),
                                                        e.abrupt("return", a)
                                                    );
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            function (e, t) {
                                return a.apply(this, arguments);
                            })),
                        (this.chainId = t),
                        (this.url = n);
                    n = new URL(n);
                    (this.host = n.host), (this.path = n.pathname), (this.batchWaitTimeMs = null != r ? r : 50);
                },
                S = (function (e) {
                    Object(C.a)(c, e);
                    var t,
                        n,
                        r,
                        a,
                        i = Object(w.a)(c);
                    function c(e) {
                        var n = e.urls,
                            t = e.defaultChainId;
                        return (
                            Object(g.a)(this, c),
                            Object(I.a)(t || 1 === Object.keys(n).length, "defaultChainId is a required argument with >1 url"),
                            ((e = i.call(this, {
                                supportedChainIds: Object.keys(n).map(function (e) {
                                    return Number(e);
                                }),
                            })).providers = void 0),
                            (e.currentChainId = void 0),
                            (e.currentChainId = t || Number(Object.keys(n)[0])),
                            (e.providers = Object.keys(n).reduce(function (e, t) {
                                return (e[Number(t)] = new N(Number(t), n[Number(t)])), e;
                            }, {})),
                            e
                        );
                    }
                    return (
                        Object(x.a)(c, [
                            {
                                key: "provider",
                                get: function () {
                                    return this.providers[this.currentChainId];
                                },
                            },
                            {
                                key: "activate",
                                value:
                                    ((a = Object(ge.a)(
                                        ve.a.mark(function e() {
                                            return ve.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", { provider: this.providers[this.currentChainId], chainId: this.currentChainId, account: null });
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return a.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "getProvider",
                                value:
                                    ((r = Object(ge.a)(
                                        ve.a.mark(function e() {
                                            return ve.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.providers[this.currentChainId]);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return r.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "getChainId",
                                value:
                                    ((n = Object(ge.a)(
                                        ve.a.mark(function e() {
                                            return ve.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.currentChainId);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return n.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "getAccount",
                                value:
                                    ((t = Object(ge.a)(
                                        ve.a.mark(function e() {
                                            return ve.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.abrupt("return", null);
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )),
                                    function () {
                                        return t.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "deactivate",
                                value: function () {
                                    return null;
                                },
                            },
                        ]),
                        c
                    );
                })(T.AbstractConnector),
                R = "https://bsc-dataseed1.defibit.io",
                U = parseInt("56"),
                A = new S({ urls: Object(ke.a)({}, U, R) }),
                P = new u.a({ supportedChainIds: [56, 97] }),
                B = new O.BscConnector({ supportedChainIds: [56] }),
                M = new m.b({ rpc: Object(ke.a)({}, U, R), bridge: "https://pancakeswap.bridge.walletconnect.org", qrcode: !0, pollingInterval: 15e3 }),
                L =
                    (new y.a({
                        url: R,
                        appName: "Uniswap",
                        appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
                    }),
                    (me = {}),
                    Object(ke.a)(me, Oe.l.Injected, P),
                    Object(ke.a)(me, Oe.l.WalletConnect, M),
                    Object(ke.a)(me, Oe.l.BSC, B),
                    me),
                Z = n(27),
                Te = n(13),
                Ie = n(6),
                Ee = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                D = Ie.a.MAINNET,
                t = new Ie.j(D, "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", 18, "DAI", "Dai Stablecoin"),
                r = new Ie.j(D, "0xe9e7cea3dedca5984780bafc599bd69add087d56", 18, "BUSD", "Binance USD"),
                s = new Ie.j(D, "0x55d398326f99059ff775485246999027b3197955", 18, "USDT", "Tether USD"),
                T = new Ie.j(D, "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 18, "ETH", "Ethereum"),
                S = new Ie.j(D, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"),
                R = ((y = {}), Object(ke.a)(y, Ie.a.MAINNET, [Ie.n[Ie.a.MAINNET]]), Object(ke.a)(y, Ie.a.BSCTESTNET, [Ie.n[Ie.a.BSCTESTNET]]), y),
                _ = Object(Te.a)(Object(Te.a)({}, R), {}, Object(ke.a)({}, D, [].concat(Object(Z.a)(R[D]), [t, r, s, T]))),
                Y = Object(ke.a)({}, D, {}),
                z = Object(Te.a)(Object(Te.a)({}, R), {}, Object(ke.a)({}, D, [].concat(Object(Z.a)(R[D]), [t, r, s]))),
                F = Object(Te.a)(Object(Te.a)({}, R), {}, Object(ke.a)({}, D, [].concat(Object(Z.a)(R[D]), [t, r, s]))),
                q = Object(ke.a)({}, D, [
                    [r, S],
                    [s, r],
                    [s, S],
                    [t, s],
                    [t, S],
                ]),
                V = "NETWORK",
                Ne = 80,
                W = 1200,
                H = new Ie.g(Ie.e.BigInt(1), Ie.e.BigInt(1e4)),
                Q = Ie.e.BigInt(1e4),
                G = new Ie.g(Ie.e.BigInt(100), Q),
                K = new Ie.g(Ie.e.BigInt(300), Q),
                Se = new Ie.g(Ie.e.BigInt(500), Q),
                Re = new Ie.g(Ie.e.BigInt(1e3), Q),
                X = new Ie.g(Ie.e.BigInt(1500), Q),
                J = Ie.e.exponentiate(Ie.e.BigInt(10), Ie.e.BigInt(16));
            function Ue() {
                var e = Object(j.d)(),
                    t = Object(j.d)(V);
                return e.active ? e : t;
            }
            var $ = n(22),
                ee = Object($.b)("app/updateBlockNumber"),
                te = Object($.b)("app/toggleWalletModal"),
                ne = Object($.b)("app/toggleSettingsMenu"),
                re = Object($.b)("app/addPopup"),
                ae = Object($.b)("app/removePopup");
            function ie() {
                var t = Ue().chainId;
                return Object(we.d)(function (e) {
                    return e.application.blockNumber[null != t ? t : -1];
                });
            }
            function ce() {
                var t = Object(we.c)();
                return Object(ye.useCallback)(
                    function (e) {
                        t(ae({ key: e }));
                    },
                    [t]
                );
            }
            var M = xe.default.div(Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"])),
                oe = Object(xe.default)(M)(Object(i.a)(["\n  width: 100%;\n  align-items: center;\n"])),
                Ae = xe.default.div(
                    Object(i.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]),
                    function (e) {
                        e = e.gap;
                        return ("sm" === e ? "8px" : "md" === e && "12px") || ("lg" === e && "24px") || e;
                    },
                    function (e) {
                        e = e.justify;
                        return e && e;
                    }
                ),
                se = M,
                B = n(527),
                le = n(96),
                ue = n(68),
                de = { pending: Object($.b)("lists/fetchTokenList/pending"), fulfilled: Object($.b)("lists/fetchTokenList/fulfilled"), rejected: Object($.b)("lists/fetchTokenList/rejected") },
                be = Object($.b)("lists/acceptListUpdate"),
                pe = Object($.b)("lists/addList"),
                je = Object($.b)("lists/removeList"),
                fe = Object($.b)("lists/selectList");
            function he(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
            }
            Object($.b)("lists/rejectVersionUpdate");
            var me = n(275),
                y = Object(xe.default)(me.Box)(
                    Object(i.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]),
                    function (e) {
                        return e.align || "center";
                    },
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.border;
                    },
                    function (e) {
                        return e.borderRadius;
                    }
                ),
                Pe = Object(xe.default)(y)(Object(i.a)(["\n  justify-content: space-between;\n"])),
                Be = xe.default.div(Object(i.a)(["\n  display: flex;\n  align-items: flex-end;\n"])),
                Me = Object(xe.default)(y)(
                    Object(i.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]),
                    function (e) {
                        e = e.gap;
                        return e && "-".concat(e);
                    },
                    function (e) {
                        e = e.justify;
                        return e && e;
                    },
                    function (e) {
                        return e.gap;
                    }
                ),
                Le = Object(xe.default)(y)(Object(i.a)(["\n  width: fit-content;\n  margin: ", ";\n"]), function (e) {
                    e = e.gap;
                    return e && "-".concat(e);
                }),
                De = y,
                _e = n(1);
            function Ye(e) {
                var t = e.popKey,
                    n = e.listUrl,
                    r = e.oldList,
                    a = e.newList,
                    i = e.auto,
                    c = ce(),
                    o = Object(ye.useCallback)(
                        function () {
                            return c(t);
                        },
                        [t, c]
                    ),
                    s = Object(we.c)(),
                    l = Object(ye.useCallback)(
                        function () {
                            i || (s(be(n)), o());
                        },
                        [i, s, n, o]
                    ),
                    e = Object(ye.useMemo)(
                        function () {
                            return Object(ue.b)(r.tokens, a.tokens);
                        },
                        [a.tokens, r.tokens]
                    ),
                    u = e.added,
                    d = e.changed,
                    b = e.removed,
                    e = Object(ye.useMemo)(
                        function () {
                            return Object.keys(d).reduce(function (e, t) {
                                return e + Object.keys(d[t]).length;
                            }, 0);
                        },
                        [d]
                    );
                return Object(_e.jsx)(Me, {
                    children: Object(_e.jsx)(Ae, {
                        style: { flex: "1" },
                        gap: "8px",
                        children: i
                            ? Object(_e.jsxs)(Oe.y, { children: ['The token list "', r.name, '" has been updated to', " ", Object(_e.jsx)("strong", { children: he(a.version) }), "."] })
                            : Object(_e.jsxs)(_e.Fragment, {
                                  children: [
                                      Object(_e.jsxs)("div", {
                                          children: [
                                              Object(_e.jsxs)(Oe.y, { fontSize: "14px", children: ['An update is available for the token list "', r.name, '" (', he(r.version), " to ", he(a.version), ")."] }),
                                              Object(_e.jsxs)("ul", {
                                                  children: [
                                                      0 < u.length
                                                          ? Object(_e.jsxs)("li", {
                                                                children: [
                                                                    u.map(function (e, t) {
                                                                        return Object(_e.jsxs)(
                                                                            p.a.Fragment,
                                                                            { children: [Object(_e.jsx)("strong", { title: e.address, children: e.symbol }), t === u.length - 1 ? null : ", "] },
                                                                            "".concat(e.chainId, "-").concat(e.address)
                                                                        );
                                                                    }),
                                                                    " ",
                                                                    "added",
                                                                ],
                                                            })
                                                          : null,
                                                      0 < b.length
                                                          ? Object(_e.jsxs)("li", {
                                                                children: [
                                                                    b.map(function (e, t) {
                                                                        return Object(_e.jsxs)(
                                                                            p.a.Fragment,
                                                                            { children: [Object(_e.jsx)("strong", { title: e.address, children: e.symbol }), t === b.length - 1 ? null : ", "] },
                                                                            "".concat(e.chainId, "-").concat(e.address)
                                                                        );
                                                                    }),
                                                                    " ",
                                                                    "removed",
                                                                ],
                                                            })
                                                          : null,
                                                      0 < e ? Object(_e.jsxs)("li", { children: [e, " tokens updated"] }) : null,
                                                  ],
                                              }),
                                          ],
                                      }),
                                      Object(_e.jsxs)(Me, {
                                          children: [
                                              Object(_e.jsx)("div", { style: { flexGrow: 1, marginRight: 12 }, children: Object(_e.jsx)(Oe.c, { onClick: l, children: "Accept update" }) }),
                                              Object(_e.jsx)("div", { style: { flexGrow: 1 }, children: Object(_e.jsx)(Oe.c, { onClick: o, children: "Dismiss" }) }),
                                          ],
                                      }),
                                  ],
                              }),
                    }),
                });
            }
            var ze = n(525),
                Fe = n(526),
                qe = n(99),
                Ve = n(29),
                We = n(514),
                He = n(24),
                Qe = n(276);
            function Ge(e) {
                try {
                    return Object(Ve.getAddress)(e);
                } catch (e) {
                    return !1;
                }
            }
            var Ke = { 56: "", 97: "testnet." };
            function Xe(e, t, n) {
                var r = "https://".concat(Ke[e] || Ke[Ie.a.MAINNET], "bscscan.com");
                switch (n) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(t);
                    case "token":
                        return "".concat(r, "/token/").concat(t);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(t);
                }
            }
            function Je(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : 4,
                    t = Ge(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n));
            }
            function $e(e) {
                return e.mul(He.a.from(1e4).add(He.a.from(1e3))).div(He.a.from(1e4));
            }
            function Ze(e, t) {
                if (t < 0 || 1e4 < t) throw Error("Unexpected slippage value: ".concat(t));
                return [Ie.e.divide(Ie.e.multiply(e.raw, Ie.e.BigInt(1e4 - t)), Ie.e.BigInt(1e4)), Ie.e.divide(Ie.e.multiply(e.raw, Ie.e.BigInt(1e4 + t)), Ie.e.BigInt(1e4))];
            }
            function et(e, t, n, r) {
                if (!Ge(e) || e === We.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new qe.a(e, t, ((n = n), (r = r) ? n.getSigner(r).connectUnchecked() : n));
            }
            function tt(e, t, n) {
                return et(Ee, Qe.a, t, n);
            }
            var nt = n(58),
                rt = xe.default.button(
                    Object(i.a)([
                        "\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
                        ";\n  color: ",
                        ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
                        ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
                        ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                    ]),
                    function (e) {
                        return e.disabled ? "default" : "pointer";
                    },
                    function (e) {
                        var t = e.theme;
                        return e.disabled ? t.colors.textSubtle : t.colors.primary;
                    },
                    function (e) {
                        return e.disabled ? null : "underline";
                    },
                    function (e) {
                        return e.disabled ? null : "underline";
                    }
                ),
                at = Object(xe.default)(h.b)(
                    Object(i.a)([
                        "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                        ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                it = xe.default.a(
                    Object(i.a)([
                        "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                        ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                );
            function ct(e) {
                var t = e.target,
                    n = void 0 === t ? "_blank" : t,
                    r = e.href,
                    a = e.rel,
                    t = void 0 === a ? "noopener noreferrer" : a,
                    a = Object(nt.a)(e, ["target", "href", "rel"]),
                    e = Object(ye.useCallback)(
                        function (e) {
                            "_blank" === n || e.ctrlKey || e.metaKey || e.preventDefault();
                        },
                        [n]
                    );
                return Object(_e.jsx)(it, Object(Te.a)({ target: n, rel: t, href: r, onClick: e }, a));
            }
            var T = Object(xe.keyframes)(Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])),
                R = xe.default.img(Object(i.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]), T),
                ot = Object(xe.default)(Me)(Object(i.a)(["\n  flex-wrap: nowrap;\n"]));
            function st(e) {
                var t = e.hash,
                    n = e.success,
                    r = e.summary,
                    a = Ue().chainId,
                    e = Object(ye.useContext)(xe.ThemeContext);
                return Object(_e.jsxs)(ot, {
                    children: [
                        Object(_e.jsx)("div", { style: { paddingRight: 16 }, children: n ? Object(_e.jsx)(ze.a, { color: e.colors.success, size: 24 }) : Object(_e.jsx)(Fe.a, { color: e.colors.failure, size: 24 }) }),
                        Object(_e.jsxs)(Ae, {
                            gap: "8px",
                            children: [
                                Object(_e.jsx)(Oe.y, { children: null != r ? r : "Hash: ".concat(t.slice(0, 8), "...").concat(t.slice(58, 65)) }),
                                a && Object(_e.jsx)(ct, { href: Xe(a, t, "transaction"), children: "View on bscscan" }),
                            ],
                        }),
                    ],
                });
            }
            var lt = Object(xe.default)(B.a)(Object(i.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"])),
                ut = xe.default.div(
                    Object(i.a)([
                        "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
                        ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
                        " {\n    min-width: 290px;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                D = xe.default.div(Object(i.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]), function (e) {
                    return e.theme.colors.tertiary;
                }),
                dt = Object(le.a)(D);
            function bt(e) {
                var t = e.removeAfterMs,
                    n = e.content,
                    r = e.popKey,
                    a = ce(),
                    i = Object(ye.useCallback)(
                        function () {
                            return a(r);
                        },
                        [r, a]
                    );
                Object(ye.useEffect)(
                    function () {
                        if (null !== t) {
                            var e = setTimeout(function () {
                                i();
                            }, t);
                            return function () {
                                clearTimeout(e);
                            };
                        }
                    },
                    [t, i]
                );
                var c,
                    o,
                    s,
                    e = Object(ye.useContext)(xe.ThemeContext);
                "txn" in n
                    ? ((c = (s = n.txn).hash), (o = s.success), (s = s.summary), (c = Object(_e.jsx)(st, { hash: c, success: o, summary: s })))
                    : "listUpdate" in n && ((o = (l = n.listUpdate).listUrl), (s = l.oldList), (n = l.newList), (l = l.auto), (c = Object(_e.jsx)(Ye, { popKey: r, listUrl: o, oldList: s, newList: n, auto: l })));
                var l = Object(le.b)({ from: { width: "100%" }, to: { width: "0%" }, config: { duration: null != t ? t : void 0 } });
                return Object(_e.jsxs)(ut, { children: [Object(_e.jsx)(lt, { color: e.colors.textSubtle, onClick: i }), c, null !== t ? Object(_e.jsx)(dt, { style: l }) : null] });
            }
            var pt = xe.default.div(
                    Object(i.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]),
                    function (e) {
                        return e.height;
                    },
                    function (e) {
                        return e.height ? "0 auto;" : 0;
                    },
                    function (e) {
                        return e.height ? "20px" : 0;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                jt = xe.default.div(
                    Object(i.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"])
                ),
                ft = Object(xe.default)(Ae)(Object(i.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"]), function (e) {
                    return e.theme.mediaQueries.sm;
                });
            function ht() {
                var e,
                    t =
                        ((e = Object(we.d)(function (e) {
                            return e.application.popupList;
                        })),
                        Object(ye.useMemo)(
                            function () {
                                return e.filter(function (e) {
                                    return e.show;
                                });
                            },
                            [e]
                        ));
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsx)(ft, {
                            gap: "20px",
                            children: t.map(function (e) {
                                return Object(_e.jsx)(bt, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key);
                            }),
                        }),
                        Object(_e.jsx)(pt, {
                            height: 0 < (null == t ? void 0 : t.length) ? "fit-content" : 0,
                            children: Object(_e.jsx)(jt, {
                                children: t
                                    .slice(0)
                                    .reverse()
                                    .map(function (e) {
                                        return Object(_e.jsx)(bt, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key);
                                    }),
                            }),
                        }),
                    ],
                });
            }
            var mt = n(113),
                r = Object(xe.keyframes)(Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])),
                yt = xe.default.svg(
                    Object(i.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]),
                    r,
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        var t = e.stroke,
                            e = e.theme;
                        return null != t ? t : e.colors.primary;
                    }
                );
            function Ot(e) {
                var t = e.size,
                    n = void 0 === t ? "16px" : t,
                    t = e.stroke,
                    e = Object(nt.a)(e, ["size", "stroke"]);
                return Object(_e.jsx)(
                    yt,
                    Object(Te.a)(
                        Object(Te.a)({ viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: n, stroke: t }, e),
                        {},
                        {
                            children: Object(_e.jsx)("path", {
                                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        }
                    )
                );
            }
            var xt = xe.default.div(Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"])),
                vt = xe.default.h2(Object(i.a)(["\n  color: ", ";\n"]), function (e) {
                    return e.theme.colors.primaryDark;
                });
            function gt(e) {
                var n,
                    t,
                    r,
                    a = e.children,
                    i = Object(mt.b)().t,
                    c = Object(j.d)().active,
                    o = Object(j.d)(V),
                    s = o.active,
                    l = o.error,
                    u = o.activate,
                    d =
                        ((e = Object(j.d)()),
                        (n = e.activate),
                        (t = e.active),
                        (o = Object(ye.useState)(!1)),
                        (e = Object(Ce.a)(o, 2)),
                        (o = e[0]),
                        (r = e[1]),
                        Object(ye.useEffect)(
                            function () {
                                P.isAuthorized().then(function (e) {
                                    var t = window.localStorage.getItem(Oe.A);
                                    (e && t) || (f.isMobile && window.ethereum && t)
                                        ? n(P, void 0, !0).catch(function () {
                                              r(!0);
                                          })
                                        : r(!0);
                                });
                            },
                            [n]
                        ),
                        Object(ye.useEffect)(
                            function () {
                                t && r(!0);
                            },
                            [t]
                        ),
                        o);
                Object(ye.useEffect)(
                    function () {
                        !d || s || l || c || u(A);
                    },
                    [d, s, l, u, c]
                ),
                    (function (e) {
                        var r = 0 < arguments.length && void 0 !== e && e,
                            a = (e = Object(j.d)()).active,
                            i = e.error,
                            c = e.activate;
                        Object(ye.useEffect)(
                            function () {
                                var e = window.ethereum;
                                if (e && e.on && !a && !i && !r) {
                                    var t = function () {
                                            c(P, void 0, !0).catch(function (e) {
                                                console.error("Failed to activate after chain changed", e);
                                            });
                                        },
                                        n = function (e) {
                                            0 < e.length &&
                                                c(P, void 0, !0).catch(function (e) {
                                                    console.error("Failed to activate after accounts changed", e);
                                                });
                                        };
                                    return (
                                        e.on("chainChanged", t),
                                        e.on("accountsChanged", n),
                                        function () {
                                            e.removeListener && (e.removeListener("chainChanged", t), e.removeListener("accountsChanged", n));
                                        }
                                    );
                                }
                            },
                            [a, i, r, c]
                        );
                    })(!d);
                var e = Object(ye.useState)(!1),
                    o = Object(Ce.a)(e, 2),
                    e = o[0],
                    b = o[1];
                return (
                    Object(ye.useEffect)(function () {
                        var e = setTimeout(function () {
                            b(!0);
                        }, 600);
                        return function () {
                            clearTimeout(e);
                        };
                    }, []),
                    d ? (!c && l ? Object(_e.jsx)(xt, { children: Object(_e.jsx)(vt, { children: i("unknownError") }) }) : c || s ? a : e ? Object(_e.jsx)(xt, { children: Object(_e.jsx)(Ot, {}) }) : null) : null
                );
            }
            var Ct,
                wt,
                s = xe.default.div(
                    Object(i.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]),
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.border;
                    },
                    function (e) {
                        return e.borderRadius;
                    }
                ),
                kt = s,
                Tt = Object(xe.default)(s)(
                    Object(i.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                It = Object(xe.default)(s)(Object(i.a)(["\n  background-color: ", ";\n"]), function (e) {
                    return e.theme.colors.tertiary;
                }),
                t = n(194),
                Et = (n(416), n(53)),
                S = Object(le.a)(t.b),
                Nt = Object(xe.default)(S)(
                    Object(i.a)([
                        "\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n",
                    ])
                ),
                St = Object(le.a)(t.a),
                Rt = Object(xe.default)(function (e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    e = Object(nt.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return Object(_e.jsx)(St, Object(Te.a)({}, e));
                }).attrs({ "aria-label": "dialog" })(
                    Object(i.a)([
                        "\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ",
                        ";\n    background-color: ",
                        ";\n    box-shadow: 0 4px 8px 0 ",
                        ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ",
                        ";\n\n    max-width: 420px;\n    ",
                        "\n    ",
                        "\n    display: flex;\n    border-radius: 20px;\n\n    ",
                        " {\n      width: 65vw;\n    }\n    ",
                        " {\n      width: 85vw;\n    }\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    Object(Et.b)(0.95, "#191326"),
                    function (e) {
                        return e.mobile ? "flex-end" : "center";
                    },
                    function (e) {
                        e = e.maxHeight;
                        return e && Object(xe.css)((Ct = Ct || Object(i.a)(["\n        max-height: ", "vh;\n      "])), e);
                    },
                    function (e) {
                        e = e.minHeight;
                        return e && Object(xe.css)((wt = wt || Object(i.a)(["\n        min-height: ", "vh;\n      "])), e);
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                );
            function Ut(e) {
                var t = e.isOpen,
                    r = e.onDismiss,
                    n = e.minHeight,
                    a = void 0 !== n && n,
                    n = e.maxHeight,
                    i = void 0 === n ? 50 : n,
                    c = e.initialFocusRef,
                    o = e.children,
                    t = Object(le.c)(t, null, { config: { duration: 200 }, from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } });
                return Object(_e.jsx)(_e.Fragment, {
                    children: t.map(function (e) {
                        var t = e.item,
                            n = e.key,
                            e = e.props;
                        return (
                            t &&
                            Object(_e.jsx)(
                                Nt,
                                {
                                    style: e,
                                    onDismiss: r,
                                    initialFocusRef: c,
                                    children: Object(_e.jsxs)(Rt, { "aria-label": "dialog content", minHeight: a, maxHeight: i, mobile: f.isMobile, children: [!c && f.isMobile ? Object(_e.jsx)("div", { tabIndex: 1 }) : null, o] }),
                                },
                                n
                            )
                        );
                    }),
                });
            }
            function At(e) {
                var t = e.children,
                    e = e.onDismiss;
                return Object(_e.jsxs)(Ft, { children: [Object(_e.jsx)(Oe.o, { children: t }), Object(_e.jsx)(Oe.p, { onClick: e, variant: "text", children: Object(_e.jsx)(Oe.j, { color: "primary" }) })] });
            }
            function Pt(e) {
                var t = e.onDismiss,
                    e = e.pendingText;
                return Object(_e.jsx)(Dt, {
                    children: Object(_e.jsxs)(_t, {
                        children: [
                            Object(_e.jsx)(At, { onDismiss: t, children: "Waiting for confirmation" }),
                            Object(_e.jsx)(Yt, { children: Object(_e.jsx)(qt, { src: "/images/blue-loader.svg", alt: "loader", size: "90px" }) }),
                            Object(_e.jsxs)(Ae, {
                                gap: "12px",
                                justify: "center",
                                children: [
                                    Object(_e.jsx)(Ae, { gap: "12px", justify: "center", children: Object(_e.jsx)(Oe.y, { fontSize: "14px", children: Object(_e.jsx)("strong", { children: e }) }) }),
                                    Object(_e.jsx)(Oe.y, { fontSize: "14px", children: "Confirm this transaction in your wallet" }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function Bt(e) {
                var t = e.onDismiss,
                    n = e.chainId,
                    r = e.hash,
                    e = Object(ye.useContext)(xe.ThemeContext);
                return Object(_e.jsx)(Dt, {
                    children: Object(_e.jsxs)(_t, {
                        children: [
                            Object(_e.jsx)(At, { onDismiss: t, children: "Transaction submitted" }),
                            Object(_e.jsx)(Yt, { children: Object(_e.jsx)(Vt.a, { strokeWidth: 0.5, size: 97, color: e.colors.primary }) }),
                            Object(_e.jsxs)(Ae, {
                                gap: "8px",
                                justify: "center",
                                children: [n && r && Object(_e.jsx)(Oe.r, { href: Xe(n, r, "transaction"), children: "View on BscScan" }), Object(_e.jsx)(Oe.c, { onClick: t, mt: "20px", children: "Close" })],
                            }),
                        ],
                    }),
                });
            }
            function Mt(e) {
                var t = e.message,
                    n = e.onDismiss,
                    e = Object(ye.useContext)(xe.ThemeContext);
                return Object(_e.jsxs)(Dt, {
                    children: [
                        Object(_e.jsxs)(_t, {
                            children: [
                                Object(_e.jsx)(At, { onDismiss: n, children: "Error" }),
                                Object(_e.jsxs)(Ae, {
                                    style: { marginTop: 20, padding: "2rem 0" },
                                    gap: "24px",
                                    justify: "center",
                                    children: [
                                        Object(_e.jsx)(Ht.a, { color: e.colors.failure, style: { strokeWidth: 1.5 }, size: 64 }),
                                        Object(_e.jsx)(Oe.y, { fontSize: "16px", color: "failure", style: { textAlign: "center", width: "85%" }, children: t }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsx)(zt, { gap: "12px", children: Object(_e.jsx)(Oe.c, { onClick: n, children: "Dismiss" }) }),
                    ],
                });
            }
            function Lt(e, t, n) {
                var r, a, i;
                if (
                    (i = e.find(function (e) {
                        return e.data.stringId === t;
                    }))
                ) {
                    var c = i.data.text;
                    return c.includes("%") ? ((r = c), (a = n), (e = Kt.exec(r)[0]), (i = r.split(" ").indexOf(e)), (i = a.split(" ")[i]), r.replace(e, i)) : c;
                }
                return n;
            }
            var Dt = xe.default.div(Object(i.a)(["\n  width: 100%;\n  overflow-y: auto;\n"])),
                _t = Object(xe.default)(Ae)(Object(i.a)(["\n  padding: 24px;\n"])),
                Yt = Object(xe.default)(oe)(Object(i.a)(["\n  padding: 40px 0;\n"])),
                zt = Object(xe.default)(_t)(Object(i.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                Ft = xe.default.div(Object(i.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"]), Oe.o),
                qt = Object(xe.default)(R)(
                    Object(i.a)(["\n  height: ", ";\n  width: ", ";\n"]),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                Vt = n(528),
                Wt = function (e) {
                    var t = e.title,
                        n = e.bottomContent,
                        r = e.onDismiss,
                        e = e.topContent;
                    return Object(_e.jsxs)(Dt, { children: [Object(_e.jsxs)(_t, { children: [Object(_e.jsx)(At, { onDismiss: r, children: t }), e()] }), Object(_e.jsx)(zt, { gap: "12px", children: n() })] });
                },
                Ht = n(529),
                Qt = function (e) {
                    var t = e.isOpen,
                        n = e.onDismiss,
                        r = e.attemptingTxn,
                        a = e.hash,
                        i = e.pendingText,
                        c = e.content,
                        e = Ue().chainId;
                    return e ? Object(_e.jsx)(Ut, { isOpen: t, onDismiss: n, maxHeight: 90, children: r ? Object(_e.jsx)(Pt, { onDismiss: n, pendingText: i }) : a ? Object(_e.jsx)(Bt, { chainId: e, hash: a, onDismiss: n }) : c() }) : null;
                },
                Gt = Object(ye.createContext)({ translations: [], setTranslations: function () {} }),
                Kt = /%(.*?)%/,
                Xt = function (e, t) {
                    var n = Object(ye.useContext)(Gt).translations;
                    return "error" === n[0] ? t : 0 < n.length ? Lt(n, e, t) : null;
                },
                Jt = function () {
                    var n = Object(ye.useContext)(Gt).translations;
                    return Object(ye.useCallback)(
                        function (e, t) {
                            return "error" !== n[0] && 0 < n.length ? Lt(n, e, t) : t;
                        },
                        [n]
                    );
                },
                $t = xe.default.div(Object(i.a)(["\n  margin-bottom: 40px;\n"])),
                Zt = function (e) {
                    var t = e.activeIndex,
                        e = void 0 === t ? 0 : t,
                        t = Jt();
                    return Object(_e.jsx)($t, {
                        children: Object(_e.jsxs)(Oe.d, {
                            activeIndex: e,
                            scale: "sm",
                            variant: "subtle",
                            children: [
                                Object(_e.jsx)(Oe.e, { id: "swap-nav-link", to: "/swap", as: h.b, children: t(1142, "Exchange") }),
                                Object(_e.jsx)(Oe.e, { id: "pool-nav-link", to: "/pool", as: h.b, children: t(262, "Liquidity") }),
                            ],
                        }),
                    });
                },
                M = n(119),
                en = n(121),
                tn = n(248),
                nn = new M.b(en),
                rn = n(165),
                an = (function (e) {
                    Object(C.a)(a, e);
                    var r = Object(w.a)(a);
                    function a(e, t) {
                        var n;
                        return Object(g.a)(this, a), ((n = r.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0), (n.tags = void 0), (n.tokenInfo = e), (n.tags = t), n;
                    }
                    return (
                        Object(x.a)(a, [
                            {
                                key: "logoURI",
                                get: function () {
                                    return this.tokenInfo.logoURI;
                                },
                            },
                        ]),
                        a
                    );
                })(Ie.j),
                cn = ((me = {}), Object(ke.a)(me, Ie.a.MAINNET, {}), Object(ke.a)(me, Ie.a.BSCTESTNET, {}), me),
                on = "undefined" != typeof WeakMap ? new WeakMap() : null;
            function sn() {
                return Object(we.d)(function (e) {
                    return e.lists.selectedListUrl;
                });
            }
            function ln() {
                return (
                    (n = sn()),
                    (r = Object(we.d)(function (e) {
                        return e.lists.byUrl;
                    })),
                    Object(ye.useMemo)(
                        function () {
                            var e;
                            if (!n) return cn;
                            var t = null === (e = r[n]) || void 0 === e ? void 0 : e.current;
                            if (!t) return cn;
                            try {
                                return (function (a) {
                                    var e = null == on ? void 0 : on.get(a);
                                    if (e) return e;
                                    e = a.tokens.reduce(function (e, t) {
                                        var n,
                                            r =
                                                null !==
                                                    (r =
                                                        null === (n = t.tags) ||
                                                        void 0 === n ||
                                                        null ===
                                                            (r = n.map(function (e) {
                                                                var t;
                                                                if (null !== (t = a.tags) && void 0 !== t && t[e]) return Object(Te.a)(Object(Te.a)({}, a.tags[e]), {}, { id: e });
                                                            })) ||
                                                        void 0 === r
                                                            ? void 0
                                                            : r.filter(function (e) {
                                                                  return Boolean(e);
                                                              })) && void 0 !== r
                                                    ? r
                                                    : [],
                                            r = new an(t, r);
                                        if (void 0 !== e[r.chainId][r.address]) throw Error("Duplicate tokens.");
                                        return Object(Te.a)(Object(Te.a)({}, e), {}, Object(ke.a)({}, r.chainId, Object(Te.a)(Object(Te.a)({}, e[r.chainId]), {}, Object(ke.a)({}, r.address, r))));
                                    }, Object(Te.a)({}, cn));
                                    return null == on || on.set(a, e), e;
                                })(t);
                            } catch (e) {
                                return console.error("Could not show token list due to error", e), cn;
                            }
                        },
                        [r, n]
                    )
                );
                var n, r;
            }
            var un = /^0x[a-fA-F0-9]{40}$/,
                dn = /^0x[a-f0-9]*$/;
            function bn(e) {
                if (!un.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!dn.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData);
            }
            function pn(e) {
                var t = e.split("-");
                if (2 !== t.length) throw new Error("Invalid call key: ".concat(e));
                return { address: t[0], callData: t[1] };
            }
            var jn = Object($.b)("multicall/addMulticallListeners"),
                fn = Object($.b)("multicall/removeMulticallListeners"),
                hn = Object($.b)("multicall/fetchingMulticallResults"),
                mn = Object($.b)("multicall/errorFetchingMulticallResults"),
                yn = Object($.b)("multicall/updateMulticallResults");
            function On(e) {
                return -1 !== ["string", "number"].indexOf(typeof e);
            }
            function xn(e) {
                return (
                    void 0 === e ||
                    (Array.isArray(e) &&
                        e.every(function (e) {
                            return On(e) || (Array.isArray(e) && e.every(On));
                        }))
                );
            }
            var vn = { valid: !1, blockNumber: void 0, data: void 0 },
                gn = { blocksPerFetch: 1 / 0 };
            function Cn(n, r) {
                var a = Ue().chainId,
                    i = Object(we.d)(function (e) {
                        return e.multicall.callResults;
                    }),
                    c = Object(we.c)(),
                    o = Object(ye.useMemo)(
                        function () {
                            var e, t;
                            return JSON.stringify(
                                null !==
                                    (t =
                                        null == n ||
                                        null ===
                                            (e = n.filter(function (e) {
                                                return Boolean(e);
                                            })) ||
                                        void 0 === e ||
                                        null === (t = e.map(bn)) ||
                                        void 0 === t
                                            ? void 0
                                            : t.sort()) && void 0 !== t
                                    ? t
                                    : []
                            );
                        },
                        [n]
                    );
                return (
                    Object(ye.useEffect)(
                        function () {
                            var e = JSON.parse(o);
                            if (a && 0 !== e.length) {
                                var t = e.map(pn);
                                return (
                                    c(jn({ chainId: a, calls: t, options: r })),
                                    function () {
                                        c(fn({ chainId: a, calls: t, options: r }));
                                    }
                                );
                            }
                        },
                        [a, c, r, o]
                    ),
                    Object(ye.useMemo)(
                        function () {
                            return n.map(function (e) {
                                var t;
                                if (!a || !e) return vn;
                                e = null === (t = i[a]) || void 0 === t ? void 0 : t[bn(e)];
                                return { valid: !0, data: null != e && e.data && "0x" !== (null == e ? void 0 : e.data) ? e.data : null, blockNumber: null == e ? void 0 : e.blockNumber };
                            });
                        },
                        [i, n, a]
                    )
                );
            }
            var wn = { valid: !1, result: void 0, loading: !1, syncing: !1, error: !1 },
                kn = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 };
            function Tn(e, t, n, r) {
                if (!e) return wn;
                var a = e.valid,
                    i = e.data,
                    e = e.blockNumber;
                if (!a) return wn;
                if (a && !e) return kn;
                if (!t || !n || !r) return kn;
                var c,
                    a = i && 2 < i.length,
                    r = (null != e ? e : 0) < r;
                if (a && i)
                    try {
                        c = t.decodeFunctionResult(n, i);
                    } catch (e) {
                        return console.error("Result data parsing failed", n, i), { valid: !0, loading: !1, error: !0, syncing: r, result: c };
                    }
                return { valid: !0, loading: !1, syncing: r, result: c, error: !a };
            }
            function In(e, t, n, r, a) {
                var i = Object(ye.useMemo)(
                        function () {
                            return t.getFunction(n);
                        },
                        [t, n]
                    ),
                    c = Object(ye.useMemo)(
                        function () {
                            return i && xn(r) ? t.encodeFunctionData(i, r) : void 0;
                        },
                        [r, t, i]
                    ),
                    o = Cn(
                        Object(ye.useMemo)(
                            function () {
                                return i && e && 0 < e.length && c
                                    ? e.map(function (e) {
                                          return e && c ? { address: e, callData: c } : void 0;
                                      })
                                    : [];
                            },
                            [e, c, i]
                        ),
                        a
                    ),
                    s = ie();
                return Object(ye.useMemo)(
                    function () {
                        return o.map(function (e) {
                            return Tn(e, t, i, s);
                        });
                    },
                    [i, o, t, s]
                );
            }
            function En(t, n, e, r) {
                var a = Object(ye.useMemo)(
                        function () {
                            var e;
                            return null == t || null === (e = t.interface) || void 0 === e ? void 0 : e.getFunction(n);
                        },
                        [t, n]
                    ),
                    i = Cn(
                        Object(ye.useMemo)(
                            function () {
                                return t && a && xn(e) ? [{ address: t.address, callData: t.interface.encodeFunctionData(a, e) }] : [];
                            },
                            [t, a, e]
                        ),
                        r
                    )[0],
                    c = ie();
                return Object(ye.useMemo)(
                    function () {
                        return Tn(i, null == t ? void 0 : t.interface, a, c);
                    },
                    [i, t, a, c]
                );
            }
            var y = n(152),
                Nn = n.n(y),
                Sn = Object($.b)("user/updateMatchesDarkMode"),
                Rn = Object($.b)("user/updateUserDarkMode"),
                Un = Object($.b)("user/updateUserExpertMode"),
                An = Object($.b)("user/updateUserSlippageTolerance"),
                Pn = Object($.b)("user/updateUserDeadline"),
                Bn = Object($.b)("user/addSerializedToken"),
                Mn = Object($.b)("user/removeSerializedToken"),
                Ln = Object($.b)("user/addSerializedPair"),
                Dn = Object($.b)("user/removeSerializedPair"),
                _n = Object($.b)("user/muteAudio"),
                Yn = Object($.b)("user/unmuteAudio");
            function zn(e) {
                return { chainId: e.chainId, address: e.address, decimals: e.decimals, symbol: e.symbol, name: e.name };
            }
            function Fn(e) {
                return new Ie.j(e.chainId, e.address, e.decimals, e.symbol, e.name);
            }
            function qn() {
                return Object(we.d)(function (e) {
                    return e.user.userExpertMode;
                });
            }
            function Vn() {
                var t = Object(we.c)();
                return [
                    Object(we.d)(function (e) {
                        return e.user.userSlippageTolerance;
                    }),
                    Object(ye.useCallback)(
                        function (e) {
                            t(An({ userSlippageTolerance: e }));
                        },
                        [t]
                    ),
                ];
            }
            function Wn() {
                var t = Object(we.c)();
                return [
                    Object(we.d)(function (e) {
                        return e.user.userDeadline;
                    }),
                    Object(ye.useCallback)(
                        function (e) {
                            t(Pn({ userDeadline: e }));
                        },
                        [t]
                    ),
                ];
            }
            function Hn() {
                var t = Ue().chainId,
                    n = Object(we.d)(function (e) {
                        return e.user.tokens;
                    });
                return Object(ye.useMemo)(
                    function () {
                        var e;
                        return t ? Object.values(null !== (e = n[t]) && void 0 !== e ? e : {}).map(Fn) : [];
                    },
                    [n, t]
                );
            }
            var Qn = n(112),
                Gn = n(279),
                Kn = n(280),
                Xn = n(281),
                Jn = n(249),
                $n = ((T = {}), Object(ke.a)(T, Ie.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object(ke.a)(T, Ie.a.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), T);
            function Zn(e, t, n) {
                var r = !(2 < arguments.length && void 0 !== n) || n,
                    n = Ue(),
                    a = n.library,
                    i = n.account;
                return Object(ye.useMemo)(
                    function () {
                        if (!e || !t || !a) return null;
                        try {
                            return et(e, t, a, r && i ? i : void 0);
                        } catch (e) {
                            return console.error("Failed to get contract", e), null;
                        }
                    },
                    [e, t, a, r, i]
                );
            }
            function er(e, t) {
                return Zn(e, en, t);
            }
            function tr(e) {
                var t = Ue().chainId;
                if (t)
                    switch (t) {
                        case Ie.a.MAINNET:
                        case Ie.a.BSCTESTNET:
                    }
                return Zn(void 0, Gn, e);
            }
            function nr(e, t) {
                return Zn(e, Kn, t);
            }
            function rr() {
                var e = Ue().chainId;
                return Zn(e && $n[e], Jn, !1);
            }
            function ar() {
                var e = Ue().chainId,
                    t = Hn(),
                    n = ln();
                return Object(ye.useMemo)(
                    function () {
                        return e
                            ? t.reduce(function (e, t) {
                                  return (e[t.address] = t), e;
                              }, Object(Te.a)({}, n[e]))
                            : {};
                    },
                    [e, t, n]
                );
            }
            var ir = /^0x[a-fA-F0-9]{64}$/;
            function cr(e, t, n) {
                return e && 0 < e.length ? e : t && ir.test(t) ? Object(rn.b)(t) : n;
            }
            function or(e) {
                var t = Ue().chainId,
                    n = ar(),
                    r = Ge(e),
                    a = er(r || void 0, !1),
                    e = Zn(r || void 0, tn, !1),
                    i = r ? n[r] : void 0,
                    c = En(i ? void 0 : a, "name", void 0, gn),
                    o = En(i ? void 0 : e, "name", void 0, gn),
                    s = En(i ? void 0 : a, "symbol", void 0, gn),
                    l = En(i ? void 0 : e, "symbol", void 0, gn),
                    u = En(i ? void 0 : a, "decimals", void 0, gn);
                return Object(ye.useMemo)(
                    function () {
                        return (
                            i ||
                            (t && r
                                ? u.loading || s.loading || c.loading
                                    ? null
                                    : u.result
                                    ? new Ie.j(
                                          t,
                                          r,
                                          u.result[0],
                                          cr(null === (e = s.result) || void 0 === e ? void 0 : e[0], null === (e = l.result) || void 0 === e ? void 0 : e[0], "UNKNOWN"),
                                          cr(null === (e = c.result) || void 0 === e ? void 0 : e[0], null === (e = o.result) || void 0 === e ? void 0 : e[0], "Unknown Token")
                                      )
                                    : void 0
                                : void 0)
                        );
                        var e;
                    },
                    [r, t, u.loading, u.result, s.loading, s.result, l.result, i, c.loading, c.result, o.result]
                );
            }
            function sr(e) {
                var t = "BNB" === (null == e ? void 0 : e.toUpperCase()),
                    e = or(t ? void 0 : e);
                return t ? Ie.d : e;
            }
            function lr(e, t) {
                var n = Object(ye.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (e =
                                    null == t
                                        ? void 0
                                        : t.filter(function (e) {
                                              return !1 !== Ge(null == e ? void 0 : e.address);
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [t]
                    ),
                    i = In(
                        Object(ye.useMemo)(
                            function () {
                                return n.map(function (e) {
                                    return e.address;
                                });
                            },
                            [n]
                        ),
                        nn,
                        "balanceOf",
                        [e]
                    ),
                    r = Object(ye.useMemo)(
                        function () {
                            return i.some(function (e) {
                                return e.loading;
                            });
                        },
                        [i]
                    );
                return [
                    Object(ye.useMemo)(
                        function () {
                            return e && 0 < n.length
                                ? n.reduce(function (e, t, n) {
                                      var r,
                                          a = null == i || null === (r = i[n]) || void 0 === r || null === (a = r.result) || void 0 === a ? void 0 : a[0],
                                          a = a ? Ie.e.BigInt(a.toString()) : void 0;
                                      return a && (e[t.address] = new Ie.k(t, a)), e;
                                  }, {})
                                : {};
                        },
                        [e, n, i]
                    ),
                    r,
                ];
            }
            function ur(e, t) {
                return lr(e, t)[0];
            }
            function dr(e, t) {
                e = ur(e, [t]);
                if (t) return e[t.address];
            }
            function br(t, n) {
                var e,
                    r,
                    a,
                    i,
                    c,
                    o,
                    s,
                    l,
                    u,
                    d = Object(ye.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (e =
                                    null == n
                                        ? void 0
                                        : n.filter(function (e) {
                                              return e instanceof Ie.j;
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [n]
                    ),
                    b = ur(t, d),
                    p =
                        ((e = Object(ye.useMemo)(
                            function () {
                                var e;
                                return (
                                    null !==
                                        (e =
                                            null == n
                                                ? void 0
                                                : n.some(function (e) {
                                                      return e === Ie.d;
                                                  })) &&
                                    void 0 !== e &&
                                    e
                                );
                            },
                            [n]
                        )
                            ? [t]
                            : []),
                        (d = rr()),
                        (l = Object(ye.useMemo)(
                            function () {
                                return e
                                    ? e
                                          .map(Ge)
                                          .filter(function (e) {
                                              return !1 !== e;
                                          })
                                          .sort()
                                    : [];
                            },
                            [e]
                        )),
                        (r = d),
                        (a = "getEthBalance"),
                        (i = l.map(function (e) {
                            return [e];
                        })),
                        (c = Object(ye.useMemo)(
                            function () {
                                var e;
                                return null == r || null === (e = r.interface) || void 0 === e ? void 0 : e.getFunction(a);
                            },
                            [r, a]
                        )),
                        (o = Cn(
                            Object(ye.useMemo)(
                                function () {
                                    return r && c && i && 0 < i.length
                                        ? i.map(function (e) {
                                              return { address: r.address, callData: r.interface.encodeFunctionData(c, e) };
                                          })
                                        : [];
                                },
                                [i, r, c]
                            ),
                            void 0
                        )),
                        (s = ie()),
                        (u = Object(ye.useMemo)(
                            function () {
                                return o.map(function (e) {
                                    return Tn(e, null == r ? void 0 : r.interface, c, s);
                                });
                            },
                            [c, r, o, s]
                        )),
                        Object(ye.useMemo)(
                            function () {
                                return l.reduce(function (e, t, n) {
                                    var r,
                                        a = null == u || null === (r = u[n]) || void 0 === r || null === (a = r.result) || void 0 === a ? void 0 : a[0];
                                    return a && (e[t] = Ie.c.ether(Ie.e.BigInt(a.toString()))), e;
                                }, {});
                            },
                            [l, u]
                        ));
                return Object(ye.useMemo)(
                    function () {
                        var e;
                        return null !==
                            (e =
                                null == n
                                    ? void 0
                                    : n.map(function (e) {
                                          if (t && e) return e instanceof Ie.j ? b[e.address] : e === Ie.d ? p[t] : void 0;
                                      })) && void 0 !== e
                            ? e
                            : [];
                    },
                    [t, n, p, b]
                );
            }
            function pr(e, t) {
                return br(e, [t])[0];
            }
            function jr(t, n) {
                var e = Object(ye.useState)(n && n(t) ? t : void 0),
                    r = Object(Ce.a)(e, 2),
                    e = r[0],
                    a = r[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            a(function (e) {
                                return !n || n(t) ? t : e;
                            });
                        },
                        [n, t]
                    ),
                    e
                );
            }
            function fr(e) {
                return null != e;
            }
            var hr = n(282),
                B = n(192),
                mr = n.n(B),
                yr = n(157),
                Or = n(158),
                xr = new TextDecoder();
            function vr(e) {
                var t = (function (e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 != 0) throw new Error("hex must have length that is multiple of 2");
                        for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16);
                        return t;
                    })(e),
                    n = Object(yr.getCodec)(t);
                switch (n) {
                    case "ipfs-ns":
                        var r = Object(yr.rmPrefix)(t),
                            a = new mr.a(r);
                        return "ipfs://".concat(Object(Or.toB58String)(a.multihash));
                    case "ipns-ns":
                        (r = Object(yr.rmPrefix)(t)), (a = new mr.a(r)), (r = Object(Or.decode)(a.multihash));
                        return "identity" === r.name ? "ipns://".concat(xr.decode(r.digest).trim()) : "ipns://".concat(Object(Or.toB58String)(a.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(n));
                }
            }
            var gr = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;
            function Cr(e) {
                e = e.match(gr);
                if (e) return { ensName: "".concat(e[1].toLowerCase(), "eth"), ensPath: e[3] };
            }
            function wr(e) {
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var t = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(t, "/"), "https://ipfs.io/ipfs/".concat(t, "/")];
                    case "ipns":
                        t = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(t, "/"), "https://ipfs.io/ipns/".concat(t, "/")];
                    default:
                        return [];
                }
            }
            var kr = n(91);
            function Tr(e) {
                return /^0x0*$/.test(e);
            }
            function Ir(e) {
                var t,
                    n,
                    r,
                    a,
                    i = Object(ye.useMemo)(
                        function () {
                            return e ? Cr(e) : void 0;
                        },
                        [e]
                    ),
                    c =
                        ((t = null == i ? void 0 : i.ensName),
                        (n = Object(ye.useMemo)(
                            function () {
                                if (!t) return [void 0];
                                try {
                                    return t ? [Object(kr.namehash)(t)] : [void 0];
                                } catch (e) {
                                    return [void 0];
                                }
                            },
                            [t]
                        )),
                        (r = En(tr(!1), "resolver", n)),
                        (a = En(nr((a = null === (a = r.result) || void 0 === a ? void 0 : a[0]) && Tr(a) ? void 0 : a, !1), "contenthash", n)),
                        { contenthash: null !== (n = null === (n = a.result) || void 0 === n ? void 0 : n[0]) && void 0 !== n ? n : null, loading: r.loading || a.loading });
                return Object(ye.useMemo)(
                    function () {
                        return i ? (c.contenthash ? wr(vr(c.contenthash)) : []) : e ? wr(e) : [];
                    },
                    [i, c.contenthash, e]
                );
            }
            var Er = n(530),
                Nr = {};
            function Sr(e) {
                var t = e.srcs,
                    n = e.alt,
                    r = Object(nt.a)(e, ["srcs", "alt"]),
                    e = Object(ye.useState)(0),
                    a = Object(Ce.a)(e, 2)[1],
                    i = t.find(function (e) {
                        return !Nr[e];
                    });
                return i
                    ? Object(_e.jsx)(
                          "img",
                          Object(Te.a)(
                              Object(Te.a)({}, r),
                              {},
                              {
                                  alt: n,
                                  src: i,
                                  onError: function () {
                                      i && (Nr[i] = !0),
                                          a(function (e) {
                                              return e + 1;
                                          });
                                  },
                              }
                          )
                      )
                    : Object(_e.jsx)(Er.a, Object(Te.a)({}, r));
            }
            var Rr = Object(xe.default)(Sr)(
                Object(i.a)(["\n  width: ", ";\n  height: ", ";\n"]),
                function (e) {
                    return e.size;
                },
                function (e) {
                    return e.size;
                }
            );
            function Ur(e) {
                var t = e.logoURI,
                    n = e.style,
                    r = e.size,
                    r = void 0 === r ? "24px" : r,
                    e = e.alt,
                    t = Ir(t);
                return Object(_e.jsx)(Rr, { alt: e, size: r, srcs: t, style: n });
            }
            var Ar = n(538),
                Pr = n(151);
            function Br(e, n, t) {
                var r = !(2 < arguments.length && void 0 !== t) || t,
                    a = Object(ye.useRef)();
                Object(ye.useEffect)(
                    function () {
                        a.current = e;
                    },
                    [e]
                ),
                    Object(ye.useEffect)(
                        function () {
                            function e() {
                                var e = a.current;
                                e && e();
                            }
                            if (null !== n) {
                                r && e();
                                var t = setInterval(e, n);
                                return function () {
                                    return clearInterval(t);
                                };
                            }
                        },
                        [n, r]
                    );
            }
            var Mr = xe.default.div(
                    Object(i.a)([
                        "\n  z-index: 9999;\n\n  visibility: ",
                        ";\n  opacity: ",
                        ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
                        ";\n  border: 1px solid ",
                        ";\n  box-shadow: 0 4px 8px 0 ",
                        ";\n  color: ",
                        ";\n  border-radius: 8px;\n",
                    ]),
                    function (e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function (e) {
                        return e.show ? 1 : 0;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    Object(Et.b)(0.9, "#2F80ED"),
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                Lr = xe.default.div(Object(i.a)(["\n  display: inline-block;\n"])),
                Dr = xe.default.div(
                    Object(i.a)([
                        "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
                        ";\n    transform: rotate(45deg);\n    background: ",
                        ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                );
            function _r(e) {
                var t = e.content,
                    n = e.show,
                    r = e.children,
                    a = e.placement,
                    i = void 0 === a ? "auto" : a,
                    c = Object(ye.useState)(null),
                    o = Object(Ce.a)(c, 2),
                    s = o[0],
                    l = o[1],
                    e = Object(ye.useState)(null),
                    a = Object(Ce.a)(e, 2),
                    c = a[0],
                    o = a[1],
                    e = Object(ye.useState)(null),
                    a = Object(Ce.a)(e, 2),
                    e = a[0],
                    a = a[1],
                    i = Object(Ar.a)(s, c, {
                        placement: i,
                        strategy: "fixed",
                        modifiers: [
                            { name: "offset", options: { offset: [8, 8] } },
                            { name: "arrow", options: { element: e } },
                        ],
                    }),
                    e = i.styles,
                    u = i.update,
                    i = i.attributes;
                return (
                    Br(
                        Object(ye.useCallback)(
                            function () {
                                u && u();
                            },
                            [u]
                        ),
                        n ? 100 : null
                    ),
                    Object(_e.jsxs)(_e.Fragment, {
                        children: [
                            Object(_e.jsx)(Lr, { ref: l, children: r }),
                            Object(_e.jsx)(Pr.a, {
                                children: Object(_e.jsxs)(
                                    Mr,
                                    Object(Te.a)(
                                        Object(Te.a)({ show: n, ref: o, style: e.popper }, i.popper),
                                        {},
                                        {
                                            children: [
                                                t,
                                                Object(_e.jsx)(
                                                    Dr,
                                                    Object(Te.a)(
                                                        { className: "arrow-".concat(null !== (t = null === (t = i.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== t ? t : ""), ref: a, style: e.arrow },
                                                        i.arrow
                                                    )
                                                ),
                                            ],
                                        }
                                    )
                                ),
                            }),
                        ],
                    })
                );
            }
            var Yr = xe.default.div(Object(i.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"]));
            function zr(e) {
                var t = e.text,
                    e = Object(nt.a)(e, ["text"]);
                return Object(_e.jsx)(_r, Object(Te.a)({ content: Object(_e.jsx)(Yr, { children: t }) }, e));
            }
            function Fr(e) {
                var t = e.children,
                    n = Object(nt.a)(e, ["children"]),
                    r = Object(ye.useState)(!1),
                    a = Object(Ce.a)(r, 2),
                    e = a[0],
                    i = a[1],
                    r = Object(ye.useCallback)(
                        function () {
                            return i(!0);
                        },
                        [i]
                    ),
                    a = Object(ye.useCallback)(
                        function () {
                            return i(!1);
                        },
                        [i]
                    );
                return Object(_e.jsx)(zr, Object(Te.a)(Object(Te.a)({}, n), {}, { show: e, children: Object(_e.jsx)("div", { onMouseEnter: r, onMouseLeave: a, children: t }) }));
            }
            var qr = xe.default.div(
                Object(i.a)([
                    "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
                    ";\n  color: ",
                    ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
                ]),
                function (e) {
                    return e.theme.colors.invertedContrast;
                },
                function (e) {
                    return e.theme.colors.textSubtle;
                }
            );
            function Vr(e) {
                var t = e.text,
                    n = Object(ye.useState)(!1),
                    r = Object(Ce.a)(n, 2),
                    e = r[0],
                    a = r[1],
                    n = Object(ye.useCallback)(
                        function () {
                            return a(!0);
                        },
                        [a]
                    ),
                    r = Object(ye.useCallback)(
                        function () {
                            return a(!1);
                        },
                        [a]
                    );
                return Object(_e.jsx)("span", {
                    style: { marginLeft: 4 },
                    children: Object(_e.jsx)(zr, { text: t, show: e, children: Object(_e.jsx)(qr, { onClick: n, onMouseEnter: n, onMouseLeave: r, children: Object(_e.jsx)(Er.a, { size: 16 }) }) }),
                });
            }
            var Wr = Object(xe.default)(Sr)(
                    Object(i.a)(["\n  width: ", ";\n  height: ", ";\n"]),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                Hr = function (e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png");
                },
                Qr = xe.default.img(
                    Object(i.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"]),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                Gr = Object(xe.default)(Sr)(
                    Object(i.a)(["\n  width: ", ";\n  height: ", ";\n"]),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                );
            function Kr(e) {
                var t = e.currency,
                    n = e.size,
                    r = void 0 === n ? "24px" : n,
                    a = e.style,
                    i = Ir(t instanceof an ? t.logoURI : void 0),
                    n = Object(ye.useMemo)(
                        function () {
                            return t !== Ie.d && t instanceof Ie.j
                                ? t instanceof an
                                    ? [].concat(Object(Z.a)(i), ["/images/coins/".concat(null !== (e = null == t ? void 0 : t.address) && void 0 !== e ? e : "token", ".png"), Hr(t.address)])
                                    : ["/".concat(null !== (e = null == t ? void 0 : t.address) && void 0 !== e ? e : "token", ".png"), Hr(t.address)]
                                : [];
                            var e;
                        },
                        [t, i]
                    );
                return t === Ie.d
                    ? Object(_e.jsx)(Qr, { src: "/images/coins/bnb.png", size: r, style: a })
                    : null != t && t.symbol
                    ? Object(_e.jsx)(Wr, { size: r, srcs: n, alt: "".concat(null !== (e = null == t ? void 0 : t.symbol) && void 0 !== e ? e : "token", " logo"), style: a })
                    : Object(_e.jsx)(Gr, { size: r, srcs: n, alt: "".concat(null !== (n = null == t ? void 0 : t.symbol) && void 0 !== n ? n : "token", " logo"), style: a });
            }
            var Xr = xe.default.div(
                Object(i.a)([
                    "\n  border: 1px solid ",
                    ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
                    ";\n    background-color: ",
                    ";\n  }\n\n  background-color: ",
                    ";\n  opacity: ",
                    ";\n",
                ]),
                function (e) {
                    var t = e.theme;
                    return e.disable ? "transparent" : t.colors.tertiary;
                },
                function (e) {
                    return !e.disable && "pointer";
                },
                function (e) {
                    var t = e.theme;
                    return !e.disable && t.colors.invertedContrast;
                },
                function (e) {
                    var t = e.theme;
                    return e.disable && t.colors.tertiary;
                },
                function (e) {
                    return e.disable && "0.4";
                }
            );
            function Jr(e) {
                var t = e.chainId,
                    n = e.onSelect,
                    r = e.selectedCurrency,
                    e = Jt();
                return Object(_e.jsxs)(Ae, {
                    gap: "md",
                    children: [
                        Object(_e.jsxs)(Me, { children: [Object(_e.jsx)(Oe.y, { fontSize: "14px", children: "Common bases" }), Object(_e.jsx)(Vr, { text: e(1204, "These tokens are commonly paired with other tokens.") })] }),
                        Object(_e.jsxs)(Me, {
                            gap: "4px",
                            children: [
                                Object(_e.jsxs)(Xr, {
                                    onClick: function () {
                                        (r && Object(Ie.o)(r, Ie.d)) || n(Ie.d);
                                    },
                                    disable: r === Ie.d,
                                    children: [Object(_e.jsx)(Kr, { currency: Ie.d, style: { marginRight: 8 } }), Object(_e.jsx)(Oe.y, { children: "BNB" })],
                                }),
                                (t ? z[t] : []).map(function (e) {
                                    var t = r instanceof Ie.j && r.address === e.address;
                                    return Object(_e.jsxs)(
                                        Xr,
                                        {
                                            onClick: function () {
                                                return !t && n(e);
                                            },
                                            disable: t,
                                            children: [Object(_e.jsx)(Kr, { currency: e, style: { marginRight: 8 } }), Object(_e.jsx)(Oe.y, { children: e.symbol })],
                                        },
                                        e.address
                                    );
                                }),
                            ],
                        }),
                    ],
                });
            }
            var $r = n(292),
                Zr = Object(xe.default)(Le)(Object(i.a)(["\n  color: ", ";\n  font-size: 14px;\n"]), function (e) {
                    return e.theme.colors.primary;
                }),
                ea = Object(xe.default)(Ae)(Object(i.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"])),
                ta = Object(xe.default)(Pe)(
                    Object(i.a)([
                        "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
                        ";\n  pointer-events: ",
                        ";\n  :hover {\n    background-color: ",
                        ";\n  }\n  opacity: ",
                        ";\n",
                    ]),
                    function (e) {
                        return !e.disabled && "pointer";
                    },
                    function (e) {
                        return e.disabled && "none";
                    },
                    function (e) {
                        var t = e.theme;
                        return !e.disabled && t.colors.invertedContrast;
                    },
                    function (e) {
                        var t = e.disabled,
                            e = e.selected;
                        return t || e ? 0.5 : 1;
                    }
                ),
                na = xe.default.input(
                    Object(i.a)([
                        "\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
                        ";\n  border-style: solid;\n  border: 1px solid ",
                        ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
                        ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
                        ";\n    outline: none;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                ra = xe.default.div(Object(i.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                aa = xe.default.div(Object(i.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]), function (e) {
                    return e.theme.colors.tertiary;
                });
            function ia(e) {
                return e instanceof Ie.j ? e.address : e === Ie.d ? "ETHER" : "";
            }
            var ca = Object(xe.default)(Oe.y)(Object(i.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"])),
                oa = xe.default.div(
                    Object(i.a)([
                        "\n  background-color: ",
                        ";\n  color: ",
                        ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n",
                    ]),
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                );
            function sa(e) {
                e = e.balance;
                return Object(_e.jsx)(ca, { title: e.toExact(), children: e.toSignificant(4) });
            }
            var la = xe.default.div(Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]));
            function ua(e) {
                var t = e.currency;
                if (!(t instanceof an)) return Object(_e.jsx)("span", {});
                e = t.tags;
                if (!e || 0 === e.length) return Object(_e.jsx)("span", {});
                t = e[0];
                return Object(_e.jsxs)(la, {
                    children: [
                        Object(_e.jsx)(Fr, { text: t.description, children: Object(_e.jsx)(oa, { children: t.name }, t.id) }),
                        1 < e.length
                            ? Object(_e.jsx)(Fr, {
                                  text: e
                                      .slice(1)
                                      .map(function (e) {
                                          var t = e.name,
                                              e = e.description;
                                          return "".concat(t, ": ").concat(e);
                                      })
                                      .join("; \n"),
                                  children: Object(_e.jsx)(oa, { children: "..." }),
                              })
                            : null,
                    ],
                });
            }
            function da(e) {
                var t,
                    n,
                    r,
                    a,
                    i = e.currency,
                    c = e.onSelect,
                    o = e.isSelected,
                    s = e.otherSelected,
                    l = e.style,
                    u = Ue(),
                    d = u.account,
                    b = u.chainId,
                    p = ia(i),
                    e = ((a = ln()), i === Ie.d || Boolean(i instanceof Ie.j && (null === (a = a[i.chainId]) || void 0 === a ? void 0 : a[i.address]))),
                    u =
                        ((r = i),
                        !!Hn().find(function (e) {
                            return Object(Ie.o)(r, e);
                        })),
                    a = pr(null != d ? d : void 0, i),
                    j =
                        ((n = Object(we.c)()),
                        Object(ye.useCallback)(
                            function (e, t) {
                                n(Mn({ chainId: e, address: t }));
                            },
                            [n]
                        )),
                    f =
                        ((t = Object(we.c)()),
                        Object(ye.useCallback)(
                            function (e) {
                                t(Bn({ serializedToken: zn(e) }));
                            },
                            [t]
                        ));
                return Object(_e.jsxs)(ta, {
                    style: l,
                    className: "token-item-".concat(p),
                    onClick: function () {
                        return o ? null : c();
                    },
                    disabled: o,
                    selected: s,
                    children: [
                        Object(_e.jsx)(Kr, { currency: i, size: "24px" }),
                        Object(_e.jsxs)(se, {
                            children: [
                                Object(_e.jsx)(Oe.y, { title: i.name, children: i.symbol }),
                                Object(_e.jsxs)(Zr, {
                                    children: [
                                        e || !u || i instanceof an
                                            ? null
                                            : Object(_e.jsxs)(Oe.y, {
                                                  children: [
                                                      "Added by user",
                                                      Object(_e.jsx)(rt, {
                                                          onClick: function (e) {
                                                              e.stopPropagation(), b && i instanceof Ie.j && j(b, i.address);
                                                          },
                                                          children: "(Remove)",
                                                      }),
                                                  ],
                                              }),
                                        e || u || i instanceof an
                                            ? null
                                            : Object(_e.jsxs)(Oe.y, {
                                                  children: [
                                                      "Found by address",
                                                      Object(_e.jsx)(rt, {
                                                          onClick: function (e) {
                                                              e.stopPropagation(), i instanceof Ie.j && f(i);
                                                          },
                                                          children: "(Add)",
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsx)(ua, { currency: i }),
                        Object(_e.jsx)(Le, { style: { justifySelf: "flex-end" }, children: a ? Object(_e.jsx)(sa, { balance: a }) : d ? Object(_e.jsx)(Ot, {}) : null }),
                    ],
                });
            }
            function ba(e) {
                var t = e.height,
                    n = e.currencies,
                    a = e.selectedCurrency,
                    i = e.onCurrencySelect,
                    c = e.otherCurrency,
                    r = e.fixedListRef,
                    o = e.showETH,
                    s = Object(ye.useMemo)(
                        function () {
                            return o ? [Ie.b.ETHER].concat(Object(Z.a)(n)) : Object(Z.a)(n);
                        },
                        [n, o]
                    ),
                    l = Object(ye.useCallback)(
                        function (e) {
                            var t = e.data,
                                n = e.index,
                                e = e.style,
                                r = t[n],
                                t = Boolean(a && Object(Ie.o)(a, r)),
                                n = Boolean(c && Object(Ie.o)(c, r));
                            return Object(_e.jsx)(da, {
                                style: e,
                                currency: r,
                                isSelected: t,
                                onSelect: function () {
                                    return i(r);
                                },
                                otherSelected: n,
                            });
                        },
                        [i, c, a]
                    ),
                    e = Object(ye.useCallback)(function (e, t) {
                        return ia(t[e]);
                    }, []);
                return Object(_e.jsx)($r.a, { height: t, ref: r, width: "100%", itemData: s, itemCount: s.length, itemSize: 56, itemKey: e, children: l });
            }
            function pa(e, t) {
                if (0 === t.length) return e;
                var n = Ge(t);
                if (n)
                    return e.filter(function (e) {
                        return e.address === n;
                    });
                var r = t
                    .toLowerCase()
                    .split(/\s+/)
                    .filter(function (e) {
                        return 0 < e.length;
                    });
                if (0 === r.length) return e;
                function a(e) {
                    var n = e
                        .toLowerCase()
                        .split(/\s+/)
                        .filter(function (e) {
                            return 0 < e.length;
                        });
                    return r.every(function (t) {
                        return (
                            0 === t.length ||
                            n.some(function (e) {
                                return e.startsWith(t) || e.endsWith(t);
                            })
                        );
                    });
                }
                return e.filter(function (e) {
                    var t = e.symbol,
                        e = e.name;
                    return (t && a(t)) || (e && a(e));
                });
            }
            var ja = Object(xe.default)(Le)(
                Object(i.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]),
                function (e) {
                    return e.theme.colors.invertedContrast;
                },
                function (e) {
                    return e.theme.colors.text;
                }
            );
            function fa(e) {
                var t = e.toggleSortOrder,
                    e = e.ascending;
                return Object(_e.jsx)(ja, { onClick: t, children: Object(_e.jsx)(Oe.y, { fontSize: "14px", children: e ? "↑" : "↓" }) });
            }
            function ha(e) {
                var t,
                    n,
                    r =
                        ((t = Ue().account),
                        (n = ar()),
                        null !=
                        (t = ur(
                            null != t ? t : void 0,
                            Object(ye.useMemo)(
                                function () {
                                    return Object.values(null != n ? n : {});
                                },
                                [n]
                            )
                        ))
                            ? t
                            : {}),
                    a = Object(ye.useMemo)(
                        function () {
                            return (
                                (a = null != r ? r : {}),
                                function (e, t) {
                                    var n,
                                        r = ((n = a[e.address]), (r = a[t.address]), n && r ? (n.greaterThan(r) ? -1 : n.equalTo(r) ? 0 : 1) : n && n.greaterThan("0") ? -1 : r && r.greaterThan("0") ? 1 : 0);
                                    return 0 != r ? r : e.symbol && t.symbol ? (e.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1) : e.symbol || t.symbol ? -1 : 0;
                                }
                            );
                            var a;
                        },
                        [r]
                    );
                return Object(ye.useMemo)(
                    function () {
                        return e
                            ? function (e, t) {
                                  return -1 * a(e, t);
                              }
                            : a;
                    },
                    [e, a]
                );
            }
            function ma(e) {
                var t = e.selectedCurrency,
                    n = e.onCurrencySelect,
                    r = e.otherSelectedCurrency,
                    a = e.showCommonBases,
                    i = e.onDismiss,
                    c = e.isOpen,
                    o = (e.onChangeList, Object(mt.b)().t),
                    s = Ue().chainId,
                    l = (Object(ye.useContext)(xe.ThemeContext), Object(ye.useRef)()),
                    u = Object(ye.useState)(""),
                    d = Object(Ce.a)(u, 2),
                    b = d[0],
                    p = d[1],
                    j = Object(ye.useState)(!1),
                    f = Object(Ce.a)(j, 2),
                    e = f[0],
                    h = f[1],
                    m = ar(),
                    y = Ge(b),
                    O = or(b),
                    x = Object(ye.useMemo)(
                        function () {
                            var e = b.toLowerCase().trim();
                            return "" === e || "b" === e || "bn" === e || "bnb" === e;
                        },
                        [b]
                    ),
                    v = ha(e),
                    g = Object(we.d)(function (e) {
                        return e.user.audioPlay;
                    }),
                    C = Object(ye.useMemo)(
                        function () {
                            return y ? (O ? [O] : []) : pa(Object.values(m), b);
                        },
                        [y, O, m, b]
                    ),
                    w = Object(ye.useMemo)(
                        function () {
                            if (O) return [O];
                            var e = C.sort(v),
                                t = b
                                    .toLowerCase()
                                    .split(/\s+/)
                                    .filter(function (e) {
                                        return 0 < e.length;
                                    });
                            return 1 < t.length
                                ? e
                                : [].concat(
                                      Object(Z.a)(O ? [O] : []),
                                      Object(Z.a)(
                                          e.filter(function (e) {
                                              return (null === (e = e.symbol) || void 0 === e ? void 0 : e.toLowerCase()) === t[0];
                                          })
                                      ),
                                      Object(Z.a)(
                                          e.filter(function (e) {
                                              return (null === (e = e.symbol) || void 0 === e ? void 0 : e.toLowerCase()) !== t[0];
                                          })
                                      )
                                  );
                        },
                        [C, b, O, v]
                    ),
                    k = Object(ye.useCallback)(
                        function (e) {
                            var t;
                            n(e), i(), g && (t = document.getElementById("bgMusic")) && t.play();
                        },
                        [i, n, g]
                    );
                Object(ye.useEffect)(
                    function () {
                        c && p("");
                    },
                    [c]
                );
                (u = Object(ye.useRef)()),
                    (d = Object(ye.useCallback)(function (e) {
                        var t = e.target.value,
                            e = Ge(t);
                        p(e || t), null === (t = l.current) || void 0 === t || t.scrollTo(0);
                    }, [])),
                    (j = Object(ye.useCallback)(
                        function (e) {
                            "Enter" === e.key &&
                                ("bnb" === b.toLowerCase().trim() ? k(Ie.d) : 0 < w.length && (((null === (e = w[0].symbol) || void 0 === e ? void 0 : e.toLowerCase()) !== b.trim().toLowerCase() && 1 !== w.length) || k(w[0])));
                        },
                        [w, k, b]
                    )),
                    (T = sn()),
                    (I = Object(we.d)(function (e) {
                        return e.lists.byUrl;
                    })),
                    null == (T = T ? I[T] : void 0) || T.current,
                    null == T || T.pendingUpdate,
                    null == T || T.loadingRequestId,
                    (f = Jt());
                var T, I;
                return Object(_e.jsxs)(se, {
                    style: { width: "100%", flex: "1 1" },
                    children: [
                        Object(_e.jsxs)(ea, {
                            gap: "14px",
                            children: [
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsxs)(Oe.y, { children: [f(82, "Select a token"), Object(_e.jsx)(Vr, { text: f(128, "Find a token by searching for its name or symbol or by pasting its address below.") })] }),
                                        Object(_e.jsx)(Oe.j, { onClick: i }),
                                    ],
                                }),
                                Object(_e.jsx)(na, { type: "text", id: "token-search-input", placeholder: o("tokenSearchPlaceholder"), value: b, ref: u, onChange: d, onKeyDown: j }),
                                a && Object(_e.jsx)(Jr, { chainId: s, onSelect: k, selectedCurrency: t }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsx)(Oe.y, { fontSize: "14px", children: f(126, "Token name") }),
                                        Object(_e.jsx)(fa, {
                                            ascending: e,
                                            toggleSortOrder: function () {
                                                return h(function (e) {
                                                    return !e;
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsx)(ra, {}),
                        Object(_e.jsx)("div", {
                            style: { flex: "1" },
                            children: Object(_e.jsx)(hr.a, {
                                disableWidth: !0,
                                children: function (e) {
                                    e = e.height;
                                    return Object(_e.jsx)(ba, { height: e, showETH: x, currencies: w, onCurrencySelect: k, otherCurrency: r, selectedCurrency: t, fixedListRef: l });
                                },
                            }),
                        }),
                        null,
                    ],
                });
            }
            var ya = n(531),
                D = n(285),
                r = n(286),
                s = n.n(r),
                Oa = "smartswap",
                xa = [Oa],
                va = n(154),
                ga = new s.a({ allErrors: !0 }).compile(D);
            function Ca() {
                return (Ca = Object(ge.a)(
                    ve.a.mark(function e(t, n) {
                        var r, a, i, c, o, s, l, u, d;
                        return ve.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (t === Oa) return e.abrupt("return", va);
                                            e.next = 2;
                                            break;
                                        case 2:
                                            if ((r = Cr(t))) return (e.prev = 4), (e.next = 7), n(r.ensName);
                                            e.next = 25;
                                            break;
                                        case 7:
                                            (i = e.sent), (e.next = 14);
                                            break;
                                        case 10:
                                            throw ((e.prev = 10), (e.t0 = e.catch(4)), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName)));
                                        case 14:
                                            (e.prev = 14), (c = vr(i)), (e.next = 22);
                                            break;
                                        case 18:
                                            throw ((e.prev = 18), (e.t1 = e.catch(14)), console.error("Failed to translate contenthash to URI", i), new Error("Failed to translate contenthash to URI: ".concat(i)));
                                        case 22:
                                            (a = wr("".concat(c).concat(null !== (a = r.ensPath) && void 0 !== a ? a : ""))), (e.next = 26);
                                            break;
                                        case 25:
                                            a = wr(t);
                                        case 26:
                                            o = 0;
                                        case 27:
                                            if (o < a.length) return (d = a[o]), (s = o === a.length - 1), (l = void 0), (e.prev = 31), (e.next = 34), fetch(d);
                                            e.next = 57;
                                            break;
                                        case 34:
                                            (l = e.sent), (e.next = 43);
                                            break;
                                        case 37:
                                            if (((e.prev = 37), (e.t2 = e.catch(31)), console.error("Failed to fetch list", t, e.t2), s)) throw new Error("Failed to download list ".concat(t));
                                            e.next = 42;
                                            break;
                                        case 42:
                                            return e.abrupt("continue", 54);
                                        case 43:
                                            if (l.ok) {
                                                e.next = 47;
                                                break;
                                            }
                                            if (s) throw new Error("Failed to download list ".concat(t));
                                            e.next = 46;
                                            break;
                                        case 46:
                                            return e.abrupt("continue", 54);
                                        case 47:
                                            return (e.next = 49), l.json();
                                        case 49:
                                            if (((u = e.sent), ga(u))) {
                                                e.next = 53;
                                                break;
                                            }
                                            throw (
                                                ((d =
                                                    null !==
                                                        (d =
                                                            null === (d = ga.errors) || void 0 === d
                                                                ? void 0
                                                                : d.reduce(function (e, t) {
                                                                      t = "".concat(t.dataPath, " ").concat(null !== (t = t.message) && void 0 !== t ? t : "");
                                                                      return (0 < e.length ? "".concat(e, "; ") : "").concat(t);
                                                                  }, "")) && void 0 !== d
                                                        ? d
                                                        : "unknown error"),
                                                new Error("Token list failed validation: ".concat(d)))
                                            );
                                        case 53:
                                            return e.abrupt("return", u);
                                        case 54:
                                            o++, (e.next = 27);
                                            break;
                                        case 57:
                                            throw new Error("Unrecognized list URL protocol.");
                                        case 58:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [
                                [4, 10],
                                [14, 18],
                                [31, 37],
                            ]
                        );
                    })
                )).apply(this, arguments);
            }
            var wa = [{ constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "resolver", outputs: [{ name: "resolverAddress", type: "address" }], payable: !1, stateMutability: "view", type: "function" }],
                ka = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                Ta = [
                    {
                        constant: !0,
                        inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
                        name: "contenthash",
                        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                ];
            function Ia() {
                return Ea.apply(this, arguments);
            }
            function Ea() {
                return (Ea = Object(ge.a)(
                    ve.a.mark(function e(r, a) {
                        var i, c;
                        return ve.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (c = new qe.a(ka, wa, a)), (i = Object(kr.namehash)(r)), (e.next = 4), c.resolver(i);
                                    case 4:
                                        return (c = e.sent), e.abrupt("return", ((t = c), (n = a), new qe.a(t, Ta, n).contenthash(i)));
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                            var t, n;
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function Na() {
                var t,
                    e = Ue(),
                    n = e.chainId,
                    r = e.library,
                    a = Object(we.c)(),
                    i = Object(ye.useCallback)(
                        function (e) {
                            if (r && n === Ie.a.MAINNET) return Ia(e, r);
                            if (U === Ie.a.MAINNET) {
                                var t = (c = null !== c && void 0 !== c ? c : new l.a(A.provider));
                                if (t) return Ia(e, t);
                            }
                            throw new Error("Could not construct mainnet ENS resolver");
                        },
                        [n, r]
                    );
                return Object(ye.useCallback)(
                    ((t = Object(ge.a)(
                        ve.a.mark(function e(t) {
                            var n;
                            return ve.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = Object($.f)()),
                                                a(de.pending({ requestId: n, url: t })),
                                                e.abrupt(
                                                    "return",
                                                    (function () {
                                                        return Ca.apply(this, arguments);
                                                    })(t, i)
                                                        .then(function (e) {
                                                            return a(de.fulfilled({ url: t, tokenList: e, requestId: n })), e;
                                                        })
                                                        .catch(function (e) {
                                                            throw (console.error("Failed to get list at url ".concat(t), e), a(de.rejected({ url: t, requestId: n, errorMessage: e.message })), e);
                                                        })
                                                )
                                            );
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    function (e) {
                        return t.apply(this, arguments);
                    }),
                    [a, i]
                );
            }
            function Sa(n, e) {
                var r = Object(ye.useRef)(e);
                Object(ye.useEffect)(
                    function () {
                        r.current = e;
                    },
                    [e]
                ),
                    Object(ye.useEffect)(
                        function () {
                            function e(e) {
                                var t;
                                (null !== (e = null === (t = n.current) || void 0 === t ? void 0 : t.contains(e.target)) && void 0 !== e && e) || (r.current && r.current());
                            }
                            return (
                                document.addEventListener("mousedown", e),
                                function () {
                                    document.removeEventListener("mousedown", e);
                                }
                            );
                        },
                        [n]
                    );
            }
            var Ra = Object(xe.default)(rt)(Object(i.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"]), function (e) {
                    return e.disabled ? "0.4" : "1";
                }),
                Ua = xe.default.div(
                    Object(i.a)([
                        "\n  z-index: 100;\n  visibility: ",
                        ";\n  opacity: ",
                        ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
                        ";\n  border: 1px solid ",
                        ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
                        ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n",
                    ]),
                    function (e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function (e) {
                        return e.show ? 1 : 0;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                Aa = xe.default.div(Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"])),
                Pa = xe.default.div(Object(i.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]));
            function Ba(e) {
                var t = e.listUrl,
                    n = Object(ye.useMemo)(
                        function () {
                            var e;
                            return null === (e = Cr(t)) || void 0 === e ? void 0 : e.ensName;
                        },
                        [t]
                    ),
                    e = Object(ye.useMemo)(
                        function () {
                            if (!n) {
                                var e = t.toLowerCase();
                                if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return t;
                                try {
                                    return new URL(t).host;
                                } catch (e) {
                                    return;
                                }
                            }
                        },
                        [t, n]
                    );
                return Object(_e.jsx)(_e.Fragment, { children: null != n ? n : e });
            }
            var Ma = Object(ye.memo)(function (e) {
                    var t = e.listUrl,
                        n = e.onBack,
                        r = Object(we.d)(function (e) {
                            return e.lists.byUrl;
                        }),
                        a = sn(),
                        i = Object(we.c)(),
                        c = r[t],
                        o = c.current,
                        s = c.pendingUpdate,
                        l = t === a,
                        u = (function (e) {
                            var t = 0 < arguments.length && void 0 !== e && e,
                                e = Object(ye.useState)(t),
                                t = Object(Ce.a)(e, 2),
                                e = t[0],
                                n = t[1];
                            return [
                                e,
                                Object(ye.useCallback)(function () {
                                    return n(function (e) {
                                        return !e;
                                    });
                                }, []),
                            ];
                        })(!1),
                        d = Object(Ce.a)(u, 2),
                        b = d[0],
                        p = d[1],
                        j = Object(ye.useRef)(),
                        f = Object(ye.useState)(),
                        h = Object(Ce.a)(f, 2),
                        m = h[0],
                        e = h[1],
                        c = Object(ye.useState)(),
                        a = Object(Ce.a)(c, 2),
                        u = a[0],
                        d = a[1],
                        f = Object(Ar.a)(m, u, { placement: "auto", strategy: "fixed", modifiers: [{ name: "offset", options: { offset: [8, 8] } }] }),
                        h = f.styles,
                        c = f.attributes;
                    Sa(j, b ? p : void 0);
                    (a = Object(ye.useCallback)(
                        function () {
                            l || (i(fe(t)), n());
                        },
                        [i, l, t, n]
                    )),
                        (m = Object(ye.useCallback)(
                            function () {
                                s && i(be(t));
                            },
                            [i, t, s]
                        )),
                        (u = Object(ye.useCallback)(
                            function () {
                                "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && i(je(t));
                            },
                            [i, t]
                        )),
                        (f = Jt());
                    return o
                        ? Object(_e.jsxs)(
                              De,
                              {
                                  align: "center",
                                  padding: "16px",
                                  id: "list-row-".concat(t.replace(/\./g, "-")),
                                  children: [
                                      o.logoURI
                                          ? Object(_e.jsx)(Ur, { style: { marginRight: "1rem" }, logoURI: o.logoURI, alt: "".concat(o.name, " list logo") })
                                          : Object(_e.jsx)("div", { style: { width: "24px", height: "24px", marginRight: "1rem" } }),
                                      Object(_e.jsxs)(se, {
                                          style: { flex: "1" },
                                          children: [
                                              Object(_e.jsx)(De, { children: Object(_e.jsx)(Oe.y, { bold: l, fontSize: "16px", style: { overflow: "hidden", textOverflow: "ellipsis" }, children: o.name }) }),
                                              Object(_e.jsx)(De, { style: { marginTop: "4px" }, children: Object(_e.jsx)(Pa, { title: t, children: Object(_e.jsx)(Ba, { listUrl: t }) }) }),
                                          ],
                                      }),
                                      Object(_e.jsxs)(Aa, {
                                          ref: j,
                                          children: [
                                              Object(_e.jsx)("div", {
                                                  style: { display: "inline-block" },
                                                  ref: e,
                                                  children: Object(_e.jsx)(Oe.c, { style: { width: "32px", marginRight: "8px" }, onClick: p, variant: "secondary", children: Object(_e.jsx)(Oe.i, {}) }),
                                              }),
                                              b &&
                                                  Object(_e.jsxs)(
                                                      Ua,
                                                      Object(Te.a)(
                                                          Object(Te.a)({ show: !0, ref: d, style: h.popper }, c.popper),
                                                          {},
                                                          {
                                                              children: [
                                                                  Object(_e.jsx)("div", { children: o && he(o.version) }),
                                                                  Object(_e.jsx)(aa, {}),
                                                                  Object(_e.jsx)(ct, { href: "https://tokenlists.org/token-list?url=".concat(t), children: f(1206, "View list") }),
                                                                  Object(_e.jsx)(Ra, { onClick: u, disabled: 1 === Object.keys(r).length, children: "Remove list" }),
                                                                  s && Object(_e.jsx)(Ra, { onClick: m, children: "Update list" }),
                                                              ],
                                                          }
                                                      )
                                                  ),
                                          ],
                                      }),
                                      l
                                          ? Object(_e.jsx)(Oe.c, { disabled: !0, style: { width: "5rem", minWidth: "5rem" }, children: "Selected" })
                                          : Object(_e.jsx)(_e.Fragment, { children: Object(_e.jsx)(Oe.c, { className: "select-button", style: { width: "5rem", minWidth: "4.5rem" }, onClick: a, children: "Select" }) }),
                                  ],
                              },
                              t
                          )
                        : null;
                }),
                La = xe.default.div(Object(i.a)(["\n  flex: 1;\n  overflow: auto;\n"]));
            function Da(e) {
                var t = e.onDismiss,
                    n = e.onBack,
                    r = Object(ye.useState)(""),
                    a = Object(Ce.a)(r, 2),
                    i = a[0],
                    c = a[1],
                    o = Object(we.c)(),
                    s = Object(we.d)(function (e) {
                        return e.lists.byUrl;
                    }),
                    l = Boolean(null === (f = s[i]) || void 0 === f ? void 0 : f.loadingRequestId),
                    u = Object(ye.useState)(null),
                    e = Object(Ce.a)(u, 2),
                    r = e[0],
                    d = e[1],
                    a = Object(ye.useCallback)(function (e) {
                        c(e.target.value), d(null);
                    }, []),
                    b = Na(),
                    p = Object(ye.useCallback)(
                        function () {
                            l ||
                                (d(null),
                                b(i)
                                    .then(function () {
                                        c("");
                                    })
                                    .catch(function (e) {
                                        d(e.message), o(je(i));
                                    }));
                        },
                        [l, o, b, i]
                    ),
                    j = Object(ye.useMemo)(
                        function () {
                            return 0 < wr(i).length || Boolean(Cr(i));
                        },
                        [i]
                    ),
                    f = Object(ye.useCallback)(
                        function (e) {
                            j && "Enter" === e.key && p();
                        },
                        [p, j]
                    ),
                    u = Object(ye.useMemo)(
                        function () {
                            return Object.keys(s)
                                .filter(function (e) {
                                    return Boolean(s[e].current);
                                })
                                .sort(function (e, t) {
                                    (e = s[e].current), (t = s[t].current);
                                    return e && t ? (e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() === t.name.toLowerCase() ? 0 : 1) : e ? -1 : t ? 1 : 0;
                                });
                        },
                        [s]
                    ),
                    e = Jt();
                return Object(_e.jsxs)(se, {
                    style: { width: "100%", flex: "1 1" },
                    children: [
                        Object(_e.jsx)(ea, {
                            children: Object(_e.jsxs)(Pe, {
                                children: [
                                    Object(_e.jsx)("div", { children: Object(_e.jsx)(ya.a, { style: { cursor: "pointer" }, onClick: n }) }),
                                    Object(_e.jsx)(Oe.y, { fontSize: "20px", children: e(1208, "Manage Lists") }),
                                    Object(_e.jsx)(Oe.j, { onClick: t }),
                                ],
                            }),
                        }),
                        Object(_e.jsx)(ra, {}),
                        Object(_e.jsxs)(ea, {
                            gap: "14px",
                            children: [
                                Object(_e.jsxs)(Oe.y, {
                                    bold: !0,
                                    children: [
                                        "Add a list",
                                        " ",
                                        Object(_e.jsx)(Vr, {
                                            text: e(
                                                999,
                                                "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens."
                                            ),
                                        }),
                                    ],
                                }),
                                Object(_e.jsxs)(De, {
                                    children: [
                                        Object(_e.jsx)(na, {
                                            type: "text",
                                            id: "list-add-input",
                                            placeholder: "https:// or ipfs:// or ENS name",
                                            value: i,
                                            onChange: a,
                                            onKeyDown: f,
                                            style: { height: "2.75rem", borderRadius: 12, padding: "12px" },
                                        }),
                                        Object(_e.jsx)(Oe.c, { onClick: p, style: { maxWidth: "4em", marginLeft: "1em" }, disabled: !j, children: "Add" }),
                                    ],
                                }),
                                r ? Object(_e.jsx)(Oe.y, { color: "failure", title: r, style: { textOverflow: "ellipsis", overflow: "hidden" }, children: r }) : null,
                            ],
                        }),
                        Object(_e.jsx)(ra, {}),
                        Object(_e.jsx)(La, {
                            children: u.map(function (e) {
                                return Object(_e.jsx)(Ma, { listUrl: e, onBack: n }, e);
                            }),
                        }),
                        Object(_e.jsx)(ra, {}),
                        Object(_e.jsx)("div", { style: { padding: "16px", textAlign: "center" }, children: Object(_e.jsx)(ct, { href: "https://tokenlists.org", children: "Browse lists" }) }),
                    ],
                });
            }
            function _a(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    r = e.onCurrencySelect,
                    a = e.selectedCurrency,
                    i = e.otherSelectedCurrency,
                    c = Object(ye.useState)(!1),
                    o = Object(Ce.a)(c, 2),
                    s = o[0],
                    l = o[1],
                    u = jr(t);
                Object(ye.useEffect)(
                    function () {
                        t && !u && l(!1);
                    },
                    [t, u]
                );
                var d = Object(ye.useCallback)(
                        function (e) {
                            r(e), n();
                        },
                        [n, r]
                    ),
                    e = Object(ye.useCallback)(function () {
                        l(!0);
                    }, []),
                    c = Object(ye.useCallback)(function () {
                        l(!1);
                    }, []),
                    o = !sn();
                return Object(_e.jsx)(Ut, {
                    isOpen: t,
                    onDismiss: n,
                    maxHeight: 90,
                    minHeight: s ? 40 : o ? 0 : 80,
                    children: s ? Object(_e.jsx)(Da, { onDismiss: n, onBack: c }) : Object(_e.jsx)(ma, { isOpen: t, onDismiss: n, onCurrencySelect: d, onChangeList: e, selectedCurrency: a, otherSelectedCurrency: i, showCommonBases: !1 }),
                });
            }
            var Ya = xe.default.div(Object(i.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]), function (e) {
                    var t = e.sizeraw;
                    return e.margin && "".concat((t / 3 + 8).toString(), "px");
                }),
                za = Object(xe.default)(Kr)(Object(i.a)(["\n  z-index: 2;\n"])),
                Fa = Object(xe.default)(Kr)(Object(i.a)(["\n  position: absolute;\n  left: ", ";\n"]), function (e) {
                    e = e.sizeraw;
                    return "".concat((e / 2).toString(), "px");
                });
            function qa(e) {
                var t = e.currency0,
                    n = e.currency1,
                    r = e.size,
                    r = void 0 === r ? 16 : r,
                    e = e.margin,
                    e = void 0 !== e && e;
                return Object(_e.jsxs)(Ya, {
                    sizeraw: r,
                    margin: e,
                    children: [t && Object(_e.jsx)(za, { currency: t, size: "".concat(r.toString(), "px") }), n && Object(_e.jsx)(Fa, { currency: n, size: "".concat(r.toString(), "px"), sizeraw: r })],
                });
            }
            var Va = xe.default.input(
                    Object(i.a)([
                        "\n  color: ",
                        ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",
                        ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                        ";\n  }\n",
                    ]),
                    function (e) {
                        var t = e.error,
                            e = e.theme;
                        return t ? e.colors.failure : e.colors.text;
                    },
                    function (e) {
                        e = e.align;
                        return e && e;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                Wa = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                Ha = p.a.memo(function (e) {
                    var t = e.value,
                        n = e.onUserInput,
                        r = e.placeholder,
                        e = Object(nt.a)(e, ["value", "onUserInput", "placeholder"]);
                    return Object(_e.jsx)(
                        Va,
                        Object(Te.a)(
                            Object(Te.a)({}, e),
                            {},
                            {
                                value: t,
                                onChange: function (e) {
                                    ("" !== (e = e.target.value.replace(/,/g, ".")) && !Wa.test(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) || n(e);
                                },
                                inputMode: "decimal",
                                title: "Token Amount",
                                autoComplete: "off",
                                autoCorrect: "off",
                                type: "text",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                placeholder: r || "0.0",
                                minLength: 1,
                                maxLength: 79,
                                spellCheck: "false",
                            }
                        )
                    );
                }),
                Qa = xe.default.div(Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"]), function (e) {
                    return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem";
                }),
                Ga = xe.default.button(
                    Object(i.a)([
                        "\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",
                        ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ",
                        ";\n  }\n",
                    ]),
                    function (e) {
                        var t = e.selected,
                            e = e.theme;
                        return t ? e.colors.text : "#FFFFFF";
                    },
                    function (e) {
                        e = e.theme;
                        return Object(Et.a)(0.05, e.colors.input);
                    }
                ),
                Ka = xe.default.div(
                    Object(i.a)([
                        "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",
                        ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
                        ";\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        e = e.theme;
                        return Object(Et.a)(0.2, e.colors.textSubtle);
                    }
                ),
                Xa = xe.default.span(Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])),
                Ja = xe.default.div(
                    Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"]),
                    function (e) {
                        return e.hideInput ? "8px" : "20px";
                    },
                    function (e) {
                        return e.theme.colors.background;
                    }
                ),
                $a = xe.default.div(
                    Object(i.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]),
                    function (e) {
                        return e.theme.colors.input;
                    },
                    function (e) {
                        return e.theme.shadows.inset;
                    }
                );
            function Za(e) {
                var t = e.value,
                    n = e.onUserInput,
                    r = e.onMax,
                    a = e.showMaxButton,
                    i = e.label,
                    c = e.onCurrencySelect,
                    o = e.currency,
                    s = e.disableCurrencySelect,
                    l = void 0 !== s && s,
                    u = e.hideBalance,
                    d = void 0 !== u && u,
                    b = e.pair,
                    p = void 0 === b ? null : b,
                    j = e.hideInput,
                    f = void 0 !== j && j,
                    h = e.otherCurrency,
                    m = e.id,
                    y = e.showCommonBases,
                    O = Object(ye.useState)(!1),
                    s = Object(Ce.a)(O, 2),
                    u = s[0],
                    x = s[1],
                    b = Ue().account,
                    j = pr(null != b ? b : void 0, null != o ? o : void 0),
                    e = Jt(),
                    O = i || e(132, "Input"),
                    s = Object(ye.useCallback)(
                        function () {
                            x(!1);
                        },
                        [x]
                    );
                return Object(_e.jsxs)(Ja, {
                    id: m,
                    children: [
                        Object(_e.jsxs)($a, {
                            hideInput: f,
                            children: [
                                !f &&
                                    Object(_e.jsx)(Ka, {
                                        children: Object(_e.jsxs)(Pe, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, { fontSize: "14px", children: O }),
                                                b &&
                                                    Object(_e.jsx)(Oe.y, {
                                                        onClick: r,
                                                        fontSize: "14px",
                                                        style: { display: "inline", cursor: "pointer" },
                                                        children: !d && o && j ? "Balance: ".concat(null == j ? void 0 : j.toSignificant(6)) : " -",
                                                    }),
                                            ],
                                        }),
                                    }),
                                Object(_e.jsxs)(Qa, {
                                    style: f ? { padding: "0", borderRadius: "8px" } : {},
                                    selected: l,
                                    children: [
                                        !f &&
                                            Object(_e.jsxs)(_e.Fragment, {
                                                children: [
                                                    Object(_e.jsx)(Ha, {
                                                        className: "token-amount-input",
                                                        value: t,
                                                        onUserInput: function (e) {
                                                            n(e);
                                                        },
                                                    }),
                                                    b && o && a && "To" !== i && Object(_e.jsx)(Oe.c, { onClick: r, scale: "sm", variant: "text", children: "MAX" }),
                                                ],
                                            }),
                                        Object(_e.jsx)(Ga, {
                                            selected: !!o,
                                            className: "open-currency-select-button",
                                            onClick: function () {
                                                l || x(!0);
                                            },
                                            children: Object(_e.jsxs)(Xa, {
                                                children: [
                                                    p ? Object(_e.jsx)(qa, { currency0: p.token0, currency1: p.token1, size: 16, margin: !0 }) : o ? Object(_e.jsx)(Kr, { currency: o, size: "24px", style: { marginRight: "8px" } }) : null,
                                                    p
                                                        ? Object(_e.jsxs)(Oe.y, { children: [null == p ? void 0 : p.token0.symbol, ":", null == p ? void 0 : p.token1.symbol] })
                                                        : Object(_e.jsx)(Oe.y, {
                                                              children:
                                                                  (o && o.symbol && 20 < o.symbol.length
                                                                      ? "".concat(o.symbol.slice(0, 4), "...").concat(o.symbol.slice(o.symbol.length - 5, o.symbol.length))
                                                                      : null == o
                                                                      ? void 0
                                                                      : o.symbol) || e(1196, "Select a currency"),
                                                          }),
                                                    !l && Object(_e.jsx)(Oe.i, {}),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        !l && c && Object(_e.jsx)(_a, { isOpen: u, onDismiss: s, onCurrencySelect: c, selectedCurrency: o, otherSelectedCurrency: h, showCommonBases: y }),
                    ],
                });
            }
            var ei = xe.default.div(Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"])),
                ti = xe.default.div(Object(i.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"])),
                ni = Object(xe.default)(ya.a)(Object(i.a)(["\n  color: ", ";\n"]), function (e) {
                    return e.theme.colors.text;
                });
            function ri() {
                var e = Jt();
                return Object(_e.jsx)(ei, {
                    children: Object(_e.jsxs)(Pe, {
                        style: { padding: "1rem" },
                        children: [
                            Object(_e.jsx)(h.b, { to: "/pool", children: Object(_e.jsx)(ni, {}) }),
                            Object(_e.jsx)(ti, { children: "Import Pool" }),
                            Object(_e.jsx)(Vr, { text: e(256, "Use this tool to find pairs that do not automatically appear in the interface.") }),
                        ],
                    }),
                });
            }
            function ai(e) {
                var t = e.adding,
                    e = Jt();
                return Object(_e.jsx)(ei, {
                    children: Object(_e.jsxs)(Pe, {
                        style: { padding: "1rem" },
                        children: [
                            Object(_e.jsx)(h.b, { to: "/pool", children: Object(_e.jsx)(ni, {}) }),
                            Object(_e.jsxs)(ti, { children: [t ? e(258, "Add") : e(260, "Remove"), " Liquidity"] }),
                            Object(_e.jsx)(Vr, {
                                text: t
                                    ? e(264, "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.")
                                    : e(266, "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."),
                            }),
                        ],
                    }),
                });
            }
            var ii,
                ci = n(532),
                oi = n(533);
            function si(e) {
                var t,
                    n = null === (t = En(er(null == e ? void 0 : e.address, !1), "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
                return e && n ? new Ie.k(e, n.toString()) : void 0;
            }
            function li(e) {
                if (e === Ie.d) return "BNB";
                if (e instanceof Ie.j) return e.address;
                throw new Error("invalid currency");
            }
            function ui(e, t) {
                return t && e === Ie.d ? Ie.n[t] : e instanceof Ie.j ? e : void 0;
            }
            function di(e, t) {
                t = e && t ? ui(e.currency, t) : void 0;
                return t && e ? new Ie.k(t, e.raw) : void 0;
            }
            function bi(e) {
                return e.equals(Ie.n[e.chainId]) ? Ie.d : e;
            }
            var pi = xe.default.div(Object(i.a)(["\n  position: relative;\n"])),
                ji = xe.default.div(Object(i.a)(["\n  padding: 2px;\n\n  ", "\n"]), function (e) {
                    return e.clickable ? Object(xe.css)((ii = ii || Object(i.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null;
                }),
                fi = xe.default.div(Object(i.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"]), function (e) {
                    return e.theme.colors.tertiary;
                }),
                hi = xe.default.div(Object(i.a)(["\n  margin-top: 1rem;\n"])),
                mi = Object(xe.default)(Oe.y)(Object(i.a)(["\n  color: ", ";\n"]), function (e) {
                    var t = e.theme,
                        e = e.severity;
                    return 3 === e || 4 === e ? t.colors.failure : 2 === e ? t.colors.binance : 1 === e ? t.colors.text : t.colors.success;
                }),
                yi = xe.default.button(
                    Object(i.a)([
                        "\n  height: 22px;\n  width: 22px;\n  background-color: ",
                        ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
                        ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
                        ";\n  }\n  :focus {\n    background-color: ",
                        ";\n    outline: none;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    }
                ),
                Oi = xe.default.span(
                    Object(i.a)([
                        "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                    ])
                ),
                xi = xe.default.div(
                    Object(i.a)([
                        "\n  background-color: ",
                        ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
                        ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
                    ]),
                    function (e) {
                        e = e.theme;
                        return Object(Et.b)(0.9, e.colors.failure);
                    },
                    function (e) {
                        return e.theme.colors.failure;
                    }
                ),
                vi = xe.default.div(
                    Object(i.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]),
                    function (e) {
                        e = e.theme;
                        return Object(Et.b)(0.9, e.colors.failure);
                    }
                );
            function gi(e) {
                e = e.error;
                return Object(_e.jsxs)(xi, { children: [Object(_e.jsx)(vi, { children: Object(_e.jsx)(Ht.a, { size: 24 }) }), Object(_e.jsx)("p", { children: e })] });
            }
            var Ci = Object(xe.default)(Ae)(
                    Object(i.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]),
                    function (e) {
                        e = e.theme;
                        return Object(Et.b)(0.9, e.colors.primary);
                    },
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                wi = Object(xe.default)(Pe)(Object(i.a)(["\n  height: 24px;\n"])),
                ki = Object(xe.default)(kt)(
                    Object(i.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        e = e.theme;
                        return Object(Et.a)(0.06, e.colors.invertedContrast);
                    }
                );
            function Ti(e) {
                var t = e.pair,
                    n = e.showUnwrapped,
                    r = void 0 !== n && n,
                    a = Ue().account,
                    e = r ? t.token0 : bi(t.token0),
                    n = r ? t.token1 : bi(t.token1),
                    r = Object(ye.useState)(!1),
                    r = Object(Ce.a)(r, 2),
                    i = r[0],
                    c = r[1],
                    r = dr(null != a ? a : void 0, t.liquidityToken),
                    a = si(t.liquidityToken),
                    t = t && a && r && Ie.e.greaterThanOrEqual(a.raw, r.raw) ? [t.getLiquidityValue(t.token0, a, r, !1), t.getLiquidityValue(t.token1, a, r, !1)] : [void 0, void 0],
                    a = Object(Ce.a)(t, 2),
                    t = a[0],
                    a = a[1];
                return Object(_e.jsx)(_e.Fragment, {
                    children:
                        r &&
                        Object(_e.jsx)(Oe.f, {
                            children: Object(_e.jsx)(Oe.g, {
                                children: Object(_e.jsxs)(Ae, {
                                    gap: "12px",
                                    children: [
                                        Object(_e.jsx)(wi, {
                                            children: Object(_e.jsx)(Le, {
                                                children: Object(_e.jsx)(Oe.y, { style: { textTransform: "uppercase", fontWeight: 600 }, fontSize: "14px", color: "textSubtle", children: "LP Tokens in your Wallet" }),
                                            }),
                                        }),
                                        Object(_e.jsxs)(wi, {
                                            onClick: function () {
                                                return c(!i);
                                            },
                                            children: [
                                                Object(_e.jsxs)(Le, { children: [Object(_e.jsx)(qa, { currency0: e, currency1: n, margin: !0, size: 20 }), Object(_e.jsxs)(Oe.y, { fontSize: "14px", children: [e.symbol, "/", n.symbol] })] }),
                                                Object(_e.jsx)(Le, { children: Object(_e.jsx)(Oe.y, { fontSize: "14px", children: r ? r.toSignificant(4) : "-" }) }),
                                            ],
                                        }),
                                        Object(_e.jsxs)(Ae, {
                                            gap: "4px",
                                            children: [
                                                Object(_e.jsxs)(wi, {
                                                    children: [
                                                        Object(_e.jsxs)(Oe.y, { fontSize: "14px", children: [e.symbol, ":"] }),
                                                        t ? Object(_e.jsx)(Le, { children: Object(_e.jsx)(Oe.y, { ml: "6px", fontSize: "14px", children: null == t ? void 0 : t.toSignificant(6) }) }) : "-",
                                                    ],
                                                }),
                                                Object(_e.jsxs)(wi, {
                                                    children: [
                                                        Object(_e.jsxs)(Oe.y, { fontSize: "14px", children: [n.symbol, ":"] }),
                                                        a ? Object(_e.jsx)(Le, { children: Object(_e.jsx)(Oe.y, { ml: "6px", fontSize: "14px", children: null == a ? void 0 : a.toSignificant(6) }) }) : "-",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                });
            }
            function Ii(e) {
                var t = e.pair,
                    n = Ue().account,
                    r = bi(t.token0),
                    a = bi(t.token1),
                    i = Object(ye.useState)(!1),
                    e = Object(Ce.a)(i, 2),
                    c = e[0],
                    o = e[1],
                    i = dr(null != n ? n : void 0, t.liquidityToken),
                    e = si(t.liquidityToken),
                    n = i && e && Ie.e.greaterThanOrEqual(e.raw, i.raw) ? new Ie.g(i.raw, e.raw) : void 0,
                    t = t && e && i && Ie.e.greaterThanOrEqual(e.raw, i.raw) ? [t.getLiquidityValue(t.token0, e, i, !1), t.getLiquidityValue(t.token1, e, i, !1)] : [void 0, void 0],
                    e = Object(Ce.a)(t, 2),
                    t = e[0],
                    e = e[1];
                return Object(_e.jsx)(ki, {
                    children: Object(_e.jsxs)(Ae, {
                        gap: "12px",
                        children: [
                            Object(_e.jsxs)(wi, {
                                onClick: function () {
                                    return o(!c);
                                },
                                style: { cursor: "pointer" },
                                children: [
                                    Object(_e.jsxs)(Le, {
                                        children: [
                                            Object(_e.jsx)(qa, { currency0: r, currency1: a, margin: !0, size: 20 }),
                                            Object(_e.jsx)(Oe.y, { children: r && a ? "".concat(r.symbol, "/").concat(a.symbol) : Object(_e.jsx)(Oi, { children: "Loading" }) }),
                                        ],
                                    }),
                                    Object(_e.jsx)(Le, { children: c ? Object(_e.jsx)(ci.a, { size: "20", style: { marginLeft: "10px" } }) : Object(_e.jsx)(oi.a, { size: "20", style: { marginLeft: "10px" } }) }),
                                ],
                            }),
                            c &&
                                Object(_e.jsxs)(Ae, {
                                    gap: "8px",
                                    children: [
                                        Object(_e.jsxs)(wi, {
                                            children: [
                                                Object(_e.jsx)(Le, { children: Object(_e.jsxs)(Oe.y, { children: ["Pooled ", r.symbol, ":"] }) }),
                                                t
                                                    ? Object(_e.jsxs)(Le, {
                                                          children: [Object(_e.jsx)(Oe.y, { ml: "6px", children: null == t ? void 0 : t.toSignificant(6) }), Object(_e.jsx)(Kr, { size: "20px", style: { marginLeft: "8px" }, currency: r })],
                                                      })
                                                    : "-",
                                            ],
                                        }),
                                        Object(_e.jsxs)(wi, {
                                            children: [
                                                Object(_e.jsx)(Le, { children: Object(_e.jsxs)(Oe.y, { children: ["Pooled ", a.symbol, ":"] }) }),
                                                e
                                                    ? Object(_e.jsxs)(Le, {
                                                          children: [Object(_e.jsx)(Oe.y, { ml: "6px", children: null == e ? void 0 : e.toSignificant(6) }), Object(_e.jsx)(Kr, { size: "20px", style: { marginLeft: "8px" }, currency: a })],
                                                      })
                                                    : "-",
                                            ],
                                        }),
                                        Object(_e.jsxs)(wi, { children: [Object(_e.jsx)(Oe.y, { children: "Your pool tokens:" }), Object(_e.jsx)(Oe.y, { children: i ? i.toSignificant(4) : "-" })] }),
                                        Object(_e.jsxs)(wi, { children: [Object(_e.jsx)(Oe.y, { children: "Your pool share:" }), Object(_e.jsx)(Oe.y, { children: n ? "".concat(n.toFixed(2), "%") : "-" })] }),
                                        Object(_e.jsxs)(Pe, {
                                            marginTop: "10px",
                                            children: [
                                                Object(_e.jsx)(Oe.c, { as: h.b, to: "/add/".concat(li(r), "/").concat(li(a)), style: { width: "48%" }, children: "Add" }),
                                                Object(_e.jsx)(Oe.c, { as: h.b, style: { width: "48%" }, to: "/remove/".concat(li(r), "/").concat(li(a)), children: "Remove" }),
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                });
            }
            var Ei,
                Ni = new M.b(Qn.abi);
            function Si(e) {
                var n = Ue().chainId,
                    a = Object(ye.useMemo)(
                        function () {
                            return e.map(function (e) {
                                var t = Object(Ce.a)(e, 2),
                                    e = t[0],
                                    t = t[1];
                                return [ui(e, n), ui(t, n)];
                            });
                        },
                        [n, e]
                    ),
                    t = In(
                        Object(ye.useMemo)(
                            function () {
                                return a.map(function (e) {
                                    var t = Object(Ce.a)(e, 2),
                                        e = t[0],
                                        t = t[1];
                                    return e && t && !e.equals(t) ? Ie.f.getAddress(e, t) : void 0;
                                });
                            },
                            [a]
                        ),
                        Ni,
                        "getReserves"
                    );
                return Object(ye.useMemo)(
                    function () {
                        return t.map(function (e, t) {
                            var n = e.result,
                                r = e.loading,
                                e = a[t][0],
                                t = a[t][1];
                            if (r) return [Ei.LOADING, null];
                            if (!e || !t || e.equals(t)) return [Ei.INVALID, null];
                            if (!n) return [Ei.NOT_EXISTS, null];
                            (r = n.reserve0), (n = n.reserve1), (t = e.sortsBefore(t) ? [e, t] : [t, e]), (e = Object(Ce.a)(t, 2)), (t = e[0]), (e = e[1]);
                            return [Ei.EXISTS, new Ie.f(new Ie.k(t, r.toString()), new Ie.k(e, n.toString()))];
                        });
                    },
                    [t, a]
                );
            }
            function Ri(e, t) {
                return Si([[e, t]])[0];
            }
            ((S = Ei = Ei || {})[(S.LOADING = 0)] = "LOADING"), (S[(S.NOT_EXISTS = 1)] = "NOT_EXISTS"), (S[(S.EXISTS = 2)] = "EXISTS"), (S[(S.INVALID = 3)] = "INVALID");
            var Ui,
                Ai = n(524);
            ((t = Ui = Ui || {}).INPUT = "INPUT"), (t.OUTPUT = "OUTPUT");
            var Pi = Object($.b)("swap/selectCurrency"),
                Bi = Object($.b)("swap/switchCurrencies"),
                Mi = Object($.b)("swap/typeInput"),
                Li = Object($.b)("swap/replaceSwapState"),
                Di = Object($.b)("swap/setRecipient"),
                _i = Object($.b)("transactions/addTransaction"),
                Yi = Object($.b)("transactions/clearAllTransactions"),
                zi = Object($.b)("transactions/finalizeTransaction"),
                Fi = Object($.b)("transactions/checkedTransaction");
            function qi() {
                var e = Ue(),
                    r = e.chainId,
                    a = e.account,
                    i = Object(we.c)();
                return Object(ye.useCallback)(
                    function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.summary,
                            t = t.approval;
                        if (a && r) {
                            e = e.hash;
                            if (!e) throw Error("No transaction hash found.");
                            i(_i({ hash: e, from: a, chainId: r, approval: t, summary: n }));
                        }
                    },
                    [i, r, a]
                );
            }
            function Vi() {
                var e,
                    t = Ue().chainId,
                    n = Object(we.d)(function (e) {
                        return e.transactions;
                    });
                return t && null !== (e = n[t]) && void 0 !== e ? e : {};
            }
            function Wi(e) {
                return new Date().getTime() - e.addedTime < 864e5;
            }
            var Hi,
                Qi,
                R = new Ie.g(Ie.e.BigInt(20), Ie.e.BigInt(1e4)),
                Gi = new Ie.g(Ie.e.BigInt(1e4), Ie.e.BigInt(1e4)),
                Ki = Gi.subtract(R);
            function Xi(e) {
                var t = e
                        ? Gi.subtract(
                              e.route.pairs.reduce(function (e) {
                                  return e.multiply(Ki);
                              }, Gi)
                          )
                        : void 0,
                    n = e && t ? e.priceImpact.subtract(t) : void 0;
                return {
                    priceImpactWithoutFee: n ? new Ie.g(null == n ? void 0 : n.numerator, null == n ? void 0 : n.denominator) : void 0,
                    realizedLPFee: t && e && (e.inputAmount instanceof Ie.k ? new Ie.k(e.inputAmount.token, t.multiply(e.inputAmount.raw).quotient) : Ie.c.ether(t.multiply(e.inputAmount.raw).quotient)),
                };
            }
            function Ji(e, t) {
                var n = new Ie.g(Ie.e.BigInt(Math.floor(t)), Ie.e.BigInt(1e4)),
                    t = {};
                return Object(ke.a)(t, Ui.INPUT, null == e ? void 0 : e.maximumAmountIn(n)), Object(ke.a)(t, Ui.OUTPUT, null == e ? void 0 : e.minimumAmountOut(n)), t;
            }
            function $i(e) {
                return null != e && e.lessThan(X) ? (null != e && e.lessThan(Se) ? (null != e && e.lessThan(K) ? (null != e && e.lessThan(G) ? 0 : 1) : 2) : 3) : 4;
            }
            function Zi(r, a) {
                var n,
                    i,
                    c,
                    e,
                    t,
                    o,
                    s,
                    l = Ue().account,
                    u = r instanceof Ie.k ? r.token : void 0,
                    d =
                        ((t = null != l ? l : void 0),
                        (o = a),
                        (s = En(
                            er(null == (e = u) ? void 0 : e.address, !1),
                            "allowance",
                            Object(ye.useMemo)(
                                function () {
                                    return [t, o];
                                },
                                [t, o]
                            )
                        ).result),
                        Object(ye.useMemo)(
                            function () {
                                return e && s ? new Ie.k(e, s.toString()) : void 0;
                            },
                            [e, s]
                        )),
                    b =
                        ((n = null == u ? void 0 : u.address),
                        (i = a),
                        (c = Vi()),
                        Object(ye.useMemo)(
                            function () {
                                return (
                                    "string" == typeof n &&
                                    "string" == typeof i &&
                                    Object.keys(c).some(function (e) {
                                        var t = c[e];
                                        if (!t) return !1;
                                        if (t.receipt) return !1;
                                        e = t.approval;
                                        return !!e && e.spender === i && e.tokenAddress === n && Wi(t);
                                    })
                                );
                            },
                            [c, i, n]
                        )),
                    p = Object(ye.useMemo)(
                        function () {
                            return r && a ? (r.currency === Ie.d ? Hi.APPROVED : d ? (d.lessThan(r) ? (b ? Hi.PENDING : Hi.NOT_APPROVED) : Hi.APPROVED) : Hi.UNKNOWN) : Hi.UNKNOWN;
                        },
                        [r, d, b, a]
                    ),
                    j = er(null == u ? void 0 : u.address),
                    f = qi(),
                    l = Object(ye.useCallback)(
                        Object(ge.a)(
                            ve.a.mark(function e() {
                                var t, n;
                                return ve.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (p !== Hi.NOT_APPROVED) return console.error("approve was called unnecessarily"), e.abrupt("return");
                                                e.next = 3;
                                                break;
                                            case 3:
                                                if (u) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return console.error("no token"), e.abrupt("return");
                                            case 6:
                                                if (j) {
                                                    e.next = 9;
                                                    break;
                                                }
                                                return console.error("tokenContract is null"), e.abrupt("return");
                                            case 9:
                                                if (r) {
                                                    e.next = 12;
                                                    break;
                                                }
                                                return console.error("missing amount to approve"), e.abrupt("return");
                                            case 12:
                                                if (a) {
                                                    e.next = 15;
                                                    break;
                                                }
                                                return console.error("no spender"), e.abrupt("return");
                                            case 15:
                                                return (
                                                    (t = !1),
                                                    (e.next = 18),
                                                    j.estimateGas.approve(a, Ai.a).catch(function () {
                                                        return (t = !0), j.estimateGas.approve(a, r.raw.toString());
                                                    })
                                                );
                                            case 18:
                                                return (
                                                    (n = e.sent),
                                                    e.abrupt(
                                                        "return",
                                                        j
                                                            .approve(a, t ? r.raw.toString() : Ai.a, { gasLimit: $e(n) })
                                                            .then(function (e) {
                                                                f(e, { summary: "Approve ".concat(r.currency.symbol), approval: { tokenAddress: u.address, spender: a } });
                                                            })
                                                            .catch(function (e) {
                                                                throw (console.error("Failed to approve token", e), e);
                                                            })
                                                    )
                                                );
                                            case 20:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        ),
                        [p, u, j, r, a, f]
                    );
                return [p, l];
            }
            ((me = Hi = Hi || {})[(me.UNKNOWN = 0)] = "UNKNOWN"),
                (me[(me.NOT_APPROVED = 1)] = "NOT_APPROVED"),
                (me[(me.PENDING = 2)] = "PENDING"),
                (me[(me.APPROVED = 3)] = "APPROVED"),
                ((y = Qi = Qi || {}).CURRENCY_A = "CURRENCY_A"),
                (y.CURRENCY_B = "CURRENCY_B");
            var ec = Object($.b)("mint/typeInputMint"),
                tc = Object($.b)("mint/resetMintState"),
                nc = n(184);
            function rc(t, n) {
                var e = Object(ye.useState)(t),
                    r = Object(Ce.a)(e, 2),
                    e = r[0],
                    a = r[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            var e = setTimeout(function () {
                                a(t);
                            }, n);
                            return function () {
                                clearTimeout(e);
                            };
                        },
                        [t, n]
                    ),
                    e
                );
            }
            function ac(e) {
                var t,
                    n,
                    r,
                    a,
                    i,
                    c,
                    o,
                    s,
                    l = Ge(e),
                    s =
                        ((i = rc((r = l || void 0), 200)),
                        (c = Object(ye.useMemo)(
                            function () {
                                if (!i || !Ge(i)) return [void 0];
                                try {
                                    return i ? [Object(kr.namehash)("".concat(i.toLowerCase().substr(2), ".addr.reverse"))] : [void 0];
                                } catch (e) {
                                    return [void 0];
                                }
                            },
                            [i]
                        )),
                        (o = En(tr(!1), "resolver", c)),
                        (s = null === (s = o.result) || void 0 === s ? void 0 : s[0]),
                        (c = En(nr(s && !Tr(s) ? s : void 0, !1), "name", c)),
                        { ENSName: !(r = i !== r) && null !== (a = null === (a = c.result) || void 0 === a ? void 0 : a[0]) && void 0 !== a ? a : null, loading: r || o.loading || c.loading }),
                    r =
                        ((n = rc((a = e), 200)),
                        (r = Object(ye.useMemo)(
                            function () {
                                if (!n) return [void 0];
                                try {
                                    return n ? [Object(kr.namehash)(n)] : [void 0];
                                } catch (e) {
                                    return [void 0];
                                }
                            },
                            [n]
                        )),
                        (o = En(tr(!1), "resolver", r)),
                        (c = null === (c = o.result) || void 0 === c ? void 0 : c[0]),
                        (r = En(nr(c && !Tr(c) ? c : void 0, !1), "addr", r)),
                        { address: !(a = n !== a) && null !== (t = null === (t = r.result) || void 0 === t ? void 0 : t[0]) && void 0 !== t ? t : null, loading: a || o.loading || r.loading });
                return { loading: s.loading || r.loading, address: l || r.address, name: s.ENSName || (!l && r.address && e) || null };
            }
            function ic(e, t) {
                var a = Ue().chainId,
                    n = Object(ye.useMemo)(
                        function () {
                            return a ? _[a] : [];
                        },
                        [a]
                    ),
                    r = Object(ye.useMemo)(
                        function () {
                            return Nn()(n, function (t) {
                                return n.map(function (e) {
                                    return [t, e];
                                });
                            }).filter(function (e) {
                                var t = Object(Ce.a)(e, 2),
                                    e = t[0],
                                    t = t[1];
                                return e.address !== t.address;
                            });
                        },
                        [n]
                    ),
                    t = a ? [ui(e, a), ui(t, a)] : [void 0, void 0],
                    t = Object(Ce.a)(t, 2),
                    i = t[0],
                    c = t[1],
                    o = Si(
                        Object(ye.useMemo)(
                            function () {
                                return i && c
                                    ? [[i, c]]
                                          .concat(
                                              Object(Z.a)(
                                                  n.map(function (e) {
                                                      return [i, e];
                                                  })
                                              ),
                                              Object(Z.a)(
                                                  n.map(function (e) {
                                                      return [c, e];
                                                  })
                                              ),
                                              Object(Z.a)(r)
                                          )
                                          .filter(function (e) {
                                              return Boolean(e[0] && e[1]);
                                          })
                                          .filter(function (e) {
                                              var t = Object(Ce.a)(e, 2),
                                                  e = t[0],
                                                  t = t[1];
                                              return e.address !== t.address;
                                          })
                                          .filter(function (e) {
                                              var t = Object(Ce.a)(e, 2),
                                                  n = t[0],
                                                  r = t[1];
                                              if (!a) return !0;
                                              e = Y[a];
                                              if (!e) return !0;
                                              (t = e[n.address]), (e = e[r.address]);
                                              return !(
                                                  (t || e) &&
                                                  ((t &&
                                                      !t.find(function (e) {
                                                          return r.equals(e);
                                                      })) ||
                                                      (e &&
                                                          !e.find(function (e) {
                                                              return n.equals(e);
                                                          })))
                                              );
                                          })
                                    : [];
                            },
                            [i, c, n, r, a]
                        )
                    );
                return Object(ye.useMemo)(
                    function () {
                        return Object.values(
                            o
                                .filter(function (e) {
                                    return Boolean(e[0] === Ei.EXISTS && e[1]);
                                })
                                .reduce(function (e, t) {
                                    var n = Object(Ce.a)(t, 2)[1];
                                    return (e[n.liquidityToken.address] = null !== (t = e[n.liquidityToken.address]) && void 0 !== t ? t : n), e;
                                }, {})
                        );
                    },
                    [o]
                );
            }
            var cc = n(287);
            function oc() {
                return Object(we.d)(function (e) {
                    return e.swap;
                });
            }
            function sc(t, e) {
                if (t && e)
                    try {
                        var n = Object(nc.parseUnits)(t, e.decimals).toString();
                        if ("0" !== n) return e instanceof Ie.j ? new Ie.k(e, Ie.e.BigInt(n)) : Ie.c.ether(Ie.e.BigInt(n));
                    } catch (e) {
                        console.info('Failed to parse input amount: "'.concat(t, '"'), e);
                    }
            }
            var lc = ["0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", "0x10ED43C718714eb63d5aA57B78B54704E256024E", "0x10ED43C718714eb63d5aA57B78B54704E256024E"];
            function uc(e, t) {
                return (
                    e.route.path.some(function (e) {
                        return e.address === t;
                    }) ||
                    e.route.pairs.some(function (e) {
                        return e.liquidityToken.address === t;
                    })
                );
            }
            function dc(e) {
                if ("string" == typeof e) {
                    var t = Ge(e);
                    if (t) return t;
                    if ("BNB" === e.toUpperCase()) return "BNB";
                    if (!1 === t) return "BNB";
                }
                return "BNB";
            }
            var bc = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                pc = /^0x[a-fA-F0-9]{40}$/;
            function jc() {
                var e,
                    t = Ue().chainId,
                    n = Object(we.c)(),
                    r =
                        ((e = Object(d.g)().search),
                        Object(ye.useMemo)(
                            function () {
                                return e && 1 < e.length ? Object(cc.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 }) : {};
                            },
                            [e]
                        )),
                    a = Object(ye.useState)(),
                    i = Object(Ce.a)(a, 2),
                    a = i[0],
                    c = i[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            var e;
                            t &&
                                ((e = (function (e) {
                                    var t = dc(e.inputCurrency),
                                        n = dc(e.outputCurrency);
                                    t === n && ("string" == typeof e.outputCurrency ? (t = "") : (n = ""));
                                    var r = "string" != typeof (a = e.recipient) ? null : Ge(a) || (bc.test(a) || pc.test(a) ? a : null),
                                        a = {};
                                    return (
                                        Object(ke.a)(a, Ui.INPUT, { currencyId: t }),
                                        Object(ke.a)(a, Ui.OUTPUT, { currencyId: n }),
                                        Object(ke.a)(a, "typedValue", "string" != typeof (n = e.exactAmount) || isNaN(parseFloat(n)) ? "" : n),
                                        Object(ke.a)(a, "independentField", "string" == typeof (e = e.exactField) && "output" === e.toLowerCase() ? Ui.OUTPUT : Ui.INPUT),
                                        Object(ke.a)(a, "recipient", r),
                                        a
                                    );
                                })(r)),
                                n(Li({ typedValue: e.typedValue, field: e.independentField, inputCurrencyId: e[Ui.INPUT].currencyId, outputCurrencyId: e[Ui.OUTPUT].currencyId, recipient: e.recipient })),
                                c({ inputCurrencyId: e[Ui.INPUT].currencyId, outputCurrencyId: e[Ui.OUTPUT].currencyId }));
                        },
                        [n, t]
                    ),
                    a
                );
            }
            var fc = Ie.e.BigInt(0);
            function hc() {
                return Object(we.d)(function (e) {
                    return e.mint;
                });
            }
            function mc(e) {
                if (e) return e.currency === Ie.d ? (Ie.e.greaterThan(e.raw, J) ? Ie.c.ether(Ie.e.subtract(e.raw, J)) : Ie.c.ether(Ie.e.BigInt(0))) : e;
            }
            function yc() {
                var t = Object(we.c)();
                return Object(ye.useMemo)(
                    function () {
                        function n(e) {
                            return t(wc(e));
                        }
                        return {
                            toastError: function (e, t) {
                                return n({ id: Object(vc.kebabCase)(e), type: Oe.D.DANGER, title: e, description: t });
                            },
                            toastInfo: function (e, t) {
                                return n({ id: Object(vc.kebabCase)(e), type: Oe.D.INFO, title: e, description: t });
                            },
                            toastSuccess: function (e, t) {
                                return n({ id: Object(vc.kebabCase)(e), type: Oe.D.SUCCESS, title: e, description: t });
                            },
                            toastWarning: function (e, t) {
                                return n({ id: Object(vc.kebabCase)(e), type: Oe.D.WARNING, title: e, description: t });
                            },
                            push: n,
                            remove: function (e) {
                                return t(Cc(e));
                            },
                            clear: function () {
                                return t(gc());
                            },
                        };
                    },
                    [t]
                );
            }
            function Oc() {
                var r = (e = Object(j.d)()).activate,
                    e = e.deactivate,
                    a = yc().toastError;
                return {
                    login: Object(ye.useCallback)(function (e) {
                        var t,
                            n = L[e];
                        n
                            ? r(
                                  n,
                                  ((t = Object(ge.a)(
                                      ve.a.mark(function e(t) {
                                          return ve.a.wrap(function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          window.localStorage.removeItem(Oe.A),
                                                              t instanceof j.a
                                                                  ? a("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id.")
                                                                  : t instanceof u.b || t instanceof O.NoBscProviderError
                                                                  ? a("Provider Error", "No provider was found")
                                                                  : t instanceof u.c || t instanceof m.a
                                                                  ? (n instanceof m.b && (n.walletConnectProvider = null), a("Authorization Error", "Please authorize to access your account"))
                                                                  : a(t.name, t.message);
                                                      case 2:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          }, e);
                                      })
                                  )),
                                  function (e) {
                                      return t.apply(this, arguments);
                                  })
                              )
                            : a("Can't find connector", "The connector config is wrong");
                    }, []),
                    logout: e,
                };
            }
            var xc = xe.default.div(Object(i.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"]), function (e) {
                    return e.theme.colors.borderColor;
                }),
                vc = n(130),
                T = Object($.d)({
                    name: "toasts",
                    initialState: { data: [] },
                    reducers: {
                        push: function (e, t) {
                            var n = t.payload,
                                r = e.data.findIndex(function (e) {
                                    return e.id === t.payload.id;
                                });
                            0 <= r && e.data.splice(r, 1), e.data.unshift(n);
                        },
                        remove: function (e, t) {
                            var n = e.data.findIndex(function (e) {
                                return e.id === t.payload;
                            });
                            0 <= n && e.data.splice(n, 1);
                        },
                        clear: function (e) {
                            e.data = [];
                        },
                    },
                }),
                B = T.actions,
                gc = B.clear,
                Cc = B.remove,
                wc = B.push,
                r = T.reducer,
                kc = function (e) {
                    var t = Jt(),
                        n = Oc(),
                        r = n.login,
                        n = n.logout,
                        n = Object(Oe.F)(r, n).onPresentConnectModal;
                    return Object(_e.jsx)(Oe.c, Object(Te.a)(Object(Te.a)({ onClick: n }, e), {}, { children: t(292, "Unlock Wallet") }));
                },
                Tc = Object(xe.default)(Oe.f)(Object(i.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n"]));
            function Ic(e) {
                e = e.children;
                return Object(_e.jsx)(Tc, { children: e });
            }
            var Ec = xe.default.div(Object(i.a)(["\n  position: relative;\n"])),
                Nc = Object(xe.default)(Oe.y)(Object(i.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"]), function (e) {
                    return e.theme.colors.primary;
                }),
                Sc = xe.default.span(
                    Object(i.a)([
                        "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                    ])
                );
            function Rc(e) {
                var t = e.noLiquidity,
                    n = e.price,
                    r = e.currencies,
                    a = e.parsedAmounts,
                    i = e.poolTokenPercentage,
                    c = e.onAdd;
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsxs)(Pe, {
                            children: [
                                Object(_e.jsxs)(Oe.y, { children: [null === (e = r[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, " Deposited"] }),
                                Object(_e.jsxs)(Le, {
                                    children: [
                                        Object(_e.jsx)(Kr, { currency: r[Qi.CURRENCY_A], style: { marginRight: "8px" } }),
                                        Object(_e.jsx)(Oe.y, { children: null === (e = a[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6) }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsxs)(Pe, {
                            children: [
                                Object(_e.jsxs)(Oe.y, { children: [null === (e = r[Qi.CURRENCY_B]) || void 0 === e ? void 0 : e.symbol, " Deposited"] }),
                                Object(_e.jsxs)(Le, {
                                    children: [
                                        Object(_e.jsx)(Kr, { currency: r[Qi.CURRENCY_B], style: { marginRight: "8px" } }),
                                        Object(_e.jsx)(Oe.y, { children: null === (a = a[Qi.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(6) }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsxs)(Pe, {
                            children: [
                                Object(_e.jsx)(Oe.y, { children: "Rates" }),
                                Object(_e.jsx)(Oe.y, {
                                    children: "1 "
                                        .concat(null === (a = r[Qi.CURRENCY_A]) || void 0 === a ? void 0 : a.symbol, " = ")
                                        .concat(null == n ? void 0 : n.toSignificant(4), " ")
                                        .concat(null === (a = r[Qi.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol),
                                }),
                            ],
                        }),
                        Object(_e.jsx)(Pe, {
                            style: { justifyContent: "flex-end" },
                            children: Object(_e.jsx)(Oe.y, {
                                children: "1 "
                                    .concat(null === (a = r[Qi.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " = ")
                                    .concat(null == n ? void 0 : n.invert().toSignificant(4), " ")
                                    .concat(null === (r = r[Qi.CURRENCY_A]) || void 0 === r ? void 0 : r.symbol),
                            }),
                        }),
                        Object(_e.jsxs)(Pe, { children: [Object(_e.jsx)(Oe.y, { children: "Share of Pool:" }), Object(_e.jsxs)(Oe.y, { children: [t ? "100" : null == i ? void 0 : i.toSignificant(4), "%"] })] }),
                        Object(_e.jsx)(Oe.c, { mt: "20px", onClick: c, children: t ? Xt(250, "Create Pool & Supply") : Xt(252, "Confirm Supply") }),
                    ],
                });
            }
            function Uc(e) {
                var t,
                    n = e.currencies,
                    r = e.noLiquidity,
                    a = e.poolTokenPercentage,
                    i = e.price;
                return Object(_e.jsx)(Ae, {
                    gap: "md",
                    children: Object(_e.jsxs)(Me, {
                        justify: "space-around",
                        gap: "4px",
                        children: [
                            Object(_e.jsxs)(Ae, {
                                justify: "center",
                                children: [
                                    Object(_e.jsx)(Oe.y, { children: null !== (e = null == i ? void 0 : i.toSignificant(6)) && void 0 !== e ? e : "-" }),
                                    Object(_e.jsxs)(Oe.y, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [null === (e = n[Qi.CURRENCY_B]) || void 0 === e ? void 0 : e.symbol, " per ", null === (e = n[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol],
                                    }),
                                ],
                            }),
                            Object(_e.jsxs)(Ae, {
                                justify: "center",
                                children: [
                                    Object(_e.jsx)(Oe.y, { children: null !== (t = null == i || null === (t = i.invert()) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== t ? t : "-" }),
                                    Object(_e.jsxs)(Oe.y, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [null === (t = n[Qi.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " per ", null === (n = n[Qi.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol],
                                    }),
                                ],
                            }),
                            Object(_e.jsxs)(Ae, {
                                justify: "center",
                                children: [
                                    Object(_e.jsxs)(Oe.y, { children: [r && i ? "100" : null !== (a = null != a && a.lessThan(H) ? "<0.01" : null == a ? void 0 : a.toFixed(2)) && void 0 !== a ? a : "0", "%"] }),
                                    Object(_e.jsx)(Oe.y, { fontSize: "14px", color: "textSubtle", pt: 1, children: "Share of Pool" }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function Ac(e) {
                var t,
                    n,
                    r,
                    a,
                    i = e.match.params,
                    c = i.currencyIdA,
                    o = i.currencyIdB,
                    s = e.history,
                    l = Ue(),
                    b = l.account,
                    p = l.chainId,
                    j = l.library,
                    f = sr(c),
                    h = sr(o),
                    u = Jt(),
                    d = Boolean(p && ((f && Object(Ie.o)(f, Ie.n[p])) || (h && Object(Ie.o)(h, Ie.n[p])))),
                    m = qn(),
                    y = hc(),
                    O = y.independentField,
                    x = y.typedValue,
                    v = y.otherTypedValue,
                    g = (function (a, i) {
                        var e,
                            t,
                            n,
                            r = Ue(),
                            c = r.account,
                            o = r.chainId,
                            s = hc(),
                            l = s.independentField,
                            u = s.typedValue,
                            d = s.otherTypedValue,
                            b = l === Qi.CURRENCY_A ? Qi.CURRENCY_B : Qi.CURRENCY_A,
                            p = Object(ye.useMemo)(
                                function () {
                                    var e = {};
                                    return Object(ke.a)(e, Qi.CURRENCY_A, null != a ? a : void 0), Object(ke.a)(e, Qi.CURRENCY_B, null != i ? i : void 0), e;
                                },
                                [a, i]
                            ),
                            j = Ri(p[Qi.CURRENCY_A], p[Qi.CURRENCY_B]),
                            r = Object(Ce.a)(j, 2),
                            s = r[0],
                            f = r[1],
                            h = si(null == f ? void 0 : f.liquidityToken),
                            m = s === Ei.NOT_EXISTS || Boolean(h && Ie.e.equal(h.raw, fc)),
                            j = br(null != c ? c : void 0, [p[Qi.CURRENCY_A], p[Qi.CURRENCY_B]]),
                            j = ((r = {}), Object(ke.a)(r, Qi.CURRENCY_A, j[0]), Object(ke.a)(r, Qi.CURRENCY_B, j[1]), r),
                            y = sc(u, p[l]),
                            r = Object(ye.useMemo)(
                                function () {
                                    if (m) return d && p[b] ? sc(d, p[b]) : void 0;
                                    if (y) {
                                        var e = di(y, o),
                                            t = [ui(a, o), ui(i, o)],
                                            n = t[0],
                                            r = t[1];
                                        if (n && r && e && f) {
                                            (t = b === Qi.CURRENCY_B ? i : a), (e = (b === Qi.CURRENCY_B ? f.priceOf(n) : f.priceOf(r)).quote(e));
                                            return t === Ie.d ? Ie.c.ether(e.raw) : e;
                                        }
                                    }
                                },
                                [m, d, p, b, y, a, o, i, f]
                            ),
                            O = ((u = {}), Object(ke.a)(u, Qi.CURRENCY_A, l === Qi.CURRENCY_A ? y : r), Object(ke.a)(u, Qi.CURRENCY_B, l === Qi.CURRENCY_A ? r : y), u),
                            l = Object(ye.useMemo)(
                                function () {
                                    if (m) {
                                        var e = O[Qi.CURRENCY_A],
                                            t = O[Qi.CURRENCY_B];
                                        return e && t ? new Ie.h(e.currency, t.currency, e.raw, t.raw) : void 0;
                                    }
                                    t = ui(a, o);
                                    return f && t ? f.priceOf(t) : void 0;
                                },
                                [o, a, m, f, O]
                            ),
                            x = Object(ye.useMemo)(
                                function () {
                                    var e = O[Qi.CURRENCY_A],
                                        t = O[Qi.CURRENCY_B],
                                        e = [di(e, o), di(t, o)],
                                        t = e[0],
                                        e = e[1];
                                    if (f && h && t && e) return f.getLiquidityMinted(h, t, e);
                                },
                                [O, o, f, h]
                            ),
                            r = Object(ye.useMemo)(
                                function () {
                                    if (x && h) return new Ie.g(x.raw, h.add(x).raw);
                                },
                                [x, h]
                            );
                        c || (n = "Connect Wallet"),
                            s === Ei.INVALID && (n = null !== n && void 0 !== n ? n : Xt(136, "Invalid pair")),
                            (O[Qi.CURRENCY_A] && O[Qi.CURRENCY_B]) || (n = null !== n && void 0 !== n ? n : Xt(84, "Enter an amount"));
                        var u = O[Qi.CURRENCY_A],
                            c = O[Qi.CURRENCY_B];
                        return (
                            u && null !== j && null !== (e = j[Qi.CURRENCY_A]) && void 0 !== e && e.lessThan(u) && (n = "Insufficient ".concat(null === (u = p[Qi.CURRENCY_A]) || void 0 === u ? void 0 : u.symbol, " balance")),
                            c && null !== j && null !== (t = j[Qi.CURRENCY_B]) && void 0 !== t && t.lessThan(c) && (n = "Insufficient ".concat(null === (c = p[Qi.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol, " balance")),
                            { dependentField: b, currencies: p, pair: f, pairState: s, currencyBalances: j, parsedAmounts: O, price: l, noLiquidity: m, liquidityMinted: x, poolTokenPercentage: r, error: n }
                        );
                    })(null != f ? f : void 0, null != h ? h : void 0),
                    C = g.dependentField,
                    w = g.currencies,
                    k = g.pair,
                    T = g.pairState,
                    I = g.currencyBalances,
                    E = g.parsedAmounts,
                    N = g.price,
                    S = g.noLiquidity,
                    R = g.liquidityMinted,
                    U = g.poolTokenPercentage,
                    A = g.error,
                    P =
                        ((r = S),
                        (a = Object(we.c)()),
                        {
                            onFieldAInput: Object(ye.useCallback)(
                                function (e) {
                                    a(ec({ field: Qi.CURRENCY_A, typedValue: e, noLiquidity: !0 === r }));
                                },
                                [a, r]
                            ),
                            onFieldBInput: Object(ye.useCallback)(
                                function (e) {
                                    a(ec({ field: Qi.CURRENCY_B, typedValue: e, noLiquidity: !0 === r }));
                                },
                                [a, r]
                            ),
                        }),
                    B = P.onFieldAInput,
                    M = P.onFieldBInput,
                    i = !A,
                    e = Object(ye.useState)(!1),
                    l = Object(Ce.a)(e, 2),
                    y = l[0],
                    L = l[1],
                    g = Object(ye.useState)(!1),
                    P = Object(Ce.a)(g, 2),
                    e = P[0],
                    D = P[1],
                    l = Wn(),
                    _ = Object(Ce.a)(l, 1)[0],
                    g = Vn(),
                    Y = Object(Ce.a)(g, 1)[0],
                    P = Object(ye.useState)(""),
                    l = Object(Ce.a)(P, 2),
                    z = l[0],
                    F = l[1],
                    P = ((g = {}), Object(ke.a)(g, O, x), Object(ke.a)(g, C, S ? v : null !== (W = null === (V = E[C]) || void 0 === V ? void 0 : V.toSignificant(6)) && void 0 !== W ? W : ""), g),
                    q = [Qi.CURRENCY_A, Qi.CURRENCY_B].reduce(function (e, t) {
                        return Object(Te.a)(Object(Te.a)({}, e), {}, Object(ke.a)({}, t, mc(I[t])));
                    }, {}),
                    l = [Qi.CURRENCY_A, Qi.CURRENCY_B].reduce(function (e, t) {
                        return Object(Te.a)(Object(Te.a)({}, e), {}, Object(ke.a)({}, t, null === (e = q[t]) || void 0 === e ? void 0 : e.equalTo(null !== (t = E[t]) && void 0 !== t ? t : "0")));
                    }, {}),
                    O = Zi(E[Qi.CURRENCY_A], Ee),
                    x = Object(Ce.a)(O, 2),
                    v = x[0],
                    C = x[1],
                    V = Zi(E[Qi.CURRENCY_B], Ee),
                    W = Object(Ce.a)(V, 2),
                    g = W[0],
                    O = W[1],
                    H = qi();
                function Q() {
                    return G.apply(this, arguments);
                }
                function G() {
                    return (G = Object(ge.a)(
                        ve.a.mark(function e() {
                            var t, n, r, a, i, c, o, s, l, u, d;
                            return ve.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (p && j && b) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (((t = tt(0, j, b)), (n = E[Qi.CURRENCY_A]), (r = E[Qi.CURRENCY_B]), n && r && f && h)) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            return (
                                                (u = {}),
                                                Object(ke.a)(u, Qi.CURRENCY_A, Ze(n, S ? 0 : Y)[0]),
                                                Object(ke.a)(u, Qi.CURRENCY_B, Ze(r, S ? 0 : Y)[0]),
                                                (a = u),
                                                (i = Math.ceil(Date.now() / 1e3) + _),
                                                (l =
                                                    f === Ie.d || h === Ie.d
                                                        ? ((d = h === Ie.d),
                                                          (c = t.estimateGas.addLiquidityETH),
                                                          (o = t.addLiquidityETH),
                                                          (s = [
                                                              null !== (u = null === (u = ui(d ? f : h, p)) || void 0 === u ? void 0 : u.address) && void 0 !== u ? u : "",
                                                              (d ? n : r).raw.toString(),
                                                              a[d ? Qi.CURRENCY_A : Qi.CURRENCY_B].toString(),
                                                              a[d ? Qi.CURRENCY_B : Qi.CURRENCY_A].toString(),
                                                              b,
                                                              i,
                                                          ]),
                                                          He.a.from((d ? r : n).raw.toString()))
                                                        : ((c = t.estimateGas.addLiquidity),
                                                          (o = t.addLiquidity),
                                                          (s = [
                                                              null !== (d = null === (d = ui(f, p)) || void 0 === d ? void 0 : d.address) && void 0 !== d ? d : "",
                                                              null !== (d = null === (d = ui(h, p)) || void 0 === d ? void 0 : d.address) && void 0 !== d ? d : "",
                                                              n.raw.toString(),
                                                              r.raw.toString(),
                                                              a[Qi.CURRENCY_A].toString(),
                                                              a[Qi.CURRENCY_B].toString(),
                                                              b,
                                                              i,
                                                          ]),
                                                          null)),
                                                (c = (function () {
                                                    var e = Object(ge.a)(
                                                        ve.a.mark(function e() {
                                                            return ve.a.wrap(function (e) {
                                                                for (;;)
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return e.abrupt("return", 5e6);
                                                                        case 1:
                                                                        case "end":
                                                                            return e.stop();
                                                                    }
                                                            }, e);
                                                        })
                                                    );
                                                    return function () {
                                                        return e.apply(this, arguments);
                                                    };
                                                })()),
                                                D(!0),
                                                (e.next = 13),
                                                c
                                                    .apply(void 0, Object(Z.a)(s).concat([l ? { value: l } : {}]))
                                                    .then(function (e) {
                                                        return o.apply(void 0, Object(Z.a)(s).concat([Object(Te.a)(Object(Te.a)({}, l ? { value: l } : {}), {}, { gasLimit: e, gasPrice: 2e10 })])).then(function (e) {
                                                            var t;
                                                            D(!1),
                                                                H(e, {
                                                                    summary: "Add "
                                                                        .concat(null === (t = E[Qi.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ")
                                                                        .concat(null === (t = w[Qi.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " and ")
                                                                        .concat(null === (t = E[Qi.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ")
                                                                        .concat(null === (t = w[Qi.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol),
                                                                }),
                                                                F(e.hash);
                                                        });
                                                    })
                                                    .catch(function (e) {
                                                        D(!1), 4001 !== (null == e ? void 0 : e.code) && console.error(e);
                                                    })
                                            );
                                        case 13:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function K() {
                    var e;
                    return S
                        ? Object(_e.jsx)(Ae, {
                              gap: "20px",
                              children: Object(_e.jsx)(Tt, {
                                  mt: "20px",
                                  borderRadius: "20px",
                                  children: Object(_e.jsxs)(Be, {
                                      children: [
                                          Object(_e.jsx)(Oe.y, {
                                              fontSize: "48px",
                                              mr: "8px",
                                              children: "".concat(null === (e = w[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (e = w[Qi.CURRENCY_B]) || void 0 === e ? void 0 : e.symbol),
                                          }),
                                          Object(_e.jsx)(qa, { currency0: w[Qi.CURRENCY_A], currency1: w[Qi.CURRENCY_B], size: 30 }),
                                      ],
                                  }),
                              }),
                          })
                        : Object(_e.jsxs)(Ae, {
                              gap: "20px",
                              children: [
                                  Object(_e.jsxs)(Be, {
                                      style: { marginTop: "20px" },
                                      children: [
                                          Object(_e.jsx)(Oe.y, { fontSize: "48px", mr: "8px", children: null == R ? void 0 : R.toSignificant(6) }),
                                          Object(_e.jsx)(qa, { currency0: w[Qi.CURRENCY_A], currency1: w[Qi.CURRENCY_B], size: 30 }),
                                      ],
                                  }),
                                  Object(_e.jsx)(De, {
                                      children: Object(_e.jsx)(Oe.y, {
                                          fontSize: "24px",
                                          children: "".concat(null === (e = w[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (e = w[Qi.CURRENCY_B]) || void 0 === e ? void 0 : e.symbol, " Pool Tokens"),
                                      }),
                                  }),
                                  Object(_e.jsx)(Oe.y, {
                                      small: !0,
                                      textAlign: "left",
                                      padding: "8px 0 0 0 ",
                                      style: { fontStyle: "italic" },
                                      children: "Output is estimated. If the price changes by more than ".concat(Y / 100, "% your transaction will revert."),
                                  }),
                              ],
                          });
                }
                function X() {
                    return Object(_e.jsx)(Rc, { price: N, currencies: w, parsedAmounts: E, noLiquidity: S, onAdd: Q, poolTokenPercentage: U });
                }
                var V = "Supplying "
                        .concat(null === (x = E[Qi.CURRENCY_A]) || void 0 === x ? void 0 : x.toSignificant(6), " ")
                        .concat(null === (V = w[Qi.CURRENCY_A]) || void 0 === V ? void 0 : V.symbol, " and ")
                        .concat(null === (W = E[Qi.CURRENCY_B]) || void 0 === W ? void 0 : W.toSignificant(6), " ")
                        .concat(null === (x = w[Qi.CURRENCY_B]) || void 0 === x ? void 0 : x.symbol),
                    W = Object(ye.useCallback)(
                        function (e) {
                            e = li(e);
                            e === o ? s.push("/add/".concat(o, "/").concat(c)) : s.push("/add/".concat(e, "/").concat(o));
                        },
                        [o, s, c]
                    ),
                    x = Object(ye.useCallback)(
                        function (e) {
                            e = li(e);
                            c === e ? (o ? s.push("/add/".concat(o, "/").concat(e)) : s.push("/add/".concat(e))) : s.push("/add/".concat(c || "BNB", "/").concat(e));
                        },
                        [c, s, o]
                    ),
                    J = Object(ye.useCallback)(
                        function () {
                            L(!1), z && B(""), F("");
                        },
                        [B, z]
                    );
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsx)(Zt, { activeIndex: 1 }),
                        Object(_e.jsxs)(Ic, {
                            children: [
                                Object(_e.jsx)(ai, { adding: !0 }),
                                Object(_e.jsxs)(Ec, {
                                    children: [
                                        Object(_e.jsx)(Qt, {
                                            isOpen: y,
                                            onDismiss: J,
                                            attemptingTxn: e,
                                            hash: z,
                                            content: function () {
                                                return Object(_e.jsx)(Wt, { title: S ? u(1154, "You are creating a pool") : u(1156, "You will receive"), onDismiss: J, topContent: K, bottomContent: X });
                                            },
                                            pendingText: V,
                                        }),
                                        Object(_e.jsx)(Oe.g, {
                                            children: Object(_e.jsxs)(Ae, {
                                                gap: "20px",
                                                children: [
                                                    S &&
                                                        Object(_e.jsx)(oe, {
                                                            children: Object(_e.jsx)(xc, {
                                                                children: Object(_e.jsxs)(Ae, {
                                                                    gap: "12px",
                                                                    children: [
                                                                        Object(_e.jsx)(Oe.y, { children: u(1158, "You are the first liquidity provider.") }),
                                                                        Object(_e.jsx)(Oe.y, { children: u(1160, "The ratio of tokens you add will set the price of this pool.") }),
                                                                        Object(_e.jsx)(Oe.y, { children: u(1162, "Once you are happy with the rate click supply to review.") }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    Object(_e.jsx)(Za, {
                                                        value: P[Qi.CURRENCY_A],
                                                        onUserInput: B,
                                                        onMax: function () {
                                                            var e;
                                                            B(null !== (e = null === (e = q[Qi.CURRENCY_A]) || void 0 === e ? void 0 : e.toExact()) && void 0 !== e ? e : "");
                                                        },
                                                        onCurrencySelect: W,
                                                        showMaxButton: !l[Qi.CURRENCY_A],
                                                        currency: w[Qi.CURRENCY_A],
                                                        id: "add-liquidity-input-tokena",
                                                        showCommonBases: !1,
                                                    }),
                                                    Object(_e.jsx)(oe, { children: Object(_e.jsx)(Oe.a, { color: "textSubtle" }) }),
                                                    Object(_e.jsx)(Za, {
                                                        value: P[Qi.CURRENCY_B],
                                                        onUserInput: M,
                                                        onCurrencySelect: x,
                                                        onMax: function () {
                                                            var e;
                                                            M(null !== (e = null === (e = q[Qi.CURRENCY_B]) || void 0 === e ? void 0 : e.toExact()) && void 0 !== e ? e : "");
                                                        },
                                                        showMaxButton: !l[Qi.CURRENCY_B],
                                                        currency: w[Qi.CURRENCY_B],
                                                        id: "add-liquidity-input-tokenb",
                                                        showCommonBases: !1,
                                                    }),
                                                    w[Qi.CURRENCY_A] &&
                                                        w[Qi.CURRENCY_B] &&
                                                        T !== Ei.INVALID &&
                                                        Object(_e.jsxs)("div", {
                                                            children: [
                                                                Object(_e.jsx)(Oe.y, {
                                                                    style: { textTransform: "uppercase", fontWeight: 600 },
                                                                    color: "textSubtle",
                                                                    fontSize: "12px",
                                                                    mb: "2px",
                                                                    children: S ? u(1164, "Initial prices and pool share") : u(1166, "Prices and pool share"),
                                                                }),
                                                                Object(_e.jsx)(xc, { children: Object(_e.jsx)(Uc, { currencies: w, poolTokenPercentage: U, noLiquidity: S, price: N }) }),
                                                            ],
                                                        }),
                                                    b
                                                        ? Object(_e.jsxs)(Ae, {
                                                              gap: "md",
                                                              children: [
                                                                  (v === Hi.NOT_APPROVED || v === Hi.PENDING || g === Hi.NOT_APPROVED || g === Hi.PENDING) &&
                                                                      i &&
                                                                      Object(_e.jsxs)(Pe, {
                                                                          children: [
                                                                              v !== Hi.APPROVED &&
                                                                                  Object(_e.jsx)(Oe.c, {
                                                                                      onClick: C,
                                                                                      disabled: v === Hi.PENDING,
                                                                                      style: { width: g !== Hi.APPROVED ? "48%" : "100%" },
                                                                                      children:
                                                                                          v === Hi.PENDING
                                                                                              ? Object(_e.jsxs)(Sc, { children: ["Approving ", null === (t = w[Qi.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol] })
                                                                                              : "Approve ".concat(null === (t = w[Qi.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol),
                                                                                  }),
                                                                              g !== Hi.APPROVED &&
                                                                                  Object(_e.jsx)(Oe.c, {
                                                                                      onClick: O,
                                                                                      disabled: g === Hi.PENDING,
                                                                                      style: { width: v !== Hi.APPROVED ? "48%" : "100%" },
                                                                                      children:
                                                                                          g === Hi.PENDING
                                                                                              ? Object(_e.jsxs)(Sc, { children: ["Approving ", null === (n = w[Qi.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol] })
                                                                                              : "Approve ".concat(null === (n = w[Qi.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol),
                                                                                  }),
                                                                          ],
                                                                      }),
                                                                  Object(_e.jsx)(Oe.c, {
                                                                      onClick: function () {
                                                                          m ? Q() : L(!0);
                                                                      },
                                                                      disabled: !i || v !== Hi.APPROVED || g !== Hi.APPROVED,
                                                                      variant: !i && E[Qi.CURRENCY_A] && E[Qi.CURRENCY_B] ? "danger" : "primary",
                                                                      width: "100%",
                                                                      children: null != A ? A : "Supply",
                                                                  }),
                                                              ],
                                                          })
                                                        : Object(_e.jsx)(kc, { width: "100%" }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        k && !S && T !== Ei.INVALID ? Object(_e.jsx)(Ae, { style: { minWidth: "20rem", marginTop: "1rem" }, children: Object(_e.jsx)(Ti, { showUnwrapped: d, pair: k }) }) : null,
                    ],
                });
            }
            var Pc = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            function Bc(e) {
                var t = e.match.params.currencyIdA.match(Pc);
                return null != t && t.length ? Object(_e.jsx)(d.a, { to: "/add/".concat(t[1], "/").concat(t[2]) }) : Object(_e.jsx)(Ac, Object(Te.a)({}, e));
            }
            function Mc(e) {
                var t = e.match.params,
                    n = t.currencyIdA,
                    t = t.currencyIdB;
                return n.toLowerCase() === t.toLowerCase() ? Object(_e.jsx)(d.a, { to: "/add/".concat(n) }) : Object(_e.jsx)(Ac, Object(Te.a)({}, e));
            }
            var Lc = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            function Dc(e) {
                var t = e.match.params.tokens;
                if (!Lc.test(t)) return Object(_e.jsx)(d.a, { to: "/pool" });
                (e = t.split("-")), (t = Object(Ce.a)(e, 2)), (e = t[0]), (t = t[1]);
                return Object(_e.jsx)(d.a, { to: "/remove/".concat(e, "/").concat(t) });
            }
            function _c(e) {
                var t = e.translateString,
                    n = Vn(),
                    r = (e = Object(Ce.a)(n, 2))[0],
                    a = e[1],
                    n = Object(ye.useState)(r / 100),
                    i = (e = Object(Ce.a)(n, 2))[0],
                    c = e[1],
                    n = Object(ye.useState)(null),
                    n = (e = Object(Ce.a)(n, 2))[0],
                    o = e[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            try {
                                var e = 100 * i;
                                !Number.isNaN(e) && 0 < e && e < 5e3 ? (a(e), o(null)) : o(t(1144, "Enter a valid slippage percentage"));
                            } catch (e) {
                                o(t(1144, "Enter a valid slippage percentage"));
                            }
                        },
                        [i, o, a, t]
                    ),
                    Object(ye.useEffect)(
                        function () {
                            r < 50 ? o(t(1146, "Your transaction may fail")) : 500 < r && o(t(1148, "Your transaction may be frontrun"));
                        },
                        [r, o, t]
                    ),
                    Object(_e.jsxs)(Gc, {
                        children: [
                            Object(_e.jsxs)(Jc, {
                                children: [
                                    Object(_e.jsx)(Oe.y, { style: { fontWeight: 600 }, children: t(88, "Slippage tolerance") }),
                                    Object(_e.jsx)(Vr, { text: t(186, "Your transaction will revert if the price changes unfavorably by more than this percentage.") }),
                                ],
                            }),
                            Object(_e.jsxs)(Xc, {
                                children: [
                                    Object(_e.jsx)(Oe.n, {
                                        mb: ["8px", 0],
                                        mr: [0, "8px"],
                                        children: $c.map(function (e) {
                                            var t = e.label,
                                                n = e.value;
                                            return Object(_e.jsx)(
                                                Kc,
                                                {
                                                    children: Object(_e.jsx)(Oe.c, {
                                                        variant: i === n ? "primary" : "tertiary",
                                                        onClick: function () {
                                                            return c(n);
                                                        },
                                                        children: t,
                                                    }),
                                                },
                                                n
                                            );
                                        }),
                                    }),
                                    Object(_e.jsxs)(Oe.n, {
                                        alignItems: "center",
                                        children: [
                                            Object(_e.jsx)(Kc, {
                                                children: Object(_e.jsx)(Oe.q, {
                                                    type: "number",
                                                    scale: "lg",
                                                    step: 0.1,
                                                    min: 0.1,
                                                    placeholder: "12%",
                                                    value: i,
                                                    onChange: function (e) {
                                                        e = e.target.value;
                                                        c(parseFloat(e));
                                                    },
                                                    isWarning: null !== n,
                                                }),
                                            }),
                                            Object(_e.jsx)(Kc, { children: Object(_e.jsx)(Oe.y, { fontSize: "18px", children: "%" }) }),
                                        ],
                                    }),
                                ],
                            }),
                            n && Object(_e.jsx)(Oe.y, { mt: "8px", color: "failure", children: n }),
                        ],
                    })
                );
            }
            function Yc(e) {
                var t = e.translateString,
                    n = Wn(),
                    n = (e = Object(Ce.a)(n, 2))[0],
                    r = e[1],
                    e = Object(ye.useState)(n / 60),
                    a = (n = Object(Ce.a)(e, 2))[0],
                    i = n[1],
                    e = Object(ye.useState)(null),
                    e = (n = Object(Ce.a)(e, 2))[0],
                    c = n[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            try {
                                var e = 60 * a;
                                !Number.isNaN(e) && 0 < e ? (r(e), c(null)) : c(t(1150, "Enter a valid deadline"));
                            } catch (e) {
                                c(t(1150, "Enter a valid deadline"));
                            }
                        },
                        [a, c, r, t]
                    ),
                    Object(_e.jsxs)(Zc, {
                        children: [
                            Object(_e.jsxs)(eo, {
                                children: [
                                    Object(_e.jsx)(Oe.y, { style: { fontWeight: 600 }, children: t(90, "Transaction deadline") }),
                                    Object(_e.jsx)(Vr, { text: t(188, "Your transaction will revert if it is pending for more than this long.") }),
                                ],
                            }),
                            Object(_e.jsxs)(to, {
                                children: [
                                    Object(_e.jsx)(Oe.q, {
                                        type: "number",
                                        step: "1",
                                        min: "1",
                                        value: a,
                                        onChange: function (e) {
                                            e = e.target.value;
                                            i(parseInt(e, 10));
                                        },
                                    }),
                                    Object(_e.jsx)(Oe.y, { children: "Minutes" }),
                                ],
                            }),
                            e && Object(_e.jsx)(Oe.y, { mt: "8px", color: "failure", children: e }),
                        ],
                    })
                );
            }
            function zc() {
                return null;
            }
            function Fc(e) {
                var t = void 0 === (t = e.onDismiss) ? zc : t,
                    e = e.translateString;
                return Object(_e.jsxs)(Oe.t, { title: e(1200, "Settings"), onDismiss: t, children: [Object(_e.jsx)(_c, { translateString: e }), Object(_e.jsx)(Yc, { translateString: e })] });
            }
            function qc() {
                return null;
            }
            function Vc(e, t) {
                return t.addedTime - e.addedTime;
            }
            function Wc(e) {
                var t = void 0 === (i = e.onDismiss) ? qc : i,
                    n = e.translateString,
                    e = (i = Ue()).account,
                    a = i.chainId,
                    r = Vi(),
                    i = Object(ye.useMemo)(
                        function () {
                            return Object.values(r).filter(Wi).sort(Vc);
                        },
                        [r]
                    );
                return Object(_e.jsxs)(Oe.t, {
                    title: n(1202, "Recent transactions"),
                    onDismiss: t,
                    children: [
                        !e &&
                            Object(_e.jsxs)(Oe.n, {
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                children: [
                                    Object(_e.jsx)(Oe.y, { mb: "8px", bold: !0, children: "Please connect your wallet to view your recent transactions" }),
                                    Object(_e.jsx)(Oe.c, { variant: "tertiary", scale: "sm", onClick: t, children: "Close" }),
                                ],
                            }),
                        e &&
                            a &&
                            0 === i.length &&
                            Object(_e.jsxs)(Oe.n, {
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                children: [Object(_e.jsx)(Oe.y, { mb: "8px", bold: !0, children: "No recent transactions" }), Object(_e.jsx)(Oe.c, { variant: "tertiary", scale: "sm", onClick: t, children: "Close" })],
                            }),
                        e &&
                            a &&
                            i.map(function (e) {
                                var t,
                                    n = e.hash,
                                    r = e.summary,
                                    t =
                                        ((t = e.hash),
                                        (e = e.receipt),
                                        t
                                            ? t && 1 === (null == e ? void 0 : e.status)
                                                ? { icon: Object(_e.jsx)(Oe.h, { color: "success" }), color: "success" }
                                                : { icon: Object(_e.jsx)(Oe.m, { color: "failure" }), color: "failure" }
                                            : { icon: Object(_e.jsx)(Ot, {}), color: "text" }),
                                    e = t.icon,
                                    t = t.color;
                                return Object(_e.jsx)(_e.Fragment, {
                                    children: Object(_e.jsxs)(
                                        Oe.n,
                                        { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(_e.jsx)(Oe.r, { href: Xe(a, n, "transaction"), color: t, children: null != r ? r : n }), e] },
                                        n
                                    ),
                                });
                            }),
                    ],
                });
            }
            function Hc() {
                return Object(_e.jsx)(Oe.w, {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: Object(_e.jsx)("path", {
                        d:
                            "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
                        fill: "currentColor",
                    }),
                });
            }
            var Qc,
                Gc = xe.default.div(Object(i.a)(["\n  margin-bottom: 16px;\n"])),
                Kc = xe.default.div(Object(i.a)(["\n  padding: 0 4px;\n"])),
                Xc = xe.default.div(
                    Object(i.a)([
                        "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ",
                        ":first-child {\n    padding-left: 0;\n  }\n\n  ",
                        ":last-child {\n    padding-right: 0;\n  }\n\n  ",
                        " {\n    flex-direction: row;\n  }\n",
                    ]),
                    Kc,
                    Kc,
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                Jc = xe.default.div(Object(i.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"])),
                $c = [
                    { label: "0.1%", value: 0.1 },
                    { label: "0.5%", value: 0.5 },
                    { label: "12%", value: 12 },
                ],
                Zc = xe.default.div(Object(i.a)(["\n  margin-bottom: 16px;\n"])),
                eo = xe.default.div(Object(i.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"])),
                to = xe.default.div(Object(i.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"]), Oe.q, Oe.y),
                no = xe.default.div(Object(i.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 24px;\n"]), function (e) {
                    return e.theme.colors.borderColor;
                }),
                ro = xe.default.div(Object(i.a)(["\n  flex: 1;\n"])),
                ao = function (e) {
                    var t = e.title,
                        n = e.description,
                        r = e.children,
                        a = Jt(),
                        i = Object(Oe.E)(Object(_e.jsx)(Fc, { translateString: a })),
                        e = Object(Ce.a)(i, 1)[0],
                        i = Object(Oe.E)(Object(_e.jsx)(Wc, { translateString: a })),
                        i = Object(Ce.a)(i, 1)[0];
                    return Object(_e.jsxs)(no, {
                        children: [
                            Object(_e.jsxs)(Oe.n, {
                                alignItems: "center",
                                children: [
                                    Object(_e.jsxs)(ro, { children: [Object(_e.jsx)(Oe.o, { mb: "8px", children: t }), n && Object(_e.jsx)(Oe.y, { color: "textSubtle", fontSize: "14px", children: n })] }),
                                    Object(_e.jsx)(Oe.p, { variant: "text", onClick: e, title: a(1200, "Settings"), children: Object(_e.jsx)(Oe.k, { width: "24px", color: "currentColor" }) }),
                                    Object(_e.jsx)(Oe.p, { variant: "text", onClick: i, title: a(1202, "Recent transactions"), children: Object(_e.jsx)(Hc, {}) }),
                                ],
                            }),
                            r && Object(_e.jsx)(Oe.y, { mt: "16px", children: r }),
                        ],
                    });
                };
            function io() {
                var n,
                    r,
                    e,
                    t,
                    a,
                    i,
                    c,
                    o = Object(ye.useContext)(xe.ThemeContext),
                    s = Ue().account,
                    l = Jt(),
                    u =
                        ((n = Ue().chainId),
                        (r = ar()),
                        (e = Object(ye.useMemo)(
                            function () {
                                var e;
                                return n && null !== (e = q[n]) && void 0 !== e ? e : [];
                            },
                            [n]
                        )),
                        (t = Object(ye.useMemo)(
                            function () {
                                return n
                                    ? Nn()(Object.keys(r), function (e) {
                                          var t = r[e];
                                          return (null !== (e = F[n]) && void 0 !== e ? e : [])
                                              .map(function (e) {
                                                  return e.address === t.address ? null : [e, t];
                                              })
                                              .filter(function (e) {
                                                  return null !== e;
                                              });
                                      })
                                    : [];
                            },
                            [r, n]
                        )),
                        (a = Object(we.d)(function (e) {
                            return e.user.pairs;
                        })),
                        (i = Object(ye.useMemo)(
                            function () {
                                if (!n || !a) return [];
                                var t = a[n];
                                return t
                                    ? Object.keys(t).map(function (e) {
                                          return [Fn(t[e].token0), Fn(t[e].token1)];
                                      })
                                    : [];
                            },
                            [a, n]
                        )),
                        (c = Object(ye.useMemo)(
                            function () {
                                return i.concat(t).concat(e);
                            },
                            [t, e, i]
                        )),
                        Object(ye.useMemo)(
                            function () {
                                var t = c.reduce(function (e, t) {
                                    var n = Object(Ce.a)(t, 2),
                                        r = n[0],
                                        a = n[1],
                                        t = r.sortsBefore(a),
                                        n = t ? "".concat(r.address, ":").concat(a.address) : "".concat(a.address, ":").concat(r.address);
                                    return e[n] || (e[n] = t ? [r, a] : [a, r]), e;
                                }, {});
                                return Object.keys(t).map(function (e) {
                                    return t[e];
                                });
                            },
                            [c]
                        )),
                    d = Object(ye.useMemo)(
                        function () {
                            return u.map(function (e) {
                                return { liquidityToken: ((t = e), (t = (n = Object(Ce.a)(t, 2))[0]), (n = n[1]), new Ie.j(t.chainId, Ie.f.getAddress(t, n), 18, "Cake-LP", "Pancake LPs")), tokens: e };
                                var t, n;
                            });
                        },
                        [u]
                    ),
                    b = lr(
                        null != s ? s : void 0,
                        Object(ye.useMemo)(
                            function () {
                                return d.map(function (e) {
                                    return e.liquidityToken;
                                });
                            },
                            [d]
                        )
                    ),
                    p = Object(Ce.a)(b, 2),
                    j = p[0],
                    f = p[1],
                    b = Object(ye.useMemo)(
                        function () {
                            return d.filter(function (e) {
                                var e = e.liquidityToken;
                                return null === (e = j[e.address]) || void 0 === e ? void 0 : e.greaterThan("0");
                            });
                        },
                        [d, j]
                    ),
                    p = Si(
                        b.map(function (e) {
                            return e.tokens;
                        })
                    ),
                    b =
                        f ||
                        (null == p ? void 0 : p.length) < b.length ||
                        (null == p
                            ? void 0
                            : p.some(function (e) {
                                  return !e;
                              })),
                    p = p
                        .map(function (e) {
                            return Object(Ce.a)(e, 2)[1];
                        })
                        .filter(function (e) {
                            return Boolean(e);
                        });
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsx)(Zt, { activeIndex: 1 }),
                        Object(_e.jsxs)(Ic, {
                            children: [
                                Object(_e.jsx)(ao, {
                                    title: l(262, "Liquidity"),
                                    description: l(1168, "Add liquidity to receive LP tokens"),
                                    children: Object(_e.jsx)(Oe.c, { id: "join-pool-button", as: h.b, to: "/add/BNB", children: l(168, "Add Liquidity") }),
                                }),
                                Object(_e.jsx)(Ae, {
                                    gap: "lg",
                                    justify: "center",
                                    children: Object(_e.jsx)(Oe.g, {
                                        children: Object(_e.jsxs)(Ae, {
                                            gap: "12px",
                                            style: { width: "100%" },
                                            children: [
                                                Object(_e.jsxs)(Pe, {
                                                    padding: "0 8px",
                                                    children: [
                                                        Object(_e.jsx)(Oe.y, { color: o.colors.text, children: l(107, "Your Liquidity") }),
                                                        Object(_e.jsx)(Vr, {
                                                            text: l(1170, "When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below."),
                                                        }),
                                                    ],
                                                }),
                                                s
                                                    ? b
                                                        ? Object(_e.jsx)(Tt, { padding: "40px", children: Object(_e.jsx)(Oe.y, { color: "textDisabled", textAlign: "center", children: Object(_e.jsx)(Oi, { children: "Loading" }) }) })
                                                        : 0 < (null == p ? void 0 : p.length)
                                                        ? Object(_e.jsx)(_e.Fragment, {
                                                              children: p.map(function (e) {
                                                                  return Object(_e.jsx)(Ii, { pair: e }, e.liquidityToken.address);
                                                              }),
                                                          })
                                                        : Object(_e.jsx)(Tt, { padding: "40px", children: Object(_e.jsx)(Oe.y, { color: "textDisabled", textAlign: "center", children: l(104, "No liquidity found.") }) })
                                                    : Object(_e.jsx)(Tt, { padding: "40px", children: Object(_e.jsx)(Oe.y, { color: "textDisabled", textAlign: "center", children: l(156, "Connect to a wallet to view your liquidity.") }) }),
                                                Object(_e.jsxs)("div", {
                                                    children: [
                                                        Object(_e.jsxs)(Oe.y, {
                                                            fontSize: "14px",
                                                            style: { padding: ".5rem 0 .5rem 0" },
                                                            children: [l(106, "Don't see a pool you joined?"), " ", Object(_e.jsx)(at, { id: "import-pool-link", to: "/find", children: l(108, "Import it.") })],
                                                        }),
                                                        Object(_e.jsx)(Oe.y, { fontSize: "14px", style: { padding: ".5rem 0 .5rem 0" }, children: l(1172, "Or, if you staked your LP tokens in a farm, unstake them to see them here.") }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
            function co() {
                var t,
                    e = Ue().account,
                    n = Object(ye.useState)(!1),
                    r = Object(Ce.a)(n, 2),
                    a = r[0],
                    i = r[1],
                    c = Object(ye.useState)(Qc.TOKEN1),
                    o = Object(Ce.a)(c, 2),
                    s = o[0],
                    l = o[1],
                    u = Object(ye.useState)(Ie.d),
                    d = Object(Ce.a)(u, 2),
                    b = d[0],
                    p = d[1],
                    j = Object(ye.useState)(null),
                    n = Object(Ce.a)(j, 2),
                    r = n[0],
                    f = n[1],
                    c = Ri(null != b ? b : void 0, null != r ? r : void 0),
                    o = Object(Ce.a)(c, 2),
                    u = o[0],
                    h = o[1],
                    m =
                        ((t = Object(we.c)()),
                        Object(ye.useCallback)(
                            function (e) {
                                t(Ln({ serializedPair: { token0: zn((e = e).token0), token1: zn(e.token1) } }));
                            },
                            [t]
                        )),
                    d = Jt();
                Object(ye.useEffect)(
                    function () {
                        h && m(h);
                    },
                    [h, m]
                );
                (j = u === Ei.NOT_EXISTS || Boolean(u === Ei.EXISTS && h && Ie.e.equal(h.reserve0.raw, Ie.e.BigInt(0)) && Ie.e.equal(h.reserve1.raw, Ie.e.BigInt(0)))),
                    (n = dr(null != e ? e : void 0, null == h ? void 0 : h.liquidityToken)),
                    (c = Boolean(n && Ie.e.greaterThan(n.raw, Ie.e.BigInt(0)))),
                    (o = Object(ye.useCallback)(
                        function (e) {
                            (s === Qc.TOKEN0 ? p : f)(e);
                        },
                        [s]
                    )),
                    (n = Object(ye.useCallback)(
                        function () {
                            i(!1);
                        },
                        [i]
                    )),
                    (e = Object(_e.jsx)(Tt, {
                        padding: "45px 10px",
                        children: Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: e ? d(208, "Select a token to find your liquidity.") : d(1174, "Connect to a wallet to find pools") }),
                    }));
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsx)(Zt, { activeIndex: 1 }),
                        Object(_e.jsxs)(Ic, {
                            children: [
                                Object(_e.jsx)(ri, {}),
                                Object(_e.jsxs)(Oe.g, {
                                    children: [
                                        Object(_e.jsxs)(Ae, {
                                            gap: "md",
                                            children: [
                                                Object(_e.jsx)(Oe.c, {
                                                    onClick: function () {
                                                        i(!0), l(Qc.TOKEN0);
                                                    },
                                                    startIcon: b ? Object(_e.jsx)(Kr, { currency: b, style: { marginRight: ".5rem" } }) : null,
                                                    endIcon: Object(_e.jsx)(Oe.i, { width: "24px", color: "white" }),
                                                    width: "100%",
                                                    children: b ? b.symbol : d(82, "Select a Token"),
                                                }),
                                                Object(_e.jsx)(oe, { children: Object(_e.jsx)(Oe.a, { color: "textSubtle" }) }),
                                                Object(_e.jsx)(Oe.c, {
                                                    onClick: function () {
                                                        i(!0), l(Qc.TOKEN1);
                                                    },
                                                    startIcon: r ? Object(_e.jsx)(Kr, { currency: r, style: { marginRight: ".5rem" } }) : null,
                                                    endIcon: Object(_e.jsx)(Oe.i, { width: "24px", color: "white" }),
                                                    width: "100%",
                                                    children: r ? r.symbol : d(82, "Select a Token"),
                                                }),
                                                c &&
                                                    Object(_e.jsx)(oe, {
                                                        style: { justifyItems: "center", backgroundColor: "", padding: "12px 0px", borderRadius: "12px" },
                                                        children: Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: d(210, "Pool found!") }),
                                                    }),
                                                b && r
                                                    ? u === Ei.EXISTS
                                                        ? c && h
                                                            ? Object(_e.jsx)(Ti, { pair: h })
                                                            : Object(_e.jsx)(Tt, {
                                                                  padding: "45px 10px",
                                                                  children: Object(_e.jsxs)(Ae, {
                                                                      gap: "sm",
                                                                      justify: "center",
                                                                      children: [
                                                                          Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: d(212, "You don’t have liquidity in this pool yet.") }),
                                                                          Object(_e.jsx)(at, {
                                                                              to: "/add/".concat(li(b), "/").concat(li(r)),
                                                                              children: Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: d(168, "Add Liquidity") }),
                                                                          }),
                                                                      ],
                                                                  }),
                                                              })
                                                        : j
                                                        ? Object(_e.jsx)(Tt, {
                                                              padding: "45px 10px",
                                                              children: Object(_e.jsxs)(Ae, {
                                                                  gap: "sm",
                                                                  justify: "center",
                                                                  children: [
                                                                      Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: d(214, "No pool found.") }),
                                                                      Object(_e.jsx)(at, { to: "/add/".concat(li(b), "/").concat(li(r)), children: "Create pool." }),
                                                                  ],
                                                              }),
                                                          })
                                                        : u === Ei.INVALID
                                                        ? Object(_e.jsx)(Tt, {
                                                              padding: "45px 10px",
                                                              children: Object(_e.jsx)(Ae, { gap: "sm", justify: "center", children: Object(_e.jsx)(Oe.y, { style: { textAlign: "center" }, children: d(136, "Invalid pair.") }) }),
                                                          })
                                                        : u === Ei.LOADING
                                                        ? Object(_e.jsx)(Tt, {
                                                              padding: "45px 10px",
                                                              children: Object(_e.jsx)(Ae, {
                                                                  gap: "sm",
                                                                  justify: "center",
                                                                  children: Object(_e.jsxs)(Oe.y, { style: { textAlign: "center" }, children: ["Loading", Object(_e.jsx)(Sc, {})] }),
                                                              }),
                                                          })
                                                        : null
                                                    : e,
                                            ],
                                        }),
                                        Object(_e.jsx)(_a, { isOpen: a, onCurrencySelect: o, onDismiss: n, showCommonBases: !0, selectedCurrency: null !== (b = s === Qc.TOKEN0 ? r : b) && void 0 !== b ? b : void 0 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
            ((s = Qc = Qc || {})[(s.TOKEN0 = 0)] = "TOKEN0"), (s[(s.TOKEN1 = 1)] = "TOKEN1");
            var oo,
                so = n(2),
                lo = n(534),
                uo = n(535),
                bo = xe.default.input(
                    Object(i.a)([
                        "\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
                        "px;\n    width: ",
                        "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
                        ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
                        "px;\n    width: ",
                        "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
                        ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
                        "px;\n    width: ",
                        "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
                        ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ",
                        ",\n      ",
                        "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ",
                        ",\n      ",
                        "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
                        ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
                        ";\n  }\n  &::-ms-fill-upper {\n    background: ",
                        ";\n  }\n",
                    ]),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    }
                );
            function po(e) {
                var t = e.value,
                    n = e.onChange,
                    r = e.min,
                    a = void 0 === r ? 0 : r,
                    i = e.step,
                    c = void 0 === i ? 1 : i,
                    r = e.max,
                    i = void 0 === r ? 100 : r,
                    r = e.size,
                    e = void 0 === r ? 28 : r,
                    r = Object(ye.useCallback)(
                        function (e) {
                            n(parseInt(e.target.value));
                        },
                        [n]
                    );
                return Object(_e.jsx)(bo, { size: e, type: "range", value: t, style: { width: "90%", marginLeft: 15, marginRight: 15, padding: "15px 0" }, onChange: r, "aria-labelledby": "input slider", step: c, min: a, max: i });
            }
            ((D = oo = oo || {}).LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"), (D.LIQUIDITY = "LIQUIDITY"), (D.CURRENCY_A = "CURRENCY_A"), (D.CURRENCY_B = "CURRENCY_B");
            var jo = Object($.b)("burn/typeInputBurn");
            function fo() {
                return Object(we.d)(function (e) {
                    return e.burn;
                });
            }
            var ho = xe.default.div(Object(i.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"]), function (e) {
                    return e.theme.colors.borderColor;
                }),
                mo = xe.default.div(Object(i.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"]));
            function yo(e) {
                var n,
                    t = e.history,
                    r = e.match.params,
                    a = r.currencyIdA,
                    i = r.currencyIdB,
                    f = null !== (j = sr(a)) && void 0 !== j ? j : void 0,
                    h = null !== (w = sr(i)) && void 0 !== w ? w : void 0,
                    c = Ue(),
                    m = c.account,
                    y = c.chainId,
                    O = c.library,
                    o = Jt(),
                    s = Object(ye.useMemo)(
                        function () {
                            return [ui(f, y), ui(h, y)];
                        },
                        [f, h, y]
                    ),
                    l = Object(Ce.a)(s, 2),
                    x = l[0],
                    v = l[1],
                    u = Object(ye.useContext)(xe.ThemeContext),
                    d = fo(),
                    b = d.independentField,
                    e = d.typedValue,
                    r = (function (e, t) {
                        var n = Ue(),
                            r = n.account,
                            a = n.chainId,
                            i = fo(),
                            c = i.independentField,
                            o = i.typedValue,
                            s = Ri(e, t),
                            l = Object(Ce.a)(s, 2)[1],
                            u = ur(null != r ? r : void 0, [null == l ? void 0 : l.liquidityToken]),
                            n = null == u ? void 0 : u[null !== (d = null == l || null === (b = l.liquidityToken) || void 0 === b ? void 0 : b.address) && void 0 !== d ? d : ""],
                            i = [ui(e, a), ui(t, a)],
                            s = i[0],
                            u = i[1],
                            d = ((b = {}), Object(ke.a)(b, oo.CURRENCY_A, s), Object(ke.a)(b, oo.CURRENCY_B, u), Object(ke.a)(b, oo.LIQUIDITY, null == l ? void 0 : l.liquidityToken), b),
                            e = si(null == l ? void 0 : l.liquidityToken),
                            t = l && e && n && s && Ie.e.greaterThanOrEqual(e.raw, n.raw) ? new Ie.k(s, l.getLiquidityValue(s, e, n, !1).raw) : void 0,
                            a = l && e && n && u && Ie.e.greaterThanOrEqual(e.raw, n.raw) ? new Ie.k(u, l.getLiquidityValue(u, e, n, !1).raw) : void 0,
                            b = ((i = {}), Object(ke.a)(i, oo.CURRENCY_A, t), Object(ke.a)(i, oo.CURRENCY_B, a), i),
                            e = new Ie.g("0", "100");
                        c === oo.LIQUIDITY_PERCENT
                            ? (e = new Ie.g(o, "100"))
                            : c === oo.LIQUIDITY
                            ? null == l || !l.liquidityToken || ((i = sc(o, l.liquidityToken)) && n && !i.greaterThan(n) && (e = new Ie.g(i.raw, n.raw)))
                            : d[c] && ((d = sc(o, d[c])), (j = b[c]), d && j && !d.greaterThan(j) && (e = new Ie.g(d.raw, j.raw)));
                        var p,
                            j =
                                ((j = {}),
                                Object(ke.a)(j, oo.LIQUIDITY_PERCENT, e),
                                Object(ke.a)(j, oo.LIQUIDITY, n && e && e.greaterThan("0") ? new Ie.k(n.token, e.multiply(n.raw).quotient) : void 0),
                                Object(ke.a)(j, oo.CURRENCY_A, s && e && e.greaterThan("0") && t ? new Ie.k(s, e.multiply(t.raw).quotient) : void 0),
                                Object(ke.a)(j, oo.CURRENCY_B, u && e && e.greaterThan("0") && a ? new Ie.k(u, e.multiply(a.raw).quotient) : void 0),
                                j);
                        return r || (p = "Connect Wallet"), (j[oo.LIQUIDITY] && j[oo.CURRENCY_A] && j[oo.CURRENCY_B]) || (p = null !== p && void 0 !== p ? p : "Enter an amount"), { pair: l, parsedAmounts: j, error: p };
                    })(null != f ? f : void 0, null != h ? h : void 0),
                    p = r.pair,
                    g = r.parsedAmounts,
                    j = r.error,
                    C =
                        ((n = Object(we.c)()),
                        Object(ye.useCallback)(
                            function (e, t) {
                                n(jo({ field: e, typedValue: t }));
                            },
                            [n]
                        )),
                    w = !j,
                    c = Object(ye.useState)(!1),
                    s = Object(Ce.a)(c, 2),
                    l = s[0],
                    k = s[1],
                    d = Object(ye.useState)(!1),
                    r = Object(Ce.a)(d, 2),
                    T = r[0],
                    I = r[1],
                    c = Object(ye.useState)(!1),
                    s = Object(Ce.a)(c, 2),
                    d = s[0],
                    E = s[1],
                    r = Object(ye.useState)(""),
                    c = Object(Ce.a)(r, 2),
                    N = c[0],
                    S = c[1],
                    s = Wn(),
                    R = Object(Ce.a)(s, 1)[0],
                    r = Vn(),
                    U = Object(Ce.a)(r, 1)[0],
                    s =
                        ((c = {}),
                        Object(ke.a)(c, oo.LIQUIDITY_PERCENT, g[oo.LIQUIDITY_PERCENT].equalTo("0") ? "0" : g[oo.LIQUIDITY_PERCENT].lessThan(new Ie.g("1", "100")) ? "<1" : g[oo.LIQUIDITY_PERCENT].toFixed(0)),
                        Object(ke.a)(c, oo.LIQUIDITY, b === oo.LIQUIDITY ? e : null !== (B = null === (A = g[oo.LIQUIDITY]) || void 0 === A ? void 0 : A.toSignificant(6)) && void 0 !== B ? B : ""),
                        Object(ke.a)(c, oo.CURRENCY_A, b === oo.CURRENCY_A ? e : null !== (_ = null === (M = g[oo.CURRENCY_A]) || void 0 === M ? void 0 : M.toSignificant(6)) && void 0 !== _ ? _ : ""),
                        Object(ke.a)(c, oo.CURRENCY_B, b === oo.CURRENCY_B ? e : null !== (W = null === (V = g[oo.CURRENCY_B]) || void 0 === V ? void 0 : V.toSignificant(6)) && void 0 !== W ? W : ""),
                        c),
                    A = null === (r = g[oo.LIQUIDITY_PERCENT]) || void 0 === r ? void 0 : r.equalTo(new Ie.g("1")),
                    P = Zn(null == p || null === (J = p.liquidityToken) || void 0 === J ? void 0 : J.address, Qn.abi, void 0),
                    B = Object(ye.useState)(null),
                    M = Object(Ce.a)(B, 2),
                    L = M[0],
                    D = M[1],
                    _ = Zi(g[oo.LIQUIDITY], Ee),
                    b = Object(Ce.a)(_, 2),
                    Y = b[0],
                    z = b[1];
                function F() {
                    return (F = Object(ge.a)(
                        ve.a.mark(function e() {
                            var t, n, r, a, i, c;
                            return ve.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (P && p && O) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if ((t = g[oo.LIQUIDITY])) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 5:
                                            return (e.next = 7), P.nonces(m);
                                        case 7:
                                            (c = e.sent),
                                                (n = Math.ceil(Date.now() / 1e3) + R),
                                                (r = [
                                                    { name: "name", type: "string" },
                                                    { name: "version", type: "string" },
                                                    { name: "chainId", type: "uint256" },
                                                    { name: "verifyingContract", type: "address" },
                                                ]),
                                                (a = { name: "Pancake LPs", version: "1", chainId: y, verifyingContract: p.liquidityToken.address }),
                                                (i = [
                                                    { name: "owner", type: "address" },
                                                    { name: "spender", type: "address" },
                                                    { name: "value", type: "uint256" },
                                                    { name: "nonce", type: "uint256" },
                                                    { name: "deadline", type: "uint256" },
                                                ]),
                                                (c = { owner: m, spender: Ee, value: t.raw.toString(), nonce: c.toHexString(), deadline: n }),
                                                (c = JSON.stringify({ types: { EIP712Domain: r, Permit: i }, domain: a, primaryType: "Permit", message: c })),
                                                O.send("eth_signTypedData_v4", [m, c])
                                                    .then(so.m)
                                                    .then(function (e) {
                                                        D({ v: e.v, r: e.r, s: e.s, deadline: n });
                                                    })
                                                    .catch(function (e) {
                                                        4001 !== (null == e ? void 0 : e.code) && z();
                                                    });
                                        case 15:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var q = Object(ye.useCallback)(
                        function (e, t) {
                            return D(null), C(e, t);
                        },
                        [C]
                    ),
                    e = Object(ye.useCallback)(
                        function (e) {
                            return q(oo.LIQUIDITY, e);
                        },
                        [q]
                    ),
                    V = Object(ye.useCallback)(
                        function (e) {
                            return q(oo.CURRENCY_A, e);
                        },
                        [q]
                    ),
                    W = Object(ye.useCallback)(
                        function (e) {
                            return q(oo.CURRENCY_B, e);
                        },
                        [q]
                    ),
                    H = qi();
                function Q() {
                    return G.apply(this, arguments);
                }
                function G() {
                    return (G = Object(ge.a)(
                        ve.a.mark(function e() {
                            var t, n, r, a, i, c, o, s, l, u, d, b, p, j;
                            return ve.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (y && O && m) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if (((t = g[oo.CURRENCY_A]), (n = g[oo.CURRENCY_B]), t && n)) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing currency amounts");
                                        case 5:
                                            if (((r = tt(0, O, m)), (j = {}), Object(ke.a)(j, oo.CURRENCY_A, Ze(t, U)[0]), Object(ke.a)(j, oo.CURRENCY_B, Ze(n, U)[0]), (a = j), f && h)) {
                                                e.next = 9;
                                                break;
                                            }
                                            throw new Error("missing tokens");
                                        case 9:
                                            if ((i = g[oo.LIQUIDITY])) {
                                                e.next = 12;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 12:
                                            if (((c = h === Ie.d), (o = f === Ie.d || c), (s = Math.ceil(Date.now() / 1e3) + R), x && v)) {
                                                e.next = 17;
                                                break;
                                            }
                                            throw new Error("could not wrap");
                                        case 17:
                                            if (Y !== Hi.APPROVED) {
                                                e.next = 21;
                                                break;
                                            }
                                            (u = o
                                                ? ((l = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"]),
                                                  [(c ? x : v).address, i.raw.toString(), a[c ? oo.CURRENCY_A : oo.CURRENCY_B].toString(), a[c ? oo.CURRENCY_B : oo.CURRENCY_A].toString(), m, s])
                                                : ((l = ["removeLiquidity"]), [x.address, v.address, i.raw.toString(), a[oo.CURRENCY_A].toString(), a[oo.CURRENCY_B].toString(), m, s])),
                                                (e.next = 26);
                                            break;
                                        case 21:
                                            if (null === L) {
                                                e.next = 25;
                                                break;
                                            }
                                            (u = o
                                                ? ((l = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"]),
                                                  [(c ? x : v).address, i.raw.toString(), a[c ? oo.CURRENCY_A : oo.CURRENCY_B].toString(), a[c ? oo.CURRENCY_B : oo.CURRENCY_A].toString(), m, L.deadline, !1, L.v, L.r, L.s])
                                                : ((l = ["removeLiquidityWithPermit"]), [x.address, v.address, i.raw.toString(), a[oo.CURRENCY_A].toString(), a[oo.CURRENCY_B].toString(), m, L.deadline, !1, L.v, L.r, L.s])),
                                                (e.next = 26);
                                            break;
                                        case 25:
                                            throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                        case 26:
                                            return (
                                                (e.next = 28),
                                                Promise.all(
                                                    l.map(function (t, n) {
                                                        var e;
                                                        return (e = r.estimateGas)[t]
                                                            .apply(e, Object(Z.a)(u))
                                                            .then($e)
                                                            .catch(function (e) {
                                                                console.error("estimateGas failed", n, t, u, e);
                                                            });
                                                    })
                                                )
                                            );
                                        case 28:
                                            if (
                                                ((d = e.sent),
                                                -1 !==
                                                    (b = d.findIndex(function (e) {
                                                        return He.a.isBigNumber(e);
                                                    })))
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            console.error("This transaction would fail. Please contact support."), (e.next = 39);
                                            break;
                                        case 34:
                                            return (
                                                (p = l[b]),
                                                (j = d[b]),
                                                E(!0),
                                                (e.next = 39),
                                                r[p]
                                                    .apply(r, Object(Z.a)(u).concat([{ gasLimit: j }]))
                                                    .then(function (e) {
                                                        var t;
                                                        E(!1),
                                                            H(e, {
                                                                summary: "Remove "
                                                                    .concat(null === (t = g[oo.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ")
                                                                    .concat(null == f ? void 0 : f.symbol, " and ")
                                                                    .concat(null === (t = g[oo.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ")
                                                                    .concat(null == h ? void 0 : h.symbol),
                                                            }),
                                                            S(e.hash);
                                                    })
                                                    .catch(function (e) {
                                                        E(!1), console.error(e);
                                                    })
                                            );
                                        case 39:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function K() {
                    var e;
                    return Object(_e.jsxs)(Ae, {
                        gap: "md",
                        style: { marginTop: "20px" },
                        children: [
                            Object(_e.jsxs)(Pe, {
                                align: "flex-end",
                                children: [
                                    Object(_e.jsx)(Oe.y, { fontSize: "24px", children: null === (e = g[oo.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6) }),
                                    Object(_e.jsxs)(Le, {
                                        gap: "4px",
                                        children: [Object(_e.jsx)(Kr, { currency: f, size: "24px" }), Object(_e.jsx)(Oe.y, { fontSize: "24px", style: { marginLeft: "10px" }, children: null == f ? void 0 : f.symbol })],
                                    }),
                                ],
                            }),
                            Object(_e.jsx)(Le, { children: Object(_e.jsx)(lo.a, { size: "16", color: u.colors.textSubtle }) }),
                            Object(_e.jsxs)(Pe, {
                                align: "flex-end",
                                children: [
                                    Object(_e.jsx)(Oe.y, { fontSize: "24px", children: null === (e = g[oo.CURRENCY_B]) || void 0 === e ? void 0 : e.toSignificant(6) }),
                                    Object(_e.jsxs)(Le, {
                                        gap: "4px",
                                        children: [Object(_e.jsx)(Kr, { currency: h, size: "24px" }), Object(_e.jsx)(Oe.y, { fontSize: "24px", style: { marginLeft: "10px" }, children: null == h ? void 0 : h.symbol })],
                                    }),
                                ],
                            }),
                            Object(_e.jsx)(Oe.y, {
                                small: !0,
                                color: "textSubtle",
                                textAlign: "left",
                                padding: "12px 0 0 0",
                                style: { fontStyle: "italic" },
                                children: "Output is estimated. If the price changes by more than ".concat(U / 100, "% your transaction will revert."),
                            }),
                        ],
                    });
                }
                function X() {
                    var e;
                    return Object(_e.jsxs)(_e.Fragment, {
                        children: [
                            Object(_e.jsxs)(Pe, {
                                children: [
                                    Object(_e.jsxs)(Oe.y, { color: "textSubtle", children: ["LP ".concat(null == f ? void 0 : f.symbol, "/").concat(null == h ? void 0 : h.symbol), " Burned"] }),
                                    Object(_e.jsxs)(Le, {
                                        children: [Object(_e.jsx)(qa, { currency0: f, currency1: h, margin: !0 }), Object(_e.jsx)(Oe.y, { children: null === (e = g[oo.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6) })],
                                    }),
                                ],
                            }),
                            p &&
                                Object(_e.jsxs)(_e.Fragment, {
                                    children: [
                                        Object(_e.jsxs)(Pe, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, { color: "textSubtle", children: o(1182, "Price") }),
                                                Object(_e.jsxs)(Oe.y, { children: ["1 ", null == f ? void 0 : f.symbol, " = ", x ? p.priceOf(x).toSignificant(6) : "-", " ", null == h ? void 0 : h.symbol] }),
                                            ],
                                        }),
                                        Object(_e.jsxs)(Pe, {
                                            children: [
                                                Object(_e.jsx)("div", {}),
                                                Object(_e.jsxs)(Oe.y, { children: ["1 ", null == h ? void 0 : h.symbol, " = ", v ? p.priceOf(v).toSignificant(6) : "-", " ", null == f ? void 0 : f.symbol] }),
                                            ],
                                        }),
                                    ],
                                }),
                            Object(_e.jsx)(Oe.c, { disabled: !(Y === Hi.APPROVED || null !== L), onClick: Q, children: o(1136, "Confirm") }),
                        ],
                    });
                }
                var J = "Removing "
                        .concat(null === (c = g[oo.CURRENCY_A]) || void 0 === c ? void 0 : c.toSignificant(6), " ")
                        .concat(null == f ? void 0 : f.symbol, " and ")
                        .concat(null === (r = g[oo.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(6), " ")
                        .concat(null == h ? void 0 : h.symbol),
                    B = Object(ye.useCallback)(
                        function (e) {
                            q(oo.LIQUIDITY_PERCENT, e.toString());
                        },
                        [q]
                    ),
                    M = f === Ie.d || h === Ie.d,
                    _ = Boolean(y && ((f && Object(Ie.o)(Ie.n[y], f)) || (h && Object(Ie.o)(Ie.n[y], h)))),
                    b = Object(ye.useCallback)(
                        function (e) {
                            i && li(e) === i ? t.push("/remove/".concat(li(e), "/").concat(a)) : t.push("/remove/".concat(li(e), "/").concat(i));
                        },
                        [a, i, t]
                    ),
                    c = Object(ye.useCallback)(
                        function (e) {
                            a && li(e) === a ? t.push("/remove/".concat(i, "/").concat(li(e))) : t.push("/remove/".concat(a, "/").concat(li(e)));
                        },
                        [a, i, t]
                    ),
                    $ = Object(ye.useCallback)(
                        function () {
                            k(!1), D(null), N && q(oo.LIQUIDITY_PERCENT, "0"), S("");
                        },
                        [q, N]
                    ),
                    r = (function (e, t, n) {
                        var r = 2 < arguments.length && void 0 !== n ? n : 100,
                            a = Object(ye.useState)(function () {
                                return e;
                            }),
                            n = Object(Ce.a)(a, 2),
                            a = n[0],
                            i = n[1],
                            c = Object(ye.useRef)(),
                            n = Object(ye.useCallback)(
                                function (e) {
                                    i(e),
                                        c.current && clearTimeout(c.current),
                                        (c.current = setTimeout(function () {
                                            t(e), (c.current = void 0);
                                        }, r));
                                },
                                [r, t]
                            );
                        return (
                            Object(ye.useEffect)(
                                function () {
                                    c.current && (clearTimeout(c.current), (c.current = void 0)), i(e);
                                },
                                [e]
                            ),
                            [a, n]
                        );
                    })(Number.parseInt(g[oo.LIQUIDITY_PERCENT].toFixed(0)), B),
                    B = Object(Ce.a)(r, 2),
                    r = B[0],
                    B = B[1];
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsxs)(Ic, {
                            children: [
                                Object(_e.jsx)(ai, { adding: !1 }),
                                Object(_e.jsxs)(Ec, {
                                    children: [
                                        Object(_e.jsx)(Qt, {
                                            isOpen: l,
                                            onDismiss: $,
                                            attemptingTxn: d,
                                            hash: N || "",
                                            content: function () {
                                                return Object(_e.jsx)(Wt, { title: o(1156, "You will receive"), onDismiss: $, topContent: K, bottomContent: X });
                                            },
                                            pendingText: J,
                                        }),
                                        Object(_e.jsxs)(Ae, {
                                            gap: "md",
                                            children: [
                                                Object(_e.jsx)(mo, {
                                                    children: Object(_e.jsx)(ho, {
                                                        children: Object(_e.jsxs)(Ae, {
                                                            children: [
                                                                Object(_e.jsxs)(Pe, {
                                                                    children: [
                                                                        Object(_e.jsx)(Oe.y, { children: "Amount" }),
                                                                        Object(_e.jsx)(Nc, {
                                                                            onClick: function () {
                                                                                I(!T);
                                                                            },
                                                                            children: T ? o(1184, "Simple") : o(1186, "Detailed"),
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(_e.jsx)(Oe.n, { justifyContent: "start", children: Object(_e.jsxs)(Oe.y, { fontSize: "64px", children: [s[oo.LIQUIDITY_PERCENT], "%"] }) }),
                                                                !T &&
                                                                    Object(_e.jsxs)(_e.Fragment, {
                                                                        children: [
                                                                            Object(_e.jsx)(Oe.n, { mb: "8px", children: Object(_e.jsx)(po, { value: r, onChange: B }) }),
                                                                            Object(_e.jsxs)(Oe.n, {
                                                                                justifyContent: "space-around",
                                                                                children: [
                                                                                    Object(_e.jsx)(Oe.c, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return q(oo.LIQUIDITY_PERCENT, "25");
                                                                                        },
                                                                                        children: "25%",
                                                                                    }),
                                                                                    Object(_e.jsx)(Oe.c, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return q(oo.LIQUIDITY_PERCENT, "50");
                                                                                        },
                                                                                        children: "50%",
                                                                                    }),
                                                                                    Object(_e.jsx)(Oe.c, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return q(oo.LIQUIDITY_PERCENT, "75");
                                                                                        },
                                                                                        children: "75%",
                                                                                    }),
                                                                                    Object(_e.jsx)(Oe.c, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return q(oo.LIQUIDITY_PERCENT, "100");
                                                                                        },
                                                                                        children: o(166, "Max"),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                !T &&
                                                    Object(_e.jsxs)(_e.Fragment, {
                                                        children: [
                                                            Object(_e.jsx)(oe, { children: Object(_e.jsx)(uo.a, { size: "16", color: u.colors.textSubtle }) }),
                                                            Object(_e.jsx)(mo, {
                                                                children: Object(_e.jsx)(ho, {
                                                                    children: Object(_e.jsxs)(Ae, {
                                                                        gap: "10px",
                                                                        children: [
                                                                            Object(_e.jsxs)(Pe, {
                                                                                children: [
                                                                                    Object(_e.jsx)(Oe.y, { fontSize: "24px", children: s[oo.CURRENCY_A] || "-" }),
                                                                                    Object(_e.jsxs)(Le, {
                                                                                        children: [
                                                                                            Object(_e.jsx)(Kr, { currency: f, style: { marginRight: "12px" } }),
                                                                                            Object(_e.jsx)(Oe.y, { fontSize: "24px", id: "remove-liquidity-tokena-symbol", children: null == f ? void 0 : f.symbol }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(_e.jsxs)(Pe, {
                                                                                children: [
                                                                                    Object(_e.jsx)(Oe.y, { fontSize: "24px", children: s[oo.CURRENCY_B] || "-" }),
                                                                                    Object(_e.jsxs)(Le, {
                                                                                        children: [
                                                                                            Object(_e.jsx)(Kr, { currency: h, style: { marginRight: "12px" } }),
                                                                                            Object(_e.jsx)(Oe.y, { fontSize: "24px", id: "remove-liquidity-tokenb-symbol", children: null == h ? void 0 : h.symbol }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            y && (_ || M)
                                                                                ? Object(_e.jsx)(Pe, {
                                                                                      style: { justifyContent: "flex-end" },
                                                                                      children: M
                                                                                          ? Object(_e.jsx)(at, {
                                                                                                to: "/remove/".concat(f === Ie.d ? Ie.n[y].address : a, "/").concat(h === Ie.d ? Ie.n[y].address : i),
                                                                                                children: o(1188, "Receive WBNB"),
                                                                                            })
                                                                                          : _
                                                                                          ? Object(_e.jsx)(at, {
                                                                                                to: "/remove/".concat(f && Object(Ie.o)(f, Ie.n[y]) ? "BNB" : a, "/").concat(h && Object(Ie.o)(h, Ie.n[y]) ? "BNB" : i),
                                                                                                children: o(1190, "Receive BNB"),
                                                                                            })
                                                                                          : null,
                                                                                  })
                                                                                : null,
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                Object(_e.jsxs)(mo, {
                                                    style: { paddingBottom: "24px" },
                                                    children: [
                                                        T &&
                                                            Object(_e.jsxs)(_e.Fragment, {
                                                                children: [
                                                                    Object(_e.jsx)(Za, {
                                                                        value: s[oo.LIQUIDITY],
                                                                        onUserInput: e,
                                                                        onMax: function () {
                                                                            q(oo.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !A,
                                                                        disableCurrencySelect: !0,
                                                                        currency: null == p ? void 0 : p.liquidityToken,
                                                                        pair: p,
                                                                        id: "liquidity-amount",
                                                                    }),
                                                                    Object(_e.jsx)(oe, { children: Object(_e.jsx)(uo.a, { size: "16", color: u.colors.textSubtle }) }),
                                                                    Object(_e.jsx)(Za, {
                                                                        hideBalance: !0,
                                                                        value: s[oo.CURRENCY_A],
                                                                        onUserInput: V,
                                                                        onMax: function () {
                                                                            return q(oo.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !A,
                                                                        currency: f,
                                                                        label: "Output",
                                                                        onCurrencySelect: b,
                                                                        id: "remove-liquidity-tokena",
                                                                    }),
                                                                    Object(_e.jsx)(oe, { children: Object(_e.jsx)(lo.a, { size: "16", color: u.colors.textSubtle }) }),
                                                                    Object(_e.jsx)(Za, {
                                                                        hideBalance: !0,
                                                                        value: s[oo.CURRENCY_B],
                                                                        onUserInput: W,
                                                                        onMax: function () {
                                                                            return q(oo.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !A,
                                                                        currency: h,
                                                                        label: "Output",
                                                                        onCurrencySelect: c,
                                                                        id: "remove-liquidity-tokenb",
                                                                    }),
                                                                ],
                                                            }),
                                                        p &&
                                                            Object(_e.jsxs)("div", {
                                                                style: { padding: "24px" },
                                                                children: [
                                                                    Object(_e.jsxs)(Oe.n, {
                                                                        justifyContent: "space-between",
                                                                        mb: "8px",
                                                                        children: [
                                                                            "Price:",
                                                                            Object(_e.jsxs)("div", { children: ["1 ", null == f ? void 0 : f.symbol, " = ", x ? p.priceOf(x).toSignificant(6) : "-", " ", null == h ? void 0 : h.symbol] }),
                                                                        ],
                                                                    }),
                                                                    Object(_e.jsxs)(Oe.n, {
                                                                        justifyContent: "space-between",
                                                                        children: [
                                                                            Object(_e.jsx)("div", {}),
                                                                            Object(_e.jsxs)("div", { children: ["1 ", null == h ? void 0 : h.symbol, " = ", v ? p.priceOf(v).toSignificant(6) : "-", " ", null == f ? void 0 : f.symbol] }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        Object(_e.jsx)("div", {
                                                            style: { position: "relative" },
                                                            children: m
                                                                ? Object(_e.jsxs)(Pe, {
                                                                      children: [
                                                                          Object(_e.jsx)(Oe.c, {
                                                                              onClick: function () {
                                                                                  return F.apply(this, arguments);
                                                                              },
                                                                              variant: Y === Hi.APPROVED || null !== L ? "success" : "primary",
                                                                              disabled: Y !== Hi.NOT_APPROVED || null !== L,
                                                                              mr: "8px",
                                                                              children: Y === Hi.PENDING ? Object(_e.jsx)(Oi, { children: "Approving" }) : Y === Hi.APPROVED || null !== L ? "Approved" : "Approve",
                                                                          }),
                                                                          Object(_e.jsx)(Oe.c, {
                                                                              onClick: function () {
                                                                                  k(!0);
                                                                              },
                                                                              disabled: !w || (null === L && Y !== Hi.APPROVED),
                                                                              variant: !w && g[oo.CURRENCY_A] && g[oo.CURRENCY_B] ? "danger" : "primary",
                                                                              children: j || "Remove",
                                                                          }),
                                                                      ],
                                                                  })
                                                                : Object(_e.jsx)(kc, { width: "100%" }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        p ? Object(_e.jsx)(Ae, { style: { minWidth: "20rem", marginTop: "1rem" }, children: Object(_e.jsx)(Ti, { showUnwrapped: _, pair: p }) }) : null,
                    ],
                });
            }
            var Oo = xe.default.div(Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                xo = xe.default.div(
                    Object(i.a)([
                        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
                        ";\n  transition: border-color 300ms ",
                        ",\n    color 500ms ",
                        ";\n  background-color: ",
                        ";\n",
                    ]),
                    function (e) {
                        var t = e.error,
                            e = e.theme;
                        return t ? e.colors.failure : e.colors.invertedContrast;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                vo = xe.default.div(Object(i.a)(["\n  flex: 1;\n  padding: 1rem;\n"])),
                go = xe.default.input(
                    Object(i.a)([
                        "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
                        ";\n  transition: color 300ms ",
                        ";\n  color: ",
                        ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
                        ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                        ";\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        var t = e.error,
                            e = e.theme;
                        return t ? e.colors.failure : e.colors.primary;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    }
                );
            function Co(e) {
                var t = e.id,
                    n = e.value,
                    r = e.onChange,
                    a = Ue().chainId,
                    i = Jt(),
                    c = ac(n),
                    o = c.address,
                    s = c.loading,
                    e = c.name,
                    c = Object(ye.useCallback)(
                        function (e) {
                            e = e.target.value.replace(/\s+/g, "");
                            r(e);
                        },
                        [r]
                    ),
                    s = Boolean(0 < n.length && !s && !o);
                return Object(_e.jsx)(Oo, {
                    id: t,
                    children: Object(_e.jsx)(xo, {
                        error: s,
                        children: Object(_e.jsx)(vo, {
                            children: Object(_e.jsxs)(Ae, {
                                gap: "md",
                                children: [
                                    Object(_e.jsxs)(Pe, {
                                        children: [
                                            Object(_e.jsx)(Oe.y, { color: "textSubtle", fontWeight: 500, fontSize: "14px", children: i(1138, "Recipient") }),
                                            o && a && Object(_e.jsx)(ct, { href: Xe(a, null != e ? e : o, "address"), style: { fontSize: "14px" }, children: i(116, "(View on BscScan)") }),
                                        ],
                                    }),
                                    Object(_e.jsx)(go, {
                                        className: "recipient-address-input",
                                        type: "text",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false",
                                        placeholder: i(1140, "Wallet Address or ENS name"),
                                        error: s,
                                        pattern: "^(0x[a-fA-F0-9]{40})$",
                                        onChange: c,
                                        value: n,
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            var wo = n(536);
            function ko(e) {
                e = e.priceImpact;
                return Object(_e.jsx)(mi, { fontSize: "14px", severity: $i(e), children: e ? (e.lessThan(H) ? "<0.01%" : "".concat(e.toFixed(2), "%")) : "-" });
            }
            function To(e) {
                var t = e.trade,
                    n = e.onConfirm,
                    r = e.allowedSlippage,
                    a = e.swapErrorMessage,
                    i = e.disabledConfirm,
                    c = Object(ye.useState)(!1),
                    o = Object(Ce.a)(c, 2),
                    s = o[0],
                    l = o[1],
                    u = Object(ye.useMemo)(
                        function () {
                            return Ji(t, r);
                        },
                        [r, t]
                    ),
                    d = Object(ye.useMemo)(
                        function () {
                            return Xi(t);
                        },
                        [t]
                    ),
                    b = d.priceImpactWithoutFee,
                    p = d.realizedLPFee,
                    e = $i(b),
                    c = Jt();
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsxs)(Ae, {
                            gap: "0px",
                            children: [
                                Object(_e.jsxs)(Pe, {
                                    align: "center",
                                    children: [
                                        Object(_e.jsx)(Oe.y, { fontSize: "14px", children: "Price" }),
                                        Object(_e.jsxs)(Oe.y, {
                                            fontSize: "14px",
                                            style: { justifyContent: "center", alignItems: "center", display: "flex", textAlign: "right", paddingLeft: "8px", fontWeight: 500 },
                                            children: [
                                                ((o = s),
                                                (d = t)
                                                    ? o
                                                        ? "".concat(d.executionPrice.invert().toSignificant(6), " ").concat(d.inputAmount.currency.symbol, " / ").concat(d.outputAmount.currency.symbol)
                                                        : "".concat(d.executionPrice.toSignificant(6), " ").concat(d.outputAmount.currency.symbol, " / ").concat(d.inputAmount.currency.symbol)
                                                    : ""),
                                                Object(_e.jsx)(yi, {
                                                    onClick: function () {
                                                        return l(!s);
                                                    },
                                                    children: Object(_e.jsx)(wo.a, { size: 14 }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsxs)(Le, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, { fontSize: "14px", children: t.tradeType === Ie.m.EXACT_INPUT ? c(1210, "Minimum received") : c(220, "Maximum sold") }),
                                                Object(_e.jsx)(Vr, { text: c(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.") }),
                                            ],
                                        }),
                                        Object(_e.jsxs)(Le, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, {
                                                    fontSize: "14px",
                                                    children:
                                                        t.tradeType === Ie.m.EXACT_INPUT
                                                            ? null !== (d = null === (d = u[Ui.OUTPUT]) || void 0 === d ? void 0 : d.toSignificant(4)) && void 0 !== d
                                                                ? d
                                                                : "-"
                                                            : null !== (u = null === (u = u[Ui.INPUT]) || void 0 === u ? void 0 : u.toSignificant(4)) && void 0 !== u
                                                            ? u
                                                            : "-",
                                                }),
                                                Object(_e.jsx)(Oe.y, { fontSize: "14px", marginLeft: "4px", children: (t.tradeType === Ie.m.EXACT_INPUT ? t.outputAmount : t.inputAmount).currency.symbol }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsxs)(Le, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, { fontSize: "14px", children: c(226, "Price Impact") }),
                                                Object(_e.jsx)(Vr, { text: c(224, "The difference between the market price and your price due to trade size.") }),
                                            ],
                                        }),
                                        Object(_e.jsx)(ko, { priceImpact: b }),
                                    ],
                                }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsxs)(Le, {
                                            children: [
                                                Object(_e.jsx)(Oe.y, { fontSize: "14px", children: c(228, "Liquidity Provider Fee") }),
                                                Object(_e.jsx)(Vr, { text: c(999, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the TYME EXCHANGE treasury.") }),
                                            ],
                                        }),
                                        Object(_e.jsx)(Oe.y, { fontSize: "14px", children: p ? "".concat(null == p ? void 0 : p.toSignificant(6), " ").concat(t.inputAmount.currency.symbol) : "-" }),
                                    ],
                                }),
                            ],
                        }),
                        Object(_e.jsxs)(Me, {
                            children: [
                                Object(_e.jsx)(Oe.c, { onClick: n, disabled: i, variant: 2 < e ? "danger" : "primary", mt: "10px", id: "confirm-swap-or-send", width: "100%", children: 2 < e ? "Swap Anyway" : "Confirm Swap" }),
                                a ? Object(_e.jsx)(gi, { error: a }) : null,
                            ],
                        }),
                    ],
                });
            }
            var Io = Object(xe.default)(Oe.y)(Object(i.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"]), function (e) {
                return e.theme.colors.primary;
            });
            function Eo(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    r = e.recipient,
                    a = e.showAcceptChanges,
                    i = e.onAcceptChanges,
                    c = Object(ye.useMemo)(
                        function () {
                            return Ji(t, n);
                        },
                        [t, n]
                    ),
                    o = $i(
                        Object(ye.useMemo)(
                            function () {
                                return Xi(t);
                            },
                            [t]
                        ).priceImpactWithoutFee
                    ),
                    e = Object(ye.useContext)(xe.ThemeContext);
                return Object(_e.jsxs)(Ae, {
                    gap: "md",
                    style: { marginTop: "20px" },
                    children: [
                        Object(_e.jsxs)(Pe, {
                            align: "flex-end",
                            children: [
                                Object(_e.jsxs)(Le, {
                                    gap: "0px",
                                    children: [
                                        Object(_e.jsx)(Kr, { currency: t.inputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        Object(_e.jsx)(Oe.y, { fontSize: "24px", color: a && t.tradeType === Ie.m.EXACT_OUTPUT ? e.colors.primary : "text", children: t.inputAmount.toSignificant(6) }),
                                    ],
                                }),
                                Object(_e.jsx)(Le, { gap: "0px", children: Object(_e.jsx)(Oe.y, { fontSize: "24px", style: { marginLeft: "10px", fontWeight: 500 }, children: t.inputAmount.currency.symbol }) }),
                            ],
                        }),
                        Object(_e.jsx)(Le, { children: Object(_e.jsx)(uo.a, { size: "16", color: e.colors.textSubtle, style: { marginLeft: "4px", minWidth: "16px" } }) }),
                        Object(_e.jsxs)(Pe, {
                            align: "flex-end",
                            children: [
                                Object(_e.jsxs)(Le, {
                                    gap: "0px",
                                    children: [
                                        Object(_e.jsx)(Kr, { currency: t.outputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        Object(_e.jsx)(Oe.y, {
                                            fontSize: "24px",
                                            style: { marginLeft: "10px", fontWeight: 500 },
                                            color: 2 < o ? e.colors.failure : a && t.tradeType === Ie.m.EXACT_INPUT ? e.colors.primary : "text",
                                            children: t.outputAmount.toSignificant(6),
                                        }),
                                    ],
                                }),
                                Object(_e.jsx)(Le, { gap: "0px", children: Object(_e.jsx)(Oe.y, { fontSize: "24px", style: { marginLeft: "10px", fontWeight: 500 }, children: t.outputAmount.currency.symbol }) }),
                            ],
                        }),
                        a
                            ? Object(_e.jsx)(Ci, {
                                  justify: "flex-start",
                                  gap: "0px",
                                  children: Object(_e.jsxs)(Pe, {
                                      children: [
                                          Object(_e.jsxs)(Le, { children: [Object(_e.jsx)(Ht.a, { size: 20, style: { marginRight: "8px", minWidth: 24 } }), Object(_e.jsx)(Oe.y, { color: "primary", children: " Price Updated" })] }),
                                          Object(_e.jsx)(Oe.c, { onClick: i, children: "Accept" }),
                                      ],
                                  }),
                              })
                            : null,
                        Object(_e.jsx)(Ae, {
                            justify: "flex-start",
                            gap: "sm",
                            style: { padding: "16px 0 0" },
                            children:
                                t.tradeType === Ie.m.EXACT_INPUT
                                    ? Object(_e.jsxs)(Io, {
                                          children: [
                                              "Output is estimated. You will receive at least ",
                                              Object(_e.jsxs)("span", { children: [null === (i = c[Ui.OUTPUT]) || void 0 === i ? void 0 : i.toSignificant(6), " ", t.outputAmount.currency.symbol] }),
                                              " or the transaction will revert.",
                                          ],
                                      })
                                    : Object(_e.jsxs)(Io, {
                                          children: [
                                              "Input is estimated. You will sell at most ",
                                              Object(_e.jsxs)("span", { children: [null === (c = c[Ui.INPUT]) || void 0 === c ? void 0 : c.toSignificant(6), " ", t.inputAmount.currency.symbol] }),
                                              " or the transaction will revert.",
                                          ],
                                      }),
                        }),
                        null !== r
                            ? Object(_e.jsx)(Ae, {
                                  justify: "flex-start",
                                  gap: "sm",
                                  style: { padding: "16px 0 0" },
                                  children: Object(_e.jsxs)(Oe.y, { children: ["Output will be sent to", " ", Object(_e.jsx)("b", { title: r, children: Ge(r) ? Je(r) : r })] }),
                              })
                            : null,
                    ],
                });
            }
            function No(e) {
                var t,
                    n,
                    r,
                    a,
                    i = e.trade,
                    c = e.originalTrade,
                    o = e.onAcceptChanges,
                    s = e.allowedSlippage,
                    l = e.onConfirm,
                    u = e.onDismiss,
                    d = e.recipient,
                    b = e.swapErrorMessage,
                    p = e.isOpen,
                    j = e.attemptingTxn,
                    e = e.txHash,
                    f = Object(ye.useMemo)(
                        function () {
                            return Boolean(
                                i &&
                                    c &&
                                    ((t = c),
                                    !(
                                        (e = i).tradeType === t.tradeType &&
                                        Object(Ie.o)(e.inputAmount.currency, t.inputAmount.currency) &&
                                        e.inputAmount.equalTo(t.inputAmount) &&
                                        Object(Ie.o)(e.outputAmount.currency, t.outputAmount.currency) &&
                                        e.outputAmount.equalTo(t.outputAmount)
                                    ))
                            );
                            var e, t;
                        },
                        [c, i]
                    ),
                    h = Object(ye.useCallback)(
                        function () {
                            return i ? Object(_e.jsx)(Eo, { trade: i, allowedSlippage: s, recipient: d, showAcceptChanges: f, onAcceptChanges: o }) : null;
                        },
                        [s, o, d, f, i]
                    ),
                    m = Object(ye.useCallback)(
                        function () {
                            return i ? Object(_e.jsx)(To, { onConfirm: l, trade: i, disabledConfirm: f, swapErrorMessage: b, allowedSlippage: s }) : null;
                        },
                        [s, l, f, b, i]
                    ),
                    y = "Swapping "
                        .concat(null == i || null === (t = i.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6), " ")
                        .concat(null == i || null === (n = i.inputAmount) || void 0 === n || null === (r = n.currency) || void 0 === r ? void 0 : r.symbol, " for ")
                        .concat(null == i || null === (a = i.outputAmount) || void 0 === a ? void 0 : a.toSignificant(6), " ")
                        .concat(null == i || null === (y = i.outputAmount) || void 0 === y || null === (O = y.currency) || void 0 === O ? void 0 : O.symbol),
                    O = Object(ye.useCallback)(
                        function () {
                            return b ? Object(_e.jsx)(Mt, { onDismiss: u, message: b }) : Object(_e.jsx)(Wt, { title: "Confirm Swap", onDismiss: u, topContent: h, bottomContent: m });
                        },
                        [u, m, h, b]
                    );
                return Object(_e.jsx)(Qt, { isOpen: p, onDismiss: u, attemptingTxn: j, hash: e, content: O, pendingText: y });
            }
            var So = n(537),
                Ro = Object(ye.memo)(function (e) {
                    var t = e.trade,
                        e = Object(ye.useContext)(xe.ThemeContext);
                    return Object(_e.jsx)(Oe.n, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        style: { border: "1px solid ".concat(e.colors.tertiary), borderRadius: "1rem" },
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        children: t.route.path.map(function (e, t, n) {
                            n = t === n.length - 1;
                            return Object(_e.jsxs)(
                                ye.Fragment,
                                {
                                    children: [
                                        Object(_e.jsxs)(Oe.n, {
                                            my: "0.5rem",
                                            alignItems: "center",
                                            style: { flexShrink: 0 },
                                            children: [Object(_e.jsx)(Kr, { currency: e, size: "1.5rem" }), Object(_e.jsx)(Oe.y, { fontSize: "14px", color: "text", ml: "0.5rem", children: e.symbol })],
                                        }),
                                        n ? null : Object(_e.jsx)(So.a, { color: "textSubtle" }),
                                    ],
                                },
                                t
                            );
                        }),
                    });
                });
            function Uo(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    r = Xi(t),
                    a = r.priceImpactWithoutFee,
                    i = r.realizedLPFee,
                    e = t.tradeType === Ie.m.EXACT_INPUT,
                    r = Ji(t, n),
                    n = Jt();
                return Object(_e.jsx)(Oe.f, {
                    children: Object(_e.jsxs)(Oe.g, {
                        children: [
                            Object(_e.jsxs)(Pe, {
                                children: [
                                    Object(_e.jsxs)(Le, {
                                        children: [
                                            Object(_e.jsx)(Oe.y, { fontSize: "14px", children: e ? n(1210, "Minimum received") : n(220, "Maximum sold") }),
                                            Object(_e.jsx)(Vr, { text: n(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.") }),
                                        ],
                                    }),
                                    Object(_e.jsx)(Le, {
                                        children: Object(_e.jsx)(Oe.y, {
                                            fontSize: "14px",
                                            children: e
                                                ? null !== (e = "".concat(null === (e = r[Ui.OUTPUT]) || void 0 === e ? void 0 : e.toSignificant(4), " ").concat(t.outputAmount.currency.symbol)) && void 0 !== e
                                                    ? e
                                                    : "-"
                                                : null !== (r = "".concat(null === (r = r[Ui.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4), " ").concat(t.inputAmount.currency.symbol)) && void 0 !== r
                                                ? r
                                                : "-",
                                        }),
                                    }),
                                ],
                            }),
                            Object(_e.jsxs)(Pe, {
                                children: [
                                    Object(_e.jsxs)(Le, {
                                        children: [
                                            Object(_e.jsx)(Oe.y, { fontSize: "14px", children: n(226, "Price Impact") }),
                                            Object(_e.jsx)(Vr, { text: n(224, "The difference between the market price and estimated price due to trade size.") }),
                                        ],
                                    }),
                                    Object(_e.jsx)(ko, { priceImpact: a }),
                                ],
                            }),
                            Object(_e.jsxs)(Pe, {
                                children: [
                                    Object(_e.jsxs)(Le, {
                                        children: [
                                            Object(_e.jsx)(Oe.y, { fontSize: "14px", children: n(228, "Liquidity Provider Fee") }),
                                            Object(_e.jsx)(Vr, { text: n(230, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the TYME EXCHANGE treasury.") }),
                                        ],
                                    }),
                                    Object(_e.jsx)(Oe.y, { fontSize: "14px", children: i ? "".concat(i.toSignificant(4), " ").concat(t.inputAmount.currency.symbol) : "-" }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function Ao(e) {
                var t = e.trade,
                    n = Vn(),
                    r = Object(Ce.a)(n, 1)[0],
                    e = Jt(),
                    n = Boolean(t && 2 < t.route.path.length);
                return Object(_e.jsx)(Ae, {
                    gap: "md",
                    children:
                        t &&
                        Object(_e.jsxs)(_e.Fragment, {
                            children: [
                                Object(_e.jsx)(Uo, { trade: t, allowedSlippage: r }),
                                n &&
                                    Object(_e.jsxs)(_e.Fragment, {
                                        children: [
                                            Object(_e.jsx)(fi, {}),
                                            Object(_e.jsxs)(Ae, {
                                                style: { padding: "0 24px" },
                                                children: [
                                                    Object(_e.jsxs)(Le, {
                                                        children: [
                                                            Object(_e.jsx)(Oe.y, { fontSize: "14px", children: "Route" }),
                                                            Object(_e.jsx)(Vr, { text: e(999, "Routing through these tokens resulted in the best price for your trade.") }),
                                                        ],
                                                    }),
                                                    Object(_e.jsx)(Ro, { trade: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                });
            }
            var Po = xe.default.div(
                Object(i.a)([
                    "\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
                    ";\n  z-index: 1;\n\n  transform: ",
                    ";\n  transition: transform 300ms ease-in-out;\n",
                ]),
                function (e) {
                    return e.theme.colors.textSubtle;
                },
                function (e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)";
                }
            );
            function Bo(e) {
                var t = e.trade,
                    n = Object(nt.a)(e, ["trade"]),
                    e = jr(t, fr);
                return Object(_e.jsx)(Po, { show: Boolean(t), children: Object(_e.jsx)(Ao, Object(Te.a)(Object(Te.a)({}, n), {}, { trade: null !== (e = null != t ? t : e) && void 0 !== e ? e : void 0 })) });
            }
            function Mo(e) {
                var t,
                    n,
                    r,
                    a = e.price,
                    i = e.showInverted,
                    c = e.setShowInverted,
                    e = i ? (null == a ? void 0 : a.toSignificant(6)) : null == a || null === (o = a.invert()) || void 0 === o ? void 0 : o.toSignificant(6),
                    o = Boolean((null == a ? void 0 : a.baseCurrency) && (null == a ? void 0 : a.quoteCurrency)),
                    s = i
                        ? "".concat(null == a || null === (t = a.quoteCurrency) || void 0 === t ? void 0 : t.symbol, " per ").concat(null == a || null === (n = a.baseCurrency) || void 0 === n ? void 0 : n.symbol)
                        : "".concat(null == a || null === (r = a.baseCurrency) || void 0 === r ? void 0 : r.symbol, " per ").concat(null == a || null === (s = a.quoteCurrency) || void 0 === s ? void 0 : s.symbol);
                return Object(_e.jsx)(Oe.y, {
                    fontSize: "14px",
                    style: { justifyContent: "center", alignItems: "center", display: "flex" },
                    children: o
                        ? Object(_e.jsxs)(_e.Fragment, {
                              children: [
                                  null != e ? e : "-",
                                  " ",
                                  s,
                                  Object(_e.jsx)(yi, {
                                      onClick: function () {
                                          return c(!i);
                                      },
                                      children: Object(_e.jsx)(Oe.x, { width: "20px", color: "primary" }),
                                  }),
                              ],
                          })
                        : "-",
                });
            }
            var Lo = xe.default.div(Object(i.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"]), function (e) {
                    e = e.theme;
                    return Object(Et.b)(0.6, e.colors.tertiary);
                }),
                Do = xe.default.div(Object(i.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"])),
                _o = Object(xe.default)(Ht.a)(Object(i.a)(["\n  stroke: ", ";\n"]), function (e) {
                    return e.theme.colors.failure;
                });
            function Yo(e) {
                var t,
                    n = e.token,
                    r = Ue().chainId,
                    e = Jt(),
                    a = null !== (t = null == n || null === (t = n.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== t ? t : "",
                    i = null !== (o = null == n || null === (o = n.name) || void 0 === o ? void 0 : o.toLowerCase()) && void 0 !== o ? o : "",
                    c = ar(),
                    o = Object(ye.useMemo)(
                        function () {
                            return (
                                !(!n || !r) &&
                                Object.keys(c).some(function (e) {
                                    var t = c[e];
                                    return !t.equals(n) && ((null === (e = t.symbol) || void 0 === e ? void 0 : e.toLowerCase()) === a || (null === (t = t.name) || void 0 === t ? void 0 : t.toLowerCase()) === i);
                                })
                            );
                        },
                        [n, r, c, a, i]
                    );
                return n
                    ? Object(_e.jsx)(Lo, {
                          error: o,
                          children: Object(_e.jsxs)(Me, {
                              gap: "6px",
                              children: [
                                  Object(_e.jsxs)(Ae, { gap: "24px", children: [Object(_e.jsx)(Kr, { currency: n, size: "16px" }), Object(_e.jsx)("div", { children: " " })] }),
                                  Object(_e.jsxs)(Ae, {
                                      gap: "10px",
                                      justify: "flex-start",
                                      children: [
                                          Object(_e.jsxs)(Oe.y, { children: [n && n.name && n.symbol && n.name !== n.symbol ? "".concat(n.name, " (").concat(n.symbol, ")") : n.name || n.symbol, " "] }),
                                          r &&
                                              Object(_e.jsx)(ct, {
                                                  style: { fontWeight: 400 },
                                                  href: Xe(r, n.address, "token"),
                                                  children: Object(_e.jsxs)(Oe.y, { title: n.address, children: [Je(n.address), " ", e(116, "(View on BscScan)")] }),
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
            function zo(e) {
                var t = e.isOpen,
                    n = e.tokens,
                    r = e.onConfirm,
                    a = Object(ye.useState)(!1),
                    i = Object(Ce.a)(a, 2),
                    c = i[0],
                    o = i[1],
                    e = Object(ye.useCallback)(function () {
                        return o(function (e) {
                            return !e;
                        });
                    }, []),
                    a = Jt(),
                    i = Object(ye.useCallback)(function () {
                        return null;
                    }, []);
                return Object(_e.jsx)(Ut, {
                    isOpen: t,
                    onDismiss: i,
                    maxHeight: 90,
                    children: Object(_e.jsx)(Do, {
                        className: "token-warning-container",
                        children: Object(_e.jsxs)(Ae, {
                            gap: "lg",
                            children: [
                                Object(_e.jsxs)(Me, { gap: "6px", children: [Object(_e.jsx)(_o, {}), Object(_e.jsx)(Oe.y, { color: "failure", children: a(1128, "Token imported") })] }),
                                Object(_e.jsx)(Oe.y, {
                                    children: a(1130, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."),
                                }),
                                Object(_e.jsx)(Oe.y, { children: a(1132, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.") }),
                                Object(_e.jsx)(Oe.y, { children: a(1134, "If you purchase an arbitrary token, you may be unable to sell it back.") }),
                                n.map(function (e) {
                                    return Object(_e.jsx)(Yo, { token: e }, e.address);
                                }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsx)("div", {
                                            children: Object(_e.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: { cursor: "pointer", userSelect: "none" },
                                                children: [
                                                    Object(_e.jsx)("input", { id: "understand-checkbox", type: "checkbox", className: "understand-checkbox", checked: c, onChange: e }),
                                                    " ",
                                                    Object(_e.jsx)(Oe.y, { as: "span", ml: "4px", children: a(148, "I understand") }),
                                                ],
                                            }),
                                        }),
                                        Object(_e.jsx)(Oe.c, {
                                            disabled: !c,
                                            variant: "danger",
                                            style: { width: "140px" },
                                            className: "token-dismiss-button",
                                            onClick: function () {
                                                r();
                                            },
                                            children: a(150, "Continue"),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var Fo = xe.default.div(Object(i.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"])),
                qo = Object(xe.default)(Ht.a)(Object(i.a)(["\n  stroke: ", ";\n"]), function (e) {
                    return e.theme.colors.failure;
                });
            function Vo(e) {
                var t = e.isOpen,
                    n = e.transactionType,
                    r = e.onConfirm,
                    a = Object(ye.useState)(!1),
                    i = Object(Ce.a)(a, 2),
                    e = i[0],
                    c = i[1],
                    a = Object(ye.useCallback)(function () {
                        return c(function (e) {
                            return !e;
                        });
                    }, []),
                    i = Object(ye.useCallback)(function () {
                        return null;
                    }, []);
                return Object(_e.jsx)(Ut, {
                    isOpen: t,
                    onDismiss: i,
                    maxHeight: 90,
                    children: Object(_e.jsx)(Fo, {
                        className: "token-warning-container",
                        children: Object(_e.jsxs)(Ae, {
                            gap: "lg",
                            children: [
                                Object(_e.jsxs)(Me, { gap: "6px", children: [Object(_e.jsx)(qo, {}), Object(_e.jsx)(Oe.y, { color: "failure", children: "Syrup Warning" })] }),
                                "" !== n &&
                                    Object(_e.jsxs)(_e.Fragment, {
                                        children: [
                                            Object(_e.jsxs)(Oe.y, { color: "failure", children: ["Please be careful when ", Object(_e.jsx)("strong", { children: n }), " SYRUP."] }),
                                            Object(_e.jsx)(Oe.y, {
                                                color: "failure",
                                                children: "Buying" === n ? "You will not receive SMART rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to SMART.",
                                            }),
                                        ],
                                    }),
                                Object(_e.jsxs)(Pe, {
                                    children: [
                                        Object(_e.jsx)("div", {
                                            children: Object(_e.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: { cursor: "pointer", userSelect: "none" },
                                                children: [
                                                    Object(_e.jsx)("input", { id: "understand-checkbox", type: "checkbox", className: "understand-checkbox", checked: e, onChange: a }),
                                                    " ",
                                                    Object(_e.jsx)(Oe.y, { as: "span", children: "I understand" }),
                                                ],
                                            }),
                                        }),
                                        Object(_e.jsx)(Oe.c, {
                                            disabled: !e,
                                            variant: "danger",
                                            style: { width: "140px" },
                                            onClick: function () {
                                                c(!1), r();
                                            },
                                            children: "Continue",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var Wo,
                Ho,
                Qo = Object(xe.default)(Ae)(Object(i.a)(["\n  margin-top: 1.25rem;\n"])),
                Go = Object(xe.default)(Pe)(Object(i.a)(["\n  width: 50%;\n"])),
                Ko = xe.default.div(
                    Object(i.a)([
                        "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
                        ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ",
                        ";\n",
                    ]),
                    function (e) {
                        var t = e.theme,
                            n = e.confirmed;
                        return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary;
                    },
                    function (e) {
                        var t = e.theme,
                            n = e.confirmed;
                        return e.disabled ? t.colors.text : n ? t.colors.success : "#FFFFFF";
                    }
                ),
                Xo = xe.default.div(Object(i.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"])),
                Jo = xe.default.div(
                    Object(i.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"]),
                    function (e) {
                        var t = e.theme,
                            e = e.prevConfirmed;
                        return Object(Et.b)(0.5, e ? t.colors.success : t.colors.primary);
                    },
                    function (e) {
                        var t = e.theme;
                        return e.prevConfirmed ? t.colors.primary : t.colors.backgroundDisabled;
                    }
                );
            function $o(e) {
                var n = e.steps;
                return Object(_e.jsx)(Qo, {
                    justify: "center",
                    children: Object(_e.jsxs)(Go, {
                        children: [
                            n.map(function (e, t) {
                                return Object(_e.jsxs)(Xo, { children: [Object(_e.jsx)(Ko, { confirmed: e, disabled: !n[t - 1] && 0 !== t, children: e ? "✓" : t + 1 }), Object(_e.jsx)(Jo, { prevConfirmed: e })] }, t);
                            }),
                            Object(_e.jsx)(Ko, { disabled: !n[n.length - 1], children: n.length + 1 }),
                        ],
                    }),
                });
            }
            function Zo(o, e, t, n) {
                var e = 1 < arguments.length && void 0 !== e ? e : Ne,
                    t = 2 < arguments.length && void 0 !== t ? t : W,
                    s = 3 < arguments.length ? n : void 0,
                    n = Ue(),
                    l = n.account,
                    r = n.chainId,
                    a = n.library,
                    u = (function (n, e, t, r) {
                        var a = 1 < arguments.length && void 0 !== e ? e : Ne,
                            i = 2 < arguments.length && void 0 !== t ? t : W,
                            t = 3 < arguments.length ? r : void 0,
                            c = (r = Ue()).account,
                            o = r.chainId,
                            s = r.library,
                            r = ac(t).address,
                            l = null === t ? c : r;
                        return Object(ye.useMemo)(
                            function () {
                                if (!(n && l && s && c && o)) return [];
                                var t = tt(0, s, c);
                                if (!t) return [];
                                var e = [];
                                return (
                                    e.push(Ie.i.swapCallParameters(n, { feeOnTransfer: !1, allowedSlippage: new Ie.g(Ie.e.BigInt(Math.floor(a)), Q), recipient: l, ttl: i })),
                                    n.tradeType === Ie.m.EXACT_INPUT && e.push(Ie.i.swapCallParameters(n, { feeOnTransfer: !0, allowedSlippage: new Ie.g(Ie.e.BigInt(Math.floor(a)), Q), recipient: l, ttl: i })),
                                    e.map(function (e) {
                                        return { parameters: e, contract: t };
                                    })
                                );
                            },
                            [c, a, o, i, s, l, n]
                        );
                    })(o, e, t, s),
                    d = qi(),
                    t = ac(s).address,
                    b = null === s ? l : t;
                return Object(ye.useMemo)(
                    function () {
                        return o && a && l && r
                            ? b
                                ? {
                                      state: Wo.VALID,
                                      callback:
                                          ((e = Object(ge.a)(
                                              ve.a.mark(function e() {
                                                  var t, n, r, a, i, c;
                                                  return ve.a.wrap(function (e) {
                                                      for (;;)
                                                          switch ((e.prev = e.next)) {
                                                              case 0:
                                                                  return (
                                                                      (e.next = 2),
                                                                      Promise.all(
                                                                          u.map(function (n) {
                                                                              var e = n.parameters,
                                                                                  r = e.methodName,
                                                                                  a = e.args,
                                                                                  e = e.value,
                                                                                  i = n.contract,
                                                                                  c = !e || Tr(e) ? {} : { value: e };
                                                                              return (e = i.estimateGas)[r]
                                                                                  .apply(e, Object(Z.a)(a).concat([c]))
                                                                                  .then(function (e) {
                                                                                      return { call: n, gasEstimate: e };
                                                                                  })
                                                                                  .catch(function (t) {
                                                                                      var e;
                                                                                      return (
                                                                                          console.info("Gas estimate failed, trying eth_call to extract error", n),
                                                                                          (e = i.callStatic)[r]
                                                                                              .apply(e, Object(Z.a)(a).concat([c]))
                                                                                              .then(function (e) {
                                                                                                  return (
                                                                                                      console.info("Unexpected successful call after failed estimate gas", n, t, e),
                                                                                                      { call: n, error: new Error("Unexpected issue with estimating the gas. Please try again.") }
                                                                                                  );
                                                                                              })
                                                                                              .catch(function (e) {
                                                                                                  var t;
                                                                                                  switch ((console.info("Call threw error", n, e), e.reason)) {
                                                                                                      case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                                                      case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                                                          t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                                                          break;
                                                                                                      default:
                                                                                                          t = "The transaction cannot succeed due to error: ".concat(
                                                                                                              e.reason,
                                                                                                              ". This is probably an issue with one of the tokens you are swapping."
                                                                                                          );
                                                                                                  }
                                                                                                  return { call: n, error: new Error(t) };
                                                                                              })
                                                                                      );
                                                                                  });
                                                                          })
                                                                      )
                                                                  );
                                                              case 2:
                                                                  if (
                                                                      ((c = e.sent),
                                                                      (t = c.find(function (e, t, n) {
                                                                          return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1]);
                                                                      })))
                                                                  ) {
                                                                      e.next = 9;
                                                                      break;
                                                                  }
                                                                  if (
                                                                      0 <
                                                                      (n = c.filter(function (e) {
                                                                          return "error" in e;
                                                                      })).length
                                                                  )
                                                                      throw n[n.length - 1].error;
                                                                  e.next = 8;
                                                                  break;
                                                              case 8:
                                                                  throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                              case 9:
                                                                  return (
                                                                      (c = t.call),
                                                                      (n = c.contract),
                                                                      (c = c.parameters),
                                                                      (r = c.methodName),
                                                                      (a = c.args),
                                                                      (i = c.value),
                                                                      (c = t.gasEstimate),
                                                                      e.abrupt(
                                                                          "return",
                                                                          n[r]
                                                                              .apply(n, Object(Z.a)(a).concat([Object(Te.a)({ gasLimit: $e(c) }, i && !Tr(i) ? { value: i, from: l } : { from: l })]))
                                                                              .then(function (e) {
                                                                                  var t = o.inputAmount.currency.symbol,
                                                                                      n = o.outputAmount.currency.symbol,
                                                                                      r = o.inputAmount.toSignificant(3),
                                                                                      a = o.outputAmount.toSignificant(3),
                                                                                      n = "Swap ".concat(r, " ").concat(t, " for ").concat(a, " ").concat(n),
                                                                                      n = b === l ? n : "".concat(n, " to ").concat(s && Ge(s) ? Je(s) : s);
                                                                                  return d(e, { summary: n }), e.hash;
                                                                              })
                                                                              .catch(function (e) {
                                                                                  throw 4001 === (null == e ? void 0 : e.code)
                                                                                      ? new Error("Transaction rejected.")
                                                                                      : (console.error("Swap failed", e, r, a, i), new Error("Swap failed: ".concat(e.message)));
                                                                              })
                                                                      )
                                                                  );
                                                              case 11:
                                                              case "end":
                                                                  return e.stop();
                                                          }
                                                  }, e);
                                              })
                                          )),
                                          function () {
                                              return e.apply(this, arguments);
                                          }),
                                      error: null,
                                  }
                                : null !== s
                                ? { state: Wo.INVALID, callback: null, error: "Invalid recipient" }
                                : { state: Wo.LOADING, callback: null, error: null }
                            : { state: Wo.INVALID, callback: null, error: "Missing dependencies" };
                        var e;
                    },
                    [o, a, l, r, b, s, u, d]
                );
            }
            ((M = Wo = Wo || {})[(M.INVALID = 0)] = "INVALID"),
                (M[(M.LOADING = 1)] = "LOADING"),
                (M[(M.VALID = 2)] = "VALID"),
                ((S = Ho = Ho || {})[(S.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
                (S[(S.WRAP = 1)] = "WRAP"),
                (S[(S.UNWRAP = 2)] = "UNWRAP");
            var es = { wrapType: Ho.NOT_APPLICABLE };
            function ts() {
                var n,
                    t,
                    r,
                    e,
                    a,
                    i,
                    c,
                    o,
                    s,
                    l,
                    u,
                    d = jc(),
                    b = Jt(),
                    p = (Z = [sr(null == d ? void 0 : d.inputCurrencyId), sr(null == d ? void 0 : d.outputCurrencyId)])[0],
                    j = Z[1],
                    f = Object(ye.useState)(!1),
                    h = (q = Object(Ce.a)(f, 2))[0],
                    m = q[1],
                    y = Object(ye.useState)(!1),
                    O = (V = Object(Ce.a)(y, 2))[0],
                    x = V[1],
                    v = Object(ye.useState)(""),
                    g = (H = Object(Ce.a)(v, 2))[0],
                    C = H[1],
                    w = Object(ye.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (e =
                                    null === (e = [p, j]) || void 0 === e
                                        ? void 0
                                        : e.filter(function (e) {
                                              return e instanceof Ie.j;
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [p, j]
                    ),
                    k = Object(ye.useCallback)(function () {
                        m(!0);
                    }, []),
                    T = Object(ye.useCallback)(function () {
                        x(!1), C("");
                    }, []),
                    I = Ue().account,
                    E = Object(ye.useContext)(xe.ThemeContext),
                    N =
                        ((l = Object(we.c)()),
                        (u = qn()),
                        (le = Object(ye.useCallback)(
                            function () {
                                l(Un({ userExpertMode: !u }));
                            },
                            [u, l]
                        )),
                        [u, le]),
                    S = Object(Ce.a)(N, 1)[0],
                    R = Wn(),
                    U = Object(Ce.a)(R, 1)[0],
                    A = Vn(),
                    P = Object(Ce.a)(A, 1)[0],
                    B = (J = oc()).independentField,
                    M = J.typedValue,
                    L = J.recipient,
                    D = ($ = (function () {
                        var t,
                            n,
                            r,
                            a,
                            i,
                            c,
                            e = Ue().account,
                            o = (f = oc()).independentField,
                            s = f.typedValue,
                            l = f[Ui.INPUT].currencyId,
                            u = f[Ui.OUTPUT].currencyId,
                            d = f.recipient,
                            b = sr(l),
                            p = sr(u),
                            j = ac(null != d ? d : void 0),
                            l = null !== (f = null === d ? e : j.address) && void 0 !== f ? f : null,
                            u = br(null != e ? e : void 0, [null != b ? b : void 0, null != p ? p : void 0]),
                            d = o === Ui.INPUT,
                            f = sc(s, null !== (j = d ? b : p) && void 0 !== j ? j : void 0),
                            o =
                                ((i = null != p ? p : void 0),
                                (c = ic(null == (a = d ? f : void 0) ? void 0 : a.currency, i)),
                                Object(ye.useMemo)(
                                    function () {
                                        var e;
                                        return a && i && 0 < c.length && null !== (e = Ie.l.bestTradeExactIn(c, a, i, { maxHops: 3, maxNumResults: 1 })[0]) && void 0 !== e ? e : null;
                                    },
                                    [c, a, i]
                                )),
                            s =
                                ((r = ic((t = null != b ? b : void 0), null == (n = d ? void 0 : f) ? void 0 : n.currency)),
                                Object(ye.useMemo)(
                                    function () {
                                        var e;
                                        return t && n && 0 < r.length && null !== (e = Ie.l.bestTradeExactOut(r, t, n, { maxHops: 3, maxNumResults: 1 })[0]) && void 0 !== e ? e : null;
                                    },
                                    [r, t, n]
                                )),
                            j = d ? o : s,
                            u = ((d = {}), Object(ke.a)(d, Ui.INPUT, u[0]), Object(ke.a)(d, Ui.OUTPUT, u[1]), d),
                            d = ((d = {}), Object(ke.a)(d, Ui.INPUT, null != b ? b : void 0), Object(ke.a)(d, Ui.OUTPUT, null != p ? p : void 0), d);
                        e || (h = "Connect Wallet"), f || (h = null !== h && void 0 !== h ? h : "Enter an amount"), (d[Ui.INPUT] && d[Ui.OUTPUT]) || (h = null !== h && void 0 !== h ? h : "Select a token");
                        var h,
                            e = Ge(l);
                        return (
                            l && e ? (-1 !== lc.indexOf(e) || (o && uc(o, e)) || (s && uc(s, e))) && (h = null !== h && void 0 !== h ? h : "Invalid recipient") : (h = null !== h && void 0 !== h ? h : "Enter a recipient"),
                            (s = Vn()),
                            (e = Object(Ce.a)(s, 1)[0]),
                            (s = j && e && Ji(j, e)),
                            (e = [u[Ui.INPUT], s ? s[Ui.INPUT] : null]),
                            (s = e[0]),
                            (e = e[1]),
                            s && e && s.lessThan(e) && (h = "Insufficient ".concat(e.currency.symbol, " balance")),
                            { currencies: d, currencyBalances: u, parsedAmount: f, v2Trade: null != j ? j : void 0, inputError: h }
                        );
                    })()).v2Trade,
                    _ = $.currencyBalances,
                    Y = $.parsedAmount,
                    z = $.currencies,
                    F = $.inputError,
                    q = (f =
                        ((t = z[Ui.INPUT]),
                        (r = z[Ui.OUTPUT]),
                        (e = M),
                        (d = Ue()),
                        (a = d.chainId),
                        (Z = d.account),
                        (i = Zn((d = Ue().chainId) ? Ie.n[d].address : void 0, Xn, void 0)),
                        (c = pr(null != Z ? Z : void 0, t)),
                        (o = Object(ye.useMemo)(
                            function () {
                                return sc(e, t);
                            },
                            [t, e]
                        )),
                        (s = qi()),
                        Object(ye.useMemo)(
                            function () {
                                if (!(i && a && t && r)) return es;
                                var e = o && c && !c.lessThan(o);
                                return t === Ie.d && Object(Ie.o)(Ie.n[a], r)
                                    ? {
                                          wrapType: Ho.WRAP,
                                          execute:
                                              e && o
                                                  ? Object(ge.a)(
                                                        ve.a.mark(function e() {
                                                            var t;
                                                            return ve.a.wrap(
                                                                function (e) {
                                                                    for (;;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                return (e.prev = 0), (e.next = 3), i.deposit({ value: "0x".concat(o.raw.toString(16)) });
                                                                            case 3:
                                                                                (t = e.sent), s(t, { summary: "Wrap ".concat(o.toSignificant(6), " BNB to WBNB") }), (e.next = 10);
                                                                                break;
                                                                            case 7:
                                                                                (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not deposit", e.t0);
                                                                            case 10:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                },
                                                                e,
                                                                null,
                                                                [[0, 7]]
                                                            );
                                                        })
                                                    )
                                                  : void 0,
                                          inputError: e ? void 0 : "Insufficient BNB balance",
                                      }
                                    : Object(Ie.o)(Ie.n[a], t) && r === Ie.d
                                    ? {
                                          wrapType: Ho.UNWRAP,
                                          execute:
                                              e && o
                                                  ? Object(ge.a)(
                                                        ve.a.mark(function e() {
                                                            var t;
                                                            return ve.a.wrap(
                                                                function (e) {
                                                                    for (;;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                return (e.prev = 0), (e.next = 3), i.withdraw("0x".concat(o.raw.toString(16)));
                                                                            case 3:
                                                                                (t = e.sent), s(t, { summary: "Unwrap ".concat(o.toSignificant(6), " WBNB to BNB") }), (e.next = 10);
                                                                                break;
                                                                            case 7:
                                                                                (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not withdraw", e.t0);
                                                                            case 10:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                },
                                                                e,
                                                                null,
                                                                [[0, 7]]
                                                            );
                                                        })
                                                    )
                                                  : void 0,
                                          inputError: e ? void 0 : "Insufficient WBNB balance",
                                      }
                                    : es;
                            },
                            [i, a, t, r, o, c, s]
                        ))).wrapType,
                    y = f.execute,
                    V = f.inputError,
                    W = (v = q !== Ho.NOT_APPLICABLE) ? void 0 : D,
                    H = v
                        ? ((ee = {}), Object(ke.a)(ee, Ui.INPUT, Y), Object(ke.a)(ee, Ui.OUTPUT, Y), ee)
                        : ((te = {}), Object(ke.a)(te, Ui.INPUT, B === Ui.INPUT ? Y : null == W ? void 0 : W.inputAmount), Object(ke.a)(te, Ui.OUTPUT, B === Ui.OUTPUT ? Y : null == W ? void 0 : W.outputAmount), te),
                    Q = (N =
                        ((n = Object(we.c)()),
                        (le = Object(ye.useCallback)(
                            function (e, t) {
                                n(Pi({ field: e, currencyId: t instanceof Ie.j ? t.address : t === Ie.d ? "BNB" : "" }));
                            },
                            [n]
                        )),
                        {
                            onSwitchTokens: Object(ye.useCallback)(
                                function () {
                                    n(Bi());
                                },
                                [n]
                            ),
                            onCurrencySelection: le,
                            onUserInput: Object(ye.useCallback)(
                                function (e, t) {
                                    n(Mi({ field: e, typedValue: t }));
                                },
                                [n]
                            ),
                            onChangeRecipient: Object(ye.useCallback)(
                                function (e) {
                                    n(Di({ recipient: e }));
                                },
                                [n]
                            ),
                        })).onSwitchTokens,
                    G = N.onCurrencySelection,
                    K = N.onUserInput,
                    X = N.onChangeRecipient,
                    R = !F,
                    A = B === Ui.INPUT ? Ui.OUTPUT : Ui.INPUT,
                    J = Object(ye.useCallback)(
                        function (e) {
                            K(Ui.INPUT, e);
                        },
                        [K]
                    ),
                    $ = Object(ye.useCallback)(
                        function (e) {
                            K(Ui.OUTPUT, e);
                        },
                        [K]
                    ),
                    d = Object(ye.useState)({ showConfirm: !1, tradeToConfirm: void 0, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }),
                    Z = Object(Ce.a)(d, 2),
                    D = (f = Z[0]).showConfirm,
                    ee = f.tradeToConfirm,
                    Y = f.swapErrorMessage,
                    te = f.attemptingTxn,
                    ne = f.txHash,
                    re = Z[1],
                    N =
                        ((le = {}),
                        Object(ke.a)(le, B, M),
                        Object(ke.a)(
                            le,
                            A,
                            v
                                ? null !== (ie = null === (me = H[B]) || void 0 === me ? void 0 : me.toExact()) && void 0 !== ie
                                    ? ie
                                    : ""
                                : null !== (ce = null === (pe = H[A]) || void 0 === pe ? void 0 : pe.toSignificant(6)) && void 0 !== ce
                                ? ce
                                : ""
                        ),
                        le),
                    d = null == W ? void 0 : W.route,
                    f = Boolean(z[Ui.INPUT] && z[Ui.OUTPUT] && (null === (he = H[B]) || void 0 === he ? void 0 : he.greaterThan(Ie.e.BigInt(0)))),
                    Z = !d,
                    M = (function (e, t) {
                        var n = 1 < arguments.length && void 0 !== t ? t : 0;
                        return Zi(
                            Object(ye.useMemo)(
                                function () {
                                    return e ? Ji(e, n)[Ui.INPUT] : void 0;
                                },
                                [e, n]
                            ),
                            Ee
                        );
                    })(W, P),
                    ae = (me = Object(Ce.a)(M, 2))[0],
                    ie = me[1],
                    A = Object(ye.useState)(!1),
                    ce = (pe = Object(Ce.a)(A, 2))[0],
                    oe = pe[1];
                Object(ye.useEffect)(
                    function () {
                        ae === Hi.PENDING && oe(!0);
                    },
                    [ae, ce]
                );
                var se = mc(_[Ui.INPUT]),
                    le = Boolean(se && (null === (je = H[Ui.INPUT]) || void 0 === je ? void 0 : je.equalTo(se))),
                    ue = (he = Zo(W, P, U, L)).callback,
                    d = he.error,
                    de = Xi(W).priceImpactWithoutFee,
                    be = Object(ye.useCallback)(
                        function () {
                            var e;
                            (de &&
                                !((e = de).lessThan(Re)
                                    ? e.lessThan(Se) || window.confirm("This swap has a price impact of at least ".concat(Se.toFixed(0), "%. Please confirm that you would like to continue with this swap."))
                                    : "confirm" === window.prompt("This swap has a price impact of at least ".concat(Re.toFixed(0), '%. Please type the word "confirm" to continue with this swap.')))) ||
                                (ue &&
                                    (re(function (e) {
                                        return Object(Te.a)(Object(Te.a)({}, e), {}, { attemptingTxn: !0, swapErrorMessage: void 0, txHash: void 0 });
                                    }),
                                    ue()
                                        .then(function (t) {
                                            re(function (e) {
                                                return Object(Te.a)(Object(Te.a)({}, e), {}, { attemptingTxn: !1, swapErrorMessage: void 0, txHash: t });
                                            });
                                        })
                                        .catch(function (t) {
                                            re(function (e) {
                                                return Object(Te.a)(Object(Te.a)({}, e), {}, { attemptingTxn: !1, swapErrorMessage: t.message, txHash: void 0 });
                                            });
                                        })));
                        },
                        [de, ue, re]
                    ),
                    M = Object(ye.useState)(!1),
                    A = (me = Object(Ce.a)(M, 2))[0],
                    pe = me[1],
                    _ = $i(de),
                    H = !F && (ae === Hi.NOT_APPROVED || ae === Hi.PENDING || (ce && ae === Hi.APPROVED)) && !(3 < _ && !S),
                    je = Object(ye.useCallback)(
                        function () {
                            re(function (e) {
                                return Object(Te.a)(Object(Te.a)({}, e), {}, { showConfirm: !1 });
                            }),
                                ne && K(Ui.INPUT, "");
                        },
                        [K, ne, re]
                    ),
                    U = Object(ye.useCallback)(
                        function () {
                            re(function (e) {
                                return Object(Te.a)(Object(Te.a)({}, e), {}, { tradeToConfirm: W });
                            });
                        },
                        [W]
                    ),
                    fe = Object(ye.useCallback)(
                        function (e, t) {
                            "syrup" === e && (x(!0), C(t));
                        },
                        [x, C]
                    ),
                    he = Object(ye.useCallback)(
                        function (e) {
                            oe(!1), G(Ui.INPUT, e), "syrup" === e.symbol.toLowerCase() && fe(e.symbol.toLowerCase(), "Selling");
                        },
                        [G, oe, fe]
                    ),
                    M = Object(ye.useCallback)(
                        function () {
                            se && K(Ui.INPUT, se.toExact());
                        },
                        [se, K]
                    ),
                    me = Object(ye.useCallback)(
                        function (e) {
                            G(Ui.OUTPUT, e), "syrup" === e.symbol.toLowerCase() && fe(e.symbol.toLowerCase(), "Buying");
                        },
                        [G, fe]
                    );
                return Object(_e.jsxs)(_e.Fragment, {
                    children: [
                        Object(_e.jsx)(zo, { isOpen: 0 < w.length && !h, tokens: w, onConfirm: k }),
                        Object(_e.jsx)(Vo, { isOpen: O, transactionType: g, onConfirm: T }),
                        Object(_e.jsx)(Zt, {}),
                        Object(_e.jsx)(Ic, {
                            children: Object(_e.jsxs)(pi, {
                                id: "swap-page",
                                children: [
                                    Object(_e.jsx)(No, { isOpen: D, trade: W, originalTrade: ee, onAcceptChanges: U, attemptingTxn: te, txHash: ne, recipient: L, allowedSlippage: P, onConfirm: be, swapErrorMessage: Y, onDismiss: je }),
                                    Object(_e.jsx)(ao, { title: b(8, "Exchange"), description: b(1192, "Trade tokens in an instant") }),
                                    Object(_e.jsxs)(Oe.g, {
                                        children: [
                                            Object(_e.jsxs)(Ae, {
                                                gap: "md",
                                                children: [
                                                    Object(_e.jsx)(Za, {
                                                        label: B === Ui.OUTPUT && !v && W ? b(194, "From (estimated)") : b(76, "From"),
                                                        value: N[Ui.INPUT],
                                                        showMaxButton: !le,
                                                        currency: z[Ui.INPUT],
                                                        onUserInput: J,
                                                        onMax: M,
                                                        onCurrencySelect: he,
                                                        otherCurrency: z[Ui.OUTPUT],
                                                        id: "swap-currency-input",
                                                    }),
                                                    Object(_e.jsx)(Ae, {
                                                        justify: "space-between",
                                                        children: Object(_e.jsxs)(Me, {
                                                            justify: S ? "space-between" : "center",
                                                            style: { padding: "0 1rem" },
                                                            children: [
                                                                Object(_e.jsx)(ji, {
                                                                    clickable: !0,
                                                                    children: Object(_e.jsx)(Oe.p, {
                                                                        variant: "tertiary",
                                                                        onClick: function () {
                                                                            oe(!1), Q();
                                                                        },
                                                                        style: { borderRadius: "50%" },
                                                                        scale: "sm",
                                                                        children: Object(_e.jsx)(Oe.b, { color: "primary", width: "24px" }),
                                                                    }),
                                                                }),
                                                                null === L && !v && S
                                                                    ? Object(_e.jsx)(rt, {
                                                                          id: "add-recipient-button",
                                                                          onClick: function () {
                                                                              return X("");
                                                                          },
                                                                          children: "+ Add a send (optional)",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    }),
                                                    Object(_e.jsx)(Za, {
                                                        value: N[Ui.OUTPUT],
                                                        onUserInput: $,
                                                        label: B === Ui.INPUT && !v && W ? b(196, "To (estimated)") : b(80, "To"),
                                                        showMaxButton: !1,
                                                        currency: z[Ui.OUTPUT],
                                                        onCurrencySelect: me,
                                                        otherCurrency: z[Ui.INPUT],
                                                        id: "swap-currency-output",
                                                    }),
                                                    null === L || v
                                                        ? null
                                                        : Object(_e.jsxs)(_e.Fragment, {
                                                              children: [
                                                                  Object(_e.jsxs)(Me, {
                                                                      justify: "space-between",
                                                                      style: { padding: "0 1rem" },
                                                                      children: [
                                                                          Object(_e.jsx)(ji, { clickable: !1, children: Object(_e.jsx)(uo.a, { size: "16", color: E.colors.textSubtle }) }),
                                                                          Object(_e.jsx)(rt, {
                                                                              id: "remove-recipient-button",
                                                                              onClick: function () {
                                                                                  return X(null);
                                                                              },
                                                                              children: "- Remove send",
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  Object(_e.jsx)(Co, { id: "recipient", value: L, onChange: X }),
                                                              ],
                                                          }),
                                                    v
                                                        ? null
                                                        : Object(_e.jsx)(kt, {
                                                              padding: ".25rem .75rem 0 .75rem",
                                                              borderRadius: "20px",
                                                              children: Object(_e.jsxs)(Ae, {
                                                                  gap: "4px",
                                                                  children: [
                                                                      Boolean(W) &&
                                                                          Object(_e.jsxs)(Pe, {
                                                                              align: "center",
                                                                              children: [
                                                                                  Object(_e.jsx)(Oe.y, { fontSize: "14px", children: b(1182, "Price") }),
                                                                                  Object(_e.jsx)(Mo, { price: null == W ? void 0 : W.executionPrice, showInverted: A, setShowInverted: pe }),
                                                                              ],
                                                                          }),
                                                                      P !== Ne &&
                                                                          Object(_e.jsxs)(Pe, {
                                                                              align: "center",
                                                                              children: [
                                                                                  Object(_e.jsx)(Oe.y, { fontSize: "14px", children: b(88, "Slippage Tolerance") }),
                                                                                  Object(_e.jsxs)(Oe.y, { fontSize: "14px", children: [P / 100, "%"] }),
                                                                              ],
                                                                          }),
                                                                  ],
                                                              }),
                                                          }),
                                                ],
                                            }),
                                            Object(_e.jsxs)(hi, {
                                                children: [
                                                    I
                                                        ? v
                                                            ? Object(_e.jsx)(Oe.c, { disabled: Boolean(V), onClick: y, width: "100%", children: null != V ? V : q === Ho.WRAP ? "Wrap" : q === Ho.UNWRAP ? "Unwrap" : null })
                                                            : Z && f
                                                            ? Object(_e.jsx)(It, { style: { textAlign: "center" }, children: Object(_e.jsx)(Oe.y, { mb: "4px", children: b(1194, "Insufficient liquidity for this trade.") }) })
                                                            : H
                                                            ? Object(_e.jsxs)(Pe, {
                                                                  children: [
                                                                      Object(_e.jsx)(Oe.c, {
                                                                          onClick: ie,
                                                                          disabled: ae !== Hi.NOT_APPROVED || ce,
                                                                          style: { width: "48%" },
                                                                          variant: ae === Hi.APPROVED ? "success" : "primary",
                                                                          children:
                                                                              ae === Hi.PENDING
                                                                                  ? Object(_e.jsxs)(Me, { gap: "6px", justify: "center", children: ["Approving ", Object(_e.jsx)(Ot, { stroke: "white" })] })
                                                                                  : ce && ae === Hi.APPROVED
                                                                                  ? "Approved"
                                                                                  : "Approve ".concat(null === (z = z[Ui.INPUT]) || void 0 === z ? void 0 : z.symbol),
                                                                      }),
                                                                      Object(_e.jsx)(Oe.c, {
                                                                          onClick: function () {
                                                                              S ? be() : re({ tradeToConfirm: W, attemptingTxn: !1, swapErrorMessage: void 0, showConfirm: !0, txHash: void 0 });
                                                                          },
                                                                          style: { width: "48%" },
                                                                          id: "swap-button",
                                                                          disabled: !R || ae !== Hi.APPROVED || (3 < _ && !S),
                                                                          variant: R && 2 < _ ? "danger" : "primary",
                                                                          children: 3 < _ && !S ? "Price Impact High" : "Swap".concat(2 < _ ? " Anyway" : ""),
                                                                      }),
                                                                  ],
                                                              })
                                                            : Object(_e.jsx)(Oe.c, {
                                                                  onClick: function () {
                                                                      S ? be() : re({ tradeToConfirm: W, attemptingTxn: !1, swapErrorMessage: void 0, showConfirm: !0, txHash: void 0 });
                                                                  },
                                                                  id: "swap-button",
                                                                  disabled: !R || (3 < _ && !S) || !!d,
                                                                  variant: R && 2 < _ && !d ? "danger" : "primary",
                                                                  width: "100%",
                                                                  children: F || (3 < _ && !S ? "Price Impact Too High" : "Swap".concat(2 < _ ? " Anyway" : "")),
                                                              })
                                                        : Object(_e.jsx)(kc, { width: "100%" }),
                                                    H && Object(_e.jsx)($o, { steps: [ae === Hi.APPROVED] }),
                                                    S && Y ? Object(_e.jsx)(gi, { error: Y }) : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        Object(_e.jsx)(Bo, { trade: W }),
                    ],
                });
            }
            function ns(e) {
                e = e.location;
                return Object(_e.jsx)(d.a, { to: Object(Te.a)(Object(Te.a)({}, e), {}, { pathname: "/swap" }) });
            }
            function rs(e) {
                var t = e.children,
                    n = Object(ye.useState)(function () {
                        var e = localStorage.getItem(ls);
                        return !!e && JSON.parse(e);
                    }),
                    n = (e = Object(Ce.a)(n, 2))[0],
                    r = e[1];
                return Object(_e.jsx)(us.Provider, {
                    value: {
                        isDark: n,
                        toggleTheme: function () {
                            r(function (e) {
                                return localStorage.setItem(ls, JSON.stringify(!e)), !e;
                            });
                        },
                    },
                    children: Object(_e.jsx)(xe.ThemeProvider, { theme: n ? Oe.B : Oe.C, children: t }),
                });
            }
            function as() {
                var e = Object(ye.useState)(null),
                    t = Object(Ce.a)(e, 2),
                    e = t[0],
                    n = t[1];
                return (
                    Object(ye.useEffect)(
                        function () {
                            var e;
                            (e = Object(ge.a)(
                                ve.a.mark(function e() {
                                    var t;
                                    return ve.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), fetch("https://api.pancakeswap.com/api/v1/price");
                                                    case 3:
                                                        return (t = e.sent), (e.next = 6), t.json();
                                                    case 6:
                                                        (t = e.sent), n(t), (e.next = 13);
                                                        break;
                                                    case 10:
                                                        (e.prev = 10), (e.t0 = e.catch(0)), console.error("Unable to fetch price data:", e.t0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 10]]
                                    );
                                })
                            )),
                                (function () {
                                    e.apply(this, arguments);
                                })();
                        },
                        [n]
                    ),
                    e
                );
            }
            function is(e) {
                var n,
                    r,
                    t = Object(j.d)().account,
                    a = (u = Oc()).login,
                    i = u.logout,
                    c = Object(ye.useContext)(ss),
                    o = c.selectedLanguage,
                    s = c.setSelectedLanguage,
                    l = (b = { isDark: (d = Object(ye.useContext)(us)).isDark, toggleTheme: d.toggleTheme, theme: Object(ye.useContext)(xe.ThemeContext) }).isDark,
                    u = b.toggleTheme,
                    d = (c = as()) ? Number(c.prices.Cake) : void 0,
                    b =
                        ((b = Object(ye.useState)(bs)),
                        (c = Object(Ce.a)(b, 2)),
                        (b = c[0]),
                        (n = c[1]),
                        (r = Ue().account),
                        Object(ye.useEffect)(
                            function () {
                                if (r)
                                    try {
                                        var t,
                                            e = ds.a.get("profile_".concat(r));
                                        e &&
                                            ((t = JSON.parse(e)),
                                            n(function (e) {
                                                return Object(Te.a)(Object(Te.a)({}, e), {}, { username: t.username, image: t.avatar });
                                            }));
                                    } catch (e) {
                                        n(bs);
                                    }
                                else n(bs);
                            },
                            [r, n]
                        ),
                        b);
                return Object(_e.jsx)(Oe.s, Object(Te.a)({ links: ps, account: t, login: a, logout: i, isDark: l, toggleTheme: u, currentLang: (null == o ? void 0 : o.code) || "", langs: os, setLang: s, cakePriceUsd: d, profile: b }, e));
            }
            var cs = { code: "en", language: "English" },
                os = [
                    cs,
                    { code: "en", language: "Coming Soon" },
                ],
                ss = Object(ye.createContext)({ selectedLanguage: { code: "", language: "" }, setSelectedLanguage: function () {}, translatedLanguage: { code: "", language: "" }, setTranslatedLanguage: function () {} }),
                ls = "IS_DARK",
                us = p.a.createContext({
                    isDark: !1,
                    toggleTheme: function () {
                        return null;
                    },
                }),
                t = n(288),
                ds = n.n(t),
                bs = { profileLink: "#", noProfileLink: "#" },
                ps = [
                    { label: "Home", icon: "HomeIcon", href: "https://tyme.exchange" },
                    {
                        label: "Trade",
                        icon: "TradeIcon",
                        initialOpenState: !0,
                        items: [
                            { label: "Exchange", href: "/swap" },
                            { label: "Liquidity", href: "/pool" },
                        ],
                    },
                    { label: "Buy TYME TOKEN", icon: "InfoIcon", href: "https://tyme.exchange/#/swap?outputCurrency=0xAe81B57BFaf5fB86908Bfb3a6395fd4245Ff0DfB" },
                    {
                        label: "More",
                        icon: "MoreIcon",
                        initialOpenState: !1,
                        items: [
                            { label: "Discord", href: "https://discord.gg/MfUNQ9ygKP" },
                            { label: "Telegram", href: "https://t.me/tymetoken" },
                            { label: "TikTok", href: "https://www.tiktok.com/@tymetoken" },
                            { label: "Twitter", href: "https://twitter.com/tymetoken" },
                            { label: "YouTube", href: "https://www.youtube.com/c/TYMEToken" },
                        ],
                    },
                ],
                js = xe.default.div(Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"])),
                fs = xe.default.div(
                    Object(i.a)([
                        "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 100px 20px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  background-image: url('bg-mobile.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  ",
                        " {\n    background-size: auto;\n  }\n\n  ",
                        " {\n    background-image: url('/images/arch-",
                        ".svg'),\n      url('hero-2.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    min-height: 90vh;\n  }\n",
                    ]),
                    function (e) {
                        return e.theme.mediaQueries.xs;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function (e) {
                        return e.theme.isDark ? "dark" : "light";
                    }
                ),
                hs = xe.default.div(Object(i.a)(["\n  margin-top: 5rem;\n"]));
            var ms = "visibilityState" in document;
            function ys() {
                return !ms || "hidden" !== document.visibilityState;
            }
            function Os() {
                var e = Object(ye.useState)(ys()),
                    t = Object(Ce.a)(e, 2),
                    e = t[0],
                    n = t[1],
                    r = Object(ye.useCallback)(
                        function () {
                            n(ys());
                        },
                        [n]
                    );
                return (
                    Object(ye.useEffect)(
                        function () {
                            if (ms)
                                return (
                                    document.addEventListener("visibilitychange", r),
                                    function () {
                                        document.removeEventListener("visibilitychange", r);
                                    }
                                );
                        },
                        [r]
                    ),
                    e
                );
            }
            var xs = (function (e) {
                    Object(C.a)(n, e);
                    var t = Object(w.a)(n);
                    function n() {
                        return Object(g.a)(this, n), t.call(this, "Cancelled");
                    }
                    return n;
                })(Object(k.a)(Error)),
                vs = (function (e) {
                    Object(C.a)(n, e);
                    var t = Object(w.a)(n);
                    function n() {
                        return Object(g.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(k.a)(Error));
            function gs() {
                return (gs = Object(ge.a)(
                    ve.a.mark(function e(t, n, r) {
                        var a, i;
                        return ve.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                t.aggregate(
                                                    n.map(function (e) {
                                                        return [e.address, e.callData];
                                                    })
                                                )
                                            );
                                        case 3:
                                            (a = e.sent), (i = Object(Ce.a)(a, 2)), (a = i[0]), (i = i[1]), (e.next = 13);
                                            break;
                                        case 9:
                                            throw ((e.prev = 9), (e.t0 = e.catch(0)), console.info("Failed to fetch chunk inside retry", e.t0), e.t0);
                                        case 13:
                                            if (a.toNumber() < r) throw new vs("Fetched for old block number");
                                            e.next = 15;
                                            break;
                                        case 15:
                                            return e.abrupt("return", { results: i, blockNumber: a.toNumber() });
                                        case 16:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 9]]
                        );
                    })
                )).apply(this, arguments);
            }
            var R = n(193),
                me = Object($.c)({ blockNumber: {}, popupList: [], walletModalOpen: !1, settingsMenuOpen: !1 }, function (e) {
                    return e
                        .addCase(ee, function (e, t) {
                            var n = t.payload,
                                t = n.chainId,
                                n = n.blockNumber;
                            "number" != typeof e.blockNumber[t] ? (e.blockNumber[t] = n) : (e.blockNumber[t] = Math.max(n, e.blockNumber[t]));
                        })
                        .addCase(te, function (e) {
                            e.walletModalOpen = !e.walletModalOpen;
                        })
                        .addCase(ne, function (e) {
                            e.settingsMenuOpen = !e.settingsMenuOpen;
                        })
                        .addCase(re, function (e, t) {
                            var n = t.payload,
                                t = n.content,
                                r = n.key,
                                n = n.removeAfterMs,
                                n = void 0 === n ? 15e3 : n;
                            e.popupList = (r
                                ? e.popupList.filter(function (e) {
                                      return e.key !== r;
                                  })
                                : e.popupList
                            ).concat([{ key: r || Object($.f)(), show: !0, content: t, removeAfterMs: n }]);
                        })
                        .addCase(ae, function (e, t) {
                            var n = t.payload.key;
                            e.popupList.forEach(function (e) {
                                e.key === n && (e.show = !1);
                            });
                        });
                }),
                Cs = Object($.b)("global/updateVersion"),
                ws =
                    ($.b,
                    function () {
                        return new Date().getTime();
                    });
            function ks(e, t) {
                return "".concat(e, ";").concat(t);
            }
            function Ts() {
                return new Date().getTime();
            }
            var y = { userDarkMode: null, matchesDarkMode: !1, userExpertMode: !1, userSlippageTolerance: Ne, userDeadline: W, tokens: {}, pairs: {}, timestamp: ws(), audioPlay: !0 },
                B = Object($.c)(y, function (e) {
                    return e
                        .addCase(Cs, function (e) {
                            "number" != typeof e.userSlippageTolerance && (e.userSlippageTolerance = Ne), "number" != typeof e.userDeadline && (e.userDeadline = W), (e.lastUpdateVersionTimestamp = ws());
                        })
                        .addCase(Rn, function (e, t) {
                            (e.userDarkMode = t.payload.userDarkMode), (e.timestamp = ws());
                        })
                        .addCase(Sn, function (e, t) {
                            (e.matchesDarkMode = t.payload.matchesDarkMode), (e.timestamp = ws());
                        })
                        .addCase(Un, function (e, t) {
                            (e.userExpertMode = t.payload.userExpertMode), (e.timestamp = ws());
                        })
                        .addCase(An, function (e, t) {
                            (e.userSlippageTolerance = t.payload.userSlippageTolerance), (e.timestamp = ws());
                        })
                        .addCase(Pn, function (e, t) {
                            (e.userDeadline = t.payload.userDeadline), (e.timestamp = ws());
                        })
                        .addCase(Bn, function (e, t) {
                            t = t.payload.serializedToken;
                            (e.tokens[t.chainId] = e.tokens[t.chainId] || {}), (e.tokens[t.chainId][t.address] = t), (e.timestamp = ws());
                        })
                        .addCase(Mn, function (e, t) {
                            var n = t.payload,
                                t = n.address,
                                n = n.chainId;
                            (e.tokens[n] = e.tokens[n] || {}), delete e.tokens[n][t], (e.timestamp = ws());
                        })
                        .addCase(Ln, function (e, t) {
                            var n = t.payload.serializedPair;
                            n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address && ((t = n.token0.chainId), (e.pairs[t] = e.pairs[t] || {}), (e.pairs[t][ks(n.token0.address, n.token1.address)] = n)),
                                (e.timestamp = ws());
                        })
                        .addCase(Dn, function (e, t) {
                            var n = t.payload,
                                r = n.chainId,
                                t = n.tokenAAddress,
                                n = n.tokenBAddress;
                            e.pairs[r] && (delete e.pairs[r][ks(t, n)], delete e.pairs[r][ks(n, t)]), (e.timestamp = ws());
                        })
                        .addCase(_n, function (e) {
                            e.audioPlay = !1;
                        })
                        .addCase(Yn, function (e) {
                            e.audioPlay = !0;
                        });
                }),
                T = Object($.c)({}, function (e) {
                    return e
                        .addCase(_i, function (e, t) {
                            var n = t.payload,
                                r = n.chainId,
                                a = n.from,
                                i = n.hash,
                                c = n.approval,
                                t = n.summary;
                            if (null !== (n = e[r]) && void 0 !== n && n[i]) throw Error("Attempted to add existing transaction.");
                            n = null !== (n = e[r]) && void 0 !== n ? n : {};
                            (n[i] = { hash: i, approval: c, summary: t, from: a, addedTime: Ts() }), (e[r] = n);
                        })
                        .addCase(Yi, function (e, t) {
                            t = t.payload.chainId;
                            e[t] && (e[t] = {});
                        })
                        .addCase(Fi, function (e, t) {
                            var n = t.payload,
                                r = n.chainId,
                                t = n.hash,
                                n = n.blockNumber,
                                t = null === (r = e[r]) || void 0 === r ? void 0 : r[t];
                            t && (t.lastCheckedBlockNumber ? (t.lastCheckedBlockNumber = Math.max(n, t.lastCheckedBlockNumber)) : (t.lastCheckedBlockNumber = n));
                        })
                        .addCase(zi, function (e, t) {
                            var n = t.payload,
                                r = n.hash,
                                t = n.chainId,
                                n = n.receipt,
                                r = null === (t = e[t]) || void 0 === t ? void 0 : t[r];
                            r && ((r.receipt = n), (r.confirmedTime = Ts()));
                        });
                }),
                D = ((s = { independentField: Ui.INPUT, typedValue: "" }), Object(ke.a)(s, Ui.INPUT, { currencyId: "" }), Object(ke.a)(s, Ui.OUTPUT, { currencyId: "" }), Object(ke.a)(s, "recipient", null), s),
                M = Object($.c)(D, function (e) {
                    return e
                        .addCase(Li, function (e, t) {
                            var n = t.payload,
                                r = n.typedValue,
                                a = n.recipient,
                                i = n.field,
                                c = n.inputCurrencyId,
                                t = n.outputCurrencyId,
                                n = {};
                            return Object(ke.a)(n, Ui.INPUT, { currencyId: c }), Object(ke.a)(n, Ui.OUTPUT, { currencyId: t }), Object(ke.a)(n, "independentField", i), Object(ke.a)(n, "typedValue", r), Object(ke.a)(n, "recipient", a), n;
                        })
                        .addCase(Pi, function (e, t) {
                            var n = t.payload,
                                r = n.currencyId,
                                a = n.field,
                                t = a === Ui.INPUT ? Ui.OUTPUT : Ui.INPUT;
                            return r === e[t].currencyId
                                ? Object(Te.a)(
                                      Object(Te.a)({}, e),
                                      {},
                                      ((n = { independentField: e.independentField === Ui.INPUT ? Ui.OUTPUT : Ui.INPUT }), Object(ke.a)(n, a, { currencyId: r }), Object(ke.a)(n, t, { currencyId: e[a].currencyId }), n)
                                  )
                                : Object(Te.a)(Object(Te.a)({}, e), {}, Object(ke.a)({}, a, { currencyId: r }));
                        })
                        .addCase(Bi, function (e) {
                            var t;
                            return Object(Te.a)(
                                Object(Te.a)({}, e),
                                {},
                                ((t = { independentField: e.independentField === Ui.INPUT ? Ui.OUTPUT : Ui.INPUT }),
                                Object(ke.a)(t, Ui.INPUT, { currencyId: e[Ui.OUTPUT].currencyId }),
                                Object(ke.a)(t, Ui.OUTPUT, { currencyId: e[Ui.INPUT].currencyId }),
                                t)
                            );
                        })
                        .addCase(Mi, function (e, t) {
                            var n = t.payload,
                                t = n.field,
                                n = n.typedValue;
                            return Object(Te.a)(Object(Te.a)({}, e), {}, { independentField: t, typedValue: n });
                        })
                        .addCase(Di, function (e, t) {
                            t = t.payload.recipient;
                            e.recipient = t;
                        });
                }),
                Is = { independentField: Qi.CURRENCY_A, typedValue: "", otherTypedValue: "" },
                S = Object($.c)(Is, function (e) {
                    return e
                        .addCase(tc, function () {
                            return Is;
                        })
                        .addCase(ec, function (e, t) {
                            var n = t.payload,
                                r = n.field,
                                t = n.typedValue;
                            return n.noLiquidity
                                ? r === e.independentField
                                    ? Object(Te.a)(Object(Te.a)({}, e), {}, { independentField: r, typedValue: t })
                                    : Object(Te.a)(Object(Te.a)({}, e), {}, { independentField: r, typedValue: t, otherTypedValue: e.typedValue })
                                : Object(Te.a)(Object(Te.a)({}, e), {}, { independentField: r, typedValue: t, otherTypedValue: "" });
                        });
                }),
                Es = { error: null, current: null, loadingRequestId: null, pendingUpdate: null },
                Ns = {
                    lastInitializedDefaultListOfLists: xa,
                    byUrl: Object(Te.a)(
                        Object(Te.a)(
                            {},
                            xa.reduce(function (e, t) {
                                return (e[t] = Es), e;
                            }, {})
                        ),
                        {},
                        Object(ke.a)({}, Oa, { error: null, current: va, loadingRequestId: null, pendingUpdate: null })
                    ),
                    selectedListUrl: Oa,
                },
                t = Object($.c)(Ns, function (e) {
                    return e
                        .addCase(de.pending, function (e, t) {
                            var n = t.payload,
                                t = n.requestId,
                                n = n.url;
                            e.byUrl[n] = Object(Te.a)(Object(Te.a)({ current: null, pendingUpdate: null }, e.byUrl[n]), {}, { loadingRequestId: t, error: null });
                        })
                        .addCase(de.fulfilled, function (e, t) {
                            var n = t.payload,
                                r = n.requestId,
                                a = n.tokenList,
                                i = n.url,
                                n = null === (t = e.byUrl[i]) || void 0 === t ? void 0 : t.current,
                                t = null === (t = e.byUrl[i]) || void 0 === t ? void 0 : t.loadingRequestId;
                            n
                                ? Object(ue.c)(n.version, a.version) !== ue.a.NONE &&
                                  ((null !== t && t !== r) || (e.byUrl[i] = Object(Te.a)(Object(Te.a)({}, e.byUrl[i]), {}, { loadingRequestId: null, error: null, current: n, pendingUpdate: a })))
                                : (e.byUrl[i] = Object(Te.a)(Object(Te.a)({}, e.byUrl[i]), {}, { loadingRequestId: null, error: null, current: a, pendingUpdate: null }));
                        })
                        .addCase(de.rejected, function (e, t) {
                            var n = t.payload,
                                r = n.url,
                                a = n.requestId,
                                t = n.errorMessage;
                            (null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.loadingRequestId) === a &&
                                (e.byUrl[r] = Object(Te.a)(Object(Te.a)({}, e.byUrl[r]), {}, { loadingRequestId: null, error: t, current: null, pendingUpdate: null }));
                        })
                        .addCase(fe, function (e, t) {
                            t = t.payload;
                            (e.selectedListUrl = t), e.byUrl[t] || (e.byUrl[t] = Es);
                        })
                        .addCase(pe, function (e, t) {
                            t = t.payload;
                            e.byUrl[t] || (e.byUrl[t] = Es);
                        })
                        .addCase(je, function (e, t) {
                            t = t.payload;
                            e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0]);
                        })
                        .addCase(be, function (e, t) {
                            var n = t.payload;
                            if (null === (t = e.byUrl[n]) || void 0 === t || !t.pendingUpdate) throw new Error("accept list update called without pending update");
                            e.byUrl[n] = Object(Te.a)(Object(Te.a)({}, e.byUrl[n]), {}, { pendingUpdate: null, current: e.byUrl[n].pendingUpdate });
                        })
                        .addCase(Cs, function (t) {
                            var n, r;
                            t.lastInitializedDefaultListOfLists
                                ? t.lastInitializedDefaultListOfLists &&
                                  ((n = t.lastInitializedDefaultListOfLists.reduce(function (e, t) {
                                      return e.add(t);
                                  }, new Set())),
                                  (r = xa.reduce(function (e, t) {
                                      return e.add(t);
                                  }, new Set())),
                                  xa.forEach(function (e) {
                                      n.has(e) || (t.byUrl[e] = Es);
                                  }),
                                  t.lastInitializedDefaultListOfLists.forEach(function (e) {
                                      r.has(e) || delete t.byUrl[e];
                                  }))
                                : ((t.byUrl = Ns.byUrl), (t.selectedListUrl = void 0)),
                                (t.lastInitializedDefaultListOfLists = xa);
                        });
                }),
                k = { independentField: oo.LIQUIDITY_PERCENT, typedValue: "0" },
                y = Object($.c)(k, function (e) {
                    return e.addCase(jo, function (e, t) {
                        var n = t.payload,
                            t = n.field,
                            n = n.typedValue;
                        return Object(Te.a)(Object(Te.a)({}, e), {}, { independentField: t, typedValue: n });
                    });
                }),
                s = Object($.c)({ callResults: {} }, function (e) {
                    return e
                        .addCase(jn, function (e, t) {
                            var n = t.payload,
                                t = n.calls,
                                r = n.chainId,
                                n = n.options,
                                n = (n = void 0 === n ? {} : n).blocksPerFetch,
                                a = void 0 === n ? 1 : n,
                                i = e.callListeners || (e.callListeners = {});
                            (i[r] = null !== (e = i[r]) && void 0 !== e ? e : {}),
                                t.forEach(function (e) {
                                    var t = bn(e);
                                    (i[r][t] = null !== (e = i[r][t]) && void 0 !== e ? e : {}), (i[r][t][a] = (null !== (t = i[r][t][a]) && void 0 !== t ? t : 0) + 1);
                                });
                        })
                        .addCase(fn, function (e, t) {
                            var n = t.payload,
                                r = n.chainId,
                                t = n.calls,
                                n = n.options,
                                n = (n = void 0 === n ? {} : n).blocksPerFetch,
                                a = void 0 === n ? 1 : n,
                                i = e.callListeners || (e.callListeners = {});
                            i[r] &&
                                t.forEach(function (e) {
                                    e = bn(e);
                                    i[r][e] && i[r][e][a] && (1 === i[r][e][a] ? delete i[r][e][a] : i[r][e][a]--);
                                });
                        })
                        .addCase(hn, function (n, e) {
                            var t = e.payload,
                                r = t.chainId,
                                a = t.fetchingBlockNumber,
                                e = t.calls;
                            (n.callResults[r] = null !== (t = n.callResults[r]) && void 0 !== t ? t : {}),
                                e.forEach(function (e) {
                                    var t = bn(e),
                                        e = n.callResults[r][t];
                                    e ? (null !== (e = e.fetchingBlockNumber) && void 0 !== e ? e : 0) >= a || (n.callResults[r][t].fetchingBlockNumber = a) : (n.callResults[r][t] = { fetchingBlockNumber: a });
                                });
                        })
                        .addCase(mn, function (t, e) {
                            var n = e.payload,
                                r = n.fetchingBlockNumber,
                                a = n.chainId,
                                e = n.calls;
                            (t.callResults[a] = null !== (n = t.callResults[a]) && void 0 !== n ? n : {}),
                                e.forEach(function (e) {
                                    (e = bn(e)), (e = t.callResults[a][e]);
                                    e && e.fetchingBlockNumber === r && (delete e.fetchingBlockNumber, (e.data = null), (e.blockNumber = r));
                                });
                        })
                        .addCase(yn, function (n, e) {
                            var e = e.payload,
                                r = e.chainId,
                                a = e.results,
                                i = e.blockNumber;
                            (n.callResults[r] = null !== (e = n.callResults[r]) && void 0 !== e ? e : {}),
                                Object.keys(a).forEach(function (e) {
                                    var t = n.callResults[r][e];
                                    (null !== (t = null == t ? void 0 : t.blockNumber) && void 0 !== t ? t : 0) > i || (n.callResults[r][e] = { data: a[e], blockNumber: i });
                                });
                        });
                }),
                D = ["user", "transactions"],
                k = Object(R.load)({ states: D });
            k.user &&
                (k.user.userDarkMode = (function () {
                    var e = null;
                    try {
                        var t = localStorage.getItem("IS_DARK");
                        t && (e = JSON.parse(t));
                    } catch (e) {
                        console.error(e);
                    }
                    return e;
                })());
            R = Object($.a)({
                reducer: { application: me, user: B, transactions: T, swap: M, mint: S, burn: y, multicall: s, lists: t, toasts: r },
                middleware: [].concat(Object(Z.a)(Object($.e)({ thunk: !1 })), [Object(R.save)({ states: D })]),
                preloadedState: k,
            });
            R.dispatch(Cs());
            var Ss = R;
            function Rs(e) {
                e = new l.a(e);
                return (e.pollingInterval = 15e3), e;
            }
            var Us = Object(j.c)(V),
                D = (n(495), n(195)),
                k = n(290),
                R = n.n(k),
                k = n(291),
                k = n.n(k);
            D.a
                .use(R.a)
                .use(k.a)
                .use(mt.a)
                .init({ backend: { loadPath: "./locales/{{lng}}.json" }, react: { useSuspense: !0 }, fallbackLng: "en", preload: ["en"], keySeparator: !1, interpolation: { escapeValue: !1 } }),
                D.a,
                "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
                window.addEventListener("error", function () {
                    var e;
                    null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists");
                }),
                a.a.render(
                    Object(_e.jsx)(ye.StrictMode, {
                        children: Object(_e.jsxs)(
                            function (e) {
                                e = e.children;
                                return Object(_e.jsx)(j.b, {
                                    getLibrary: Rs,
                                    children: Object(_e.jsx)(Us, { getLibrary: Rs, children: Object(_e.jsx)(we.a, { store: Ss, children: Object(_e.jsx)(rs, { children: Object(_e.jsx)(Oe.u, { children: e }) }) }) }),
                                });
                            },
                            {
                                children: [
                                    Object(_e.jsxs)(_e.Fragment, {
                                        children: [
                                            Object(_e.jsx)(function () {
                                                var e = Ue().library,
                                                    r = Object(we.c)(),
                                                    a = Object(we.d)(function (e) {
                                                        return e.lists.byUrl;
                                                    }),
                                                    t = Os(),
                                                    n = Na();
                                                return (
                                                    Br(
                                                        Object(ye.useCallback)(
                                                            function () {
                                                                t &&
                                                                    Object.keys(a).forEach(function (e) {
                                                                        return n(e).catch(function (e) {
                                                                            return console.error("interval list fetching error", e);
                                                                        });
                                                                    });
                                                            },
                                                            [n, t, a]
                                                        ),
                                                        e ? 6e5 : null
                                                    ),
                                                    Object(ye.useEffect)(
                                                        function () {
                                                            Object.keys(a).forEach(function (e) {
                                                                var t = a[e];
                                                                t.current ||
                                                                    t.loadingRequestId ||
                                                                    t.error ||
                                                                    n(e).catch(function (e) {
                                                                        return console.error("list added fetching error", e);
                                                                    });
                                                            });
                                                        },
                                                        [r, n, e, a]
                                                    ),
                                                    Object(ye.useEffect)(
                                                        function () {
                                                            Object.keys(a).forEach(function (e) {
                                                                var t = a[e];
                                                                if (t.current && t.pendingUpdate) {
                                                                    var n = Object(ue.c)(t.current.version, t.pendingUpdate.version);
                                                                    switch (n) {
                                                                        case ue.a.NONE:
                                                                            throw new Error("unexpected no version bump");
                                                                        case ue.a.PATCH:
                                                                        case ue.a.MINOR:
                                                                            n >= Object(ue.d)(t.current.tokens, t.pendingUpdate.tokens)
                                                                                ? (r(be(e)), r(re({ key: e, content: { listUpdate: { listUrl: e, oldList: t.current, newList: t.pendingUpdate, auto: !0 } } })))
                                                                                : console.error(
                                                                                      "List at url ".concat(
                                                                                          e,
                                                                                          " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
                                                                                      )
                                                                                  );
                                                                            break;
                                                                        case ue.a.MAJOR:
                                                                            r(re({ key: e, content: { listUpdate: { listUrl: e, auto: !1, oldList: t.current, newList: t.pendingUpdate } }, removeAfterMs: null }));
                                                                    }
                                                                }
                                                            });
                                                        },
                                                        [r, a]
                                                    ),
                                                    null
                                                );
                                            }, {}),
                                            Object(_e.jsx)(function () {
                                                var e = Ue(),
                                                    t = e.library,
                                                    n = e.chainId,
                                                    r = Object(we.c)(),
                                                    a = Os(),
                                                    i = Object(ye.useState)({ chainId: n, blockNumber: null }),
                                                    i = (e = Object(Ce.a)(i, 2))[0],
                                                    c = e[1],
                                                    o = Object(ye.useCallback)(
                                                        function (t) {
                                                            c(function (e) {
                                                                return n === e.chainId ? ("number" != typeof e.blockNumber ? { chainId: n, blockNumber: t } : { chainId: n, blockNumber: Math.max(t, e.blockNumber) }) : e;
                                                            });
                                                        },
                                                        [n, c]
                                                    );
                                                Object(ye.useEffect)(
                                                    function () {
                                                        if (t && n && a)
                                                            return (
                                                                c({ chainId: n, blockNumber: null }),
                                                                t
                                                                    .getBlockNumber()
                                                                    .then(o)
                                                                    .catch(function (e) {
                                                                        return console.error("Failed to get block number for chainId: ".concat(n), e);
                                                                    }),
                                                                t.on("block", o),
                                                                function () {
                                                                    t.removeListener("block", o);
                                                                }
                                                            );
                                                    },
                                                    [r, n, t, o, a]
                                                );
                                                var s = rc(i, 100);
                                                return (
                                                    Object(ye.useEffect)(
                                                        function () {
                                                            s.chainId && s.blockNumber && a && r(ee({ chainId: s.chainId, blockNumber: s.blockNumber }));
                                                        },
                                                        [a, r, s.blockNumber, s.chainId]
                                                    ),
                                                    null
                                                );
                                            }, {}),
                                            Object(_e.jsx)(function () {
                                                var e,
                                                    n,
                                                    r = (t = Ue()).chainId,
                                                    a = t.library,
                                                    i = ie(),
                                                    c = Object(we.c)(),
                                                    t = Object(we.d)(function (e) {
                                                        return e.transactions;
                                                    }),
                                                    o = r && null !== (e = t[r]) && void 0 !== e ? e : {},
                                                    s =
                                                        ((n = Object(we.c)()),
                                                        Object(ye.useCallback)(
                                                            function (e, t) {
                                                                n(re({ content: e, key: t }));
                                                            },
                                                            [n]
                                                        ));
                                                return (
                                                    Object(ye.useEffect)(
                                                        function () {
                                                            r &&
                                                                a &&
                                                                i &&
                                                                Object.keys(o)
                                                                    .filter(function (e) {
                                                                        return (function (e) {
                                                                            if (e.receipt) return !1;
                                                                            if (!e.lastCheckedBlockNumber) return !0;
                                                                            var t = i - e.lastCheckedBlockNumber;
                                                                            if (t < 1) return !1;
                                                                            e = (new Date().getTime() - e.addedTime) / 1e3 / 60;
                                                                            return 60 < e ? 9 < t : !(5 < e) || 2 < t;
                                                                        })(o[e]);
                                                                    })
                                                                    .forEach(function (t) {
                                                                        a.getTransactionReceipt(t)
                                                                            .then(function (e) {
                                                                                e
                                                                                    ? (c(
                                                                                          zi({
                                                                                              chainId: r,
                                                                                              hash: t,
                                                                                              receipt: {
                                                                                                  blockHash: e.blockHash,
                                                                                                  blockNumber: e.blockNumber,
                                                                                                  contractAddress: e.contractAddress,
                                                                                                  from: e.from,
                                                                                                  status: e.status,
                                                                                                  to: e.to,
                                                                                                  transactionHash: e.transactionHash,
                                                                                                  transactionIndex: e.transactionIndex,
                                                                                              },
                                                                                          })
                                                                                      ),
                                                                                      s({ txn: { hash: t, success: 1 === e.status, summary: null === (e = o[t]) || void 0 === e ? void 0 : e.summary } }, t))
                                                                                    : c(Fi({ chainId: r, hash: t, blockNumber: i }));
                                                                            })
                                                                            .catch(function (e) {
                                                                                console.error("failed to check transaction hash: ".concat(t), e);
                                                                            });
                                                                    });
                                                        },
                                                        [r, a, o, i, c, s]
                                                    ),
                                                    null
                                                );
                                            }, {}),
                                            Object(_e.jsx)(function () {
                                                var p = Object(we.c)(),
                                                    e = Object(we.d)(function (e) {
                                                        return e.multicall;
                                                    }),
                                                    t = rc(e.callListeners, 100),
                                                    j = ie(),
                                                    f = Ue().chainId,
                                                    h = rr(),
                                                    m = Object(ye.useRef)(),
                                                    c = Object(ye.useMemo)(
                                                        function () {
                                                            if (!t || !f) return {};
                                                            var r = t[f];
                                                            return r
                                                                ? Object.keys(r).reduce(function (e, t) {
                                                                      var n = r[t];
                                                                      return (
                                                                          (e[t] = Object.keys(n)
                                                                              .filter(function (e) {
                                                                                  e = parseInt(e);
                                                                                  return !(e <= 0) && 0 < n[e];
                                                                              })
                                                                              .reduce(function (e, t) {
                                                                                  return Math.min(e, parseInt(t));
                                                                              }, 1 / 0)),
                                                                          e
                                                                      );
                                                                  }, {})
                                                                : {};
                                                        },
                                                        [t, f]
                                                    ),
                                                    n = Object(ye.useMemo)(
                                                        function () {
                                                            return (
                                                                (n = e.callResults),
                                                                (r = c),
                                                                (i = j),
                                                                (a = f) && i
                                                                    ? n[a]
                                                                        ? Object.keys(r).filter(function (e) {
                                                                              var t = r[e],
                                                                                  e = n[a][e];
                                                                              if (!e) return !0;
                                                                              t = i - (t - 1);
                                                                              return !(e.fetchingBlockNumber && e.fetchingBlockNumber >= t) && (!e.blockNumber || e.blockNumber < t);
                                                                          })
                                                                        : Object.keys(r)
                                                                    : []
                                                            );
                                                            var n, r, a, i;
                                                        },
                                                        [f, e.callResults, c, j]
                                                    ),
                                                    r = Object(ye.useMemo)(
                                                        function () {
                                                            return JSON.stringify(n.sort());
                                                        },
                                                        [n]
                                                    );
                                                return (
                                                    Object(ye.useEffect)(
                                                        function () {
                                                            var d, e, t, n, b;
                                                            j &&
                                                                f &&
                                                                h &&
                                                                0 !== (d = JSON.parse(r)).length &&
                                                                ((n = d.map(pn)),
                                                                (b = (function (t) {
                                                                    if ((0, t.length <= 500)) return [t];
                                                                    var e = Math.ceil(t.length / 500),
                                                                        n = Math.ceil(t.length / e);
                                                                    return Object(Z.a)(Array(e).keys()).map(function (e) {
                                                                        return t.slice(e * n, e * n + n);
                                                                    });
                                                                })(n)),
                                                                (null === (e = m.current) || void 0 === e ? void 0 : e.blockNumber) !== j &&
                                                                    (null === (e = m.current) ||
                                                                        void 0 === e ||
                                                                        null === (t = e.cancellations) ||
                                                                        void 0 === t ||
                                                                        t.forEach(function (e) {
                                                                            return e();
                                                                        })),
                                                                p(hn({ calls: n, chainId: f, fetchingBlockNumber: j })),
                                                                (m.current = {
                                                                    blockNumber: j,
                                                                    cancellations: b.map(function (a, i) {
                                                                        var e,
                                                                            c,
                                                                            n,
                                                                            o,
                                                                            s,
                                                                            l,
                                                                            u,
                                                                            t =
                                                                                ((o = (e = { n: 1 / 0, minWait: 2500, maxWait: 3500 }).n),
                                                                                (s = e.minWait),
                                                                                (l = e.maxWait),
                                                                                (u = !1),
                                                                                {
                                                                                    promise: new Promise(
                                                                                        ((n = Object(ge.a)(
                                                                                            ve.a.mark(function e(t, n) {
                                                                                                var r;
                                                                                                return ve.a.wrap(
                                                                                                    function (e) {
                                                                                                        for (;;)
                                                                                                            switch ((e.prev = e.next)) {
                                                                                                                case 0:
                                                                                                                    c = n;
                                                                                                                case 1:
                                                                                                                    return (
                                                                                                                        (r = void 0),
                                                                                                                        (e.prev = 3),
                                                                                                                        (e.next = 6),
                                                                                                                        (function () {
                                                                                                                            return gs.apply(this, arguments);
                                                                                                                        })(h, a, j)
                                                                                                                    );
                                                                                                                case 6:
                                                                                                                    return (r = e.sent), u || (t(r), (u = !0)), e.abrupt("break", 24);
                                                                                                                case 11:
                                                                                                                    if (((e.prev = 11), (e.t0 = e.catch(3)), u)) return e.abrupt("break", 24);
                                                                                                                    e.next = 15;
                                                                                                                    break;
                                                                                                                case 15:
                                                                                                                    if (o <= 0 || !(e.t0 instanceof vs)) return n(e.t0), (u = !0), e.abrupt("break", 24);
                                                                                                                    e.next = 19;
                                                                                                                    break;
                                                                                                                case 19:
                                                                                                                    o--;
                                                                                                                case 20:
                                                                                                                    return (
                                                                                                                        (e.next = 22),
                                                                                                                        (function (e, t) {
                                                                                                                            return (
                                                                                                                                (n = e + Math.round(Math.random() * Math.max(0, t - e))),
                                                                                                                                new Promise(function (e) {
                                                                                                                                    return setTimeout(e, n);
                                                                                                                                })
                                                                                                                            );
                                                                                                                            var n;
                                                                                                                        })(s, l)
                                                                                                                    );
                                                                                                                case 22:
                                                                                                                    e.next = 1;
                                                                                                                    break;
                                                                                                                case 24:
                                                                                                                case "end":
                                                                                                                    return e.stop();
                                                                                                            }
                                                                                                    },
                                                                                                    e,
                                                                                                    null,
                                                                                                    [[3, 11]]
                                                                                                );
                                                                                            })
                                                                                        )),
                                                                                        function (e, t) {
                                                                                            return n.apply(this, arguments);
                                                                                        })
                                                                                    ),
                                                                                    cancel: function () {
                                                                                        u || ((u = !0), c(new xs()));
                                                                                    },
                                                                                }),
                                                                            e = t.cancel;
                                                                        return (
                                                                            t.promise
                                                                                .then(function (e) {
                                                                                    var r = e.results,
                                                                                        t = e.blockNumber;
                                                                                    m.current = { cancellations: [], blockNumber: j };
                                                                                    var n = b.slice(0, i).reduce(function (e, t) {
                                                                                            return e + t.length;
                                                                                        }, 0),
                                                                                        e = n + r.length;
                                                                                    p(
                                                                                        yn({
                                                                                            chainId: f,
                                                                                            results: d.slice(n, e).reduce(function (e, t, n) {
                                                                                                return (e[t] = null !== (n = r[n]) && void 0 !== n ? n : null), e;
                                                                                            }, {}),
                                                                                            blockNumber: t,
                                                                                        })
                                                                                    );
                                                                                })
                                                                                .catch(function (e) {
                                                                                    e instanceof xs
                                                                                        ? console.error("Cancelled fetch for blockNumber", j)
                                                                                        : (console.error("Failed to fetch multicall chunk", a, f, e), p(mn({ calls: a, chainId: f, fetchingBlockNumber: j })));
                                                                                }),
                                                                            e
                                                                        );
                                                                    }),
                                                                }));
                                                        },
                                                        [f, h, p, r, j]
                                                    ),
                                                    null
                                                );
                                            }, {}),
                                            Object(_e.jsx)(function () {
                                                var e = Object(we.d)(function (e) {
                                                        return e.toasts.data;
                                                    }),
                                                    t = yc().remove;
                                                return Object(_e.jsx)(Oe.z, {
                                                    toasts: e,
                                                    onRemove: function (e) {
                                                        return t(e);
                                                    },
                                                });
                                            }, {}),
                                        ],
                                    }),
                                    Object(_e.jsx)(Oe.v, {}),
                                    Object(_e.jsx)(o, {}),
                                    Object(_e.jsx)(function () {
                                        var e = Object(ye.useState)(void 0),
                                            t = (a = Object(Ce.a)(e, 2))[0],
                                            n = a[1],
                                            r = Object(ye.useState)(void 0),
                                            a = (e = Object(Ce.a)(r, 2))[0],
                                            i = e[1],
                                            r = Object(ye.useState)([]),
                                            r = (e = Object(Ce.a)(r, 2))[0],
                                            c = e[1],
                                            e = "".concat(
                                                Object({
                                                    NODE_ENV: "production",
                                                    PUBLIC_URL: "https://tyme.exchange",
                                                    WDS_SOCKET_HOST: void 0,
                                                    WDS_SOCKET_PATH: void 0,
                                                    WDS_SOCKET_PORT: void 0,
                                                    FAST_REFRESH: !0,
                                                    REACT_APP_CHAIN_ID: "56",
                                                    REACT_APP_GTAG: "GTM-PXLD3XW",
                                                    REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                                                }).REACT_APP_CROWDIN_APIKEY
                                            ),
                                            o = parseInt(
                                                "".concat(
                                                    Object({
                                                        NODE_ENV: "production",
                                                        PUBLIC_URL: "https://tyme.exchange",
                                                        WDS_SOCKET_HOST: void 0,
                                                        WDS_SOCKET_PATH: void 0,
                                                        WDS_SOCKET_PORT: void 0,
                                                        FAST_REFRESH: !0,
                                                        REACT_APP_CHAIN_ID: "56",
                                                        REACT_APP_GTAG: "GTM-PXLD3XW",
                                                        REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                                                    }).REACT_APP_CROWDIN_PROJECTID
                                                )
                                            ),
                                            e = { token: e },
                                            s = new b.StringTranslations(e);
                                        Object(ye.useEffect)(function () {
                                            var t,
                                                e = localStorage.getItem("pancakeSwapLanguage");
                                            e
                                                ? ((t = e),
                                                  (e = os.filter(function (e) {
                                                      return e.code === t;
                                                  })[0]),
                                                  n(e))
                                                : n(cs);
                                        }, []);
                                        var l,
                                            u =
                                                ((l = Object(ge.a)(
                                                    ve.a.mark(function e() {
                                                        return ve.a.wrap(function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        s.listLanguageTranslations(o, t.code, void 0, 6, 200)
                                                                            .then(function (e) {
                                                                                e.data.length < 1 ? c(["error"]) : c(e.data);
                                                                            })
                                                                            .then(function () {
                                                                                return i(t);
                                                                            })
                                                                            .catch(function (e) {
                                                                                c(["error"]), console.error(e);
                                                                            });
                                                                    case 1:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        }, e);
                                                    })
                                                )),
                                                function () {
                                                    return l.apply(this, arguments);
                                                });
                                        return (
                                            Object(ye.useEffect)(
                                                function () {
                                                    t && u();
                                                },
                                                [t]
                                            ),
                                            Object(_e.jsx)(ye.Suspense, {
                                                fallback: null,
                                                children: Object(_e.jsx)(h.a, {
                                                    children: Object(_e.jsx)(js, {
                                                        children: Object(_e.jsx)(ss.Provider, {
                                                            value: { selectedLanguage: t, setSelectedLanguage: n, translatedLanguage: a, setTranslatedLanguage: i },
                                                            children: Object(_e.jsx)(Gt.Provider, {
                                                                value: { translations: r, setTranslations: c },
                                                                children: Object(_e.jsx)(is, {
                                                                    children: Object(_e.jsxs)(fs, {
                                                                        children: [
                                                                            Object(_e.jsx)(ht, {}),
                                                                            Object(_e.jsx)(gt, {
                                                                                children: Object(_e.jsxs)(d.d, {
                                                                                    children: [
                                                                                        Object(_e.jsx)(d.b, { exact: !0, strict: !0, path: "/swap", component: ts }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, strict: !0, path: "/find", component: co }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, strict: !0, path: "/pool", component: io }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, path: "/add", component: Ac }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, strict: !0, path: "/remove/:currencyIdA/:currencyIdB", component: yo }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, path: "/add/:currencyIdA", component: Bc }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, path: "/add/:currencyIdA/:currencyIdB", component: Mc }),
                                                                                        Object(_e.jsx)(d.b, { exact: !0, strict: !0, path: "/remove/:tokens", component: Dc }),
                                                                                        Object(_e.jsx)(d.b, { component: ns }),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                            Object(_e.jsx)(hs, {}),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            })
                                        );
                                    }, {}),
                                ],
                            }
                        ),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[512, 2, 3]],
]);
