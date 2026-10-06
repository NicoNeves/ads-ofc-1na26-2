module.exports = [
    {
        file: ["src/**/*.js"],
        languageOptions: {
            acmaVersion: "latest",
            sourceType: "module"     
        },
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": "error"
        }
    }
];