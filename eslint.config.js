module.exports = [
    {
        file: ["src/**/*.js"],
        languageOptions: {
            acmaVersion: "latest",
            sourceType: "module"     
        },
        rules: {
            semi: ["error"],
            "no-unused-vars": "error"
        }
    }
];