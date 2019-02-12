module.exports = {
  historia: function(personaje, lugar, edad){
    if(edad > 18 && edad <80) {
      return "personaje"
  } else if(edad > 80){
      return "Sabiduria"
  } else {
    "otra opcion"
    }
  }
}
