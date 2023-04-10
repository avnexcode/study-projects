const sayHello = (): string => {
  return "Hello World";
};

const sum = (): number => {
  return 10 + 10;
};

const condition = (): boolean => {
  return true;
};

const sayName = (): void => {
  console.log("Muhammad Fauzi Nur Aziz");
};

const penjumlahan = (x: number, y: number): number => {
  const z: number = x + y;
  return z;
};
let resultPlus = penjumlahan(10, 23);

const pengurangan = (x: number, y: number): string => {
  const z: number = x - y;
  return `hasil dari ${x} - ${y} adalah ${z}`;
};
let resultMin = pengurangan(40, 22);
