<script setup>
import { inject, useSlots } from 'vue'
import {
  PREFIX_SEPARATOR,
  GRID_NAMESPACE,
  IMAGE_PATH,
} from '@/utils/constants.js'

const slots = useSlots()

if (slots?.tldIcon) {
  console.warn(`The 'tldIcon' slot is deprecated, use 'tld-icon' instead.`)
}

if (slots?.tldDescription) {
  console.warn(
    `The 'tldDescription' slot is deprecated, use 'tld-description' instead.`
  )
}

if (slots?.httpsIcon) {
  console.warn(`The 'httpsIcon' slot is deprecated, use 'https-icon' instead.`)
}

if (slots?.httpsDescription) {
  console.warn(
    `The 'httpsDescription' slot is deprecated, use 'https-description' instead.`
  )
}

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)
const imagePath = inject('vueUswds.imagePath', IMAGE_PATH)
</script>

<template>
  <div :class="`${gridNamespace}row ${gridNamespace}gap-lg`">
    <div
      :class="`usa-banner__guidance tablet${prefixSeparator}${gridNamespace}col-6`"
    >
      <slot v-if="$slots['tld-icon']" name="tld-icon"></slot>
      <!--
      	@slot tldIcon
    		@deprecated Use the `tld-icon` slot instead.
    	-->
      <slot v-else-if="$slots.tldIcon" name="tldIcon"></slot>
      <template v-else>
        <img
          class="usa-banner__icon usa-media-block__img"
          :src="`${imagePath}/icon-dot-gov.svg`"
          role="img"
          alt=""
          aria-hidden="true"
        />
      </template>
      <div class="usa-media-block__body">
        <slot v-if="$slots['tld-description']" name="tld-description"></slot>
        <!--
        	@slot tldDescription
      		@deprecated Use the `tld-description` slot instead.
      	-->
        <slot v-else-if="$slots.tldDescription" name="tldDescription"></slot>
        <template v-else>
          <p>
            <strong>Official websites use .gov</strong>
            <br />
            A <strong>.gov</strong> website belongs to an official government
            organization in the United States.
          </p>
        </template>
      </div>
    </div>
    <div
      :class="`usa-banner__guidance tablet${prefixSeparator}${gridNamespace}col-6`"
    >
      <slot v-if="$slots['https-icon']" name="https-icon"></slot>
      <!--
      	@slot httpsIcon
    		@deprecated Use the `https-icon` slot instead.
    	-->
      <slot v-else-if="$slots.httpsIcon" name="httpsIcon"></slot>
      <template v-else>
        <img
          class="usa-banner__icon usa-media-block__img"
          :src="`${imagePath}/icon-https.svg`"
          role="img"
          alt=""
          aria-hidden="true"
        />
      </template>
      <div class="usa-media-block__body">
        <slot
          v-if="$slots['https-description']"
          name="https-description"
        ></slot>
        <!--
        	@slot httpsDescription
      		@deprecated Use the `https-description` slot instead.
      	-->
        <slot
          v-else-if="$slots.httpsDescription"
          name="httpsDescription"
        ></slot>
        <template v-else>
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
                aria-labelledby="banner-lock-description"
                focusable="false"
              >
                <title id="banner-lock-title">Lock</title>
                <desc id="banner-lock-description">Locked padlock icon</desc>
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
        </template>
      </div>
    </div>
  </div>
</template>
