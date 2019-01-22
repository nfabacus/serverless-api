# Serverless API

1. Create your project folder.
2. Inside the folder, ```sls create -t aws-nodejs```
3. Create features folder.
4. Inside the features folder, create the following 4 files.
    - create.js
    - read.js
    - update.js
    - delete.js
5. read.js
    - copy the content of handler.js to read.js
    - delete handler.js
    - adjust read.js

6. Change service name to your project's name in serverless.yml
    - set up the project name, region,etc.
    - set up the first route
    ```
    functions:
      read:
        handler: features/read.firstGet
        events:
          - http:
              path: first_path
              method: get
    ```

7. install serverless-offline for local development
    1) ```npm init```
    2) ```npm install serverless-offline --save-dev``'
    3) add the plugin to serverless.yml
    ```
    plugins:
         - serverless-offline
    ```

8. ```serverless offline start```
