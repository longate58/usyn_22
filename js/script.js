function generate() {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "POTENCIAL PROFESIONAL DE PDVSA");
    doc.autoTable({
        html: '#simple_table',
        startY: 70,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 60,
            },
            1: {
                cellWidth: 60,
            },
            2: {
                cellWidth: 60,
            },
            3: {
                cellWidth: 60,
            },
            4: {
                cellWidth: 60,
            }

        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('PROFESIONAL PDF.pdf');
}