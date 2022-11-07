import getFileBase64 from "./getFileBase64";

const handleOrder = async (fileType: string) => {
  try {
    await getFileBase64(`hello.${fileType}`);
    console.log("done");
  } catch (e) {
    console.error(e);
  }
};

export default handleOrder;
