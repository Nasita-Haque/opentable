'user strict';

module.exports = function(sequelize, DataTypes){
  var OpenTable = sequelize.define("OpenTable", {
    date:{
     type: DataTypes.DATEONLY,
     validate: {
      isDate:true
     }
   },
    time: DataTypes.TIME,
    availability: {type: DataTypes.BOOLEAN, defaultValue: true}
  }, {
    classMethods: {
      associate: function(models) {
        OpenTable.belongsTo(models.Restaurant)
      }
    }
  })
  return OpenTable;
}