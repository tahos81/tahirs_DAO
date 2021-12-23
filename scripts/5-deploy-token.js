import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x6295446C3ffFc95C3cd169749bE57eb363161CCD");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "cacik",
      symbol: "CACIK",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();