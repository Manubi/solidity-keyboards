import { ethers } from "ethers";
import abi from "../utils/Keyboards.json";

const contractAddress = "0xC86144bbF2EFEcB82D459E9E73c9bF1567b5DB64";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
