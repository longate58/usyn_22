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
        top: 50,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600
    };
    var y = 10;
    doc.setLineWidth(2);
    doc.text(200, y = y + 10, "CAMBIAR A PDF");
    doc.autoTable({
        html: '#simple_table',
        head: [['NOMBRE Y APELLIDO', 'NUMERO DE CARNET']],
        startY: 30,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 80,
            },
            1: {
                cellWidth: 80,
            },
            2: {
                cellWidth: 80,
            },
            3: {
                cellWidth: 80,
            },
            4: {
                cellWidth: 80,
            }
        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('#.pdf');
}