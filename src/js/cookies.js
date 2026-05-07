export function initCookies() {
  const cookiesBanner = document.querySelector('.cookies-background');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  if (!cookiesBanner) return;

  acceptBtn?.addEventListener('click', () => {
    cookiesBanner.remove();
  });

  declineBtn?.addEventListener('click', () => {
    cookiesBanner.remove();
  });
}
