var users = [{
    id: 1,
    name: 'Rohit Verma',
    age: 25
}, {
    id: 2,
    name: 'Sunil Yadav',
    age: 25
}, {
    id: 3,
    name: 'Abhishek Saini',
    age: 25
}, {
    id: 4,
    name: 'Deep Chand',
    age: 25
}, {
    id: 5,
    name: 'Shubham',
    age: 25
}];


var subjects = [{
    id: 1,
    subjects: ['Hindi', 'English', 'Maths', 'Sanskrit']
}, {
    id: 2,
    subjects: ['Hindi', 'English', 'Maths', 'Sanskrit']
}, {
    id: 3,
    subjects: ['Hindi', 'English', 'Sanskrit']
}, {
    id: 4,
    subjects: ['Hindi', 'Maths', 'Sanskrit']
}, {
    id: 4,
    subjects: ['Hindi', 'English', 'Maths', 'Social Science']
}];


function getUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(Error('User Not found'));
            }
        }, 1000);
    });
}

function gerUserSubjects(user) {
    return new Promise((resolve, reject) => {
        const subject = subjects.find(subj => subj.id === user.id);
        if (subject) {
            resolve({user_name: user.name, sunjects: subject.subjects});
        } else {
            reject(Error('Subject Not available for user : ' + user.name));
        }
    })
}


getUserById(74)
.then(user => { // 1st Chain
    return gerUserSubjects(user);
}).then(subject => {  // 2nd Chain
    console.log(subject);
}).catch(err => {
    console.log(err);
});
