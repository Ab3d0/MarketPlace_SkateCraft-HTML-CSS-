function printPDF() {
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Imprimer le PDF</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<iframe src="exemple.pdf" width="100%" height="600"></iframe>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  