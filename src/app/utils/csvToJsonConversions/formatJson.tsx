const formatJsonData = (data: string, jsonSpace: number) => {
  console.log({
    data,
    jsonSpace
  })
  const jsonData = JSON.parse(data);
  return JSON.stringify(jsonData, null, jsonSpace);
};

export default formatJsonData;
