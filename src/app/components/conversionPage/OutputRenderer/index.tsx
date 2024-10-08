import { useConversion } from '@/app/providers/convert-from-to';
import CsvOutput from '../../Outputs/CsvOutput';
import JsonOutput from '../../Outputs/JsonOutput';
import CSVTable from '../../Outputs/CsvOutput/table';

const OutputRenderer = ({
  csv,
  setCsv,
  json,
  setJson,
  showTable,
  separator,
}: {
  csv: string;
  setCsv: (csv: string) => void;
  json: string;
  setJson: (json: string) => void;
  showTable: boolean;
  separator: string;
}) => {
  const { isJsonToCsv } = useConversion();

  return (
    <>
      {isJsonToCsv ? (
        <>
          {!showTable && <CsvOutput csv={csv} setCsv={setCsv} />}{' '}
          {showTable && <CSVTable csv={csv} separator={separator} />}
        </>
      ) : (
        <JsonOutput json={json} setJson={setJson} />
      )}
    </>
  );
};

export default OutputRenderer;
