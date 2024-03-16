const CompanyTokens = (sequelize, DataTypes) => {
    const CompanyToken = sequelize.define("companyToken", {
        token: {
            type: DataTypes.STRING,
            required: true
        }
    });
    // CompanyToken.prototype.generateAuthToken = async function (user) {
    //     try {
    //         // console.log("hi its me");
    //         let tokens = jwt.sign({ user_Id: user.id }, process.env.SECRET_KEY);
    //         console.log(tokens);
    //         // const user_token = new CompanyToken({ user_Id: user.user_id, token: tokens });
    //         // await user_token.save();
    //         return tokens;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return CompanyToken;
};
module.exports = CompanyTokens;