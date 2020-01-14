const C = (...args) => { console.log(...args) }

function makeGlobalGetters() {
    function createGlobal(string) {
        Object.defineProperty(window, string, {

            get: function (val) {

                return caller(string)

            },

            set: function (val) {
                setterCall(string)

            },


            configurable: true,
        });
    }
    for (let i = 0; i < 100; i++) {
        let str1 = "a" + i
        createGlobal(str1)


    }


}
function caller(str) {
    let num = Number(str.replace(/[A-Za-z]/g, ""))
    setTimeout(() => { C(G.V[num][2]) }, 0)
    return 'הבנתי'

}
function setterCall() {

}
mainOld()





makeGlobalGetters()

//window["a12"] = 234234;
G.V = _Q_object.QuestionsArray;
//L(G.V)






