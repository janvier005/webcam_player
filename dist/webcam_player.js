// Options par défaut
const defaultOptions = {
    baseImageUrl: "https://mailstudio-simonjanvier.s3-eu-west-1.amazonaws.com/static/git-webcam/",
    imageNames: ["P24040900002810.jpg", "P24040900024010.jpg", "P24040900045410.jpg", "P24040900070710.jpg", "P24040900091910.jpg", "P24040900113310.jpg", "P24040900134510.jpg", "P24040900155810.jpg", "P24040900181110.jpg", "P24040900202410.jpg", "P24040900223710.jpg", "P24040900245010.jpg", "P24040900270310.jpg", "P24040900291510.jpg", "P24040900312910.jpg", "P24040900334210.jpg", "P24040900355410.jpg", "P24040900380710.jpg", "P24040900402010.jpg", "P24040900423310.jpg", "P24040900444510.jpg", "P24040900465910.jpg", "P24040900491210.jpg", "P24040900512410.jpg", "P24040900533810.jpg", "P24040900555010.jpg", "P24040900580310.jpg", "P24040901001610.jpg", "P24040901022910.jpg", "P24040901044210.jpg", "P24040901065510.jpg", "P24040901090810.jpg", "P24040901112010.jpg", "P24040901133410.jpg", "P24040901154610.jpg", "P24040901175910.jpg", "P24040901201310.jpg", "P24040901222510.jpg", "P24040901243810.jpg", "P24040901265110.jpg", "P24040901290410.jpg", "P24040901311710.jpg", "P24040901333010.jpg", "P24040901354210.jpg", "P24040901375610.jpg", "P24040901400910.jpg", "P24040901422110.jpg", "P24040901443510.jpg", "P24040901464710.jpg", "P24040901490010.jpg", "P24040901511310.jpg", "P24040901532610.jpg", "P24040901553810.jpg", "P24040901575210.jpg", "P24040902000510.jpg", "P24040902021710.jpg", "P24040902043010.jpg", "P24040902064210.jpg", "P24040902085610.jpg", "P24040902110810.jpg", "P24040902132110.jpg", "P24040902153410.jpg", "P24040902174710.jpg", "P24040902200010.jpg", "P24040902221210.jpg", "P24040902242610.jpg", "P24040902263810.jpg", "P24040902285110.jpg", "P24040902310510.jpg", "P24040902331710.jpg", "P24040902353010.jpg", "P24040902374310.jpg", "P24040902395610.jpg", "P24040902420910.jpg", "P24040902442210.jpg", "P24040902463510.jpg", "P24040902484710.jpg", "P24040902510110.jpg", "P24040902531310.jpg", "P24040902552610.jpg", "P24040902574010.jpg", "P24040902595210.jpg", "P24040903021110.jpg", "P24040903043410.jpg", "P24040903065710.jpg", "P24040903091910.jpg", "P24040903114110.jpg", "P24040903140310.jpg", "P24040903162610.jpg", "P24040903184810.jpg", "P24040903211010.jpg", "P24040903233210.jpg", "P24040903255510.jpg", "P24040903281710.jpg", "P24040903303910.jpg", "P24040903330010.jpg", "P24040903352210.jpg", "P24040903374410.jpg", "P24040903400610.jpg", "P24040903422810.jpg", "P24040903444910.jpg", "P24040903471010.jpg", "P24040903493310.jpg", "P24040903515610.jpg", "P24040903541610.jpg", "P24040903563910.jpg", "P24040903590110.jpg", "P24040904012110.jpg", "P24040904033410.jpg", "P24040904054710.jpg", "P24040904080010.jpg", "P24040904101310.jpg", "P24040904122510.jpg", "P24040904143910.jpg", "P24040904165210.jpg", "P24040904190410.jpg", "P24040904211810.jpg", "P24040904233010.jpg", "P24040904254310.jpg", "P24040904275510.jpg", "P24040904300910.jpg", "P24040904322210.jpg", "P24040904343410.jpg", "P24040904364810.jpg", "P24040904390010.jpg", "P24040904411310.jpg", "P24040904432710.jpg", "P24040904453910.jpg", "P24040904475210.jpg", "P24040904500510.jpg", "P24040904521810.jpg", "P24040904543010.jpg", "P24040904564410.jpg", "P24040904585710.jpg", "P24040905010910.jpg", "P24040905032310.jpg", "P24040905053510.jpg", "P24040905074810.jpg", "P24040905100210.jpg", "P24040905121410.jpg", "P24040905142710.jpg", "P24040905164010.jpg", "P24040905185310.jpg", "P24040905210510.jpg", "P24040905231910.jpg", "P24040905253210.jpg", "P24040905274410.jpg", "P24040905295710.jpg", "P24040905321010.jpg", "P24040905342310.jpg", "P24040905363510.jpg", "P24040905384910.jpg", "P24040905410210.jpg", "P24040905431410.jpg", "P24040905452810.jpg", "P24040905474010.jpg", "P24040905495310.jpg", "P24040905520610.jpg", "P24040905541910.jpg", "P24040905563210.jpg", "P24040905584510.jpg", "P24040906005710.jpg", "P24040906030910.jpg", "P24040906052310.jpg", "P24040906073510.jpg", "P24040906094810.jpg", "P24040906120210.jpg", "P24040906141410.jpg", "P24040906162710.jpg", "P24040906184010.jpg", "P24040906205310.jpg", "P24040906230610.jpg", "P24040906251910.jpg", "P24040906273210.jpg", "P24040906294410.jpg", "P24040906315810.jpg", "P24040906341010.jpg", "P24040906362310.jpg", "P24040906383710.jpg", "P24040906404910.jpg", "P24040906430210.jpg", "P24040906451410.jpg", "P24040906472810.jpg", "P24040906494110.jpg", "P24040906515310.jpg", "P24040906540710.jpg", "P24040906561910.jpg", "P24040906583210.jpg", "P24040907004510.jpg", "P24040907025810.jpg", "P24040907051110.jpg", "P24040907072410.jpg", "P24040907093710.jpg", "P24040907114910.jpg", "P24040907140310.jpg", "P24040907161510.jpg", "P24040907182810.jpg", "P24040907204210.jpg", "P24040907225410.jpg", "P24040907250710.jpg", "P24040907272110.jpg", "P24040907293310.jpg", "P24040907314610.jpg", "P24040907335910.jpg", "P24040907361210.jpg", "P24040907382410.jpg", "P24040907403810.jpg", "P24040907425110.jpg", "P24040907450310.jpg", "P24040907471610.jpg", "P24040907492910.jpg", "P24040907514210.jpg", "P24040907535510.jpg", "P24040907560810.jpg", "P24040907582110.jpg", "P24040908003310.jpg", "P24040908024710.jpg", "P24040908050010.jpg", "P24040908071410.jpg", "P24040908092710.jpg", "P24040908113910.jpg", "P24040908135210.jpg", "P24040908160610.jpg", "P24040908181810.jpg", "P24040908203110.jpg", "P24040908224510.jpg", "P24040908245810.jpg", "P24040908271110.jpg", "P24040908292510.jpg", "P24040908313710.jpg", "P24040908335010.jpg", "P24040908360410.jpg", "P24040908381710.jpg", "P24040908403010.jpg", "P24040908424410.jpg", "P24040908445710.jpg", "P24040908470910.jpg", "P24040908492310.jpg", "P24040908513610.jpg", "P24040908534910.jpg", "P24040908560310.jpg", "P24040908581610.jpg", "P24040909002910.jpg", "P24040909024210.jpg", "P24040909045510.jpg", "P24040909070810.jpg", "P24040909092210.jpg", "P24040909113510.jpg", "P24040909134810.jpg", "P24040909160210.jpg", "P24040909181410.jpg", "P24040909202710.jpg", "P24040909224110.jpg", "P24040909245310.jpg", "P24040909270610.jpg", "P24040909291910.jpg", "P24040909313310.jpg", "P24040909334510.jpg", "P24040909355810.jpg", "P24040909381210.jpg", "P24040909402510.jpg", "P24040909423810.jpg", "P24040909445110.jpg", "P24040909470410.jpg", "P24040909491710.jpg", "P24040909513110.jpg", "P24040909534410.jpg", "P24040909555710.jpg", "P24040909581110.jpg", "P24040910002410.jpg", "P24040910023710.jpg", "P24040910045110.jpg", "P24040910070310.jpg", "P24040910091610.jpg", "P24040910113010.jpg", "P24040910134310.jpg", "P24040910155610.jpg", "P24040910181010.jpg", "P24040910202210.jpg", "P24040910223510.jpg", "P24040910244910.jpg", "P24040910270210.jpg", "P24040910291510.jpg", "P24040910312910.jpg", "P24040910334210.jpg", "P24040910355410.jpg", "P24040910380810.jpg", "P24040910402110.jpg", "P24040910423410.jpg", "P24040910444810.jpg", "P24040910470110.jpg", "P24040910491410.jpg", "P24040910512810.jpg", "P24040910534110.jpg", "P24040910555310.jpg", "P24040910580710.jpg", "P24040911002010.jpg", "P24040911023210.jpg", "P24040911044610.jpg", "P24040911065910.jpg", "P24040911091110.jpg", "P24040911112510.jpg", "P24040911133810.jpg", "P24040911155010.jpg", "P24040911180410.jpg", "P24040911201710.jpg", "P24040911223010.jpg", "P24040911244310.jpg", "P24040911265610.jpg", "P24040911290810.jpg", "P24040911312210.jpg", "P24040911333510.jpg", "P24040911354710.jpg", "P24040911380110.jpg", "P24040911401410.jpg", "P24040911422710.jpg", "P24040911444110.jpg", "P24040911465310.jpg", "P24040911490610.jpg", "P24040911512010.jpg", "P24040911533310.jpg", "P24040911554610.jpg", "P24040911575910.jpg", "P24040912001210.jpg", "P24040912022610.jpg", "P24040912044010.jpg", "P24040912065510.jpg", "P24040912090910.jpg", "P24040912112410.jpg", "P24040912133710.jpg", "P24040912155210.jpg", "P24040912180610.jpg", "P24040912202010.jpg", "P24040912223510.jpg", "P24040912244810.jpg", "P24040912270310.jpg", "P24040912291810.jpg", "P24040912313210.jpg", "P24040912334710.jpg", "P24040912360110.jpg", "P24040912381510.jpg", "P24040912403010.jpg", "P24040912424410.jpg", "P24040912445810.jpg", "P24040912471310.jpg", "P24040912492610.jpg", "P24040912514110.jpg", "P24040912535610.jpg", "P24040912561010.jpg", "P24040912582410.jpg", "P24040913003810.jpg", "P24040913025110.jpg", "P24040913050410.jpg", "P24040913071710.jpg", "P24040913093110.jpg", "P24040913114310.jpg", "P24040913135610.jpg", "P24040913161010.jpg", "P24040913182310.jpg", "P24040913203510.jpg", "P24040913224910.jpg", "P24040913250210.jpg", "P24040913271410.jpg", "P24040913292810.jpg", "P24040913314110.jpg", "P24040913335410.jpg", "P24040913360710.jpg", "P24040913382010.jpg", "P24040913403410.jpg", "P24040913424710.jpg", "P24040913450110.jpg", "P24040913471310.jpg", "P24040913492610.jpg", "P24040913514010.jpg", "P24040913535310.jpg", "P24040913560510.jpg", "P24040913581910.jpg", "P24040914003210.jpg", "P24040914024610.jpg", "P24040914045910.jpg", "P24040914071210.jpg", "P24040914092510.jpg", "P24040914113810.jpg", "P24040914135210.jpg", "P24040914160410.jpg", "P24040914181710.jpg", "P24040914203110.jpg", "P24040914224410.jpg", "P24040914245810.jpg", "P24040914271110.jpg", "P24040914292310.jpg", "P24040914313710.jpg", "P24040914335010.jpg", "P24040914360410.jpg", "P24040914381610.jpg", "P24040914402910.jpg", "P24040914424210.jpg", "P24040914445510.jpg", "P24040914470910.jpg", "P24040914492210.jpg", "P24040914513510.jpg", "P24040914534810.jpg", "P24040914560110.jpg", "P24040914581610.jpg", "P24040915003010.jpg", "P24040915024310.jpg", "P24040915045610.jpg", "P24040915070910.jpg", "P24040915092210.jpg", "P24040915113510.jpg", "P24040915134810.jpg", "P24040915160210.jpg", "P24040915181510.jpg", "P24040915202710.jpg", "P24040915224110.jpg", "P24040915245410.jpg", "P24040915270710.jpg", "P24040915292010.jpg", "P24040915313310.jpg", "P24040915334610.jpg", "P24040915355910.jpg", "P24040915381210.jpg", "P24040915402510.jpg", "P24040915423810.jpg", "P24040915445110.jpg", "P24040915470310.jpg", "P24040915491710.jpg", "P24040915513010.jpg", "P24040915534310.jpg", "P24040915555710.jpg", "P24040915580910.jpg", "P24040916002210.jpg", "P24040916023710.jpg", "P24040916045110.jpg", "P24040916070510.jpg", "P24040916091910.jpg", "P24040916113210.jpg", "P24040916134610.jpg", "P24040916155910.jpg", "P24040916181310.jpg", "P24040916202810.jpg", "P24040916224110.jpg", "P24040916245410.jpg", "P24040916270710.jpg", "P24040916292110.jpg", "P24040916313410.jpg", "P24040916334810.jpg", "P24040916360110.jpg", "P24040916381510.jpg", "P24040916402810.jpg", "P24040916424210.jpg", "P24040916445510.jpg", "P24040916470910.jpg", "P24040916492210.jpg", "P24040916513610.jpg", "P24040916534910.jpg", "P24040916560310.jpg", "P24040916581610.jpg", "P24040917002910.jpg", "P24040917024310.jpg", "P24040917045610.jpg", "P24040917070910.jpg", "P24040917092210.jpg", "P24040917113510.jpg", "P24040917134810.jpg", "P24040917160210.jpg", "P24040917181410.jpg", "P24040917202710.jpg", "P24040917224110.jpg", "P24040917245410.jpg", "P24040917270710.jpg", "P24040917292110.jpg", "P24040917313410.jpg", "P24040917334710.jpg", "P24040917360110.jpg", "P24040917381410.jpg", "P24040917402710.jpg", "P24040917424010.jpg", "P24040917445310.jpg", "P24040917470610.jpg", "P24040917492010.jpg", "P24040917513310.jpg", "P24040917534610.jpg", "P24040917560010.jpg", "P24040917581310.jpg", "P24040918002510.jpg", "P24040918023910.jpg", "P24040918045210.jpg", "P24040918070510.jpg", "P24040918091910.jpg", "P24040918113210.jpg", "P24040918134410.jpg", "P24040918155810.jpg", "P24040918181110.jpg", "P24040918202410.jpg", "P24040918223810.jpg", "P24040918245010.jpg", "P24040918270310.jpg", "P24040918291710.jpg", "P24040918313010.jpg", "P24040918334210.jpg", "P24040918355610.jpg", "P24040918380910.jpg", "P24040918402110.jpg", "P24040918423510.jpg", "P24040918444810.jpg", "P24040918470010.jpg", "P24040918491410.jpg", "P24040918512710.jpg", "P24040918533910.jpg", "P24040918555310.jpg", "P24040918580610.jpg", "P24040919001810.jpg", "P24040919023110.jpg", "P24040919044410.jpg", "P24040919065710.jpg", "P24040919091010.jpg", "P24040919112310.jpg", "P24040919133610.jpg", "P24040919154810.jpg", "P24040919180210.jpg", "P24040919201410.jpg", "P24040919222710.jpg", "P24040919244110.jpg", "P24040919265310.jpg", "P24040919290610.jpg", "P24040919311910.jpg", "P24040919333210.jpg", "P24040919354510.jpg", "P24040919375810.jpg", "P24040919401110.jpg", "P24040919422410.jpg", "P24040919443710.jpg", "P24040919465010.jpg", "P24040919490310.jpg", "P24040919511610.jpg", "P24040919532910.jpg", "P24040919554210.jpg", "P24040919575510.jpg", "P24040920000810.jpg", "P24040920022110.jpg", "P24040920043310.jpg", "P24040920064710.jpg", "P24040920090010.jpg", "P24040920111210.jpg", "P24040920132610.jpg", "P24040920153810.jpg", "P24040920175110.jpg", "P24040920200410.jpg", "P24040920221710.jpg", "P24040920243010.jpg", "P24040920264310.jpg", "P24040920285610.jpg", "P24040920310810.jpg", "P24040920332210.jpg", "P24040920353510.jpg", "P24040920374710.jpg", "P24040920400110.jpg", "P24040920421310.jpg", "P24040920442610.jpg", "P24040920463910.jpg", "P24040920485210.jpg", "P24040920510510.jpg", "P24040920531810.jpg", "P24040920553110.jpg", "P24040920574410.jpg", "P24040920595710.jpg", "P24040921020910.jpg", "P24040921042210.jpg", "P24040921063610.jpg", "P24040921084910.jpg", "P24040921110210.jpg", "P24040921131610.jpg", "P24040921152910.jpg", "P24040921174210.jpg", "P24040921195510.jpg", "P24040921220710.jpg", "P24040921242110.jpg", "P24040921263310.jpg", "P24040921284610.jpg", "P24040921310010.jpg", "P24040921331210.jpg", "P24040921352510.jpg", "P24040921373810.jpg", "P24040921395110.jpg", "P24040921420410.jpg", "P24040921441710.jpg", "P24040921462910.jpg", "P24040921484310.jpg", "P24040921505510.jpg", "P24040921530810.jpg", "P24040921552110.jpg", "P24040921573410.jpg", "P24040921594710.jpg", "P24040922020010.jpg", "P24040922041310.jpg", "P24040922062510.jpg", "P24040922083910.jpg", "P24040922105110.jpg", "P24040922130410.jpg", "P24040922151810.jpg", "P24040922173010.jpg", "P24040922194310.jpg", "P24040922215610.jpg", "P24040922240910.jpg", "P24040922262210.jpg", "P24040922283510.jpg", "P24040922304810.jpg", "P24040922330010.jpg", "P24040922351310.jpg", "P24040922372610.jpg", "P24040922393910.jpg", "P24040922415210.jpg", "P24040922440510.jpg", "P24040922461810.jpg", "P24040922483010.jpg", "P24040922504410.jpg", "P24040922525710.jpg", "P24040922550910.jpg", "P24040922572310.jpg", "P24040922593510.jpg", "P24040923014810.jpg", "P24040923040110.jpg", "P24040923061410.jpg", "P24040923082710.jpg", "P24040923104010.jpg", "P24040923125310.jpg", "P24040923150610.jpg", "P24040923171810.jpg", "P24040923193110.jpg", "P24040923214510.jpg", "P24040923235710.jpg", "P24040923261010.jpg", "P24040923282310.jpg", "P24040923303610.jpg", "P24040923324910.jpg", "P24040923350210.jpg", "P24040923371410.jpg", "P24040923392810.jpg", "P24040923414110.jpg", "P24040923435310.jpg", "P24040923460710.jpg", "P24040923481910.jpg", "P24040923503210.jpg", "P24040923524510.jpg", "P24040923545810.jpg", "P24040923571010.jpg", "P24040923592410.jpg"],
    showPrevButton: true,
    showPlayButton: true,
    showNextButton: true,
    showSpeedSelector: true,
    speedOptions: [
        { label: "Lent (3s)", value: 3000 },
        { label: "Normal (1s)", value: 1000 },
        { label: "Rapide (0.5s)", value: 500 },
    ],
    slideshowSpeed: 1000,
    autoplay: false,
    autoplaySpeed: 1000,
    showTimeline: true,
    enablePrefetch: true,
};

