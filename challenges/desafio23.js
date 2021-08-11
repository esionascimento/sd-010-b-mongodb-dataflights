db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $exists: true } },
    ],
  }, { vooId: 1, _id: 0, litrosCombustivel: 1 },
);