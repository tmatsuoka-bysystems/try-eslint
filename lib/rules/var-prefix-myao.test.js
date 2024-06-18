"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const var_prefix_myao_1 = __importDefault(require("./var-prefix-myao"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 6 } });
tester.run("var-prefixy-myao", var_prefix_myao_1.default, {
    valid: [{ code: "const myaoUser = new User()" }],
    invalid: [
        {
            code: "const user = new User()",
            errors: [{ message: "変数の頭には必ずmyaoをつけてね🐈" }],
        },
    ],
});
//# sourceMappingURL=var-prefix-myao.test.js.map