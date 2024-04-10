# webcam_player

<p align="center">
  <img src="https://mailstudio-simonjanvier.s3-eu-west-1.amazonaws.com/static/git-webcam/webcam-player.png" />
</p>


Preview : https://htmlpreview.github.io/?https://github.com/janvier005/webcam_player/blob/main/demo.html

# Introduction

This library is specifically designed for who looking to integrate a simple and effective solution to display and 
navigate through still webcam images in a slideshow format. It offers straightforward functionality to embed an image slideshow in your web application, enabling users to browse through sequences of webcam shots with ease.

Ideal for projects requiring the display of timed webcam captures, the library allows for customizable navigation and control, making it versatile for various development needs. Whether you're building a monitoring dashboard, a weather application, or any service that relies on sequential webcam image viewing, this library provides the essential tools to enhance interactivity and user engagement with minimal setup.

# Initial Configuration

To get started with the library in your project, you should first initialize the slideshow functionality where it's needed. This initialization typically occurs once the DOM is fully loaded to ensure that all HTML elements are rendered and accessible. Below is a step-by-step guide to initializing the slideshow with the library.

## Initializing the Slideshow

You can initialize the slideshow by calling the `initializeSlideshow` function. It's recommended to do this within a `DOMContentLoaded` event listener to ensure the DOM is fully loaded:

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    initializeSlideshow();
});
```

## Configuration Options
The library provides a set of default options (defaultOptions) that you can customize to suit your needs. These options include paths to your image resources, image names, playback controls, and more. Here's a breakdown of the defaultOptions and how you can customize them:

```javascript
const defaultOptions = {
    baseImageUrl: "https://yourdomain.com/path/to/images/",
    imageNames: ["image1.jpg", "image2.jpg", "image3.jpg"], // Array of image filenames
    showPrevButton: true,  // Show or hide the "previous" button
    showPlayButton: true,  // Show or hide the "play" button
    showNextButton: true,  // Show or hide the "next" button
    showSpeedSelector: true,  // Show or hide the speed selector dropdown
    speedOptions: [  // Speed options for the slideshow
        { label: "Slow (3s)", value: 3000 },
        { label: "Normal (1s)", value: 1000 },
        { label: "Fast (0.5s)", value: 500 },
    ],
    slideshowSpeed: 1000,  // Default speed of the slideshow
    autoplay: false,  // Enable autoplay on initialization
    autoplaySpeed: 1000,  // Speed of autoplay
    showTimeline: true,  // Show or hide the timeline
    enablePrefetch: true,  // Prefetch images for smoother transitions
};
```

To customize these options, you can pass your configuration object to initializeSlideshow:

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    initializeSlideshow({
        baseImageUrl: "https://yourdomain.com/new/path/to/images/",
        imageNames: ["newImage1.jpg", "newImage2.jpg"],
        showPlayButton: false,  // Example customization
        // Add other custom options as needed
    });
});
```

By customizing these options, you can tailor the slideshow experience to fit the specific needs of your application and your audience.

# Using the Library

After you have initialized the slideshow with your preferred settings, you can utilize the provided controls to interact with the slideshow. Users can navigate through images, play or pause the slideshow, and adjust the playback speed. Below is a detailed overview of how you can interact with the slideshow once it's up and running.

## Navigation Controls

The library provides default navigation controls: previous, play/pause, and next buttons. These controls allow users to move through the slideshow manually.

- **Previous Button**: Navigates to the previous image in the slideshow.
- **Play/Pause Button**: Starts the slideshow if it's paused or pauses it if it's playing.
- **Next Button**: Navigates to the next image in the slideshow.

These controls are automatically displayed based on your `defaultOptions` configuration but can be customized or styled to fit the design of your application.

## Speed Selector

If `showSpeedSelector` is enabled, users can choose the speed at which the slideshow plays. This feature is particularly useful for adapting the viewing experience to different user preferences or content types.

- Users can select from predefined speeds, which you can set in the `speedOptions` array during initialization.

## Timeline

When `showTimeline` is enabled, a visual timeline is displayed, showing a preview of the images in the slideshow. Users can click on the timeline to jump to a specific image, providing a quick navigation option and an overview of the slideshow content.

