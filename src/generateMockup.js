const fs = require('fs')

var pageText = `
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-6" id="header">
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">`

const generateMockup = (employeeArray) => {
    employeeArray.forEach(element => {
        pageText += `<div class = "col 4">
            <div class = "card">
                <div class = "role">
                    <h2>${element.getName()}</h2>`;
                        if (element.getRole() === "Manager") {
                            pageText += `<h3><i class="fa-sharp fa-solid fa-paperclip"></i> Manager</h3>`
                        } else if (element.getRole() === "Engineer") {
                            pageText += `<h3><i class="fa-sharp fa-solid fa-wrench-simple"></i> Engineer</h3>`
                        } else if (element.getRole() === "Intern") {
                            pageText += `<h3><i class="fa-sharp fa-solid fa-graduation-cap"></i> Manager</h3>`
                        }
                pageText += `</div>
                <div>
                    <ul>
                        <li id = "id">${element.getId()}</li>
                        <li id = "email">Email: <a href = "mailto:${element.getEmail()}">${element.getEmail()}</a></li>`;
                        if (element.getRole() === "Manager") {
                            pageText += `<li id = "office">Office number:${element.getOfficeNumber()}</li>`
                        } else if (element.getRole() === "Engineer") {
                            pageText += `<li id = "github">GitHub: <a href = "https://github.com/${element.getOfficeNumber()}>${element.getGithub()}</li>`
                        } else if (element.getRole() === "Intern") {
                            pageText += `<li> School: ${element.getSchool()}</li>`
                        }
                    pageText += `</ul>
                </div>
            </div>
        </div>`      
    });
}

pageText += `</div></div></div></body></html>`;

module.exports = {
    generateMockup,
}