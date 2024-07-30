import FormWidget from './FormWidget.svelte';

export function init(options) {
  const { container, config, onSubmit } = options;
  const rootElement = document.getElementById(container);

  if (rootElement) {
    new FormWidget({
      target: rootElement,
      props: { config, onSubmit }
    });
  } else {
    console.error(`Container with id "${container}" not found.`);
  }
}

// window.WidgetSDK = { init };
