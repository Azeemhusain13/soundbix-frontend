const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer: {
  //   before: (app) => {
  //     app.use((req, res, next) => {
  //       res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Replace with your frontend URL
  //       res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //       next();
  //     });
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8081', // Your backend API server
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
})
// server: {
//   proxy: {
  
//     // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
//     '/api': {
//       target: 'http://jsonplaceholder.typicode.com',
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, ''),
//     },
//   }
// }