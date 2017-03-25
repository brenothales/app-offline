# API Restful Cliente Servidor
Um simples gerenciador de tarefas baseado no Google Keep, porém ele trabalha com offiline utiliznado recursos do browser localstorage.

## Front-end
- Ferramentas
  - Angularjs
  - Jquery
  - Bootstrap
  - Node
  - Gulp
  - Bower
  - Pug
  - Sass
  - JS

  ## Para rodar
    - Entrar na diretório
      - cd question02/
    - npm install 
    - bower install 
    - gulp && gulp serve  
  
# Implementações Futuras
  - Criar e melhoras mais filtros 
  - Melhorar o crud principalmente na parte de editar
  - Implantar sincronizar com banco de dados NoSQL quando tiver conexão com internet
  
## Estrutura
-assets
	- css
		- app.css
		- common.css
		- jquery-ui.css
	- js
	- directives
		- angular.editInPlace.js
		- angular.ngEnter.js
	- libs
		- angular-local-storage.min.js
		- angular.min.js
		- bootstrap.js
		- bootstrap.min.js
		- eventos.js
		- jquery-ui.min.js
		- jquery.min.js
		- jquery.ui.touch-punch.min.js
		- sortable.js
		- app.js
	- scss
		- app.scss
		- common.scss
		- jquery-ui.scss
	- views
		- partials
		- actions.pug
		- header.pug
		- nav-left.pug
		- section.pug
		- index.pug
	- partials
		- actions.html
		- body.html
		- header.html
		- list.html
		- nav-left.html
		- section.html
- .gitignore
- README.md
- app.css
- app.js
- bower.json
- gulpfile.js
- index.html
- package.json
