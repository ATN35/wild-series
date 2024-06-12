// Declare the action

const sayWelcome = (req, res) => {
  res.send("Welcome toWild Series !");
}

// Export it to import it somewhere else

module.exports = { sayWelcome };
