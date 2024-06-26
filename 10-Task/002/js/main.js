import { storyButtonsHandler } from "./story.js";

// listener escucha cuando la estructura de la pagina se cargado
document.addEventListener("DOMContentLoaded", () => {

    storyButtonsHandler();

    // añadir un listener para el promo video
    let btnPromoVideo = document.getElementById('btnPromoVideo')
    btnPromoVideo.addEventListener('click', openPromoVideo)

    /**
     * Seleccion de Trabajos
     */
    let btnResearch = document.getElementById("btnResearch")
    btnResearch.addEventListener('click', showResearchWorks)

    let btnPlanning = document.getElementById("btnPlanning")
    btnPlanning.addEventListener('click', showPanningWorks)

    let btnMarketing = document.getElementById("btnMarketing")
    btnMarketing.addEventListener('click', showMarketingWorks)

    let btnBranding = document.getElementById("btnBranding")
    btnBranding.addEventListener('click', showBrandinggWorks)

    let btnAllWorks = document.getElementById("btnAllWorks")
    btnAllWorks.addEventListener('click', showAllWorks)

    /**
     * Controles para testtimonios
     */
    let buttons = document.querySelectorAll('.testimonials .controls.by1 span')
    for (var i = 0; i < buttons.length; i++) {
        let index = i;
        buttons[i].addEventListener('click', function () {
            moveTestimonialsBy1(index)
        })
    }

    buttons = document.querySelectorAll('.testimonials .controls.by2 span')
    for (var i = 0; i < buttons.length; i++) {
        let index = i;
        buttons[i].addEventListener('click', function () {
            moveTestimonialsBy2(index)
        })
    }

    // control de cambio de pantalla en testimonios
    window.addEventListener("resize", function () {
        console.log('resize screen')
        console.log(window.screen.width)

        // si el tamaño de la pantalla es menor o igual que 860 
        // entonces ocultar el segundo elemento activo
        if (window.screen.width <= 860) {
            console.log('ocultar segundo elemento')
            let secondElements = document.querySelectorAll('.testimonials .cards .active:nth-child(2)')
            for (var i = 0; i < secondElements.length; i++) {
                secondElements[i].classList.remove('active')
            }
        } else {
            console.log('mostrar segundo elemento')
            let secondElements = document.querySelectorAll('.testimonials .cards .card:nth-child(2)')
            for (var i = 0; i < secondElements.length; i++) {
                secondElements[i].classList.add('active')
            }
        }
    })

    /**
     * Seccion de contactanos
     */
    initMap();
});

function openPromoVideo() {
    let overlay = document.getElementById('overlay')
    let video = document.getElementById('divPromoVideo')

    overlay.addEventListener('click', closePromoVideo)

    overlay.style.display = 'block'
    video.style.display = 'block'
}

function closePromoVideo() {
    let overlay = document.getElementById('overlay')
    let video = document.getElementById('divPromoVideo')

    overlay.style.display = 'none'
    video.style.display = 'none'
}

function showResearchWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "Web development"
    document.getElementById('divWebDevelopment').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnResearch').parentNode.classList.add('active')
}

function showPanningWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "Digital Marketing"
    document.getElementById('divDigitalMarketing').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnPlanning').parentNode.classList.add('active')
}

function showMarketingWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "App Development" "Product Design"
    document.getElementById('divAppDevelopment').style.display = 'block'
    document.getElementById('divProductDesign').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnMarketing').parentNode.classList.add('active')
}

function showBrandinggWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "divGraphicDesign" "divSEOServices"
    document.getElementById('divGraphicDesign').style.display = 'block'
    document.getElementById('divSEOServices').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnBranding').parentNode.classList.add('active')
}

function showAllWorks() {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el todos los trabajos
    document.getElementById('divGraphicDesign').style.display = 'block'
    document.getElementById('divWebDevelopment').style.display = 'block'
    document.getElementById('divAppDevelopment').style.display = 'block'
    document.getElementById('divDigitalMarketing').style.display = 'block'
    document.getElementById('divSEOServices').style.display = 'block'
    document.getElementById('divProductDesign').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnAllWorks').parentNode.classList.add('active')
}

function setUpWorksButton() {
    // ocultar todos los elements (trabajos)
    document.getElementById('divGraphicDesign').style.display = 'none'
    document.getElementById('divWebDevelopment').style.display = 'none'
    document.getElementById('divAppDevelopment').style.display = 'none'
    document.getElementById('divDigitalMarketing').style.display = 'none'
    document.getElementById('divSEOServices').style.display = 'none'
    document.getElementById('divProductDesign').style.display = 'none'

    // quitar la seleccion en el menu
    let buttons = document.querySelectorAll(".our-work ul li")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
}

function moveTestimonialsBy1(index) {
    console.log('Esta accion mueve los elementos de 1 en 1')

    // quitar la clase activa a los cards existentes
    let actives = document.querySelectorAll('.testimonials .active')
    for (var i = 0; i < actives.length; i++) {
        actives[i].classList.remove('active')
    }

    // si index = 0 entonces el elementro a mostrar el 1
    // si index = 0 => elemento = index + 1
    document.querySelector('.testimonials .cards .card:nth-child(' + (index + 1) + ')').classList.add('active')

    // añadir clase activa al controlador
    index++
    document.querySelector('.testimonials .controls span:nth-child(' + index + ')').classList.add('active')
}

function moveTestimonialsBy2(index) {
    console.log('Esta accion mueve los elementos de 2 en 2')
    console.log(index)
    // quitar la clase activa a los cards existentes
    let actives = document.querySelectorAll('.testimonials .active')
    for (var i = 0; i < actives.length; i++) {
        actives[i].classList.remove('active')
    }

    // añadir la clase activa a los siguientes cards
    // index = 0 mostrar 1 y 2
    // index = 1 mostrar 3 y 4
    // index = 2 mostrar 5
    if (index == 0) {
        document.querySelector('.testimonials .cards .card:nth-child(1)').classList.add('active')
        document.querySelector('.testimonials .cards .card:nth-child(2)').classList.add('active')
    }
    if (index == 1) {
        document.querySelector('.testimonials .cards .card:nth-child(3)').classList.add('active')
        document.querySelector('.testimonials .cards .card:nth-child(4)').classList.add('active')
    }
    if (index == 2) {
        document.querySelector('.testimonials .cards .card:nth-child(5)').classList.add('active')
    }

    // añadir clase activa al controlador
    index++
    document.querySelector('.testimonials .controls.by2 span:nth-child(' + index + ')').classList.add('active')
    // '.testimonials .controls span:nth-child(1)
    // '.testimonials .controls span:nth-child(2)
    // '.testimonials .controls span:nth-child(3)
}

// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: -12.059769, lng: -77.119688 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 18,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Testing",
    });
}