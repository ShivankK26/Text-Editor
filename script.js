let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

const fontList = [
    "Abel",
    "Abril+Fatface",
    "Acme",
    "Alegreya",
    "Alegreya+Sans",
    "Anton",
    "Archivo",
    "Archivo+Black",
    "Archivo+Narrow",
    "Arimo",
    "Arvo",
    "Asap",
    "Asap+Condensed",
    "Bitter",
    "Bowlby+One+SC",
    "Bree+Serif",
    "Cabin",
    "Cairo",
    "Catamaran",
    "Crete+Round",
    "Crimson+Text",
    "Cuprum",
    "Dancing+Script",
    "Dosis",
    "Droid+Sans",
    "Droid+Serif",
    "EB+Garamond",
    "Exo",
    "Exo+2",
    "Faustina",
    "Fira+Sans",
    "Fjalla+One",
    "Francois+One",
    "Gloria+Hallelujah",
    "Hind",
    "Inconsolata",
    "Indie+Flower",
    "Josefin+Sans",
    "Julee",
    "Karla",
    "Lato",
    "Libre+Baskerville",
    "Libre+Franklin",
    "Lobster",
    "Lora",
    "Mada",
    "Manuale",
    "Maven+Pro",
    "Merriweather",
    "Merriweather+Sans",
    "Montserrat",
    "Montserrat+Subrayada",
    "Mukta+Vaani",
    "Muli",
    "Noto+Sans",
    "Noto+Serif",
    "Nunito",
    "Open+Sans",
    "Open+Sans+Condensed:300",
    "Oswald",
    "Oxygen",
    "PT+Sans",
    "PT+Sans+Caption",
    "PT+Sans+Narrow",
    "PT+Serif",
    "Pacifico",
    "Passion+One",
    "Pathway+Gothic+One",
    "Play",
    "Playfair+Display",
    "Poppins",
    "Questrial",
    "Quicksand",
    "Raleway",
    "Roboto",
    "Roboto+Condensed",
    "Roboto+Mono",
    "Roboto+Slab",
    "Ropa+Sans",
    "Rubik",
    "Saira",
    "Saira+Condensed",
    "Saira+Extra+Condensed",
    "Saira+Semi+Condensed",
    "Sedgwick+Ave",
    "Sedgwick+Ave+Display",
    "Shadows+Into+Light",
    "Signika",
    "Slabo+27px",
    "Source+Code+Pro",
    "Source+Sans+Pro",
    "Spectral",
    "Titillium+Web",
    "Ubuntu",
    "Ubuntu+Condensed",
    "Varela+Round",
    "Vollkorn",
    "Work+Sans",
    "Yanone+Kaffeesatz",
    "Zilla+Slab",
    "Zilla+Slab+Highlight",
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
    "Roboto",      
    "Open Sans",   
    "Montserrat" , 
  ];
  

  

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });
    

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();

