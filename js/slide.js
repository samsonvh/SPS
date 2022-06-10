function slideImage(images, toRight) {
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        let classList = image.classList;
        let rightImage, leftImage, nextImage;
        if (classList.contains('center-image')) {
            if (toRight) {
                if (i == images.length - 1) {
                    leftImage = images[i - 1];
                    rightImage = images[0];
                    nextImage = images[1];
                } else {
                    if (i == 0) {
                        leftImage = images[images.length - 1];
                    } else {
                        leftImage = images[i - 1];
                    }
                    rightImage = images[i + 1];
                    if (i + 2 == images.length) {
                        nextImage = images[0];
                    } else {
                        nextImage = images[i + 2];
                    }
                }
                leftImage.classList.remove('left-image');

                image.classList.remove('center-image');
                image.classList.add('left-image');

                rightImage.classList.add('center-image');
                setTimeout(() => {
                    rightImage.classList.remove('right-image');
                    nextImage.classList.add('right-image');
                }, 1500);
            } else {
                if (i == 0) {
                    leftImage = images[images.length - 1];
                    rightImage = images[1];
                    nextImage = images[images.length - 2];
                } else {
                    if (i == images.length - 1) {
                        rightImage = images[0];
                    } else {
                        rightImage = images[i + 1];
                    }
                    leftImage = images[i - 1];
                    if (i - 2 < 0) {
                        nextImage = images[images.length - 1];
                    } else {
                        nextImage = images[i - 2];
                    }
                }

                rightImage.classList.remove('right-image');

                image.classList.add('right-image');
                image.classList.remove('center-image');

                leftImage.classList.add('center-image');
                leftImage.classList.remove('left-image');

                nextImage.classList.add('left-image');
            }
            break;
        }
    }
}