## React Basic 1
This project is a playground for using React in two ways: 


### Via CDN 
- In src/1-basic-html, the react packages are pulled in as CDNs and then the code is run directly in the script tag 

### In tsx files
- In src/2-rollup-build, react is written using tsx and the react packages imported in the tsx files.
- These filesa are compiled via tsc to create .js files in the /build folder
- Finally, rollbar is used to bundle up the dependent packages and the .js files. The output is in ./public/bundle.js
- This is then pulled in via the script tag in the /public/index.html file 