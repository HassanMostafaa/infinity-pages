/* eslint-disable @typescript-eslint/no-unused-vars */
// best to use with --version ==>     "plop": "^2.7.4",
module.exports = function (plop) {
  plop.addHelper("upperCase", function (text) {
    return text.toUpperCase();
  });
  var pascalCase = (s) =>
    s.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1);
    });
  var files = {
    mainComponent: "plop-templates/main-component.js",
    indexFile: "plop-templates/index-file.js",
  };

  var createIndexFile = {
    type: "add",
    path: "src/components/{{kebabCase name}}/index.ts",
    templateFile: files.indexFile,
  };

  var createFunctionComponent = {
    type: "add",
    path: "src/components/{{kebabCase name}}/{{pascalCase name}}.tsx",
    templateFile: files.mainComponent,
  };

  plop.setActionType("Usage:", function (answers, config, plop) {
    const { name, suffix } = answers;
    if (name && suffix) {
      return `Usage: 
      <S${pascalCase(name)}${pascalCase(suffix)}/>
      <S${pascalCase(name)}${pascalCase(suffix)}> </S${pascalCase(
        name
      )}${pascalCase(suffix)}>
      `;
    }
    if (name) {
      return `Usage: 
      <S${pascalCase(name)}/>
      <S${pascalCase(name)}> </S${pascalCase(name)}>
      `;
    }
    return ``;
  });

  /* Input Options */
  var getComponentName = {
    type: "input",
    name: "name",
    message: "What is the component name?",
    validate: function (value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "name is required";
    },
  };
  /* Generators */
  plop.setGenerator("fc", {
    description: "Function Component",
    prompts: [getComponentName],
    actions: [
      createIndexFile,
      createFunctionComponent,
      {
        type: "Usage:",
      },
    ],
  });
};
