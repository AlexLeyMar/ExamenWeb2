const Carta = require("../models/deck")

valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "Q", "J", "K"]
palos = ["Corazon", "Diamante", "Trebol", "Pica"]
colores = ["Negro", "Rojo"]

exports.postAgregarCarta = async (req, res)=>{
    const carta = new Carta(req.body);
    if (valores.includes(carta.numero) == true && palos.includes(carta.palo) == true 
    && colores.includes(carta.color) == true){
        try{
            await carta.save()
            console.log(carta)
            console.log("Carta Registrada")
        }catch(err){
            console.log(err)
        }
    }else{
        console.log("Carta no valida")
    }
}

/*
exports.getObtenerCarta = (req, res)=>{
    Carta.findAll()
        .then(cartas=>{
            console.log(cartas)
            res.json(cartas)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"ERROR"})
        })
}*/

exports.getObtenerCarta = async (req, res)=>{
    try{
        console.log(Carta.find())
        res.json(Carta.find())
    }catch(err){
        console.log(err)
    }
}