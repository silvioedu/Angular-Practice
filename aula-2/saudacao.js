var Saudacao = (function () {
    function Saudacao() {
    }
    Saudacao.prototype.saudacao = function () {
        console.log("Hello");
    };
    return Saudacao;
})();
var obj = new Saudacao();
obj.saudacao();
