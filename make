#!/usr/bin/ruby
minified = `java -jar ~/dev/lib/closure-compiler/compiler.jar --js src/gcipher.js`
minified.gsub!(/\n$/,"")
File.open("src/index.yml", 'w') {|f|
  f.write("---\ngcipher_code: 'javascript:#{minified}'\n---")
}
`cat src/index.yml | mustache - src/index.mustache > web/index.html`
`rm -rf src/index.yml`
puts "Built successfully"