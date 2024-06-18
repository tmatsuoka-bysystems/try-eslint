"use strict";
const rule = {
    create: (context) => {
        return {
            "VariableDeclaration > VariableDeclarator > Identifier[name=/^(?!myao).*$/]": (node) => {
                // output error
                context.report({
                    message: "変数の頭には必ずmyaoをつけてね🐈",
                    node,
                    fix: function (fixer) {
                        const { name } = node;
                        // 変数名をキャメルケースに変換
                        // user ⇒ User
                        const camelCase = `${name[0].toUpperCase()}${name.slice(1)}`;
                        // 接頭辞としてmyaoを付与
                        // User ⇒ myaoUser
                        return fixer.replaceText(node, `myao${camelCase}`);
                    }
                });
            }
        };
    },
    meta: {
        fixable: "code",
    }
};
module.exports = rule;
//# sourceMappingURL=var-prefix-myao.js.map