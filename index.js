var x = 1;
a();

function a(){
    var x = 2;
    console.log(this.x);
}