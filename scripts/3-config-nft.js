import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x399a5770504062CdC1C9a5db6854aBF75DDCcf9b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Lahmacun",
        description: "This NFT will make you a TurkeyDAO citizen",
        image: readFileSync("scripts/assets/lahmacun.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create new NFT", error);
  }
})()