let playInterval;
let images = []; // Maintenant défini au niveau global
let loadedImages = []; // Chargé une fois et accessible globalement
let currentIndex = 0; // Index actuel accessible globalement
let imagesLength; // Longueur des images accessible globalement
let isLoadingImage;

function initializeSlideshow(userOptions = {}) {
    // Fusion des options utilisateur avec les options par défaut
    let options = {...defaultOptions, ...userOptions};

    document.addEventListener('DOMContentLoaded', (event) => {
        let baseImageUrl = options.baseImageUrl;
        let imageNames = options.imageNames.filter((_, index) => index % 2 === 0);
        images = imageNames.map(imageName => baseImageUrl + imageName);
        playInterval = null;
        isLoadingImage = false;
        let slideshowSpeed = options.slideshowSpeed;

        images.forEach(image => {
            let link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = image;
            document.head.appendChild(link);
        });

        loadedImages = images.map(src => {
            let img = new Image();
            img.src = src;
            return img;
        });
        imagesLength = images.length;

        // Point d'ancrage pour tout le contenu généré
        const slideshowContainer = document.getElementById('slideshowContainer');
        setupHtmlElements(options, slideshowContainer);

        // Initialisation des écouteurs d'événements après la mise en place du DOM
        initListeners(options);  // Assurez-vous que cette fonction est appelée ici

        // Charge et affiche la première image immédiatement après la configuration du DOM
        showImage(currentIndex, loadedImages);

        // Si l'option autoplay est activée, démarrer le diaporama automatiquement
        if (options.autoplay) {
            playSlideshow(options.autoplaySpeed);
        }
    });
}

