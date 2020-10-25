import "./src/scss/style.scss";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `🔈 Privo Proxy website has been updated. ` +
      `Would you like to reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
