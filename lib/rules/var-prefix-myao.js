"use strict";
const rule = {
    create: (context) => {
        return {
            "VariableDeclaration > VariableDeclarator > Identifier[name=/^(?!myao).*$/]": (node) => {
                // output error
                context.report({
                    message: "変数の頭には必ずmyaoをつけてね🐈",
                    node,
                });
            }
        };
    },
};
module.exports = rule;
//# sourceMappingURL=var-prefix-myao.js.map