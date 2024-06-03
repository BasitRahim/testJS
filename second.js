

let array = [100,200,300,400,500,2 , -100,230];
let currentLargest = array[0];
for (let i=0;i<array.length;i++)
    { 

        if (currentLargest < array[i])
        {
            currentLargest=array[i];
        }

    }
    console.log("Maximium:",currentLargest)

// Element: 100
// Element: 200
// Element: 300
// Element: 400
// Element: 500

// var = 100+200+300+400+500
//var = 0
//var = var + 100 => 100
//var = var + 200 =>300

let sum = 0
for (let i =0;i<array.length;i++)
    {
        //array[i] get element of array

        sum = sum + array[i];
    }
console.log("Sum:",sum)


// Print all the even numbers till 100
//0,2,4,6,8,10,12,14 ... 98

// If reminder is 0 then the number is completly divisble 

for (let i=0;i<10;i++)
    {
        if ( i%2 == 0 )
            {
                console.log("Even: ",i)
            }
        if ( i%2 != 0 )
                {
                    console.log("Odd:",i)
                }
    }





//    a e i o u
// You are given a sentence count number of vowels in the sentence

let sentence =  "hello how are you simri";

let count = 0;
for (let i=0;i<sentence.length ; i++)
    {
        if (sentence[i]==' ') //
            {
                count = count + 1;
            }
            
    }
console.log("Count of space in a sentence:",count)

count = 0
for (let i=0;i<sentence.length;i++)
    {
        if(sentence[i]=='a' || sentence[i]=='e' || sentence[i]=='i' ||sentence[i]=='o' ||sentence[i]=='u')
            {
                count = count + 1
            }

    }
    console.log("Count of space in a sentence:",count)

// Given a sentence find count of different charectors,


// count number of spaces



// Given an array of numbers find the position of 10 in the array

let array2 = [1,2,3,-2,10,2,0,1]; // THe position of 10 is 4th index

for (let i=0;i<array2.length;i++)
    {
        if(array2[i]==10)
            {
                console.log("Postion of 10",i)
            }
    }


// Every function has purpose

// Write a funtion that add two numbers

// Take two numbers a,b then return their sum
// Remember order matters

function addTwoNumbers(a,b)
{
    let sum = a + b
    return sum
}
let result = addTwoNumbers(100,250);
console.log("Sum of 100,250:",result)
// Write a funtion to find product of two numbers
function productOfTwoNumbers(a,b)
{
    let product = a * b;
    return product;
}

let product = productOfTwoNumbers(2,3);
console.log("Product of 2 and 3: ",product)

// Find the difference
function difference(first,second)
{
    let diff  = first - second;
    return diff;
}
let diff = difference(10,5)
console.log("Difference of 10 and 5: ",diff)

//write a program to sort an array
