const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
    <label for="name">Name:</label><input name="name" type="text" placeholder="Enter name">
    </div><br>
    
    <div>
    <label for="email">Email:</label><input name="email" type="email">
    </div><br>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title:</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div><br>

    <div>
    <label for="content">Article content:</label>
    <input name="content" type="text" placeholder="Enter content" class="form-control">
    </div><br>
    
    <div>
    <input name="status" type="text">
    </div><br>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div><br>
  
  </form>
`);