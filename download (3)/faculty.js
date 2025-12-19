document.addEventListener('DOMContentLoaded', function () {
    const facultyGrid = document.querySelector('.faculty-grid');
    const loadMoreButton = document.querySelector('#load-more-faculty');

    const facultyData = [
        { name: 'Abhinav Kumar', subject: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Ajit Kumar', subject: 'Director', image: 'https://images.unsplash.com/photo-1580894732444-8ec539b7a134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Mr. Rahul Gupta', subject: 'Science and Maths', image: 'https://plus.unsplash.com/premium_photo-1661766479343-98243c365064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Priyeranjan Kumar', subject: 'Social Studies', image: 'https://images.unsplash.com/photo-1544717297-fa95b6f9944f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D' },
        { name: 'Sarita', subject: 'Junior Faculty', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D' },
        { name: 'Jyoti', subject: 'Junior Faculty', image: 'https://images.unsplash.com/photo-1594759882260-e0705a060b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D' },
    ];

    let currentIndex = 0;

    function loadFaculty(count) {
        for (let i = 0; i < count; i++) {
            if (currentIndex >= facultyData.length) {
                loadMoreButton.style.display = 'none';
                return;
            }

            const facultyMember = document.createElement('div');
            facultyMember.classList.add('faculty-member', 'fade-in-element');
            facultyMember.innerHTML = `
                <img src="${facultyData[currentIndex].image}" alt="${facultyData[currentIndex].name}">
                <h3>${facultyData[currentIndex].name}</h3>
                <p>${facultyData[currentIndex].subject}</p>
            `;
            facultyGrid.appendChild(facultyMember);

            // Trigger the fade-in animation
            setTimeout(() => {
                facultyMember.classList.add('visible');
            }, 100 * i);

            currentIndex++;
        }
    }

    // Initial load
    loadFaculty(6);

    loadMoreButton.addEventListener('click', () => {
        loadFaculty(3);
    });
});
