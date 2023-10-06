import fs from "fs";
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  fs.writeFile("./data/F1040EZ.json", JSON.stringify(pdfData), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Fichier enregistré avec succès.");
    }
  });
});

pdfParser.loadPDF("./test2.pdf");
