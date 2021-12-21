<script setup>
import { inject } from 'vue'

const imagePath = inject('vueUswds.imagePath', '/assets/img')
const prefixSeparator = inject('vueUswds.prefixSeparator', ':')
const gridNamespace = inject('vueUswds.gridNamespace', 'grid-')
</script>

<template>
  <div :class="`${gridNamespace}row ${gridNamespace}gap-lg`">
    <div
      :class="`usa-banner__guidance tablet${prefixSeparator}${gridNamespace}col-6`"
    >
      <slot name="tldIcon">
        <img
          class="usa-banner__icon usa-media-block__img"
          :src="`${imagePath}/icon-dot-gov.svg`"
          role="img"
          alt=""
          aria-hidden="true"
        />
      </slot>

      <div class="usa-media-block__body">
        <slot name="tldDescription">
          <p>
            <strong>Official websites use .gov</strong>
            <br />
            A <strong>.gov</strong> website belongs to an official government
            organization in the United States.
          </p>
        </slot>
      </div>
    </div>
    <div
      :class="`usa-banner__guidance tablet${prefixSeparator}${gridNamespace}col-6`"
    >
      <slot name="httpsIcon">
        <img
          class="usa-banner__icon usa-media-block__img"
          :src="`${imagePath}/icon-https.svg`"
          role="img"
          alt=""
          aria-hidden="true"
        />
      </slot>
      <div class="usa-media-block__body">
        <slot name="httpsDescription">
          <p>
            <strong>Secure .gov websites use HTTPS</strong>
            <br />
            A <strong>lock</strong> (
            <span class="icon-lock"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="64"
                viewBox="0 0 52 64"
                class="usa-banner__lock-image"
                role="img"
                aria-labelledby="banner-lock-title-default banner-lock-description-default"
                focusable="false"
              >
                <title id="banner-lock-title-default">Lock</title>
                <desc id="banner-lock-description-default">
                  A locked padlock
                </desc>
                <path
                  fill="#000000"
                  fill-rule="evenodd"
                  d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                ></path></svg
            ></span>
            ) or <strong>https://</strong> means you've safely connected to the
            .gov website. Share sensitive information only on official, secure
            websites.
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>
