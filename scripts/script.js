








/*
window.onscroll = () => {
    
    let sections = document.querySelectorAll("section");
    let navLinks =  document.querySelectorAll("nav div div div ul li a");


    console.log('AAA')
    sections.forEach( sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop;
        let heigth = sec.offsetHeight;
        let id =  sec.getAttribute('id');

        console.log(id)


        *********+
        
        https://www.youtube.com/watch?v=UoE1hqfpXX0

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach( links => {
                links.classList.remove("active");
                document.querySelector("nav div div div ul li a [href*=" + id + "]")
                    .classList.add("active");
            })
        }/

    });
} */