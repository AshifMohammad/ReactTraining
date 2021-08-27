import React from 'react'


export default function TemplateString(){

const name = "John";
const sirname = "Doe"
const fullName = "MR" +" "+name+" "+sirname

const templatedFullName = `Mr ${name} ${sirname}`


    return <div><h1>Old String concatinating: {fullName}</h1><h1>New Template concatinating: {templatedFullName}</h1></div>
}