// Création et ajout dynamique des éléments HTML
function setupHtmlElements(options) {
    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'imageWrapper';

    const imageDisplay = document.createElement('div');
    imageDisplay.id = 'imageDisplay';
    imageWrapper.appendChild(imageDisplay);

    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loadingIndicator';
    loadingIndicator.style.display = 'none';
    loadingIndicator.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Chargement...';
    imageWrapper.appendChild(loadingIndicator);

    if(options.showTimeline) {
        const timeline = document.createElement('div');
        timeline.id = 'timeline';
        imageWrapper.appendChild(timeline);
    }

    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';

    if(options.showPrevButton) {
        const prevButton = document.createElement('button');
        prevButton.id = 'prev';
        prevButton.className = 'control-btn';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        controlsContainer.appendChild(prevButton);
    }

    if(options.showPlayButton) {
        const playButton = document.createElement('button');
        playButton.id = 'play';
        playButton.className = 'control-btn';
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        controlsContainer.appendChild(playButton);
    }

    if(options.showNextButton) {
        const nextButton = document.createElement('button');
        nextButton.id = 'next';
        nextButton.className = 'control-btn';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        controlsContainer.appendChild(nextButton);
    }

    if(options.showSpeedSelector) {
        const speedSelector = document.createElement('select');
        speedSelector.id = 'speedSelector';
        speedSelector.className = 'speed-selector';
        options.speedOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            speedSelector.appendChild(optionElement);
        });
        controlsContainer.appendChild(speedSelector);
    }

    slideshowContainer.appendChild(imageWrapper);
    slideshowContainer.appendChild(controlsContainer);
}

