interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    arma?:string;  
  }


  const personaje: Personaje = { 
    nombre: 'hernest',
    hp: 100,
    habilidades:['adsfads','asdf']
  }
  console.log(personaje);