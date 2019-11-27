export class Item {
  
}


export class Person extends Item {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export class Ship extends Item {
  name: string;
  model: string;
}

export class Film extends Item {
  title: string;
  episode_id: string;
  director: string;
  release_date: string;
}