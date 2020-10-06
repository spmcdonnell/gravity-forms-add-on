document.addEventListener('DOMContentLoaded', () => {
    // Grab some elements
    let imageWrap = document.querySelector('figure.woocommerce-product-gallery__wrapper');
    let productImages = Array.from(document.querySelector('figure.woocommerce-product-gallery__wrapper').children);
    let dropDown = document.querySelector('.gfield_select');

    // Store product images 
    let galleryObject = productImages.reduce((result, item) => {
        let itemImg = item.firstElementChild.firstElementChild;
        let itemAlt = itemImg.alt;

        itemImg.srcset = itemImg.dataset.large_image;
        result[itemAlt] = item;

        return result;
    }, {});

    // Swap out appropriate image upon dropdown change event
    dropDown.addEventListener('change', function (event) {
        galleryObject[event.target.value].remove();
        imageWrap.insertBefore(galleryObject[event.target.value], imageWrap.firstElementChild);
    });
});