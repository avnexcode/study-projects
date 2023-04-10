interface Human {
  username: string;
  age: number;
  isDead?: boolean;
}

type MainWeapon = "AK-47" | "AUG" | "Famas" | "M4";
type SecondaryWeapon = "Knife" | "Knucle" | "DoubleStick";
// ? - union type
type Weapon = MainWeapon | SecondaryWeapon;
// ? - intersection type
// type Weapon = MainWeapon & SecondaryWeapon; // have to include contain from main weapon and secondary weapon
interface Human {
  gf?: 1 | 2 | 3;
  isLife: boolean;
  weapon?: Weapon;
}

interface HumanNoid extends Human {
  ability: string;
}

interface HumanLoid extends Human {
  agility: string;
}

interface Werewolf extends HumanNoid {}

const AzizCreate: HumanNoid = {
  username: "Muhammad Fauzi Nur Aziz",
  age: 19,
  isLife: true,
  ability: "Kill Machine",
  weapon: "AK-47",
};

const RenoCreate: HumanLoid = {
  username: "Reno Nuru Sofa",
  age: 20,
  isLife: true,
  isDead: false,
  agility: "Cock the dick",
  gf: 1,
  weapon: "AUG",
};

const AnfasaCreate = {
  username: "Muhammad Anfasa Farohfi",
  age: 20,
  isDead: false,
  isLife: true,
  agility: "Spong Your Dick",
};

const WisnuCreate = {
  username: "Wisnu Fataazdzaki",
  age: 30,
  isLife: true,
  ability: "Clap Your Breast",
};

const humanCreated = (human: Human): void => {
  console.log(human);
};

const humanNoidCreate = (humannoid: HumanNoid): void => {
  console.log(humannoid);
};

const humanLoidCreate = (humanloid: HumanLoid): void => {
  console.log(humanloid);
};

humanCreated(AzizCreate);
humanCreated(RenoCreate);
humanLoidCreate(AnfasaCreate);
humanNoidCreate(WisnuCreate);
