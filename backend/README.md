# Aircnc

**Backend**

O Backend do DevRadar foi desenvolvido com Node.JS e o Banco de dados MongoDB

**Métodos HTTP**

* GET - Requisitar um recurso.

* POST - Salvar um novo recurso.

* PUT - Alterar um recurso.

* DELETE - Remover um recurso.

**Tipo de parâmetros**

* Query Params `request.query()` - Usado para filtros, ordenação, paginação e etc...

* Route Params `request.params()` - Usado para identificar os recursos que serão alterados ou removidos...

* Body `request.body()` - Dados para criação ou alteração de um registro...


**Rotas**

* User
  * Index - `routes.get("/users")`
  * Show - `routes.get("/users/:id")`
  * Update - `routes.put("users")`
  * Destroy - `routes.delete("users/:id")`
