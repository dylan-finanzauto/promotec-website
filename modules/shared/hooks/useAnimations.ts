import { useEffect } from "react";

export const useAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const observeFadeElements = (root: ParentNode = document) => {
      const elements = root.querySelectorAll('[class*="fade-"], [class*="zoom-"]');
      elements.forEach(el => observer.observe(el));
    };

    observeFadeElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[class*="fade-"], [class*="zoom-"]')) {
            observer.observe(node);
          }
          observeFadeElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

}
