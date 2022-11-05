# __e-commerce-database__

## Link to video

[Click Here!](https://drive.google.com/file/d/1j0ZkmlX3HeURuBXR1YpcFJCDX-yVGbgR/view)

## Technology

- JavaScript: Programming Language used
- Node.js: To run JavaScript without the browser
- npm: To install necessary modules and packages for this project
- mySql: for the backend, used to create, read and update database
- Express: to create(post), read(get), update(put) and delete(delete) the database
- Sequelize: ORM, for storing data with mysql. Used to model our tables
- Git: For version control to track changes to source code
- GitHub: To host the repository
- Insomnia: To keep track of post, get, put, and delete url for our live server

## Description

The Ecommerce Database is the backend for a potential ecommerce site. We used Sequelized to model our tables and express to interact with mysql to post, get, put, and delete items within the database.
<hr>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Code Snippets](#code-snippets)
- [Author](#author-links)

<hr>


## Installation

  Dependencies needed: npm, inquirer, mysql2, node.js<br>
  Installation : (only follow this installation if this application was downloaded from GitHub)
   - install node.js via (https://nodejs.org/en/download/)
   - In the terminal, do 'npm install' package.json file. Make sure to do this within the directory with index.js.
   - Lastly install inquirer and mysql by 'npm i express' and 'npm i mysql2'. Again, do this within the directory with index.js (Alternatively, you can just run 'npm i' to install all dependencies within the package.json file)

<hr>

## Usage

Instuctions <br>

Getting Started:
1) Go into the '.env' and file out the fields that specify to you mysql username and password
2) Type into the terminal your mysql creditials by "mysql -u root -p"
3) Enter your password
4) Type "source ./db/schema.sql;" to build the database
5) Type "npm run seed" to fill in the tables
<br>

Starting the Program:
1) Remember to install all dependencies from the installation section
2) Type "npm start" to start the program
3) Open up Insomina
<br>

Accessing/updating/deleting 'Category'<br>
1) GET: http://localhost:3001/api/categories/    --- to view all categories
2) GET: http://localhost:3001/api/categories/:id --- to view specific category (change :id to a number)
3) POST http://localhost:3001/api/categories/    --- add a new category, (need to give a object of category)
4) PUT: http://localhost:3001/api/categories/:id --- update fields in category (json required)
5) DEL: http://localhost:3001/api/categories/:id --- delete category with given id 
<br>

Accessing/updating/deleting 'Product'<br>
1) GET: http://localhost:3001/api/products/    --- to view all products
2) GET: http://localhost:3001/api/products/:id --- to view specific product (change :id to a number)
3) POST http://localhost:3001/api/products/    --- add a new product, (need to give a object of product)
4) PUT: http://localhost:3001/api/products/:id --- update fields in product (json required)
5) DEL: http://localhost:3001/api/products/:id --- delete product with given id
<br>

Accessing/updating/deleting 'Tag'<br>
1) GET: http://localhost:3001/api/tags/    --- to view all tags
2) GET: http://localhost:3001/api/tags/:id --- to view specific tag (change :id to a number)
3) POST http://localhost:3001/api/tags/    --- add a new tag, (need to give a object of tags)
4) PUT: http://localhost:3001/api/tags/:id --- update fields in tag (json required)
5) DEL: http://localhost:3001/api/tags/:id --- delete tags with given id
<br>
<hr>


## Credits

The source code was from UC Berkeley Extension.
<hr>

## License

N/A
<hr>

## Code Snippets

```js
// used as a reference table between our product and tag with many-to-many relationship
ProductTag.init(
  {
    //id of the Product Tag
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //id of the product
    product_id: {
      type: DataTypes.INTEGER,
      refreences: {
        model: 'product',
        key: 'id',
      }
    },
    //id of the tag
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

```

The code above is a data table to reference many-to-many relation between our Products and our Tags.
<hr>

```js
  // find all categories
router.get('/', async (req, res) => {
  try{
    //find all the associated for category 
    const categoryData = await Category.findAll({
      include: Product
    });
    //returns an json object if everything is okay
    res.status(200).json(categoryData);
  }
  //Only server error can happen within this get statment
  catch (err){
    res.status(500).json(err);
  }
});

```

This statment sends a json object of all category to the webpage that is requesting the data.
<hr>

## Author Links

  You can reach me on
  GitHub: [__chanjeff520__](https://github.com/chanjeff520) <br>
  LinkedIn: [__Jeff chan__](https://www.linkedin.com/in/jefflchan/),<br>
  Email:  __chanjeff520@gmail.com__