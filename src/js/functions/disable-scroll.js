import vars from '../_vars';

export const disableScroll = () => {
  const pagePosition = window.scrollY;

  vars.htmlEl.style.scrollBehavior = 'none';
  vars.bodyEl.classList.add('dis-scroll');
  vars.bodyEl.dataset.position = pagePosition;
}
