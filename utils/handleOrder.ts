import getFileBase64 from "./getFileBase64";

const handleOrder = async () => {
  try {
    const zipFile = await getFileBase64("hello.zip");
    console.log(zipFile);
    const jsonFile = await getFileBase64("hello.json");
    console.log(jsonFile);
  } catch (e) {
    console.error(e);
  }
};

export default handleOrder;
