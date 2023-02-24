namespace BigIntType {

  // BigInt - must use es2020 or later. number supports values up to 2^53 (9007199254740991)
  let biValue1: bigint = BigInt(6758498675);
  let biValue2: bigint = 6758436583893n;
  let safeNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991
  console.log(safeNumber);

  // wont work:
  // let nope: bigint = 2235345334565.434;
}