const db = require('../db')

class userControler {

  async createUser(req, res) {
    const {login, email, password} = req.body
    const newUser = await db.query('INSERT INTO users (login, email, password) values ($1, $2, $3) RETURNING *', [login, email, password])
    res.json({
      message: 'ok',
      user: newUser.rows[0]
    });
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM users')
    res.json(users.rows)
  }

  async getOneUser(req, res) {
    const id = req.params.id
    const findUser = await db.query('SELECT * FROM users where id = $1', [id])
    res.json(findUser.rows[0])
  }

  async updatePassword(req, res) {
    const {id, login, password} = req.body
    const updatedUser = await db.query('UPDATE users SET password = $1 WHERE id = $2 AND login = $3 RETURNING *', [password, id, login])
    res.json(updatedUser.rows[0])
  }

  async deleteUser(req, res) {
    const id = req.params.id
    const deleteUser = await db.query('DELETE FROM users where id = $1 RETURNING *', [id])
    res.json('Deleted!')
  }
  
}

module.exports = new userControler()