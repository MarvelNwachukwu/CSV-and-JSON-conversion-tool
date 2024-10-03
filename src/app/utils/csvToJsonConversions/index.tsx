import Papa from 'papaparse';

export const handleCSVConversions = ({
  csv,
  csvFile,
  space,
}: {
  csv: string;
  csvFile: File | null;
  space: number;
}) => {
  const csvToJson = (csv: string) => {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const jsonArray = [];

    for (let i = 1; i < lines.length; i++) {
      const obj: { [key: string]: string } = {};
      const currentLine = lines[i];
      let inQuotes = false;
      let currentField = '';
      let fieldIndex = 0;

      for (let j = 0; j < currentLine.length; j++) {
        if (currentLine[j] === '"') {
          inQuotes = !inQuotes;
        } else if (currentLine[j] === ',' && !inQuotes) {
          obj[headers[fieldIndex]] = currentField.trim();
          currentField = '';
          fieldIndex++;
        } else {
          currentField += currentLine[j];
        }
      }

      // Add the last field
      obj[headers[fieldIndex]] = currentField.trim();
      jsonArray.push(obj);
    }

    return jsonArray;
  };

  const convertCsvFile = () => {
    if (!csvFile) return;
  
    Papa.parse(csvFile, {
      header: true,
      complete: (result) => {
        console.log(result);
        return JSON.stringify(result.data, null, space);
      },
    });
  }; 

  if (csv && !csvFile) {
    const jsonData = csvToJson(csv);
    return JSON.stringify(jsonData, null, space);
  }

  if (csvFile) {
    convertCsvFile();
  }
};

