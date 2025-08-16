import { Sequelize, DataTypes } from 'sequelize';



const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Profile = sequelize.define('Profile', {
  name: DataTypes.STRING,
  url: DataTypes.STRING,
  about: DataTypes.TEXT,
  bio: DataTypes.TEXT,
  location: DataTypes.STRING,
  followerCount: DataTypes.INTEGER,
  connectionCount: DataTypes.INTEGER,
  bioLine: DataTypes.STRING
});

sequelize.sync();

export { sequelize, Profile };
