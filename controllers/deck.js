const exp = require("constants")
const Carta = require("../models/deck")

valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "Q", "J", "K"]
palos = ["Corazon", "Diamante", "Trebol", "Pica"]
colores = ["Negro", "Rojo"]

function checkIfRepeated(p1, p2, p3){

    let flag = 0

    Carta.find({valor:String(p1), color:String(p2), palo:String(p3)})
        .then(cartas=>{
            console.log(cartas)
        }, flag = 1)
        .catch((err)=>{
            console.log(err)
        })

    return flag
}


exports.postAgregarCarta = async (req, res)=>{
    const carta = new Carta(req.body);

    console.log(palos.includes(carta.palo))
    console.log(valores.includes(carta.valor))
    console.log(colores.includes(carta.color))
    console.log(checkIfRepeated(req.body))
    if (valores.includes(carta.valor) && palos.includes(carta.palo)
    && colores.includes(carta.color) /*&& checkIfRepeated(carta.valor, carta.color, carta.palo) == 0*/){
        try{
            await carta.save()
            console.log(carta)
            console.log("Carta Registrada")
            res.json({estado:"Aceptado"})
        }catch(err){
            console.log(err)
            res.json({estado:"error"})
        }
    }else{
        console.log("Carta no valida")
        res.json({estado:"Carta no valida"})
    }
}


exports.getObtenerCarta = async (req, res)=>{
    Carta.find()
        .then(cartas=>{
            console.log(cartas)
            res.json(cartas)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"ERROR"})
        })
}

