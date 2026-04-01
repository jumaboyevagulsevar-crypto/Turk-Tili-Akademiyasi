import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFExportButton = ({ lessonTitle, vocabulary }) => {
    const exportPDF = () => {
        const input = document.getElementById('lesson-summary-content');

        // Temporarily show the hidden summary for capture
        input.style.display = 'block';

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${lessonTitle}_Konspekt.pdf`);

            // Hide it again
            input.style.display = 'none';
        });
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <button className="btn-secondary" onClick={exportPDF}>
                <i className="fa-solid fa-file-pdf"></i> PDF Konspekt Yuklash
            </button>

            {/* Hidden content for PDF generation */}
            <div id="lesson-summary-content" style={{
                display: 'none',
                padding: '40px',
                background: '#fff',
                color: '#000',
                width: '800px',
                fontFamily: 'Arial, sans-serif'
            }}>
                <div style={{ borderBottom: '2px solid #E30A17', paddingBottom: '20px', marginBottom: '20px' }}>
                    <h1 style={{ color: '#E30A17', margin: 0 }}>Turk Tili Akademiyasi</h1>
                    <p style={{ margin: '5px 0' }}>Dars Konspekti: {lessonTitle}</p>
                </div>

                <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Yangi so'zlar:</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f5f5f5' }}>
                            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Turkcha</th>
                            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>O'zbekcha / English</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vocabulary.map((v, i) => (
                            <tr key={i}>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{v.word}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{v.translation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ marginTop: '40px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
                    O'rganishda davom eting! @TurkTiliAkademiyasi
                </div>
            </div>
        </div>
    );
};

export default PDFExportButton;
