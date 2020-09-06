function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
  const sliderContainer = document.querySelector(container),
  sliderWrapper = document.querySelector(wrapper),
  sliderInner = sliderContainer.querySelector(field),
  slides = sliderContainer.querySelectorAll(slide),
  prev = sliderContainer.querySelector(prevArrow),
  next = sliderContainer.querySelector(nextArrow),
  width = window.getComputedStyle(sliderWrapper).width;
  let slideIndex = 1,
    offset = 0;

  sliderContainer.style.position = 'relative';

  sliderInner.style.width = 100 * slides.length + '%';
  sliderInner.style.display = 'flex';
  sliderWrapper.style.overflow = 'hidden';
  sliderInner.style.transition = '0.5s all';

  next.addEventListener('click', () => {
  offset += +width.slice(0, width.length - 2)

  if (offset == ((width.slice(0, width.length - 2)) * slides.length)) {
    offset = 0;
  }
  slideIndex += 1;
  sliderInner.style.transform = `translateX(-${offset}px)`;
  });
  prev.addEventListener('click', () => {
    offset -= +width.slice(0, width.length - 2)
    if (offset < 0) {
      offset = width.slice(0, width.length - 2) * (slides.length - 1);
    }

    slideIndex -= 1;

    sliderInner.style.transform = `translateX(-${offset}px)`;
  });
}

export default slider;