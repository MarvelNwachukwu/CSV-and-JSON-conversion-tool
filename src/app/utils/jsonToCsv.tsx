const jsonToCsv = (
  jsonString: string,
  separator: string,
  forceDoubleQuotes: boolean
): string | number => {
  try {
    let jsonData = JSON.parse(jsonString);

    if (!Array.isArray(jsonData)) {
      jsonData = [jsonData]; // Convert single object to array
    }

    const headers = new Set<string>();
    const rows: string[][] = [];

    // Extract all unique keys (headers)
    const extractKeys = (obj: Record<string, unknown>, prefix = '') => {
      for (const key in obj) {
        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          extractKeys(obj[key] as Record<string, unknown>, `${prefix}${key}.`);
        } else {
          headers.add(`${prefix}${key}`);
        }
      }
    };

    jsonData.forEach((item: Record<string, unknown>) => extractKeys(item));

    const headerArray = Array.from(headers);

    // Process each item in the JSON array
    jsonData.forEach((item: string) => {
      const row: string[] = [];
      headerArray.forEach((header) => {
        const keys = header.split('.');
        let value: any = item;
        for (const key of keys) {
          value = value?.[key];
          if (value === undefined) break;
        }
        row.push(formatCsvValue(String(value), separator, forceDoubleQuotes));
      });
      rows.push(row);
    });

    // Combine headers and rows
    const csvContent = [
      headerArray
        .map((header) => formatCsvValue(header, separator, forceDoubleQuotes))
        .join(separator),
      ...rows.map((row) => row.join(separator)),
    ].join('\n');

    return csvContent;
  } catch (error) {
    console.error('Error converting JSON to CSV:', error);
    return 400;
  }
};

const formatCsvValue = (
  value: string,
  separator: string,
  forceDoubleQuotes: boolean
): string => {
  if (value === null || value === undefined) {
    return forceDoubleQuotes ? '""' : '';
  }
  if (typeof value === 'string') {
    // Escape double quotes
    const escaped = value.replace(/"/g, '""');
    if (
      forceDoubleQuotes ||
      escaped.includes(separator) ||
      escaped.includes('"') ||
      escaped.includes('\n')
    ) {
      return `"${escaped}"`;
    }
    return escaped;
  }
  if (typeof value === 'object') {
    const jsonString = JSON.stringify(value).replace(/"/g, '""');
    return forceDoubleQuotes ? `"${jsonString}"` : jsonString;
  }
  return forceDoubleQuotes ? `"${String(value)}"` : String(value);
};

export default jsonToCsv;
