// 1. What's the type of error in the given code below. Explain what can fix the issue and fix it


    // (1)   "use strict"
    //       function sayHello(){
    //       console.log(`Hello ${username}`);
    //       }
    //       sayHello();
    //    -- Reference Error
    //    -- username not defined

    //       "use strict"
    //       let username = "oggy"
    //        function sayHello(){
    //       console.log(`Hello ${username}`);
    //       }
    //       sayHello();

    // (2)    let getUsername = "John";
    //        function sayHello(){
    //        getUsername();
    //        }  
    //        sayHello();
    //     -- Type Error
    //     -- getUsername() not a function

    //        let getUsername = "John"
    //        function sayHello () {
    //        console.log(getUsername)
    //        }
    //        sayHello()

    // (3)    let username = if(true){}
    //        -- Syntax errror   

    //        let username =(true)

    // (4)    let userInfo = {name: "John", age: 23};
    //        console.log(userInfo.getName());
    //        --  Type error

    //        let userInfo = { name: "John " , age : 23};
    //         console.log(userInfo.name)

    // (5)    let userInfo = [1, 2, 3, 4, 5];
    //        userInfo.length = 67 ** 56;
    //        -- Range error 

    //        let userInfo = [1, 2, 3, 4, 5];
    //        userInfo.length = 6 ** 1;

    // (6)    lett userInfo = "John";
    //        console.log(userInfo);
    //        --Syntax error 

    //        let userInfo = "Oggy"
    //        console.log(userInfo)


    // (8)    let isAdult = true;
    //        console.log(isAdult.slice(1));
    //        -- Type Error

    //        let isAdult = true;
    //        console.log(isAdult)
    