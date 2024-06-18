import { RuleTester } from "eslint"
import varPrefixMyao from "./var-prefix-myao"

const tester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })
tester.run("var-prefixy-myao", varPrefixMyao, {
    valid: [{ code: "const myaoUser = new User()" }],
    invalid: [
        {
            code: "const user = new User()",
            errors: [{ message: "変数の頭には必ずmyaoをつけてね🐈" }],
        },
    ],
})
