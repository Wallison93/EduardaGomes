import { PDFDocument } from 'pdf-lib';
import download from "downloadjs";

import foto1 from "../imagensDuda/composit/fotocapaPDF.webp";
import foto2 from "../imagensDuda/composit/compositeverso.webp";

async function carregarArquivo(url) {
    const response = await fetch(url);
    return response.arrayBuffer();
}

export async function GerarPDF() {
    const pdfDoc = await PDFDocument.create();

    // Criar página A4 (595 x 842 pontos)
    let page = pdfDoc.addPage([595, 842]);
    let page2 = pdfDoc.addPage([595, 842]);

    // Carregar e embutir a imagem
    const imagemBytes = await carregarArquivo(foto1);
    const imagemEmb = await pdfDoc.embedPng(imagemBytes);

    const imagemBytes2 = await carregarArquivo(foto2);
    const imagemEmb2 = await pdfDoc.embedPng(imagemBytes2);

    // **Desenhar a imagem preenchendo toda a página**
    page.drawImage(imagemEmb, {
        x: 0,
        y: 0,
        width: 595,
        height: 842,
    });

    page2.drawImage(imagemEmb2, {
        x: 0,
        y: 0,
        width: 595,
        height: 842,
    });

    // Salvar e baixar o PDF
    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "Eduarda_Gomes.pdf", "application/pdf");
}
