type GtagEvent = {
  action: string;
  params: Record<string, string | number>;
};

function sendEvent({ action, params }: GtagEvent) {
  if (typeof window !== "undefined" && "gtag" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", action, params);
  }
}

export function trackCTAClick(
  persona: "marca" | "empresario" | "atleta",
  location: "hero" | "final"
) {
  sendEvent({
    action: "cta_click",
    params: { persona, location },
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  sendEvent({
    action: "scroll_depth",
    params: { percent_scrolled: percent },
  });
}

export function trackAthleteModalOpen(name: string) {
  sendEvent({
    action: "athlete_modal_open",
    params: { athlete_name: name },
  });
}

export function trackFAQExpand(index: number) {
  sendEvent({
    action: "faq_expand",
    params: { question_index: index },
  });
}
