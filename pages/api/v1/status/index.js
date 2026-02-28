function status(request, response) {
  response.status(200).json({ chave: "Hey, pedro! funfou" });
}

export default status;