## Autoplay

If autoplay is enabled (`autoplay: true`), the slideshow will start playing automatically when initialized. The speed of autoplay can be set with the `autoplaySpeed` option. This feature is handy for creating a hands-off viewing experience for users.

## Prefetching Images

To ensure a smooth user experience, the library can prefetch images. This is controlled by the `enablePrefetch` option. When enabled, the library will preload images in the background, reducing load times when navigating through the slideshow.

# Customizing the Library

Beyond the initial configuration, you can further customize the library's functionality and appearance:

- **Styling**: You can apply custom CSS styles to the slideshow's controls and timeline to match your application's design theme.
- **Event Handling**: Advanced users can add custom event handlers or modify existing ones to create specific interactions or effects within the slideshow.
- **Dynamic Content**: You can dynamically update the `imageNames` array or other settings if your application requires content to change based on user interaction or other factors.

By leveraging these customization options, you can integrate the slideshow seamlessly into your application, providing a rich and engaging user experience.

# Advanced Customization and Integration

## Dynamic Updates

You can dynamically update the slideshow's content or settings even after the initial load. For instance, if you have a scenario where the set of images changes based on user input or external events, you can update the `imageNames` array and reinitialize the slideshow.

Example:

```javascript
// Update image names and reinitialize the slideshow
defaultOptions.imageNames = ['newImage1.jpg', 'newImage2.jpg', 'newImage3.jpg'];
initializeSlideshow(defaultOptions);
```

This allows for a flexible implementation that can adapt to various application states or user interactions.

## Event Handling
The library is designed with extensibility in mind. Developers can hook into various events within the slideshow lifecycle, such as image change, play, pause, and navigation events. By attaching custom handlers to these events, you can extend the functionality to suit your specific requirements.

Example:

```javascript
document.getElementById('next').addEventListener('click', () => {
  console.log('Navigated to next image');
  // Additional custom logic here
});
```

## Integration with Other Libraries or Frameworks
You can integrate this slideshow library with other JavaScript libraries or frameworks to enhance its functionality or to create a more comprehensive solution. For instance, you could integrate it with a UI library to create custom controls or with a data fetching library to load images from an API.

Example using Axios to fetch image URLs:
```javascript
axios.get('/api/images').then(response => {
defaultOptions.imageNames = response.data.images;
initializeSlideshow(defaultOptions);
});
```

## Best Practices for Deployment
When deploying an application using this slideshow library, ensure that you:

Minify the JavaScript and CSS files to reduce load times.
Utilize browser caching for images and library assets to enhance performance.
Test the slideshow on various devices and browsers to ensure compatibility and responsiveness.
By following these guidelines and utilizing the library's features, you can create an interactive and engaging image slideshow for your web applications that is both performant and adaptable to your needs.

# Contributing to the Library

We welcome contributions to this library! Whether you're fixing a bug, adding a new feature, or improving the documentation, your help is appreciated. Please follow the steps below to contribute:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone Locally**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/slideshow-library.git
	   ```

3. **Create a New Branch:** Create a new branch for your feature or fix.

   ```bash
	git checkout -b feature/your-new-feature
	```

4. **Make Your Changes:** Implement your feature or fix, adhering to the coding standards and guidelines of the project.

5. **Write Tests:** If applicable, write tests for your changes to ensure reliability and maintainability.

6. **Run Tests:** Ensure that all tests pass and that your changes do not introduce any new issues.

7. **Document Your Changes:** Update the README.md or any relevant documentation to reflect your changes or additions.

8. **Submit a Pull Request:** Push your changes to your fork and submit a pull request to the main repository.

   ```bash
	git push origin feature/your-new-feature
   	```
   
9. **Code Review:** Wait for the code review and address any feedback provided by the project maintainers.

## Getting Help
If you encounter any issues or have questions about using or contributing to the library, feel free to open an issue on the GitHub repository. We aim to be responsive and help resolve queries and address feedback efficiently.

## License
This library is released under Apache 2.0, which means it's free for personal and commercial use with attribution required. Please review the license terms before using or contributing to the library.

Thank you for considering contributing to this project. Your efforts help improve the tool and benefit the user community.