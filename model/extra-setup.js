const { sequelize } = require("./sequelize");
class Connections {
    applyExtraSetup = () => {
        console.log(sequelize);
        const { city, field, user, job, employer, subject, userjobs, logIn } = sequelize.models;
        job.belongsTo(employer, { foreignKey: "employerId", as: "employer" });
        employer.hasMany(job, { foreignKey: "employerId", as: "job" });
        user.belongsTo(logIn, { foreignKey: "email", as: "login" });
        logIn.hasOne(user, { foreignKey: "email", as: "user" });
        city.hasMany(job, { foreignKey: "idCity", as: "job" });
        job.belongsTo(city, { foreignKey: "idCity", as: "city" });
        field.hasMany(job, { foreignKey: "idField", as: "job" });
        job.belongsTo(field, { foreignKey: "idField", as: "field" });
        subject.hasMany(job, { foreignKey: "idSubject", as: "job" });
        job.belongsTo(subject, { foreignKey: "idSubject", as: "subject" });
    }
}
const connections = new Connections;
module.exports = connections;