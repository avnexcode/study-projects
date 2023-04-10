type User = {
  fullName: string;
  age: number;
  isDead?: boolean;
};

const Aziz: User = {
  fullName: "Muhammad Fauzi Nur Aziz",
  age: 19,
  isDead: false,
};

const Reno: User = {
  fullName: "Reno Nuru Sofa",
  age: 20,
};

console.log(Aziz, Reno);
