const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) {
       const elems = node.querySelectorAll("[role='button']");
        elems.forEach(e => {
          if (e.textContent.includes("Show")) {
            e.click();
          }
        })
      }
    });
  });
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, config);
