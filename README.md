# resgcrud
The task given.

## Installation
Clone the repo.
>git clone https://github.com/bparker-github/resgcrud.git

### API
Open the API in VSCode and install packages.
>`cd API && npm install && code .`

Run the debug using VSCode
>against `/build/index.js`

Server is running! Seed the database with init calls:
>localhost:8080/borrower/init

>localhost:8080/lan/init

### Client
Open the client in VSCode and install packages.
>`cd ../reduxclient && npm install && code .`

Start the server to build and serve using create-react-ts. It should autolaunch.
> npm start


## ToDos and Known Bugs.
1. Fully connect the insert and delete button. The API methods exist and work for it, but they're not hooked up to the components yet. Likewise, libaries like `react-bootstrap-table` make adding hooks for those easy.
2. Fully implement crost-component ui-knowledge.
    - Selecting a row on Borrower Table selects the rows in the Loans table that match borrower.
    - Selecting a row on Loans Table selects the borrower coorosponding to it.
    - Other useless/pretty things.
3. Type-casting some display rows isn't quite working right. Errors happen in an incomplete product.
4. Fix css to make it bounded better.
5. Dynamic/mobile performance needs to be looked at.
6. Develop unit tests.
7. Queries on Db in the future?