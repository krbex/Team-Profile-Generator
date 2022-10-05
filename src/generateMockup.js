function generateTeam(team) {

    function generateManager(manager) {
        return `
        <div class = 'card'>
            <div class = 'header'>
                <h2> ${manager.getName()}</h2>
                <h3><i class="fa-sharp fa-solid fa-paperclip"></i> Manager</h3>
            </div>
            <div>
                <ul>
                    <li id = 'employeeId'>${manager.getId()}</li>
                    <li id = 'managerEmail'>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
                    <li> Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    function generateEngineer(engineer) {
        return `
        <div class = 'card'>
            <div class = 'header'>
                <h2> ${engineer.getName()}</h2>
                <h3><i class="fa-sharp fa-solid fa-wrench-simple"></i> Engineer</h3>
            </div>
            <div>
                <ul>
                    <li id = 'employeeId'>${engineer.getId()}</li>
                    <li id = 'managerEmail'>Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
                    <li> GitHub: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub}</a></li>
                </ul>
            </div>
        </div>
        `;
    }

    function generateIntern(intern) {
        return `
        <div class = 'card'>
            <div class = 'header'>
                <h2> ${intern.getName()}</h2>
                <h3><i class="fa-sharp fa-solid fa-graduation-cap"></i> Manager</h3>
            </div>
            <div>
                <ul>
                    <li id = 'employeeId'>${intern.getId()}</li>
                    <li id = 'managerEmail'>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
                    <li> School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));

    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));

    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));

    return `
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
                <div class="col-12 d-flex justify-content-center"></div>
                ${generateTeam(team)}   
                </div>
            </div>
        </div>       
    </body>
    </html>`;
}