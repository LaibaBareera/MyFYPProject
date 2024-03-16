const jwt = require('jsonwebtoken');
// const dotnev = require("dotenv").config();
var db = require('../models');
const Company = db.companysign;
const Companyoken = db.companytoken;
const CompanyAuthentication = async (req, res, next) => {
    try {
        // console.log(req.signedCookies);
        const token = await req.cookies.comptoken;
        console.log('token is :' + token);
        const veriftoken = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(veriftoken.id);
        const tk = await Companyoken.findOne({
            where: {
                company_id: veriftoken.id,
                token: token
            }
        });
        // console.log(tk);
        if (!tk) {
            res.status(200).send('no token');
        }
        const rootCompany = await Company.findOne({
            where: {
                id: tk.company_id
            }
        });
        if (!rootCompany) {
            throw new Error('Company not found');
        }
        req.companytoken = token;
        req.rootCompany = rootCompany;
        // console.log(rootCompany);
        req.rootCompanyId = rootCompany.id;
        req.rootCompanyEmail = rootCompany.email;
        req.rootCompanyName = rootCompany.name;
        // console.log(rootCompany.email);
        next();

    } catch (error) {
        res.status(401).send('unauthenticate! no token found');
        console.log(error);

    }

}
module.exports = CompanyAuthentication;