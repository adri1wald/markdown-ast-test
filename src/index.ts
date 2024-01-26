import markdown from '@textlint/markdown-to-ast'

function main() {
  const ast = markdown.parse('Hi my name is *Adrien. Welcome* to my crib!')
  console.log(JSON.stringify(ast, null, 2))
}

void main()
