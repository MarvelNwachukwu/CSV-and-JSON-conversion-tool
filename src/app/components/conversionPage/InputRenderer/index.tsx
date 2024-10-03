import { useConversion } from '@/app/providers/convert-from-to';
import CsvInput from '../../Inputs/CsvInput';
import JsonInput from '../../Inputs/JsonInput';

const InputRenderer = ({
  json,
  setJson,
  csv,
  setCsv,
}: {
  json: string;
  setJson: (json: string) => void;
  csv: string;
  setCsv: (csv: string) => void;
}) => {
  const { isJsonToCsv } = useConversion();
  return (
    <>
      {isJsonToCsv ? (
        <JsonInput json={json} setJson={setJson} />
      ) : (
        <CsvInput csv={csv} setCsv={setCsv} />
      )}
    </>
  );
};

export default InputRenderer;
