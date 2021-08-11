const total = db.voos.count({ $and: [
  { "empresa.nome": "PASSAREDO" },
  { natureza: "Doméstica" },
] });
db.resumoVoos.insertOne(
  { empresa: "PASSAREDO", totalVoosDomesticos: total },
);
db.resumoVoos.findOne({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });