let mArray = [];
let saboresHelado = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
saboresHelado[2]; //"Vanilla"
saboresHelado[4] = "Butter Pecan"; //Se cambió "Rocky Road" a "Butter Pecan"
saboresHelado[5] = "Cookie Dough"; //Añadida "Cookie Dough"
saboresHelado.length; //5
for (let i = 0; i < saboresHelado.length; i++) {
  console.log(saboresHelado[i]);
} //Termina cuando se imprimen todos los sabores