document.addEventListener('DOMContentLoaded', () => {
    // Get all filter items and projects
    const filterItems = document.querySelectorAll('.selection ul li');
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
    // Get all filter items and projects
    const filterItems = document.querySelectorAll('.main-nav a');

    // Add click event to each filter item
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
    const sections = document.querySelectorAll('section'); 
    //click handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    //scroll handler
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
  
    if (mobileMediaQuery.matches) {
      const projects = document.querySelectorAll('.project-digital, .project-tech');
  
      projects.forEach(project => {
        project.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent event from bubbling to document
          const isActive = project.classList.contains('active');
  
          // Close all projects first
          projects.forEach(p => p.classList.remove('active'));
  
          // Open clicked project if it wasn't active
          if (!isActive) {
            project.classList.add('active');
          }
        });
      });
  
      // Close projects when clicking outside
      document.addEventListener('click', function() {
        projects.forEach(p => p.classList.remove('active'));
      });
    }
  });