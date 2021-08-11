db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
    { litrosCombustivel: { $exists: true } },
  ] }, {
    vooId: 1, _id: 0, "empresa.nome": 1, litrosCombustivel: 1,
  },
);
