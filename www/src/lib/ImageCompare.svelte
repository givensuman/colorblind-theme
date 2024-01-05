<script lang="ts">
    /**
     * src attribute of the left HTMLImageElement
     */
    export let imageLeftSrc = "";
    /**
     * alt text for the left image
     */
    export let imageLeftAlt = "";
    /**
     * src attribute of the right HTMLImageElement
     */
    export let imageRightSrc = "";
    /**
     * alt text for the left image
     */
    export let imageRightAlt = "";
  
    // make sure this matches the default value attribute in the markup
    let sliderPosition: number = 50;
    let animationFrame: number | null = null;
  
    function handleInput(e: Event) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
  
      animationFrame = requestAnimationFrame(() => {
        sliderPosition = (e.target as HTMLInputElement).valueAsNumber;
      });
    }
  
    function handleClick(e: Event) {
      (e.target as HTMLInputElement).focus();
    }
  </script>
  
  <div
    class="svelte-compare-image-container"
    style="--slider-position: {sliderPosition}%;"
    data-testid="svelte-compare-image"
  >
    <img src={imageLeftSrc} alt={imageLeftAlt} class="left-img" />
    <img src={imageRightSrc} alt={imageRightAlt} class="right-img" />
  
    <label>
      <span class="visually-hidden">
        <slot name="slider-label">
          Set the visibility of one image over the other. 0 is full visibility of
          the second image and 100 is full visibility of the first image. Any
          amount in-between is a left/right cutoff at the percentage of the
          slider.
        </slot>
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        on:input={handleInput}
        on:change={handleInput}
        on:click={handleClick}
      />
    </label>
  </div>
  
  <style>
    .svelte-compare-image-container {
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }
  
    .svelte-compare-image-container:focus-within {
      outline: auto 4px rgba(59, 153, 252, 0.7);
      outline: auto 4px Highlight;
      outline: auto 4px -moz-mac-focusring;
      outline: auto 4px -webkit-focus-ring-color;
    }
  
    img {
      display: block;
      height: auto;
      width: 100%;
      margin: 0;
    }
  
    .left-img {
      clip-path: polygon(
        0 0,
        var(--slider-position) 0,
        var(--slider-position) 100%,
        0 100%
      );
    }
  
    .right-img {
      position: absolute;
      top: 0;
      clip-path: polygon(
        var(--slider-position) 0,
        100% 0,
        100% 100%,
        var(--slider-position) 100%
      );
    }
  
    .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  
    label {
      position: absolute;
      display: flex;
      align-items: stretch;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  
    label::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--slider-position) - var(--slider-width, 0.125rem) / 2);
      width: var(--slider-width, 0.125rem);
      background: var(--slider-color, #ffffff);
      pointer-events: none;
    }
  
    input[type="range"] {
      /*
       * current styles are a little wonky on Firefox, but fixing there breaks Safari/Chromium
       * the issue is only really noticeable with large --handle-border-width
       * fix for Firefox:
       * calc(var(--handle-size, 2.5rem) + (var(--handle-border-width, 0.125rem) * 2))
       */
      position: relative;
      cursor: col-resize;
      margin: 0 calc(var(--handle-size, 2.5rem) / -2);
      width: calc(100% + var(--handle-size, 2.5rem));
      padding: 0;
      border-radius: 0;
      appearance: none;
      -webkit-appearance: none;
      background: none;
      border: none;
    }
  
    input[type="range"]::-moz-range-thumb {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--handle-background-color, rgba(0, 0, 0, 0.6));
      background-image: var(
        --handle-background-image,
        url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
      );
      background-size: 80%;
      background-position: center center;
      background-repeat: no-repeat;
      border: var(--handle-border-width, 0.125rem) solid
        var(--slider-color, #ffffff);
      border-radius: 100%;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      color: var(--slider-color, #ffffff);
      width: var(--handle-size, 2.5rem);
      height: var(--handle-size, 2.5rem);
    }
  
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--handle-background-color, rgba(0, 0, 0, 0.6));
      background-image: var(
        --handle-background-image,
        url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
      );
      background-size: 80%;
      background-position: center center;
      background-repeat: no-repeat;
      border: var(--handle-border-width, 0.125rem) solid
        var(--slider-color, #ffffff);
      border-radius: 100%;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      color: var(--slider-color, #ffffff);
      width: var(--handle-size, 2.5rem);
      height: var(--handle-size, 2.5rem);
    }
  </style>