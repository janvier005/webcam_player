document.addEventListener('DOMContentLoaded', (event) => {
    let baseImageUrl = "https://mailstudio-simonjanvier.s3-eu-west-1.amazonaws.com/static/git-webcam/";
    let images = imageNames.map(imageName => baseImageUrl + imageName);
    let currentIndex = 0;
    let playInterval = null;
    let isLoadingImage = false;
    let slideshowSpeed = 1000;
    let loadedImages = [];
    let imagesLength; // Variable globale pour stocker la longueur de images

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

    // Création et ajout dynamique des éléments HTML
    function setupHtmlElements() {
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

        const timeline = document.createElement('div');
        timeline.id = 'timeline';
        imageWrapper.appendChild(timeline);

        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'controls-container';

        const prevButton = document.createElement('button');
        prevButton.id = 'prev';
        prevButton.className = 'control-btn';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        controlsContainer.appendChild(prevButton);

        const playButton = document.createElement('button');
        playButton.id = 'play';
        playButton.className = 'control-btn';
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        controlsContainer.appendChild(playButton);

        const nextButton = document.createElement('button');
        nextButton.id = 'next';
        nextButton.className = 'control-btn';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        controlsContainer.appendChild(nextButton);

        const speedSelector = document.createElement('select');
        speedSelector.id = 'speedSelector';
        speedSelector.className = 'speed-selector';
        speedSelector.innerHTML = `
            <option value="3000">Lent (3s)</option>
            <option value="1000" selected>Normal (1s)</option>
            <option value="500">Rapide (0.5s)</option>
        `;
        controlsContainer.appendChild(speedSelector);

        slideshowContainer.appendChild(imageWrapper);
        slideshowContainer.appendChild(controlsContainer);
    }

    setupHtmlElements(); // Appel de la fonction pour structurer le HTML



    function showImage(index) {
        let imageDisplay = document.getElementById('imageDisplay');
        let loadingIndicator = document.getElementById('loadingIndicator');

        if (!loadingIndicator) {
            console.error("L'élément loadingIndicator est introuvable.");
            return;
        }

        if (!loadedImages[index]) {
            console.error('Image not loaded or found in loadedImages array.');
            return;
        }

        if (currentIndex === 0 && !loadedImages[0].complete) {
            loadingIndicator.style.display = 'block';
        }

        if (!isLoadingImage) {
            isLoadingImage = true;
            imageDisplay.innerHTML = '';
            let imgElement = loadedImages[index];

            if (imgElement.complete) {
                imageDisplay.appendChild(imgElement);
                isLoadingImage = false;
                if (currentIndex === 0) {
                    loadingIndicator.style.display = 'none';
                }
            } else {
                imgElement.onload = () => {
                    imageDisplay.appendChild(imgElement);
                    isLoadingImage = false;
                    if (currentIndex === 0) {
                        loadingIndicator.style.display = 'none';
                    }
                };
            }
        }

        updateTimeline();
    }

    function updateTimeline() {
        let timeline = document.getElementById('timeline');
        timeline.innerHTML = '';

        let n = 50;
        let selectedImages = images.filter((image, index) => index % n === 0);

        let imageWidth = 100 / selectedImages.length;

        selectedImages.forEach((image, index) => {
            let preview = document.createElement('div');
            preview.className = 'preview';
            preview.style.width = imageWidth + '%';
            preview.style.backgroundImage = `url(${image})`;
            timeline.appendChild(preview);
        });

        let line = document.createElement('div');
        line.className = 'line';
        line.style.left = (currentIndex / n * ( imageWidth + (70/n))  ) + '%';
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

    function playSlideshow() {
        let playButton = document.getElementById('play');
        let icon = playButton.querySelector('i');

        if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        } else {
            updateSlideshowSpeed();
            playInterval = setInterval(nextImage, slideshowSpeed);
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
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


    document.getElementById('next').addEventListener('click', () => nextImage());
    document.getElementById('prev').addEventListener('click', () => prevImage());
    document.getElementById('play').addEventListener('click', () => playSlideshow());
    document.getElementById('speedSelector').addEventListener('change', () => updateSlideshowSpeed());

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



});