function elementsAreReady() {
    // Vérifiez si les éléments nécessaires sont chargés
    return document.getElementById('imageDisplay') && document.getElementById('timeline');
}

function waitForElementsAndShowImage(index = 0) {
    if (elementsAreReady()) {
        showImage(index);
    } else {
        // Réessayer après un court délai
        setTimeout(() => waitForElementsAndShowImage(index), 100);
    }
}

function waitForElementsAndUpdateTimeline() {
    if (elementsAreReady()) {
        updateTimeline();
    } else {
        // Réessayer après un court délai
        setTimeout(waitForElementsAndUpdateTimeline, 100);
    }
}

// Utilisez ces nouvelles fonctions pour attendre que les éléments soient prêts
waitForElementsAndShowImage();
waitForElementsAndUpdateTimeline();


function showImage(index) {
    const imageDisplay = document.getElementById('imageDisplay');
    const loadingIndicator = document.getElementById('loadingIndicator') || createLoadingIndicator();

    // Vérification si l'image à cet index est chargée
    if (loadedImages[index] && !loadedImages[index].complete) {
        loadingIndicator.style.display = 'block';
        loadedImages[index].onload = () => {
            if (!imageDisplay.contains(loadedImages[index])) {
                imageDisplay.innerHTML = ''; // Nettoie l'image précédente
                imageDisplay.appendChild(loadedImages[index]);
            }
            loadingIndicator.style.display = 'none';
        };
    } else if (loadedImages[index] && loadedImages[index].complete) {
        imageDisplay.innerHTML = ''; // Nettoie l'image précédente
        imageDisplay.appendChild(loadedImages[index]);
    } else {
        // Gestion des cas où l'image n'est pas trouvée ou n'est pas chargée
        console.error('Image non chargée ou introuvable à l\'index:', index);
        loadingIndicator.style.display = 'none';
    }
}


