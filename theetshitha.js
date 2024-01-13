"use strict"

// Javascript assessment set A

// set a problem-1------------------------------------------------

// let arr=[347,7,2,1,7,9,10,13,12,20];

// let large=arr[0];

// for(let i=0;i<arr.length;i++){

//     if(arr[i]%2==0 && arr[i]>large)
//         {
//             large=arr[i]

//         }

//     else{
//              large=-1;
//         }

// }

// console.log(large)

// set a problem-2--------------------------------------------

// let str="welcome to DCKAP";

// let str_arr=str.split("");

// for(let i=0;i<str_arr.length;i++){

//     if(str_arr[i].charCodeAt()%2==0)
//         {
//             str_arr[i]=str_arr[i].toUpperCase();

//         }

//     else{
        
//         str_arr[i]=str_arr[i].toLowerCase();
            
//         }
// }

// let str1=str_arr.join("");
// console.log(str1)



// set a problem-3--------------------------------------------

// let n=Number(prompt("Enter a number"));
// let count=0;
// for(let i=1;i<=n;i++){
//     let c=i*i;
//     if(c<=n){
//         count++;
       
//     }
// }
// console.log(count);



// set a problem-4--------------------------------------------

// let arr=[1,3,5,2,2];
// let len=arr.length/2;
// let len1=Math.ceil(len);

// let value1=0;
// let value2=0;

// for(let i=0;i<len1-1;i++){
//     value1+=arr[i];    
// }

// for(let j=len1;j<arr.length;j++){
//     value2+=arr[j];
// }

// if(value1==value2){
//     console.log("Index =",len1-1);
// }
// else{
//     console.log("Index =",-1);

// }



// ----------------------------------------------------------------------------


// Javascript assessment set B


// set-b problem-1 -------------------------------------------

// var arr1= [ 2, 7, 4, 54, 9, 6, 1, 6, 3 , 32];

// var s_count=0;
// var n_count=0;

//     for(var i=0;i<arr1.length;i++){

//         var a=i%2==0;
//         var b=arr1[i]%2==0;
    
//         var c=i%2!==0;
//         var d=arr1[i]%2!==0; 
        
//         if (!(a==d || c==b)&&(a==b && c==d))
//          {
//             s_count++;
    
//           }
//         else{
//             n_count++;
//          }

//     }

//     if(n_count>0){
//         console.log("Not a special array");
//     }
//     else{
//         console.log( "It is a special array")

//     }



// set-b problem-2 -------------------------------------------


// let n=prompt("enter a number");
// var i=2;
// function prime(n){

//     if(n==0||n==1){
//         return false;
//     }
//     if(n==i){
//         return true;

//     }


// if(n%i==0){
//     return false;
// }
// i++;
// return prime(n);
// }
// prime(n) ? console.log("it is a prime no"):console.log("Not a prime no");


// set-b problem 4 -------------------------------------------

// let a=[5,8,1,4,2,9,3,7,6];
// let b=asen();

// function asen(){
//         for( let i=1;i<a.length;i++)
//         {
//             for( let j=0;j<i;j++)
//             {
//                 if(a[i]<a[j])
//                 {
//                     let temp=a[i];
//                     a[i]=a[j];
//                     a[j]=temp;
//                 }
//             }
//         }
    
//     }
// let s=a.length
// let s1=a.length-1
// let s2=a.length-2
// let s3=a.length-3


//     a=[a[0],s,a[1],s1,a[2],s2,a[3],s3,a[4]];
    
//     console.log(a);

