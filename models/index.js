const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING, allowNull: false, defaultValue: 'An interesting article'
  },
  slug: {
    type: Sequelize.STRING, allowNull: false
  },
  content: {
    type: Sequelize.TEXT, allowNull: false, defaultValue: 'Some text'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING, allowNull: false, defaultValue: 'user'
  },
  email: {
    type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}
  }
});

module.exports = {
  Page,
  User,
  db
};
