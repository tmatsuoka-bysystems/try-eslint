import { Rule } from "eslint"
import { Node } from "estree"

const rule: Rule.RuleModule = {
    create: (context) => {
        return {
            "VariableDeclaration > VariableDeclarator > Identifier[name=/^(?!myao).*$/]":
                (node: Node) => {
                    // output error
                    context.report({
                        message: "変数の頭には必ずmyaoをつけてね🐈",
                        node,
                    })
                }
        }
    },
}

export = rule
