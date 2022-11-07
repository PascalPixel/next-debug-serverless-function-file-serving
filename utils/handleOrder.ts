import getFileBase64 from "./getFileBase64";

const handleOrder = async () => {
  try {
    await getFileBase64("hello.zip");
    await getFileBase64("hello.json");
    console.log("done");
  } catch (e) {
    console.error(e);
  }
};

export default handleOrder;
