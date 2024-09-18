document.getElementById('botao-download').addEventListener('click',function(){
    const caminho ="./aquivo/vitoria.silva.pdf"

    const link=document.createElement("a");
    link.href=caminho;

    link.download="vitoria.silva.pdf";

    link.click();
});