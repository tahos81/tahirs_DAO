import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x6295446C3ffFc95C3cd169749bE57eb363161CCD");

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "TurkeyDAO's Council",
      votingTokenAddress: "0xb2191A90273398a460745E982cfcc73CE5a4f26F",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });
    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();

