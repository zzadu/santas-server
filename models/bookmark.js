const Mountain = require("./mountain");
const User = require("./user");

module.exports = (sequelize, Sequelize) => {
    const bookmark = sequelize.define('bookmark', {
      id: {
        type: Sequelize.STRING,
        references: {
            model: User,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      },
      mountainNum: {
          type: Sequelize.INTEGER,
          references: {
              model: Mountain,
              key: 'number',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
          }
      }
    });
    return bookmark;
  }
