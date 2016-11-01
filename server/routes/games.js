var
  express = require('express'),
  gamesRouter = express.Router(),
  gamesCtrl = require('../controllers/games.js')

gamesRouter.route('/games')
  .get(gamesCtrl.index)
  .post(gamesCtrl.create)

gamesRouter.route('/games/:id')
  .get(gamesCtrl.show)
  .patch(gamesCtrl.update)
  .delete(gamesCtrl.destroy)


gamesRouter.get('/seed', gamesCtrl.seed)



module.exports = gamesRouter
