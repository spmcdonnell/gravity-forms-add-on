document.addEventListener('DOMContentLoaded', () => {
    // Grab some elements
    let imageWrap = document.querySelector('figure.woocommerce-product-gallery__wrapper');
    let productImages = Array.from(document.querySelector('figure.woocommerce-product-gallery__wrapper').children);
    let dropDown = document.querySelector('.gfield_select');

    // Store product image nodes as an object
    let galleryObject = productImages.reduce((result, item) => {
        let itemImg = item.firstElementChild.firstElementChild;
        let itemAlt = itemImg.alt;

        itemImg.srcset = itemImg.dataset.large_image;
        result[itemAlt] = item;

        return result;
    }, {});

    // Swap out appropriate image on dropdown change 
    dropDown.addEventListener('change', event => {
        if (galleryObject[event.target.value]) {
            galleryObject[event.target.value].remove();
            imageWrap.insertBefore(galleryObject[event.target.value], imageWrap.firstElementChild);
        }
    });
});