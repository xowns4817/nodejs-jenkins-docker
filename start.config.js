module.exports = {
 apps: [
  {
    name: "pm2Server",
    script: "./app.js",
    env: {
	"PORT": 3000,
	"NODE_ENV": "development"
   } 
}
 ]
}