function createLoadingIndicator() {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loadingIndicator';
    loadingIndicator.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Chargement...';
    loadingIndicator.style.display = 'none';
    document.getElementById('imageWrapper').appendChild(loadingIndicator);
    return loadingIndicator;
}

function updateTimeline() {
    let timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    let n = Math.max(1, Math.round(imagesLength / 10)); // Ajustez selon le nombre d'images
    let selectedImages = images.filter((image, index) => index % n === 0);

    selectedImages.forEach((image, index) => {
        let preview = document.createElement('div');
        preview.className = 'preview';
        preview.style.width = `${100 / selectedImages.length}%`;
        preview.style.backgroundImage = `url(${image})`;
        timeline.appendChild(preview);
    });

    let line = document.createElement('div');
    line.className = 'line';
    line.style.left = `${(currentIndex / (imagesLength - 1)) * 100}%`;
    line.style.cursor = 'pointer';
    timeline.appendChild(line);
}

function nextImage() {
    let nextIndex = (currentIndex + 1) % images.length;
    if (!isLoadingImage) {
        showImage(nextIndex);
        currentIndex = nextIndex;
    }
}

function prevImage() {
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    if (!isLoadingImage) {
        showImage(prevIndex);
        currentIndex = prevIndex;
    }
}

function playSlideshow(autoplaySpeed = defaultOptions.autoplaySpeed) {
    let playButton = document.getElementById('play');
    let icon = playButton ? playButton.querySelector('i') : null;

    if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
        if (icon) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    } else {
        slideshowSpeed = autoplaySpeed;
        playInterval = setInterval(nextImage, slideshowSpeed);
        if (icon) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
    }
}

