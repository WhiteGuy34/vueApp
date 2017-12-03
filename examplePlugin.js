class ExamplePlugin{
    apply(compiler){
        compiler.plugin("run", (compiler, callback) =>{
            console.log("Plugin pluged in")
            callback();
        });
    }
}

module.exports = ExamplePlugin;