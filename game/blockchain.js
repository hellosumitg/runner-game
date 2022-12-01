let provider = new ethers.providers.Web3Provider(window.ethereum); // using `window.ethereum` object that gets injected into our browser from metamask
let signer;

async function connectMetamask() {
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  console.log("Account address:", await signer.getAddress());

  const balance = await signer.getBalance();
  const convertToEth = 1e18;
  console.log("account's balance in ether:", balance.toString() / convertToEth); // as balance is represented in `wei` that's why converting it into `ether` by dividing
}

async function claimTokens() {
  const runTokenContractAddress = "0xEeDf0d12BC13a59d7fb5f9A41Be74F1Fb0CfAB5A";
  const runTokenContractAbi = [
    "function mintTokens(address account, uint256 amount) public",
  ]; // just using the `mintTokens()` from the whole `ABI`
  // below we are creating a contract instance
  const runTokenContract = new ethers.Contract(
    runTokenContractAddress,
    runTokenContractAbi,
    provider
  );
  let convertToWei = 1000000000;
  let amountToClaim = window.totalGweiScore * convertToWei;
  await runTokenContract
    .connect(signer)
    .mintTokens(signer.getAddress(), amountToClaim.toString()); // connecting the `signer` and the `signer` calls the `mintTokens()`
}

async function claimNft() {
  const nftContractAddress = "0x602c9E7008D85Ca74885dA1763B424B0bD07DadF";
  const mintContractAbi = ["function mint(uint256 amount) public"]; // just using the `mint()` from the whole `ABI`
  // below we are creating a contract instance
  const nftContract = new ethers.Contract(
    nftContractAddress,
    mintContractAbi,
    provider
  );
  await nftContract.connect(signer).mint(window.totalNFTScore.toString()); // connecting the `signer` and the `signer` calls the `mint()`
}
