/*const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server");
};

//esto inicia el servidor
const server = http.createServer(requestListener);

server.listen(port, host, () =>{
    console.log(`server is running on http://${host}:${port}`);
});*/

var lista = [11,33,2,-1,110,99,8];
let numMayor = 0;
let segundoMayor = 0;

for(let i = 0;i< lista.length;i++){
    let e = lista[i];
    if(e % 2 != 0 && e > numMayor){
        numMayor = e;
    }else if(e % 2 != 0 && e < numMayor && e > segundoMayor){
        segundoMayor = e;
    }
    console.log(segundoMayor);
}