function updateSlideshowSpeed() {
    let speedSelector = document.getElementById('speedSelector');
    slideshowSpeed = parseInt(speedSelector.value);
    if (playInterval) {
        clearInterval(playInterval);
        playInterval = setInterval(nextImage, slideshowSpeed);
    }
}

initListeners();

function initListeners(userOptions = {}) {
    let options = {...defaultOptions, ...userOptions};

    if (options.showNextButton && document.getElementById('next')) {
        document.getElementById('next').addEventListener('click', () => nextImage());
    }
    if (options.showPrevButton && document.getElementById('prev')) {
        document.getElementById('prev').addEventListener('click', () => prevImage());
    }
    if (options.showPlayButton && document.getElementById('play')) {
        document.getElementById('play').addEventListener('click', () => playSlideshow());
    }
    if (options.showSpeedSelector && document.getElementById('speedSelector')) {
        document.getElementById('speedSelector').addEventListener('change', () => updateSlideshowSpeed());
    }

    if (options.showTimeline && document.getElementById('timeline')) {
        document.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('line')) {
                isDragging = true;
                initialX = event.clientX;
            }
        });


        let isDragging = false;
        let initialX = 0;

        document.addEventListener('selectstart', (event) => {
            event.preventDefault();
        });

        document.getElementById('timeline').addEventListener('mousedown', (mousedownEvent) => {
            // Assurez-vous que l'événement de mousedown agit seulement sur la timeline ou le curseur (line).
            let timeline = document.getElementById('timeline');
            if (!timeline.contains(mousedownEvent.target) && mousedownEvent.target !== timeline) {
                return; // Sort si le mousedown n'est pas sur la timeline ou le curseur.
            }

            let timelineRect = timeline.getBoundingClientRect();
            let initialPosition = (mousedownEvent.clientX - timelineRect.left) / timelineRect.width;
            initialPosition = Math.max(0, Math.min(initialPosition, 1)); // Clamp entre 0 et 1

            let newIndex = Math.floor(initialPosition * imagesLength);
            newIndex = Math.min(Math.max(newIndex, 0), imagesLength - 1);

            let line = document.querySelector('#timeline .line');
            line.style.left = (initialPosition * 100) + '%';

            currentIndex = newIndex;
            showImage(currentIndex);

            function moveTimeline(mousemoveEvent) {
                if (!isDragging) return;

                let currentPosition = (mousemoveEvent.clientX - timelineRect.left) / timelineRect.width;
                currentPosition = Math.max(0, Math.min(currentPosition, 1)); // Clamp entre 0 et 1

                let newPosition = currentPosition;
                let newIndex = Math.floor(newPosition * imagesLength);
                newIndex = Math.min(Math.max(newIndex, 0), imagesLength - 1);

                line.style.left = (newPosition * 100) + '%';

                currentIndex = newIndex;
                showImage(currentIndex);
            }

            function stopDragging() {
                document.removeEventListener('mousemove', moveTimeline);
                document.removeEventListener('mouseup', stopDragging);
                isDragging = false; // Ajouté pour garantir que isDragging est réinitialisé.
            }

            isDragging = true; // Défini sur true lorsque le mousedown est détecté.
            document.addEventListener('mousemove', moveTimeline);
            document.addEventListener('mouseup', stopDragging);
        });
    }
}
