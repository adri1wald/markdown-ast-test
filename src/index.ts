import markdown from '@textlint/markdown-to-ast'

function main() {
  const ast = markdown.parse('Hello World!')
  console.log(JSON.stringify(ast, null, 2))
}

void main()
