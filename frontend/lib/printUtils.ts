/**
 * Print utilities for health records and documents
 */

export interface PrintOptions {
  title?: string;
  subtitle?: string;
  footer?: string;
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

/**
 * Print HTML content with custom styling
 */
export function printHTML(content: string, options: PrintOptions = {}) {
  const {
    title = 'Health Record',
    subtitle = new Date().toLocaleDateString(),
    footer = 'Docomax - Healthcare Advisor',
    margins = { top: 10, right: 10, bottom: 10, left: 10 }
  } = options;

  const printWindow = window.open('', '', 'height=600,width=800');
  if (!printWindow) {
    throw new Error('Unable to open print window');
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          color: #1f2937;
          line-height: 1.6;
          background: white;
        }
        
        @media print {
          body {
            margin: ${margins.top}mm ${margins.right}mm ${margins.bottom}mm ${margins.left}mm;
          }
          
          .no-print {
            display: none !important;
          }
          
          a {
            text-decoration: none;
            color: #1f2937;
          }
          
          .page-break {
            page-break-after: always;
          }
        }
        
        .print-header {
          text-align: center;
          margin-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 1rem;
        }
        
        .print-header h1 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #0ea5e9;
        }
        
        .print-header p {
          color: #6b7280;
          font-size: 14px;
        }
        
        .print-footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
        }
        
        .print-timestamp {
          color: #9ca3af;
          font-size: 12px;
          margin-top: 0.5rem;
        }
        
        .section {
          margin-bottom: 2rem;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
          border-left: 4px solid #0ea5e9;
          padding-left: 0.75rem;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }
        
        th, td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }
        
        th {
          background-color: #f3f4f6;
          font-weight: 600;
          color: #1f2937;
        }
        
        tr:last-child td {
          border-bottom: none;
        }
        
        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 12px;
          font-weight: 500;
          background-color: #e0f2fe;
          color: #0369a1;
        }
      </style>
    </head>
    <body>
      <div class="print-header">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      
      <div class="print-content">
        ${content}
      </div>
      
      <div class="print-footer">
        <p>${footer}</p>
        <div class="print-timestamp">
          Printed on: ${new Date().toLocaleString()}
        </div>
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load before printing
  printWindow.onload = () => {
    printWindow.print();
  };

  return printWindow;
}

/**
 * Export data as CSV
 */
export function exportAsCSV(data: Record<string, any>[], filename: string = 'export.csv') {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  // Get headers from first object
  const headers = Object.keys(data[0]);
  
  // Create CSV content
  const csv = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Escape quotes and wrap in quotes if contains comma
        const stringValue = String(value || '');
        return stringValue.includes(',') ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
      }).join(',')
    )
  ].join('\n');

  // Create blob and download
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Export data as JSON
 */
export function exportAsJSON(data: any, filename: string = 'export.json') {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
