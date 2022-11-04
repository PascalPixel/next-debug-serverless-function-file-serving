import { promises as fs } from "fs";
import path from "path";

async function getFileBase64(fileName: string): Promise<string> {
  try {
    // Get the file
    const filePath = `./private/${fileName}`;
    const fileResolvedPath = path.join(process.cwd(), filePath);
    const file = await fs.readFile(fileResolvedPath);

    // Encode for Postmark
    const fileEncoded = file.toString("base64");

    // Done
    console.debug("✅ File Success:", fileResolvedPath);

    // Return the encoded file
    return fileEncoded;
  } catch (err) {
    // Error
    console.debug("❌ File Error:", err);

    // Return empty string
    return "";
  }
}

export default getFileBase64;
