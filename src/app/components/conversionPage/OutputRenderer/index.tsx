import { useConversion } from "@/app/providers/convert-from-to";
import CsvOutput from '../../Outputs/CsvOutput';
import JsonOutput from "../../Outputs/JsonOutput";

const OutputRenderer = ({
  csv,
  setCsv,
  json,
  setJson,
}: {
  csv: string;
  setCsv: (csv: string) => void;
  json: string;
  setJson: (json: string) => void;
}) => {
  const { isJsonToCsv } = useConversion();

  return (
    <>
      {isJsonToCsv ? (
        <CsvOutput csv={csv} setCsv={setCsv} />
      ) : (
        <JsonOutput json={json} setJson={setJson} />
      )}
    </>
  );
};

export default OutputRenderer;
