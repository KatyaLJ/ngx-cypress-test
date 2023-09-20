/// <reference types="cypress"/>

import { log } from "console"

describe('JSON Objects', ()=>{

    it('JSON Objects', ()=>{
        cy.openHomePage()

        const simpleObject = { "key":"value", "key2":"value2" }
        
        const simpleArrayOfValues= ["one", "two", "three"]

        const arrayOfObjects = [{"key":"value"}, {"key2":"value2"}, {"key3":"value3"}]

        const typesOfData = { "string": "this is a string", "number": 10}

        const mix = {
            "FirstName": "Katya",
            "LastName": "Laso",
            "Age":38,
            "Students":[
                {
                    "firstName":"Sara",
                    "lastName": "Connor"
                },
                {
                    "firstName":"Bruce",
                    "lastName": "Willis" 
                }
            ]

        }

        console.log(simpleObject.key2);
        console.log(simpleObject["key2"]);
        console.log(simpleArrayOfValues[1]);
        console.log(arrayOfObjects[2].key3);
        console.log(mix.Students[0].firstName);

        const lastNameOfSecondStudent = mix.Students[1].lastName
        console.log(lastNameOfSecondStudent);
        console.log(typesOfData.number);

    })

})