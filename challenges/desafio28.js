const Empresa = "LATAM AIRLINES BRASIL";

const total = db.voos.count({ $and: [
  { "empresa.nome": Empresa },
  { natureza: "Doméstica" },
] });
db.resumoVoos.insertOne(
  { empresa: Empresa, totalVoosDomesticos: total },
);
db.resumoVoos.findOne({ empresa: Empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });