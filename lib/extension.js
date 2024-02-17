const vscode = require('vscode');
const axios = require('axios')
const _scope_ = 'balafon.';
/**
 * init balafon project
 */
function balafon_init(){ // dynamic used 
   axios.get("https://igkdev.com/balafon/get-download").then((a)=>{
      a.data
   }).catch(()=>{
    vscode.window.showErrorMessage('failed to download - BALAFON framework')
   }); 
}
 
 

const commands = [
   {name:'init', func:(args)=>{
      // initialize command
      if (!vscode.workspace.getWorkspaceFolder){ 
         return;
      }
      vscode.workspace.openTextDocument({
         language: "bview",
         content: "div > p{ - indication du jour }"
      });
   }},
   {name:'get_module', func(){

   }},
   {name:'exec_command', async func(){
      
      vscode.window.showQuickPick(['command']).then((s)=>{

      });
   }},
   {
      name:"new_bview", func(){
         vscode.workspace.openTextDocument({
            language: "bview",
            content: ["div > p{ ","- parent document ", "}"].join("\n")
         }).then((doc)=>{
            vscode.window.showTextDocument(doc); 
         });
      }
   },
   {
      name:"new_bcss", func(){
         vscode.workspace.openTextDocument({
            language: "bcss",
            content: ["@def{","}"].join("\n")
         }).then((doc)=>vscode.window.showTextDocument(doc));
      }
   }
];

/**
 * 
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
     
   commands.forEach(function(i){
      context.subscriptions.push(vscode.commands.registerCommand(_scope_+i.name, i.func)); 
   });   
}
function deactivate() {
    // deactivate extension
}

module.exports = {
    activate,
    deactivate
};