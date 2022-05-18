function generate() {
    // inicio determinacion de variables
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    var columns = [""]
    var row = 80;
    var rows = [""];
    var y = 10;
    // fin determinacion de variables

    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };

    

    margins = { top: 20, bottom: 20, left: 5, right: 5, width: 600 };
    
    doc.setLineWidth(2);
    doc.text(300, y = y + 10, "POTENCIAL PROFESIONAL");
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.autoTable( {
        headerStyles: { fillColor: [189, 183, 183], lineColor: [221, 221, 221]  },
        startY: 30,  
        columnStyles: { 0: { cellWidth: 110 }, 1: { cellWidth: 110 }, 2: { cellWidth: 110 }, 3: { cellWidth: 110 }, 4: { cellWidth: 110 } },
        styles: { halign: 'center', lineWidth: 1 },
        
        html: '#simple_table', 
   
        } )
   
    doc.save('#.pdf');
}

