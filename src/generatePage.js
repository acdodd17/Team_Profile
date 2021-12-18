
// generate page with divs to hold each employee card 
const generatePage = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"> 
            <title>Team Profile</title>
        </head>
        <body>
            <header class="p-3 mb-2 bg-danger text-white d-flex justify-content-center">
                <h1> My Team </h1>
            </header>
            <div class="container">
                <div class="row">
                    ${team
                        .filter(employee => employee.getRole() === 'Manager')
                        .map(({ name, id, email, officeNumber}) => {
                            return `
                            <div class="col d-flex justify-content-center">
                                <div class="card shadow-sm mb-5" style="width: 18rem;">
                                    <div class="card-header bg-primary">
                                        <h4 class="card-title text-white">${name}</h4>
                                        <h5 class="card-subtitle text-white"><i class="bi bi-cup"></i> Manager</h5>
                                    </div>
                                    <div class="card-body bg-light">
                                        <ul class="list-group list-group-flush ">
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">ID: <span class="fw-normal">${id}</span></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">Office#: <span class="fw-normal">${officeNumber}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            `
                        }).join('')
                    }
                    ${team
                        .filter(employee => employee.getRole() === 'Engineer')
                        .map(({name, id, email, github}) => {
                            return `
                            <div class="col d-flex justify-content-center">
                                <div class="card shadow-sm mb-5" style="width: 18rem;">
                                    <div class="card-header bg-primary">
                                        <h4 class="card-title text-white">${name}</h4>
                                        <h5 class="card-subtitle text-white"><i class="bi bi-eyeglasses"></i> Engineer</h5>
                                    </div>
                                    <div class="card-body bg-light">
                                        <ul class="list-group list-group-flush ">
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">ID: <span class="fw-normal">${id}</span></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">GitHub: <a href="github.com/${github}" class="fw-normal">${github}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            `
                        }).join('')
                    }
                    ${team
                        .filter(employee => employee.getRole() === 'Intern')
                        .map(({name, id, email, school}) => {
                            return `
                            <div class="col d-flex justify-content-center">
                                <div class="card shadow-sm mb-5" style="width: 18rem;">
                                    <div class="card-header bg-primary">
                                        <h4 class="card-title text-white">${name}</h4>
                                        <h5 class="card-subtitle text-white"><i class="bi bi-mortarboard"></i> Intern</h5>
                                    </div>
                                    <div class="card-body bg-light">
                                        <ul class="list-group list-group-flush ">
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">ID: <span class="fw-normal">${id}<span></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                            <li class="list-group-item border border-light rounded shadow-sm mb-2 fw-bold">School: <span class="fw-normal">${school}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            `
                        }).join('')
                    }
                </div>
            </div>
        </body>
    </html>
    `;
};

module.exports = generatePage;