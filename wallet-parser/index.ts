import bs58 from 'bs58';

// provide your wallet .json file content here , it looks like [142,222,34,42...]
const privateKeyArray: number[] = [] 

const privateKeyBuffer = Buffer.from(privateKeyArray);
const privateKeyBase58 = bs58.encode(privateKeyBuffer);

console.log("Your private key: ", privateKeyBase58);