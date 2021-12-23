import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x6295446C3ffFc95C3cd169749bE57eb363161CCD");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "TurkeyDAO",
      description: "A DAO for Turkey citizens",
      image: readFileSync("scripts/assets/turkeyball.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );

    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundle drop module", error);
  }
})()