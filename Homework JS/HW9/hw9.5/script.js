window.addEventListener('DOMContentLoaded', () => {

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html','css','js','mysql','mongodb','angular','aws','docker','python core','python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','sass']
        }
    ];

    coursesArray.forEach(course => {

        let container = document.createElement('div');
        container.style.border = '2px solid black';
        container.style.margin = '10px';
        container.style.padding = '10px';

        let title = document.createElement('h2');
        title.innerText = course.title;

        let durations = document.createElement('div');
        durations.style.display = 'flex';
        durations.style.gap = '20px';

        let month = document.createElement('div');
        month.innerText = 'Month duration: ' + course.monthDuration;

        let hour = document.createElement('div');
        hour.innerText = 'Hour duration: ' + course.hourDuration;

        durations.append(month, hour);

        let ul = document.createElement('ul');

        course.modules.forEach(module => {
            let li = document.createElement('li');
            li.innerText = module;
            ul.appendChild(li);
        });

        container.append(title, durations, ul);

        document.body.appendChild(container);
    });

});