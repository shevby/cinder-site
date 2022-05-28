go build main.go
npm run dev
mv main dist/main
mkdir dist/node_modules
cp -r node_modules/react dist/node_modules/react
cp -r node_modules/react-dom dist/node_modules/react-dom
cp -r node_modules/bootstrap dist/node_modules/bootstrap
cp -r node_modules/react-bootstrap dist/node_modules/react-bootstrap