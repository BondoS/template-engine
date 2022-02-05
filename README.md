- Basic template engine with implemented with Typescript

- You need to pass a string and an object with replacements
- Example:
  `render('Hi, my name is {{name}}', { name: 'John doe' })`
  should return
  `Hi, my name is John doe`

- To run typescript file use command `npx ts-node .\index.ts`
- To run JavaScript file use command `node .\index.js` - node must be installed first -
- To use TS then compile to JS, use `npx tsc .\index.ts`
