$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 900,
        infiniteLoop: true,
        pager: false
    });

    // Post
    var post = [
        {
            title: "Primer post dinamico",
            date: moment().format("MMMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus a nunc tincidunt tristique. Integer facilisis et elit et rutrum. Phasellus sagittis id lectus eget placerat. Mauris sollicitudin diam mauris, ac cursus mi tempor ac. Phasellus rhoncus sollicitudin magna quis maximus. Pellentesque feugiat non neque id aliquet. Morbi et fermentum magna. Integer aliquet urna quis dui mollis, nec hendrerit diam facilisis. Fusce lacinia maximus tortor eget lacinia. Morbi consequat quis urna blandit volutpat. Suspendisse potenti. Vivamus imperdiet convallis lobortis. Maecenas sit amet risus nunc. Duis tincidunt tortor tortor, vitae fermentum orci suscipit et. Nam mollis nulla est, et semper enim bibendum sed."
        },
        {
            title: "Segundo post dinamico",
            date: moment().format("MMMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus a nunc tincidunt tristique. Integer facilisis et elit et rutrum. Phasellus sagittis id lectus eget placerat. Mauris sollicitudin diam mauris, ac cursus mi tempor ac. Phasellus rhoncus sollicitudin magna quis maximus. Pellentesque feugiat non neque id aliquet. Morbi et fermentum magna. Integer aliquet urna quis dui mollis, nec hendrerit diam facilisis. Fusce lacinia maximus tortor eget lacinia. Morbi consequat quis urna blandit volutpat. Suspendisse potenti. Vivamus imperdiet convallis lobortis. Maecenas sit amet risus nunc. Duis tincidunt tortor tortor, vitae fermentum orci suscipit et. Nam mollis nulla est, et semper enim bibendum sed."
        },
        {
            title: "Tercer post dinamico",
            date: moment().format("MMMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus a nunc tincidunt tristique. Integer facilisis et elit et rutrum. Phasellus sagittis id lectus eget placerat. Mauris sollicitudin diam mauris, ac cursus mi tempor ac. Phasellus rhoncus sollicitudin magna quis maximus. Pellentesque feugiat non neque id aliquet. Morbi et fermentum magna. Integer aliquet urna quis dui mollis, nec hendrerit diam facilisis. Fusce lacinia maximus tortor eget lacinia. Morbi consequat quis urna blandit volutpat. Suspendisse potenti. Vivamus imperdiet convallis lobortis. Maecenas sit amet risus nunc. Duis tincidunt tortor tortor, vitae fermentum orci suscipit et. Nam mollis nulla est, et semper enim bibendum sed."
        },
        {
            title: "Cuarto post dinamico",
            date: moment().format("MMMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus a nunc tincidunt tristique. Integer facilisis et elit et rutrum. Phasellus sagittis id lectus eget placerat. Mauris sollicitudin diam mauris, ac cursus mi tempor ac. Phasellus rhoncus sollicitudin magna quis maximus. Pellentesque feugiat non neque id aliquet. Morbi et fermentum magna. Integer aliquet urna quis dui mollis, nec hendrerit diam facilisis. Fusce lacinia maximus tortor eget lacinia. Morbi consequat quis urna blandit volutpat. Suspendisse potenti. Vivamus imperdiet convallis lobortis. Maecenas sit amet risus nunc. Duis tincidunt tortor tortor, vitae fermentum orci suscipit et. Nam mollis nulla est, et semper enim bibendum sed."
        },
    ];

    post.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">
                ${item.date}
            </span>
            <p> ${item.content}} </p>
            <a href="#" class="button-more">Leer más</a>
        </article> `;

        $("#posts").append(post);
        
    });
});