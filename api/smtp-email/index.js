module.exports = async function (context, req) {
    const user = process.env.SMTP_USERNAME;
    const pass = process.env.SMTP_PASSWORD;

    context.res.json({
        username: user,
        password: pass
    });
}