// Basic Function 1
// #1
function a(){
    return 35;
}
console.log(a())
// OUTPUT: 35

// #2
function a(){
    return 4;
}
console.log(a()+a());
// OUTPUT: 8

// #3
function a(b){
    return b;
}
console.log(a(2)+a(4));
// OUTPUT: 6

// #4
function a(b){
        console.log(b);
        return b*3;
}
console.log(a(3));
// OUTPUT: 3,9

// #5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));     
// OUTPUT: 40

// #6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// OUTPUT: 4

// #7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// OUTPUT: 10,3,30

// #8
function a(b){
    for(i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// OUTPUT: 3,4

// #9 
function a(){
    for(i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// i: 0,2,3,5,6,8,9,11
// OUTPUT: 2,5,8,11

// #10
function a(b,c){
    for(i=b; i<c; i++) {
       console.log(i);
     }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// OUTPUT: 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0


function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// OUTPUT: N/A 


// #12 
function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
}
// OUTPUT: SYNTAX ERROR

// #13
z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);
// OUTPUT: 10

// #14
z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);
// OUTPUT: 15,15

// #15
z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// OUTPUT: 15,15
