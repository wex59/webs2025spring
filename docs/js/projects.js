document.addEventListener('DOMContentLoaded', () => {
    // Get all filter items and projects
    const filterItems = document.querySelectorAll('#selection ul li');
    const projects = document.querySelectorAll('.projects>div'); 

    // Add click event to each filter item
    filterItems.forEach(item => {
        item.addEventListener('click', () => {

            //remove and add active class
            filterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            //get the filter type 
            const filter = item.textContent.trim().toLowerCase();

            projects.forEach(projects => {
                const isTech = projects.classList.contains('project-tech');
                const isDigital = projects.classList.contains('project-digital');
                //shows projects based on filter
                if (filter === 'all') {
                    projects.style.display = 'block';
                } else if (filter === 'tech') {
                    projects.style.display = isTech ? 'block' : 'none';
                } else if (filter === 'digital') {
                    projects.style.display = isDigital ? 'block' : 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all nav links
    const filterItems = document.querySelectorAll('.main-nav a');

    // Add click event 
    filterItems.forEach(item => {
        item.addEventListener('click', () => {

            //remove and add active class
            filterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section, .project-section, .parent');

    //scroll handler
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPos = window.scrollY + window.innerHeight * 0.15; // Adjust threshold

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;

            // Check if scroll position is within section bounds
            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                const sectionId = section.id;
                
                //handle project sections mapping
                if (['cloud2', 'selection', 'parent'].includes(sectionId)) {
                    currentSection = 'project-section';
                } else if (sectionId) {
                    currentSection = sectionId;
                }
            }
        });

        //update active states
        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            link.classList.toggle('active', href === currentSection);
        });
    });
});

document.querySelectorAll('.project-digital, .project-tech').forEach(project => {
    project.addEventListener('click', function() {
        //toggle active class on clicked project
        this.classList.toggle('active');
        
        //close other open projects
        document.querySelectorAll('.project-digital, .project-tech').forEach(otherProject => {
            if(otherProject !== this) otherProject.classList.remove('active');
        });
    });
});

//close projects when clicking outside
document.addEventListener('click', function(e) {
    if(!e.target.closest('.project-digital, .project-tech')) {
        document.querySelectorAll('.project-digital, .project-tech').forEach(project => {
            project.classList.remove('active');
        });
    }
});

