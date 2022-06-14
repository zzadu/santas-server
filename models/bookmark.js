

module.exports = (sequelize, Sequelize) => {
    const bookmark = sequelize.define('bookmark', {
      bmNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }, 
      mountainNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'mountains',
            key: 'number',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    });

    bookmark.associate = function(models){
      bookmark.belongsTo(models.Mountain, {
        foreignKey: "mountainNum",
        sourceKey: "number"
      });
      bookmark.belongsTo(models.User, {
        foreignKey: "id",
        onDelete: "cascade",
        sourceKey: "id"
      })
    };
    return bookmark;
  }
