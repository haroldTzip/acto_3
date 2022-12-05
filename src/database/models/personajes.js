module.exports = (sequelize, DataTypes) => {
	let alias = "personajes";
	let cols = {
		idpersonajes: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			unique: true,
		},

		nombre: {
			type: DataTypes.STRING,
			notNull: false,
		},
		imagen: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		price: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		weapon_1: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		weapon_2: {
			allowNull: false,
			type: DataTypes.STRING,
		},

		// tableName: "acto_3",
		// timestamps: false,
		// underscored: true,
	};

	const personajes = sequelize.define(alias, cols);

	return personajes;
};
