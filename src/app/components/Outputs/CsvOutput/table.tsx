import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const CSVTable = ({ csv }: { csv: string }) => {
  const getHeaders = (csv: string): string[] => {
    if (!csv) return [];

    const lines = csv.split('\n');
    if (lines.length === 0) return [];

    const headerLine = lines[0];
    return headerLine.split(',').map((header) => header.trim());
  };

  const getRows = (csv: string): string[][] => {
    if (!csv) return [];

    const lines = csv.split('\n');
    if (lines.length === 0) return [];
    const rows = lines.slice(1).map((line) => line.split(',').map((cell) => cell.trim()));
    return rows;
  };

  const headers = getHeaders(csv);
  const rows = getRows(csv);

  return (
    <TableContainer w={'100%'}>
      <Table overflowX={'auto'} variant={'striped'}>
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows?.map((row, index) => (
            <Tr key={index}>
              {row?.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CSVTable;
