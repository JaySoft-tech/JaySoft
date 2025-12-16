export const scrollTo = (elementId: string, offset = 100) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(elementId);
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const targetY = Math.max(0, elementTop - offset);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
};
