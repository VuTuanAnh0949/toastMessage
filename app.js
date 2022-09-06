function toast({
  title = '',
  message = '',
  type = 'info',
  duration = 3000
}) {
  const main = document.getElementById('toast');
  if(main){
    const toast = document.createElement('div');
    /* Auto remove toast */
    const autoRemoveId= setTimeout(function() {
    main.removeChild(toast);
  },duration+1000);
  /* Remove toast when clicked */
    toast.onclick = function(e){
     /*  console.log(target) */
     if(e.target.closest('.toast__close')){
      main.removeChild(toast);
      clearTimeout(autoRemoveId);
     }
    };
    const icons = {
      success: 'fa-sharp fa-solid fa-circle-check',
      info: 'fa-solid fa-info',
      waring:'fa-sharp fa-solid fa-circle-exclamation',
      error: 'class="fa-solid fa-circle-exclamation'
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast",`toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear  1s ${delay}s forwards`;
    toast.innerHTML = ` 
    <div class="toast__icon">
    <i class="fa-sharp fa-solid fa-circle-check"></i>
  </div>
  <div class="toast__body">
    <h3 class="toast__title">${title}</h3>
    <p class="toast__msg">
      ${message}
    </p>
  </div>
  <div class="toast__close">
    <i class="fa-sharp fa-solid fa-circle-xmark"></i>
  </div>
  `;
  main.appendChild(toast);
 
}
}