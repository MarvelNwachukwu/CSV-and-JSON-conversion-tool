import { Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";

const CSVTable = ({csv}: {csv: string}) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text>{csv}</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
};

export default CSVTable;
