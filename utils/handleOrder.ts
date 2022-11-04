import getFileBase64 from "./getFileBase64";

const handleOrder = async () => {
  try {
    const file = await getFileBase64("hello.json");
    console.log(file);
  } catch (e) {
    console.error(e);
  }
};

export default handleOrder;
