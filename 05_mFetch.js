let user = {
    name: "Maxim"
};
  
 async function mFetch (){
    let json = JSON.stringify(user);
    setTimeout(function(obj) {
        return function() {
          console.log(obj) ;
        }
      }(json), 5000);
}
await mFetch();
